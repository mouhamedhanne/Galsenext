"use client";

import Container from "@/components/elements/Container";
import { Logo } from "@/components/elements/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/src/components/ThemeToggle";
import { LoginButton } from "@/src/features/auth/LoginButton";
import { LocaleSelect } from "@/app/[locale]/LocaleSelect";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Container isLandingPage>
      <header>
        <nav className="bg-home_page ">
          <div className="flex justify-between items-center mx-7">
            <div className="flex items-center space-x-8 ">
              <div className="">
                <Logo width="60" />
              </div>
              {/*Menu for wide screens */}
              <div className="hidden md:flex items-center  border-l border-white pl-4 space-x-5">
                <Link
                  href="/"
                  className={`text-white hover:text-home_secondary ${
                    pathname === "/" ? "font-bold text-[#FF4F01] " : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="https://galsenext-docs.vercel.app/docs"
                  target="_blank"
                  className={`text-white hover:text-home_secondary `}
                >
                  Tarifs
                </Link>
              </div>
              {/* Menu for mobile screens */}
            </div>

            <div className="md:hidden ">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white "
              >
                {!menuOpen ? (
                  <Menu size="24" className="h-6 " />
                ) : (
                  <X size="24" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-center space-x-3 md:block hidden">
              <Link href="/">
                <Button className="bg-home_secondary hover:bg-home_secondary/90 h-11">
                  Demo
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-home_page block py-4 px-8 space-y-4 ">
            <div>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`text-white hover:text-home_secondary ${
                  pathname === "/" ? "font-bold text-[#FF4F01] " : ""
                }`}
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                href="https://galsenext-docs.vercel.app/docs"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className={`text-white hover:text-home_secondary `}
              >
                Contact
              </Link>
            </div>
            <div>
              <Button className="bg-home_secondary hover:bg-home_secondary/90 h-11">
                Demo
              </Button>
            </div>
          </div>
        )}
      </header>
    </Container>
  );
}

{
  /**
   *  <header>
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
              <LocaleSelect />
              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>
   */
}
