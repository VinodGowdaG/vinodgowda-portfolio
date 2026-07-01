import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Loader from "@/components/common/Loader";
import ScrollProgress from "@/components/common/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}