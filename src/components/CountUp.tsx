import { useEffect, useRef, useState, type CSSProperties } from 'react';

interface CountUpProps {
  /** Display value, e.g. "5", "200+", or non-numeric like "Same-day". */
  value: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

// Split "200+" -> { prefix: '', number: 200, suffix: '+' }.
// Non-numeric strings (e.g. "Same-day") return number: null and render statically.
function parseValue(value: string): { prefix: string; number: number | null; suffix: string } {
  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  if (!match) return { prefix: '', number: null, suffix: value };
  const [, prefix, digits, suffix] = match;
  return { prefix, number: parseInt(digits.replace(/,/g, ''), 10), suffix };
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts up from 0 to `value` whenever it scrolls into view, re-triggering on
 * every entry (handles scrolling up or down past it). Respects reduced-motion.
 */
export default function CountUp({ value, duration = 1400, className, style }: CountUpProps) {
  const { prefix, number, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(number === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (number === null) return; // static, non-numeric value
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = 0;

    const render = (n: number) => setDisplay(`${prefix}${n.toLocaleString()}${suffix}`);

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        render(Math.round(easeOut(t) * number));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(rafId);
        if (entry.isIntersecting) {
          if (prefersReduced) render(number);
          else animate();
        } else if (!prefersReduced) {
          render(0); // reset so the next scroll-in re-animates
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [number, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
