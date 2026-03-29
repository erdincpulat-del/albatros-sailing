"use client";

import HomeHero from "@/components/home/HomeHero";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import InstructorSection from "@/components/home/InstructorSection";
import CertificateVerifySection from "@/components/home/CertificateVerifySection";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeaturedPrograms />
      <InstructorSection />
      <CertificateVerifySection />
      <CallToAction />
    </main>
  );
}
