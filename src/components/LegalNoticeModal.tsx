import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, Building2, Phone, MapPin, MessageCircle, FileText, Server } from 'lucide-react';
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
                    ? 'Legal Notice & Privacy'
                    : 'Mentions légales & Confidentialité'}
              </h2>
              <p className="text-xs text-slate-500">
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
        <div className="overflow-y-auto px-5 sm:px-7 py-5 space-y-5 text-xs sm:text-sm leading-relaxed text-slate-700">
          
          {isArabic ? (
            /* ================= ARABIC VERSION ================= */
            <div className="space-y-4">
              
              {/* 1. Site et WhatsApp */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>استخدام الموقع والتواصل الأولي</h3>
                </div>
                <p className="text-slate-700">
                  تصفح هذا الموقع حر تماماً وبدون أي التزام، ولا يتطلب أي تسجيل أو إنشاء حساب. لا يتم استخدام أي كوكيز (Cookies) أو أدوات تتبع أو تخزين بيانات على جهازك (Zero LocalStorage / SessionStorage).
                </p>
                <p className="text-slate-700">
                  عبر الموقع أو عبر تطبيق واتساب، <strong>لا نحتفظ بأي معلومات تفصيلية عنكم</strong>. عند التواصل الأولي، فإن المعلومات الوحيدة التي قد تظهر لنا تقتصر فقط على <strong>رقم الهاتف، الاسم واللقب (أو الاسم المستعار على واتساب)</strong>.
                </p>
              </div>

              {/* 2. Traitement direct au bureau */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <FileText className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>معالجة الطلبات ومراجعة الوثائق تتم حصرياً بمقرنا</h3>
                </div>
                <p className="text-slate-700">
                  يهدف الموقع فقط لتقديم خدماتنا وتسهيل الاتصال الأولي. أما دراسة الطلب ومراجعة المستندات والإجراءات الفعلية، فتتم <strong>مباشرة داخل مكاتبنا بوهران</strong> وبشكل حضوري مع الزبون في سرية وأمان تامين.
                </p>
              </div>

              {/* 3. Confidentialité et Non-vente */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <Lock className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>الخصوصية وحماية بيانات الاتصال</h3>
                </div>
                <p className="text-slate-700">
                  المعلومات التي تختارون تقديمها طواعية عند الاتصال بنا تُستخدم فقط من أجل :
                </p>
                <ul className="list-disc ps-5 space-y-1 text-slate-700">
                  <li>أخذ موعد والتواصل المباشر معكم ؛</li>
                  <li>الإجابة على استفساراتكم وتوجيهكم ؛</li>
                  <li>متابعة التواصل المهني بخصوص طلبكم.</li>
                </ul>
                <p className="text-emerald-900 font-semibold text-xs pt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>لا يتم إطلاقاً بيع أو تأجير معلوماتكم لأي جهة أو لأغراض إعلانية وتجارية.</span>
                </p>
              </div>

              {/* 4. Statut & Identification légale */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-slate-700">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Building2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>البيانات القانونية والتعريف بالمؤسسة</h3>
                </div>
                <p className="leading-relaxed">
                  تنشط <strong>{siteConfig.legalEntity?.raisonSociale || 'Visado Service'}</strong> في تقديم خدمات الاستشارة، المساعدة والمرافقة في الإجراءات والترتيبات المرتبطة بالسفر والخدمات الإدارية والرقمية المتعلقة به.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">السجل التجاري (RC) :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.registreCommerce}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">الرقم الجبائي (NIF / NIS) :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.nif}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">مسؤول النشر :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.directeurPublication}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">استضافة الموقع :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.hebergeur}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-1">
                  <strong>تذكير سيادي :</strong> قرار منح أو رفض التأشيرات يعود حصرياً وسيادياً للسلطات القنصلية والسفارات المعنية ولا نملك أي تأثير عليه.
                </p>
              </div>

              {/* Coordonnées officielles */}
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-900">{siteConfig.name} — خدمات ومرافقة السفر</p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{siteConfig.address}</span>
                </p>
                <div className="flex items-center gap-1.5" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="flex items-center gap-1">
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline font-semibold">{siteConfig.phone}</a>
                    <span>/</span>
                    <a href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline font-semibold">{siteConfig.phoneSecondary}</a>
                  </span>
                </div>
              </div>

            </div>
          ) : isEnglish ? (
            /* ================= ENGLISH VERSION ================= */
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>Website Usage & Initial Contact</h3>
                </div>
                <p className="text-slate-700">
                  Browsing this website is free, requires no commitment, and does not require account creation. We do not use cookies or persist tracking data to your device (zero localStorage / sessionStorage).
                </p>
                <p className="text-slate-700">
                  Through the website or via WhatsApp, <strong>we do not retain detailed personal records</strong>. Initial contact reveals only your <strong>phone number, name, and surname (or WhatsApp username)</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <FileText className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>In-Person Application & Document Review</h3>
                </div>
                <p className="text-slate-700">
                  This website serves only to present our advisory services and facilitate initial contact. Formal document verification, submission reviews, and travel arrangements take place <strong>in-person at our Oran office</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <Lock className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>Confidentiality & Privacy</h3>
                </div>
                <p className="text-slate-700">
                  Contact details voluntarily submitted are used strictly to:
                </p>
                <ul className="list-disc ps-5 space-y-1 text-slate-700">
                  <li>Schedule appointments and contact you;</li>
                  <li>Respond to your service inquiries;</li>
                  <li>Provide customer service support.</li>
                </ul>
                <p className="text-emerald-900 font-semibold text-xs pt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your contact information is <strong>never sold, leased, or shared</strong> with third parties.</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-slate-700">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Building2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>Legal Notice & Enterprise Identity</h3>
                </div>
                <p className="leading-relaxed">
                  <strong>{siteConfig.legalEntity?.raisonSociale || 'Visado Service'}</strong> provides travel consulting, application file verification, and travel booking assistance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Trade Register (RC):</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.registreCommerce}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Tax ID (NIF / NIS):</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.nif}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Director of Publication:</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.directeurPublication}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Web Hosting:</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.hebergeur}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-1">
                  <strong>Consular notice:</strong> The sovereign decision to issue or refuse a visa belongs exclusively to official consulates and embassies.
                </p>
              </div>

              {/* Official Coordinates */}
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-900">{siteConfig.name} — Travel Consulting & Booking</p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{siteConfig.address}</span>
                </p>
                <div className="flex items-center gap-1.5" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="flex items-center gap-1">
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline font-semibold">{siteConfig.phone}</a>
                    <span>/</span>
                    <a href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline font-semibold">{siteConfig.phoneSecondary}</a>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* ================= FRENCH VERSION ================= */
            <div className="space-y-4">
              
              {/* 1. Site et WhatsApp */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>Utilisation du site & Premier contact</h3>
                </div>
                <p className="text-slate-700">
                  La consultation de ce site est entièrement libre, sans engagement et ne nécessite aucune création de compte. Aucun cookie de pistage ni traceur persistant n’est enregistré sur votre terminal (zéro localStorage / sessionStorage).
                </p>
                <p className="text-slate-700">
                  Sur le site internet ou via WhatsApp, <strong>nous ne retenons aucune information détaillée sur vous</strong>. Lors d’un premier échange, les seules informations pouvant être visibles sont votre <strong>numéro de téléphone, nom et prénom (ou pseudo WhatsApp)</strong>.
                </p>
              </div>

              {/* 2. Traitement direct au bureau */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <FileText className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>Traitement des démarches directement à notre bureau</h3>
                </div>
                <p className="text-slate-700">
                  Le site a pour seul objectif de présenter nos prestations et de faciliter la prise de contact. L’ensemble des démarches, l’analyse des demandes et la remise des documents nécessaires se font <strong>exclusivement sur place, directement à notre bureau à Oran</strong>, avec le client.
                </p>
              </div>

              {/* 3. Confidentialité et Non-vente */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <Lock className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <h3>Confidentialité & Protection de vos coordonnées</h3>
                </div>
                <p className="text-slate-700">
                  Les informations que vous choisissez de communiquer volontairement servent uniquement à :
                </p>
                <ul className="list-disc ps-5 space-y-1 text-slate-700">
                  <li>Prendre contact avec vous ;</li>
                  <li>Répondre à votre demande d’information ;</li>
                  <li>Assurer le suivi de notre échange.</li>
                </ul>
                <p className="text-emerald-900 font-semibold text-xs pt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Vos coordonnées ne sont <strong>ni vendues, ni louées</strong> à des fins publicitaires ou commerciales.</span>
                </p>
              </div>

              {/* 4. Statut & Identification légale */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-slate-700">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Building2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <h3>Identification légale & Cadre d'exercice</h3>
                </div>
                <p className="leading-relaxed">
                  <strong>{siteConfig.legalEntity?.raisonSociale || 'Visado Service'}</strong> intervient dans les prestations de conseil, d'assistance et d'accompagnement aux démarches liées au voyage, aux réservations et aux formalités administratives et numériques associées.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Registre du Commerce (RC) :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.registreCommerce}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Identifiant Fiscal (NIF / NIS) :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.nif}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Directeur de la publication :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.directeurPublication}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block">Hébergement web :</span>
                    <span className="font-semibold text-slate-800">{siteConfig.legalEntity?.hebergeur}</span>
                  </div>
                </div>

                <div className="pt-1 flex items-start gap-2 text-[11px] text-slate-500">
                  <Server className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                  <span>
                    <strong>Transmission des messages :</strong> Les messages envoyés via le formulaire sont traités et transmis de manière sécurisée par {siteConfig.legalEntity?.contactProcessor} à l'adresse e-mail professionnelle de l'agence.
                  </span>
                </div>

                <p className="text-xs text-slate-500 pt-1">
                  <strong>Rappel consulaire :</strong> La décision finale d’octroi ou de refus d'un visa relève de la compétence souveraine exclusive des autorités consulaires et ambassades compétentes.
                </p>
              </div>

              {/* Coordonnées officielles */}
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-900">{siteConfig.name} — Prestations & Accompagnement Voyage</p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{siteConfig.address}</span>
                </p>
                <div className="flex items-center gap-1.5" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="flex items-center gap-1">
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline font-semibold">{siteConfig.phone}</a>
                    <span>/</span>
                    <a href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline font-semibold">{siteConfig.phoneSecondary}</a>
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer of modal */}
        <div className="px-5 sm:px-7 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>
            {isArabic ? 'Visado Service • وهران' : isEnglish ? 'Visado Service • Oran' : 'Visado Service • Oran'}
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
