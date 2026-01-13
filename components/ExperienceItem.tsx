import React from 'react';
import { Experience } from '../types';

export const ExperienceItem: React.FC<{ exp: Experience }> = ({ exp }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 last:mb-0">
      <div className="md:w-1/4 flex-shrink-0">
        <div className="font-mono text-xs text-neutral-400 mb-1">{exp.period}</div>
        <div className="text-sm text-neutral-500">{exp.location}</div>
      </div>
      
      <div className="md:w-3/4">
        <h3 className="text-base font-semibold text-neutral-900">
          {exp.role}
        </h3>
        <div className="text-sm text-blue-700 font-medium mb-3">
          {exp.company}
        </div>
        
        <ul className="space-y-2 mb-3">
            {exp.description.map((item, idx) => (
                <li key={idx} className="text-sm text-neutral-600 leading-relaxed relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-neutral-300">
                    {item}
                </li>
            ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3">
          {exp.tags.map((tag) => (
            <span key={tag} className="text-xs text-neutral-400 font-mono">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};