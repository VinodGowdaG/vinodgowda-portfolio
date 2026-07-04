"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectLightbox from "./ProjectLightbox";

interface Props {
  project: any;
}

export default function ProjectGallery({
  project,
}: Props) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="PROJECT GALLERY"
          title="See the Project"
          description="A closer look at the final designs, website, and branding."
        />

        <ProjectLightbox images={project.gallery} />
      </div>
    </section>
  );
}