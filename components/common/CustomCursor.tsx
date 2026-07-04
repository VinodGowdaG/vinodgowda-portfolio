"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({
    x: -100,
    y: -100,
  });

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    const hoverOn = () => setHovered(true);
    const hoverOff = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const elements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor]"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverOn);
        el.removeEventListener("mouseleave", hoverOff);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
          scale: clicked ? 0.8 : hovered ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-cyan-400 bg-cyan-400/5 shadow-[0_0_25px_rgba(34,211,238,0.5)]"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
          scale: clicked ? 0.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]"
      />
    </>
  );
}