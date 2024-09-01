import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="bg-home_page text-white">
      <div className="m-auto px-4 py-20 lg:py-28 max-w-6xl flex max-lg:flex-col">
        <div className="flex-1 space-y-2 mb-4 lg:mb-0">
          <p className="font-extrabold uppercase text-home_secondary">FAQ</p>
          <h3
            className="scroll-m-20 font-caption font-semibold tracking-tight 
            transition-colors first:mt-0 text-5xl "
          >
            Questions fréquentes
          </h3>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Qu'est-ce qui différencie AiStream des autres agences de
                marketing sur les réseaux sociaux ?
              </AccordionTrigger>
              <AccordionContent>
                AiStream se démarque par son utilisation innovante de
                l'intelligence artificielle pour automatiser et optimiser de
                nombreuses tâches liées aux réseaux sociaux. Notre combinaison
                unique d'expertise humaine et de puissance technologique IA nous
                permet d'offrir des solutions sur-mesure, performantes et
                évolutives à nos clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quels types de services AiStream propose-t-il ?
              </AccordionTrigger>
              <AccordionContent>
                Nous proposons une gamme complète de services alimentés par l'IA
                comme la planification et publication automatisée de contenus,
                nos solutions couvrent les principales plateformes telles que
                Facebook, Twitter, LinkedIn et bientôt Instagram.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Comment AiStream garantit-il la qualité et la pertinence du
                contenu généré par l'IA ?
              </AccordionTrigger>
              <AccordionContent>
                Nos modèles d'IA sont entraînés par notre équipe d'experts avec
                des données de qualité. De plus, chaque contenu généré est
                supervisé et affiné par nos spécialistes marketing avant
                publication pour assurer sa cohérence avec la voix de la marque
                et les objectifs visés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Quels types de clients AiStream accompagne-t-il ?
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons avec des entreprises de toutes tailles, des
                start-ups aux grandes entreprises, opérant dans divers secteurs
                d'activité. Nos solutions d'automatisation IA pour les réseaux
                sociaux s'adaptent aux besoins spécifiques de chaque client.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Les services d'AiStream sont-ils évolutifs et personnalisables ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, l'un des principaux avantages d'AiStream est la flexibilité
                et l'évolutivité de nos offres. Nous créons des solutions
                sur-mesure, extensibles, qui s'ajusteront aux changements de
                stratégie et aux objectifs futurs de votre entreprise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                AiStream respecte-t-il la vie privée et la réglementation sur
                les données ?
              </AccordionTrigger>
              <AccordionContent>
                Absolument, la confidentialité des données est notre priorité.
                Nous nous conformons strictement aux réglementations en vigueur
                comme le RGPD. Aucune donnée client n'est partagée ou utilisée
                sans autorisation préalable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
