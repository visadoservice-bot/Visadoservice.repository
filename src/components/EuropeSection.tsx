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
    <section id="europe" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-400 bg-blue-500/15 border border-blue-400/20 px-3.5 py-1 rounded-full inline-block mb-3.5">
              {t.europe.overline}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.europe.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-md leading-relaxed">
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
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Aspect Box */}
                <div className="relative h-[400px] sm:h-[440px] w-full overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`${dest.name} - ${dest.city}`}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Modern gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Top metadata */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-blue-400 font-bold bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
                      {dest.number}
                    </span>
                    <div className="flex items-center gap-2">
                      {dest.id === 'es' && (
                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold shadow-md">
                          Visa Réel Délivré
                        </span>
                      )}
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/15 text-white backdrop-blur-xs border border-white/15">
                        Schengen
                      </span>
                    </div>
                  </div>

                  {/* Bottom Editorial Content */}
                  <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.city}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl text-white font-bold mb-2">
                      {dest.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                      {dest.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      <span>{t.europe.exploreAction}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{selectedDest.city}, {selectedDest.name}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {selectedDest.name}
            </h3>

            {selectedDest.id === 'es' && (
              <div className="mb-6 rounded-xl overflow-hidden border border-blue-500/30 relative">
                <img
                  src={imagery.realAgency.schengenVisaPassport}
                  alt="Exemple de visa Schengen Espagne obtenu avec Visado Service"
                  className="w-full h-56 object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 flex items-center justify-between">
                  <span className="text-xs text-blue-400 font-semibold">
                    Cas Réel • Visa Schengen Espagne Délivré
                  </span>
                  <span className="text-[11px] text-white/80 font-mono">
                    Passeport client & Carte Visado
                  </span>
                </div>
              </div>
            )}

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedDest.description}
            </p>

            <div className="border-t border-b border-white/10 py-5 my-4">
              <h4 className="text-xs uppercase tracking-wider text-blue-400 font-bold mb-3.5">
                {t.europe.typicalTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedDest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
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
                className="flex-1 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white text-center text-xs font-semibold rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Consulter sur WhatsApp
              </a>
              <button
                onClick={() => { setSelectedDest(null); onOpenConsultation(); }}
                className="flex-1 py-3 px-5 bg-white/10 hover:bg-white/15 text-white text-center text-xs font-semibold rounded-xl border border-white/15 transition-all cursor-pointer"
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
