import { prisma } from "@/src/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const FixedPrismaAdapter = PrismaAdapter(prisma) as any;

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: FixedPrismaAdapter,
  theme: {
    logo: "/galsenext.png",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: profile.role ? profile.role : "user",
          emailVerified: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          username: profile.username ? profile.username : "",
          bio: profile.bio ? profile.bio : "",
          link: profile.link ? profile.link : "",
          isOnboarded: false,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.isOnboarded = token.isOnboarded as boolean;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.isOnboarded = user.isOnboarded;
      }

      if (!account) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { isOnboarded: true },
        });
        if (dbUser) {
          token.isOnboarded = dbUser.isOnboarded;
        }
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
