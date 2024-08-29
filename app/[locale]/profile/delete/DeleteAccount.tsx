"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";

export default function DeleteAccount() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  const handleDeleteAccount = async () => {
    if (confirmText !== "SUPPRIMER") {
      toast.error("Veuillez entrer SUPPRIMER en majuscules pour confirmer.");
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch("/api/deleteUser", {
        method: "DELETE",
      });

      if (response.ok) {
        await signOut({ callbackUrl: "/" });
      } else {
        const error = await response.json();
        console.error(error);
        toast.error(
          "Une erreur est survenue lors de la suppression du compte."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la suppression du compte.");
    }
    setIsDeleting(false);
  };

  return (
    <div>
      <Dialog>
        <Card className="mt-10 border-red-700">
          <CardHeader>Zone Dangereuse</CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>Supprimer mon compte</div>

            <DialogTrigger asChild>
              <div>
                <Button variant="destructive">Delete</Button>
              </div>
            </DialogTrigger>
            <DialogContent>
              <AlertDialogHeader>
                <DialogTitle>Supprimer le compte</DialogTitle>
                <DialogDescription className="pt-3">
                  Cette action est irréversible. Toutes vos données seront
                  supprimées définitivement.
                </DialogDescription>
              </AlertDialogHeader>
              <div>
                <label className="">
                  Tapez <strong className="text-red-500">SUPPRIMER</strong> pour
                  confirmer :
                  <input
                    type="text"
                    value={confirmText}
                    className="mt-2"
                    onChange={(e) => setConfirmText(e.target.value)}
                  />
                </label>
              </div>
              <DialogFooter>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Suppression..." : "Supprimer mon compte"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}
