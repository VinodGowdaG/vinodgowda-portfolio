import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-8xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            href="/#projects"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-white transition hover:border-cyan-400"
          >
            <ArrowLeft size={18} />
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}