import { useTheme } from './useTheme';
import Navbar from './components/Navbar';
import Hero, { Marquee } from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience, { Education, Languages } from './components/Experience';
import Projects from './components/Projects';
import Contact, { Footer } from './components/Contact';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="font-sans bg-[#E8EDF5] dark:bg-[#070D1A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Backdrop layers */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_70%_25%,rgba(2,132,199,0.10),transparent_55%)] dark:bg-[radial-gradient(circle_at_70%_25%,rgba(56,189,248,0.08),transparent_55%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_25%_85%,rgba(2,132,199,0.07),transparent_50%)] dark:bg-[radial-gradient(circle_at_25%_85%,rgba(56,189,248,0.05),transparent_50%)]" />

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main className="relative z-[1]">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}