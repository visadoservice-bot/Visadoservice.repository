import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig, WHATSAPP_DEFAULT_MESSAGE } from '../data/config';
import { translations } from '../data/translations';
import { Language, ContactFormData } from '../types';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    destination: '',
    visaType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formattedWhatsAppText = encodeURIComponent(
    `Bonjour Visado Service,\nJe m'appelle ${formData.fullName || '[Nom non spécifié]'}.\nJe souhaite des informations pour un visa ${formData.visaType || 'non précisé'} vers ${formData.destination || 'non précisée'}.\nTéléphone: ${formData.phone || 'Non renseigné'}\nMessage: ${formData.message || 'Demande de contact via le site web.'}`
  );

  const customWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${formattedWhatsAppText}`;
  const defaultWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#071A2F] relative overflow-hidden border-t border-white/5">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0B2545]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C7A76C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C7A76C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
              {t.contact.overline}
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#E9ECEF]/80 font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="luxury-glass p-8 rounded-sm border border-white/10 space-y-6">
              <h3 className="font-serif-luxury text-2xl text-white font-normal">
                {t.contact.directContact}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-start gap-4 text-[#E9ECEF]/90 hover:text-white group transition-colors"
                >
                  <div className="p-3 rounded-sm bg-white/5 group-hover:bg-[#C7A76C]/20 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-[#C7A76C]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E9ECEF]/50 block uppercase tracking-wider mb-0.5">
                      {t.contact.phoneLabel}
                    </span>
                    <span className="font-mono text-base text-white group-hover:text-[#C7A76C] transition-colors font-medium">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-[#E9ECEF]/90 hover:text-white group transition-colors"
                >
                  <div className="p-3 rounded-sm bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E9ECEF]/50 block uppercase tracking-wider mb-0.5">
                      {t.contact.whatsappLabel}
                    </span>
                    <span className="font-mono text-base text-white group-hover:text-[#25D366] transition-colors font-medium">
                      {siteConfig.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 text-[#E9ECEF]/90 hover:text-white group transition-colors"
                >
                  <div className="p-3 rounded-sm bg-white/5 group-hover:bg-[#C7A76C]/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-[#C7A76C]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E9ECEF]/50 block uppercase tracking-wider mb-0.5">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-base text-white group-hover:text-[#C7A76C] transition-colors font-medium break-all">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 text-[#E9ECEF]/90">
                  <div className="p-3 rounded-sm bg-white/5 shrink-0">
                    <MapPin className="w-5 h-5 text-[#C7A76C]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E9ECEF]/50 block uppercase tracking-wider mb-0.5">
                      {t.contact.addressLabel}
                    </span>
                    <span className="text-sm sm:text-base text-white leading-relaxed block font-medium">
                      {siteConfig.address}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 text-[#E9ECEF]/90 pt-2 border-t border-white/10">
                  <div className="p-3 rounded-sm bg-white/5 shrink-0">
                    <Clock className="w-5 h-5 text-[#C7A76C]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E9ECEF]/50 block uppercase tracking-wider mb-0.5">
                      {t.contact.hoursLabel}
                    </span>
                    <span className="text-sm text-white">
                      {t.contact.hoursValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-[#E9ECEF]/50 block uppercase tracking-wider mb-3">
                  {t.contact.socialLabel}
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 hover:border-[#C7A76C]/40 transition-colors flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
                  </a>

                  <a
                    href={siteConfig.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 hover:border-[#C7A76C]/40 transition-colors flex items-center gap-1.5"
                  >
                    <span>TikTok</span>
                    <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
                  </a>

                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 hover:border-[#C7A76C]/40 transition-colors flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3 text-[#C7A76C]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Interactive Map Embed */}
            <div className="luxury-glass rounded-sm border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#C7A76C]" />
                  <span>Oran, Algérie</span>
                </div>
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-wider text-[#C7A76C] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>{t.contact.openInMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-60 w-full relative">
                <iframe
                  title="Visado Service Oran Location"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="luxury-glass p-8 sm:p-10 rounded-sm border border-white/10 shadow-2xl relative">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-sm text-[#E9ECEF]/75 font-light mb-8 leading-relaxed">
                {t.contact.formSubtitle}
              </p>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-white/5 border border-[#C7A76C]/40 rounded-sm animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#C7A76C] mx-auto" />
                  <h4 className="font-serif-luxury text-2xl text-white">
                    Demande transmise avec succès
                  </h4>
                  <p className="text-sm text-[#E9ECEF]/80 max-w-md mx-auto leading-relaxed">
                    {t.contact.formSuccessMessage}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest font-bold rounded-sm inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirmer sur WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/80 mb-2 font-medium">
                        {t.contact.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.contact.fullNamePlaceholder}
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/80 mb-2 font-medium">
                        {t.contact.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/80 mb-2 font-medium">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/80 mb-2 font-medium">
                        {t.contact.destination} *
                      </label>
                      <select
                        required
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#071A2F] border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="">{t.contact.destinationPlaceholder}</option>
                        <option value="France">France (Schengen)</option>
                        <option value="Italie">Italie (Schengen)</option>
                        <option value="Espagne">Espagne (Schengen)</option>
                        <option value="Allemagne">Allemagne (Schengen)</option>
                        <option value="Belgique">Belgique (Schengen)</option>
                        <option value="Malte">Malte (Schengen)</option>
                        <option value="Canada">Canada (Tourisme)</option>
                        <option value="Autre pays">Autre destination</option>
                      </select>
                    </div>
                  </div>

                  {/* Visa Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/80 mb-2 font-medium">
                      {t.contact.visaType}
                    </label>
                    <input
                      type="text"
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      placeholder={t.contact.visaTypePlaceholder}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E9ECEF]/80 mb-2 font-medium">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C7A76C] rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-xs uppercase tracking-[0.16em] font-bold rounded-sm shadow-xl transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>{t.contact.submitButton}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-[#25D366]/20 hover:bg-[#25D366] text-white text-xs uppercase tracking-[0.16em] font-bold rounded-sm border border-[#25D366]/40 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                      <span>{t.contact.continueWhatsApp}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
