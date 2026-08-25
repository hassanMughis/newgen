import type { Metadata } from 'next';
import PageHero from '../components/inner-pages/PageHero';
import ServicesPageContent from '../components/inner-pages/ServicesPageContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Services | NextGen Digitals',
  description: 'Brand, product, web development, motion, and 3D services from NextGen Digitals.',
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip bg-black">
      <PageHero
        eyebrow="Our capabilities"
        title="Full-cycle creativity."
        accent="One focused team."
        description="From the first strategic question to the final production detail, we unite disciplines around one clear goal: moving your brand forward."
      />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}
