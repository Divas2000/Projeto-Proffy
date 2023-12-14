/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  /**
   * @see https://github.com/prisma/prisma/issues/16117
   * @ts-ignore
   */
  adapter: PrismaAdapter(prisma as any),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "text",
          placeholder: "Your e-mail",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials): Promise<any> {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !credentials?.password) {
          throw new Error("E-mail e/ou senha invalidos");
        }

        const matchPassword = await compare(
          credentials.password,
          user.hashedPassword,
        );

        if (!matchPassword) throw new Error("E-mail e/ou senha invalidos");

        return {
          ...user,
          name: `${user.name} ${user.lastName}`,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;

      return session;
    },
  },
};
