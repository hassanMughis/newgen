export default function ContactIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-16 pt-36 text-white sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24 lg:pt-48 xl:px-10">
      <div className="pointer-events-none absolute right-[-12vw] top-14 h-[680px] w-[680px] rounded-full bg-[#ADF531]/[0.065] blur-[130px]" />
      <div className="relative mx-auto max-w-[1920px]">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-10">
          <div data-reveal="left">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#ADF531]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ADF531] shadow-[0_0_16px_#ADF531]" />
              NextGen line / Open
            </div>
            <h1 className="mt-7 max-w-[1220px] font-[family-name:var(--font-syne)] text-[clamp(3.2rem,7.4vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              Start with hello.
              <span className="mt-2 block text-[#ADF531]">We&apos;ll route the rest.</span>
            </h1>
          </div>

          <a data-reveal="zoom" href="mailto:hello@nextgendigitals.com" className="group relative w-full max-w-[520px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0b0a] p-6 justify-self-end transition duration-500 hover:border-[#ADF531]/45 sm:p-8">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#ADF531]/10 blur-[70px] transition duration-700 group-hover:bg-[#ADF531]/18" />
            <div className="relative flex min-h-[250px] flex-col justify-between sm:min-h-[300px]">
              <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                <span>General line</span>
                <span className="flex items-center gap-2 text-[#ADF531]"><span className="size-1.5 rounded-full bg-[#ADF531]" /> Available</span>
              </div>
              <div>
                <span className="grid size-12 place-items-center rounded-full bg-[#ADF531] text-xl text-black transition duration-500 group-hover:rotate-45">↗</span>
                <p className="mt-6 break-all font-[family-name:var(--font-syne)] text-[clamp(1.35rem,2.2vw,2.25rem)] font-medium tracking-[-0.05em]">hello@nextgendigitals.com</p>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-14 grid gap-7 border-t border-white/15 pt-6 md:grid-cols-[1fr_.72fr] md:items-start lg:mt-20">
          <p data-reveal="up" className="max-w-[820px] text-base leading-7 text-white/58 sm:text-lg sm:leading-8">Whether it is a new identity, a digital product, a campaign or a collaboration, your message goes directly to the people best placed to respond.</p>
          <p data-reveal="right" className="max-w-[430px] font-mono text-[9px] uppercase leading-5 tracking-[0.17em] text-white/30 md:justify-self-end">Pakistan-based.<br />Remote-first.<br />Working worldwide.</p>
        </div>
      </div>
    </section>
  );
}
