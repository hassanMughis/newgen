import type { Metadata } from 'next';
import PageHero from '../components/inner-pages/PageHero';
import ContactPageContent from '../components/inner-pages/ContactPageContent';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact | NextGen Digitals',
  description: 'Start a brand, product, web, or motion project with NextGen Digitals.',
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-black">
      <PageHero
        eyebrow="Start a conversation"
        title="Let’s build"
        accent="what’s next."
        description="Share the idea, challenge, or opportunity. We’ll bring a direct point of view and a practical path from ambition to launch."
      />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
