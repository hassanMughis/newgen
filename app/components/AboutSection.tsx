export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        bg-black
        min-h-screen
        flex
        items-center
        py-12
        md:py-16
        lg:py-10
        xl:py-20
        overflow-x-clip
      "
    >
      <div
        data-reveal="left"
        data-reveal-stagger
        className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-6 xl:px-10"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr_1.15fr] lg:items-stretch lg:gap-4 xl:gap-8">

          {/* ── COL 1 (LEFT): Green feature card + Avatars below ── */}
          <div className="flex flex-col justify-between gap-4 lg:gap-3.5 xl:gap-6 h-full">

            {/* Green Feature Card */}
            <div className="flex flex-1 flex-col justify-between bg-[#ADF531] p-6 sm:p-8 lg:p-6 xl:p-10 2xl:p-12 rounded-[24px] lg:rounded-[26px] xl:rounded-[32px] text-black">
              <div>
                <h3 className="font-sans font-bold text-black leading-[1.15] tracking-tight text-[1.4rem] sm:text-[1.65rem] lg:text-[1.25rem] xl:text-[1.9rem] 2xl:text-[2.3rem] max-w-[420px]">
                  Built for the digital community
                </h3>
              </div>

              <p className="font-sans font-medium text-black/90 text-[0.92rem] sm:text-[1.02rem] lg:text-[0.82rem] xl:text-[1.05rem] 2xl:text-[1.22rem] leading-[1.55] lg:leading-[1.45] xl:leading-[1.65] max-w-[460px] mt-8 lg:mt-5 xl:mt-14">
                NextGen Digital is creating a simpler way for ambitious brands and creators
                to discover custom strategies and build scalable experiences that fit their goals.
              </p>
            </div>

            {/* Team Avatars & Text below card */}
            <div className="flex flex-col gap-2 lg:gap-1.5 xl:gap-3 px-1 lg:px-1 xl:px-2 pt-1">
              <div className="flex shrink-0 items-center -space-x-2 xl:-space-x-2.5">
                {[12, 32, 47, 60].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/80?img=${id}`}
                    alt="NGD team member"
                    className="h-10 w-10 sm:h-11 sm:w-11 lg:h-8 lg:w-8 xl:h-13 xl:w-13 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>

              <div className="text-[13px] sm:text-[14px] lg:text-[11.5px] xl:text-[15.5px] 2xl:text-[17px] font-medium leading-[1.5] lg:leading-[1.4] xl:leading-[1.6] text-[#999]">
                <p>Empowering Brands &amp; Creators</p>
                <p>Connecting Strategy &amp; Growth</p>
              </div>
            </div>

          </div>


          {/* ── COL 2 (CENTER): Tall Screen-Filling Poster Image Card ── */}
          <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[440px] xl:min-h-[600px] 2xl:min-h-[700px] h-full rounded-[24px] lg:rounded-[26px] xl:rounded-[32px] overflow-hidden bg-[#0d0d0d] border border-[#1e1e1e] shadow-2xl flex flex-col justify-end">
            
            {/* Poster Image */}
            <img
              src="/do-something.jpg"
              alt="Do Something — NextGen Digital"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Bottom smooth dark gradient for quote text */}
            <div className="absolute inset-x-0 bottom-0 h-44 xl:h-52 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

            {/* Bottom Caption */}
            <div className="relative z-10 p-5 sm:p-7 lg:p-4 xl:p-8 2xl:p-9 pt-0">
              <div className="flex items-start gap-2.5 xl:gap-3.5">
                <span className="font-serif text-[#ADF531] text-2xl lg:text-xl xl:text-3.5xl 2xl:text-4xl leading-none select-none">“</span>
                <p className="font-sans font-medium text-[#f2f2f2] text-[0.88rem] sm:text-[0.98rem] lg:text-[0.8rem] xl:text-[1.02rem] 2xl:text-[1.18rem] leading-[1.5] lg:leading-[1.4] xl:leading-[1.65]">
                  NextGen Digital brings ideas and execution together, helping you
                  find the right strategy and stay on track toward your goals.
                </p>
              </div>
            </div>

          </div>


          {/* ── COL 3 (RIGHT): Story & Square Hero-style Button ── */}
          <div className="flex flex-col justify-center lg:py-2 xl:py-6 lg:pl-2 xl:pl-6 2xl:pl-8">

            {/* Category Pill with Live Pulse */}
            <div className="mb-4 lg:mb-3 xl:mb-6 w-fit inline-flex items-center gap-2.5 rounded-full bg-[#ADF531]/10 border border-[#ADF531]/30 backdrop-blur-md px-4 lg:px-4.5 xl:px-5 py-1.5 lg:py-1.5 xl:py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ADF531] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ADF531]"></span>
              </span>
              <span className="font-mono text-[11px] lg:text-[10.5px] xl:text-[12px] font-bold uppercase tracking-[2px] text-[#ADF531]  ">
                ABOUT NEXTGEN
              </span>
            </div>

            {/* Main Headline with Syne font & responsive scaling */}
            <h2 className="font-semibold leading-[0.82] tracking-[-0.075em] font-syne text-white xl:leading-[1.08]  mb-4 lg:mb-3 xl:mb-6 text-[1.8rem] sm:text-[1.2rem] lg:text-[2.55rem] xl:text-[3.8rem] 2xl:text-[4.6rem] max-w-[600px]">
              Your Home for the Digital Community
            </h2>

            {/* Body Description */}
            <p className="font-sans text-[#a0a0a0] text-[0.9rem] sm:text-[1rem] lg:text-[0.82rem] xl:text-[1.08rem] 2xl:text-[1.28rem] leading-[1.65] lg:leading-[1.48] xl:leading-[1.8] mb-6 lg:mb-4 xl:mb-10 max-w-[540px]">
              NextGen Digital brings trusted designers, engineers, and strategists together
              through one unified collective. Find the right team, build your next vision,
              and take the next step in your digital growth.
            </p>

            {/* Square Hero-Style Button */}
            <div>
              <a
                href="#services"
                className="
                  inline-flex items-center justify-center gap-2.5 xl:gap-3
                  bg-[#ADF531] text-black
                  font-mono text-[11.5px] lg:text-[11px] xl:text-[13.5px] font-bold tracking-[1.8px] xl:tracking-[2px] uppercase
                  h-[46px] lg:h-[42px] xl:h-[56px] 2xl:h-[60px] px-6 lg:px-6 xl:px-9
                  transition-all duration-300
                  hover:bg-[#c4ff3e]
                  hover:shadow-[0_0_28px_rgba(173,245,49,0.4)]
                "
              >
                More About Us
                <svg className="h-3.5 w-3.5 xl:h-4 xl:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
