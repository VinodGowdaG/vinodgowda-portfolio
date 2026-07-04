"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionObserver from "@/components/ui/SectionObserver";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects = useMemo(() => {
    if (active === "All") return projects;

    return projects.filter(
      (project) => project.filter === active
    );
  }, [active]);

  return (
    <section
      id="projects"
      className="relative bg-[#030712] py-32"
    >
      <SectionObserver id="projects" />
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <SectionHeading
          subtitle="FEATURED WORK"
          title="Real Projects. Real Results."
          description="A collection of websites, branding, digital marketing campaigns, UI/UX designs, and business solutions I've created for businesses, startups, and communities."
        />

        {/* Category Filter */}
        <ProjectFilter
          active={active}
          setActive={setActive}
        />

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="mt-20 space-y-40"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}