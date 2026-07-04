"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}

export default function Button({
  href,
  children,
  primary = true,
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link
        href={href}
        className={`inline-flex items-center rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
          primary
            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-cyan-500/40"
            : "border border-white/20 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
}