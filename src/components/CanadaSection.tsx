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
    <section id="canada" className="relative py-28 sm:py-36 bg-[#071A2F] text-white overflow-hidden">
      
      {/* Background panoramic image with subtle darkening and luxury vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={imagery.canada.panorama}
          alt="Canada paysage et métropole"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2F] via-[#071A2F]/80 to-[#071A2F]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#071A2F]/60 to-[#071A2F]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C7A76C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
              {t.canada.overline}
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4">
            {t.canada.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#E9ECEF]/90 font-light leading-relaxed max-w-2xl">
            {t.canada.description}
          </p>
        </div>

        {/* 5-Step Canada Pathway */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Compass className="w-4 h-4 text-[#C7A76C]" />
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#E9ECEF]/80 font-bold">
              {t.canada.stepsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {t.canada.steps.map((step) => (
              <div
                key={step.number}
                className="luxury-glass p-6 rounded-sm border border-white/10 hover:border-[#C7A76C]/40 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-serif-luxury text-2xl lg:text-3xl text-[#C7A76C] font-light block mb-3">
                    {step.number}
                  </span>
                  <h4 className="text-base font-semibold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E9ECEF]/75 font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
                <div className="w-full h-0.5 bg-white/10 group-hover:bg-[#C7A76C] transition-colors mt-6" />
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
              className="px-8 py-4 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] rounded-sm shadow-xl transition-all duration-300 flex items-center gap-3 group"
            >
              <span>{t.canada.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#071A2F] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Legal Notice */}
          <div className="max-w-xl flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-sm">
            <AlertCircle className="w-4 h-4 text-[#C7A76C] shrink-0 mt-0.5" />
            <p className="text-xs text-[#E9ECEF]/70 leading-relaxed font-light">
              {t.canada.legalNotice}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
