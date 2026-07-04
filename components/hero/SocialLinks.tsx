"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/VinodGowdaG",
    hover: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/YOUR-LINKEDIN",
    hover: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/YOUR-INSTAGRAM",
    hover: "hover:bg-pink-600",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 lg:flex"
    >
      {socials.map(({ name, icon: Icon, href, hover }, index) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.2 + index * 0.15,
          }}
          whileHover={{
            scale: 1.15,
            rotate: 5,
          }}
          className="group relative"
        >
          {/* Tooltip */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 rounded-lg bg-white px-3 py-1 text-sm font-medium text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            {name}
          </span>

          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 ${hover}`}
          >
            <Icon size={20} />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}