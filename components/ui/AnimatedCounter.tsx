"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  end: number;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <CountUp
        start={0}
        end={inView ? end : 0}
        duration={2.5}
        suffix={suffix}
      />
    </div>
  );
}