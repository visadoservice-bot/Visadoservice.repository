import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, Globe, Phone, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { siteConfig } from '../data/config';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const isArabic = currentLang === 'ar';
  const isEnglish = currentLang === 'en';

  // Close on Escape key & block background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800 select-text">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold text-slate-900">
                {isArabic
                  ? 'شروط الموقع والبيانات القانونية'
                  : isEnglish
                    ? 'Website Terms & Legal Notice'
                    : 'Conditions du site et Mentions légales'}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {isArabic ? 'Visado Service — وهران، الجزائر' : 'Visado Service — Oran, Algérie'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 hover:text-slate-900 border border-slate-200 flex items-center justify-center transition-all cursor-pointer active:scale-90 shrink-0"
            aria-label={isArabic ? 'إغلاق' : isEnglish ? 'Close' : 'Fermer'}
          >
            <X className="w-5 h-5 stroke-[2.2]" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-5 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700">
          
          {isArabic ? (
            /* ================= ARABIC VERSION (EXACT USER TEXT) ================= */
            <div className="space-y-4 text-right" dir="rtl">
              
              {/* 1. استخدام الموقع */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Globe className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>استخدام الموقع</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  هذا الموقع هو موقع تعريفي بخدمات <strong>Visado Service</strong>، ويهدف إلى تسهيل التواصل الأولي مع المكتب.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  تصفح الموقع متاح دون تسجيل أو إنشاء حساب. لا يستخدم الموقع Cookies لأغراض التتبع أو الإعلانات، ولا يعتمد على LocalStorage أو SessionStorage لتخزين بيانات المستخدم على جهازه.
                </p>
              </div>

              {/* 2. التواصل والبيانات */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>التواصل والبيانات</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  عند التواصل معنا عبر الموقع أو WhatsApp، قد نتلقى المعلومات التي تختارون تقديمها، مثل الاسم ورقم الهاتف ومحتوى الرسالة أو المعلومات المتعلقة بطلبكم.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  تُستخدم هذه المعلومات فقط للتواصل المهني، والرد على الاستفسارات، وتحديد المواعيد، وتقديم التوجيه والمرافقة المطلوبة.
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>لا يتم بيع أو تأجير بيانات العملاء لأغراض إعلانية أو تسويقية.</span>
                </div>
              </div>

              {/* 3. خدمات التأشيرات */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                  <h3>خدمات التأشيرات</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  تقدم <strong>Visado Service</strong> خدمات التوجيه والمرافقة المتعلقة بإجراءات السفر والتأشيرات حسب طبيعة كل طلب.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  قرار منح أو رفض التأشيرة يعود حصريًا إلى السفارة أو القنصلية أو الجهة الرسمية المختصة، كما أن مواعيد التأشيرات تعتمد على توفرها عبر المنصات الرسمية.
                </p>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 font-bold text-xs sm:text-[13px] leading-relaxed">
                  Visado Service لا تضمن قبول طلبات التأشيرة أو الحصول على موعد، ولا تتحمل مسؤولية القرارات الصادرة عن الجهات الرسمية.
                </div>
              </div>

              {/* 4. المعلومات القانونية */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-slate-900 font-bold text-sm">المعلومات القانونية</h3>
                
                <div className="space-y-1.5 text-xs text-slate-700">
                  <p className="font-bold text-slate-900 text-sm">Visado Service</p>
                  <p className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span>14, Rue Capitaine Hadri Mohamed, Oran 31000, Algérie</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-slate-800 mb-1.5">Téléphone / WhatsApp :</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold" dir="ltr">
                    <a
                      href="tel:+213557426784"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+213 557 42 67 84</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="tel:+213555778460"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+213 555 77 84 60</span>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/80 leading-relaxed">
                  المعلومات المنشورة على هذا الموقع مخصصة للتعريف بالخدمات وتسهيل التواصل مع المكتب، ولا تحل محل المعلومات أو القرارات الرسمية الصادرة عن الجهات المختصة.
                </p>
              </div>

            </div>
          ) : isEnglish ? (
            /* ================= ENGLISH VERSION ================= */
            <div className="space-y-4 text-left" dir="ltr">
              
              {/* 1. Website Usage */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Globe className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>Website Usage</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  This website is an informational showcase of <strong>Visado Service</strong>, aimed at facilitating initial contact with our office.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Browsing the site is open without registration or account creation. The website does not use cookies for tracking or advertising purposes, and does not rely on LocalStorage or SessionStorage to store user data on their device.
                </p>
              </div>

              {/* 2. Communication & Data */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>Communication & Data</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  When communicating with us via the website or WhatsApp, we may receive information you choose to provide, such as your name, phone number, message content, or details regarding your request.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This information is used strictly for professional communication, answering inquiries, scheduling appointments, and providing the requested guidance and accompaniment.
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Client data is never sold or rented for advertising or marketing purposes.</span>
                </div>
              </div>

              {/* 3. Visa Services */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                  <h3>Visa Services</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Visado Service</strong> provides guidance and accompaniment services related to travel and visa procedures according to the nature of each request.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The decision to grant or refuse a visa belongs exclusively to the embassy, consulate, or competent official authority; likewise, visa appointments depend on availability via official platforms.
                </p>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 font-bold text-xs sm:text-[13px] leading-relaxed">
                  Visado Service does not guarantee the acceptance of visa applications or securing an appointment, and bears no responsibility for decisions issued by official authorities.
                </div>
              </div>

              {/* 4. Legal Information */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-slate-900 font-bold text-sm">Legal Information</h3>
                
                <div className="space-y-1.5 text-xs text-slate-700">
                  <p className="font-bold text-slate-900 text-sm">Visado Service</p>
                  <p className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span>14, Rue Capitaine Hadri Mohamed, Oran 31000, Algérie</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-slate-800 mb-1.5">Phone / WhatsApp :</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <a
                      href="tel:+213557426784"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+213 557 42 67 84</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="tel:+213555778460"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+213 555 77 84 60</span>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/80 leading-relaxed">
                  The information published on this website is intended to introduce our services and facilitate contact with the office, and does not replace official information or decisions issued by competent authorities.
                </p>
              </div>

            </div>
          ) : (
            /* ================= FRENCH VERSION ================= */
            <div className="space-y-4 text-left" dir="ltr">
              
              {/* 1. Utilisation du site */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Globe className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>Utilisation du site</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Ce site est un site de présentation des prestations de <strong>Visado Service</strong>, et vise à faciliter le premier contact avec le bureau.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  La navigation sur le site est accessible sans inscription ni création de compte. Le site n'utilise aucun cookie à des fins de suivi ou de publicité, et ne s'appuie ni sur LocalStorage ni sur SessionStorage pour stocker des données utilisateur sur son appareil.
                </p>
              </div>

              {/* 2. Communication et données */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>Communication et données</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Lors de vos échanges avec nous via le site ou WhatsApp, nous pouvons recevoir les informations que vous choisissez de transmettre, telles que le nom, le numéro de téléphone, le contenu du message ou les informations relatives à votre demande.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Ces informations sont utilisées uniquement pour les échanges professionnels, les réponses aux demandes d’information, la prise de rendez-vous et l'orientation et l'accompagnement demandés.
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Les données des clients ne sont en aucun cas vendues ou louées à des fins publicitaires ou marketing.</span>
                </div>
              </div>

              {/* 3. Prestations relatives aux visas */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                  <h3>Services de visas</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Visado Service</strong> fournit des services d'orientation et d'accompagnement liés aux démarches de voyage et de visas selon la nature de chaque demande.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  La décision d'accorder ou de refuser un visa relève exclusivement de l'ambassade, du consulat ou de l'autorité officielle compétente ; de même, les rendez-vous dépendent de leur disponibilité sur les plateformes officielles.
                </p>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 font-bold text-xs sm:text-[13px] leading-relaxed">
                  Visado Service ne garantit ni l'acceptation des demandes de visa ni l'obtention d'un rendez-vous, et n'assume aucune responsabilité quant aux décisions émanant des autorités officielles.
                </div>
              </div>

              {/* 4. Informations légales */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-slate-900 font-bold text-sm">Informations légales</h3>
                
                <div className="space-y-1.5 text-xs text-slate-700">
                  <p className="font-bold text-slate-900 text-sm">Visado Service</p>
                  <p className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span>14, Rue Capitaine Hadri Mohamed, Oran 31000, Algérie</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-slate-800 mb-1.5">Téléphone / WhatsApp :</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <a
                      href="tel:+213557426784"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+213 557 42 67 84</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="tel:+213555778460"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+213 555 77 84 60</span>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/80 leading-relaxed">
                  Les informations publiées sur ce site sont destinées à présenter les prestations et à faciliter la prise de contact avec le bureau, et ne remplacent en aucun cas les informations ou décisions officielles émises par les autorités compétentes.
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Footer of modal */}
        <div className="px-5 sm:px-7 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span className="font-medium">
            {isArabic ? 'Visado Service • وهران، الجزائر' : 'Visado Service • Oran, Algérie'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all cursor-pointer active:scale-95"
          >
            {isArabic ? 'إغلاق' : isEnglish ? 'Close' : 'Fermer'}
          </button>
        </div>

      </div>
    </div>
  );
};
