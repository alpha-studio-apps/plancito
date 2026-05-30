import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PlanTypes from "@/components/PlanTypes";
import HonestRecommendation from "@/components/HonestRecommendation";
import ExampleResponse from "@/components/ExampleResponse";
import AudienceSection from "@/components/AudienceSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707]">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PlanTypes />
      <HonestRecommendation />
      <ExampleResponse />
      <AudienceSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
