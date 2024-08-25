import { getAuthSession } from "@/src/lib/auth";
import { LoginButton } from "@/src/features/auth/LoginButton";
import { LoggedInButton } from "@/src/features/auth/LoggedInButton";

export type AuthButtonProps = {};

export const AuthButton = async (props: AuthButtonProps) => {
  const session = await getAuthSession();

  const user = session?.user;

  if (!user) {
    return <LoginButton />;
  }

  return <LoggedInButton user={user} />;
};
