"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MouseEvent } from "react";
import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set(-((y - rect.height / 2) / 25));
    rotateY.set((x - rect.width / 2) / 25);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center"
    >
      {/* Top Left Card */}
      <div className="absolute -left-16 top-12 z-20">
        <FloatingCard
          title="Projects Completed"
          value={120}
          suffix="+"
        />
      </div>

      {/* Bottom Left Card */}
      <div className="absolute -left-16 bottom-20 z-20">
        <FloatingCard
          title="Years Experience"
          value={5}
          suffix="+"
        />
      </div>

      {/* Bottom Right Card */}
      <div className="absolute -right-16 bottom-28 z-20">
        <FloatingCard
          title="Happy Clients"
          value={40}
          suffix="+"
        />
      </div>

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-20 blur-3xl" />

      {/* Rotating Gradient Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[430px] w-[330px] rounded-[40px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[3px]"
      >
        <div className="h-full w-full rounded-[38px] bg-[#030712]" />
      </motion.div>

      {/* Profile Image with Parallax */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.03,
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1000,
        }}
        className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl"
      >
        <Image
          src="/images/profile/profile.png"
          alt="Vinodgowda G"
          width={320}
          height={420}
          priority
          className="h-auto w-full rounded-[28px] object-cover"
        />
      </motion.div>
    </motion.div>
  );
}