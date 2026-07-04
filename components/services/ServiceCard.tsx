"use client";

import { motion } from "framer-motion";

interface Props {
  service: {
    icon: string;
    title: string;
    description: string;
  };
}

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-600/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="text-5xl">
          {service.icon}
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          {service.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-400">
          {service.description}
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-cyan-400 transition-all group-hover:translate-x-2">
          Learn More →
        </div>
      </div>
    </motion.div>
  );
}