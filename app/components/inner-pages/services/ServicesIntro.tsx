const capabilities = ['Strategy', 'Identity', 'Interfaces', 'Motion'];

export default function ServicesIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-16 pt-36 text-white sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24 lg:pt-48 xl:px-10">
      <div className="pointer-events-none absolute right-[-12vw] top-16 h-[680px] w-[680px] rounded-full bg-[#ADF531]/[0.06] blur-[130px]" />
      <div className="relative mx-auto max-w-[1920px]">
        <div>
          <div data-reveal="left">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#ADF531]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ADF531] shadow-[0_0_16px_#ADF531]" />
              NextGen capabilities / Full cycle
            </div>
            <h1 className="mt-7 max-w-[1250px] font-[family-name:var(--font-syne)] text-[clamp(3.2rem,7.4vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              One team.
              <span className="mt-2 block text-[#ADF531]">Every touchpoint.</span>
            </h1>
          </div>

        </div>

        <div className="mt-14 grid gap-7 border-t border-white/15 pt-6 md:grid-cols-[1fr_.72fr] md:items-start lg:mt-20">
          <p data-reveal="up" className="max-w-[850px] text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            We connect strategy, design, motion and development from the start—creating sharper ideas, cleaner execution and digital experiences that feel unmistakably yours.
          </p>
          <div data-reveal="right" className="flex flex-wrap gap-2 md:justify-end">
            {capabilities.map((capability) => (
              <span key={capability} className="rounded-full border border-white/12 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.17em] text-white/42">{capability}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
