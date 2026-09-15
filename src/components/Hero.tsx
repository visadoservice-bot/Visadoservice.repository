import React from 'react';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '../data/config';
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

  return (
    <section id="hero" className="bg-[#F8F9FA] border-b border-[#DADCE0] py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Text (Google Sites Style) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Minimal Google Business Badge with Official Agency Name & Branding */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DADCE0] rounded-full text-xs font-medium text-[#3C4043] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
              <span className="font-bold text-[#002A79]">Visado Service</span>
              <span className="text-[#DADCE0]">•</span>
              <span>{currentLang === 'ar' ? 'وكالة معتمدة ومرافقة تأشيرات في وهران' : currentLang === 'en' ? 'Visa Advisory & Travel Agency in Oran' : 'Agence de préparation de dossiers Visa & Billetterie à Oran'}</span>
            </div>

            {/* Clear Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202124] tracking-tight leading-[1.2]">
              {currentLang === 'ar' 
                ? 'مرافقة احترافية في جميع مراحل معالجة ملفات التأشيرة وحجز التذاكر و مواعيد شنغن ومتابعة الإجراءات' 
                : currentLang === 'en' 
                ? 'Expert Visa File Preparation & International Ticketing in Oran' 
                : 'Accompagnement et préparation de vos dossiers de visa à Oran'}
            </h1>

            {/* Short Clear Presentation Subtitle */}
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed font-normal">
              {currentLang === 'ar'
                ? 'نرافقكم خطوة بخطوة في استخراج تأشيرات شنغن (فرنسا، إسبانيا، إيطاليا...)، كندا، وكافة الوجهات الدولية مع حجز التذاكر والاستشارات الدقيقة.'
                : currentLang === 'en'
                ? 'Step-by-step assistance for Schengen visas (France, Spain, Italy...), Canada, and global destinations with certified file checks and ticketing.'
                : 'Visado Service vous accompagne avec rigueur dans toutes vos démarches : visas Schengen (France, Espagne, Italie...), Canada, formulaires consulaires, réservations et billetterie officielle.'}
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white text-sm font-semibold rounded-md shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{currentLang === 'ar' ? 'طلب تسعيرة أو موعد' : currentLang === 'en' ? 'Request a Free Quote' : 'Demander un devis gratuit'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="px-6 py-3.5 bg-white hover:bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0] text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#1A73E8]" />
                <span>{currentLang === 'ar' ? 'اتصل بنا : 0557426784' : `Appeler : ${siteConfig.phone}`}</span>
              </a>
            </div>

            {/* Google Business Trust Bullet Points */}
            <div className="pt-4 border-t border-[#E8EAED] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#3C4043]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E8E3E] shrink-0" />
                <span>{currentLang === 'ar' ? 'تدقيق شامل للملفات' : 'Vérification complète des pièces'}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1A73E8] shrink-0" />
                <span>{currentLang === 'ar' ? 'متابعة شخصية لكل عميل' : 'Accompagnement personnalisé'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D93025] shrink-0" />
                <span>{currentLang === 'ar' ? 'مقرنا : 14 شارع حادري وهران' : 'Agence physique à Oran'}</span>
              </div>
            </div>

          </div>

          {/* Right Minimal Visual Card (Google Business Profile card style) */}
          <div className="lg:col-span-5">
            <div className="google-card p-4 sm:p-5 bg-white">
              <div className="relative rounded overflow-hidden aspect-[4/3] bg-[#F1F3F4] mb-4">
                <img
                  src={imagery.realAgency.schengenVisaPassport}
                  alt="Dossier et visa traité par Visado Service"
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

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#202124]">Visado Service Oran</span>
                  <span className="text-[#1E8E3E] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]" />
                    {currentLang === 'ar' ? 'مفتوح اليوم' : 'Ouvert de 09h à 17h'}
                  </span>
                </div>
                <p className="text-xs text-[#5F6368]" dir="ltr">
                  14, Rue Capitaine Hadri Mohamed, Oran
                </p>
                <div className="pt-2 flex gap-2">
                  <a
                    href="#contact"
                    className="flex-1 text-center py-2 text-xs font-semibold text-[#1A73E8] bg-[#E8F0FE] hover:bg-[#D2E3FC] rounded transition-colors"
                  >
                    {currentLang === 'ar' ? 'معلومات الاتصال' : 'Itinéraire & Horaires'}
                  </a>
                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 text-center py-2 text-xs font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded transition-colors"
                  >
                    {currentLang === 'ar' ? 'طلب موعد' : 'Prendre RDV'}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
