'use client';

export default function HowWeDoIt() {
  const steps = [
    {
      step: 'STEP 1',
      title: 'Discovery & Audit',
      description: 'We analyze your brand goals, target market, and growth potential to build a custom roadmap.',
      icon: (
        <svg className="w-12 h-12 text-[#ADF531]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* User profile with search glass */}
          <circle cx="20" cy="18" r="7" />
          <path d="M9 36c0-6 5-10 11-10" />
          <circle cx="34" cy="30" r="7" />
          <path d="M39 35l5 5" />
          <circle cx="10" cy="16" r="3" />
          <path d="M4 28c0-3 2.5-5 5.5-5" />
        </svg>
      )
    },
    {
      step: 'STEP 2',
      title: 'Curate & Align',
      description: 'We match you with hand-selected designers, engineers, and digital growth specialists.',
      icon: (
        <svg className="w-12 h-12 text-[#ADF531]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Team exchange and collaborative direction */}
          <circle cx="17" cy="17" r="5" />
          <path d="M10 31c0-4 3.5-7 7-7s7 3 7 7" />
          <circle cx="33" cy="29" r="5" />
          <path d="M26 43c0-4 3.5-7 7-7s7 3 7 7" />
          <path d="M26 15h12M34 11l4 4-4 4" />
          <path d="M22 33H10M14 29l-4 4 4 4" />
        </svg>
      )
    },
    {
      step: 'STEP 3',
      title: 'Build & Execute',
      description: 'Transparent, high-velocity sprints delivering bespoke design, code, and digital assets.',
      icon: (
        <svg className="w-12 h-12 text-[#ADF531]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Calendar with verified check */}
          <rect x="8" y="10" width="30" height="28" rx="5" />
          <path d="M8 18h30" />
          <path d="M16 6v8M30 6v8" />
          <circle cx="34" cy="34" r="8" fill="#000" stroke="currentColor" strokeWidth="2.2" />
          <path d="M30.5 34l2.5 2.5 5-5" strokeWidth="2.4" />
        </svg>
      )
    },
    {
      step: 'STEP 4',
      title: 'Launch & Scale',
      description: 'Seamless deployment, real-time analytics, and iterative scaling to maximize your ROI.',
      icon: (
        <svg className="w-12 h-12 text-[#ADF531]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Growth bar chart with launch orb */}
          <circle cx="14" cy="14" r="5" />
          <path d="M14 11a3 3 0 0 0 0 6M11 14h6" />
          <rect x="10" y="24" width="8" height="16" rx="2" />
          <rect x="22" y="18" width="8" height="22" rx="2" />
          <rect x="34" y="10" width="8" height="30" rx="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="relative bg-black text-white py-24 sm:py-32 lg:py-36 overflow-hidden">
      
      {/* Background Subtle Ambience at bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(173,245,49,0.06),_transparent_70%)] pointer-events-none" />

      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
        
        {/* Category Pill with Live Pulse */}
        <div className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 rounded-full bg-[#ADF531]/10 border border-[#ADF531]/30 backdrop-blur-md px-5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ADF531] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ADF531]"></span>
          </span>
          <span className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#ADF531]">
            HOW IT WORKS
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-syne font-black text-white tracking-tight mb-20 sm:mb-24 text-[2.8rem] sm:text-[3.8rem] md:text-[4.6rem] lg:text-[5.4rem] leading-none">
          how we do it
        </h2>

        {/* Process Steps & Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-12 sm:gap-14 lg:gap-3 xl:gap-5">
          {steps.map((item, index) => (
            <div key={item.step} className="contents">
              
              {/* Step Card / Column */}
              <div className="flex flex-col items-center text-center group">
                
                {/* Icon Container */}
                <div className="h-20 w-20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Step Indicator */}
                <span className="font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-[2.5px] text-[#ADF531] mb-2.5">
                  {item.step}
                </span>

                {/* Step Title */}
                <h3 className="font-syne font-bold text-white text-[1.25rem] sm:text-[1.4rem] lg:text-[1.35rem] xl:text-[1.5rem] tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans text-[#888] text-[0.92rem] sm:text-[0.98rem] leading-[1.65] max-w-[260px] sm:max-w-[280px]">
                  {item.description}
                </p>

              </div>

              {/* Arched Dashed Connecting Arrow (between steps on lg screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pt-5 w-[70px] xl:w-[105px] select-none pointer-events-none">
                  <svg viewBox="0 0 100 36" fill="none" className="w-full h-auto text-zinc-600">
                    <circle cx="6" cy="28" r="3" fill="currentColor" />
                    <path
                      d="M 10 26 C 35 4, 68 4, 90 22"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    <path
                      d="M 83 22 L 91 24 L 90 15"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
