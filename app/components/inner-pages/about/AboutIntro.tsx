import Image from 'next/image';

const stats = [
  { index: '01', number: '40+', label: 'Digital launches', tone: 'lime' },
  { index: '02', number: '12', label: 'Connected disciplines', tone: 'dark' },
  { index: '03', number: '06', label: 'Markets reached', tone: 'dark' },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-28 sm:pt-44 lg:px-8 lg:pt-48 xl:px-10">
      <div className="pointer-events-none absolute right-[-12vw] top-20 h-[620px] w-[620px] rounded-full bg-[#ADF531]/[0.055] blur-[110px]" />

      <div className="relative mx-auto max-w-[1920px]">
        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_.65fr] lg:gap-8">
          <div data-reveal="left">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#ADF531]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ADF531] shadow-[0_0_16px_#ADF531]" />
              NextGen signal / About us
            </div>
            <h1 className="mt-7 max-w-[1250px] font-[family-name:var(--font-syne)] text-[clamp(3.2rem,7.4vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              Different minds.
              <span className="mt-2 block text-[#ADF531]">One digital pulse.</span>
            </h1>
          </div>

          <div data-reveal="zoom" className="relative hidden aspect-square w-full max-w-[420px] justify-self-end lg:block">
            <div className="absolute inset-0 rounded-full border border-[#ADF531]/18" />
            <div className="absolute inset-[12%] animate-[portal-orbit_12s_linear_infinite] rounded-full border border-dashed border-white/15" />
            <div className="absolute inset-[24%] rounded-full border border-[#ADF531]/32 shadow-[0_0_70px_rgba(173,245,49,0.08)]" />
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ADF531] shadow-[0_0_22px_#ADF531]" />
            <Image src="/ngt-logo-cropped.png" alt="NextGen Digitals" fill priority sizes="420px" className="object-contain p-[31%] drop-shadow-[0_0_18px_rgba(173,245,49,0.35)]" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/15 pt-6 md:grid-cols-[1fr_.72fr] md:items-start lg:mt-16">
          <p data-reveal="up" className="max-w-[820px] text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            We are a creative technology studio for brands that refuse to blend in. Strategy, identity, interface, motion and code move together here—not as separate services, but as one connected system.
          </p>
          <p data-reveal="right" className="max-w-[420px] font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-white/30 md:justify-self-end">
            Independent in structure.<br />Collaborative by instinct.<br />Built for what comes next.
          </p>
        </div>

        <div data-reveal="up" data-reveal-stagger className="mt-12 grid gap-2.5 md:grid-cols-12 lg:mt-16">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`flex min-h-[210px] flex-col justify-between rounded-[18px] border p-5 sm:min-h-[240px] sm:p-7 ${index === 0 ? 'md:col-span-5' : index === 1 ? 'md:col-span-3' : 'md:col-span-4'} ${stat.tone === 'lime' ? 'border-[#ADF531] bg-[#ADF531] text-black' : 'border-white/10 bg-[#0a0a0a] text-white'}`}
            >
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] opacity-45">
                <span>/ {stat.index}</span>
                <span>NGD</span>
              </div>
              <div className="flex items-end justify-between gap-4">
                <strong className="font-[family-name:var(--font-syne)] text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">{stat.number}</strong>
                <span className="max-w-[130px] text-right text-xs leading-4 opacity-[0.58]">{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
