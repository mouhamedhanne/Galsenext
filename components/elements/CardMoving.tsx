"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function CardMoving() {
  return (
    <div className="h-[20rem] bg-home_page flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Galsenext made setting up my Next.js app a breeze. The integration with Neon is seamless, and the Prisma authentication is top-notch. Highly recommend!",
    name: "Alex Johnson",
    title: "Web Developer",
  },
  {
    quote:
      "Incredible starter kit! The combination of Next.js and Neon really speeds up development. Plus, the pre-configured auth with NextAuth and Prisma is a lifesaver.",
    name: "Emily Davis",
    title: "Web Developer",
  },
  {
    quote:
      "Fantastic tool for rapid app development. Galsenext's integration with Neon and its NextAuth/Prisma setup saved me hours of setup time.",
    name: "Jessica Brown",
    title: "Web Developer",
  },
  {
    quote:
      "Galsenext simplified my workflow with its Next.js setup and Neon integration. The ready-to-use authentication system is robust and easy to implement.",
    name: "Michael Lee",
    title: "Web Developer",
  },
];
