"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code2, Palette } from "lucide-react";

import SectionObserver from "@/components/ui/SectionObserver";

const cards = [
  {
    icon: <Palette className="h-8 w-8 text-blue-400" />,
    title: "Creative Design",
    description: "Brand Identity, Social Media, Print & UI Design",
  },
  {
    icon: <Code2 className="h-8 w-8 text-cyan-400" />,
    title: "Website Development",
    description: "Next.js, WordPress, Responsive Websites",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-400" />,
    title: "Digital Marketing",
    description: "SEO, Google Ads, Meta Ads & Content Strategy",
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    title: "Professional Experience",
    description: "5+ Years Building Brands & Businesses",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-28"
    >
      <SectionObserver id="about" />
      
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 uppercase tracking-[5px]">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Passionate About Creating
            <span className="text-blue-500"> Digital Experiences.</span>
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-400">
            I'm Vinodgowda G, a Creative Designer, Website Developer
            and Digital Marketing Specialist helping businesses
            establish powerful brands through innovative design,
            modern websites and effective online marketing strategies.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => (

            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-blue-500/40 transition"
            >

              {card.icon}

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}