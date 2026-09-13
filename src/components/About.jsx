import { LuMapPin, LuMail, LuPhone, LuGraduationCap, LuLanguages } from 'react-icons/lu';
import { Reveal } from './ui';

const INFO = [
  { Icon: LuMail, value: 'anturdebnath.dev@gmail.com' },
  { Icon: LuPhone, value: '+880 1770 125058' },
  { Icon: LuGraduationCap, value: 'BSc in CSE (Ongoing)' },
  { Icon: LuLanguages, value: 'Bangla, English, Hindi' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-slate-900/10 dark:border-white/10">
                <img src="./about_profile.jpeg" alt="Antur" className="w-full h-58 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border rounded-2xl border-sky-600/25 dark:border-sky-400/20 pointer-events-none" />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-white/[0.08] backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg shadow-slate-900/10 dark:shadow-black/30">
                <LuMapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span className="text-xs text-slate-600 dark:text-slate-300">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-sky-600 dark:bg-sky-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">About Me</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-6 text-slate-900 dark:text-white">
              Crafting digital experiences
              <br />
              <span className="text-slate-500 dark:text-slate-200">with clean code</span>
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-[1.8] mb-5">
              I&apos;m a Full Stack Developer based in Dhaka, Bangladesh, currently pursuing my BSc in
              Computer Science &amp; Engineering at Northern University Bangladesh. I specialize in building
              modern web applications using React.js and Laravel.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 font-light leading-[1.8] mb-8">
              I&apos;m passionate about converting UI/UX designs into interactive, reusable components and
              collaborating with cross-functional teams to deliver scalable solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO.map(({ Icon, value }) => (
                <div key={value} className="flex items-center gap-3 bg-slate-900/[0.04] dark:bg-white/[0.04] border border-slate-900/[0.08] dark:border-white/[0.08] rounded-xl px-4 py-3 hover:border-sky-600/40 dark:hover:border-sky-400/40 transition-colors">
                  <Icon className="w-4 h-4 shrink-0 text-sky-600 dark:text-sky-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}