type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
};

export default function PageHero({ eyebrow, title, accent, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-16 pt-40 text-white sm:px-6 sm:pb-24 sm:pt-48 lg:px-10 lg:pb-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#ADF531]/[0.07] blur-[150px]" />
      <div className="relative mx-auto max-w-[1840px]">
        <p data-reveal="left" className="mb-7 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#ADF531] sm:text-xs">
          {eyebrow}
        </p>
        <h1 data-reveal="clip" className="max-w-[1500px] font-syne text-[clamp(2.8rem,8vw,8.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em]">
          {title}{' '}
          <span className="text-[#ADF531]">{accent}</span>
        </h1>
        <div data-reveal="up" className="mt-10 grid gap-5 border-t border-white/20 pt-6 md:grid-cols-[1fr_0.7fr] md:items-start lg:mt-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            NextGen Digitals / 2026
          </span>
          <p className="max-w-2xl text-base leading-relaxed text-white/58 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
