import React from "react";
import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";

import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/src/components/Layout/Layout";

export type AuthenticatedContentProps = { session: any };

const AuthenticatedContent: React.FC<AuthenticatedContentProps> = ({
  session,
}: any) => {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Galsenext</LayoutTitle>
      </LayoutHeader>
      <LayoutContent></LayoutContent>
    </Layout>
  );
};

export default AuthenticatedContent;
