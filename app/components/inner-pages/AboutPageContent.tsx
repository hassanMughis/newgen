import AboutIntro from './about/AboutIntro';
import AboutJournal from './about/AboutJournal';
import AboutLeadership from './about/AboutLeadership';
import AboutMosaic from './about/AboutMosaic';
import AboutRibbon from './about/AboutRibbon';
import Testimonials from '../Testimonials';

export default function AboutPageContent() {
  return (
    <>
      <AboutIntro />
      <AboutRibbon />
      <AboutLeadership />
      <AboutMosaic />
      <section className="bg-black px-4 pb-0 pt-14 text-white sm:px-6 sm:pt-18 lg:px-8 lg:pt-20 xl:px-10">
        <div className="mx-auto grid max-w-[1920px] gap-6 border-t border-white/15 pt-7 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#ADF531]">Client voices</p>
            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              What our clients say.
            </h2>
          </div>
          <p className="max-w-[430px] text-sm leading-6 text-white/48 md:justify-self-end">
            Real partnerships, honest feedback and digital work designed to create lasting value.
          </p>
        </div>
      </section>
      <Testimonials hideHeader darkCards />
      <AboutJournal />
    </>
  );
}
