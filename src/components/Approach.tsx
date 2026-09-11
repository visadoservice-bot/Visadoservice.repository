import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface ApproachProps {
  currentLang: Language;
}

export const Approach: React.FC<ApproachProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="approach" className="py-28 sm:py-36 bg-[#0B2545]/30 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C7A76C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
              {t.approach.overline}
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4 whitespace-pre-line">
            {t.approach.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#E9ECEF]/80 font-light leading-relaxed">
            {t.approach.subheading}
          </p>
        </div>

        {/* 5-Step Editorial Sequence */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-0 md:border-l-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 relative">
            
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-[#C7A76C]/80 via-white/20 to-transparent -z-0" />

            {t.approach.steps.map((step) => (
              <div key={step.number} className="relative z-10 pl-6 md:pl-0 group">
                
                {/* Number node */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#071A2F] border-2 border-[#C7A76C] flex items-center justify-center text-sm font-serif-luxury text-white font-bold group-hover:scale-110 group-hover:bg-[#C7A76C] group-hover:text-[#071A2F] transition-all duration-300 shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif-luxury text-xl text-white font-medium tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C7A76C] font-semibold">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#E9ECEF]/75 font-light leading-relaxed">
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
