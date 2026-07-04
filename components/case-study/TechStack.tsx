"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function TechStack({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center uppercase tracking-[6px] text-cyan-400">
            Technologies
          </p>

          <h2 className="mt-5 text-center text-5xl font-black text-white">
            Built Using Modern Tools
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
            >
              <div className="mb-5 text-5xl">
                💻
              </div>

              <h3 className="text-2xl font-bold text-white">
                {tech}
              </h3>

              <p className="mt-3 text-gray-400">
                Used extensively throughout this project.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}