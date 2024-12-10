
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/db-prisma";
 import { getPasswordResetTokenByEmail } from "@/actions/services/get-password-reset-token-by-email";
 import { getVerificationTokenByEmail } from "@/actions/services/verification-token-by-email";
 import { getTwoFactorTokenByEmail } from "@/actions/services/get-twofactor-token-by-email";

export const generatePasswordResetToken = async (email: string) => {
   const token = uuidv4();
   const expires = new Date(new Date().getTime() + 3600 * 1000);

   const existingToken = await getPasswordResetTokenByEmail(email);
   if (existingToken) {
     await prisma.passwordresettoken.delete({
       where: {
         id: existingToken.id,
       },
     });
   }
   const passwordResetToken = await prisma.passwordresettoken.create({
     data: {
       email,
       token,
       expires,
     },
   });

  return passwordResetToken;
  
}

export const generateVerificationToken = async (email: string) => {
   const token = uuidv4();
   const expires = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);

   const existingToken = await getVerificationTokenByEmail(email);
   if (existingToken) {
     await prisma.verificationtoken.delete({
       where: {
         id: existingToken.id,
       },
     });
   }
   const verificationToken = await prisma.verificationtoken.create({
     data: {
       email,
       token,
       expires,
     },
   });

  return verificationToken;
};


export const generateTwoFactorToken = async (email: string) => {
  const token = numeroRandom().toString();

  const expires = new Date(new Date().getTime() + 5*60 * 1000);

  const existingToken = await getTwoFactorTokenByEmail(email);
  if (existingToken) {
    await prisma.twofactortoken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const twoFactorToken = await prisma.twofactortoken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFactorToken;
}


function numeroRandom(): number {
  return Math.floor(100000 + Math.random() * 900000);
}