"use server";

import { AuthError } from "next-auth";
import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas/auth/LoginSchema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/lib/tokens";
import { sendTwoFactorTokenEmail, sendVerificationEmail } from "@/lib/mailing";
import prisma from "@/lib/db-prisma";
import { v2 as cloudinary } from "cloudinary";
import { getUserByEmail } from "@/actions/services/get-user-by-email";
import { getVerificationTokenByEmail } from "@/actions/services/verification-token-by-email";
import { getTwoFactorTokenByEmail } from "@/actions/services/get-twofactor-token-by-email";
import { getTwoFactorConfirmationByUserId } from "@/actions/services/get-twofactor-confirmation-by-userId";
import bcryptjs from 'bcryptjs';

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const loginAction = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl: string | null
) => {
  // Validar campos de entrada
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Campos no válidos!" };
  }

  const { email, password, code } = validatedFields.data;

  // Obtener usuario por email
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Credenciales incorrectas!" };
  }

  // Verificar si el email está confirmado
  if (!existingUser.emailVerified) {
    const existingToken = await getVerificationTokenByEmail(existingUser.email);

    if (existingToken && new Date(existingToken.expires) > new Date()) {
      return { success: "Email de confirmación pendiente!" };
    }

    const verificationToken = await generateVerificationToken(existingUser.email);
    const result = await sendVerificationEmail(verificationToken.email, verificationToken.token);
    if (!result) {
      return { error: "Error al enviar el correo de verificación!" };
    }

    return { success: "Email de confirmación enviado!" };
  }

  // Verificar contraseña
  const passwordsMatch = await bcryptjs.compare(password, existingUser.password);
  if (!passwordsMatch) {
    return { error: "Credenciales no válidas!" };
  }

  // Manejo de autenticación de dos factores
  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
      if (!twoFactorToken) {
        return { error: "Código no válido!" };
      }

      if (twoFactorToken.token !== code) {
        return { error: "Código no válido!" };
      }

      if (new Date(twoFactorToken.expires) < new Date()) {
        return { error: "Código expirado!" };
      }

      await prisma.twofactortoken.delete({ where: { id: twoFactorToken.id } });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
      if (existingConfirmation) {
        await prisma.twofactorconfirmation.delete({ where: { id: existingConfirmation.id } });
      }

      await prisma.twofactorconfirmation.create({ data: { userId: existingUser.id } });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      const result = await sendTwoFactorTokenEmail(existingUser.email, twoFactorToken.token);
      if (!result) {
        return { error: "Error al enviar el email con el código de autenticación!" };
      }
      return { twoFactor: true };
    }
  }

  // Intentar iniciar sesión
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciales no válidas!" };
        default:
          return { error: "Ha ocurrido un error!" };
      }
    }
    throw error;
  }
};
