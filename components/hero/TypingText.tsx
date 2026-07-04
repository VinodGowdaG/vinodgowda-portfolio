"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Creative Designer",
        2000,
        "Website Developer",
        2000,
        "Digital Marketing Specialist",
        2000,
        "Brand Consultant",
        2000,
      ]}
      wrapper="span"
      speed={45}
      repeat={Infinity}
      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-2xl font-semibold text-transparent lg:text-3xl"
    />
  );
}