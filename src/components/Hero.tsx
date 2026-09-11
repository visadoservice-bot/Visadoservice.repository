import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { imagery } from '../data/imagery';
import { translations } from '../data/translations';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenConsultation,
  onExploreServices
}) => {
  const t = translations[currentLang];

  return (
    <section id="hero" className="relative w-full min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-[#071A2F]">
      {/* Cinematic Background Image with Zoom subtle parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src={imagery.hero.main}
          alt={imagery.hero.alt}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12000ms] ease-out will-change-transform"
          loading="eager"
        />
        {/* Editorial Gradients: Deep Luxury Dark Blue (#071A2F) blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/65 to-[#071A2F]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2F]/90 via-[#071A2F]/50 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16 flex flex-col justify-center h-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Subtle Pill Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A76C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#F7F7F5]/90 uppercase">
              {t.hero.smallLabel}
            </span>
          </div>

          {/* Grand Titre Editorial */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-medium leading-[1.08] tracking-tight text-white drop-shadow-sm">
            {t.hero.title}
          </h1>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg md:text-xl text-[#E9ECEF]/90 font-light leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 text-[#071A2F] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] rounded-sm border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>

        </div>
      </div>

      {/* Scroll to explore indicator */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group text-[#E9ECEF]/60 hover:text-white transition-colors"
        aria-label={t.hero.scrollPrompt}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
          {t.hero.scrollPrompt}
        </span>
        <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#C7A76C] rounded-full animate-bounce mt-1" />
        </div>
      </a>
    </section>
  );
};
