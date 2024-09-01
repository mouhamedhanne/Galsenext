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
    title: "Génération Automatique de Contenu",
    description:
      "AiStream utilise des algorithmes d'intelligence artificielle avancés pour générer automatiquement du contenu personnalisé et captivant pour vos réseaux sociaux, vous permettant d'économiser du temps et d'obtenir des résultats de qualité supérieure.",
  },
  {
    title: "Planification Intelligente des Publications",
    description:
      "Planifiez vos publications à l'avance avec AiStream, en tenant compte des moments les plus propices pour maximiser votre visibilité et votre engagement, tout en automatisant entièrement votre calendrier éditorial pour une diffusion au bon moment, à chaque fois.",
  },
  {
    title: "Personnalisation Avancée",
    description:
      "Avec AiStream, personnalisez votre contenu pour chaque groupe cible en segmentant votre audience et en adaptant votre message à leurs préférences et comportements, renforçant ainsi votre relation client avec une expérience personnalisée et pertinente.",
  },
];
