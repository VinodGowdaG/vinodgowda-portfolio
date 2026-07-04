"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import TimelineCard from "./TimelineCard";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          subtitle="CAREER JOURNEY"
          title="Experience & Milestones"
          description="A timeline of my professional journey, showcasing design, development, branding, and digital marketing experience."
        />

        <div className="relative mt-24">

          {/* Center Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-10 z-20 h-5 w-5 rounded-full border-4 border-[#030712] bg-cyan-400 lg:left-1/2 lg:-translate-x-1/2" />

                <TimelineCard
                  {...item}
                  index={index}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}