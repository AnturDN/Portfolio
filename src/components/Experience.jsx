import { Fragment } from 'react';
import { LuCalendar, LuMapPin, LuCheck, LuGraduationCap } from 'react-icons/lu';
import { Reveal, SectionHeading, card } from './ui';

const DUTIES = [
  'Developed responsive and dynamic web interfaces using React.js, Tailwind CSS, and Bootstrap, improving mobile responsiveness and site accessibility.',
  'Converted static UI/UX designs into reusable, interactive React components, reducing frontend development time.',
  'Built and integrated backend APIs using PHP (Laravel) and MySQL, ensuring seamless data flow across modules.',
  'Optimized React component performance by implementing lazy loading, improving application load times.',
  'Collaborated with UX designers to maintain consistent visual design and brand identity across all platforms.',
  'Participated in debugging, refactoring, and feature testing to improve application stability and overall quality.',
];

const STACK = ['React.js', 'Tailwind CSS', 'Bootstrap', 'Laravel', 'MySQL'];

const LANGS = [
  { flag: '🇧🇩', name: 'Bangla', level: 'Native' },
  { flag: '🇬🇧', name: 'English', level: 'Fluent' },
  { flag: '🇮🇳', name: 'Hindi', level: 'Conversational' },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Experience" title="Where I've" highlight="worked" />
        </Reveal>

        <Reveal className="relative">
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/70 dark:from-sky-400/60 to-transparent" />
          <div className="relative pl-14 sm:pl-20">
            {/* FIXED: invalid sm:left-5.5 → sm:left-[22px], ar hardcoded #030303 border → theme-aware ring */}
            <span className="absolute left-[14px] sm:left-[22px] top-1 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-[#E8EDF5] dark:ring-[#070D1A]" />
            <div className={`${card} p-6 sm:p-8`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Frontend Developer</h3>
                  <p className="text-sm text-sky-700 dark:text-sky-400">MystrixIT</p>
                </div>
                <div className="flex items-center gap-2">
                  <LuCalendar className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs text-slate-500 font-mono">Feb 2025 – Aug 2025</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-5 flex items-center gap-1.5">
                <LuMapPin className="w-3 h-3" /> Dhaka, Bangladesh
              </p>
              <ul className="space-y-3">
                {DUTIES.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <LuCheck className="w-4 h-4 shrink-0 mt-0.5 text-sky-600/60 dark:text-sky-400/60" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-900/[0.08] dark:border-white/[0.06]">
                {STACK.map((s) => (
                  <span key={s} className="text-[10px] uppercase tracking-wider font-medium bg-slate-900/[0.05] dark:bg-white/[0.06] text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Education" title="Academic" highlight="background" />
        </Reveal>
        <Reveal>
          <div className={`${card} p-6 sm:p-8`}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-sky-600/10 dark:bg-sky-400/10">
                <LuGraduationCap className="w-7 h-7 text-sky-600 dark:text-sky-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Bachelor of Science in CSE</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full w-fit bg-emerald-600/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Currently Enrolled
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Northern University Bangladesh</p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <LuMapPin className="w-3 h-3" /> Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Languages ---------- */
/* ---------- Languages ---------- */
export function Languages() {
  return (
    <section className="relative py-16 px-6 border-y border-slate-900/10 dark:border-white/[0.06]">
      {/* Outer: pura group ta page er middle e anbe */}
      <Reveal className="flex justify-center">
        {/* Inner: flex-item howay auto shrink-to-fit hoy (widest row er moto),
            ar bhitore flex-col + stretch → shob row same width,
            tai flag gulo ek vertical line e align hoye jay */}
        <div className="flex w-fit flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
          {LANGS.map((l, i) => (
            <Fragment key={l.name}>
              {i > 0 && (
                <span className="hidden sm:block w-px h-10 bg-slate-900/10 dark:bg-white/10" />
              )}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900/[0.05] dark:bg-white/[0.06] flex items-center justify-center text-lg">
                  {l.flag}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{l.name}</div>
                  <div className="text-xs text-slate-500">{l.level}</div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
