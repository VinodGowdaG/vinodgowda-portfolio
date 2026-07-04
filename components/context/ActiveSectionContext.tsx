"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type ContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext =
  createContext<ContextType | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] =
    useState("home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(
    ActiveSectionContext
  );

  if (!context)
    throw new Error(
      "useActiveSection must be used inside ActiveSectionProvider"
    );

  return context;
}