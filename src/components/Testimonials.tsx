import React from 'react';
import { Star, CheckCircle2, MessageSquareQuote, MapPin, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { siteConfig } from '../data/config';
import { translations } from '../data/translations';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang, onOpenConsultation }) => {
  const t = translations[currentLang];
  const testData = t.testimonials as typeof t.testimonials & {
    googleRatingText?: string;
    badgeVerified?: string;
    viewOnMaps?: string;
    leaveReview?: string;
    transparencyNotice?: string;
  };

  const hasItems = Array.isArray(testData.items) && testData.items.length > 0;

  return (
    <section id="testimonials" className="py-14 sm:py-24 bg-slate-50/50 border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3 shadow-2xs">
                <MessageSquareQuote className="w-3.5 h-3.5 text-blue-600" />
                <span>{testData.overline}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {testData.heading}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                {testData.subheading}
              </p>
            </div>

            {/* Quick Google Rating Counter Pill */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4 shrink-0 hover:border-slate-300 transition-colors w-full lg:w-auto">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-extrabold text-slate-900 tracking-tight">4.9</span>
                    <div className="flex items-center text-amber-400 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {testData.badgeVerified || "Établissement Google vérifié"}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-all shrink-0 cursor-pointer active:scale-[0.98] ml-auto sm:ml-0"
              >
                <span>{testData.viewOnMaps || "Ouvrir"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Central Google Maps Verified Hub (Prominent Trust Showcase) */}
        <Reveal direction="up" delay={50}>
          <div className="relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:border-blue-200/80 transition-all duration-300">
            {/* Ambient decorative blur */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Score Badge & Business Title (lg:col-span-5) */}
              <div className="md:col-span-2 lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-4 sm:gap-5">
                <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/90 shadow-sm flex flex-col items-center justify-center p-3 shrink-0">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">4.9</span>
                  <div className="flex items-center text-amber-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2.5 border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{testData.badgeVerified || "Fiche officielle Google Maps vérifiée"}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {currentLang === 'ar'
                      ? 'Visado Service بوهران — تقييمات حقيقية وموثقة'
                      : 'Visado Service Oran — Avis clients authentiques et vérifiés'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {testData.transparencyNotice ||
                      (currentLang === 'ar'
                        ? 'نلتزم بالشفافية المطلقة : لا نضع أي تقييمات وهمية. يمكنكم تصفح كافة تجارب العملاء مباشرة عبر Google Maps.'
                        : 'Notre équipe privilégie l\'authenticité : aucun avis fictif. Tous les témoignages sont directement rédigés par nos clients sur Google Maps.')}
                  </p>
                </div>
              </div>

              {/* Middle Column: Guarantees & Location Cards (lg:col-span-4) */}
              <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-2.5 w-full">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70 shadow-2xs hover:bg-slate-100/60 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {currentLang === 'ar' ? 'شفافية ومصداقية 100%' : '100% Retours authentiques'}
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70 shadow-2xs hover:bg-slate-100/60 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {currentLang === 'ar' ? 'متابعة ملفات شنغن وكندا' : 'Suivi expert Schengen & Canada'}
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70 shadow-2xs hover:bg-slate-100/60 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-red-100/80 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate" dir="ltr">
                    {currentLang === 'ar' ? '14، شارع حضري محمد، وهران' : '14, Rue Capitaine Hadri Mohamed, Oran'}
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Google Maps Action Buttons (lg:col-span-3) */}
              <div className="md:col-span-1 lg:col-span-3 flex flex-col justify-center gap-3 w-full">
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer w-full"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  </svg>
                  <span className="truncate">{testData.viewOnMaps || "Consulter nos avis"}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>

                <a
                  href={siteConfig.googleReviewsUrl || "https://g.page/r/Caqj50RuzG7GEAE/review"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold transition-all active:scale-[0.98] cursor-pointer w-full shadow-2xs"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                  <span className="truncate">{testData.leaveReview || "Laisser un avis"}</span>
                </a>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Real Verified Client Review Cards Grid & Mobile Snap-Carousel (rendered dynamically if items are present) */}
        {hasItems && (
          <div className="mt-8 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {testData.items.map((item, idx) => {
              const initials = item.clientName
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

              return (
                <Reveal
                  key={item.id}
                  delay={idx * 75}
                  direction="up"
                  className="flex flex-col h-full min-w-[260px] min-[380px]:min-w-[285px] sm:min-w-[320px] md:min-w-0 snap-start"
                >
                  <div
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full"
                  >
                    <div>
                      {/* Top user bar */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${item.avatarColor || 'bg-blue-600'} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                            {initials}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                              {item.clientName}
                            </h4>
                            <div className="flex items-center gap-1 text-[11px] text-slate-500">
                              <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                              <span>{item.city || "Oran"}</span>
                            </div>
                          </div>
                        </div>

                        {/* Star rating */}
                        <div className="flex items-center text-amber-400 shrink-0">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Destination / Visa Type Tag */}
                      <div className="mb-3.5 flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700">
                          {item.destination}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                          {item.visaType}
                        </span>
                      </div>

                      {/* Quote */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed italic">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Card footer: Verified status & Date */}
                    <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{testData.badgeVerified || "Avis vérifié"}</span>
                      </span>
                      <span>{item.date || item.year}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Bottom Consultation / Appointment Banner */}
        <Reveal direction="up" delay={100}>
          <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 text-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {currentLang === 'ar'
                    ? 'هل استفدتم من خدمات وتوجيهات Visado Service بوهران؟'
                    : 'Vous avez voyagé ou fait appel à nos services chez Visado Service ?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {currentLang === 'ar'
                    ? 'شاركونا تجربتكم وتقييمكم على خرائط Google لمساعدة المسافرين الآخرين.'
                    : 'Partagez votre avis sur notre fiche Google Maps pour aider d\'autres voyageurs.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={siteConfig.googleReviewsUrl || "https://g.page/r/Caqj50RuzG7GEAE/review"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-all active:scale-[0.98]"
              >
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{testData.leaveReview || "Déposer un avis sur Google"}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {onOpenConsultation && (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <span>{currentLang === 'ar' ? 'تحدث مع مستشار' : 'Parler à un conseiller'}</span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
