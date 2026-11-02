import AboutIntro from './about/AboutIntro';
import AboutJournal from './about/AboutJournal';
import AboutLeadership from './about/AboutLeadership';
import AboutMosaic from './about/AboutMosaic';
import AboutRibbon from './about/AboutRibbon';

export default function AboutPageContent() {
  return (
    <>
      <AboutIntro />
      <AboutRibbon />
      <AboutLeadership />
      <AboutMosaic />
      <AboutJournal />
    </>
  );
}
