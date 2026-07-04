import { section } from "framer-motion/client";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundGlow from "./BackgroundGlow";
import AuroraBackground from "@/components/common/AuroraBackground";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import SectionObserver from "@/components/ui/SectionObserver";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#030712] pt-28 pb-20"
>
  <SectionObserver id="home" />
  <AuroraBackground />

  <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
    <HeroContent />
    <HeroImage />
  </div>
  <ScrollIndicator />
</section>
  );
}