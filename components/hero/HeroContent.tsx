"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        Creative Digital Professional
      </span>

      <h1 className="mt-8 text-6xl font-bold leading-tight text-white lg:text-8xl">
        Hi, I'm
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Vinodgowda G
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-gray-400">
        Helping businesses grow through branding,
        graphic design, websites, digital marketing,
        and creative strategies.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
          View Portfolio
        </button>

        <button className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:bg-white/10">
          Download Resume
        </button>
      </div>
    </motion.div>
  );
}