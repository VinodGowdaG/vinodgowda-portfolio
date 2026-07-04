"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Website Development",
  "UI/UX Design",
  "Brand Identity",
  "Digital Marketing",
  "SEO Optimization",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Vinodgowda G
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Helping businesses grow with modern websites,
              branding, UI/UX design and digital marketing
              solutions.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/VinodGowdaG"
                target="_blank"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/vinodgowda-g-666a27274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com/https://www.instagram.com/vinod_g_gowda?igsh=MW1yaHJjanNuanNnMQ=="
                target="_blank"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="mailto:vinodgowdag351@gmail.com"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
                >
                  <ArrowUpRight size={16} />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Services
            </h3>

            <div className="mt-6 space-y-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-gray-400"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">

              <p>
                📍 Bengaluru, Karnataka
              </p>

              <p>
                📧 vinodgowdag351@gmail.com
              </p>

              <p>
                📱 +91 6363336313
              </p>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vinodgowda G. All Rights Reserved.
          <br />
          Built with ❤️ using Next.js, Tailwind CSS & Framer Motion.
        </div>

      </div>
    </footer>
  );
}