"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export default function Button({
  children,
  primary,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`rounded-xl px-8 py-4 font-semibold transition ${
        primary
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-white/20 text-white hover:bg-white/10"
      }`}
    >
      {children}
    </motion.button>
  );
}