import React from 'react';
import { Publication } from '../types';
import { ArrowUpRight } from 'lucide-react';

export const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => {
  return (
    <div className="mb-6 last:mb-0 group">
      <div className="flex justify-between items-baseline gap-4">
        <h4 className="text-base font-medium text-neutral-900 leading-snug">
            {pub.link ? (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:underline decoration-1 underline-offset-4 transition-colors">
                    {pub.title}
                </a>
            ) : (
                pub.title
            )}
        </h4>
        {pub.link && <ArrowUpRight className="w-3 h-3 text-neutral-300 group-hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />}
      </div>
      
      <div className="text-sm text-neutral-500 mt-1">
        {pub.authors}
      </div>
      
      <div className="flex items-center gap-3 mt-1 text-xs font-mono text-neutral-400">
        <span className="bg-neutral-100 px-1 rounded text-neutral-600">{pub.year}</span>
        <span className="italic">{pub.journal}</span>
        {pub.stats?.map(stat => (
            <span key={stat} className="text-green-600 font-medium">{stat}</span>
        ))}
      </div>
    </div>
  );
};