import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Building2, 
  FileCheck2, 
  ArrowUpRight,
  Plane,
  Sparkles,
  Camera
} from 'lucide-react';
import { siteConfig } from '../data/config';
import { translations } from '../data/translations';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface TrustProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Trust: React.FC<TrustProps> = ({ 
  currentLang, 
  onOpenConsultation,
  onNavigateToSection
}) => {
  const isArabic = currentLang === 'ar';

  const handleScroll = (id: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trust" className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Soft background ambient gradient */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-50/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>{isArabic ? 'ثقة وشفافية • مقر حقيقي بوهران' : 'Agence Réelle • Proximité & Transparence'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isArabic 
                ? 'وكالة فيزا حقيقية ومقر معتمد في قلب وهران' 
                : 'Une agence physique à Oran, un contact direct et un suivi rigoureux'}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {isArabic
                ? 'نستقبلكم في مقرنا بالشارع التجاري بشارع حادري محمد لدراسة ملفاتكم شخصياً، مراجعة كل وثيقة وتقديم استشارات واضحة دون وسطاء.'
                : 'Au 14 Rue Capitaine Hadri Mohamed, nous vous recevons en personne pour examiner vos documents, répondre à vos questions et structurer votre demande en toute transparence.'}
            </p>
          </div>
        </Reveal>

        {/* 4 Trust Pillars (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Pillar 1: Agence Physique & Adresse à Oran */}
          <Reveal direction="up" delay={0} className="h-full">
            <div className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800">
                    {isArabic ? 'مقر رسمي' : 'Pignon sur rue'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {isArabic ? 'وكالة معتمدة بوهران' : 'Agence Physique à Oran'}
                </h3>

                <p className="mt-1.5 text-xs text-slate-500 font-semibold flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </p>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {isArabic
                    ? 'فضاء استقبال ومكاتب استشارة مكيفة ومهيأة لاستقبالكم مباشرة لمراجعة الوثائق وإيداع الملفات.'
                    : 'Bureaux d\'accueil et de consultation au centre-ville d\'Oran pour déposer vos pièces et échanger en toute confidentialité.'}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{isArabic ? 'السبت - الخميس: 09:00 إلى 17:00' : 'Samedi - Jeudi : 09h00 - 17h00'}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex flex-col gap-2">
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors active:scale-[0.98]"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{isArabic ? 'موقعنا على الخريطة' : 'Itinéraire Google Maps'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  type="button"
                  onClick={() => handleScroll('media-gallery')}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 py-1 cursor-pointer transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'شاهد صور ومقطع المقر' : 'Voir les photos réelles'}</span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Pillar 2: Avis Clients Réels & Note Google Maps 4.9/5 */}
          <Reveal direction="up" delay={60} className="h-full">
            <div className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-amber-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Google Icon Badge */}
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">4.9</span>
                  <span className="text-xs font-bold text-slate-500">/ 5 sur Google Maps</span>
                </div>

                <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {isArabic ? 'تقييمات موثقة من زبائن حقيقيين' : 'Avis Clients Vérifiés'}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {isArabic
                    ? 'أكثر من 120 تقييم حقيقي لمسافرين رافقتهم وكالتنا في ملفات تأشيرة إسبانيا، فرنسا، كندا وحجز التذاكر.'
                    : 'Plus de 120 retours d\'expérience de voyageurs accompagnés pour leurs dossiers de visa Schengen et Canada.'}
                </p>

                {/* Micro quote */}
                <div className="mt-3.5 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/50 text-[11px] text-slate-700 italic">
                  {isArabic
                    ? '«خدمة في قمة الاحترافية بوهران، تدقيق ممتاز للملف قبل الإيداع»'
                    : '« Service soigné en agence et vérification minutieuse avant le dépôt officiel. »'}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex flex-col gap-2">
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors active:scale-[0.98]"
                >
                  <span>{isArabic ? 'قراءة التقييمات على Google' : 'Consulter les avis Google'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  type="button"
                  onClick={() => handleScroll('testimonials')}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 py-1 cursor-pointer transition-colors"
                >
                  <span>{isArabic ? 'تصفح شهادات الزبائن' : 'Lire les témoignages clients'}</span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Pillar 3: Contact Direct & Disponibilité Téléphonique / WhatsApp */}
          <Reveal direction="up" delay={120} className="h-full">
            <div className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isArabic ? 'خط مباشر' : 'Ligne Directe'}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {isArabic ? 'تواصل فوري دون وسطاء' : 'Téléphone & WhatsApp Directs'}
                </h3>

                <p className="mt-1.5 text-xs text-slate-500 font-semibold">
                  {isArabic ? 'طاقم الوكالة بوهران يجيبكم مباشرة' : 'Échangez sans intermédiaire'}
                </p>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {isArabic
                    ? 'تواصل مباشر مع مستشارينا عبر الهاتف أو تطبيق واتساب للحصول على استفسارات سريعة وتحديد موعد الاستقبال.'
                    : 'Pas de standard automatisé ni d\'attente inutile : vous dialoguez en direct avec nos conseillers basés à Oran.'}
                </p>

                {/* Verified phone numbers list */}
                <div className="mt-3.5 space-y-1.5">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-bold text-slate-800 hover:border-emerald-300 transition-colors"
                  >
                    <span className="text-slate-500 font-medium">{isArabic ? 'الرئيسي:' : 'Ligne 1 :'}</span>
                    <span dir="ltr" className="text-emerald-700">{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`tel:+213555778460`}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-bold text-slate-800 hover:border-emerald-300 transition-colors"
                  >
                    <span className="text-slate-500 font-medium">{isArabic ? 'الثانوي:' : 'Ligne 2 :'}</span>
                    <span dir="ltr" className="text-slate-700">{siteConfig.phoneSecondary}</span>
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je souhaite avoir des renseignements sur vos services de visa à Oran.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-xs active:scale-[0.98]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{isArabic ? 'مراسلة عبر واتساب' : 'Écrire sur WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 py-1 transition-colors"
                >
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span>{isArabic ? 'اتصال هاتفي مباشر' : 'Appeler directement'}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pillar 4: Accompagnement Personnalisé & Services Complets */}
          <Reveal direction="up" delay={180} className="h-full">
            <div className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100/70 text-indigo-800">
                    {isArabic ? 'دراسة دقيقة' : 'Sur-mesure'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {isArabic ? 'مرافقة شاملة حسب ملفك' : 'Accompagnement Rigoureux'}
                </h3>

                <p className="mt-1.5 text-xs text-slate-500 font-semibold">
                  {isArabic ? 'شنغن، كندا والرحلات الدولية' : 'Schengen, Canada & Billetterie'}
                </p>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {isArabic
                    ? 'تدقيق وفحص لكافة الوثائق الرسمية، حجز مواعيد BLS Spain وTLScontact، وتأكيدات الطيران للملفات.'
                    : 'Analyse méthodique selon votre statut (salarié, commerçant, profession libérale, étudiant) et conformité stricte aux exigences consulaires.'}
                </p>

                {/* 3 bullet micro perks */}
                <div className="mt-3.5 space-y-1.5 text-[11px] text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isArabic ? 'تدقيق دقيق للوثائق والاستمارات' : 'Vérification pointilleuse de chaque pièce'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isArabic ? 'حجوزات طيران وفنادق مؤكدة' : 'Billetterie & réservations confirmées'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{isArabic ? 'شفافية كاملة دون وعود وهمية' : 'Transparence totale sans fausses promesses'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'طلب دراسة واستشارة' : 'Prendre un rendez-vous'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll('services')}
                  className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 py-1 cursor-pointer transition-colors"
                >
                  <span>{isArabic ? 'استكشاف كافة الخدمات' : 'Voir nos 5 expertises'}</span>
                  <span className="rtl:rotate-180">→</span>
                </button>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Social Proof & Official Social Media Ribbon */}
        <Reveal direction="up" delay={120}>
          <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-slate-100/80 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-start">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  {isArabic
                    ? 'تابعوا إرشادات التأشيرات وأخبار المواعيد الرسمية يومياً على شبكاتنا'
                    : 'Suivez nos conseils visas et les actualités de voyage sur nos réseaux officiels'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isArabic
                    ? 'محتوى توعوي ومقاطع حقيقية توضح شروط التأشيرات والخطوات المطلوبة'
                    : 'Comptes officiels vérifiés Visado Service à Oran'}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap justify-center">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-pink-50 text-slate-800 hover:text-pink-600 border border-slate-200/90 text-xs font-semibold transition-colors shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600" />
                <span>Instagram {siteConfig.instagramHandle}</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>

              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-black border border-slate-200/90 text-xs font-semibold transition-colors shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-black" />
                <span>TikTok {siteConfig.tiktokHandle}</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-600 border border-slate-200/90 text-xs font-semibold transition-colors shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Facebook {siteConfig.facebookName}</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
