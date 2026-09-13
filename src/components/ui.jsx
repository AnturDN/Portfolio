import { useEffect, useRef, useState } from 'react';

/* IntersectionObserver hook — reveal + skill bar animation */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* Scroll reveal wrapper (original .sr / .vis er React version) */
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Section heading */
export function SectionHeading({ kicker, title, highlight, sub }) {
  return (
    <div className="text-center mb-14 sm:mb-16">
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-8 h-px bg-sky-600 dark:bg-sky-400" />
        <span className="text-xs font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
          {kicker}
        </span>
        <span className="w-8 h-px bg-sky-600 dark:bg-sky-400" />
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white">
        {title}{' '}
        <span className="bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {sub && (
        <p className="text-base text-slate-600 dark:text-slate-400 font-light mt-4 max-w-lg mx-auto">
          {sub}
        </p>
      )}
    </div>
  );
}

/* Tag pill */
export function Tag({ children }) {
  return (
    <span className="text-xs bg-slate-900/[0.05] dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-lg">
      {children}
    </span>
  );
}

/* Shared card classes */
export const card =
  'bg-slate-900/[0.03] dark:bg-white/[0.04] border border-slate-900/[0.08] dark:border-white/[0.08] rounded-2xl hover:bg-slate-900/[0.05] dark:hover:bg-white/[0.06] hover:border-sky-600/30 dark:hover:border-sky-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(2,132,199,0.1)] dark:hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]';