import { LuUser, LuCheck } from 'react-icons/lu';
import { Reveal, SectionHeading, card } from './ui';

const PROJECTS = [
    {
    img: './deepfake-detection-card.svg',
    alt: 'Deepfake Video Detection',
    title: 'Deepfake Video Detection',
    badges: [
      { text: 'Research', cls: 'bg-sky-500/25 text-sky-200' },
      { text: 'Deep Learning', cls: 'bg-white/15 text-white/85 backdrop-blur-sm' },
    ],
    role: 'Researcher & Model Developer',
    desc: 'A video-level deepfake detector combining a Vision Transformer, a Bidirectional GRU and temporal attention, trained and evaluated on the Celeb-DF v2 dataset (AUC-ROC 0.98).',
    points: [
      'Built a ViT-B/16 + BiGRU + multi-head temporal attention model for spatio-temporal analysis of face frames',
      'Designed an identity-based train/validation/test split to prevent identity leakage across splits',
      'Handled class imbalance using focal loss, weighted sampling, mixup and label smoothing',
    ],
    stack: ['Python', 'PyTorch', 'timm', 'Vision Transformer', 'BiGRU', 'OpenCV', 'scikit-learn'],
    delay: 0,
  },
  {
    img: './praasad.png',
    alt: 'Praasad Group ERP System',
    title: 'Praasad Group ERP System',
    badges: [
      { text: 'Featured', cls: 'bg-sky-500/25 text-sky-200' },
      { text: 'ERP', cls: 'bg-white/15 text-white/85 backdrop-blur-sm' },
    ],
    role: 'Frontend Developer',
    desc: 'A comprehensive ERP system automating core business operations including inventory, sales, customer management, and accounting modules.',
    points: [
      'Designed responsive UI with Framer Motion animations',
      'Integrated RESTful APIs for dynamic CRUD operations',
      'Maintained reusable component architecture',
    ],
    stack: ['React.js', 'Laravel', 'MySQL', 'Tailwind', 'Framer Motion', 'REST API'],
    delay: 0,
  },
  {
    img: './inventory.png',
    alt: 'Inventory Management System',
    title: 'Inventory Management System',
    badges: [
      { text: 'Full Stack', cls: 'bg-emerald-500/25 text-emerald-200' },
      { text: 'Management', cls: 'bg-white/15 text-white/85 backdrop-blur-sm' },
    ],
    role: 'Frontend Developer',
    desc: 'A full-featured inventory system for tracking products, suppliers, stock levels, and warehouse operations with automated financial calculations.',
    points: [
      'Implemented CRUD with search & pagination',
      'Managed image upload via Laravel API & Axios',
      'Built automated financial tracking calculations',
    ],
    stack: ['React.js', 'Laravel', 'MySQL', 'Axios', 'Tailwind', 'Framer Motion'],
    delay: 150,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            kicker="Projects"
            title="Featured"
            highlight="work"
            sub="Real-world applications built to solve complex business problems"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Reveal key={p.title} delay={p.delay}>
              <article className={`group relative overflow-hidden ${card}`}>
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {p.badges.map((b) => (
                      <span key={b.text} className={`text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-full ${b.cls}`}>
                        {b.text}
                      </span>
                    ))}
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-medium text-white">{p.title}</h3>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <LuUser className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-xs text-slate-500">{p.role}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <LuCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-sky-600/70 dark:text-sky-400/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-900/[0.08] dark:border-white/[0.06]">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[10px] bg-slate-900/[0.05] dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
