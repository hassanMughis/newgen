'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';

const deliveryStages = [
  ['01', 'Strategy', 'Direction'],
  ['02', 'Identity', 'Recognition'],
  ['03', 'Experience', 'Interaction'],
  ['04', 'Build', 'Momentum'],
];

export default function ServicesShowcase() {
  const deliveryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = deliveryRef.current;
    if (!panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => panel.classList.toggle('is-sequencing', entry.isIntersecting),
      { threshold: 0.45 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-36 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div data-reveal="up" className="mb-8 grid gap-5 border-t border-white/15 pt-6 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#ADF531]">Connected craft</p>
            <h2 className="mt-4 max-w-[980px] font-[family-name:var(--font-syne)] text-[clamp(2.8rem,5.8vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.07em]">Built as one system.</h2>
          </div>
          <p className="max-w-[430px] text-sm leading-6 text-white/45 md:justify-self-end">Every discipline informs the next, so the brand remains coherent from its first idea to its smallest interaction.</p>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.25fr_.75fr] lg:items-stretch">
          <div data-reveal="zoom" className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-white/10 bg-[#090909] sm:min-h-[540px] lg:min-h-[620px]">
            <Image src="/liquid-chrome.jpg" alt="NextGen creative systems study" fill sizes="(max-width: 1023px) 100vw, 65vw" className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.035]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.76),rgba(0,0,0,.08),rgba(0,0,0,.34))]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#ADF531]">NextGen field notes / 01</p>
                <p className="mt-3 max-w-[580px] font-[family-name:var(--font-syne)] text-xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">From identity to interaction, nothing lives in isolation.</p>
              </div>
            </div>
          </div>

          <div ref={deliveryRef} data-reveal="right" className="delivery-system relative flex min-h-[540px] flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#090a09] p-6 sm:p-8 lg:min-h-0">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#ADF531]/10 blur-[80px]" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
              <span>Connected delivery system</span>
              <span className="flex items-center gap-2 text-[#ADF531]"><span className="size-1.5 animate-pulse rounded-full bg-[#ADF531]" />Live</span>
            </div>

            <div className="relative my-auto py-5">
              <div className="absolute bottom-10 left-[17px] top-10 w-px bg-gradient-to-b from-[#ADF531] via-[#ADF531]/55 to-white/10" />
              {deliveryStages.map(([number, title, outcome], index) => (
                <div key={number} style={{ '--stage-index': index } as CSSProperties} className="delivery-stage-row relative grid grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-white/[0.07] py-5 last:border-0">
                  <span className="delivery-stage-node relative z-10 grid size-9 place-items-center rounded-full border border-white/15 bg-[#0d0e0d] font-mono text-[8px] text-white/38">{number}</span>
                  <span className="delivery-stage-title font-[family-name:var(--font-syne)] text-lg font-medium tracking-[-0.04em] text-white/58 xl:text-xl">{title}</span>
                  <span className="delivery-stage-outcome font-mono text-[7px] uppercase tracking-[0.14em] text-white/28 xl:text-[8px]">{outcome}</span>
                </div>
              ))}
            </div>

            <div className="relative flex items-center justify-between gap-4 rounded-[14px] bg-[#ADF531] px-5 py-4 text-black">
              <span className="font-[family-name:var(--font-syne)] text-base font-semibold tracking-[-0.04em] xl:text-lg">One connected outcome</span>
              <span className="text-right font-mono text-[7px] font-bold uppercase tracking-[0.14em] xl:text-[8px]">Zero handoffs ↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
