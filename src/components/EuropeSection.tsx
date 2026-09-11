import React, { useState } from 'react';
import { ArrowUpRight, Check, MapPin, X } from 'lucide-react';
import { imagery } from '../data/imagery';
import { siteConfig } from '../data/config';
import { translations } from '../data/translations';
import { Language } from '../types';

interface EuropeSectionProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const EuropeSection: React.FC<EuropeSectionProps> = ({
  currentLang,
  onOpenConsultation
}) => {
  const [selectedDest, setSelectedDest] = useState<typeof t.europe.destinations[0] | null>(null);
  const t = translations[currentLang];

  const destinationImages: Record<string, string> = {
    fr: imagery.europe.france,
    it: imagery.europe.italy,
    es: imagery.europe.spain,
    de: imagery.europe.germany,
    be: imagery.europe.belgium,
    mt: imagery.europe.malta
  };

  const handleDestinationClick = (dest: typeof t.europe.destinations[0]) => {
    setSelectedDest(dest);
  };

  return (
    <section id="europe" className="py-28 sm:py-36 bg-[#071A2F] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C7A76C]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
                {t.europe.overline}
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
              {t.europe.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#E9ECEF]/70 font-light max-w-md">
            {t.europe.subheading}
          </p>
        </div>

        {/* Editorial Grid: Asymmetric 3-column & 2-row layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.europe.destinations.map((dest) => {
            const imgSrc = destinationImages[dest.id] || imagery.europe.france;

            return (
              <div
                key={dest.id}
                onClick={() => handleDestinationClick(dest)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#0B2545]/50 transition-all duration-500 hover:border-[#C7A76C]/50 hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Image Aspect Box */}
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`${dest.name} - ${dest.city}`}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />

                  {/* Top metadata */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="font-serif-luxury text-xs tracking-widest text-[#C7A76C] font-bold">
                      {dest.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full luxury-glass text-white/80 border border-white/10">
                      Schengen
                    </span>
                  </div>

                  {/* Bottom Editorial Content */}
                  <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.city}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal mb-2">
                      {dest.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#E9ECEF]/80 line-clamp-2 mb-4 font-light leading-relaxed">
                      {dest.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white font-semibold group-hover:text-[#C7A76C] transition-colors">
                      <span>{t.europe.exploreAction}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Destination Detail Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl luxury-glass border border-white/20 rounded-sm shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-5 right-5 p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-bold mb-2">
              <MapPin className="w-4 h-4" />
              <span>{selectedDest.city}, {selectedDest.name}</span>
            </div>

            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-normal mb-4">
              {selectedDest.name}
            </h3>

            <p className="text-sm sm:text-base text-[#E9ECEF]/90 font-light leading-relaxed mb-6">
              {selectedDest.description}
            </p>

            <div className="border-t border-b border-white/10 py-4 my-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-semibold mb-3">
                {t.europe.typicalTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedDest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/90 bg-white/5 p-2.5 rounded-sm border border-white/5">
                    <Check className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(`Bonjour Visado Service, je souhaite avoir des informations pour un visa destination ${selectedDest.name} (${selectedDest.city}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-[#C7A76C] text-[#071A2F] text-center text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#b89658] transition-colors"
              >
                Consulter sur WhatsApp
              </a>
              <button
                onClick={() => { setSelectedDest(null); onOpenConsultation(); }}
                className="flex-1 py-3.5 bg-white/10 hover:bg-white/15 text-white text-center text-xs uppercase tracking-widest font-semibold rounded-sm border border-white/15 transition-colors"
              >
                Prendre rendez-vous agence
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
