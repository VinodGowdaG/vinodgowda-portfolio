interface Props {
  title: string;
  value: string;
}

export default function FloatingCard({ title, value }: Props) {
  return (
    <div className="w-44 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl shadow-2xl">
      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-gray-300">
        {title}
      </p>
    </div>
  );
}