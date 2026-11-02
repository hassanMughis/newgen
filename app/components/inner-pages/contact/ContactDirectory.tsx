const contacts = [
  { number: '01', label: 'New projects', email: 'projects@nextgendigitals.com', copy: 'Brand, product, web, motion and long-term creative partnerships.' },
  { number: '02', label: 'Current clients', email: 'studio@nextgendigitals.com', copy: 'Active work, delivery questions and ongoing account support.' },
  { number: '03', label: 'Partnerships', email: 'partners@nextgendigitals.com', copy: 'Collaborations, production partners, press and shared opportunities.' },
  { number: '04', label: 'Careers & talent', email: 'careers@nextgendigitals.com', copy: 'Full-time roles, freelance collaborations, internships and portfolios.' },
];

const responseTimes = [
  { label: 'New enquiries', time: '1–2 business days' },
  { label: 'Active clients', time: 'Same working day' },
  { label: 'Careers', time: 'Within 5 business days' },
];

const showStudioDetails = false;

export default function ContactDirectory() {
  return (
    <>
      <section className="bg-[#ececea] px-4 py-20 text-[#17181a] sm:px-6 sm:py-28 lg:px-8 lg:py-36 xl:px-10">
        <div className="mx-auto max-w-[1920px]">
          <div data-reveal="up" className="grid gap-6 border-t border-[#e3e4e1] pt-7 md:grid-cols-[1fr_.7fr] md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8cc63f] sm:text-[11px]">Contact directory</p>
              <h2 className="mt-4 max-w-[980px] font-[family-name:var(--font-syne)] text-[clamp(2.8rem,5.8vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.07em]">Reach the right people.</h2>
            </div>
            <p className="max-w-[470px] text-base leading-7 text-[#6b6f76] md:justify-self-end">Choose the closest route. If you are unsure, use the general line and we will take care of the routing.</p>
          </div>

          <div data-reveal="up" data-reveal-stagger className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {contacts.map((contact, index) => (
              <a key={contact.number} href={`mailto:${contact.email}`} className={`group flex min-h-[330px] flex-col justify-between rounded-[20px] border p-5 shadow-[0_14px_40px_rgba(23,24,26,0.05)] transition duration-500 sm:p-7 ${index === 0 ? 'border-white/10 bg-[#17181a] text-[#f6f6f4]' : 'border-[#e3e4e1] bg-white text-[#17181a] hover:border-[#8cc63f]/40'}`}>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] opacity-50"><span>/ {contact.number}</span><span className="text-lg transition duration-500 group-hover:rotate-45">↗</span></div>
                <div>
                  <p className="font-[family-name:var(--font-syne)] text-2xl font-medium tracking-[-0.05em] sm:text-3xl">{contact.label}</p>
                  <p className="mt-4 text-base leading-7 opacity-60">{contact.copy}</p>
                  <p className="mt-6 break-all font-mono text-[11px] tracking-[0.03em] opacity-75 sm:text-xs">{contact.email}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {showStudioDetails && (
        <section className="bg-white px-4 py-24 text-[#17181a] sm:px-6 sm:py-32 lg:px-8 lg:py-40 xl:px-10">
          <div className="mx-auto grid max-w-[1920px] gap-3 lg:grid-cols-[1.1fr_.9fr]">
            <article data-reveal="left" className="relative overflow-hidden rounded-[24px] border border-[#e3e4e1] bg-white p-6 sm:p-9 lg:min-h-[420px] lg:p-12">
              <div className="absolute -bottom-32 -right-24 size-80 rounded-full border border-[#8cc63f]/16 shadow-[0_0_90px_rgba(140,198,63,0.08)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8cc63f] sm:text-[11px]">Studio office</p>
              <h2 className="mt-5 max-w-[680px] font-[family-name:var(--font-syne)] text-[clamp(2.5rem,4.8vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.065em]">Pakistan rooted. Globally connected.</h2>
              <div className="mt-10 grid gap-5 border-t border-[#e3e4e1] pt-5 sm:grid-cols-2 lg:mt-16">
                <div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b6f76]">Working hours</p><p className="mt-3 text-base leading-7 text-[#6b6f76]">Monday–Friday / 10:00–18:00 PKT</p></div>
                <div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b6f76]">Meetings</p><p className="mt-3 text-base leading-7 text-[#6b6f76]">Remote worldwide / In-person by appointment</p></div>
              </div>
            </article>

            <article data-reveal="right" className="rounded-[24px] border border-[#8cc63f] bg-[#8cc63f] p-6 text-black sm:p-9 lg:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-50 sm:text-[11px]">Typical response</p>
              <div className="mt-10">
                {responseTimes.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-5 border-t border-black/20 py-5 last:border-b">
                    <span className="font-[family-name:var(--font-syne)] text-xl font-medium tracking-[-0.04em] sm:text-2xl">{item.label}</span>
                    <span className="max-w-[190px] text-right font-mono text-[11px] font-semibold uppercase leading-5 tracking-[0.1em] opacity-65 sm:text-xs">{item.time}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      )}
    </>
  );
}
