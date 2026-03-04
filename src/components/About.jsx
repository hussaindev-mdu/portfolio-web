import { education, profile } from '../data/resumeData';
import GlassCard from './GlassCard';

function About() {
  return (
    <section id="about" className="section-wrap">
      <h3 className="mb-8 font-manrope text-3xl font-extrabold text-slate-900 dark:text-white">About</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard as="article" className="p-6">
          <p className="text-slate-700 dark:text-mist/90">
            Based in {profile.location}, I focus on building modern UI systems with reliable engineering and maintainable
            component architecture.
          </p>
        </GlassCard>
        <GlassCard as="article" className="p-6">
          <h4 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">Education</h4>
          {education.map((item) => (
            <div key={item.school} className="mb-4">
              <p className="font-semibold text-slate-800 dark:text-mist">{item.school}</p>
              <p className="text-sm text-slate-600 dark:text-mist/80">{item.degree}</p>
              <p className="text-xs text-sky-700 dark:text-glacier">{item.duration}</p>
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  );
}

export default About;
