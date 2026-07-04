"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="SERVICES"
          title="Helping Businesses Grow Digitally"
          description="I create modern websites, powerful brands, and result-driven digital marketing strategies that help businesses stand out and grow."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}