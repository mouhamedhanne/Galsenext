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
            Frequently Asked Questions
          </h3>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Galsenext ?</AccordionTrigger>
              <AccordionContent>
                Galsenext is a Next.js starter kit that integrates NextAuth,
                Prisma, and Neon to simplify the development of modern web
                applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does Galsenext handle the database ?
              </AccordionTrigger>
              <AccordionContent>
                Galsenext uses Neon, a serverless PostgreSQL database, for
                simple and scalable data management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How is NextAuth and Prisma configured ?
              </AccordionTrigger>
              <AccordionContent>
                Configuration is ready-to-use with NextAuth for authentication
                and Prisma for database management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I customize the themes ?</AccordionTrigger>
              <AccordionContent>
                Yes, Galsenext allows easy customization of themes and landing
                pages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What are the prerequisites for using Galsenext ?
              </AccordionTrigger>
              <AccordionContent>
                You need Node.js and a Neon account. Clone the repository,
                install dependencies, configure .env, and run the application.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
