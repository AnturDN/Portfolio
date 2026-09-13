import { LuMail, LuPhone, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { Reveal, SectionHeading, card } from "./ui";

const EMAIL = "anturdebnath.dev@gmail.com";
const MAILTO = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Project%20Inquiry`;

const INFO = [
  {
    Icon: LuPhone,
    label: "Phone",
    value: "+880 1770 125058",
    href: "tel:+8801770125058",
    external: false,
  },
  {
    Icon: LuMapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    external: true,
  },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+880 1770 125058",
    href: "https://wa.me/8801770125058",
    external: true,
  },
];

const SOCIALS = [
  {
    Icon: FaGithub,
    href: "https://github.com/AnturDN",
    label: "GitHub",
    handle: "@AnturDN",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/antur-deb-nath/",
    label: "LinkedIn",
    handle: "antur-deb-nath",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/antur.round",
    label: "Facebook",
    handle: "antur.round",
  },
];
export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Let's build something"
            highlight="together"
            sub="Have a project in mind? Click on my email — I usually reply within 24 hours."
          />
        </Reveal>

        {/* ===== Big Email CTA — click korlei mail app e direct ===== */}
        {/* ===== Big Email CTA — click korlei mail app new tab e ===== */}
        <Reveal delay={100}>
          <a
            href={MAILTO}
            target="_blank"
            rel="noreferrer"
            className={`group relative block overflow-hidden ${card} p-8 sm:p-12 text-center`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl bg-sky-600/[0.07] dark:bg-sky-400/[0.05] pointer-events-none" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-sky-600/10 dark:bg-sky-400/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <LuMail className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3">
                Click to mail me directly
              </p>
              <span className="block font-serif text-2xl sm:text-4xl break-all text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                {EMAIL}
              </span>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full bg-slate-900 text-white group-hover:bg-sky-700 dark:bg-white dark:text-slate-900 dark:group-hover:bg-sky-300 transition-colors">
                Open Mail App
                <LuArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </a>
        </Reveal>

        {/* ===== Phone + Location ===== */}
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {INFO.map(({ Icon, label, value, href, external }, i) => (
            <Reveal key={label} delay={200 + i * 100}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`group ${card} p-5 flex items-center gap-4`}
              >
                <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-sky-600/10 dark:bg-sky-400/10">
                  <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs text-slate-500">{label}</span>
                  <span className="block text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    {value}
                  </span>
                </span>
                <LuArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* ===== Socials ===== */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {SOCIALS.map(({ Icon, href, label, handle }, i) => (
            <Reveal key={label} delay={400 + i * 100}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group ${card} p-5 flex flex-col items-center gap-3 text-center h-full`}
              >
                <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900/[0.05] dark:bg-white/[0.06] text-slate-500 dark:text-slate-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-900 dark:text-white">
                    {label}
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5 truncate max-w-[120px] mx-auto">
                    {handle}
                  </span>
                </span>
                <LuArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="relative border-t border-slate-900/10 dark:border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-sky-600/15 dark:bg-sky-400/15">
            <span className="text-xs font-semibold text-sky-700 dark:text-sky-400">
              A
            </span>
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Antur Deb Nath
          </span>
        </div>
        <p className="text-xs text-slate-500">
          Built with React, Tailwind CSS &amp; too much ☕
        </p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-400 dark:text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
