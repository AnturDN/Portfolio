import { LuLayoutDashboard, LuServer, LuDatabase, LuWrench } from 'react-icons/lu';
import { Reveal, SectionHeading, Tag, card, useInView } from './ui';

const CATEGORIES = [
  {
    Icon: LuLayoutDashboard, title: 'Frontend',
    chip: 'bg-sky-600/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind', 'Bootstrap', 'Framer Motion'],
  },
  {
    Icon: LuServer, title: 'Backend',
    chip: 'bg-emerald-600/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400',
    tags: ['Laravel', 'RESTful APIs'],
  },
  {
    Icon: LuDatabase, title: 'Database',
    chip: 'bg-violet-600/10 dark:bg-violet-400/10 text-violet-600 dark:text-violet-400',
    tags: ['MySQL'],
  },
  {
    Icon: LuWrench, title: 'Languages & Tools',
    chip: 'bg-amber-600/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400',
    tags: ['C', 'C++', 'Java', 'Git', 'GitHub', 'Debugging', 'Testing', 'PostMan', 'Cloudinary','XAMPP'],
  },
];

const SKILLS = [
  { name: 'Tailwind CSS', pct: 92, bar: 'from-violet-600 to-violet-600' },
  { name: 'JavaScript (ES6+)', pct: 88, bar: 'from-yellow-500 to-yellow-500' },
  { name: 'React.js', pct: 90, bar: 'from-sky-500 to-cyan-500' },
  { name: 'Laravel / PHP', pct: 85, bar: 'from-emerald-600 to-emerald-600' },
  { name: 'MySQL', pct: 80, bar: 'from-amber-600 to-amber-600' },
  { name: 'C Programming', pct: 95, bar: 'from-pink-300 to-pink-300' },
  { name: 'C++', pct: 90, bar: 'from-purple-400 to-purple-400' },
  { name: 'Java', pct: 65, bar: 'from-amber-900 to-amber-900' },
  { name: 'Data Structure', pct: 70, bar: 'from-lime-500 to-lime-500' },
];

function SkillBar({ name, pct, bar }) {
  const [ref, inView] = useInView(0.4);
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-slate-600 dark:text-slate-300">{name}</span>
        <span className="text-xs text-slate-500">{pct}%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-900/[0.08] dark:bg-white/[0.07] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${bar} transition-[width] duration-1000 ease-out`}
          style={{ width: inView ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Technical Skills" title="My" highlight="tech stack" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className={`${card} p-6 h-full`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${c.chip}`}>
                  <c.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium mb-3 text-slate-900 dark:text-white">{c.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14">
          <div className={`${card} p-6 sm:p-8`}>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Core Proficiency</h3>
            <div className="space-y-5">
              {SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
