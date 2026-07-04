"use client";

import TextReveal from "./TextReveal";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <TextReveal>
        <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
          {subtitle}
        </p>
      </TextReveal>

      <TextReveal delay={0.2}>
        <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
          {title}
        </h2>
      </TextReveal>

      {description && (
        <TextReveal delay={0.4}>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {description}
          </p>
        </TextReveal>
      )}
    </div>
  );
}