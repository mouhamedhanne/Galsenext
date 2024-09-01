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
    title: "Optimized for Next.js",
    description:
      "Leverage the power and flexibility of Next.js to build your application with efficient server-side rendering and smooth navigation. Focus on your features while Galsenext handles the initial setup to save you valuable time.",
  },
  {
    title: "Ready-to-Use Authentication with NextAuth and Prisma",
    description:
      "Manage your users with a complete and flexible system that's ready to use, allowing you to focus on core features while ensuring your application's security.",
  },
  {
    title: "Instant Deployment with Neon",
    description:
      "Start fast with Neon, the serverless PostgreSQL database. Benefit from automatic scalability and optimized performance from the moment you go live.",
  },
];
