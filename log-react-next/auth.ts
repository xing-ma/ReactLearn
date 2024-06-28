'use server';
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        accessToken?: string
    }

    interface User {
        accessToken?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string
    }
}

const config = {
    pages: {
        signIn: "./login"
    },
    providers: [
        Credentials({
            authorize(credentials) {
                console.log("credentials:", credentials);

                return {
                    id: `${credentials.userId}`,
                    name: `${credentials.userName}`,
                    accessToken: `${credentials.accessToken}`
                };
            },
            credentials: {
                "userId": {},
                "userName": {},
                "accessToken": {}
            }
        })
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            console.log("callbacks-authorized-nextUrl", nextUrl);
            console.log("callbacks-authorized-auth", auth);
            var isLogined = !!auth?.user;
            console.log("isLogined:", isLogined);
            return isLogined;
        },
        jwt({ token, trigger, session, account, user }) {
            console.log("callbacks-jwt-user", user);
            console.log("callbacks-jwt-token", token);
            console.log("callbacks-jwt-trigger:", trigger);

            if (user?.accessToken) {
                token.accessToken = user.accessToken
            }
            return token;
        },
        async session({ session, token, user }) {
            if (token?.accessToken) {
                session.accessToken = token.accessToken
            }

            console.log("callbacks-session-user", user);
            console.log("callbacks-session-token", token);
            return session;
        },
    },
    secret: "TrB5FcO2Ane/E1cqa8wYkVS1L2yo9qdk76LC4gHQzHs="
} satisfies NextAuthConfig

export const { auth, signIn, signOut } = NextAuth(config);
