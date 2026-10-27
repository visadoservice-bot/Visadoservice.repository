import React from 'react';
import { ArrowRight, AlertCircle, Compass } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface CanadaSectionProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const CanadaSection: React.FC<CanadaSectionProps> = ({
  currentLang,
  onOpenConsultation
}) => {
  const t = translations[currentLang];

  return (
    <section id="canada" className="relative py-16 sm:py-24 bg-slate-50/60 text-slate-800 overflow-hidden border-b border-slate-200/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#003E92] bg-[#003E92]/10 border border-[#003E92]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#003E92]" />
            <span>{t.canada.overline}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.canada.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            {t.canada.description}
          </p>
        </div>

        {/* 5-Step Canada Pathway */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Compass className="w-4 h-4 text-[#003E92]" />
            <h3 className="text-xs uppercase tracking-wider text-slate-600 font-bold">
              {t.canada.stepsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.canada.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-[#009EE2]/50 hover:shadow-xl shadow-xs transition-all duration-300 ease-out group flex flex-col justify-between h-full hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-[50px] h-[50px] rounded-2xl bg-[#003E92]/10 border border-[#003E92]/20 text-[#003E92] font-mono text-xl font-extrabold flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#003E92] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    {step.text}
                  </p>
                </div>
                <div className="w-full h-1 bg-slate-100 group-hover:bg-[#009EE2] rounded-full transition-colors mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Strict Legal Disclaimer */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-8 border-t border-slate-200">
          
          {/* Action */}
          <div>
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 bg-[#003E92] hover:bg-[#002D6B] active:bg-[#002458] text-white text-sm font-bold rounded-2xl shadow-md shadow-[#003E92]/20 transition-all flex items-center justify-center cursor-pointer active:scale-[0.98]"
            >
              <span>{t.canada.cta}</span>
            </button>
          </div>

          {/* Legal Notice */}
          <div className="max-w-xl flex items-start gap-3 bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5 rounded-2xl">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              {t.canada.legalNotice}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
