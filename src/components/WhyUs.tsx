import React from 'react';
import { Award, Briefcase, Users, MapPin, Clock } from 'lucide-react';
import { imagery } from '../data/imagery';
import { translations } from '../data/translations';
import { Language } from '../types';

interface WhyUsProps {
  currentLang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const pillarIcons = [
    <Award key="0" className="w-5 h-5 text-[#C7A76C]" />,
    <Briefcase key="1" className="w-5 h-5 text-[#C7A76C]" />,
    <Users key="2" className="w-5 h-5 text-[#C7A76C]" />,
    <MapPin key="3" className="w-5 h-5 text-[#C7A76C]" />,
    <Clock key="4" className="w-5 h-5 text-[#C7A76C]" />
  ];

  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#071A2F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Architecture Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img
                src={imagery.agency.desk}
                alt="Espace d'accueil et consultation Visado Service à Oran"
                className="w-full h-[520px] object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/20 to-transparent" />
              
              {/* Floating Stat/Location Overlay */}
              <div className="absolute bottom-6 left-6 right-6 luxury-glass-card p-6 rounded-sm">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A76C] font-bold block mb-1">
                  Visado Service • Oran
                </span>
                <p className="text-sm font-serif-luxury text-white">
                  14 Rue Capitaine Hadri Mohamed, Oran, Algérie
                </p>
                <p className="text-xs text-[#E9ECEF]/70 mt-1">
                  Accueil du samedi au jeudi pour l'examen de vos projets de voyage.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Pillars */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C7A76C]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
                  {t.whyUs.overline}
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
                {t.whyUs.heading}
              </h2>
              <p className="text-base text-[#E9ECEF]/80 font-light leading-relaxed">
                {t.whyUs.subheading}
              </p>
            </div>

            {/* Structured Pillars */}
            <div className="space-y-6">
              {t.whyUs.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-sm border border-white/5 hover:border-[#C7A76C]/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-sm bg-white/5 group-hover:bg-[#C7A76C]/20 transition-colors shrink-0">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-lg text-white font-medium mb-1 tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E9ECEF]/75 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
