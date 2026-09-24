import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Send } from 'lucide-react';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
import { Language } from '../types';

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

  if (!isOpen) return null;

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `Bonjour Visado Service, je m'appelle ${name || '[Nom]'}. Je souhaite être contacté par un conseiller pour un projet de visa (${destination}). Mon numéro : ${phone || '[Téléphone]'}.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden border border-[#DADCE0]">
        
        {/* Modal Top Bar */}
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/LOGO.png"
              alt="Visado Service"
              className="w-7 h-7 object-contain rounded-md bg-white border border-[#DADCE0] p-0.5"
            />
            <span className="font-bold text-sm text-[#202124]">
              {currentLang === 'ar' ? 'طلب استشارة سريعة' : 'Demander un devis ou une consultation'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#5F6368] hover:text-[#202124] rounded-full hover:bg-[#E8EAED] transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Direct Instant Channels */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_CONSULTANT_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#E6F4EA] hover:bg-[#ceead6] text-[#137333] rounded-lg border border-[#CEEAD6] flex flex-col items-center text-center transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#1E8E3E] mb-1" />
              <span className="text-xs font-bold">WhatsApp Direct</span>
              <span className="text-[11px] text-[#5F6368]">Réponse immédiate</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-3 bg-[#E8F0FE] hover:bg-[#d2e3fc] text-[#1A73E8] rounded-lg border border-[#D2E3FC] flex flex-col items-center text-center transition-colors"
            >
              <Phone className="w-5 h-5 text-[#1A73E8] mb-1" />
              <span className="text-xs font-bold">Appel Téléphonique</span>
              <span className="text-[11px] text-[#5F6368]" dir="ltr">{siteConfig.phone}</span>
            </a>
          </div>

          <div className="relative flex items-center justify-center my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#DADCE0]" /></div>
            <span className="relative px-3 bg-white text-[11px] font-semibold uppercase tracking-wider text-[#70757A]">
              {currentLang === 'ar' ? 'أو اترك بياناتك لنتصل بك' : 'ou laissez vos coordonnées'}
            </span>
          </div>

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#202124] mb-1">
                  {currentLang === 'ar' ? 'الاسم الكامل *' : 'Votre Nom et Prénom *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mourad Hadj"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202124] mb-1">
                  {currentLang === 'ar' ? 'رقم الهاتف *' : 'Numéro de téléphone *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 0550 00 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202124] mb-1">
                  {currentLang === 'ar' ? 'الوجهة أو نوع الخدمة' : 'Destination / Service souhaité'}
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                >
                  <option value="Espagne / Schengen">Espagne / Visa Schengen</option>
                  <option value="France / Schengen">France / Visa Schengen</option>
                  <option value="Canada (Tourisme / Études)">Canada (Tourisme / Études)</option>
                  <option value="Italie / Portugal / Europe">Italie / Portugal / Autre Europe</option>
                  <option value="Royaume-Uni (UK)">Royaume-Uni (UK)</option>
                  <option value="Turquie / Dubaï">Turquie / Dubaï</option>
                  <option value="Billetterie Avion">Billetterie & Vol</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="btn-google-primary flex-1 text-center text-xs py-2.5"
                >
                  {currentLang === 'ar' ? 'إرسال الطلب' : 'Valider ma demande'}
                </button>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-2.5 px-3 rounded transition-colors text-center shadow-xs flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 bg-[#E6F4EA] text-[#1E8E3E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-[#202124]">
                {currentLang === 'ar' ? 'تم تسجيل طلبكم' : 'Demande bien enregistrée !'}
              </h4>
              <p className="text-xs text-[#5F6368] max-w-xs mx-auto">
                {currentLang === 'ar'
                  ? 'سيتواصل معكم أحد مستشارينا في أقرب وقت.'
                  : 'Un conseiller Visado Service vous contactera dans les plus brefs délais.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="btn-google-primary text-xs py-2 px-6"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
