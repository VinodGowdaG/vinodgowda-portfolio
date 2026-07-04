import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Loader from "@/components/common/Loader";
import ScrollProgress from "@/components/common/ScrollProgress";
import SocialLinks from "@/components/hero/SocialLinks";
import Projects from "@/components/projects/Projects";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Services from "@/components/services/Services";


export default function Home() {
  return (
    <>
    <main className="bg-[#030712] text-white"></main>
      <SocialLinks />
      <ScrollProgress />
      <Loader />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Services />
      <ExperienceTimeline />
      <Contact />
      <Footer />
    </>
  );
}