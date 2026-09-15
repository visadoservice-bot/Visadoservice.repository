import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
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
    `Bonjour Visado Service,\nJe m'appelle ${formData.fullName || '[Nom non spécifié]'}.\nJe souhaite des informations pour un visa ${formData.visaType || 'non précisé'} vers ${formData.destination || 'non précisée'}.\nTéléphone: ${formData.phone || 'Non renseigné'}\nMessage: ${formData.message || 'Demande de devis/contact via le site web.'}`
  );

  const customWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${formattedWhatsAppText}`;
  const defaultWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-3 py-1 rounded-full inline-block mb-3">
            {currentLang === 'ar' ? 'تواصل معنا' : 'Contact & Devis'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
            {currentLang === 'ar' ? 'طلب استشارة أو تسعيرة مجانية' : 'Demander un devis ou nous contacter'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5F6368]">
            {currentLang === 'ar'
              ? 'فريقنا متاح للإجابة على كافة استفساراتكم ومرافقتكم في مقرنا بوهران أو عن بعد.'
              : 'Remplissez le formulaire ci-dessous ou contactez nos conseillers directement par téléphone et WhatsApp.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Coordonnées & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="google-card p-6 bg-[#F8F9FA] space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-[#202124] pb-3 border-b border-[#DADCE0]">
                {currentLang === 'ar' ? 'معلومات الاتصال المباشرة' : 'Coordonnées de l\'agence'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5F6368] font-medium block">
                      {currentLang === 'ar' ? 'الهاتف المباشر & التذاكر' : 'Téléphone & Billetterie'}
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-bold text-[#1A73E8] hover:underline text-sm sm:text-base inline-block"
                      dir="ltr"
                    >
                      {siteConfig.phone}
                    </a>
                    {siteConfig.phoneSecondary && (
                      <a
                        href="tel:+213555778460"
                        className="text-xs text-[#5F6368] hover:text-[#202124] block mt-0.5"
                        dir="ltr"
                      >
                        {siteConfig.phoneSecondary} (Standard)
                      </a>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E6F4EA] text-[#1E8E3E] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5F6368] font-medium block">
                      {currentLang === 'ar' ? 'واتساب متاح 7/7' : 'Assistance WhatsApp'}
                    </span>
                    <a
                      href={defaultWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1E8E3E] hover:underline text-sm inline-block"
                      dir="ltr"
                    >
                      {siteConfig.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5F6368] font-medium block">Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-[#202124] hover:text-[#1A73E8] break-all block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FEF7E0] text-[#F9AB00] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5F6368] font-medium block">
                      {currentLang === 'ar' ? 'العنوان' : 'Adresse physique'}
                    </span>
                    <p className="font-semibold text-[#202124]" dir="ltr">
                      14, Rue Capitaine Hadri Mohamed, Oran
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#DADCE0]">
                  <div className="w-8 h-8 rounded-full bg-[#F1F3F4] text-[#5F6368] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5F6368] font-medium block">
                      {currentLang === 'ar' ? 'أوقات العمل' : 'Horaires d\'ouverture'}
                    </span>
                    <p className="text-xs text-[#202124] font-medium">
                      {t.contact.hoursValue || "Samedi – Jeudi : 09h00 – 17h00"}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Card */}
            <div className="google-card overflow-hidden bg-white">
              <div className="p-3 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                  <span>Visado Service sur Google Maps</span>
                </span>
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#1A73E8] font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Itinéraire</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-52 w-full bg-[#E8EAED]">
                <iframe
                  title="Visado Service Google Maps"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Clean Simple Quote Form */}
          <div className="lg:col-span-7">
            <div className="google-card p-6 sm:p-8 bg-white h-full flex flex-col justify-between">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#202124]">
                      {currentLang === 'ar' ? 'استمارة طلب تسعيرة أو موعد' : 'Formulaire de demande de devis'}
                    </h3>
                    <p className="text-xs text-[#5F6368] mt-1">
                      {currentLang === 'ar'
                        ? 'أدخل بياناتك وسنتصل بك في أقل من ساعتين خلال أوقات العمل.'
                        : 'Réponse rapide garantie par nos conseillers d\'Oran.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202124] mb-1">
                        {currentLang === 'ar' ? 'الاسم واللقب *' : 'Nom et Prénom *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Karim Benali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202124] mb-1">
                        {currentLang === 'ar' ? 'رقم الهاتف *' : 'Numéro de téléphone *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: 0550 12 34 56"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202124] mb-1">
                        {currentLang === 'ar' ? 'البلد / الوجهة *' : 'Destination souhaitée *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Espagne, France, Canada..."
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                      />
                    </div>

                    {/* Visa Type */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202124] mb-1">
                        {currentLang === 'ar' ? 'نوع التأشيرة أو الخدمة' : 'Type de visa ou service'}
                      </label>
                      <select
                        value={formData.visaType}
                        onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124]"
                      >
                        <option value="">Sélectionnez un type...</option>
                        <option value="Visa Touristique (Court séjour)">Visa Touristique (Court séjour)</option>
                        <option value="Visa Études / Campus France / Canada">Visa Études / Campus France / Canada</option>
                        <option value="Visa Affaires / Professionnel">Visa Affaires / Professionnel</option>
                        <option value="Prise de Rendez-vous BLS / TLS / VFS">Prise de Rendez-vous BLS / TLS / VFS</option>
                        <option value="Billetterie & Réservation d'Avion">Billetterie & Réservation d'Avion</option>
                        <option value="Assurance Voyage & Réservations d'Hôtel">Assurance Voyage & Réservations</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202124] mb-1">
                      {currentLang === 'ar' ? 'تفاصيل إضافية أو رسالة' : 'Précisions ou message'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Précisez votre situation ou vos questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border border-[#DADCE0] rounded focus:bg-white focus:border-[#1A73E8] focus:outline-hidden text-[#202124] resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-google-primary flex-1 text-center flex items-center justify-center gap-2 text-xs py-3"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ar' ? 'إرسال الطلب' : 'Envoyer ma demande'}</span>
                    </button>

                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{currentLang === 'ar' ? 'إرسال عبر واتساب' : 'Envoyer par WhatsApp'}</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-[#70757A] text-center pt-2">
                    🔒 Vos données restent strictement confidentielles et ne sont jamais transmises à des tiers.
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#E6F4EA] text-[#1E8E3E] rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#202124]">
                    {currentLang === 'ar' ? 'تم استلام طلبكم بنجاح' : 'Demande transmise avec succès !'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] max-w-md mx-auto">
                    {currentLang === 'ar'
                      ? 'شكراً لكم. سيقوم أحد مستشارينا في وهران بالتواصل معكم عبر الهاتف أو واتساب لدراسة ملفكم.'
                      : 'Merci de votre confiance. Un conseiller Visado Service va étudier votre demande et vous recontacter très rapidement.'}
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs py-2.5 px-5 rounded shadow-xs inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continuer sur WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', phone: '', email: '', destination: '', visaType: '', message: '' });
                      }}
                      className="btn-google-secondary text-xs py-2.5 px-4"
                    >
                      Nouveau message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
