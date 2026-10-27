import React from 'react';
import { Globe, Plane, ShieldCheck, Compass } from 'lucide-react';
import { translations } from '../data/translations';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface ServicesProps {
  currentLang: Language;
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  currentLang,
  onNavigateToSection,
  onOpenConsultation
}) => {
  const t = translations[currentLang];
  const items = t?.services?.items || [];

  return (
    <section id="services" className="py-14 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-700 bg-slate-100 border border-slate-200/80 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {t.services.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.services.heading}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.services.subheading}
            </p>
          </div>
        </Reveal>

        {/* 4 Clean Minimalist Cards - 1 Row on Desktop, Equal Height, Zero Buttons, Sober Luxury Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((service, idx) => {
            const IconComponent = 
              service.id === 'schengen' ? Globe :
              service.id === 'canada_orientation' || service.id === 'canada' ? Compass :
              service.id === 'billetterie_vols' ? Plane : ShieldCheck;

            return (
              <Reveal 
                key={service.id} 
                delay={idx * 60} 
                direction="up" 
                className="flex flex-col h-full"
              >
                <div className="bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
                  <div>
                    {/* Sober, unified icon container */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 border border-slate-200/70 text-[#002A79] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-[#002A79] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">
                      {service.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3.5 mb-2">
                      {service.highlights?.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ligne décorative sobre tout en bas de chaque carte */}
                  {/* Carte 1 : Espace Schengen */}
                  {service.id === 'schengen' && (
                    <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-medium text-slate-600">
                        {currentLang === 'ar' ? 'منطقة شنغن' : currentLang === 'en' ? 'Schengen Area' : 'Espace Schengen'}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                        {currentLang === 'ar' ? '27 دولة أوروبية' : currentLang === 'en' ? '27 States' : '27 États'}
                      </span>
                    </div>
                  )}

                  {/* Carte 2 : Canada & Orientation */}
                  {(service.id === 'canada_orientation' || service.id === 'canada') && (
                    <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-medium text-slate-600">
                        {currentLang === 'ar' ? 'كندا وإرشادات السفر' : currentLang === 'en' ? 'Canada & Advisory' : 'Canada & Conseils'}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                        {currentLang === 'ar' ? 'مرافقة مخصصة' : currentLang === 'en' ? 'Tailored' : 'Sur-mesure'}
                      </span>
                    </div>
                  )}

                  {/* Carte 3 : Ligne fine de logos décoratifs de compagnies aériennes (déco pure sans texte du nom) */}
                  {service.id === 'billetterie_vols' && (
                    <div className="pt-3 mt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between gap-1.5 w-full" aria-label="Compagnies aériennes">
                        {/* Air Algérie */}
                        <div
                          title="Air Algérie"
                          aria-label="Air Algérie"
                          className="flex-1 h-8 sm:h-9 flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-400 hover:text-[#BA1515] hover:bg-white hover:border-red-200 hover:shadow-xs transition-all duration-300 cursor-default group/air"
                        >
                          <svg viewBox="0 0 40 40" className="w-5 h-5 transition-transform duration-200 group-hover/air:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2" />
                            <path d="M10 24C13.5 19.5 18 16 29 13C24.5 17 21 21.5 19 26C18 23 15 22 10 24Z" fill="currentColor" />
                            <path d="M17 17.5C21 14.5 25 13 29 13C25 14.5 21 16 17 17.5Z" fill="currentColor" opacity="0.8" />
                          </svg>
                        </div>

                        {/* Tassili Airlines */}
                        <div
                          title="Tassili Airlines"
                          aria-label="Tassili Airlines"
                          className="flex-1 h-8 sm:h-9 flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-400 hover:text-[#0C6839] hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all duration-300 cursor-default group/tas"
                        >
                          <svg viewBox="0 0 40 40" className="w-5 h-5 transition-transform duration-200 group-hover/tas:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="3.5" width="33" height="33" rx="8" stroke="currentColor" strokeWidth="2" />
                            <path d="M10 26C14 21 19.5 14 29 12C26.5 16 23 22 21 25.5C19.5 23 16 22.5 10 26Z" fill="currentColor" />
                            <path d="M18 15C22.5 12 27 11.5 29 12C25.5 13.5 22 15 18 15Z" fill="currentColor" opacity="0.75" />
                          </svg>
                        </div>

                        {/* Transavia */}
                        <div
                          title="Transavia"
                          aria-label="Transavia"
                          className="flex-1 h-8 sm:h-9 flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-400 hover:text-[#00D66C] hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all duration-300 cursor-default group/tra"
                        >
                          <svg viewBox="0 0 40 40" className="w-5 h-5 transition-transform duration-200 group-hover/tra:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="3.5" width="33" height="33" rx="8" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 14H28V18H22V27H18V18H12V14Z" fill="currentColor" />
                            <circle cx="27" cy="25" r="2.5" fill="currentColor" />
                          </svg>
                        </div>

                        {/* Volotea */}
                        <div
                          title="Volotea"
                          aria-label="Volotea"
                          className="flex-1 h-8 sm:h-9 flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-400 hover:text-[#D11A38] hover:bg-white hover:border-rose-200 hover:shadow-xs transition-all duration-300 cursor-default group/vol"
                        >
                          <svg viewBox="0 0 40 40" className="w-5 h-5 transition-transform duration-200 group-hover/vol:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="3.5" width="33" height="33" rx="8" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 14L20 27L28 14H24L20 21L16 14H12Z" fill="currentColor" />
                          </svg>
                        </div>

                        {/* Vueling */}
                        <div
                          title="Vueling"
                          aria-label="Vueling"
                          className="flex-1 h-8 sm:h-9 flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-400 hover:text-[#F59E0B] hover:bg-white hover:border-amber-200 hover:shadow-xs transition-all duration-300 cursor-default group/vue"
                        >
                          <svg viewBox="0 0 40 40" className="w-5 h-5 transition-transform duration-200 group-hover/vue:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2" />
                            <circle cx="18" cy="20" r="6.5" fill="currentColor" />
                            <circle cx="26" cy="14" r="2.5" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Carte 4 : Ligne fine de logos assurances (Macir Vie, AXA, Amana, Alliance) */}
                  {service.id === 'assurance_voyage' && (
                    <div className="pt-3 mt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between gap-1 w-full" aria-label="Compagnies d'assurance">
                        {[
                          { name: 'Macir Vie', label: 'Macir' },
                          { name: 'AXA Algérie', label: 'AXA' },
                          { name: 'Amana', label: 'Amana' },
                          { name: 'Alliance Assurances', label: 'Alliance' },
                        ].map((ins, iIdx) => (
                          <div
                            key={iIdx}
                            title={ins.name}
                            className="flex-1 flex items-center justify-center py-1 px-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 transition-all duration-200 cursor-default shadow-2xs"
                          >
                            {ins.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
