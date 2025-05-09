import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // ou outro provider
import { authOptions } from "../options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
