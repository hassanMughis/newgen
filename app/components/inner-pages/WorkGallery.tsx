'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = ['All', 'Branding', 'Web', 'Campaign', 'Motion'] as const;
type Category = Exclude<(typeof categories)[number], 'All'>;

type Project = {
  title: string;
  category: Category;
  image: string;
  fit?: 'cover' | 'contain';
};

const projects: Project[] = [
  { title: 'PCKD Performance', category: 'Branding', image: '/pckd.jpg' },
  { title: 'Meat Dukan', category: 'Campaign', image: '/meat-dukan.jpg' },
  { title: 'Blue Ribbon', category: 'Motion', image: '/blue-ribbon.jpg' },
  { title: 'Chocolate & Brownie', category: 'Branding', image: '/brownie.jpg' },
  { title: 'Digital Interface', category: 'Web', image: '/01_comp-img.webp', fit: 'contain' },
  { title: 'Funchi', category: 'Branding', image: '/funchi.jpg' },
  { title: 'Next Action', category: 'Campaign', image: '/do-something.jpg', fit: 'contain' },
  { title: 'Chrome Forms', category: 'Motion', image: '/liquid-chrome.jpg' },
  { title: 'Future Loop', category: 'Motion', image: '/image 4.png', fit: 'contain' },
  { title: 'Iridescent Heart', category: 'Web', image: '/iridescent-heart.png', fit: 'contain' },
];

const widthPattern = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7', 'md:col-span-6', 'md:col-span-6', 'md:col-span-8', 'md:col-span-4', 'md:col-span-4', 'md:col-span-8'];

function projectSize(index: number, total: number) {
  if (total === 1) return 'col-span-2 md:col-span-12';
  if (total === 2) return 'col-span-2 md:col-span-6';
  if (total === 3 && index === 2) return 'col-span-2 md:col-span-12';

  const mobileSpan = index < 2 ? 'col-span-2' : 'col-span-1';
  return `${mobileSpan} ${widthPattern[index % widthPattern.length]}`;
}

export default function WorkGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const visible = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
    <section className="bg-black px-4 pb-24 text-white sm:px-6 sm:pb-32 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 sm:mb-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
            {String(visible.length).padStart(2, '0')} projects
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`group relative pb-1 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors duration-300 sm:text-[10px] ${active === category ? 'text-[#ADF531]' : 'text-white/40 hover:text-white/75'}`}
              >
                {category}
                <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#ADF531] transition-transform duration-300 ${active === category ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-2 auto-rows-[clamp(220px,62vw,420px)] gap-2.5 md:grid-cols-12 md:auto-rows-[clamp(300px,34vw,620px)] md:gap-3 lg:gap-4">
          {visible.map((project, index) => (
            <article
              key={project.title}
              className={`group relative min-w-0 overflow-hidden rounded-[13px] border border-white/[0.07] bg-[#0b0b0b] ${projectSize(index, visible.length)}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className={`${project.fit === 'contain' ? 'object-contain p-[8%]' : 'object-cover'} transition duration-700 ease-out group-hover:scale-[1.025]`}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-70 transition duration-500 md:opacity-0 md:group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 sm:p-5 lg:p-6">
                <div className="min-w-0">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#ADF531] sm:text-[9px]">{project.category}</p>
                  <h2 className="mt-1.5 truncate font-[family-name:var(--font-syne)] text-lg font-medium leading-none tracking-[-0.045em] sm:text-xl lg:text-2xl">{project.title}</h2>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ADF531] text-base text-black">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
