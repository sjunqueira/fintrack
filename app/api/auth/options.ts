import GitHubProvider from "next-auth/providers/github";
import { NextAuthConfig } from "next-auth";

export const authOptions: NextAuthConfig = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // sem banco
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        console.log(account);
        console.log(user);
        console.log(token);
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session);
      console.log(token);

      session.user = token.user;
      session.sessionToken = token.accessToken;
      return session;
    },
  },
};
