import type { Metadata } from 'next';
import ContactChannels from '../components/inner-pages/contact/ContactChannels';
import ContactDirectory from '../components/inner-pages/contact/ContactDirectory';
import ContactIntro from '../components/inner-pages/contact/ContactIntro';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact | NextGen Digitals',
  description: 'Contact the right team at NextGen Digitals for projects, partnerships, support, or careers.',
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-black">
      <ContactIntro />
      <ContactDirectory />
      <ContactChannels />
      <Footer />
    </main>
  );
}
