import React from 'react';
import { Globe, Plane, ShieldCheck, Compass } from 'lucide-react';
import { translations } from '../data/translations';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';
import { Card, CardPartnerLogo } from './Card';

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

  const airlineLogos: CardPartnerLogo[] = [
    { name: 'Air Algérie', src: '/logos/air-algerie.svg', alt: 'Air Algérie' },
    { name: 'Tassili Airlines', src: '/logos/tassili-airlines.svg', alt: 'Tassili Airlines' },
    { name: 'Transavia', src: '/logos/transavia.svg', alt: 'Transavia' },
    { name: 'Volotea', src: '/logos/volotea.svg', alt: 'Volotea' },
    { name: 'Vueling', src: '/logos/vueling.svg', alt: 'Vueling' }
  ];

  const insuranceLogos: CardPartnerLogo[] = [
    { name: 'Macir Vie', src: '/logos/macir-vie.svg', alt: 'Macir Vie' },
    { name: 'AXA Algérie', src: '/logos/axa.svg', alt: 'AXA Algérie' },
    { name: 'Amana', src: '/logos/amana.svg', alt: 'Amana' },
    { name: 'Alliance Assurances', src: '/logos/alliance.svg', alt: 'Alliance Assurances' }
  ];

  const getCardConfig = (id: string) => {
    switch (id) {
      case 'schengen':
        return {
          icon: Globe,
          colorClass: 'blue',
          actionLabel: currentLang === 'ar' ? 'طلب استشارة ومرافقة' : currentLang === 'en' ? 'Get Consultation' : 'Prendre rendez-vous',
          onAction: () => onNavigateToSection('europe')
        };
      case 'canada_orientation':
      case 'canada':
        return {
          icon: Compass,
          colorClass: 'rose',
          actionLabel: currentLang === 'ar' ? 'طلب توجيه واستشارة' : currentLang === 'en' ? 'Get Advisory' : 'Demander conseil',
          onAction: () => onNavigateToSection('canada')
        };
      case 'billetterie_vols':
        return {
          icon: Plane,
          colorClass: 'emerald',
          actionLabel: currentLang === 'ar' ? 'حجز تذاكر الطيران' : currentLang === 'en' ? 'Book Flight' : 'Réserver un vol',
          onAction: onOpenConsultation,
          partnerLogos: {
            type: 'airlines' as const,
            logos: airlineLogos
          }
        };
      case 'assurance_voyage':
      default:
        return {
          icon: ShieldCheck,
          colorClass: 'purple',
          actionLabel: currentLang === 'ar' ? 'طلب تأمين السفر' : currentLang === 'en' ? 'Get Insurance' : 'Souscrire une assurance',
          onAction: onOpenConsultation,
          partnerLogos: {
            type: 'insurance' as const,
            logos: insuranceLogos
          }
        };
    }
  };

  return (
    <section id="services" className="py-14 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/70 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100/60 dark:border-blue-800 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {t.services.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {t.services.heading}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.services.subheading}
            </p>
          </div>
        </Reveal>

        {/* Grille responsive : 1 col mobile, 2 tab, 4 desktop avec gap 24px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service, idx) => {
            const config = getCardConfig(service.id);
            return (
              <Reveal 
                key={service.id} 
                delay={idx * 60} 
                direction="up" 
                className="flex flex-col h-full"
              >
                <Card
                  icon={config.icon}
                  subtitle={service.subtitle}
                  title={service.title}
                  description={service.description}
                  highlights={service.highlights}
                  colorClass={config.colorClass}
                  partnerLogos={config.partnerLogos}
                  action={{
                    label: config.actionLabel,
                    onClick: config.onAction
                  }}
                />
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
