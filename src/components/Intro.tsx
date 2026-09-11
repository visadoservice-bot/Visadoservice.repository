import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';
import { imagery } from '../data/imagery';
import { translations } from '../data/translations';
import { Language } from '../types';

interface IntroProps {
  currentLang: Language;
}

export const Intro: React.FC<IntroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="intro" className="relative py-28 sm:py-36 bg-[#071A2F] overflow-hidden border-b border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0B2545]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C7A76C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C7A76C]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
                {t.intro.overline}
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-white whitespace-pre-line">
              {t.intro.heading}
            </h2>

            <div className="space-y-6 text-[#E9ECEF]/85 text-base sm:text-lg leading-relaxed font-light">
              <p className="border-l-2 border-[#C7A76C]/40 pl-6 text-white/95 italic font-serif-luxury text-lg sm:text-xl">
                {t.intro.paragraph1}
              </p>
              <p className="pl-6">
                {t.intro.paragraph2}
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#C7A76C] mt-1 shrink-0" />
                <div>
                  <span className="block text-sm font-semibold text-white tracking-wide">Oran, Algérie</span>
                  <span className="text-xs text-[#E9ECEF]/60">14 Rue Capitaine Hadri Mohamed</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C7A76C] mt-1 shrink-0" />
                <div>
                  <span className="block text-sm font-semibold text-white tracking-wide">Méthode & Rigueur</span>
                  <span className="text-xs text-[#E9ECEF]/60">Accompagnement personnalisé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Frame */}
              <div className="relative overflow-hidden rounded-sm border border-[#C7A76C]/30 shadow-2xl">
                <img
                  src={imagery.intro.traveler}
                  alt="Passeport avec visa Espagne Schengen et carte officielle Visado Service"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/70 via-transparent to-transparent" />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 luxury-glass-card p-5 sm:p-6 rounded-sm shadow-2xl max-w-[240px]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A76C] font-bold block mb-1">
                  Visado Service
                </span>
                <p className="text-xs text-white/90 leading-snug">
                  Une écoute attentive et des démarches structurées pour chaque étape.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
