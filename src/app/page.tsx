import { Navigation, Footer } from '@/components/layout';
import { ScrollToTop, ScrollProgress } from '@/components/ui';
import {
  HeroSection,
  AmenitiesSection,
  ExperienceSection,
  TestimonialsSection,
  CTASection,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main>
        <HeroSection />
        <AmenitiesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
