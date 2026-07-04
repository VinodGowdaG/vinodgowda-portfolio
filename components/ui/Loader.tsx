"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-7xl font-black text-transparent"
      >
        VG
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg tracking-[6px] uppercase text-gray-400"
      >
        Loading Portfolio...
      </motion.p>

      {/* Progress Bar */}
      <div className="mt-10 h-[4px] w-72 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}