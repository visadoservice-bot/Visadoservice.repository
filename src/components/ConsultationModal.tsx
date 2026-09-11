import React, { useState } from 'react';
import { X, MessageCircle, Phone, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig, WHATSAPP_CONSULTANT_MESSAGE } from '../data/config';
import { translations } from '../data/translations';
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
  const [destination, setDestination] = useState('France');
  const [isSent, setIsSent] = useState(false);

  const t = translations[currentLang];

  if (!isOpen) return null;

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `Bonjour Visado Service, je m'appelle ${name || '[Nom]'}. Je souhaite parler à un conseiller concernant mon projet de visa (${destination}).`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg luxury-glass border border-white/20 rounded-sm shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C7A76C] font-semibold block mb-1">
            Visado Service • Oran
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal">
            Parler à un conseiller
          </h3>
          <p className="text-xs sm:text-sm text-[#E9ECEF]/75 mt-1 font-light leading-relaxed">
            Notre équipe vous accompagne avec méthode et discrétion pour préparer votre dossier de visa.
          </p>
        </div>

        {/* Immediate Direct Options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_CONSULTANT_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#25D366]/20 hover:bg-[#25D366] text-white rounded-sm border border-[#25D366]/40 flex flex-col items-center text-center transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white mb-1" />
            <span className="text-xs font-semibold">WhatsApp Direct</span>
            <span className="text-[10px] text-white/70">Réponse rapide</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-sm border border-white/15 flex flex-col items-center text-center transition-all group"
          >
            <Phone className="w-5 h-5 text-[#C7A76C] mb-1" />
            <span className="text-xs font-semibold">Appel Agence</span>
            <span className="text-[10px] text-white/70">{siteConfig.phone}</span>
          </a>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
          <span className="relative px-3 bg-[#071A2F] text-[11px] uppercase tracking-wider text-[#E9ECEF]/50">
            ou laissez vos coordonnées
          </span>
        </div>

        {isSent ? (
          <div className="py-8 text-center space-y-3 bg-white/5 border border-[#C7A76C]/40 rounded-sm">
            <CheckCircle2 className="w-10 h-10 text-[#C7A76C] mx-auto" />
            <h4 className="font-serif-luxury text-xl text-white">Demande enregistrée</h4>
            <p className="text-xs text-[#E9ECEF]/80 max-w-xs mx-auto">
              Un conseiller Visado Service vous contactera dans la journée.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2 bg-[#C7A76C] text-[#071A2F] text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/75 mb-1 font-medium">
                Nom complet
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex. Amina Benali"
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/75 mb-1 font-medium">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0555 00 00 00"
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/75 mb-1 font-medium">
                Destination envisagée
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#071A2F] border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white focus:outline-none"
              >
                <option value="France">France (Schengen)</option>
                <option value="Italie">Italie (Schengen)</option>
                <option value="Espagne">Espagne (Schengen)</option>
                <option value="Allemagne">Allemagne (Schengen)</option>
                <option value="Belgique">Belgique (Schengen)</option>
                <option value="Malte">Malte (Schengen)</option>
                <option value="Canada">Canada (Tourisme)</option>
                <option value="Autre destination">Autre destination</option>
              </select>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-xs uppercase tracking-widest font-bold rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Être rappelé</span>
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#25D366]/20 hover:bg-[#25D366] text-white text-xs font-semibold rounded-sm border border-[#25D366]/40 flex items-center gap-1.5 transition-colors"
                title="Envoyer sur WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
