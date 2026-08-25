import Hero from './components/Hero';
import WeMakeItWork from './components/WeMakeItWork';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import HowWeDoIt from './components/HowWeDoIt';
import SelectedWorks from './components/SelectedWorks';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BrandTicker from './components/BrandTicker';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <Hero />
      <BrandTicker />
      <WeMakeItWork />
      <AboutSection />
      <CTASection />
      <HowWeDoIt />
      <SelectedWorks />
      <Expertise />
      <Testimonials />
      <FAQSection />
      <Footer />
    </main>
  );
}
