import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Transaction pour supprimer l'utilisateur et ses sessions
    await prisma.$transaction(async (tx) => {
      // Déconnectez toutes les sessions de l'utilisateur
      await tx.session.deleteMany({ where: { userId: session.user.id } });

      // Supprimer l'utilisateur lui-même
      await tx.user.delete({ where: { id: session.user.id } });
    });

    // Enregistrez l'action dans les journaux
    console.log(
      `User ${session.user.id} deleted their account at ${new Date().toISOString()}`
    );

    return new Response(
      JSON.stringify({ message: "Account deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting account:", error);
    return new Response(JSON.stringify({ error: "Error deleting account" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
