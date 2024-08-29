"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginButton } from "@/src/features/auth/LoginButton";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card className="m-auto mt-4 max-w-lg border-destructive bg-destructive/50">
      <CardHeader>
        <CardTitle>You need to be logged in to view this page</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="flex items-cneter space-x-4">
          <Button onClick={() => reset()}>Try again</Button>
          <LoginButton />
        </div>
      </CardFooter>
    </Card>
  );
}
