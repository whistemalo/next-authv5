import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { db } from "./lib/db"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
    adapter: PrismAdapter(db),
    session: { strategy: "jwt" },
    ...authCon
})