import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/home/TrustBar";
import TrainingPath from "@/components/home/TrainingPath";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import InstructorSection from "@/components/home/InstructorSection";
import StudentStories from "@/components/home/StudentStories";
import CallToAction from "@/components/home/CallToAction";

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <HomeHero />
        <TrustBar />
        <TrainingPath />
        <ProgramsPreview />
        <InstructorSection />
        <StudentStories />
        <CallToAction />
      </main>

      <SiteFooter />
    </>
  );
}