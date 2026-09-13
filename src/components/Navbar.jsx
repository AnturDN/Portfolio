import { useEffect, useState } from 'react';
import { LuSun, LuMoon, LuMenu, LuX, LuArrowRight } from 'react-icons/lu';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-spy: active link highlight */
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const linkCls = (id) =>
    `px-3 py-2 text-xs font-medium rounded-full transition-colors ${
      active === id
        ? 'text-sky-700 dark:text-sky-300 bg-sky-600/10 dark:bg-sky-400/10'
        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
    }`;

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-3xl">
      <div
        className={`backdrop-blur-xl border rounded-full px-4 sm:px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0C1424]/95 border-slate-900/10 dark:border-white/10 shadow-lg shadow-slate-900/10 dark:shadow-black/40'
            : 'bg-white/70 dark:bg-white/[0.05] border-slate-900/[0.08] dark:border-white/[0.08]'
        }`}
      >
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-sky-600/15 dark:bg-sky-400/15">
            <span className="text-sm font-semibold text-sky-700 dark:text-sky-400">A</span>
          </div>
          <span className="font-medium text-sm hidden sm:block text-slate-900 dark:text-white">Antur</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={linkCls(l.id)}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* FIXED: icon color bug — hardcoded #fff/#333 er bodole theme-aware currentColor */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-900/[0.06] dark:bg-white/10 text-slate-700 dark:text-sky-300 hover:bg-slate-900/[0.12] dark:hover:bg-white/20 transition-colors"
          >
            {theme === 'dark' ? <LuSun className="w-4 h-4" /> : <LuMoon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-sky-300 transition-colors"
          >
            Hire Me <LuArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* FIXED: menu icon e o hardcoded #fff chilo */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-slate-900/[0.06] dark:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors"
          >
            {open ? <LuX className="w-4 h-4" /> : <LuMenu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-2xl p-4 bg-white/95 dark:bg-[#0C1424]/95 shadow-xl shadow-slate-900/10 dark:shadow-black/50">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm rounded-xl transition-colors ${
                active === l.id
                  ? 'text-sky-700 dark:text-sky-300 bg-sky-600/10 dark:bg-sky-400/10'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-900/[0.05] dark:hover:bg-white/[0.06]'
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="border-t border-slate-900/10 dark:border-white/10 mt-2 pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
            >
              Hire Me <LuArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}