import Image from 'next/image';
import Link from 'next/link';

const notes = [
  { title: 'Why memorable brands begin with clarity', category: 'Brand strategy', image: '/01_comp-img.webp' },
  { title: 'Designing motion that helps people navigate', category: 'Digital experience', image: '/image 4.png' },
  { title: 'Turning one strong idea into a flexible system', category: 'Creative direction', image: '/iridescent-heart.png' },
];

export default function AboutJournal() {
  return (
    <section className="bg-black px-4 pb-20 pt-12 text-white sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="grid gap-6 md:grid-cols-[.8fr_1fr_.3fr] md:items-end">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-none tracking-[-0.065em] text-[#ADF531]">Recent thinking</h2>
          <p className="max-w-[350px] text-xs leading-5 text-white/48">Ideas on strategy, design and technology from inside the NextGen studio.</p>
          <Link href="/contact" className="justify-self-start rounded-full border border-[#ADF531]/50 px-5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#ADF531] md:justify-self-end">Let&apos;s talk</Link>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {notes.map((note, index) => (
            <article key={note.title} className="group border-t border-white/12 pt-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[11px] bg-[#181918]">
                <Image src={note.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-8 transition duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/32">/ 0{index + 1} · {note.category}</p>
                <h3 className="mt-3 max-w-[360px] font-[family-name:var(--font-syne)] text-xl font-semibold leading-tight tracking-[-0.035em]">{note.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
