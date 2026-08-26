import type { Metadata } from 'next';
import ServicesPageContent from '../components/inner-pages/ServicesPageContent';
import ServicesIntro from '../components/inner-pages/services/ServicesIntro';
import ServicesPrinciples from '../components/inner-pages/services/ServicesPrinciples';
import ServicesShowcase from '../components/inner-pages/services/ServicesShowcase';
import Footer from '../components/Footer';
import TelephoneCTA from '../components/TelephoneCTA';

export const metadata: Metadata = {
  title: 'Services | NextGen Digitals',
  description: 'Brand, product, web development, motion, and 3D services from NextGen Digitals.',
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip bg-black">
      <ServicesIntro />
      <ServicesPageContent />
      <ServicesShowcase />
      <ServicesPrinciples />
      <TelephoneCTA />
      <Footer />
    </main>
  );
}
