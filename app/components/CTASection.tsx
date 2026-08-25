'use client';

export default function CTASection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-black py-20 lg:py-28 px-4 sm:px-6 md:px-8">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 pointer-events-none"
        src="/your-video.mp4"
      />

      {/* Layered Gradient & Radial Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(173,245,49,0.09),_transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Section Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto text-center flex flex-col items-center">
        
        {/* Category Pill with Live Pulse */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2.5 rounded-full bg-[#ADF531]/10 border border-[#ADF531]/30 backdrop-blur-md px-5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ADF531] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ADF531]"></span>
          </span>
          <span className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#ADF531]">
            NextGen Collective
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-syne font-black text-white leading-[1.12] tracking-tight mb-6 text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] max-w-none">
          Where Strategy <span className="text-[#ADF531]">Meets Scalable Growth.</span>
        </h2>

        {/* Subtitle Description */}
        <p className="font-sans text-[#b8b8b8] text-[1.05rem] sm:text-[1.18rem] md:text-[1.28rem] leading-[1.7] max-w-4xl lg:max-w-5xl mb-11">
          NextGen Digital brings ideas and execution together — empowering ambitious brands and creators to discover custom strategies, scale faster, and build high-impact digital experiences.
        </p>

        {/* Team Avatars & Impact Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 mb-12 bg-white/[0.03] border border-white/10 backdrop-blur-xl px-6 py-3.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="flex shrink-0 items-center -space-x-2.5">
            {[12, 32, 47, 60].map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/80?img=${id}`}
                alt="NGD team member"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-[#111] object-cover"
              />
            ))}
          </div>

          <div className="text-center sm:text-left text-[13px] sm:text-[14px] font-medium leading-[1.35]">
            <p className="text-white font-bold flex items-center justify-center sm:justify-start gap-1.5">
              Empowering Brands &amp; Creators
              <span className="text-[#ADF531] text-xs">✦</span>
            </p>
            <p className="text-[#888]">Connecting Strategy, Design &amp; Scalable Growth</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <a
            href="#contact"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-3
              bg-[#ADF531] text-black
              font-mono text-[12.5px] sm:text-[13.5px] font-bold tracking-[2px] uppercase
              h-[54px] sm:h-[60px] px-9 sm:px-11
              transition-all duration-300
              hover:bg-[#c4ff3e]
              hover:shadow-[0_0_35px_rgba(173,245,49,0.45)]
              hover:-translate-y-0.5
            "
          >
            Start Your Journey
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#services"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2.5
              border border-white/20 text-white
              font-mono text-[12.5px] sm:text-[13.5px] font-bold tracking-[2px] uppercase
              h-[54px] sm:h-[60px] px-9 sm:px-11
              transition-all duration-300
              hover:border-[#ADF531] hover:text-[#ADF531] hover:bg-[#ADF531]/5
              hover:-translate-y-0.5
            "
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
}