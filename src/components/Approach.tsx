import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface ApproachProps {
  currentLang: Language;
}

export const Approach: React.FC<ApproachProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="approach" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-400 bg-blue-500/15 border border-blue-400/20 px-3.5 py-1 rounded-full inline-block mb-3.5">
            {t.approach.overline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 whitespace-pre-line">
            {t.approach.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.approach.subheading}
          </p>
        </div>

        {/* 5-Step Sequence */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-0 md:border-l-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 relative">
            
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-white/20 to-transparent -z-0" />

            {t.approach.steps.map((step) => (
              <div key={step.number} className="relative z-10 pl-6 md:pl-0 group">
                
                {/* Number node */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border-2 border-blue-500/80 flex items-center justify-center text-sm font-mono text-white font-bold group-hover:scale-105 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300 shadow-lg shadow-blue-950/50">
                    {step.number}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl text-white font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-blue-400 font-bold">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
