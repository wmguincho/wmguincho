import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up from zero the first time it scrolls into view.
 * `value` may carry a prefix and suffix (e.g. "+12 mil", "15 min"); the
 * first run of digits is animated and the surrounding text is kept intact.
 * SSR renders the final value so there is no layout shift and no flash for
 * users with JavaScript disabled or reduced motion enabled.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/(\d[\d.]*)/);
  const digits = match?.[1] ?? "";
  const matchIndex = match?.index ?? 0;
  const target = digits ? Number(digits.replace(/\./g, "")) : 0;
  const prefix = match ? value.slice(0, matchIndex) : value;
  const suffix = match ? value.slice(matchIndex + digits.length) : "";

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node || !match) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    setDisplay(0);
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const duration = 1100;
        let start: number | null = null;
        const tick = (now: number) => {
          if (start === null) start = now;
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [match, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
