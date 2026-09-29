
import Hero from "@/components/sections/Hero";
import Worldwide from "@/components/sections/Worldwide";
import PKFCA from "@/components/sections/PKFCA";
import WhyPKF from "@/components/sections/WhyPKF";
import Resources from "@/components/sections/Resources";
import Services from "@/components/sections/Services";
import Sectors from "@/components/sections/Sectors";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f2eb]">
      <Hero />
      <Worldwide />
      <PKFCA />
      <WhyPKF />
      <Resources />
      <Services />
      <Sectors />
      <CTA />
    </main>
  );
}