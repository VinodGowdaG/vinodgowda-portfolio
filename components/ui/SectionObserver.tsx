"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../context/ActiveSectionContext";

interface Props {
  id: string;
}

export default function SectionObserver({
  id,
}: Props) {
  const { setActiveSection } =
    useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.45,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <div
      ref={ref}
      className="absolute top-20 h-20 w-full"
    />
  );
}