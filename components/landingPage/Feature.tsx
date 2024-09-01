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
          Ready-to-Use and Powerful Tools
        </div>
        <p
          className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto px-2 lg:px-0"
        >
          Maximize your efficiency with Galsenext: Next.js for optimal
          performance, NextAuth and Prisma for robust authentication, and Neon
          for seamless scalability.
        </p>
      </div>
      <CardHoverEffect />
    </div>
  );
}
