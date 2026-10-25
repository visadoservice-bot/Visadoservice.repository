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

        {/* 5-Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {t.approach.steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-950/80 rounded-3xl border border-white/10 p-6 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-250 ease-out group flex flex-col justify-between h-full hover:-translate-y-1.5"
            >
              <div>
                <div className="w-[54px] h-[54px] rounded-2xl bg-blue-600 text-white font-mono text-xl font-extrabold flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-250">
                  {step.number}
                </div>

                <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400 block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight mb-2.5">
                  {step.title}
                </h3>

                <p className="text-[14.5px] text-slate-300 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
