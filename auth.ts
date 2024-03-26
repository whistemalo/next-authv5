import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      console.log({ session, token });

      if (token.sub && session.user)  {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token }) {
      token.customProperty = "bar";
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      token.role = existingUser?.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
