'use client';

import { useEffect, useRef } from 'react';

const focusSelector = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  'summary',
  '[data-cursor="focus"]',
  '.group',
  'article',
  'img',
  'video',
].join(',');

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!cursor || !finePointer.matches) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };

    const updateFocus = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      cursor.classList.toggle('is-focused', Boolean(element?.closest(focusSelector)));
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('is-visible');
      updateFocus(event.target);
    };

    const onPointerDown = () => cursor.classList.add('is-pressed');
    const onPointerUp = () => cursor.classList.remove('is-pressed');
    const onPointerOver = (event: PointerEvent) => updateFocus(event.target);
    const onPointerLeave = () => cursor.classList.remove('is-visible', 'is-pressed', 'is-focused');

    frame = window.requestAnimationFrame(render);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointerover', onPointerOver);
      document.documentElement.removeEventListener('mouseleave', onPointerLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-ring" />
    </div>
  );
}
