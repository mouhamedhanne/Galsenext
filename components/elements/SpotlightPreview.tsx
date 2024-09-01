import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { LoginButton } from "@/src/features/auth/LoginButton";
import { ArrowUpRight } from "lucide-react";

export function SpotlightPreview() {
  return (
    <div>
      <div
        className="h-[40rem] w-full flex md:items-center md:justify-center bg-home_page
        antialiased bg-grid-white/[0.02] relative overflow-hidden "
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1
            className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            <div className="pb-6">
              {" "}
              Lancez <u className="text-home_secondary">Rapidement</u>
            </div>
            Votre{" "}
            <b className="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="255"
                height="36"
                viewBox="0 0 255 36"
                fill="none"
                className="absolute -bottom-2 left-[-50%] top-5 z-0  inline-block w-[150%] 
            text-home_secondary"
              >
                <path
                  d="M2.99975 17.6351C116.771 12.3405 178.178 12.7036 252 18.0966"
                  stroke="currentColor"
                  stroke-width="5.75696"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span className="uppercase relative z-10">App</span>{" "}
            </b>
            avec Galsenext
          </h1>
          <p className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Accélérez le développement de vos applications avec{" "}
            <span className="font-extrabold">Galsenext</span> , le kit starter
            Next.js intégré à <span className="font-extrabold">Neon</span> 🚀,
            la base de données PostgreSQL serverless. Profitez d'une
            configuration prête à l'emploi pour créer des applications modernes,
            évolutives, et performantes.
          </p>
          <div className="flex pt-10 justify-center items-center space-x-4">
            <div>
              <Link
                href="https://galsenext-docs.vercel.app/docs"
                target="_blank"
                className="inline-flex items-center text-white justify-center space-x-2 whitespace-nowrap
              rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
              disabled:opacity-50 border border-input border-home_secondary bg-home_page
            hover:bg-home_secondary hover:text-white h-11 rounded-md px-8"
              >
                Documentation <ArrowUpRight size="16" />
              </Link>
            </div>
            <div>
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
