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

  const formattedWhatsAppText = encodeURIComponent(
    `*Nouvelle demande via le site Visado Service :*\n` +
    `👤 *Nom :* ${formData.fullName || 'Non spécifié'}\n` +
    `📞 *Téléphone :* ${formData.phone || 'Non renseigné'}\n` +
    `📍 *Destination :* ${formData.destination || 'Non spécifiée'}\n` +
    `📄 *Type de visa :* ${formData.visaType || 'Non précisé'}\n` +
    `💬 *Message :* ${formData.message || 'Demande de devis & étude de dossier'}`
  );

  const customWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${formattedWhatsAppText}`;
  const defaultWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Demande de devis - ${formData.fullName || 'Client'} (${formData.destination || 'Visa'})`
  )}&body=${encodeURIComponent(
    `Bonjour l'équipe Visado Service,\n\nVoici les détails de la demande envoyée depuis le site web :\n- Nom : ${formData.fullName}\n- Téléphone : ${formData.phone}\n- Destination : ${formData.destination}\n- Type de visa / service : ${formData.visaType || 'Non précisé'}\n- Message : ${formData.message || 'Aucun message'}\n\nEnvoyé depuis le site web Visado Service Oran (https://visadoservice.dz).`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Redirection directe vers WhatsApp officiel pour réception instantanée
    if (typeof window !== 'undefined') {
      window.open(customWhatsAppUrl, '_blank');
    }
  };

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

            {/* Agency Storefront Real Photo */}
            <div className="google-card overflow-hidden bg-white mb-6">
              <div className="relative aspect-[16/9] bg-[#F1F3F4] overflow-hidden group">
                <img
                  src="/images/Exterieur.png"
                  alt="Façade extérieure Visado Service Oran"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#EA4335]" />
                  <span>{currentLang === 'ar' ? 'المقر بالواجهة الخارجية' : 'Façade Extérieure de l\'Agence'}</span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-[#202124] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs" dir="ltr">
                  14 Rue Hadri Mohamed, Oran
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
              <div className="p-3 bg-[#F8F9FA] border-t border-[#DADCE0] flex items-center justify-between gap-2">
                <span className="text-xs text-[#5F6368] truncate" dir="ltr">
                  📍 14, Rue Capitaine Hadri Mohamed, Oran
                </span>
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-bold text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-md transition-colors flex items-center gap-1.5 shadow-2xs shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentLang === 'ar' ? 'فتح في Google Maps' : 'Ouvrir sur Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
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
                      className="flex-1 bg-[#1A73E8] hover:bg-[#1557B0] active:bg-[#104892] text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 transform active:scale-[0.99] border border-[#1A73E8]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ar' ? 'إرسال الطلب' : 'Envoyer ma demande'}</span>
                    </button>

                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{currentLang === 'ar' ? 'إرسال عبر واتساب' : 'Envoyer par WhatsApp'}</span>
                    </a>
                  </div>

                  {/* Destination explanation note */}
                  <div className="text-[11px] text-[#5F6368] text-center pt-2 flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="font-medium text-[#202124]">
                      {currentLang === 'ar'
                        ? 'تصلنا رسالتك مباشرة على:'
                        : 'Réception directe sur :'}
                    </span>
                    <span className="text-[#1E8E3E] font-semibold">WhatsApp 0550 56 66 66</span>
                    <span>&</span>
                    <span className="text-[#1A73E8] font-semibold">visadoservice@gmail.com</span>
                  </div>
                </form>
              ) : (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 bg-[#E6F4EA] text-[#1E8E3E] rounded-full flex items-center justify-center mx-auto shadow-sm ring-4 ring-[#E6F4EA]/60">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#202124]">
                      {currentLang === 'ar' ? 'تم تحضير وإرسال طلبكم بنجاح !' : 'Demande transmise avec succès !'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5F6368] max-w-md mx-auto mt-2">
                      {currentLang === 'ar'
                        ? 'شكراً لكم. طلبكم موجه مباشرة إلى مستشاري وكالة Visado Service بوهران على الواتساب والبريد الإلكتروني.'
                        : 'Votre demande a été structurée pour l\'équipe Visado Service Oran. Vous pouvez la valider sur WhatsApp ou par Email ci-dessous :'}
                    </p>
                  </div>

                  {/* Reassurance channels box */}
                  <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-xl p-4 max-w-md mx-auto text-xs text-start space-y-2">
                    <div className="font-bold text-[#202124] pb-1 border-b border-[#DADCE0]">
                      {currentLang === 'ar' ? 'وجهة استلام الطلب :' : 'Canaux de réception de votre agence :'}
                    </div>
                    <div className="flex items-center justify-between text-[#3C4043]">
                      <span>📱 WhatsApp officiel :</span>
                      <strong className="text-[#1E8E3E]" dir="ltr">+213 550 56 66 66</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#3C4043]">
                      <span>✉️ Email officiel :</span>
                      <strong className="text-[#1A73E8]">visadoservice@gmail.com</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#3C4043]">
                      <span>📍 Agence physique :</span>
                      <span>14, Rue Hadri Mohamed, Oran</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-2.5 px-5 rounded-lg shadow-xs inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{currentLang === 'ar' ? 'فتح المحادثة على واتساب' : 'Ouvrir sur WhatsApp'}</span>
                    </a>

                    <a
                      href={mailtoUrl}
                      className="bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-xs py-2.5 px-4 rounded-lg shadow-xs inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{currentLang === 'ar' ? 'إرسال نسخة عبر الإيميل' : 'Envoyer par Email'}</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', phone: '', email: '', destination: '', visaType: '', message: '' });
                      }}
                      className="btn-google-secondary text-xs py-2.5 px-4"
                    >
                      {currentLang === 'ar' ? 'طلب جديد' : 'Nouveau message'}
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
