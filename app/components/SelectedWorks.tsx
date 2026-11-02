'use client';

import Link from 'next/link';

const projects = [
  {
    name: 'Israr & Sons',
    subtitle: 'Marble & Granite',
    logo: '/IMG_1981 1.png',
    logoClass: 'h-[62%] w-[62%]',
  },
  {
    name: 'OneDrop',
    subtitle: 'Every Drop Matters',
    logo: '/LOGO - 0 1 1.png',
    logoClass: 'h-[58%] w-[58%]',
  },
  {
    name: 'Suraqa Enterprises',
    subtitle: 'Pharma · Surgical · General supplies',
    logo: '/suraqa-enterprises-logo.png',
    logoClass: 'h-[68%] w-[68%]',
  },
];

export default function SelectedWorks() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f6f6f4] py-16 text-[#17181a] sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div data-reveal="left" className="flex items-end justify-end pb-5">
          <Link
            href="/work"
            className="pb-1 font-mono text-[11px] font-bold uppercase tracking-[2px] text-[#8cc63f] transition-colors hover:text-[#17181a] sm:text-[12px]"
          >
            View all [+]
          </Link>
        </div>

        <div
          data-reveal="right"
          data-reveal-stagger
          className="mb-14 flex flex-col gap-6 sm:mb-20 md:flex-row md:items-stretch md:justify-center lg:gap-8"
        >
          <div className="flex w-full items-center justify-start select-none md:w-auto md:justify-center">
            <span className="nextfolio-label font-syne text-[2.75rem] font-semibold uppercase leading-[0.78] tracking-[-0.04em] text-[#6b6f76] sm:text-[3.25rem] md:text-[clamp(3.5rem,6.5vw,6.5rem)]">
              nextfolio
            </span>
          </div>

          <div className="grid w-full max-w-[1380px] grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.name}
                data-cursor="focus"
                className="group relative flex aspect-[9/16] w-full flex-col items-center justify-center overflow-hidden rounded-[32px] border border-[#e3e4e1] bg-white p-6 text-center shadow-[0_20px_50px_rgba(23,24,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#8cc63f]/50 hover:shadow-[0_25px_60px_rgba(140,198,63,0.16)] sm:rounded-[38px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(140,198,63,0.08),_transparent_68%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-[70%] w-full items-center justify-center overflow-hidden">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className={`${project.logoClass} object-contain transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>

                <div className="relative z-10 mt-3">
                  <h3 className="font-syne text-lg font-bold uppercase tracking-[-0.02em] text-[#17181a] sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#6b6f76] sm:text-[10px]">
                    {project.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          data-reveal="up"
          data-reveal-stagger
          className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:gap-8 xl:gap-10"
        >
          <div data-cursor="focus" className="group flex h-full flex-col">
            <div className="relative min-h-[460px] w-full flex-1 overflow-hidden rounded-[28px] border border-[#e3e4e1] bg-white shadow-2xl transition-all duration-500 group-hover:border-[#8cc63f]/50 group-hover:shadow-[0_20px_60px_rgba(140,198,63,0.15)] sm:min-h-[540px] sm:rounded-[32px] lg:min-h-0">
              <img
                src="/pckd.jpg"
                alt="PCKD Whey Protein"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 shrink-0 font-sans text-[15px] font-bold uppercase tracking-wider text-[#17181a] sm:text-[17px]">
              PCKD
            </p>
          </div>

          <div className="flex h-full flex-col justify-between gap-8 sm:gap-10 lg:gap-8">
            <div data-cursor="focus" className="group flex flex-col">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-[#e3e4e1] bg-white shadow-2xl transition-all duration-500 group-hover:border-red-500/40 group-hover:shadow-[0_20px_60px_rgba(200,50,50,0.15)] sm:rounded-[32px]">
                <img
                  src="/meat-dukan.jpg"
                  alt="Meat Dukan"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 shrink-0 font-sans text-[15px] font-bold uppercase tracking-wider text-[#17181a] sm:text-[17px]">
                Meat Dukan
              </p>
            </div>

            <div data-cursor="focus" className="group flex flex-col">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-[#e3e4e1] bg-white shadow-2xl transition-all duration-500 group-hover:border-yellow-500/40 group-hover:shadow-[0_20px_60px_rgba(240,180,40,0.15)] sm:rounded-[32px]">
                <img
                  src="/funchi.jpg"
                  alt="Funchi"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 shrink-0 font-sans text-[15px] font-bold uppercase tracking-wider text-[#17181a] sm:text-[17px]">
                Funchi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
