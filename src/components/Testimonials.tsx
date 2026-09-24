import React from 'react';
import { Star, CheckCircle2, MessageSquareQuote, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
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
  };

  return (
    <section id="testimonials" className="py-14 sm:py-24 bg-slate-50/50 border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header & Google Trust Card */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
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

            {/* Google Business Rating Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0 lg:max-w-md hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3.5">
                {/* Google colored badge icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">4.9</span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {testData.googleRatingText || "Note 4.9/5 sur Google Maps • 120+ avis"}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-2xs shrink-0 self-stretch sm:self-auto justify-center cursor-pointer active:scale-[0.98]"
              >
                <span>{testData.leaveReview || "Laisser un avis"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* 4 Real Verified Client Review Cards Grid & Mobile Snap-Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {testData.items.map((item, idx) => {
            // Compute initials
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

        {/* Bottom Reassurance Banner */}
        <Reveal direction="up" delay={100}>
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 text-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {currentLang === 'ar'
                    ? 'هل استفدتم من خدمات Visado Service بوهران؟'
                    : 'Vous avez voyagé avec Visado Service à Oran ?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {currentLang === 'ar'
                    ? 'شاركونا تجربتكم وتقييمكم على خرائط Google لمساعدة المسافرين الآخرين.'
                    : 'Partagez votre avis sur notre fiche Google Maps pour aider d\'autres demandeurs.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={siteConfig.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-all active:scale-[0.98]"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{testData.viewOnMaps || "Voir sur Google Maps"}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {onOpenConsultation && (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <span>{currentLang === 'ar' ? 'طلب استشارة وموعد' : 'Prendre rendez-vous'}</span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
