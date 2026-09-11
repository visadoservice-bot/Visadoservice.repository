import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { imagery } from '../data/imagery';
import { translations } from '../data/translations';
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

  const serviceImages: Record<string, string> = {
    schengen: imagery.services.schengen,
    canada: imagery.services.canada,
    dossier: imagery.services.dossier,
    conseil: imagery.services.conseil
  };

  const handleAction = (item: typeof t.services.items[0]) => {
    if (item.targetSection === 'europe') {
      onNavigateToSection('europe');
    } else if (item.targetSection === 'canada') {
      onNavigateToSection('canada');
    } else {
      onOpenConsultation();
    }
  };

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#0B2545]/40 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C7A76C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
              {t.services.overline}
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4">
            {t.services.heading}
          </h2>
          <p className="text-lg text-[#E9ECEF]/80 font-light max-w-xl">
            {t.services.subheading}
          </p>
        </div>

        {/* Large Format Showcase for Services */}
        <div className="space-y-16 lg:space-y-24">
          {t.services.items.map((service, index) => {
            const isEven = index % 2 === 1;
            const imgSrc = serviceImages[service.id] || imagery.services.schengen;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual block */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                    <img
                      src={imgSrc}
                      alt={service.title}
                      className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/90 via-[#071A2F]/30 to-transparent" />
                    
                    {/* Corner Service Number Watermark */}
                    <div className="absolute top-6 left-6 luxury-glass px-4 py-1.5 rounded-sm border border-white/10">
                      <span className="font-serif-luxury text-sm font-semibold tracking-wider text-[#C7A76C]">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#E9ECEF]/75 font-medium">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content block */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-semibold">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-normal leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-base text-[#E9ECEF]/80 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#F7F7F5]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#C7A76C] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Elegant Text CTA button with arrow */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleAction(service)}
                      className="inline-flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.16em] text-[#C7A76C] hover:text-white font-bold group transition-colors pb-1 border-b border-[#C7A76C]/40 hover:border-white"
                    >
                      <span>{service.cta}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
