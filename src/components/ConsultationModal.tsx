import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Send } from 'lucide-react';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
import { Language } from '../types';
import { sendLeadNotification } from '../services/leadNotification';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('Espagne / Schengen');
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Focus the close button when opened
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `*Demande de consultation rapide — Visado Service*\n\n` +
    `👤 *Nom :* ${name.trim() || 'Client'}\n` +
    `📞 *Téléphone :* ${phone.trim() || 'Non renseigné'}\n` +
    `📍 *Destination :* ${destination}\n\n` +
    `_Envoyé depuis le site web Visado Service Oran_`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (!name.trim() || !phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await sendLeadNotification({
      fullName: name,
      phone: phone,
      destination: destination,
      source: 'Modale Consultation Rapide'
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSent(true);
      if (typeof window !== 'undefined') {
        window.open(directWhatsAppUrl, '_blank');
      }
    } else {
      setSubmitError(
        currentLang === 'ar'
          ? 'تعذر إرسال الطلب تلقائياً عبر الخادم. يمكنكم التواصل المباشر عبر واتساب أو الهاتف :'
          : 'La transmission automatique a échoué. Vous pouvez nous joindre directement via WhatsApp ou par téléphone :'
      );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 animate-modal-pop">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-white/95 backdrop-blur-xs border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/LOGO.png"
              alt="Logo Visado Service"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg bg-white border border-slate-200 p-0.5"
            />
            <h2 id="consultation-modal-title" className="font-bold text-xs sm:text-sm text-slate-900 truncate">
              {currentLang === 'ar' ? 'تحدث مع مستشار مختص' : 'Parler à un conseiller'}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors cursor-pointer shrink-0"
            aria-label={currentLang === 'ar' ? "إغلاق النافذة" : "Fermer la fenêtre"}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          {/* Direct Instant Channels */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_CONSULTANT_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl border border-emerald-200/70 flex flex-col items-center text-center transition-all shadow-2xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mb-1 fill-current" aria-hidden="true" />
              <span className="text-xs font-bold">WhatsApp Direct</span>
              <span className="text-[10px] sm:text-[11px] text-emerald-800 font-medium">Réponse immédiate</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-3 sm:p-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl border border-slate-200 flex flex-col items-center text-center transition-all shadow-2xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 mb-1" aria-hidden="true" />
              <span className="text-xs font-bold">Appel Direct</span>
              <span className="text-[10px] sm:text-[11px] text-slate-700 font-medium" dir="ltr">{siteConfig.phone}</span>
            </a>
          </div>

          <div className="relative flex items-center justify-center my-5">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
            <span className="relative px-3 bg-white text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {currentLang === 'ar' ? 'أو اترك بياناتك لنتصل بك' : 'ou laissez vos coordonnées'}
            </span>
          </div>

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-fullname" className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'ar' ? 'الاسم الكامل *' : 'Votre Nom et Prénom *'}
                </label>
                <input
                  id="modal-fullname"
                  type="text"
                  required
                  placeholder="Ex: Mourad Hadj"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 focus-visible:outline-none text-slate-900 transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'ar' ? 'رقم الهاتف *' : 'Numéro de téléphone *'}
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="Ex: 0550 00 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 focus-visible:outline-none text-slate-900 transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="modal-destination" className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'ar' ? 'الوجهة أو نوع الخدمة' : 'Destination / Service souhaité'}
                </label>
                <select
                  id="modal-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 focus-visible:outline-none text-slate-900 transition-all cursor-pointer"
                >
                  <option value="Espagne / Schengen">Espagne / Visa Schengen</option>
                  <option value="France / Schengen">France / Visa Schengen</option>
                  <option value="Canada (Tourisme / Études)">Canada (Tourisme / Études)</option>
                  <option value="Billets Air Algérie">
                    {currentLang === 'ar' ? 'تذاكر Air Algérie' : currentLang === 'en' ? 'Air Algérie Flight Tickets' : 'Billets Air Algérie'}
                  </option>
                  <option value="Billets Avion (Toutes compagnies)">
                    {currentLang === 'ar' ? 'تذاكر جميع شركات الطيران' : currentLang === 'en' ? 'Flight Tickets (All Airlines)' : 'Billets Avion (Toutes compagnies)'}
                  </option>
                  <option value="Assurance Voyage">
                    {currentLang === 'ar' ? 'تأمين السفر (تأشيرات ودولي)' : currentLang === 'en' ? 'Travel Insurance (Visa & Worldwide)' : 'Assurance Voyage (Visas & Monde)'}
                  </option>
                  <option value="Italie / Portugal / Europe">Italie / Portugal / Autre Europe</option>
                  <option value="Royaume-Uni (UK)">Royaume-Uni (UK)</option>
                </select>
              </div>

              {/* Honeypot anti-spam */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Error fallback message */}
              {submitError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs space-y-2">
                  <p className="font-semibold">{submitError}</p>
                  <div className="flex gap-2">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#25D366] text-white font-bold rounded-lg text-xs inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="px-3 py-1.5 bg-blue-600 text-white font-bold rounded-lg text-xs inline-flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Appeler</span>
                    </a>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold text-xs sm:text-sm py-3.5 px-5 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                    isSubmitting ? 'opacity-70 cursor-wait' : 'cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{currentLang === 'ar' ? 'جاري الإرسال...' : 'Transmission en cours...'}</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                      <span>{currentLang === 'ar' ? 'تحدث مع مستشار عبر واتساب' : 'Échanger avec un conseiller sur WhatsApp'}</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 text-center pt-1">
                {currentLang === 'ar' ? 'يفتح تطبيق واتساب برسالة جاهزة بالإرسال' : 'Ouvre WhatsApp avec vos coordonnées pré-remplies'}
              </p>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-6 ring-emerald-50">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {currentLang === 'ar' ? 'تم تسجيل طلبكم بنجاح !' : 'Demande transmise avec succès !'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                {currentLang === 'ar'
                  ? 'تم إرسال طلبكم إلى مستشارينا، ويمكنكم أيضاً بدء المحادثة مباشرة عبر واتساب :'
                  : 'Votre demande a été transmise à nos conseillers. Vous pouvez également échanger directement sur WhatsApp :'}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span>Ouvrir WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Appeler {siteConfig.phone}</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-slate-600 hover:text-slate-900 underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                >
                  Fermer la fenêtre
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
