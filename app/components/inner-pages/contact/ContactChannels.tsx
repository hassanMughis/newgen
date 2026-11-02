const directContacts = [
  {
    name: 'Muhammad Imran',
    number: '+92 309 2646775',
    href: 'https://wa.me/923092646775',
  },
  {
    name: 'Numan Khokhar',
    number: '+92 306 8224433',
    href: 'https://wa.me/923068224433',
  },
];

const socialChannels = [
  { name: 'Instagram', handle: '@nextgendigitals', href: 'https://instagram.com/nextgendigitals' },
  { name: 'LinkedIn', handle: '/nextgen-digitals', href: 'https://linkedin.com/company/nextgen-digitals' },
  { name: 'Behance', handle: '/nextgendigitals', href: 'https://behance.net/nextgendigitals' },
  { name: 'Facebook', handle: '/nextgendigitals', href: 'https://facebook.com/nextgendigitals' },
  { name: 'X / Twitter', handle: '@nextgendigitals', href: 'https://x.com/nextgendigitals' },
];

export default function ContactChannels() {
  return (
    <section className="bg-[#ececea] px-4 py-24 text-[#17181a] sm:px-6 sm:py-32 lg:px-8 lg:py-40 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div data-reveal="up" className="grid gap-6 border-t border-[#e3e4e1] pt-7 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8cc63f] sm:text-[11px]">People & channels</p>
            <h2 className="mt-4 max-w-[1050px] font-[family-name:var(--font-syne)] text-[clamp(2.8rem,5.8vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.07em]">Talk directly. Follow along.</h2>
          </div>
          <p className="max-w-[470px] text-base leading-7 text-[#6b6f76] md:justify-self-end">Call or message the team directly, or follow our work through your preferred channel.</p>
        </div>

        <article data-reveal="up" className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-[#17181a] text-[#f6f6f4] shadow-[0_24px_60px_rgba(23,24,26,0.16)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-white/10 p-6 sm:p-9 lg:border-r lg:p-12">
              <div className="absolute -right-24 -top-24 size-72 rounded-full border border-[#8cc63f]/20" />
              <div className="relative">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                  <span>Direct contacts</span>
                  <span>PK / GMT+5</span>
                </div>

                <div className="mt-10">
                  {directContacts.map((contact, index) => (
                    <a
                      key={contact.number}
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-end justify-between gap-5 border-t border-white/15 py-6 last:border-b"
                    >
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8cc63f]">/ 0{index + 1}</span>
                        <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-medium tracking-[-0.04em] sm:text-2xl">{contact.name}</h3>
                        <p className="mt-2 font-[family-name:var(--font-syne)] text-[clamp(1.55rem,3vw,2.4rem)] font-medium tracking-[-0.055em]">{contact.number}</p>
                      </div>
                      <span className="text-xl text-[#8cc63f] transition duration-500 group-hover:rotate-45">↗</span>
                    </a>
                  ))}
                </div>

                <a href="mailto:hello@nextgendigitals.com" className="mt-8 inline-flex font-mono text-xs tracking-[0.08em] text-white/60 transition hover:text-[#8cc63f] sm:text-sm">
                  hello@nextgendigitals.com
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 p-6 sm:p-9 lg:border-t-0 lg:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">Social channels</p>
              <div className="mt-10 grid sm:grid-cols-2">
                {socialChannels.map((channel, index) => (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-5 border-t border-white/15 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-white/35">0{index + 1}</span>
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#8cc63f] sm:text-2xl">{channel.name}</h3>
                        <p className="mt-1 font-mono text-xs tracking-[0.03em] text-white/45">{channel.handle}</p>
                      </div>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 text-sm transition duration-500 group-hover:border-[#8cc63f] group-hover:bg-[#8cc63f] group-hover:text-[#17181a]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
