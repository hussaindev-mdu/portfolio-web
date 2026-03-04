import { projects } from '../data/resumeData';
import GlassCard from './GlassCard';

function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <h3 className="mb-8 font-manrope text-3xl font-extrabold text-slate-900 dark:text-white">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <GlassCard as="article" key={project.title} className="flex flex-col p-6">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h4>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-sky-700 dark:text-glacier">{project.stack}</p>
            <p className="mt-4 flex-1 text-sm text-slate-700 dark:text-mist/85">{project.description}</p>
            <div className="mt-6 flex gap-3 text-sm font-semibold">
              <a href={project.live} className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:brightness-110 dark:bg-glacier dark:text-midnight">
                Live
              </a>
              <a href={project.repo} className="rounded-lg border border-slate-400/60 px-4 py-2 text-slate-800 hover:bg-slate-200/60 dark:border-mist/40 dark:text-mist dark:hover:bg-white/10">
                Code
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
