import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface TrustProps {
  currentLang: Language;
}

export const Trust: React.FC<TrustProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-24 sm:py-32 bg-[#0B2545]/20 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold block mb-3">
            {t.trust.overline}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            {t.trust.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#E9ECEF]/80 font-light leading-relaxed">
            {t.trust.subheading}
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.trust.pillars.map((item, idx) => (
            <div
              key={idx}
              className="luxury-glass p-8 rounded-sm border border-white/10 hover:border-[#C7A76C]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C7A76C] font-bold block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 font-medium mb-4">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-[#E9ECEF]/70 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C7A76C]">
                <span>Visado Service</span>
                <span>•</span>
                <span>Oran</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
