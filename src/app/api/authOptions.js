import CredentialsProvider from "next-auth/providers/credentials";
import { Users } from "../private/schema";
import bcrypt from "bcrypt";
import { ConnectDB } from "@/app/private/DbConnections";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await ConnectDB();
          const user = await Users.findOne({ email });
          const matchedPassword = await bcrypt.compare(password, user.password);
          if (!matchedPassword) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("The Error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "login",
  },
};
