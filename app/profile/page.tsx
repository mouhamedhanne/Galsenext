import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/src/lib/auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "@/src/features/auth/LogoutButton";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getRequiredAuthSession } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import DeleteAccount from "./delete/DeleteAccount";
import Container from "@/components/elements/Container";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/src/components/Layout/Layout";
import { Typography } from "@/src/components/ui/Typography";

const FormSchema = z.object({
  name: z.string().min(3).max(40),
  image: z.string().url(),
});

export default async function AccountPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getRequiredAuthSession();
  const sessions = await getAuthSession();

  if (!sessions) {
    throw new Error("No session found");
  }

  return (
    <Container>
      <div className="container">
        <Layout>
          <LayoutHeader>
            <LayoutTitle>Account</LayoutTitle>
          </LayoutHeader>
          <LayoutContent>
            <Card className=" mt-4">
              <CardHeader className="flex flex-row gap-4 space-y-0">
                <Avatar>
                  <AvatarFallback>{sessions.user.email?.[0]}</AvatarFallback>
                  {sessions.user.image && (
                    <AvatarImage src={sessions.user.image} alt="user image" />
                  )}
                </Avatar>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-[18px] lg:text-2xl">
                    {sessions.user.email}
                  </CardTitle>
                  <CardDescription>{sessions.user.name}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="flex flex-row-reverse">
                <LogoutButton />
              </CardFooter>
            </Card>
          </LayoutContent>
          <LayoutHeader className="mt-3">
            <LayoutTitle>Account settings</LayoutTitle>
          </LayoutHeader>
          <LayoutContent>
            <Card className="bg-background mt-4">
              <CardContent className="mt-6">
                <form
                  action={async (formData) => {
                    "use server";

                    const userSession = await getRequiredAuthSession();

                    const image = formData.get("image");
                    const name = formData.get("name");

                    const safeData = FormSchema.safeParse({
                      image,
                      name,
                    });

                    if (!safeData.success) {
                      const searchParams = new URLSearchParams();
                      searchParams.set(
                        "error",
                        "Invalid data. Image must be an URL and name must be between 3 and 40 characters."
                      );
                      redirect(`/account?${searchParams.toString()}`);
                    }

                    await prisma.user.update({
                      where: {
                        id: userSession.user.id,
                      },
                      data: safeData.data,
                    });

                    revalidatePath("/account");
                    redirect("/account");
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      defaultValue={session.user.image}
                      name="image"
                      id="image"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      defaultValue={session.user.name}
                      name="name"
                      id="name"
                    />
                  </div>
                  {searchParams.error && (
                    <Typography>
                      Error: {searchParams.error as string}
                    </Typography>
                  )}
                  <Button>Submit</Button>
                </form>
              </CardContent>
            </Card>
            <DeleteAccount />
          </LayoutContent>
        </Layout>
      </div>
    </Container>
  );
}
