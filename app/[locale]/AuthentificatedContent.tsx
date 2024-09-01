import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";
import Container from "@/components/elements/Container";
import { LayoutHeader, LayoutTitle } from "@/src/components/Layout/Layout";
import { getI18n } from "@/locales/server";

export type AuthenticatedContentProps = { session: any };

const AuthenticatedContent: React.FC<AuthenticatedContentProps> = async ({
  session,
}: any) => {
  const t = await getI18n();
  return (
    <Container>
      <div className="container">
        <LayoutHeader>
          <LayoutTitle>{t("HomePage")}</LayoutTitle>
          <h2>{t("new")}</h2>
        </LayoutHeader>
      </div>
    </Container>
  );
};

export default AuthenticatedContent;
