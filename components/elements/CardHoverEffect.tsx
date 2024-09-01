import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Optimisé pour Next.js",
    description:
      "Profitez de la puissance et de la flexibilité de Next.js pour développer votre application avec un rendu côté serveur performant et une navigation fluide. Concentrez-vous sur vos fonctionnalités, Galsenext prend en charge la configuration initiale pour vous faire gagner un temps précieux.",
  },
  {
    title: "Authentification Prête à l'Emploi avec NextAuth et Prisma",
    description:
      "Gérez vos utilisateurs avec un système complet et flexible, prêt à l'emploi, qui vous permet de vous concentrer sur l'essentiel : le développement de vos fonctionnalités, tout en garantissant la sécurité de votre application.",
  },
  {
    title: "Déploiement Instantané avec Neon",
    description:
      "Démarrez rapidement avec une intégration transparente de Neon, la base de données PostgreSQL serverless. Bénéficiez d'une scalabilité automatique et de performances optimisées dès la mise en production.",
  },
];
