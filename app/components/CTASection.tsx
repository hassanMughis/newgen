'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative mx-3 flex min-h-[72vh] items-center justify-center overflow-hidden rounded-[32px] bg-white px-4 py-20 shadow-[0_18px_60px_rgba(23,24,26,0.06)] sm:mx-5 sm:px-6 md:px-8 lg:mx-8 lg:rounded-[40px] lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(140,198,63,0.12),_transparent_38%)]" />

      {/* Section Content */}
      <div
        data-reveal="zoom"
        data-reveal-stagger
        className="relative z-10 w-full max-w-[1440px] mx-auto text-center flex flex-col items-center"
      >
        
        {/* Category Pill with Live Pulse */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#8cc63f]/35 bg-[#8cc63f]/10 px-5 py-2 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8cc63f] opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8cc63f]"></span>
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[2px] text-[#618d27] sm:text-[12px]">
            NextGen Collective
          </span>
        </div>

        {/* Main Headline */}
        <h2 className=" text-[#17181a] xl:leading-[1.08]  mb-4 lg:mb-3 xl:mb-6  font-semibold leading-[0.82] tracking-[-0.075em] font-syne  text-[2.3rem] sm:text-[3.2rem] lg:text-[4.55rem] xl:text-[5.8rem] 2xl:text-[6.6rem] max-w-[1200px]">
          Where Strategy <span className="text-[#8cc63f]">Meets Scalable Growth.</span>
        </h2>

        {/* Subtitle Description */}
        <p className="font-sans text-[#6b6f76] text-[0.85rem] sm:text-[1.08rem] md:text-[1.18rem] leading-[1.5] max-w-4xl lg:max-w-5xl mb-11">
          NextGen Digital brings ideas and execution together — empowering ambitious brands and creators to discover custom strategies, scale faster, and build high-impact digital experiences.
        </p>

        {/* Team Avatars & Impact Badge */}
        <div className="mb-12 flex flex-col items-center gap-3.5 rounded-full border border-[#e3e4e1] bg-[#f6f6f4] px-6 py-3.5 shadow-[0_12px_35px_rgba(23,24,26,0.08)] sm:flex-row sm:gap-5">
          <div className="flex shrink-0 items-center -space-x-2.5">
            {[12, 32, 47, 60].map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/80?img=${id}`}
                alt="NGD team member"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-[#e3e4e1] object-cover"
              />
            ))}
          </div>

          <div className="text-center sm:text-left text-[13px] sm:text-[14px] font-medium leading-[1.35]">
            <p className="text-[#17181a] font-bold flex items-center justify-center sm:justify-start gap-1.5">
              Empowering Brands &amp; Creators
              <span className="text-xs text-[#8cc63f]">✦</span>
            </p>
            <p className="text-[#6b6f76]">Connecting Strategy, Design &amp; Scalable Growth</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Link
            href="/contact"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-3
              bg-[#8cc63f] text-[#1d2a0a]
              font-mono text-[12.5px] sm:text-[13.5px] font-bold tracking-[2px] uppercase
              h-[54px] sm:h-[60px] px-9 sm:px-11
              transition-all duration-300
              hover:bg-[#7eb238]
              hover:shadow-[0_12px_30px_rgba(140,198,63,0.28)]
              hover:-translate-y-0.5
            "
          >
            Start Your Journey
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/services"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2.5
              border border-[#e3e4e1] text-[#17181a]
              font-mono text-[12.5px] sm:text-[13.5px] font-bold tracking-[2px] uppercase
              h-[54px] sm:h-[60px] px-9 sm:px-11
              transition-all duration-300
              hover:border-[#8cc63f] hover:bg-[#8cc63f]/10 hover:text-[#618d27]
              hover:-translate-y-0.5
            "
          >
            Explore Services
          </Link>
        </div>

      </div>
    </section>
  );
}
