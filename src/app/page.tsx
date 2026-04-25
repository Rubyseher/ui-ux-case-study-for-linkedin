import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import LaptopSection from "@/components/LaptopSection";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <TopNav />
      <Hero />
      <LaptopSection />
      <CaseStudyLayout />
    </main>
  );
}
