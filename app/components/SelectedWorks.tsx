'use client';

export default function SelectedWorks() {
  return (
    <section id="work" className="relative bg-black text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ── SECTION HEADER ── */}
        <div className="flex items-end justify-between pb-4">
          <h2 className="font-syne font-black text-white text-[2.2rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] tracking-tight leading-none uppercase">
            Selected Works
          </h2>
          <a
            href="#work"
            className="font-mono text-[11px] sm:text-[12px] font-bold text-[#ADF531] tracking-[2px] uppercase hover:text-[#c4ff3e] hover:underline pb-1 transition-all"
          >
            VIEW ALL [+]
          </a>
        </div>
        
        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-white/15 mb-10 sm:mb-16" />


        {/* ── TOP SHOWCASE: Vertical "work" label + 3 Phone Cards ── */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 lg:gap-10 mb-14 sm:mb-20">
          
          {/* Vertical "work" typography */}
          <div className="hidden md:flex items-center justify-center pr-2 lg:pr-6 select-none">
            <span
              className="font-syne font-black text-white text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] uppercase tracking-tighter"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              work
            </span>
          </div>

          {/* 3 Showcase Phone Cards with strict 9:16 aspect ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 flex-1 w-full">
            
            {/* Card 1: Royal Blue Brand Card */}
            <div className="group relative aspect-[9/16] w-full rounded-[32px] sm:rounded-[38px] bg-[#08119E] border border-blue-600/30 overflow-hidden flex flex-col items-center justify-center p-6 shadow-[0_20px_50px_rgba(8,17,158,0.35)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(8,17,158,0.5)]">
              {/* Radial gradient sheen */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_65%)]" />
              
              {/* Center Emblem */}
              <div className="relative z-10 flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="3" />
                  <circle cx="20" cy="20" r="2.5" fill="currentColor" />
                  <circle cx="28" cy="20" r="2.5" fill="currentColor" />
                  <circle cx="24" cy="27" r="2" fill="currentColor" />
                  <circle cx="18" cy="26" r="1.5" fill="currentColor" />
                  <circle cx="30" cy="26" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Card 2: Pastel Rose Chocolate Brownie Card */}
            <div className="group relative aspect-[9/16] w-full rounded-[32px] sm:rounded-[38px] bg-[#EE8FA8] border border-pink-400/30 overflow-hidden flex flex-col items-center justify-center p-6 shadow-[0_20px_50px_rgba(238,143,168,0.25)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(238,143,168,0.4)]">
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Center Brownie Image */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl mb-4 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/brownie.jpg"
                    alt="Chocolate Brownie"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Script Typography */}
                <span className="font-serif italic text-black/80 font-bold text-lg sm:text-2xl tracking-wide">
                  Chocolate &amp;
                </span>
                <span className="font-serif italic text-black/80 font-bold text-base sm:text-xl -mt-1 tracking-wide">
                  Brownie
                </span>
              </div>
            </div>

            {/* Card 3: Glowing Dark Mint App Icon Card */}
            <div className="group relative aspect-[9/16] w-full rounded-[32px] sm:rounded-[38px] bg-[#071311] border border-[#16332d] overflow-hidden flex flex-col items-center justify-center p-6 shadow-[0_20px_50px_rgba(10,35,30,0.5)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(80,240,180,0.2)]">
              {/* Mint ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(95,245,190,0.18),_transparent_70%)]" />

              {/* Glowing App Squircle Icon */}
              <div className="relative z-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[24px] sm:rounded-[30px] bg-[#7CF8C5] shadow-[0_0_40px_rgba(124,248,197,0.5)] flex items-center justify-center relative">
                  {/* Quote / emblem graphic */}
                  <span className="font-syne font-black text-black text-3xl sm:text-5xl select-none tracking-tight">
                    aa
                  </span>

                  {/* Overlapping User Avatar Badge */}
                  <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-black overflow-hidden shadow-lg">
                    <img
                      src="https://i.pravatar.cc/80?img=33"
                      alt="Creator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* ── BOTTOM SHOWCASE: 2-Column Grid (PCKD + MEAT DUKAN / FUNCHI) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 sm:gap-10 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* Left: PCKD Tall Feature Card (Height matches right column exactly) */}
          <div className="flex flex-col h-full group">
            <div className="relative w-full flex-1 min-h-[460px] sm:min-h-[540px] lg:min-h-0 rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0c1c18] border border-[#1b3830] shadow-2xl transition-all duration-500 group-hover:border-[#ADF531]/50 group-hover:shadow-[0_20px_60px_rgba(173,245,49,0.15)]">
              <img
                src="/pckd.jpg"
                alt="PCKD Whey Protein"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="font-sans font-bold uppercase tracking-wider text-[15px] sm:text-[17px] text-white mt-4 shrink-0">
              PCKD
            </p>
          </div>

          {/* Right: Stacked Cards (Meat Dukan & Funchi) */}
          <div className="flex flex-col justify-between gap-8 sm:gap-10 lg:gap-8 h-full">
            
            {/* Top: Meat Dukan */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[16/9] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#181111] border border-[#362222] shadow-2xl transition-all duration-500 group-hover:border-red-500/40 group-hover:shadow-[0_20px_60px_rgba(200,50,50,0.15)]">
                <img
                  src="/meat-dukan.jpg"
                  alt="Meat Dukan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-sans font-bold uppercase tracking-wider text-[15px] sm:text-[17px] text-white mt-4 shrink-0">
                MEAT DUKAN
              </p>
            </div>

            {/* Bottom: Funchi Storefront */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[16/9] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#181111] border border-[#362222] shadow-2xl transition-all duration-500 group-hover:border-yellow-500/40 group-hover:shadow-[0_20px_60px_rgba(240,180,40,0.15)]">
                <img
                  src="/funchi.jpg"
                  alt="Funchi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-sans font-bold uppercase tracking-wider text-[15px] sm:text-[17px] text-white mt-4 shrink-0">
                FUNCHI
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
