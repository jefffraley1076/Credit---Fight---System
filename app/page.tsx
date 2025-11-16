import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Inside from "@/components/Inside";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Page() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Inside />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <JsonLd />
    </>
  );
}
