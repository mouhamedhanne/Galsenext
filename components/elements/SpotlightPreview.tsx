import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "../ui/button";
import Link from "next/link";

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
              AiStream <u className="text-home_secondary">Révolutionne</u>
            </div>
            Votre{" "}
            <span className="uppercase bg-home_secondary text-white px-1 py-2">
              {" "}
              Présence
            </span>{" "}
            en Ligne avec l' IA
          </h1>
          <p className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Grâce à notre puissante combinaison de technologie d'intelligence
            artificielle et d'automatisation, nous offrons des solutions
            innovantes pour générer du contenu de qualité, fidéliser votre
            audience et développer votre présence sur les réseaux sociaux 🚀.
          </p>
          <div className="flex pt-10 justify-center items-center space-x-4">
            <div>
              <Link
                href=""
                className="inline-flex items-center text-white justify-center whitespace-nowrap
              rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
              disabled:opacity-50 border border-input border-home_secondary bg-home_page
            hover:bg-home_secondary hover:text-white h-11 rounded-md px-8"
              >
                Demander un devis
              </Link>
            </div>
            <div>
              <Link
                href=""
                className="bg-home_secondary hover:bg-home_secondary/90 h-11"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
