import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SpaceSelector from "@/components/SpaceSelector";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import VideoReviews from "@/components/VideoReviews";
import Comparison from "@/components/Comparison";
import About from "@/components/About";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingUI from "@/components/FloatingUI";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <SpaceSelector />
        <BeforeAfter />
        <Comparison />
        <About />
        <Process />
        <Pricing />
        <Reviews />
        <VideoReviews />
        <FAQ />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
