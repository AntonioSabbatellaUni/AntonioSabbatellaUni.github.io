import React from 'react';
import { Education } from '../types';

export const EducationItem: React.FC<{ edu: Education }> = ({ edu }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 last:mb-0">
      <div className="md:w-1/4 flex-shrink-0">
        <div className="font-mono text-xs text-neutral-400 mb-1">{edu.period}</div>
        <div className="text-sm text-neutral-500">{edu.location}</div>
      </div>
      
      <div className="md:w-3/4">
        <div className="flex justify-between items-start flex-wrap gap-2">
            <h3 className="text-base font-semibold text-neutral-900">
                {edu.degree}
            </h3>
             <span className="text-sm font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                {edu.grade}
            </span>
        </div>
        <div className="text-sm text-blue-700 font-medium mb-3">
          {edu.university}
        </div>
        
        {edu.thesis && (
            <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">Thesis</span>
                <p className="text-sm text-neutral-700 mt-1 italic leading-relaxed">
                    "{edu.thesis}"
                </p>
            </div>
        )}

        {edu.coursework && edu.coursework.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {edu.coursework.map((course) => (
              <span key={course} className="text-xs text-neutral-500 font-mono relative pl-2 first:pl-0 before:content-['/'] before:absolute before:left-[-6px] before:text-neutral-300 first:before:hidden">
                {course}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};