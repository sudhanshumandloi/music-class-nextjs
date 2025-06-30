import HeroSection from "@/Components/HeroSection";
import FeaturedCourses from "@/Components/FeaturedCourses";
import WhyChooseUs from "@/Components/WhyChooseUs";
import TestimonialCards from "@/Components/TestimonialCards";
import UpComingWebinars from "@/Components/UpComingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpComingWebinars />
    </main>
  );
}
