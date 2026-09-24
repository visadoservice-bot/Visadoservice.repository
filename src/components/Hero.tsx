import React from 'react';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, ShieldCheck, MapPin, Compass, Sparkles } from 'lucide-react';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
import { translations } from '../data/translations';
import { imagery } from '../data/imagery';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenConsultation,
  onExploreServices
}) => {
  const t = translations[currentLang];
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_CONSULTANT_MESSAGE)}`;

  return (
    <section 
      id="hero" 
      className="relative bg-[#FAFAFC] border-b border-slate-200/80 pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-20 lg:pb-24 overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow for an editorial, luminous feeling */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic & Editorial Core */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Petite indication: "VISADO SERVICE — ORAN" */}
            <div className="animate-hero-fade flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#002A79] shrink-0 ring-4 ring-blue-100" />
              <span className="text-[#002A79] font-black">VISADO SERVICE</span>
              <span className="text-slate-300 font-light">—</span>
              <span className="text-slate-700 tracking-[0.22em]">ORAN</span>
              <span className="hidden sm:inline text-slate-300">·</span>
              <span className="hidden sm:inline text-slate-500 font-medium normal-case tracking-normal text-[11px]">
                {currentLang === 'ar' ? '14 شارع حادري محمد' : '14 Rue Hadri Mohamed'}
              </span>
            </div>

            {/* 2. Grand titre très élégant */}
            <h1 className="animate-hero-fade text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0B1528] tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-5">
              {currentLang === 'ar' ? (
                <>
                  <span className="block font-medium text-slate-700 text-2xl sm:text-3xl lg:text-[34px] mb-1">
                    دقة في إعداد الملف، وسكينة في السفر.
                  </span>
                  <span className="text-[#002A79]">تأشيرات دولية</span>، مواعيد وحجوزات رسمية في وهران.
                </>
              ) : currentLang === 'en' ? (
                <>
                  <span className="block font-normal text-slate-600 text-2xl sm:text-3xl lg:text-[32px] mb-1 font-serif italic">
                    Precision in every file, serenity in every journey.
                  </span>
                  <span className="text-[#002A79]">International Visas</span> & Certified Travel in Oran.
                </>
              ) : (
                <>
                  <span className="block font-normal text-slate-600 text-2xl sm:text-3xl lg:text-[34px] mb-1 font-serif italic">
                    L’exigence du dossier, la sérénité du voyage.
                  </span>
                  <span className="text-[#002A79]">Visas internationaux</span>, rendez-vous et billetterie à Oran.
                </>
              )}
            </h1>

            {/* 3. Sous-titre court et rassurant */}
            <p className="animate-hero-fade-delayed text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mb-6 sm:mb-8">
              {currentLang === 'ar'
                ? 'ترافقكم وكالة فيزادوسيرفيس (Visado Service) بوهران في كافة إجراءات تأشيرات شنغن (إسبانيا، فرنسا، إيطاليا...)، كندا ومختلف الوجهات، مع تدقيق دقيق لكل وثيقة وحجز التذاكر الرسمية.'
                : currentLang === 'en'
                ? 'Visado Service welcomes you at its Oran agency for meticulous Schengen (Spain BLS, France TLS, Italy...), Canada, and global visa file audits, consulates appointments, and ticketing.'
                : 'Visado Service vous accueille dans son agence physique à Oran pour préparer vos dossiers avec rigueur : visas Schengen (Espagne BLS, France TLS, Italie...), Canada, formulaires consulaires, réservations et billetterie officielle.'}
            </p>

            {/* 4. Action Buttons (CTA Principal + CTA Secondaire + Appel direct) */}
            <div className="animate-hero-fade-delayed flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
              {/* CTA Principal */}
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 sm:py-4 bg-[#002A79] hover:bg-[#002060] active:bg-[#001848] text-white text-sm sm:text-base font-bold rounded-xl shadow-md shadow-[#002A79]/20 hover:shadow-lg hover:shadow-[#002A79]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>{currentLang === 'ar' ? 'طلب دراسة ملف أو موعد' : 'Demander une étude de dossier'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* CTA Secondaire (WhatsApp direct) */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white text-sm sm:text-base font-bold rounded-xl shadow-xs active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>{currentLang === 'ar' ? 'محادثة واتساب مباشرة' : 'Contacter sur WhatsApp'}</span>
              </a>

              {/* Téléphone direct */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="px-4 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-slate-300 text-sm font-semibold rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#002A79] shrink-0" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
            </div>

            {/* 5. Petits éléments de confiance autour du CTA (Clean, Zero-Pill, Typographic Separators) */}
            <div className="animate-hero-fade-late flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{currentLang === 'ar' ? 'دراسة مجانية للملف' : 'Audit préalable gratuit'}</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-[#002A79] shrink-0" />
                <span>{currentLang === 'ar' ? 'ملفات مطابقة للمعايير' : 'Dossiers 100% conformes'}</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>{currentLang === 'ar' ? 'وكالة معتمدة بوهران' : 'Agence physique à Oran'}</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">
                {currentLang === 'ar' ? 'إجابة سريعة تحت 15 دقيقة' : 'Réponse sous 15 min'}
              </span>
            </div>

            {/* Sub-bar: Key Destinations ticker */}
            <div className="animate-hero-fade-late mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-200/70 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {currentLang === 'ar' ? 'الوجهات الرئيسية :' : 'Destinations courantes :'}
              </span>
              <div className="flex flex-wrap items-center gap-2.5 font-medium text-slate-800">
                <span className="hover:text-blue-700 transition-colors">🇪🇸 Espagne (BLS)</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors">🇫🇷 France (TLS)</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors">🇮🇹 Italie</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors">🇨🇦 Canada</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors">✈️ Billetterie Monde</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual / Photographie de Voyage Professionnelle */}
          <div className="lg:col-span-5 animate-hero-fade-delayed">
            <div className="relative">
              
              {/* Main Professional Travel Photograph Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] bg-slate-900 shadow-xl shadow-slate-900/10 border border-slate-200/90 group">
                
                {/* Real Agency Interior Photo */}
                <img
                  src={imagery.realAgency.agencyInterior}
                  alt={currentLang === 'ar' ? 'المقر الداخلي لوكالة Visado Service بوهران' : 'Locaux intérieurs de l\'agence Visado Service à Oran'}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={600}
                  height={750}
                />

                {/* Subtle refined gradient overlay for editorial depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Top Floating Badge: Agency Verification & Physical Presence */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900">
                    {currentLang === 'ar' ? 'وكالة مفتوحة بوهران' : 'Agence ouverte à Oran'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">· 09h - 17h</span>
                </div>

                {/* Top Right Mini Compass Icon */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xs">
                  <Compass className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Card: Real Visa Proof & Authenticity at Oran */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/60 shadow-lg text-slate-900">
                  <div className="flex items-center gap-3">
                    
                    {/* Thumbnail of real approved Schengen visa on passport */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                      <img
                        src={imagery.realAgency.schengenVisaPassport}
                        alt="Passeport avec visa délivré par Visado Service"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('visado_passport_schengen_card')) {
                            target.src = '/images/visado_passport_schengen_card_1789171561863.jpg';
                          }
                        }}
                      />
                    </div>

                    {/* Textual Proof */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        <span>{currentLang === 'ar' ? 'تأشيرات شنغن صادرة ومعتمدة' : 'Visas délivrés avec succès'}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        Visado Service · Oran
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate" dir="ltr">
                        📍 14, Rue Hadri Mohamed, Oran
                      </p>
                    </div>

                    {/* Quick Action Button within Card */}
                    <button
                      onClick={onOpenConsultation}
                      className="hidden sm:inline-flex items-center justify-center px-3 py-2 bg-blue-50 hover:bg-blue-100 text-[#002A79] text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      {currentLang === 'ar' ? 'استشارة' : 'Prendre RDV'}
                    </button>
                  </div>
                </div>

              </div>

              {/* Decorative editorial geometric frame corner */}
              <div className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-blue-900/15 rounded-br-3xl pointer-events-none -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
