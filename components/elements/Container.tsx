import { Footer } from "@/src/components/ui/Footer";
import { Header } from "@/src/components/ui/Header";

interface ContainerProps {
  children: React.ReactNode;
  isLandingPage?: boolean;
}

export default function Container({
  children,
  isLandingPage = false,
}: ContainerProps) {
  if (isLandingPage) {
    return <div className="max-w-6xl m-auto">{children}</div>;
  } else {
    return (
      <div className="h-full">
        <div className="bg-background h-full">
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-20 w-full">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
