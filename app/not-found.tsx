import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-5xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-gray-900 text-white rounded-xl"
        >
          Go Home
        </Link>

        <Link
          href="/training"
          className="px-6 py-3 border rounded-xl"
        >
          Training Programs
        </Link>
      </div>
    </main>
  );
}