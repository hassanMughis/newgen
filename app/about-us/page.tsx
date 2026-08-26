import type { Metadata } from 'next';
import AboutPageContent from '../components/inner-pages/AboutPageContent';
import Footer from '../components/Footer';
import TelephoneCTA from '../components/TelephoneCTA';

export const metadata: Metadata = {
  title: 'About Us | NextGen Digitals',
  description: 'Meet the independent creative team behind NextGen Digitals.',
};

export default function AboutUsPage() {
  return (
    <main className="overflow-x-clip bg-black">
      <AboutPageContent />
      <TelephoneCTA />
      <Footer />
    </main>
  );
}
