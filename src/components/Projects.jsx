import { LuUser, LuCheck, LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Reveal, SectionHeading, card } from "./ui";


const PROJECTS = [
  {
    img: "./deepfake-detection-card.svg",
    alt: "Deepfake Video Detection",
    title: "Deepfake Video Detection",
    badges: [
      { text: "Research", cls: "bg-sky-500/25 text-sky-200" },
      {
        text: "Deep Learning",
        cls: "bg-white/15 text-white/85 backdrop-blur-sm",
      },
    ],
    role: "Researcher & Model Developer",
    desc: "A video-level deepfake detector combining a Vision Transformer, a Bidirectional GRU and temporal attention, trained and evaluated on the Celeb-DF v2 dataset (AUC-ROC 0.98).",
    points: [
      "Built a ViT-B/16 + BiGRU + multi-head temporal attention model for spatio-temporal analysis of face frames",
      "Designed an identity-based train/validation/test split to prevent identity leakage across splits",
      "Handled class imbalance using focal loss, weighted sampling, mixup and label smoothing",
    ],
    stack: [
      "Python",
      "PyTorch",
      "timm",
      "Vision Transformer",
      "BiGRU",
      "OpenCV",
      "scikit-learn",
    ],
    live: null,
    github: "https://github.com/AnturDN/deepfake-video-detection-vit-bigru-celebdf", // TODO: replace
    delay: 0,
  },
  {
    img: "./bytespace.png",
    alt: "ByteSpace E-Learning Platform",
    title: "ByteSpace E-Learning Platform",
    badges: [
      { text: "Figma to Code", cls: "bg-sky-500/25 text-sky-200" },
      { text: "Frontend", cls: "bg-white/15 text-white/85 backdrop-blur-sm" },
    ],
    role: "Frontend Developer",
    desc: "A pixel-perfect responsive e-learning platform built from a Figma design, featuring course discovery, course details, creator profiles, and authentication pages with smooth animations throughout.",
    points: [
      "Replicated a complete Figma design system with exact color tokens, typography scale, and spacing using Tailwind CSS v4",
      "Built a multi-page app with React Router v6 including landing, courses listing, course details, creator profile, sign in/up and 404 pages",
      "Implemented scroll-triggered animations, floating cards, animated progress bars, and smooth tab transitions using Framer Motion",
      "Followed a component-driven architecture with reusable atoms (Button, Badge, Container) and section-level components",
      "Maintained a professional Git workflow with feature branches, PRs, and clean conventional commit messages",
    ],
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS v4",
      "React Router",
      "Framer Motion",
      "React Icons",
    ],
    live: "https://bytespace-antur.vercel.app/", // TODO: replace
    github: "https://github.com/AnturDN/ByteSpace", // TODO: replace
    delay: 0,
  },
  {
    img: "./praasad.png",
    alt: "Praasad Group ERP System",
    title: "Praasad Group ERP System",
    badges: [
      { text: "Featured", cls: "bg-sky-500/25 text-sky-200" },
      { text: "ERP", cls: "bg-white/15 text-white/85 backdrop-blur-sm" },
    ],
    role: "Frontend Developer",
    desc: "A comprehensive ERP system automating core business operations including inventory, sales, customer management, and accounting modules.",
    points: [
      "Designed responsive UI with Framer Motion animations",
      "Integrated RESTful APIs for dynamic CRUD operations",
      "Maintained reusable component architecture",
    ],
    stack: [
      "React.js",
      "Laravel",
      "MySQL",
      "Tailwind",
      "Framer Motion",
      "REST API",
    ],
    live: null, // TODO: link thakle dao
    github: null, // TODO: link thakle dao
    delay: 0,
  },
  {
    img: "./inventory.png",
    alt: "Inventory Management System",
    title: "Inventory Management System",
    badges: [
      { text: "Full Stack", cls: "bg-emerald-500/25 text-emerald-200" },
      { text: "Management", cls: "bg-white/15 text-white/85 backdrop-blur-sm" },
    ],
    role: "Frontend Developer",
    desc: "A full-featured inventory system for tracking products, suppliers, stock levels, and warehouse operations with automated financial calculations.",
    points: [
      "Implemented CRUD with search & pagination",
      "Managed image upload via Laravel API & Axios",
      "Built automated financial tracking calculations",
    ],
    stack: [
      "React.js",
      "Laravel",
      "MySQL",
      "Axios",
      "Tailwind",
      "Framer Motion",
    ],
    live: null, // TODO: link thakle dao
    // github: "https://github.com/your-username/inventory-system", // TODO: replace
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

        <div className="grid lg:grid-cols-2 auto-rows-fr gap-6">
          {PROJECTS.map((p) => (
            <Reveal key={p.title} delay={p.delay} className="h-full">
              <article
                className={`group relative flex h-full flex-col overflow-hidden ${card}`}
              >
                <div className="relative h-52 sm:h-60 shrink-0 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {p.badges.map((b) => (
                      <span
                        key={b.text}
                        className={`text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-full ${b.cls}`}
                      >
                        {b.text}
                      </span>
                    ))}
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-medium text-white">
                    {p.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <LuUser className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-xs text-slate-500">{p.role}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <LuCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-sky-600/70 dark:text-sky-400/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* mt-auto wrapper: links + stack sob card-e ekdom niche thake */}
                  <div className="mt-auto">
                    {(p.live || p.github) && (
                      <div className="flex flex-wrap gap-3 mb-5">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                          >
                            <LuExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg border border-slate-900/15 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-900/[0.05] dark:hover:bg-white/[0.06] transition-colors"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-900/[0.08] dark:border-white/[0.06]">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] bg-slate-900/[0.05] dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
