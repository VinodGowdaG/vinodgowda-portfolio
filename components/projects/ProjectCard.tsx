"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectBadge from "./ProjectBadge";
import MagneticButton from "@/components/ui/MagneticButton";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  result: string;
  live: string;
}

interface Props {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({
  project,
  reverse = false,
}: Props) {
  return (
    <SpotlightCard>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`grid items-center gap-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-cyan-400/30 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="group relative overflow-hidden rounded-3xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

          {/* Hover Text */}
          <div className="absolute bottom-8 left-8 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xs uppercase tracking-[5px] text-cyan-400">
              Featured Project
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              View Project →
            </h3>
          </div>
        </motion.div>

        {/* Content */}
        <div>
          <ProjectBadge text={project.category} />

          <h2 className="mt-6 text-4xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Result */}
          <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[5px] text-cyan-400">
              PROJECT RESULT
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              {project.result}
            </h3>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <MagneticButton href={`/projects/${project.slug}`}>
    📖 View Case Study
</MagneticButton>

            <MagneticButton
    href={project.live}
    primary={false}
>
    🌐 Visit Website
</MagneticButton>
          </div>
        </div>
      </motion.div>
    </SpotlightCard>
  );
}