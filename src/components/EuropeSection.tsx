import React, { useState } from 'react';
import { ArrowUpRight, Check, MapPin, X, Globe } from 'lucide-react';
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
    <section id="europe" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-[#003E92] bg-[#003E92]/10 border border-[#003E92]/20 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3.5 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#003E92]" />
              <span>{t.europe.overline}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.europe.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-md leading-relaxed">
            {t.europe.subheading}
          </p>
        </div>

        {/* Editorial Grid: 3-column & 2-row layout with 24px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.europe.destinations.map((dest) => {
            const imgSrc = destinationImages[dest.id] || imagery.europe.france;

            return (
              <div
                key={dest.id}
                onClick={() => handleDestinationClick(dest)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/80 bg-white hover:border-[#009EE2]/60 hover:shadow-2xl hover:shadow-[#003E92]/10 transition-all duration-300 ease-out hover:-translate-y-1.5 h-full flex flex-col"
              >
                {/* Image Aspect Box */}
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`${dest.name} - ${dest.city}`}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Modern gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top metadata */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-[#009EE2] font-bold bg-slate-950/70 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      {dest.number}
                    </span>
                    <div className="flex items-center gap-2">
                      {dest.id === 'es' && (
                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#003E92] text-white font-bold shadow-md">
                          {currentLang === 'ar' ? 'وجهة شائعة' : 'Destination Populaire'}
                        </span>
                      )}
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs border border-white/20">
                        Schengen
                      </span>
                    </div>
                  </div>

                  {/* Bottom Editorial Content */}
                  <div className="absolute bottom-6 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#38B6FF] mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.city}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl text-white font-extrabold mb-2 tracking-tight">
                      {dest.name}
                    </h3>

                    <p className="text-[14px] text-slate-200 line-clamp-2 mb-4 leading-relaxed font-normal">
                      {dest.description}
                    </p>

                    <button className="w-full py-3 px-4 rounded-2xl bg-[#003E92] hover:bg-[#002D6B] active:bg-[#002458] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer">
                      {t.europe.exploreAction}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Destination Detail Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-start max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#003E92] mb-2">
              <MapPin className="w-4 h-4 text-[#003E92]" />
              <span>{selectedDest.city}, {selectedDest.name}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              {selectedDest.name}
            </h3>

            {selectedDest.id === 'es' && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 relative shadow-sm">
                <img
                  src={imagery.realAgency.schengenVisaPassport}
                  alt="Exemple de visa Schengen Espagne obtenu avec Visado Service"
                  className="w-full h-56 object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3.5 flex items-center justify-between">
                  <span className="text-xs text-[#7CD2FF] font-semibold">
                    {currentLang === 'ar' ? 'مرافقة وإجراءات السفر إلى إسبانيا' : 'Formalités & Conseils Voyage Espagne'}
                  </span>
                  <span className="text-[11px] text-white/90 font-mono">
                    Visado Service · Oran
                  </span>
                </div>
              </div>
            )}

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedDest.description}
            </p>

            <div className="border-t border-b border-slate-100 py-5 my-4">
              <h4 className="text-xs uppercase tracking-wider text-[#003E92] font-bold mb-3.5">
                {t.europe.typicalTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedDest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <Check className="w-3.5 h-3.5 text-[#009EE2] shrink-0 stroke-[2.5]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(`Bonjour Visado Service, je souhaite avoir des conseils pour un voyage vers ${selectedDest.name} (${selectedDest.city}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-center text-xs font-bold rounded-xl transition-all shadow-xs active:scale-[0.98]"
              >
                {currentLang === 'ar' ? 'تواصل عبر واتساب' : 'Échanger sur WhatsApp'}
              </a>
              <button
                onClick={() => { setSelectedDest(null); onOpenConsultation(); }}
                className="flex-1 py-3 px-5 bg-[#003E92] hover:bg-[#002D6B] active:bg-[#002458] text-white text-center text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                {currentLang === 'ar' ? 'تحدث مع مستشار' : 'Parler à un conseiller'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
