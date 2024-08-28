import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/src/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const {  username,
    bio, } = await request.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        username,
        bio,
        isOnboarded: true,
      },
    });

    return NextResponse.json({
      message: "Onboarding réussi",
      user: updatedUser,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'onboarding" },
      { status: 500 }
    );
  }
}
