import { frontendApi } from "@/api/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { use } from "react";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  jwt:{
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials): Promise<any> {
        console.log("credentials:::::", credentials);
        const response = await frontendApi.loginApi({
          email: credentials!.email,
          password: credentials!.password,
        });
        console.log("response:::", response);
        if (!response.data.success) {
          throw new Error(response.data.message);
        } else {
          console.log("response data:::", response.data.userData);
          return response.data.userData;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.email = user.email; 
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({session, token}) {
        if (token) {
        session.email = token.email ?? "";
        session.accessToken = token.accessToken;
        }
        return session;
    },
  },
};
