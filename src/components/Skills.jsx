import { skills } from '../data/resumeData';
import GlassCard from './GlassCard';

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <h3 className="mb-8 font-manrope text-3xl font-extrabold text-slate-900 dark:text-white">Skills</h3>
      <GlassCard className="p-6">
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-sky-500/40 bg-sky-100/70 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-glacier/50 dark:bg-white/5 dark:text-mist"
            >
              {skill}
            </li>
          ))}
        </ul>
      </GlassCard>
    </section>
  );
}

export default Skills;
