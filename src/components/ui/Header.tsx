import Image from "next/image";
import GalsenextLogo from "@/public/galsenext.svg";
import { ThemeToggle } from "../ThemeToggle";
import { getAuthSession } from "@/src/lib/auth";
import { User } from "@/src/features/auth/User";

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <Image
          src={GalsenextLogo}
          alt="Galsenext Logo"
          width="60"
          height="60"
          className="mr-auto"
        />
        {session?.user ? <User /> : null}
        <ThemeToggle />
      </div>
    </header>
  );
};
