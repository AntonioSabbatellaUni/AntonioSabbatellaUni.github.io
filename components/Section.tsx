import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", id }) => {
  return (
    <section id={id} className={`py-12 md:py-16 border-t border-neutral-100 first:border-0 ${className}`}>
      {title && (
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 font-mono">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};