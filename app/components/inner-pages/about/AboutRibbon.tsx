const capabilities = ['Strategy', 'Brand systems', 'UI/UX', 'Motion', 'Development'];

export default function AboutRibbon() {
  return (
    <section className="bg-black px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-20 xl:px-10">
      <div data-reveal="zoom" className="relative mx-auto max-w-[1920px] overflow-hidden rounded-[26px] border border-white/10 bg-[#080908] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full border border-[#ADF531]/15 shadow-[0_0_110px_rgba(173,245,49,0.08)]" />
        <div className="pointer-events-none absolute right-12 top-12 h-2 w-2 rounded-full bg-[#ADF531] shadow-[0_0_18px_#ADF531]" />

        <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#ADF531]">Our operating system</p>
        <h2 className="relative mt-6 max-w-[1500px] font-[family-name:var(--font-syne)] text-[clamp(2.2rem,5.3vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
          Strategy that sees ahead.
          <span className="block text-white/34">Design that earns attention.</span>
          <span className="block text-[#ADF531]">Technology that keeps up.</span>
        </h2>

        <div className="relative mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {capabilities.map((capability, index) => (
            <span key={capability} className="rounded-full border border-white/12 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/48">
              0{index + 1} · {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
