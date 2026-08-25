import Image from 'next/image';

const services = [
  {
    number: '01', title: 'UI/UX & Product Design', copy: 'Research-led interfaces, scalable design systems, and frictionless journeys shaped around real users and measurable outcomes.',
    tags: ['UX Strategy', 'UI Systems', 'Prototyping', 'Product Design'], image: '/pngtree-silver-metallic-shape-outlined-png-image_11665385 1.png', tone: 'light',
  },
  {
    number: '02', title: 'Web Design & Development', copy: 'Fast, expressive digital platforms built with modern architecture, thoughtful interaction, and uncompromising responsive execution.',
    tags: ['Next.js', 'Creative Development', 'E-commerce', 'WebGL'], image: '/image 4.png', tone: 'lime',
  },
  {
    number: '03', title: 'Motion & 3D', copy: 'Cinematic motion systems, product visualization, and spatial experiences that turn passive viewing into active attention.',
    tags: ['3D Direction', 'Motion Systems', 'Product CGI', 'Micro-interactions'], image: '/01_comp-img.webp', tone: 'dark',
  },
  {
    number: '04', title: 'Brand Strategy & Identity', copy: 'Distinctive identities grounded in positioning, verbal clarity, and flexible visual systems ready for every channel.',
    tags: ['Positioning', 'Identity', 'Guidelines', 'Campaign Systems'], image: '/iridescent-heart.png', tone: 'light',
  },
];

const toneClasses = {
  light: 'bg-[#eeeeec] text-black',
  lime: 'bg-[#ADF531] text-black',
  dark: 'bg-[#171917] text-white',
};

export default function ServicesPageContent() {
  return (
    <section className="bg-black px-4 pb-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1840px] space-y-5">
        {services.map((service, index) => (
          <article key={service.number} data-reveal={index % 2 ? 'right' : 'left'} className={`relative min-h-[520px] overflow-hidden rounded-[30px] p-6 sm:p-10 lg:min-h-[610px] lg:p-14 ${toneClasses[service.tone as keyof typeof toneClasses]}`}>
            <div className="relative z-10 flex min-h-[440px] max-w-2xl flex-col lg:min-h-[500px]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-45">/ {service.number}</span>
              <h2 className="mt-7 font-syne text-[clamp(2.4rem,5vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.06em]">{service.title}</h2>
              <div className="mt-auto">
                <div className="mb-5 flex max-w-xl flex-wrap gap-2">
                  {service.tags.map((tag) => <span key={tag} className="rounded-full border border-current/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em]">{tag}</span>)}
                </div>
                <p className="max-w-xl text-sm leading-relaxed opacity-65 sm:text-base">{service.copy}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-[14%] -right-[6%] h-[58%] w-[58%] opacity-25 sm:h-[76%] sm:w-[48%] sm:opacity-100 lg:-bottom-[18%] lg:right-[1%]">
              <Image src={service.image} alt="" fill className="object-contain" sizes="(max-width: 768px) 60vw, 45vw" />
            </div>
            <span className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-current/20 font-mono text-sm sm:right-10 sm:top-10">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
