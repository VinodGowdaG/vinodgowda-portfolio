"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function CaseHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-6 text-6xl font-black text-white">
            {project.title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-400">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={700}
            className="rounded-3xl border border-white/10 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}