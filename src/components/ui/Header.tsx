import Image from "next/image";
import GalsenextLogo from "@/public/galsenext.svg";
import { ThemeToggle } from "../ThemeToggle";
import { getAuthSession } from "@/src/lib/auth";
import { UserNav } from "@/src/features/auth/User";
import { LocaleSelect } from "@/app/[locale]/LocaleSelect";

export const Header = async () => {
  const session = await getAuthSession();

  const user = session?.user;

  if (!user) {
    throw new Error("No session found");
  }

  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1 ">
        <Image
          src={GalsenextLogo}
          alt="Galsenext Logo"
          width="60"
          height="60"
          className="mr-auto"
        />
        <div className="flex items-center space-x-2">
          {session?.user ? <UserNav user={user} /> : null}
          <ThemeToggle />

          <LocaleSelect />
        </div>
      </div>
    </header>
  );
};
