'use server'
import * as z from 'zod' 
import { ConfirmEmailSchema } from "@/schemas/auth/ConfirmEmailSchema"
import { sendPasswordResetEmail } from '@/lib/mailing'
import { generatePasswordResetToken } from '@/lib/tokens'
import { getUserByEmail } from '@/actions/services/get-user-by-email'

export const SendEmailResetPassword = async (values: z.infer<typeof ConfirmEmailSchema>) => {
   try {
    const validatedFields = ConfirmEmailSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Email no válido!" };
    }
  
    const { email } = validatedFields.data;
  
    const existingUser = await getUserByEmail(email);
  
      if (!existingUser) {
          return { error: "Email no encontrado!" };
      }
  
      const passwordResetToken = await generatePasswordResetToken(email);
      const result = await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);

      if (!result) {
          return { error: "Error al enviar el email!" };
      }
  
      return { success: "Email enviado!" };
   } catch (error) {
        return { error: 'Ha ocurrido un error. vuelve a intentarlo' };
    
   }
}