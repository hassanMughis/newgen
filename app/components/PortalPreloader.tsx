'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type LoaderPhase = 'loading' | 'revealing' | 'hidden';

export default function PortalPreloader() {
  const [phase, setPhase] = useState<LoaderPhase>('loading');

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minimumDuration = reducedMotion ? 180 : 850;
    const revealDuration = reducedMotion ? 220 : 820;

    root.classList.add('portal-is-loading');
    root.classList.remove('portal-has-entered');

    let pageReady = document.readyState === 'complete';
    let minimumElapsed = false;
    let finished = false;
    let revealTimer: number | undefined;

    const finish = () => {
      if (finished) return;
      finished = true;
      setPhase('hidden');
      root.classList.remove('portal-is-loading');
      root.classList.add('portal-has-entered');
    };

    const beginReveal = () => {
      if (finished || !pageReady || !minimumElapsed || revealTimer !== undefined) return;
      setPhase('revealing');
      root.classList.add('portal-has-entered');
      revealTimer = window.setTimeout(finish, revealDuration);
    };

    const handleLoad = () => {
      pageReady = true;
      beginReveal();
    };

    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      beginReveal();
    }, minimumDuration);

    const safetyTimer = window.setTimeout(finish, 3200);

    if (!pageReady) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minimumTimer);
      window.clearTimeout(safetyTimer);
      if (revealTimer !== undefined) window.clearTimeout(revealTimer);
      window.removeEventListener('load', handleLoad);
      root.classList.remove('portal-is-loading');
      root.classList.add('portal-has-entered');
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`portal-preloader portal-preloader--${phase}`}
      role="status"
      aria-live="polite"
      aria-label="Loading NextGen Digitals"
    >
      <div className="portal-preloader__curtain" />

      <div className="portal-preloader__stage">
        <div className="portal-preloader__energy">
          <div className="portal-preloader__orbit" />
          <div className="portal-preloader__inner-ring" />
          <Image
            src="/ngd-logo-dark.png"
            alt=""
            width={360}
            height={150}
            priority
            className="portal-preloader__logo"
          />
        </div>

        <div className="portal-preloader__label" aria-hidden="true">
          <span>NextGen Digitals</span>
          <span className="portal-preloader__loading-word">Loading</span>
        </div>

        <div className="portal-preloader__expanding-ring" />
      </div>
    </div>
  );
}
