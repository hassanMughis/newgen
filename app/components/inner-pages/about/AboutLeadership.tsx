import Image from 'next/image';

const disciplines = [
  {
    title: 'Creative direction',
    role: 'Strategy · Identity · Story',
    image: '/liquid-chrome.jpg',
    alt: 'Chrome sculptural artwork representing creative direction',
  },
  {
    title: 'Experience engineering',
    role: 'UI/UX · Motion · Technology',
    image: '/blue-ribbon.jpg',
    alt: 'Iridescent sculptural artwork representing digital experience',
  },
];

export default function AboutLeadership() {
  return (
    <section className="bg-black px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-36 xl:px-10">
      <div className="mx-auto grid max-w-[1920px] gap-10 lg:grid-cols-[.56fr_1.44fr] lg:gap-16">
        <div data-reveal="left" className="lg:pt-2">
          <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#ADF531]">How we&apos;re built</p>
          <h2 className="mt-5 font-[family-name:var(--font-syne)] text-[clamp(2.6rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            Creative
            <span className="block">leadership.</span>
          </h2>
          <p className="mt-7 max-w-[340px] text-sm leading-6 text-white/48">
            A focused team that brings brand thinking and digital craft together from the first idea to the final interaction.
          </p>
        </div>

        <div data-reveal="right" data-reveal-stagger className="grid gap-3 sm:grid-cols-2">
          {disciplines.map((item, index) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#191a19]">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 38vw" className="object-cover grayscale transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0" />
                <span className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.2em] text-black/35">/ 0{index + 1}</span>
              </div>
              <div className="flex items-start justify-between gap-5 pt-4">
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">{item.role}</p>
                </div>
                <span className="text-[#ADF531]">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
