"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "vinodgowdag351@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 6363336316",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Karnataka, India",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {contacts.map(({ icon: Icon, title, value }) => (
        <div
          key={title}
          className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/50"
        >
          <div className="rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
            <Icon size={28} />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[3px] text-gray-400">
              {title}
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              {value}
            </h3>
          </div>
        </div>
      ))}
    </motion.div>
  );
}