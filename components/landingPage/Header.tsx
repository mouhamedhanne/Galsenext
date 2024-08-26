import Container from "@/components/elements/Container";
import { Logo } from "@/components/elements/Logo";
import Link from "next/link";
import { ThemeToggle } from "@/src/components/ThemeToggle";
import { LoginButton } from "@/src/features/auth/LoginButton";

export default function Header() {
  return (
    <Container isLandingPage>
      <header>
        <nav>
          <div className="flex justify-between items-center mt-4">
            <div>
              <Logo width="60" />
            </div>
            <div className="flex items-center hidden lg:block">
              <ul className="flex items-center space-x-5 font-semibold text-[18px]">
                <li>
                  <Link href="/">News</Link>
                </li>
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
                <li>
                  <Link href="/">About US</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-5">
              <LoginButton />
              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
