import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceItem } from './components/ExperienceItem';
import { PublicationItem } from './components/PublicationItem';
import { EducationItem } from './components/EducationItem';
import { 
  SOCIAL_LINKS, 
  CORE_PILLARS, 
  TECH_STACK, 
  EXPERIENCES, 
  EDUCATION,
  PROJECTS, 
  PUBLICATIONS, 
  AWARDS,
  ABOUT_TEXT
} from './constants';
import { Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:py-20 lg:px-12 selection:bg-blue-100 selection:text-blue-900">
      <main className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 md:mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Antonio Sabbatella
          </h1>
          <h2 className="text-lg md:text-xl text-neutral-600 mb-6 font-medium">
            MSc Data Science (110L) | AI Research Engineer
          </h2>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-blue-700 transition-colors font-mono uppercase tracking-wider"
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </header>

        {/* ABOUT ME & PILLARS */}
        <Section title="About" className="pt-0 border-t-0">
          <p className="text-base text-neutral-600 leading-relaxed mb-10 max-w-2xl">
            {ABOUT_TEXT}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION - Highly relevant for Research roles */}
        <Section title="Education">
            {EDUCATION.map((edu, idx) => (
                <EducationItem key={idx} edu={edu} />
            ))}
        </Section>

        {/* EXPERIENCE */}
        <Section title="Experience">
            {EXPERIENCES.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
            ))}
        </Section>

        {/* PROJECTS */}
        <Section title="Selected Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </Section>

        {/* TECH STACK */}
        <Section title="Technical Arsenal">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {TECH_STACK.map((group) => (
                    <div key={group.category}>
                        <h4 className="text-xs font-bold text-neutral-900 uppercase mb-3">{group.category}</h4>
                        <ul className="space-y-1">
                            {group.skills.map(skill => (
                                <li key={skill} className="text-sm text-neutral-600 font-mono">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>

        {/* PUBLICATIONS */}
        <Section title="Publications">
            <div className="space-y-6">
                {PUBLICATIONS.map((pub, idx) => (
                    <PublicationItem key={idx} pub={pub} />
                ))}
            </div>
        </Section>

         {/* AWARDS */}
         <Section title="Achievements">
            <div className="space-y-4">
                {AWARDS.map((award, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 border border-neutral-100 rounded-lg bg-neutral-50/50">
                        <Trophy className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <div className="flex justify-between items-baseline flex-wrap gap-2">
                                <h4 className="text-sm font-semibold text-neutral-900">{award.title}</h4>
                                <span className="text-xs font-mono text-neutral-400">{award.year}</span>
                            </div>
                            <p className="text-xs text-neutral-500 mt-1 mb-1 font-medium">{award.organization}</p>
                            <p className="text-sm text-neutral-600">{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 text-center">
          <p className="text-xs text-neutral-400 font-mono">
            &copy; {new Date().getFullYear()} Antonio Sabbatella. 
            <br className="sm:hidden"/>
             Built with React & Tailwind.
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;