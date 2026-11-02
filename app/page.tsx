import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import HowWeDoIt from './components/HowWeDoIt';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PartnersSection from './components/PartnersSection';
import TelephoneCTA from './components/TelephoneCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f6f4] overflow-x-clip">
      <Hero />
      <BrandTicker />
      <AboutSection />
      <CTASection />
      <HowWeDoIt />
      <Expertise />
      <Testimonials />
      <PartnersSection />
      <FAQSection />
      <TelephoneCTA />
      <Footer />
    </main>
  );
}
