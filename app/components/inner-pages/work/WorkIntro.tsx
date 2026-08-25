import Image from 'next/image';

const previewProjects = [
  { src: '/pckd.jpg', alt: 'PCKD identity project', title: 'PCKD Performance', category: 'Branding' },
  { src: '/meat-dukan.jpg', alt: 'Meat Dukan campaign', title: 'Meat Dukan', category: 'Campaign' },
  { src: '/funchi.jpg', alt: 'Funchi brand project', title: 'Funchi', category: 'Identity' },
  { src: '/liquid-chrome.jpg', alt: 'Chrome motion study', title: 'Chrome Forms', category: 'Motion' },
];

export default function WorkIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-16 pt-36 text-white sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24 lg:pt-48 xl:px-10">
      <div className="pointer-events-none absolute right-[-10vw] top-16 h-[680px] w-[680px] rounded-full bg-[#ADF531]/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-[1920px]">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-10 xl:grid-cols-[1.28fr_.72fr]">
          <div data-reveal="left">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#ADF531]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ADF531] shadow-[0_0_16px_#ADF531]" />
              NextGen archive / Selected work
            </div>
            <h1 className="mt-7 max-w-[1200px] font-[family-name:var(--font-syne)] text-[clamp(3.2rem,7.4vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              Work with
              <span className="mt-2 block text-[#ADF531]">a pulse.</span>
            </h1>
          </div>

          <div data-reveal="zoom" className="work-preview-mosaic relative mx-auto grid aspect-[1.16/1] w-full max-w-[560px] grid-cols-2 gap-2 justify-self-end lg:mx-0">
            {previewProjects.map((project, index) => (
              <div
                key={project.src}
                className={`work-preview-tile relative overflow-hidden rounded-[14px] border border-white/10 bg-[#0a0a0a] ${index === 0 ? 'work-preview-tile--down' : index === 3 ? 'work-preview-tile--up' : ''}`}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 1023px) 46vw, 280px"
                  className="work-preview-image object-cover"
                />
                <div className="work-preview-scrim absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                <span className="work-preview-index absolute left-3 top-3 font-mono text-[8px] tracking-[0.18em] text-white/55">/ 0{index + 1}</span>
                <div className="work-preview-meta absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#ADF531] sm:text-[8px]">{project.category}</p>
                  <p className="mt-1 truncate font-[family-name:var(--font-syne)] text-sm font-medium tracking-[-0.035em] sm:text-base">{project.title}</p>
                </div>
              </div>
            ))}

            <div className="work-preview-badge absolute left-1/2 top-1/2 z-20 grid size-20 place-items-center rounded-full border border-black/70 bg-[#ADF531] text-center text-black shadow-[0_0_40px_rgba(173,245,49,0.22)] sm:size-24">
              <span className="font-mono text-[8px] font-bold uppercase leading-4 tracking-[0.14em]">10 selected<br />stories</span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/15 pt-6 md:grid-cols-[1fr_.72fr] md:items-start lg:mt-20">
          <p data-reveal="up" className="max-w-[820px] text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            Identities, interfaces, campaigns and digital systems shaped to earn attention, build recognition and keep ambitious brands moving forward.
          </p>
          <p data-reveal="right" className="max-w-[430px] font-mono text-[9px] uppercase leading-5 tracking-[0.17em] text-white/30 md:justify-self-end">
            Strategy into form.<br />Ideas into experiences.<br />Attention into momentum.
          </p>
        </div>
      </div>
    </section>
  );
}
