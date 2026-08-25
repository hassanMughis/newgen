'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

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
                <span className={`font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText}`}>
                  {card.tag}
                </span>
              </div>
              <span className={`font-mono text-[15px] sm:text-[17px] font-bold ${card.numberColor} tracking-[3px]`}>
                {card.number}
              </span>
            </div>

            {/* Title, Subtitle & Description */}
            <div className="my-auto py-2">
              <span className={`block font-mono text-[12px] sm:text-[13px] font-bold uppercase tracking-[2.5px] ${card.numberColor} mb-2`}>
                {card.subtitle}
              </span>
              <h3 className={`font-sans font-black ${card.textColor} text-[2rem] sm:text-[2.6rem] lg:text-[3rem] xl:text-[3.4rem] tracking-tight leading-[1.08] mb-4`}>
                {card.title}
              </h3>
              <p className={`font-sans ${card.descColor} text-[1rem] sm:text-[1.1rem] lg:text-[1.15rem] xl:text-[1.22rem] leading-[1.6] max-w-2xl font-normal`}>
                {card.description}
              </p>

              {/* Deliverable Badges / Capabilities */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
                {card.deliverables.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-[11px] sm:text-[12px] font-semibold px-3.5 py-1.5 rounded-full border ${card.tagBg} ${card.tagText}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className={`mt-6 pt-4 border-t ${card.lineColor} flex items-center justify-between`}>
              <span className={`font-sans text-[12px] sm:text-[13px] font-medium ${card.descColor} tracking-wide`}>
                NextGen Digital Capabilities &amp; Execution
              </span>
              <span className={`font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] ${card.textColor}`}>
                Explore Service →
              </span>
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
      tag: 'Experience Architecture',
      subtitle: 'Interface & User Journeys',
      title: 'UI/UX Design',
      description:
        'Crafting intuitive, high-performance interfaces where human psychology meets avant-garde aesthetics. We build design systems, fluid micro-interactions, and frictionless user flows designed to convert and captivate.',
      deliverables: ['Design Systems', 'Interactive Prototyping', 'User Research & Audits', 'Mobile & Web UI'],
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
      imageAlt: 'UI/UX Design Silver Metallic Shape',
    },
    {
      number: '02',
      tag: 'Engineering & Creative Code',
      subtitle: 'Modern Web Architecture',
      title: 'Web Development',
      description:
        'Building robust, scalable digital architectures using modern frameworks, Three.js/WebGL, and custom creative coding to ensure your platform performs with unmatched speed and aesthetic perfection.',
      deliverables: ['Next.js / React', 'Creative WebGL / 3D', 'Scalable APIs', 'Performance Optimization'],
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
      imageAlt: 'Web Development Abstract Shape',
      visualPosition: 'top-0 right-0 transform translate-x-[15%] -translate-y-[15%]',
    },
    {
      number: '03',
      tag: 'Spatial & Visual Artistry',
      subtitle: 'Dynamic Visual Systems',
      title: 'Motion & 3D',
      description:
        'Elevating brand narratives through cinematic motion graphics, 3D product visualizations, and spatial interactive assets that seize viewer focus, communicate value instantly, and boost engagement.',
      deliverables: ['3D Product Renders', 'Motion Graphics', 'Spatial Design', 'Interactive Animations'],
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
      imageAlt: 'Motion & 3D Visual Asset',
    },
    {
      number: '04',
      tag: 'Brand Strategy & Identity',
      subtitle: 'Market Positioning & Growth',
      title: 'Digital Branding',
      description:
        'Building iconic visual identities, comprehensive design guidelines, and cohesive digital touchpoints that scale effortlessly across global channels and resonate deeply with modern audiences.',
      deliverables: ['Visual Identity', 'Brand Guidelines', 'Typography & Assets', 'Market Positioning'],
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
      imageAlt: 'Digital Branding Iridescent Heart Art',
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
            const targetScale = 1 - (cards.length - index) * 0.05;
            return (
              <StackingCard
                key={card.number}
                card={card}
                index={index}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
