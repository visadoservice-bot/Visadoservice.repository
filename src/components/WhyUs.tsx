import React, { useState } from 'react';
import { Zap, CheckCheck, Headphones, CircleDollarSign, MapPin, Play, Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '../data/config';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface WhyUsProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang, onOpenConsultation }) => {
  const [isPlayingTour, setIsPlayingTour] = useState(false);

  const pillars = [
    {
      icon: Zap,
      color: "text-[#1A73E8]",
      bg: "bg-[#E8F0FE]",
      title: currentLang === 'ar' ? 'السرعة والفعالية' : currentLang === 'en' ? 'Speed & Efficiency' : 'Rapidité & Efficacité',
      desc: currentLang === 'ar'
        ? 'معالجة سريعة ودقيقة للاستمارات، رصد فوري للمواعيد المتاحة، ودون تأخير في الإجراءات.'
        : currentLang === 'en'
        ? 'Fast turnaround times, prompt appointment tracking, and timely submission preparation.'
        : 'Prise en charge rapide de vos formulaires, veille active sur les créneaux de rendez-vous et respect strict des délais.'
    },
    {
      icon: CheckCheck,
      color: "text-[#1E8E3E]",
      bg: "bg-[#E6F4EA]",
      title: currentLang === 'ar' ? 'البساطة وراحة البال' : currentLang === 'en' ? 'Simplicity & Peace of Mind' : 'Simplicité & Zéro Stress',
      desc: currentLang === 'ar'
        ? 'نتكفل بكافة التعقيدات الإدارية من ترجمة، حجز فنادق، وتأمين حتى يكون ملفكم جاهزاً 100%.'
        : currentLang === 'en'
        ? 'We take care of the paperwork, verified bookings, and travel insurance for a smooth process.'
        : 'Nous nous occupons des démarches complexes : conformité des justificatifs, réservations officielles et assurances valides.'
    },
    {
      icon: Headphones,
      color: "text-[#9334E6]",
      bg: "bg-[#F3E8FD]",
      title: currentLang === 'ar' ? 'متابعة ودعم مستمر' : currentLang === 'en' ? 'Dedicated Customer Support' : 'Support Client & Conseil Dédié',
      desc: currentLang === 'ar'
        ? 'مستشار خاص يجيب على أسئلتكم عبر الهاتف، واتساب، أو مباشرة في مقرنا بوهران.'
        : currentLang === 'en'
        ? 'A dedicated visa advisor available by phone, WhatsApp, or directly at our physical office in Oran.'
        : 'Un conseiller à votre écoute par téléphone, WhatsApp ou directement au sein de notre agence à Oran.'
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
                ? 'خبرة واحترافية لضمان أفضل فرصة لقبول ملفكم'
                : 'Une méthode rigoureuse au service de votre projet de voyage'}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentLang === 'ar'
                ? 'مكتبنا يوفر لكم راحة البال والضمان عبر معايير عمل صارمة.'
                : 'Découvrez les engagements qui font la réputation de Visado Service à Oran.'}
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

        {/* Real Agency Presentation Card (Google Business verified badge & video) */}
        <Reveal direction="up" delay={120}>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left info */}
              <div className="md:col-span-7 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{currentLang === 'ar' ? 'وكالة معتمدة ومسجلة بوهران' : 'Établissement physique vérifié à Oran'}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                  {currentLang === 'ar' ? 'مقرنا في قلب مدينة وهران في خدمتكم' : 'Visitez nos locaux au 14 Rue Capitaine Hadri à Oran'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentLang === 'ar'
                    ? 'نستقبلكم طيلة أيام الأسبوع من السبت إلى الخميس (09:00 - 17:00) لتقديم الاستشارات، فحص المستندات، واستلام المعاملات بكل ثقة وأمان.'
                    : 'Nous vous accueillons du samedi au jeudi pour étudier vos pièces, procéder aux réservations officielles et déposer vos demandes en toute sérénité.'}
                </p>
                <div className="pt-1 flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 text-[11px] sm:text-xs" dir="ltr">📍 14, Rue Capitaine Hadri Mohamed, Oran</span>
                  <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 text-[11px] sm:text-xs" dir="ltr">📞 {siteConfig.phone}</span>
                  <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 text-[11px] sm:text-xs">✉️ {siteConfig.email}</span>
                </div>

                {/* Contextual CTAs for Office / Consultation */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-2xs hover:shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ar' ? 'حجز موعد في الوكالة' : 'Prendre rendez-vous à l\'agence'}</span>
                  </button>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent('Bonjour Visado Service, je souhaite passer à votre agence à Oran pour étudier mon dossier.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl shadow-2xs active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{currentLang === 'ar' ? 'واتساب الوكالة' : 'Nous contacter sur WhatsApp'}</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span dir="ltr">{siteConfig.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right: Real Agency Visual / Video */}
              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-200/80 shadow-md">
                  {!isPlayingTour ? (
                    <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlayingTour(true)}>
                      <img
                        src="/images/interieur.png"
                        alt="Intérieur des locaux Visado Service Oran"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2.5 transition-opacity group-hover:bg-slate-900/30">
                        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                          <Play className="w-6 h-6 ml-0.5 fill-current" />
                        </div>
                        <span className="text-xs font-semibold text-white bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-xs border border-white/10">
                          {currentLang === 'ar' ? 'شاهد فيديو المقر' : 'Vidéo de nos locaux'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/30VIItLvrUI?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1&loop=1&playlist=30VIItLvrUI"
                        title="Visado Service Oran Locaux"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[250%] max-w-none border-0 select-none pointer-events-auto"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      
                      <button
                        onClick={() => setIsPlayingTour(false)}
                        className="absolute top-3 right-3 bg-black/85 hover:bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-20 transition-all border border-white/20"
                      >
                        <span>✕</span>
                        <span>Fermer</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
