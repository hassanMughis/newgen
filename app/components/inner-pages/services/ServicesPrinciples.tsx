'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const principles = [
  {
    number: '01',
    title: 'Strategic clarity',
    copy: 'We define the problem, audience and opportunity before deciding what the work should look like.',
    icon: '/ChatGPT_Image_Aug_26__2026__01_45_33_PM-removebg-preview 1.png',
  },
  {
    number: '02',
    title: 'Connected creativity',
    copy: 'Identity, interface and motion develop together, creating one recognisable brand experience.',
    icon: '/ChatGPT_Image_Aug_26__2026__01_45_33_PM-removebg-preview 6.png',
  },
  {
    number: '03',
    title: 'Technical craft',
    copy: 'Ideas are designed with production in mind, protecting quality from concept through launch.',
    icon: '/ChatGPT_Image_Aug_26__2026__01_45_33_PM-removebg-preview 5.png',
  },
  {
    number: '04',
    title: 'Useful momentum',
    copy: 'Clear milestones and focused collaboration keep decisions moving without sacrificing ambition.',
    icon: '/ChatGPT_Image_Aug_26__2026__01_45_33_PM-removebg-preview 2.png',
  },
  {
    number: '05',
    title: 'Long-term value',
    copy: 'We build flexible systems that can grow across channels, teams and future opportunities.',
    icon: '/ChatGPT_Image_Aug_26__2026__01_45_33_PM-removebg-preview 4.png',
  },
];

type Principle = (typeof principles)[number];

function PrincipleRow({ principle }: { principle: Principle }) {
  const iconRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const startFloating = () => {
    const icon = iconRef.current;
    if (!icon || animationRef.current?.playState === 'running') return;

    animationRef.current = icon.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-10px)', offset: 0.5 },
        { transform: 'translateY(0px)' },
      ],
      {
        duration: 1800,
        iterations: Infinity,
        easing: 'ease-in-out',
      },
    );
  };

  const settleIcon = () => {
    const icon = iconRef.current;
    if (!icon || !animationRef.current) return;

    const currentTransform = window.getComputedStyle(icon).transform;
    animationRef.current.cancel();
    animationRef.current = icon.animate(
      [
        { transform: currentTransform === 'none' ? 'translateY(0px)' : currentTransform },
        { transform: 'translateY(0px)' },
      ],
      {
        duration: 520,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    );
  };

  return (
    <article
      onPointerEnter={startFloating}
      onPointerLeave={settleIcon}
      className="group grid gap-4 border-b border-white/14 px-3 py-7 transition-[background-color,border-color,box-shadow] duration-500 first:border-t hover:border-[#ADF531]/30 hover:bg-[#ADF531]/[0.055] hover:shadow-[inset_3px_0_0_#ADF531] sm:grid-cols-[52px_76px_.7fr_1fr] sm:items-center sm:gap-6 sm:px-4 lg:grid-cols-[60px_92px_.7fr_1fr] lg:gap-7 lg:py-8"
    >
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#ADF531]">/ {principle.number}</span>
      <div className="relative h-16 w-20 sm:h-[70px] sm:w-[76px] lg:h-[78px] lg:w-[92px]">
        <div ref={iconRef} className="relative h-full w-full will-change-transform">
          <Image src={principle.icon} alt="" fill sizes="92px" className="object-contain drop-shadow-[0_10px_20px_rgba(255,255,255,0.08)]" />
        </div>
      </div>
      <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium tracking-[-0.04em] transition-colors duration-500 group-hover:text-[#ADF531] sm:text-2xl">{principle.title}</h3>
      <p className="max-w-[560px] text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/65">{principle.copy}</p>
    </article>
  );
}

export default function ServicesPrinciples() {
  return (
    <section className="bg-black px-4 pb-24 text-white sm:px-6 sm:pb-32 lg:px-8 lg:pb-40 xl:px-10">
      <div className="mx-auto max-w-[1920px] border-t border-white/15 pt-8">
        <div className="grid gap-12 lg:grid-cols-[.58fr_1.42fr] lg:gap-16">
          <div data-reveal="left" className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#ADF531]">How we partner</p>
            <h2 className="mt-5 max-w-[620px] font-[family-name:var(--font-syne)] text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.9] tracking-[-0.07em]">Principles over process theatre.</h2>
            <Link href="/contact" className="mt-8 inline-flex rounded-full border border-[#ADF531]/60 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#ADF531] transition duration-300 hover:bg-[#ADF531] hover:text-black">Start a project ↗</Link>
          </div>

          <div data-reveal="up" data-reveal-stagger>
            {principles.map((principle) => (
              <PrincipleRow key={principle.number} principle={principle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
