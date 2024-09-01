import CallToAction from "@/components/landingPage/CallToAction";
import Faq from "@/components/landingPage/FAQ";
import Feature from "@/components/landingPage/Feature";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Herotop from "@/components/landingPage/Herotop";
import Testimonial from "@/components/landingPage/Testimonial";

export default function PublicContent() {
  return (
    <main className="bg-home_page ">
      <Header />
      <Herotop />
      <Feature />
      <Faq />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}
