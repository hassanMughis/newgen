'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const EASE = 0.075;
const WHEEL_MULTIPLIER = 0.92;

function canNestedElementScroll(target: EventTarget | null, deltaY: number) {
  let element = target instanceof HTMLElement ? target : null;

  while (element && element !== document.body) {
    const styles = window.getComputedStyle(element);
    const canOverflow = /(auto|scroll)/.test(styles.overflowY);

    if (canOverflow && element.scrollHeight > element.clientHeight) {
      const canScrollDown = element.scrollTop + element.clientHeight < element.scrollHeight - 1;
      const canScrollUp = element.scrollTop > 1;
      if ((deltaY > 0 && canScrollDown) || (deltaY < 0 && canScrollUp)) {
        return true;
      }
    }

    element = element.parentElement;
  }

  return false;
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let animationFrame = 0;
    let isAnimating = false;

    const maximumScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const clampTarget = (value: number) => Math.min(maximumScroll(), Math.max(0, value));

    const animate = () => {
      const distance = targetY - currentY;
      currentY += distance * EASE;

      if (Math.abs(distance) < 0.45) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isAnimating = false;
        animationFrame = 0;
        return;
      }

      window.scrollTo(0, currentY);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (isAnimating) return;
      isAnimating = true;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      isAnimating = false;
      currentY = window.scrollY;
      targetY = window.scrollY;
    };

    const handleWheel = (event: WheelEvent) => {
      if (
        event.ctrlKey
        || event.defaultPrevented
        || Math.abs(event.deltaX) > Math.abs(event.deltaY)
        || canNestedElementScroll(event.target, event.deltaY)
      ) {
        return;
      }

      event.preventDefault();

      const modeScale = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 18
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? window.innerHeight
          : 1;

      targetY = clampTarget(targetY + event.deltaY * modeScale * WHEEL_MULTIPLIER);
      startAnimation();
    };

    const handleNativeScroll = () => {
      if (isAnimating) return;
      currentY = window.scrollY;
      targetY = window.scrollY;
    };

    const handleResize = () => {
      targetY = clampTarget(targetY);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const element = event.target instanceof HTMLElement ? event.target : null;
      if (element?.matches('input, textarea, select, [contenteditable="true"]')) return;

      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
        stopAnimation();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointerdown', stopAnimation, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      stopAnimation();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', stopAnimation);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pathname]);

  return null;
}
