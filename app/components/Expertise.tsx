'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Link from 'next/link';

interface CardData {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
  bgClass: string;
  textColor: string;
  descColor: string;
  lineColor: string;
  numberColor: string;
  badgeBg: string;
  badgeText: string;
  tagBg: string;
  tagText: string;
  imageSrc?: string;
  imageAlt?: string;
  customArt?: React.ReactNode;
  visualPosition?: string;
}

function StackingCard({
  card,
  index,
  progress,
  range,
  targetScale,
}: {
  card: CardData;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="relative h-auto mb-5 sm:mb-6 lg:h-screen lg:mb-0 lg:sticky lg:top-0 flex items-center justify-center">
      <motion.div
        data-cursor="focus"
        style={{
          scale,
          top: `calc(0% + ${index * 22}px)`,
        }}
        className={`
          expertise-card
          relative
          w-full
          min-h-[500px] sm:min-h-[540px] lg:h-[580px] xl:h-[620px]
          rounded-[30px] sm:rounded-[40px] lg:rounded-[48px]
          overflow-hidden
          ${card.bgClass}
          origin-top
          transition-shadow duration-500
        `}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr] items-center h-full">
          
          {/* Left Content Column */}
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 lg:p-14 xl:p-16 pr-6 lg:pr-10 z-10">
            
            {/* Top Bar: Icon + Category Badge + Card Number */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm">
                  {card.icon}
                </div>
                <span className={`font-mono text-[9px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[1.6px] px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText}`}>
                  {card.tag}
                </span>
              </div>
              <span className={`font-mono text-[12px] sm:text-[14px] lg:text-[15px] font-bold ${card.numberColor} tracking-[2.5px]`}>
                {card.number}
              </span>
            </div>

            {/* Title, Subtitle & Description */}
            <div className="my-auto py-2">
              <span className={`block font-mono text-[10px] sm:text-[11px] lg:text-[12px] font-bold uppercase tracking-[2px] ${card.numberColor} mb-2`}>
                {card.subtitle}
              </span>
              <h3 className={`font-sans font-black ${card.textColor} text-[1.75rem] sm:text-[2.15rem] lg:text-[2.6rem] xl:text-[3rem] tracking-tight leading-[1.08] mb-4`}>
                {card.title}
              </h3>
              <p className={`font-sans ${card.descColor} text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.55] max-w-2xl font-normal`}>
                {card.description}
              </p>

              {/* Deliverable Badges / Capabilities */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
                {card.deliverables.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-[9px] sm:text-[10px] lg:text-[11px] font-semibold px-3.5 py-1.5 rounded-full border ${card.tagBg} ${card.tagText}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className={`mt-6 pt-4 border-t ${card.lineColor} flex items-center justify-between`}>
              <span className={`font-sans text-[10px] sm:text-[11px] lg:text-[12px] font-medium ${card.descColor} tracking-wide`}>
                NextGen Digital Capabilities &amp; Execution
              </span>
              <Link href="/services" className={`font-mono text-[9px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[1.6px] ${card.textColor} transition-opacity hover:opacity-60`}>
                Explore Service →
              </Link>
            </div>

          </div>

          {/* Right 3D Visual Column */}
          <div className="hidden lg:flex items-center justify-end h-full relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className={`absolute flex items-center justify-center pointer-events-none select-none ${
                card.visualPosition ?? "bottom-0 right-0 transform translate-x-[15%] translate-y-[15%]"
              }`}
            >
              {card.imageSrc ? (
                <div className="relative w-[480px] h-[480px] sm:w-[540px] sm:h-[540px] lg:w-[580px] lg:h-[580px] xl:w-[640px] xl:h-[640px]">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                card.customArt
              )}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cards: CardData[] = [
    {
      number: '01',
      tag: 'Social Media Strategy',
      subtitle: 'Performance, Content & Audience Insights',
      title: 'Social Media Audit',
      description:
        "A social media audit systematically evaluates, analyzes, and optimizes a business's profiles, performance metrics, and content strategies. Regular audits help ecommerce businesses uncover performance gaps, refine target audience engagement, stay ahead of competitors, and maintain a strong online presence.",
      deliverables: ['Profile Evaluation', 'Performance Analysis', 'Content Review', 'Audience Insights'],
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 6L7 20M12 6l5 14M9 15h6" />
          <circle cx="12" cy="6" r="1.5" fill="currentColor" />
        </svg>
      ),
      bgClass: 'bg-[#F2F2F2] text-black border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.6)]',
      textColor: 'text-black',
      descColor: 'text-black/80',
      lineColor: 'border-black/15',
      numberColor: 'text-black/45',
      badgeBg: 'bg-black/10',
      badgeText: 'text-black font-semibold',
      tagBg: 'bg-black/5 border-black/15',
      tagText: 'text-black/90',
      imageSrc: '/pngtree-silver-metallic-shape-outlined-png-image_11665385 1.png',
      imageAlt: 'Social Media Audit Silver Metallic Shape',
    },
    {
      number: '02',
      tag: 'Search & Content Strategy',
      subtitle: 'Organic Visibility & Brand Authority',
      title: 'SEO & Content Writing',
      description:
        'SEO and strategic content writing work together to increase measurable online success and brand visibility. SEO provides the technical roadmap that helps search engines like Google discover your website, while compelling content engages visitors, solves their problems, and builds trust. Combining technical optimization, targeted keyword placement, and high-value messaging drives organic traffic and turns standard visitors into loyal, paying customers.',
      deliverables: ['Technical SEO', 'Keyword Strategy', 'Content Writing', 'Conversion Copy'],
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 7L3 12l5 5M16 7l5 5-5 5" />
        </svg>
      ),
      bgClass: 'bg-[#ADF531] text-black border border-[#c4ff3e]/40 shadow-[0_35px_80px_rgba(173,245,49,0.35)]',
      textColor: 'text-black',
      descColor: 'text-black/85',
      lineColor: 'border-black/15',
      numberColor: 'text-black/45',
      badgeBg: 'bg-black/10',
      badgeText: 'text-black font-semibold',
      tagBg: 'bg-black/5 border-black/15',
      tagText: 'text-black/90',
      imageSrc: '/image 4.png',
      imageAlt: 'SEO and Content Writing Abstract Shape',
      visualPosition: 'top-0 right-0 transform translate-x-[15%] -translate-y-[15%]',
    },
    {
      number: '03',
      tag: 'Visual Communication',
      subtitle: 'Creative Assets & Brand Identity',
      title: 'Graphic Designing',
      description:
        'Graphic design powers modern visual communication and brand identity. Through typography, color psychology, imagery, and structured layouts, it turns complex messages into scroll-stopping visuals. From memorable logos, flyers, and brochures to high-converting social creatives and website assets, impactful design shapes public perception, builds trust and authority, and persuades target audiences to engage, connect, and become loyal clients.',
      deliverables: ['Logo Identity', 'Marketing Collateral', 'Social Creatives', 'Website Visuals'],
      icon: (
        <svg className="w-6 h-6 text-[#ADF531]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="7" ry="4" transform="rotate(-30 12 12)" />
          <path d="M7 15c1 2.5 3 4 5 4s4-1.5 5-4" />
          <path d="M7 9c1-2.5 3-4 5-4s4 1.5 5 4" />
        </svg>
      ),
      bgClass: 'bg-[#212326] text-white border border-white/10 shadow-[0_35px_80px_rgba(0,0,0,0.85)]',
      textColor: 'text-white',
      descColor: 'text-white/75',
      lineColor: 'border-white/15',
      numberColor: 'text-white/35',
      badgeBg: 'bg-[#ADF531]/15',
      badgeText: 'text-[#ADF531] font-semibold',
      tagBg: 'bg-white/5 border-white/15',
      tagText: 'text-white/85',
      imageSrc: '/01_comp-img.webp',
      imageAlt: 'Graphic Designing Visual Asset',
    },
    {
      number: '04',
      tag: 'Experience Architecture',
      subtitle: 'Interface & User Journeys',
      title: 'UX/UI Web Designing',
      description:
        'UX/UI web design powers every successful digital product. User Experience (UX) uses wireframing, architecture, and user psychology to create an effortless customer journey, while User Interface (UI) shapes high-end aesthetics, typography, interactive elements, and layouts. Blending research-backed functionality with modern visual appeal creates websites that are both stunning and intuitive, reducing bounce rates, boosting engagement, and maximizing sales conversions.',
      deliverables: ['UX Research', 'Wireframing', 'Interface Design', 'Interactive Prototyping'],
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.3 6.3l2.2 2.2M15.5 15.5l2.2 2.2M6.3 17.7l2.2-2.2M15.5 8.5l2.2-2.2" />
        </svg>
      ),
      bgClass: 'bg-[#F2F2F2] text-black border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.6)]',
      textColor: 'text-black',
      descColor: 'text-black/80',
      lineColor: 'border-black/15',
      numberColor: 'text-black/45',
      badgeBg: 'bg-black/10',
      badgeText: 'text-black font-semibold',
      tagBg: 'bg-black/5 border-black/15',
      tagText: 'text-black/90',
      imageSrc: '/iridescent-heart.png',
      imageAlt: 'UX/UI Web Designing Iridescent Heart Art',
    },
    {
      number: '05',
      tag: 'Creative Production',
      subtitle: 'Visual Storytelling & Multimedia',
      title: 'Media & Production',
      description:
        'Media and production bring brand stories to life through dynamic visual storytelling. From pre-production planning and high-definition video shoots to professional photography, motion graphics, and post-production editing, they turn complex ideas into captivating multimedia. Tailored assets for ad campaigns, social media, corporate showcases, and commercial promotions build emotional connections, strengthen brand authority, and drive engagement across digital platforms.',
      deliverables: ['Video Production', 'Photography', 'Motion Graphics', 'Post-Production'],
      icon: (
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="14" height="14" rx="2" />
          <path d="m17 10 4-2v8l-4-2" />
        </svg>
      ),
      bgClass: 'bg-[#ADF531] text-black border border-[#c4ff3e]/40 shadow-[0_35px_80px_rgba(173,245,49,0.35)]',
      textColor: 'text-black',
      descColor: 'text-black/85',
      lineColor: 'border-black/15',
      numberColor: 'text-black/45',
      badgeBg: 'bg-black/10',
      badgeText: 'text-black font-semibold',
      tagBg: 'bg-black/5 border-black/15',
      tagText: 'text-black/90',
      imageSrc: '/pngtree-3d-black-squiggle-png-wavy-shape-clipart-png-image_16282598 1 (1).png',
      imageAlt: 'Black 3D Squiggle for Media and Production',
    },
    {
      number: '06',
      tag: 'Digital Engineering',
      subtitle: 'Performance, Security & Scale',
      title: 'Website Development',
      description:
        "Website development forms the core technical architecture of your business's digital infrastructure. It transforms custom design concepts into fully functional, high-performing websites through custom coding, clean programming, secure database integration, and seamless backend development. Responsive mobile optimization, fast loading speeds, robust security, and e-commerce integration ensure your platform performs flawlessly, protects user data, and delivers an exceptional experience that powers business growth.",
      deliverables: ['Custom Development', 'Mobile Optimization', 'E-Commerce', 'Security & Performance'],
      icon: (
        <svg className="w-6 h-6 text-[#ADF531]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />
        </svg>
      ),
      bgClass: 'bg-[#212326] text-white border border-white/10 shadow-[0_35px_80px_rgba(0,0,0,0.85)]',
      textColor: 'text-white',
      descColor: 'text-white/75',
      lineColor: 'border-white/15',
      numberColor: 'text-white/35',
      badgeBg: 'bg-[#ADF531]/15',
      badgeText: 'text-[#ADF531] font-semibold',
      tagBg: 'bg-white/5 border-white/15',
      tagText: 'text-white/85',
      imageSrc: '/3d-chrome-star-with-sharp-futuristic-design-on-transparent-background-modern-metallic-element-cut-out-png 1.png',
      imageAlt: 'Chrome Futuristic Star for Website Development',
      visualPosition: 'top-0 right-0 transform translate-x-[15%] -translate-y-[15%]',
    },
  ];

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative bg-black text-white pt-20 pb-12 sm:pb-20 lg:pb-32 overflow-visible"
    >
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ── SECTION TITLE ── */}
        <h2 className="font-syne font-semibold text-white text-[2.25rem] sm:text-[3.8rem] md:text-[5.8rem] lg:text-[6.5rem] tracking-tight leading-none uppercase mb-8 sm:mb-10 lg:mb-6">
          Expertise
        </h2>

        {/* ── INTERACTIVE FRAMER MOTION STACKING CARDS ── */}
        <div className="relative">
          {cards.map((card, index) => {
            const stackProgress = index / cards.length;
            const targetScale = 1 - ((cards.length - index) / cards.length) * 0.2;
            return (
              <StackingCard
                key={card.number}
                card={card}
                index={index}
                progress={scrollYProgress}
                range={[stackProgress, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
