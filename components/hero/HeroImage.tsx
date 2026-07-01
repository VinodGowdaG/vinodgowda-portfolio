"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <div className="relative flex min-h-[700px] items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

      {/* Top Left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-0 top-16 z-20"
      >
        <FloatingCard title="Projects" value="120+" />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-0 bottom-16 z-20"
      >
        <FloatingCard title="Experience" value="5+ Years" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-0 bottom-28 z-20"
      >
        <FloatingCard title="Clients" value="40+" />
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[420px] rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl"
      >
        <Image
          src="/images/profile/profile.png"
          alt="Vinodgowda G"
          width={420}
          height={520}
          priority
          className="h-auto w-full rounded-[24px] object-cover"
        />
      </motion.div>
    </div>
  );
}