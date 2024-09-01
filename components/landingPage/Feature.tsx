import { CardHoverEffect } from "../elements/CardHoverEffect";

export default function Feature() {
  return (
    <div className=" bg-home_page">
      <div className="max-w-5xl mx-auto pb-10 -mt-12">
        <div
          className="text-4xl pb-5 md:text-6xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-home_secondary to-neutral-50 bg-opacity-50 mt-20"
        >
          Des Outils Prêts à l'Emploi et Performants
        </div>
        <p
          className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto px-2 lg:px-0"
        >
          Maximisez votre efficacité avec Galsenext : Next.js pour des
          performances optimales, NextAuth et Prisma pour une authentification
          robuste, et Neon pour une scalabilité fluide.
        </p>
      </div>
      <CardHoverEffect />
    </div>
  );
}
