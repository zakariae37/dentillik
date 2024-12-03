import HeroSection from "@/components/shared/HeroSection";
import KeyBenefitsSection from "@/components/shared/KeyBenefitsSection";
import LandingSection from "@/components/shared/landing-section";
import Navbar from "@/components/shared/Navbar";
import TestimonialsSection from "@/components/shared/Testimonials";
import VideoSection from "@/components/shared/VideoSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <KeyBenefitsSection />
      <LandingSection />
      <TestimonialsSection />
    </main>
  )
}

