import { Hero } from "../components/Hero";
import { SuccessStories } from "../components/SuccessStories";
import { CapabilitiesGrid } from "../components/CapabilitiesGrid";
import { Platforms } from "../components/Platforms";
import { Insights } from "../components/Insights";
import { Testimonial } from "../components/Testimonial";
import { CTASection } from "../components/CTASection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-blue-500/30 selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <CapabilitiesGrid />
        <SuccessStories />
        <Platforms />
        <Insights />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
