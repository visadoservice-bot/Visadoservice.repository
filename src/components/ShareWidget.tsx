import React, { useState } from 'react';
import { Share2, MapPin, Star, Copy, Check, ExternalLink, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import { Language } from '../types';

interface ShareWidgetProps {
  currentLang: Language;
}

export const ShareWidget: React.FC<ShareWidgetProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedLocation, setCopiedLocation] = useState(false);

  const isArabic = currentLang === 'ar';
  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://visadoservice.dz/';

  const handleShareSite = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.name,
          text: isArabic 
            ? 'Visado Service بوهران — خدمات السفر، الاستشارات وحجوزات الطيران'
            : 'Visado Service Oran — Services de voyage, conseils et réservations',
          url: siteUrl
        });
      } catch (err) {
        // Fallback gracefully if canceled
      }
    } else {
      copyToClipboard(siteUrl, setCopiedLink);
    }
  };

  const handleShareLocation = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${siteConfig.name} - Oran`,
          text: isArabic
            ? 'موقع Visado Service بوهران (14، شارع حضري محمد)'
            : 'Localisation Visado Service Oran (14, Rue Hadri Mohamed)',
          url: siteConfig.googleMapsShareUrl
        });
      } catch (err) {
        // Fallback
      }
    } else {
      copyToClipboard(siteConfig.googleMapsShareUrl, setCopiedLocation);
    }
  };

  const copyToClipboard = (text: string, setCopiedState: (v: boolean) => void) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2500);
      }).catch(() => {});
    }
  };

  const reviewUrl = siteConfig.googleReviewsUrl || "https://g.page/r/Caqj50RuzG7GEAE/review";

  return (
    <>
      {/* Discreet Floating Share Button (Desktop & Mobile) */}
      <aside
        aria-label="Actions de partage et avis"
        className="fixed bottom-6 start-6 z-40 flex items-center gap-2.5 pointer-events-auto select-none"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center active:scale-95 cursor-pointer group"
          title={isArabic ? 'مشاركة وتسهيل الوصول' : 'Partager & Avis Google'}
          aria-label={isArabic ? 'مشاركة وتسهيل الوصول' : 'Partager & Avis Google'}
        >
          <Share2 className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
        </button>
      </aside>

      {/* Share Modal Dialog */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={isArabic ? 'خيارات المشاركة والتقييم' : 'Options de partage et avis'}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs animate-fadeIn"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 animate-modal-pop">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Share2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {isArabic ? 'مشاركة وتقييم Visado Service' : 'Partager & Avis Google'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {isArabic ? 'مشاركة الموقع أو الخريطة أو ترك تقييم' : 'Partager le site, l\'itinéraire ou laisser un avis'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Options */}
            <div className="py-4 space-y-3">
              
              {/* Option 1: Share Site */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {isArabic ? '1. مشاركة رابط الموقع' : '1. Partager le site web'}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {isArabic ? 'إرسال رابط الوكالة للأصدقاء' : 'Transmettre à vos proches'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleShareSite}
                    className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? (isArabic ? 'تم النسخ' : 'Copié !') : (isArabic ? 'مشاركة' : 'Partager')}</span>
                  </button>
                </div>
              </div>

              {/* Option 2: Share Google Maps Location */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-red-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {isArabic ? '2. موقعنا على Google Maps' : '2. Localisation Google Maps'}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate" dir="ltr">
                      14, Rue Hadri Mohamed, Oran
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleShareLocation}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                  >
                    {copiedLocation ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <MapPin className="w-3.5 h-3.5" />}
                    <span>{copiedLocation ? (isArabic ? 'تم النسخ' : 'Copié !') : (isArabic ? 'مشاركة' : 'Partager')}</span>
                  </button>
                  <a
                    href={siteConfig.googleMapsShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                    title={isArabic ? 'فتح الخريطة' : 'Ouvrir Google Maps'}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Option 3: Leave Google Review */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 hover:border-amber-300 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {isArabic ? '3. إضافة تقييم على Google' : '3. Laisser un avis Google'}
                    </h4>
                    <p className="text-[11px] text-amber-800 font-medium truncate">
                      {isArabic ? 'تقييم 4.9/5 ⭐ — شاركنا تجربتك' : 'Note 4.9/5 ⭐ — Votre avis compte'}
                    </p>
                  </div>
                </div>

                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95 shrink-0"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{isArabic ? 'كتابة تقييم' : 'Avis'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Quick social share buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-slate-500">
                {isArabic ? 'مشاركة سريعة :' : 'Partage rapide :'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Visado Service Oran : ${siteUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                >
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
