import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Github, FileText } from 'lucide-react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative flex flex-col h-full p-6 bg-neutral-50 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-100 border border-transparent hover:border-neutral-100">
      <div className="flex justify-between items-start mb-4">
        <div>
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-700 transition-colors">
            {project.title}
            </h3>
            <p className="text-sm text-neutral-500 font-mono mt-1">{project.subtitle}</p>
        </div>
        <div className="flex gap-2">
            {project.links.map((link, i) => (
                <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label={link.label}
                >
                    {link.type === 'github' && <Github className="w-5 h-5" />}
                    {link.type === 'paper' && <FileText className="w-5 h-5" />}
                    {link.type === 'external' && <ArrowUpRight className="w-5 h-5" />}
                </a>
            ))}
        </div>
      </div>
      
      <p className="text-neutral-600 mb-4 text-sm leading-relaxed flex-grow">
        {project.description}
      </p>

      {project.impact && (
        <div className="mb-4 pl-3 border-l-2 border-blue-500/30">
            <p className="text-xs text-neutral-700 font-medium italic">
                "{project.impact}"
            </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-white border border-neutral-200 text-neutral-600 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};