import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface Props {
  title: string;
  value: number;
  suffix?: string;
}

export default function FloatingCard({
  title,
  value,
  suffix = "",
}: Props) {
  return (
    <div className="min-w-[170px] rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl">
      <h3 className="text-3xl font-bold text-white">
        <AnimatedCounter
          end={value}
          suffix={suffix}
        />
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {title}
      </p>
    </div>
  );
}