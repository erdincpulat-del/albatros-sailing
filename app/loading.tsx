export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="animate-pulse">
          <div className="h-10 w-64 rounded-lg bg-gray-200" />
          <div className="mt-4 h-4 w-96 max-w-full rounded bg-gray-200" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border p-8">
              <div className="h-6 w-48 rounded bg-gray-200" />
              <div className="mt-6 space-y-4">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-11/12 rounded bg-gray-200" />
                <div className="h-4 w-10/12 rounded bg-gray-200" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="h-24 rounded-2xl bg-gray-100" />
                <div className="h-24 rounded-2xl bg-gray-100" />
                <div className="h-24 rounded-2xl bg-gray-100" />
                <div className="h-24 rounded-2xl bg-gray-100" />
              </div>
            </div>

            <div className="rounded-3xl border p-8">
              <div className="h-6 w-40 rounded bg-gray-200" />
              <div className="mt-6 space-y-4">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-5/6 rounded bg-gray-200" />
                <div className="h-4 w-4/6 rounded bg-gray-200" />
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-11 rounded-xl bg-gray-200" />
                <div className="h-11 rounded-xl bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}