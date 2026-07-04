import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Metadata } from "next";

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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Hero Section */}
      <CaseHero project={project} />

      {/* Overview */}
      <ProjectOverview project={project} />

      {/* Challenge & Solution */}
      <ChallengeSolution project={project} />

      {/* Tech Stack */}
      <TechStack project={project} />

      {/* Gallery */}
      <ProjectGallery project={project} />

      {/* Stats */}
      <ProjectStats project={project} />

      {/* Testimonial */}
      <ClientTestimonial project={project} />

      {/* Navigation */}
      <ProjectNavigation project={project} />
      
    </main>
  );
}