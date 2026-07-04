"use client";

interface Props {
  active: string;
  setActive: (value: string) => void;
}

const filters = [
  "All",
  "Business",
  "Branding",
  "Web",
  "Marketing",
  "Community",
];

export default function ProjectFilter({
  active,
  setActive,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
            active === filter
              ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
              : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}