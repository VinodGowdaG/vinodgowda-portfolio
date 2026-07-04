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
      className="relative flex flex-col items-center justify-center"
    >
      {/* ===========================
          Desktop Floating Cards
      ============================ */}

      <div className="absolute -left-16 top-12 z-20 hidden lg:block">
        <FloatingCard
          title="Projects Completed"
          value={120}
          suffix="+"
        />
      </div>

      <div className="absolute -left-16 bottom-20 z-20 hidden lg:block">
        <FloatingCard
          title="Years Experience"
          value={5}
          suffix="+"
        />
      </div>

      <div className="absolute -right-16 bottom-28 z-20 hidden lg:block">
        <FloatingCard
          title="Happy Clients"
          value={40}
          suffix="+"
        />
      </div>

      {/* Background Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-20 blur-3xl lg:h-[500px] lg:w-[500px]" />

      {/* Gradient Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[330px] w-[250px] rounded-[34px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[3px] lg:h-[430px] lg:w-[330px]"
      >
        <div className="h-full w-full rounded-[32px] bg-[#030712]" />
      </motion.div>

      {/* Profile */}

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1000,
        }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl"
      >
        <Image
          src="/images/profile/profile.png"
          alt="Vinodgowda G"
          width={320}
          height={420}
          priority
          className="w-[250px] rounded-[24px] object-cover lg:w-[320px]"
        />
      </motion.div>

      {/* ===========================
          Mobile Stats
      ============================ */}

      <div className="mt-8 grid w-full max-w-sm grid-cols-3 gap-3 lg:hidden">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-cyan-400">
            120+
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-cyan-400">
            5+
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Years
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-cyan-400">
            40+
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Clients
          </p>
        </div>
      </div>
    </motion.div>
  );
}