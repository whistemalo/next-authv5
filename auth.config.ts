import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import bcrypt from "bcryptjs"

import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "./data/user";

export default {
  providers: [Credentials({
    async authorize(credentials){
      const validateFields = await LoginSchema.safeParse(credentials);
      if(validateFields.success){
        const { email, password } = validateFields.data;

        const user = await getUserByEmail(email);
        if(!user || !user.password ) return null;

        const passwordMatch = await bcrypt.compare(password, user.password);

        // If the password matches, return the user object
        if (passwordMatch) {
          return user;
        }
      }
      // If validation fails or the password doesn't match, return null
      return null;
    }
  })]
}satisfies NextAuthConfig