"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-black text-red-500">
          Something went wrong
        </h1>

        <p className="mt-6 text-gray-400">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-10 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}