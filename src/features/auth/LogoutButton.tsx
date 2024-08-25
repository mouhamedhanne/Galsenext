"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Loader } from "@/src/components/ui/Loader";

export const LogoutButton = () => {
  const mutation = useMutation({
    mutationFn: async () => await signOut({ callbackUrl: "/" }),
  });

  return (
    <Button
      className="gap-2 hover:cursor-pointer"
      variant="outline"
      size="sm"
      disabled={mutation.isPending}
      onClick={() => {
        mutation.mutate();
      }}
    >
      {mutation.isPending ? <Loader size={12} /> : <LogOut size={12} />}
      Logout
    </Button>
  );
};
