// Temporary contact details — replace these values before launch.
const people = [
  { name: 'Ayaan Malik', role: 'New Business Director', email: 'ayaan@nextgendigitals.com' },
  { name: 'Mira Khan', role: 'Client Partner', email: 'mira@nextgendigitals.com' },
  { name: 'Zoya Ahmed', role: 'People & Culture', email: 'zoya@nextgendigitals.com' },
];

const socialChannels = [
  { name: 'Instagram', handle: '@nextgendigitals', href: 'https://instagram.com/nextgendigitals' },
  { name: 'LinkedIn', handle: '/nextgen-digitals', href: 'https://linkedin.com/company/nextgen-digitals' },
  { name: 'Behance', handle: '/nextgendigitals', href: 'https://behance.net/nextgendigitals' },
  { name: 'Dribbble', handle: '@nextgendigitals', href: 'https://dribbble.com/nextgendigitals' },
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
          <p className="max-w-[470px] text-base leading-7 text-[#6b6f76] md:justify-self-end">Reach the studio by phone, connect with the right lead, or follow the work through your preferred channel.</p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-12">
          <article data-reveal="left" className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#17181a] p-6 text-[#f6f6f4] shadow-[0_24px_60px_rgba(23,24,26,0.14)] sm:p-8 lg:col-span-4 lg:min-h-[520px]">
            <div className="absolute -right-20 -top-20 size-64 rounded-full border border-[#8cc63f]/20" />
            <div className="relative flex h-full flex-col justify-between gap-14">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] opacity-55"><span>Direct lines</span><span>PK / GMT+5</span></div>
              <div>
                <a href="tel:+923001234567" className="block border-t border-white/15 py-5 transition-opacity hover:opacity-55">
                  <span className="font-mono text-sm uppercase tracking-[0.12em] opacity-60">Office</span>
                  <strong className="mt-3 block font-[family-name:var(--font-syne)] text-[clamp(1.85rem,2.2vw,2.5rem)] font-medium tracking-[-0.055em]">+92 300 123 4567</strong>
                </a>
                <a href="https://wa.me/923217654321" target="_blank" rel="noreferrer" className="block border-y border-white/15 py-5 transition-opacity hover:opacity-55">
                  <span className="font-mono text-sm uppercase tracking-[0.12em] opacity-60">WhatsApp</span>
                  <strong className="mt-3 block font-[family-name:var(--font-syne)] text-[clamp(1.85rem,2.2vw,2.5rem)] font-medium tracking-[-0.055em]">+92 321 765 4321</strong>
                </a>
              </div>
            </div>
          </article>

          <article data-reveal="up" className="rounded-[22px] border border-[#e3e4e1] bg-white p-6 sm:p-8 lg:col-span-4 lg:min-h-[520px]">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#6b6f76]">Studio contacts</p>
            <div className="mt-8">
              {people.map((person, index) => (
                <a key={person.email} href={`mailto:${person.email}`} className="group block border-t border-[#e3e4e1] py-6 last:border-b">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs tracking-[0.14em] text-[#8cc63f]">/ 0{index + 1}</span>
                      <h3 className="mt-2 font-[family-name:var(--font-syne)] text-3xl font-medium tracking-[-0.045em] transition-colors group-hover:text-[#8cc63f]">{person.name}</h3>
                      <p className="mt-2 text-base text-[#6b6f76]">{person.role}</p>
                      <p className="mt-2 break-all font-mono text-sm text-[#6b6f76]">{person.email}</p>
                    </div>
                    <span className="text-xl text-[#8cc63f] transition duration-500 group-hover:rotate-45">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </article>

          <article data-reveal="right" className="rounded-[22px] border border-[#e3e4e1] bg-white p-6 sm:p-8 lg:col-span-4 lg:min-h-[520px]">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#6b6f76]">Social signal</p>
            <div className="mt-8">
              {socialChannels.map((channel, index) => (
                <a key={channel.name} href={channel.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-5 border-t border-[#e3e4e1] py-5 last:border-b">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#6b6f76]">0{index + 1}</span>
                    <div><h3 className="font-[family-name:var(--font-syne)] text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#8cc63f]">{channel.name}</h3><p className="mt-2 font-mono text-base tracking-[0.03em] text-[#6b6f76]">{channel.handle}</p></div>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full border border-[#e3e4e1] text-sm transition duration-500 group-hover:border-[#8cc63f] group-hover:bg-[#8cc63f] group-hover:text-[#17181a]">↗</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
