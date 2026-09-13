import { Fragment } from 'react';
import {
  SiReact, SiLaravel, SiJavascript, SiTailwindcss,
  SiMysql, SiPhp, SiBootstrap, SiFramer,
} from 'react-icons/si';
import { LuArrowRight, LuDownload } from 'react-icons/lu';

const ORBITS = [
  { Icon: SiReact, color: '#61DAFB', label: 'React', anim: 'animate-[orbit1_20s_linear_infinite]', delay: '0s' },
  { Icon: SiLaravel, color: '#FF2D20', label: 'Laravel', anim: 'animate-[orbit2_25s_linear_infinite_reverse]', delay: '-5s' },
  { Icon: SiJavascript, color: '#F7DF1E', label: 'JS', anim: 'animate-[orbit3_18s_linear_infinite]', delay: '-8s' },
  { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind', anim: 'animate-[orbit4_22s_linear_infinite_reverse]', delay: '-3s' },
  { Icon: SiMysql, color: '#4479A1', label: 'MySQL', anim: 'animate-[orbit1_20s_linear_infinite]', delay: '-12s' },
  { Icon: SiPhp, color: '#777BB4', label: 'PHP', anim: 'animate-[orbit2_25s_linear_infinite_reverse]', delay: '-18s' },
  { Icon: SiBootstrap, color: '#7952B3', label: 'Bootstrap', anim: 'animate-[orbit3_18s_linear_infinite]', delay: '-14s' },
  { Icon: SiFramer, color: '#0055FF', label: 'Framer', anim: 'animate-[orbit4_22s_linear_infinite_reverse]', delay: '-10s' },
];


const STATS = [
  { value: '20+', label: 'Projects' },
  { value: '1.5year', label: 'Experience' },
  { value: '3', label: 'Languages' },
];

const MARQUEE = ['React.js', 'Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL', 'PHP', 'Framer Motion', 'RESTful API'];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-24 left-[15%] w-64 h-64 rounded-full blur-3xl pointer-events-none animate-[float_6s_ease-in-out_infinite] bg-sky-600/[0.09] dark:bg-sky-400/[0.07]" />
      <div className="absolute bottom-24 right-[15%] w-48 h-48 rounded-full blur-3xl pointer-events-none animate-[float_6s_ease-in-out_infinite] bg-indigo-600/[0.07] dark:bg-sky-400/[0.05]" style={{ animationDelay: '-3s' }} />

      {/* Profile + orbits */}
      <div
        className="relative flex items-center justify-center mb-14 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
        style={{ width: 520, height: 520, maxWidth: '90vw', maxHeight: '55vh' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {ORBITS.map(({ Icon, color, label, anim, delay }) => (
            <div key={label} className={`absolute ${anim}`} style={{ animationDelay: delay }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex flex-col items-center justify-center gap-0.5 cursor-default bg-white/95 dark:bg-white/[0.07] border-slate-900/10 dark:border-white/10 shadow-lg shadow-slate-900/10 dark:shadow-black/30 hover:scale-110 hover:border-sky-600/40 dark:hover:border-sky-400/40 hover:shadow-sky-600/20 dark:hover:shadow-sky-400/20 transition-all duration-300">
                <Icon className="w-7 h-7" style={{ color }} />
                <span className="text-[8px] font-medium text-slate-500 dark:text-slate-400">{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden animate-[pulseRing_3s_ease-in-out_infinite]">
            <img src="./profile_pic.jpeg" alt="Antur Deb Nath" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-white/[0.08] backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-full px-5 py-2 whitespace-nowrap shadow-lg shadow-slate-900/10 dark:shadow-black/30">
            <span className="text-sm font-medium text-slate-900 dark:text-white">Antur Deb Nath</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">Full Stack Dev</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-white/[0.05] border border-slate-900/10 dark:border-white/10 rounded-full px-4 py-2 mb-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Available for opportunities</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-5 text-slate-900 dark:text-white opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-br from-slate-900 via-sky-600 to-sky-500 dark:from-white dark:via-sky-300 dark:to-sky-400 bg-clip-text text-transparent">
            Antur
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.8s_ease-out_0.45s_forwards]">
          Full Stack Developer building responsive, high-performance web apps with{' '}
          <span className="text-sky-600 dark:text-sky-400 font-normal">React.js</span> &{' '}
          <span className="text-sky-600 dark:text-sky-400 font-normal">Laravel</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
          <a href="#projects" className="group flex items-center gap-3 font-semibold text-sm px-7 py-3.5 rounded-full bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-sky-300 transition-colors duration-300 shadow-lg shadow-slate-900/20 dark:shadow-sky-400/10">
            View My Work <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          {/* NOTE: public/ folder e resume.pdf rakhle download hobe (original e kaj korto na) */}
          <a href="/Antur_Deb_Nath_Resume.pdf" download className="flex items-center gap-3 font-medium text-sm px-7 py-3.5 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.06] border border-slate-900/10 dark:border-white/10 text-slate-800 dark:text-white hover:border-sky-600/50 dark:hover:border-sky-400/40 hover:bg-slate-900/[0.07] dark:hover:bg-white/[0.1] transition-all duration-300">
            <LuDownload className="w-4 h-4" /> Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-12 opacity-0 animate-[fadeUp_0.8s_ease-out_0.75s_forwards]">
          {STATS.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <div className="w-px h-8 bg-slate-900/10 dark:bg-white/10" />}
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900 dark:text-white">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
export function Marquee() {
  return (
    <section className="relative py-10 border-y border-slate-900/10 dark:border-white/[0.06]">
      <div className="mq-mask overflow-hidden">
        <div className="flex w-max animate-[marquee_40s_linear_infinite]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-12 pr-12">
              {MARQUEE.map((t) => (
                <Fragment key={t}>
                  <span className="text-xl sm:text-2xl font-medium text-slate-500 dark:text-slate-100/50 hover:text-sky-700 dark:hover:text-sky-300 transition-colors cursor-default">
                    {t}
                  </span>
                  <span className="text-slate-400/50 dark:text-white/20">✦</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}