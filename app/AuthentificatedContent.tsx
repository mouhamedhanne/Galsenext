import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";
import Container from "@/components/elements/Container";
import { LayoutHeader, LayoutTitle } from "@/src/components/Layout/Layout";

export type AuthenticatedContentProps = { session: any };

const AuthenticatedContent: React.FC<AuthenticatedContentProps> = ({
  session,
}: any) => {
  return (
    <Container>
      <div className="container">
        <LayoutHeader>
          <LayoutTitle>Home page</LayoutTitle>
        </LayoutHeader>
      </div>
    </Container>
  );
};

export default AuthenticatedContent;
