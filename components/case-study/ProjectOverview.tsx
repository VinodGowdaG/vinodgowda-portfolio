"use client";

import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectOverview({
  project,
}: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-4xl font-bold text-white">
          Project Overview
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-400">
          {project.description}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              Category
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {project.category}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              Result
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {project.result}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}