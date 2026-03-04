import { profile } from '../data/resumeData';
import GlassCard from './GlassCard';

function Hero() {
  return (
    <section id="home" className="section-wrap pt-16">
      <GlassCard className="bg-nature-day p-8 md:p-12 dark:bg-nature-radial">
        <span className="hero-orbit" aria-hidden="true" />
        {/* <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-glacier">Samsung One UI, Forest Calm</p> */}
        <h1 className="font-manrope text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-6xl">{profile.name}</h1>
        <h2 className="mt-4 text-xl font-semibold text-slate-700 dark:text-mist md:text-2xl">{profile.role}</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-mist/85">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:brightness-110 dark:bg-glacier dark:text-midnight">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl border border-slate-400/60 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-200/60 dark:border-mist/40 dark:text-mist dark:hover:bg-white/10">
            Contact Me
          </a>
        </div>
      </GlassCard>
    </section>
  );
}

export default Hero;
