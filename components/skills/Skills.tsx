"use client";

import { motion } from "framer-motion";
import SectionObserver from "@/components/ui/SectionObserver";

const skills = [
  { name: "Graphic Design", value: 95 },
  { name: "UI / UX Design", value: 90 },
  { name: "Next.js Development", value: 88 },
  { name: "WordPress", value: 92 },
  { name: "Digital Marketing", value: 94 },
  { name: "SEO", value: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#030712] py-28">
      <SectionObserver id="skills" />
      <div className="mx-auto max-w-7xl px-6">
        <p className="uppercase tracking-[5px] text-blue-400">
          My Skills
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Technologies & Expertise
        </h2>

        <div className="mt-16 space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex justify-between">
                <span className="text-lg text-white">{skill.name}</span>
                <span className="text-blue-400">{skill.value}%</span>
              </div>

              <div className="h-3 rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}