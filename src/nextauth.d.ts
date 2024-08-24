import type { DefaultSession } from "next-auth";
import { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession["user"] & {
      /** The user's id address. */
      id?: string;
      role?: string;
      isOnboarded: boolean;
    };
  }

  interface User extends PrismaUser {
    role: string;
    isOnboarded: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}