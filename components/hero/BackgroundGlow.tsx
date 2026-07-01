"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]"
      />
    </>
  );
}