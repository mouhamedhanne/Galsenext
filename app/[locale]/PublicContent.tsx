import Faq from "@/components/landingPage/FAQ";
import Feature from "@/components/landingPage/Feature";
import Header from "@/components/landingPage/Header";
import Herotop from "@/components/landingPage/Herotop";
import Testimonial from "@/components/landingPage/Testimonial";

export default function PublicContent() {
  return (
    <main>
      <Header />
      <Herotop />
      <Feature />
      <Faq />
      <Testimonial />
    </main>
  );
}
