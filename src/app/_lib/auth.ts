import NextAuth from "next-auth";
import { ZodError } from "zod";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        const saltRounds = 10;
        const hash = bcrypt.hashSync(credentials.password, saltRounds);

        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email, hash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return user;
      },
    }),
    GitHub,
  ],
  pages: {
    signIn: "/login",
  },
});
