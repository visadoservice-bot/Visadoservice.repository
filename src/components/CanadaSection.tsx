import React from 'react';
import { ArrowRight, AlertCircle, Compass } from 'lucide-react';
import { imagery } from '../data/imagery';
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
    <section id="canada" className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden border-t border-slate-800">
      
      {/* Background panoramic image with subtle darkening */}
      <div className="absolute inset-0 z-0">
        <img
          src={imagery.canada.panorama}
          alt="Canada paysage et métropole"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-400 bg-blue-500/15 border border-blue-400/20 px-3.5 py-1 rounded-full inline-block mb-3.5">
            {t.canada.overline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {t.canada.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            {t.canada.description}
          </p>
        </div>

        {/* 5-Step Canada Pathway */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Compass className="w-4 h-4 text-blue-400" />
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              {t.canada.stepsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {t.canada.steps.map((step) => (
              <div
                key={step.number}
                className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-400/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full hover:-translate-y-1"
              >
                <div>
                  <span className="font-mono text-2xl lg:text-3xl text-blue-400 font-bold block mb-3">
                    {step.number}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {step.text}
                  </p>
                </div>
                <div className="w-full h-1 bg-white/10 group-hover:bg-blue-500 rounded-full transition-colors mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Strict Legal Disclaimer */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-8 border-t border-white/10">
          
          {/* Action */}
          <div>
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg hover:shadow-blue-600/25 transition-all duration-300 flex items-center gap-2.5 group cursor-pointer active:scale-[0.98]"
            >
              <span>{t.canada.cta}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </button>
          </div>

          {/* Legal Notice */}
          <div className="max-w-xl flex items-start gap-3 bg-white/5 border border-white/10 p-5 rounded-2xl">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.canada.legalNotice}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
