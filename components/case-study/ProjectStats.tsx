"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectStats({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[6px] text-cyan-400">
            Results
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Measurable Business Impact
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {project.stats.map((item, index) => (
            <StatCard
              key={index}
              icon={item.icon}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              delay={index * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

interface CardProps {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function StatCard({
  icon,
  value,
  suffix = "",
  label,
  delay,
}: CardProps) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.6,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
    >
      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-5xl font-black text-white">
        {inView && (
          <CountUp
            end={value}
            duration={2}
            suffix={suffix}
          />
        )}
      </h3>

      <p className="mt-4 text-lg text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}