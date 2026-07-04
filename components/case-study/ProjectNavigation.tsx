"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectNavigation({ project }: Props) {
  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const previous =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

        {/* Previous */}
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-500"
          >
            <Image
              src={previous.image}
              alt={previous.title}
              width={700}
              height={450}
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="p-6">
              <p className="flex items-center gap-2 text-cyan-400">
                <ArrowLeft size={18} />
                Previous Project
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {previous.title}
              </h3>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-500"
          >
            <Image
              src={next.image}
              alt={next.title}
              width={700}
              height={450}
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="p-6 text-right">
              <p className="flex items-center justify-end gap-2 text-cyan-400">
                Next Project
                <ArrowRight size={18} />
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {next.title}
              </h3>
            </div>
          </Link>
        ) : (
          <div />
        )}

      </div>
    </section>
  );
}