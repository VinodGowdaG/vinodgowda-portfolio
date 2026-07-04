"use client";

import { motion } from "framer-motion";

interface Props {
  year: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

export default function TimelineCard({
  year,
  title,
  company,
  description,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative flex w-full ${
        index % 2 === 0
          ? "justify-start lg:pr-16"
          : "justify-start lg:justify-end lg:pl-16"
      }`}
    >
      <div className="relative max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]">
        <span className="text-sm font-semibold tracking-[4px] uppercase text-cyan-400">
          {year}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 font-medium text-blue-400">
          {company}
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}