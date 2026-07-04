"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]"
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-20 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[140px]"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 80, -120, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/3 h-[380px] w-[380px] rounded-full bg-purple-600/10 blur-[120px]"
      />
    </div>
  );
}