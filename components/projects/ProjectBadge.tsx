interface Props {
  text: string;
}

export default function ProjectBadge({ text }: Props) {
  return (
    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
      {text}
    </span>
  );
}