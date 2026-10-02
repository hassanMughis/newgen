const capabilities = ['Strategy', 'Brand systems', 'UI/UX', 'Motion', 'Development'];

export default function AboutRibbon() {
  return (
    <section className="bg-[#f6f6f4] px-4 py-10 text-[#17181a] sm:px-6 sm:py-14 lg:px-8 lg:py-20 xl:px-10">
      <div data-reveal="zoom" className="relative mx-auto max-w-[1920px] overflow-hidden rounded-[26px] border border-[#e3e4e1] bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full border border-[#8cc63f]/15 shadow-[0_0_110px_rgba(140,198,63,0.08)]" />
        <div className="pointer-events-none absolute right-12 top-12 h-2 w-2 rounded-full bg-[#8cc63f] shadow-[0_0_18px_#8cc63f]" />

        <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#8cc63f]">Our operating system</p>
        <h2 className="relative mt-6 max-w-[1500px] font-[family-name:var(--font-syne)] text-[clamp(2.2rem,5.3vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
          Strategy that sees ahead.
          <span className="block text-[#6b6f76]">Design that earns attention.</span>
          <span className="block text-[#8cc63f]">Technology that keeps up.</span>
        </h2>

        <div className="relative mt-10 flex flex-wrap gap-2 border-t border-[#e3e4e1] pt-6">
          {capabilities.map((capability, index) => (
            <span key={capability} className="rounded-full border border-[#e3e4e1] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#6b6f76]">
              0{index + 1} · {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
