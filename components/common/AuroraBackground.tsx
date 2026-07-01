"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Blue */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]"
      />

      {/* Purple */}
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[140px]"
      />

      {/* Cyan */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[160px]"
      />

    </div>
  );
}