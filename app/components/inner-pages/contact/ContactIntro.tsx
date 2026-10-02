import Image from 'next/image';

export default function ContactIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f6f6f4] px-4 pb-16 pt-36 text-[#17181a] sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24 lg:pt-48 xl:px-10">
      <Image src="/hero-contact.png" alt="" fill priority sizes="100vw" className="object-cover object-[68%_center] opacity-40 sm:opacity-65 lg:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[#f6f6f4]/75 sm:bg-[#f6f6f4]/60 lg:bg-[linear-gradient(90deg,rgba(246,246,244,0.98)_0%,rgba(246,246,244,0.84)_50%,rgba(246,246,244,0.3)_100%)]" />
      <div className="pointer-events-none absolute right-[-12vw] top-14 h-[680px] w-[680px] rounded-full bg-[#8cc63f]/[0.065] blur-[130px]" />
      <div className="relative mx-auto max-w-[1920px]">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-10">
          <div data-reveal="left" className="min-w-0">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#8cc63f]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8cc63f] shadow-[0_0_16px_#8cc63f]" />
              NextGen line / Open
            </div>
            <h1 className="mt-7 max-w-[1220px] break-words font-[family-name:var(--font-syne)] text-[clamp(2.65rem,12vw,8.6rem)] font-semibold leading-[0.88] tracking-[-0.065em] sm:text-[clamp(3.2rem,7.4vw,8.6rem)] sm:leading-[0.82] sm:tracking-[-0.075em]">
              Start with hello.
              <span className="mt-2 block text-[#8cc63f]">We&apos;ll route the rest.</span>
            </h1>
          </div>

          <a data-reveal="zoom" href="mailto:hello@nextgendigitals.com" className="group relative min-w-0 w-full max-w-[520px] overflow-hidden rounded-[24px] border border-[#e3e4e1] bg-white p-6 justify-self-end transition duration-500 hover:border-[#8cc63f]/45 sm:p-8">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#8cc63f]/10 blur-[70px] transition duration-700 group-hover:bg-[#8cc63f]/18" />
            <div className="relative flex min-h-[250px] flex-col justify-between sm:min-h-[300px]">
              <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-[#6b6f76]">
                <span>General line</span>
                <span className="flex items-center gap-2 text-[#8cc63f]"><span className="size-1.5 rounded-full bg-[#8cc63f]" /> Available</span>
              </div>
              <div>
                <span className="grid size-12 place-items-center rounded-full bg-[#8cc63f] text-xl text-[#17181a] transition duration-500 group-hover:rotate-45">↗</span>
                <p className="mt-6 break-all font-[family-name:var(--font-syne)] text-[clamp(1.15rem,5.5vw,2.25rem)] font-medium tracking-[-0.04em] sm:text-[clamp(1.35rem,2.2vw,2.25rem)]">hello@nextgendigitals.com</p>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-14 grid gap-7 border-t border-[#e3e4e1] pt-6 md:grid-cols-[1fr_.72fr] md:items-start lg:mt-20">
          <p data-reveal="up" className="max-w-[820px] text-base leading-7 text-[#6b6f76] sm:text-lg sm:leading-8">Whether it is a new identity, a digital product, a campaign or a collaboration, your message goes directly to the people best placed to respond.</p>
          <p data-reveal="right" className="max-w-[430px] font-mono text-[9px] uppercase leading-5 tracking-[0.17em] text-[#6b6f76] md:justify-self-end">Pakistan-based.<br />Remote-first.<br />Working worldwide.</p>
        </div>
      </div>
    </section>
  );
}
