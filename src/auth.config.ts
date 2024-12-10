
import type { NextAuthConfig } from "next-auth"; 
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { LoginSchema } from "@/schemas/auth/LoginSchema";
import { getUserByEmail } from "@/actions/services/get-user-by-email";

export default {
  providers: [
    
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null as any;
      }
    })
  ],
} satisfies NextAuthConfig