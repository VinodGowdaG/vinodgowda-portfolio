"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ChallengeSolution({
  project,
}: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

        {/* Challenge */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10 backdrop-blur-xl"
        >
          <p className="uppercase tracking-[5px] text-red-400">
            Challenge
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white">
            The Problem
          </h2>

          <p className="mt-8 leading-9 text-gray-400">
            {project.challenge}
          </p>
        </motion.div>

        {/* Solution */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 backdrop-blur-xl"
        >
          <p className="uppercase tracking-[5px] text-cyan-400">
            Solution
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Our Approach
          </h2>

          <p className="mt-8 leading-9 text-gray-400">
            {project.solution}
          </p>
        </motion.div>

      </div>
    </section>
  );
}