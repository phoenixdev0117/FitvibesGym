import NextAuth from "next-auth";
// import google from "next-auth/providers/google";
// import instagram from "next-auth/providers/instagram";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/lib/db-prisma";
import { getUserById } from "@/actions/services/get-user-by-id";
import { getTwoFactorConfirmationByUserId } from './actions/services/get-twofactor-confirmation-by-userId';
import { getAccountByUserId } from './actions/services/get-acount-by-userid';

import { LoginSchema } from "@/schemas/auth/LoginSchema";
import { getUserByEmail } from "@/actions/services/get-user-by-email";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  providers: [

    // google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // instagram({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    // }),
    Credentials({
      async authorize(credentials) {
        
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          );

          if (passwordsMatch) return user;
        }
        
        
        return null as any;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }:any) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }:any) { 
      if (account?.provider !== "credentials") return true; 

      const existingUser = await getUserById(user.id!); 
 
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) return false;
 
        await prisma.twofactorconfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }
      
      return true;
    },
    async jwt({ token }:any) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.roleId; 
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
    async session({ token, session }: any) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      } 
      if (token.role && session.user) {
        session.user.roleId = token.role as number;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      
      return session;
    },
  },
  adapter: PrismaAdapter(prisma) as any,
  session: { strategy: "jwt" },
});
