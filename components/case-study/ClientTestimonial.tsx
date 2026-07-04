"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ClientTestimonial({ project }: Props) {
  const testimonial = project.testimonial;

  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          {/* Background Glow */}
          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Quote Icon */}
          <Quote className="mb-6 h-12 w-12 text-cyan-400" />

          {/* Rating */}
          <div className="mb-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-2xl leading-10 text-gray-300 italic">
            "{testimonial.quote}"
          </p>

          {/* Client */}
          <div className="mt-10 flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-2xl font-bold text-white">
              {testimonial.name.charAt(0)}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {testimonial.name}
              </h3>

              <p className="text-gray-400">
                {testimonial.role}
              </p>

              <p className="text-cyan-400">
                {testimonial.company}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}