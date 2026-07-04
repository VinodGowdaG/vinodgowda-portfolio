"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}

export default function MagneticButton({
  href,
  children,
  primary = true,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
    >
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 font-semibold transition-all duration-300 ${
          primary
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60"
            : "border border-white/20 bg-white/5 text-white hover:border-cyan-400"
        }`}
      >
        {/* Hover Glow */}
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Button Text */}
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}