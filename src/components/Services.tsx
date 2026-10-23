import React from 'react';
import { Globe, FileCheck2, Plane, Sparkles, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Ticket, Compass } from 'lucide-react';
import { siteConfig } from '../data/config';
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

  // Map service ID to Lucide icon component, icon color, and background
  const getServiceMeta = (id: string) => {
    switch (id) {
      case 'schengen':
        return { icon: Globe, iconColor: 'text-[#1A73E8]', iconBg: 'bg-[#E8F0FE]' };
      case 'canada':
        return { icon: Sparkles, iconColor: 'text-[#D93025]', iconBg: 'bg-[#FCE8E6]' };
      case 'dossier':
        return { icon: FileCheck2, iconColor: 'text-[#1E8E3E]', iconBg: 'bg-[#E6F4EA]' };
      case 'air_algerie':
        return { icon: Plane, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' };
      case 'billetterie_vols':
        return { icon: Ticket, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' };
      case 'assurance_voyage':
        return { icon: ShieldCheck, iconColor: 'text-purple-600', iconBg: 'bg-purple-50' };
      case 'conseil':
      default:
        return { icon: Compass, iconColor: 'text-[#F9AB00]', iconBg: 'bg-[#FEF7E0]' };
    }
  };

  return (
    <section id="services" className="py-14 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
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

        {/* 7 Clean Minimalist Cards - Responsive Grid & Mobile Snap-Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {items.map((service, idx) => {
            const meta = getServiceMeta(service.id);
            const IconComponent = meta.icon;
            return (
              <Reveal 
                key={service.id} 
                delay={idx * 60} 
                direction="up" 
                className="flex flex-col h-full min-w-[260px] min-[380px]:min-w-[290px] sm:min-w-[320px] md:min-w-0 snap-start"
              >
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 p-5 sm:p-7 flex flex-col justify-between h-full shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
                >
                  <div>
                    {/* Icon with smooth scale on group hover */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${meta.iconBg} ${meta.iconColor} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300 shadow-2xs`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-3">
                      {service.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3.5 mb-4">
                      {service.highlights?.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => {
                      if (service.targetSection === 'europe' || service.targetSection === 'canada') {
                        onNavigateToSection(service.targetSection);
                      } else {
                        onOpenConsultation();
                      }
                    }}
                    className="w-full mt-2 py-2.5 px-3.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98] group/btn"
                  >
                    <span>{service.cta || (currentLang === 'ar' ? 'تحدث مع مستشار' : 'Demander conseil')}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-blue-600 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Focus Banner */}
        <Reveal direction="up" delay={120}>
          <div className="mt-8 sm:mt-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{currentLang === 'ar' ? 'متابعة المواعيد الرسمية بوهران' : 'Assistance Rendez-Vous & Démarches'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentLang === 'ar' 
                    ? 'مرافقة متكاملة لإجراءات المواعيد وتوجيه المسافرين' 
                    : 'Prise de rendez-vous & accompagnement attentif des voyageurs'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentLang === 'ar' 
                    ? 'فريق وكالتنا بوهران في خدمتكم لتوجيهكم بوضوح، تتبع المواعيد المتاحة، والإجابة عن جميع استفساراتكم بكل مهنية وشفافية.' 
                    : 'Visado Service vous oriente pour vos rendez-vous et vous accompagne dans l\'organisation de votre séjour avec rigueur et disponibilité.'}
                </p>
                <div className="pt-1 flex flex-wrap gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer text-center"
                  >
                    {currentLang === 'ar' ? 'تحدث مع مستشار' : 'Parler à un conseiller'}
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md max-w-[200px] sm:max-w-[220px] group cursor-pointer" onClick={onOpenConsultation}>
                  <img
                    src="/images/rdv.png"
                    alt="Confirmation officielle de rendez-vous BLS Espagne"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white text-[10px] font-semibold py-1.5 px-2 text-center backdrop-blur-xs">
                    {currentLang === 'ar' ? 'نموذج موعد BLS معتمد' : 'Récépissé BLS vérifié'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Global Contextual CTA Block after Services */}
        <Reveal direction="up" delay={150}>
          <div className="mt-8 sm:mt-10 p-5 sm:p-7 bg-gradient-to-r from-blue-50/70 via-white to-slate-50/80 border border-blue-100 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="text-center lg:text-start space-y-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 bg-blue-100/60 px-2.5 py-0.5 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'ar' ? 'استشارة ومرافقة مخصصة' : 'Conseil & orientation personnalisée'}</span>
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {currentLang === 'ar' ? 'هل تخططون لرحلتكم القادمة وتحتاجون إلى التوجيه ؟' : 'Vous préparez votre prochain voyage et souhaitez être guidé ?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {currentLang === 'ar' 
                  ? 'نضع خبرتنا بين أيديكم لمساعدتكم في فهم الخطوات، مراجعة جاهزية عناصر رحلتكم، وحجز تذاكر الطيران بكل هدوء.'
                  : 'Bénéficiez de conseils clairs et d\'un suivi attentif pour préparer votre séjour, vos réservations de transport et vos démarches en toute sérénité.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                {currentLang === 'ar' ? 'تحدث مع مستشار' : 'Parler à un conseiller'}
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent('Bonjour Visado Service, je prépare un voyage et je souhaite parler à un conseiller.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shadow-xs active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>{currentLang === 'ar' ? 'تواصل عبر واتساب' : 'Écrire sur WhatsApp'}</span>
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
