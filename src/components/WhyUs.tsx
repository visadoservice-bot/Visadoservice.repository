import React from 'react';
import { Zap, CheckCheck, Headphones, CircleDollarSign } from 'lucide-react';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface WhyUsProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang }) => {

  const pillars = [
    {
      icon: Zap,
      color: "text-[#1A73E8]",
      bg: "bg-[#E8F0FE]",
      title: currentLang === 'ar' ? 'السرعة والفعالية' : currentLang === 'en' ? 'Speed & Efficiency' : 'Rapidité & Efficacité',
      desc: currentLang === 'ar'
        ? 'معالجة سريعة ودقيقة للاستمارات، رصد فوري للمواعيد المتاحة، ودون تأخير في الإجراءات.'
        : currentLang === 'en'
        ? 'Fast turnaround times, prompt appointment tracking, and strict deadline management.'
        : 'Prise en charge rapide de vos formulaires, veille active sur les créneaux de rendez-vous et respect strict des délais.'
    },
    {
      icon: CheckCheck,
      color: "text-[#1E8E3E]",
      bg: "bg-[#E6F4EA]",
      title: currentLang === 'ar' ? 'الوضوح وراحة البال' : currentLang === 'en' ? 'Simplicity & Peace of Mind' : 'Simplicité & Sérénité',
      desc: currentLang === 'ar'
        ? 'نساعدكم في تيسير إجراءاتكم من الاستشارة والتوجيه إلى المساعدة في حجوزات السفر بكل هدوء.'
        : currentLang === 'en'
        ? 'We assist you in organizing your journey, verified bookings, and travel orientation for a smooth process.'
        : 'Nous vous assistons dans l\'organisation de votre séjour : orientation, assistance aux réservations et démarches sereines.'
    },
    {
      icon: Headphones,
      color: "text-[#9334E6]",
      bg: "bg-[#F3E8FD]",
      title: currentLang === 'ar' ? 'متابعة ودعم مستمر' : currentLang === 'en' ? 'Dedicated Customer Support' : 'Support Client & Conseil Dédié',
      desc: currentLang === 'ar'
        ? 'مستشار خاص يجيب على أسئلتكم عبر الهاتف، واتساب، أو مباشرة في مكاتبنا بوهران.'
        : currentLang === 'en'
        ? 'A dedicated advisor available by phone, WhatsApp, or directly at our office in Oran.'
        : 'Un conseiller à votre écoute par téléphone, WhatsApp ou directement au sein de nos bureaux à Oran.'
    },
    {
      icon: CircleDollarSign,
      color: "text-[#F9AB00]",
      bg: "bg-[#FEF7E0]",
      title: currentLang === 'ar' ? 'أسعار واضحة وشفافة' : currentLang === 'en' ? 'Transparent Pricing' : 'Prix Clairs & Transparents',
      desc: currentLang === 'ar'
        ? 'تسعيرة محددة ومفصلة من البداية بدون أي تكاليف خفية أو مفاجآت.'
        : currentLang === 'en'
        ? 'Upfront, transparent pricing tailored to your specific service with no hidden fees.'
        : 'Tarifs transparents annoncés dès le premier contact, sans frais cachés et avec devis clair.'
    }
  ];

  return (
    <section id="why-us" className="py-14 sm:py-24 bg-slate-50/60 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {currentLang === 'ar' ? 'لماذا تختارنا' : currentLang === 'en' ? 'Why Choose Us' : 'Pourquoi nous choisir'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentLang === 'ar'
                ? 'خبرة واحترافية لمرافقتكم في عالم السفر'
                : currentLang === 'en'
                ? 'Expertise and dedication for your travel aspirations'
                : 'Une équipe à votre écoute pour organiser votre voyage'}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentLang === 'ar'
                ? 'نرافقكم خطوة بخطوة بكل شفافية، من الاستشارة والمساعدة في الحجوزات إلى المتابعة الدقيقة.'
                : 'Découvrez les engagements de confiance et de proximité qui font l\'identité de Visado Service à Oran.'}
            </p>
          </div>
        </Reveal>

        {/* 4 Pillars Grid & Mobile Snap-Carousel */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-10 sm:mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={idx}
                delay={idx * 75}
                direction="up"
                className="min-w-[250px] min-[380px]:min-w-[275px] sm:min-w-0 snap-start flex flex-col h-full"
              >
                <div 
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 h-full flex flex-col justify-between shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
                >
                  <div>
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-2xs`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
