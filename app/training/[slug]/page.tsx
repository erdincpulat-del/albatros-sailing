
import Link from "next/link";
import { notFound } from "next/navigation";

const trainingData = {
  "basic-sailing": {
    title: "Basic Sailing",
    subtitle: "Foundational sailing skills for beginners",
    duration: "3 Days",
    certificate: "Basic Sailing Certificate",
    level: "Beginner",
    description:
      "This course introduces the fundamentals of sailing, safety procedures, seamanship, and basic boat handling. It is designed for students with little or no prior sailing experience.",
    highlights: [
      "Introduction to sailing terminology",
      "Basic sail trim and steering",
      "Essential safety procedures",
      "Docking and boat handling basics",
    ],
  },
  "coastal-skipper": {
    title: "Coastal Skipper",
    subtitle: "Command, navigation, and coastal passage planning",
    duration: "5 Days",
    certificate: "Coastal Skipper Certificate",
    level: "Intermediate",
    description:
      "The Coastal Skipper program focuses on practical skippering skills, coastal navigation, passage planning, weather awareness, and command responsibility.",
    highlights: [
      "Coastal navigation techniques",
      "Passage planning and route decisions",
      "Crew and skipper responsibilities",
      "Weather interpretation and safe operation",
    ],
  },
  "offshore-skipper": {
    title: "Offshore Yacht Course",
    subtitle: "Advanced offshore operations and long-distance sailing",
    duration: "7 Days",
    certificate: "Offshore Yacht Certificate",
    level: "Advanced",
    description:
      "This course is designed for sailors preparing for offshore passages. It covers advanced navigation, weather systems, watchkeeping, emergency procedures, and offshore seamanship.",
    highlights: [
      "Offshore route planning",
      "Weather systems and offshore strategy",
      "Emergency response procedures",
      "Long-distance yacht command skills",
    ],
  },
  yachtmaster: {
    title: "Yachtmaster",
    subtitle: "Professional-level command and seamanship",
    duration: "10 Days",
    certificate: "Yachtmaster Certificate",
    level: "Professional",
    description:
      "The Yachtmaster program is designed for advanced sailors seeking professional-level competence in command, seamanship, safety leadership, and practical yacht handling.",
    highlights: [
      "Professional command standards",
      "Advanced seamanship and boat handling",
      "Decision-making under pressure",
      "Certification-focused practical training",
    ],
  },
  earlybirdelite: {
    title: "Early Bird Elite",
    subtitle: "Accelerated elite-level sailing program",
    duration: "Custom Program",
    certificate: "Elite Sailing Certificate",
    level: "Advanced",
    description:
      "An intensive, fast-track sailing program designed for highly motivated participants who want to reach advanced competence in a shorter time frame.",
    highlights: [
      "Accelerated learning structure",
      "Hands-on intensive sailing",
      "Advanced maneuver training",
      "Personalized coaching approach",
    ],
  },
} as const;

type TrainingSlug = keyof typeof trainingData;

export function generateStaticParams() {
  return Object.keys(trainingData).map((slug) => ({
    slug,
  }));
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const training = trainingData[slug as TrainingSlug];

  if (!training) {
    notFound();
  }
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-12">
        <Link
          href="/training"
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          ← Back to Training Programs
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          {training.title}
        </h1>

        <p className="mt-3 text-lg text-gray-600">{training.subtitle}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-14">
        <div className="md:col-span-2 border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">
            Course Overview
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            {training.description}
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">
            What you will learn
          </h3>

          <ul className="mt-4 space-y-3 text-gray-600">
            {training.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <aside className="border rounded-2xl p-8 shadow-sm h-fit">
          <h2 className="text-xl font-semibold text-gray-900">
            Course Details
          </h2>

          <div className="mt-5 space-y-4 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Duration:</span>{" "}
              {training.duration}
            </p>
            <p>
              <span className="font-medium text-gray-900">Level:</span>{" "}
              {training.level}
            </p>
            <p>
              <span className="font-medium text-gray-900">Certificate:</span>{" "}
              {training.certificate}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/reserve"
              className="px-5 py-3 rounded-xl bg-gray-900 text-white text-center"
            >
              Start Reservation
            </Link>

            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl border text-center"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </section>

      <section className="border-t pt-12">
        <h3 className="text-2xl font-semibold text-gray-900">
          Ready to begin your training?
        </h3>

        <p className="mt-3 text-gray-600 max-w-2xl">
          Join Albatros Sailing and continue your development with a structured,
          internationally oriented training program.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/reserve"
            className="px-6 py-3 rounded-xl bg-gray-900 text-white"
          >
            Reserve Your Spot
          </Link>

          <Link
            href="/training"
            className="px-6 py-3 rounded-xl border"
          >
            View All Programs
          </Link>
        </div>
      </section>
    </main>
  );
}