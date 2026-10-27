import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Compass } from 'lucide-react';

interface ApproachProps {
  currentLang: Language;
}

export const Approach: React.FC<ApproachProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="approach" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#003E92] bg-[#003E92]/10 border border-[#003E92]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#003E92]" />
            <span>{t.approach.overline}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 whitespace-pre-line leading-tight">
            {t.approach.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {t.approach.subheading}
          </p>
        </div>

        {/* 5-Step Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.approach.steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-5 sm:p-6 hover:bg-white hover:border-[#009EE2]/60 hover:shadow-xl shadow-xs transition-all duration-300 ease-out group flex flex-col justify-between h-full hover:-translate-y-1.5"
            >
              <div>
                <div className="w-[48px] h-[48px] rounded-2xl bg-[#003E92] text-white font-mono text-lg font-extrabold flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {step.number}
                </div>

                <span className="text-xs uppercase font-bold tracking-wider text-[#009EE2] block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#003E92] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
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
