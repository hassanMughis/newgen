import type { Metadata } from 'next';
import WorkGallery from '../components/inner-pages/WorkGallery';
import WorkIntro from '../components/inner-pages/work/WorkIntro';
import Footer from '../components/Footer';
import TelephoneCTA from '../components/TelephoneCTA';

export const metadata: Metadata = {
  title: 'Work | NextGen Digitals',
  description: 'Explore selected identity, product, web, and campaign work by NextGen Digitals.',
};

export default function WorkPage() {
  return (
    <main className="overflow-x-clip bg-black">
      <WorkIntro />
      <WorkGallery />
      <TelephoneCTA />
      <Footer />
    </main>
  );
}
