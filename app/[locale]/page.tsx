import { getAuthSession } from "@/src/lib/auth";
import AuthenticatedContent from "@/app/[locale]/AuthentificatedContent";
import PublicContent from "@/app/[locale]/PublicContent";
import Onboarding from "@/components/onboarding/Onboarding";

export default async function HomePage() {
  const session = await getAuthSession();

  if (session?.user) {
    if (!session.user.isOnboarded) {
      return <Onboarding />;
    }
    return <AuthenticatedContent session={session} />;
  }
  return <PublicContent />;
}
