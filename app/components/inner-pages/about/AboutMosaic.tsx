'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { PointerEvent } from 'react';

type WorkTile =
  | { type: 'image'; src: string; alt: string }
  | { type: 'statement'; eyebrow: string; text: string };

const rowOne: WorkTile[] = [
  { type: 'statement', eyebrow: 'NextGen principle', text: 'Inspiring ideas.' },
  { type: 'image', src: '/pckd.jpg', alt: 'PCKD protein packaging project' },
  { type: 'image', src: '/meat-dukan.jpg', alt: 'Meat Dukan packaging project' },
  { type: 'image', src: '/funchi.jpg', alt: 'Funchi brand environment' },
  { type: 'image', src: '/brownie.jpg', alt: 'Chocolate and brownie brand project' },
];

const rowTwo: WorkTile[] = [
  { type: 'image', src: '/brownie.jpg', alt: 'Chocolate and brownie brand project' },
  { type: 'image', src: '/do-something.jpg', alt: 'NextGen creative campaign' },
  { type: 'statement', eyebrow: 'Built for impact', text: 'Creative systems.' },
  { type: 'image', src: '/blue-ribbon.jpg', alt: 'Iridescent visual exploration' },
  { type: 'image', src: '/liquid-chrome.jpg', alt: 'Chrome visual exploration' },
  { type: 'image', src: '/01_comp-img.webp', alt: 'Geometric material exploration' },
];

function Tile({ tile }: { tile: WorkTile }) {
  if (tile.type === 'statement') {
    return (
      <article className="flex h-[220px] w-[290px] shrink-0 flex-col rounded-[13px] bg-[#ADF531] p-5 text-black sm:h-[280px] sm:w-[390px] sm:p-7 lg:h-[330px] lg:w-[470px]">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">{tile.eyebrow}</span>
        <p className="mt-auto font-[family-name:var(--font-syne)] text-3xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-4xl lg:text-5xl">{tile.text}</p>
      </article>
    );
  }

  return (
    <article className="group relative h-[220px] w-[290px] shrink-0 overflow-hidden rounded-[13px] bg-[#111] sm:h-[280px] sm:w-[390px] lg:h-[330px] lg:w-[470px]">
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        draggable={false}
        sizes="(max-width: 640px) 290px, (max-width: 1024px) 390px, 470px"
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
    </article>
  );
}

function WorkRow({ items, label }: { items: WorkTile[]; label: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const motionFrame = useRef<number | undefined>(undefined);
  const dragState = useRef({
    active: false,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    targetScroll: 0,
  });

  const getSegmentWidth = () => segmentRef.current?.getBoundingClientRect().width ?? 0;

  const normalizeScroll = () => {
    const scroller = scrollerRef.current;
    const segmentWidth = getSegmentWidth();
    if (!scroller || !segmentWidth) return 0;

    if (scroller.scrollLeft < segmentWidth * 0.35) {
      scroller.scrollLeft += segmentWidth;
      return segmentWidth;
    } else if (scroller.scrollLeft > segmentWidth * 1.65) {
      scroller.scrollLeft -= segmentWidth;
      return -segmentWidth;
    }
    return 0;
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const scroller = scrollerRef.current;
      const segmentWidth = getSegmentWidth();
      if (scroller && segmentWidth) scroller.scrollLeft = segmentWidth;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (motionFrame.current !== undefined) window.cancelAnimationFrame(motionFrame.current);
    };
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (motionFrame.current !== undefined) {
      window.cancelAnimationFrame(motionFrame.current);
      motionFrame.current = undefined;
    }
    dragState.current = {
      active: true,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
      targetScroll: scroller.scrollLeft,
    };
    scroller.setPointerCapture(event.pointerId);
    scroller.classList.add('is-dragging');
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active || event.pointerType !== 'mouse') return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    event.preventDefault();
    const now = performance.now();
    const delta = event.clientX - dragState.current.lastX;
    const elapsed = Math.max(8, now - dragState.current.lastTime);
    const slowedDelta = delta * 0.72;
    dragState.current.targetScroll -= slowedDelta;
    const immediateVelocity = -slowedDelta / elapsed;
    dragState.current.velocity =
      dragState.current.velocity * 0.7 + immediateVelocity * 0.3;
    dragState.current.lastX = event.clientX;
    dragState.current.lastTime = now;

    if (motionFrame.current === undefined) {
      const followPointer = () => {
        const activeScroller = scrollerRef.current;
        if (!activeScroller || !dragState.current.active) {
          motionFrame.current = undefined;
          return;
        }
        const distance = dragState.current.targetScroll - activeScroller.scrollLeft;
        activeScroller.scrollLeft += distance * 0.115;
        dragState.current.targetScroll += normalizeScroll();
        if (Math.abs(distance) > 0.15) {
          motionFrame.current = window.requestAnimationFrame(followPointer);
        } else {
          motionFrame.current = undefined;
        }
      };
      motionFrame.current = window.requestAnimationFrame(followPointer);
    }
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !dragState.current.active) return;
    dragState.current.active = false;
    if (motionFrame.current !== undefined) {
      window.cancelAnimationFrame(motionFrame.current);
      motionFrame.current = undefined;
    }
    if (scroller.hasPointerCapture(event.pointerId)) scroller.releasePointerCapture(event.pointerId);
    scroller.classList.remove('is-dragging');

    let targetScroll = dragState.current.targetScroll;
    let velocity = dragState.current.velocity * 14;
    const glide = () => {
      const activeScroller = scrollerRef.current;
      if (!activeScroller) {
        motionFrame.current = undefined;
        return;
      }
      targetScroll += velocity;
      const distance = targetScroll - activeScroller.scrollLeft;
      activeScroller.scrollLeft += distance * 0.105;
      const wrapShift = normalizeScroll();
      targetScroll += wrapShift;
      velocity *= 0.958;
      if (Math.abs(velocity) < 0.035 && Math.abs(distance) < 0.25) {
        motionFrame.current = undefined;
        return;
      }
      motionFrame.current = window.requestAnimationFrame(glide);
    };
    motionFrame.current = window.requestAnimationFrame(glide);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-black to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-black to-transparent sm:w-16" />
      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onScroll={normalizeScroll}
        className="about-drag-row overflow-x-auto px-4 sm:px-6 lg:px-8 xl:px-10"
      >
        <div className="flex w-max">
          {[0, 1, 2].map((copy) => (
            <div
              key={copy}
              ref={copy === 0 ? segmentRef : undefined}
              aria-hidden={copy !== 1}
              className="flex shrink-0 gap-2.5 pr-2.5"
            >
              {items.map((tile, index) => (
                <Tile key={`${copy}-${index}`} tile={tile} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutMosaic() {
  return (
    <section className="bg-black pb-24 text-white sm:pb-32">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div data-reveal="up" className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#ADF531]">A glimpse of the work</p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-medium tracking-[-0.05em] sm:text-5xl">Ideas made visible.</h2>
          </div>
          <p className="hidden max-w-[330px] text-xs leading-5 text-white/38 md:block">Identity, packaging, campaigns and digital experiences shaped as one connected practice.</p>
        </div>
      </div>

      <div className="space-y-2.5">
        <WorkRow items={rowOne} label="First project row" />
        <WorkRow items={rowTwo} label="Second project row" />
      </div>
    </section>
  );
}
