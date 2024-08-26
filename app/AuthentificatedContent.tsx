import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";
import Container from "@/components/elements/Container";

export type AuthenticatedContentProps = { session: any };

const AuthenticatedContent: React.FC<AuthenticatedContentProps> = ({
  session,
}: any) => {
  return (
    <Container>
      <div>hello</div>
      <p>{JSON.stringify(session, null, 2)}</p>
    </Container>
  );
};

export default AuthenticatedContent;
