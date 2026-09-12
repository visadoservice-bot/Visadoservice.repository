import React, { useState } from 'react';
import { Zap, CheckCheck, Headphones, CircleDollarSign, MapPin, Play } from 'lucide-react';
import { siteConfig } from '../data/config';
import { Language } from '../types';

interface WhyUsProps {
  currentLang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang }) => {
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
    <section id="why-us" className="py-16 sm:py-20 bg-[#F8F9FA] border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-3 py-1 rounded-full inline-block mb-3">
            {currentLang === 'ar' ? 'لماذا تختارنا' : currentLang === 'en' ? 'Why Choose Us' : 'Pourquoi nous choisir'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
            {currentLang === 'ar'
              ? 'خبرة واحترافية لضمان أفضل فرصة لقبول ملفكم'
              : 'Une méthode rigoureuse au service de votre projet de voyage'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5F6368]">
            {currentLang === 'ar'
              ? 'مكتبنا يوفر لكم راحة البال والضمان عبر معايير عمل صارمة.'
              : 'Découvrez les engagements qui font la réputation de Visado Service à Oran.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="google-card p-6 bg-white">
                <div className={`w-10 h-10 rounded-lg ${pillar.bg} ${pillar.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#202124] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Agency Presentation Card (Google Business verified badge & video) */}
        <div className="google-card p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left info */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E8E3E] bg-[#E6F4EA] px-2.5 py-1 rounded">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentLang === 'ar' ? 'وكالة معتمدة ومسجلة بوهران' : 'Établissement physique vérifié à Oran'}</span>
              </div>
              <h3 className="text-lg font-bold text-[#202124]">
                {currentLang === 'ar' ? 'مقرنا في قلب مدينة وهران في خدمتكم' : 'Visitez nos locaux au 14 Rue Capitaine Hadri à Oran'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                {currentLang === 'ar'
                  ? 'نستقبلكم طيلة أيام الأسبوع من السبت إلى الخميس (09:00 - 17:00) لتقديم الاستشارات، فحص المستندات، واستلام المعاملات بكل ثقة وأمان.'
                  : 'Nous vous accueillons du samedi au jeudi pour étudier vos pièces, procéder aux réservations officielles et déposer vos demandes en toute sérénité.'}
              </p>
              <div className="pt-1 flex flex-wrap gap-4 text-xs font-medium text-[#3C4043]">
                <span>📍 14 Rue Capitaine Hadri Mohamed, Oran</span>
                <span>📞 {siteConfig.phone}</span>
                <span>✉️ {siteConfig.email}</span>
              </div>
            </div>

            {/* Right: Short Video Embed of the Agency */}
            <div className="md:col-span-5">
              <div className="relative rounded overflow-hidden aspect-video bg-[#202124] border border-[#DADCE0] shadow-2xs">
                {!isPlayingTour ? (
                  <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlayingTour(true)}>
                    <img
                      src="https://img.youtube.com/vi/30VIItLvrUI/hqdefault.jpg"
                      alt="Aperçu des locaux Visado Service Oran"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-[#202124]/40 flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#1A73E8] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                      <span className="text-[11px] font-semibold text-white bg-black/60 px-2 py-0.5 rounded">
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
                      className="absolute top-2.5 right-2.5 bg-black/85 hover:bg-black text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-20 transition-all border border-white/10"
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

      </div>
    </section>
  );
};
