"use client";

import { useEffect, useState } from "react";
import AnimatePresenceWrapper from "./AnimatePresenceWrapper";
import Loader from "./Loader";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresenceWrapper>
      {loading ? <Loader /> : children}
    </AnimatePresenceWrapper>
  );
}