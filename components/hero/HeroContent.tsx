"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import TypingText from "./TypingText";

export default function HeroContent() {
  return (
    <div>

      <TextReveal delay={0.1}>
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Creative Digital Professional
        </span>
      </TextReveal>

      <TextReveal delay={0.3}>
        <h1 className="mt-8 text-6xl font-bold leading-tight text-white lg:text-8xl">
          Hi, I'm
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Vinodgowda G
            <div className="mt-6">
    <TypingText />
</div>
          </span>
        </h1>
      </TextReveal>

      <TextReveal delay={0.5}>
        <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
Helping businesses build modern brands through creative design,
website development, digital marketing and strategic solutions.
</p>
      </TextReveal>

      <TextReveal delay={0.7}>
        <div className="mt-10 flex flex-wrap gap-5">
          <MagneticButton href="#projects">
  🚀 View My Work
</MagneticButton>

<MagneticButton href="#contact" primary={false}>
  📩 Contact Me
</MagneticButton>
          
        </div>
      </TextReveal>

      <TextReveal delay={0.9}>
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "UI/UX",
            "Branding",
            "SEO",
            "Digital Marketing",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </TextReveal>

    </div>
  );
}