import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import CaseHero from "@/components/case-study/CaseHero";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import ChallengeSolution from "@/components/case-study/ChallengeSolution";
import TechStack from "@/components/case-study/TechStack";
import ProjectGallery from "@/components/case-study/ProjectGallery";
import ProjectStats from "@/components/case-study/ProjectStats";
import ClientTestimonial from "@/components/case-study/ClientTestimonial";
import ProjectNavigation from "@/components/case-study/ProjectNavigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/* ==========================================
   Dynamic SEO Metadata
========================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.description,

    keywords: [
      project.title,
      project.category,
      ...project.technologies,
      "Case Study",
      "Portfolio",
      "Website Development",
      "Branding",
      "UI UX",
      "Digital Marketing",
    ],

    openGraph: {
      title: `${project.title} | Vinodgowda G`,
      description: project.description,
      url: `https://vinodgowdag.com/projects/${project.slug}`,

      images: [
        {
          url: project.heroImage || project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Vinodgowda G`,
      description: project.description,
      images: [project.heroImage || project.image],
    },
  };
}

/* ==========================================
   Project Page
========================================== */

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Hero */}
      <CaseHero project={project} />

      {/* Overview */}
      <ProjectOverview project={project} />

      {/* Challenge & Solution */}
      <ChallengeSolution project={project} />

      {/* Technology Stack */}
      <TechStack project={project} />

      {/* Gallery */}
      <ProjectGallery project={project} />

      {/* Results */}
      <ProjectStats project={project} />

      {/* Testimonial */}
      <ClientTestimonial project={project} />

      {/* Next / Previous Project */}
      <ProjectNavigation project={project} />
    </main>
  );
}