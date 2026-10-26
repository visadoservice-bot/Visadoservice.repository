import React from 'react';
import { Zap, CheckCheck, Headphones, CircleDollarSign } from 'lucide-react';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';
import { Card } from './Card';

interface WhyUsProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang, onOpenConsultation }) => {
  const pillars = [
    {
      icon: Zap,
      colorClass: 'blue' as const,
      badge: currentLang === 'ar' ? 'فعالية وسرعة' : currentLang === 'en' ? 'Fast' : 'Rapide',
      title: currentLang === 'ar' ? 'السرعة والفعالية' : currentLang === 'en' ? 'Speed & Efficiency' : 'Rapidité & Efficacité',
      desc: currentLang === 'ar'
        ? 'معالجة سريعة ودقيقة للاستمارات، رصد فوري للمواعيد المتاحة، ودون تأخير في الإجراءات.'
        : currentLang === 'en'
        ? 'Fast turnaround times, prompt appointment tracking, and strict deadline management.'
        : 'Prise en charge rapide de vos formulaires, veille active sur les créneaux de rendez-vous et respect strict des délais.'
    },
    {
      icon: CheckCheck,
      colorClass: 'emerald' as const,
      badge: currentLang === 'ar' ? 'وضوح وراحة' : currentLang === 'en' ? 'Clear' : 'Serein',
      title: currentLang === 'ar' ? 'الوضوح وراحة البال' : currentLang === 'en' ? 'Simplicity & Peace of Mind' : 'Simplicité & Sérénité',
      desc: currentLang === 'ar'
        ? 'نساعدكم في تيسير إجراءاتكم من الاستشارة والتوجيه إلى المساعدة في حجوزات السفر بكل هدوء.'
        : currentLang === 'en'
        ? 'We assist you in organizing your journey, verified bookings, and travel orientation for a smooth process.'
        : 'Nous vous assistons dans l\'organisation de votre séjour : orientation, assistance aux réservations et démarches sereines.'
    },
    {
      icon: Headphones,
      colorClass: 'purple' as const,
      badge: currentLang === 'ar' ? 'متابعة دائمة' : currentLang === 'en' ? 'Support' : 'Accompagnement',
      title: currentLang === 'ar' ? 'متابعة ودعم مستمر' : currentLang === 'en' ? 'Dedicated Customer Support' : 'Support Client & Conseil Dédié',
      desc: currentLang === 'ar'
        ? 'مستشار خاص يجيب على أسئلتكم عبر الهاتف، واتساب، أو مباشرة في مكاتبنا بوهران.'
        : currentLang === 'en'
        ? 'A dedicated advisor available by phone, WhatsApp, or directly at our office in Oran.'
        : 'Un conseiller à votre écoute par téléphone, WhatsApp ou directement au sein de nos bureaux à Oran.'
    },
    {
      icon: CircleDollarSign,
      colorClass: 'amber' as const,
      badge: currentLang === 'ar' ? 'أسعار شفافة' : currentLang === 'en' ? 'Transparent' : 'Transparent',
      title: currentLang === 'ar' ? 'أسعار واضحة وشفافة' : currentLang === 'en' ? 'Transparent Pricing' : 'Prix Clairs & Transparents',
      desc: currentLang === 'ar'
        ? 'تسعيرة محددة ومفصلة من البداية بدون أي تكاليف خفية أو مفاجآت.'
        : currentLang === 'en'
        ? 'Upfront, transparent pricing tailored to your specific service with no hidden fees.'
        : 'Tarifs transparents annoncés dès le premier contact, sans frais cachés et avec devis clair.'
    }
  ];

  return (
    <section id="why-us" className="py-14 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-700 bg-slate-100 border border-slate-200/80 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {currentLang === 'ar' ? 'لماذا تختارنا' : currentLang === 'en' ? 'Why Choose Us' : 'Pourquoi nous choisir'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentLang === 'ar'
                ? 'خبرة واحترافية لمرافقتكم في عالم السفر'
                : currentLang === 'en'
                ? 'Expertise and dedication for your travel aspirations'
                : 'Une équipe à votre écoute pour organiser votre voyage'}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentLang === 'ar'
                ? 'نرافقكم خطوة بخطوة بكل شفافية، من الاستشارة والمساعدة في الحجوزات إلى المتابعة الدقيقة.'
                : 'Découvrez les engagements de confiance et de proximité qui font l\'identité de Visado Service à Oran.'}
            </p>
          </div>
        </Reveal>

        {/* 4 Pillars Grid with identical Card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <Reveal
              key={idx}
              delay={idx * 75}
              direction="up"
              className="flex flex-col h-full"
            >
              <Card
                icon={pillar.icon}
                badge={pillar.badge}
                title={pillar.title}
                description={pillar.desc}
                colorClass={pillar.colorClass}
                action={onOpenConsultation ? {
                  label: currentLang === 'ar' ? 'تحدث مع مستشار' : 'Parler à un conseiller',
                  onClick: onOpenConsultation
                } : undefined}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
