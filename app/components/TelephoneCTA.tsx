'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const dialerImage = '/telephoneee.png';
const handsetImage = '/telephoneee 2.png';

export default function TelephoneCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const answerTimerRef = useRef<number | null>(null);
  const hangupReadyTimerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);
  const [hasArrived, setHasArrived] = useState(false);
  const [hasCompletedCall, setHasCompletedCall] = useState(false);
  const [answerPhase, setAnswerPhase] = useState<'idle' | 'shifting' | 'answered' | 'ended'>('idle');
  const [canHangUp, setCanHangUp] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasArrived(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (answerTimerRef.current !== null) window.clearTimeout(answerTimerRef.current);
    if (hangupReadyTimerRef.current !== null) window.clearTimeout(hangupReadyTimerRef.current);
    if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
  }, []);

  const answerTelephone = () => {
    if (answerPhase === 'idle') {
      setAnswerPhase('shifting');
      answerTimerRef.current = window.setTimeout(() => {
        setAnswerPhase('answered');
        hangupReadyTimerRef.current = window.setTimeout(() => setCanHangUp(true), 1000);
      }, 900);
      return;
    }

    if (answerPhase === 'answered' && canHangUp) {
      setCanHangUp(false);
      setAnswerPhase('ended');
      resetTimerRef.current = window.setTimeout(() => {
        setHasCompletedCall(true);
        setAnswerPhase('idle');
      }, 1000);
    }
  };

  const answered = answerPhase === 'answered';
  const ended = answerPhase === 'ended';
  const shifted = answerPhase === 'shifting' || answered;

  return (
    <section ref={sectionRef} className="relative flex min-h-[900px] items-center justify-center overflow-x-clip overflow-y-visible bg-black px-4 py-24 sm:min-h-[1050px] sm:px-6 sm:py-32 lg:px-8 lg:py-36 xl:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ADF531]/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ADF531]/[0.08] sm:size-[700px]" />

      <div data-reveal="zoom" className="relative mx-auto flex min-h-[760px] w-full max-w-[1920px] items-center justify-center sm:min-h-[900px]">
        <div className={`telephone-message ${answered ? 'is-visible' : ''}`} aria-live="polite">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <span className="flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ADF531]">
              <span className="size-2 rounded-full bg-[#ADF531] shadow-[0_0_16px_rgba(173,245,49,0.9)]" />
              Live connection
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">NextGen / Open</span>
          </div>
          <div className="pt-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/38">The next move is yours</span>
            <p className="mt-3 font-[family-name:var(--font-syne)] text-[clamp(2rem,3vw,2.8rem)] font-medium leading-[0.96] tracking-[-0.06em] text-white">
              Let&apos;s build something <span className="text-[#ADF531]">worth remembering.</span>
            </p>
            <p className="mt-5 max-w-[430px] text-sm leading-6 text-white/55">Tell us what you are building. We&apos;ll connect the idea, design and technology into one clear next step.</p>
          </div>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#ADF531] py-2.5 pl-5 pr-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white">
            Start a conversation
            <span className="grid size-8 place-items-center rounded-full bg-black text-base text-[#ADF531]">↗</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={answerTelephone}
          aria-label={ended ? 'Call ended' : answered ? (canHangUp ? 'End the call' : 'Telephone answered') : 'Answer the telephone'}
          aria-pressed={answered}
          className={`telephone-stage group relative aspect-square w-[min(86vw,520px)] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#ADF531] ${shifted ? 'is-shifted' : ''}`}
        >
          <div className="absolute inset-[17%] rounded-full bg-[#ADF531]/12 blur-[55px] transition duration-700 group-hover:bg-[#ADF531]/20" />
          <Image src={dialerImage} alt="Lime rotary telephone dialer" fill sizes="520px" className="telephone-dialer object-contain p-[12%] drop-shadow-[0_32px_35px_rgba(0,0,0,0.55)]" />
          <div className={`telephone-handset-motion ${hasArrived ? 'has-arrived' : ''} ${answered ? 'is-answered' : ''} ${ended ? 'is-ended' : ''} ${hasCompletedCall && !answered && !ended ? 'is-ready-again' : ''}`}>
            <Image src={handsetImage} alt="" fill sizes="560px" className="telephone-handset-art" />
          </div>
        </button>
      </div>
    </section>
  );
}
