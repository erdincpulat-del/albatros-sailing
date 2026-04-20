"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("App error boundary caught:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
          <div className="inline-block rounded-full border border-red-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
            Unexpected Error
          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-gray-900">
            Something went wrong
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600 leading-7">
            An unexpected error occurred while loading this page. You can try
            again, return to the homepage, or contact our team if the issue
            continues.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={reset}
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="rounded-xl border px-5 py-3 text-sm font-semibold text-gray-900"
            >
              Go Home
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border px-5 py-3 text-sm font-semibold text-gray-900"
            >
              Contact Us
            </Link>
          </div>

          {error?.message ? (
            <div className="mt-8 rounded-2xl border bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                Technical Details
              </p>
              <p className="mt-2 break-words font-mono text-sm text-gray-700">
                {error.message}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}