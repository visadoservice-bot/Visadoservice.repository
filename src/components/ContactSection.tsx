import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, Send, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { siteConfig, WHATSAPP_DEFAULT_MESSAGE } from '../data/config';
import { translations } from '../data/translations';
import { Reveal } from './ScrollReveal';
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
    destination: 'Espagne (BLS)',
    visaType: 'Visa Touristique (Court séjour)',
    profile: 'Salarié(e)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Destinations rapides
  const quickDestinations = [
    { label: '🇪🇸 Espagne (BLS)', value: 'Espagne (BLS)' },
    { label: '🇫🇷 France (TLS)', value: 'France (TLS)' },
    { label: '🇮🇹 Italie', value: 'Italie' },
    { label: '🇨🇦 Canada', value: 'Canada' },
    { label: '🇬🇧 Royaume-Uni', value: 'Royaume-Uni' },
    { label: '✈️ Billetterie vols seule', value: 'Billetterie / Réservation vol' },
  ];

  // Profils professionnels (critique pour les dossiers en Algérie)
  const quickProfiles = [
    { label: currentLang === 'ar' ? '💼 موظف / أجير' : '💼 Salarié(e)', value: 'Salarié(e)' },
    { label: currentLang === 'ar' ? '🏬 تاجر / C20' : '🏬 Commerçant(e) (C20)', value: 'Commerçant(e) (C20)' },
    { label: currentLang === 'ar' ? '🩺 مهنة حرة' : '🩺 Profession libérale', value: 'Profession libérale' },
    { label: currentLang === 'ar' ? '🎓 طالب' : '🎓 Étudiant(e)', value: 'Étudiant(e)' },
    { label: currentLang === 'ar' ? '🧓 متقاعد' : '🧓 Retraité(e)', value: 'Retraité(e)' },
  ];

  const buildWhatsAppMessage = () => {
    return (
      `*Demande de devis & étude de dossier — Visado Service*\n\n` +
      `👤 *Nom & Prénom :* ${formData.fullName.trim() || 'Non précisé'}\n` +
      `📞 *Téléphone :* ${formData.phone.trim() || 'Non renseigné'}\n` +
      `📍 *Destination souhaitée :* ${formData.destination || 'Non précisée'}\n` +
      `💼 *Statut professionnel :* ${formData.profile || 'Non spécifié'}\n` +
      `📄 *Type de démarche :* ${formData.visaType || 'Préparation de dossier'}\n` +
      (formData.message.trim() ? `💬 *Précisions :* ${formData.message.trim()}\n` : '') +
      `\n_Message envoyé depuis le site web Visado Service Oran_`
    );
  };

  const formattedWhatsAppText = encodeURIComponent(buildWhatsAppMessage());
  const customWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${formattedWhatsAppText}`;
  const defaultWhatsAppUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Demande de devis - ${formData.fullName || 'Client'} (${formData.destination || 'Visa'})`
  )}&body=${encodeURIComponent(
    `Bonjour l'équipe Visado Service,\n\nVoici les détails de la demande envoyée depuis le site web :\n` +
    `- Nom : ${formData.fullName}\n` +
    `- Téléphone : ${formData.phone}\n` +
    `- Destination : ${formData.destination}\n` +
    `- Statut : ${formData.profile}\n` +
    `- Type de visa / service : ${formData.visaType}\n` +
    `- Précisions : ${formData.message || 'Aucun message'}\n\n` +
    `Envoyé depuis le site web Visado Service Oran (${siteConfig.address}).`
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }
    setIsSubmitted(true);
    // Open WhatsApp directly with prefilled message
    if (typeof window !== 'undefined') {
      window.open(customWhatsAppUrl, '_blank');
    }
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {currentLang === 'ar' ? 'تواصل معنا' : 'Contact & Devis'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentLang === 'ar' ? 'طلب استشارة أو تسعيرة مجانية' : 'Demander un devis ou nous contacter'}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentLang === 'ar'
                ? 'فريقنا متاح للإجابة على كافة استفساراتكم ومرافقتكم في مقرنا بوهران أو عن بعد.'
                : 'Remplissez le formulaire ci-dessous ou contactez nos conseillers directement par téléphone et WhatsApp.'}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Coordonnées & Google Maps */}
          <Reveal direction="up" delay={0} className="lg:col-span-5">
            <div className="space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-5 sm:p-7 space-y-5 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 pb-3 border-b border-slate-200/80">
                {currentLang === 'ar' ? 'معلومات الاتصال المباشرة' : 'Coordonnées de l\'agence'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      {currentLang === 'ar' ? 'الهاتف المباشر & التذاكر' : 'Téléphone & Billetterie'}
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-bold text-blue-600 hover:text-blue-700 hover:underline text-base inline-block tracking-tight"
                      dir="ltr"
                    >
                      {siteConfig.phone}
                    </a>
                    {siteConfig.phoneSecondary && (
                      <a
                        href="tel:+213555778460"
                        className="text-xs text-slate-500 hover:text-slate-800 block mt-0.5"
                        dir="ltr"
                      >
                        {siteConfig.phoneSecondary} (Standard)
                      </a>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      {currentLang === 'ar' ? 'واتساب متاح 7/7' : 'Assistance WhatsApp'}
                    </span>
                    <a
                      href={defaultWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-sm inline-block"
                      dir="ltr"
                    >
                      {siteConfig.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-slate-800 hover:text-blue-600 break-all block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      {currentLang === 'ar' ? 'العنوان' : 'Adresse physique'}
                    </span>
                    <p className="font-semibold text-slate-800" dir="ltr">
                      14, Rue Capitaine Hadri Mohamed, Oran
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/60 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      {currentLang === 'ar' ? 'أوقات العمل' : 'Horaires d\'ouverture'}
                    </span>
                    <p className="text-xs text-slate-800 font-semibold">
                      {t.contact.hoursValue || "Samedi – Jeudi : 09h00 – 17h00"}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Agency Storefront Real Photo */}
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs mb-6">
              <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden group">
                <img
                  src="/images/Exterieur.png"
                  alt="Façade extérieure Visado Service Oran"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>{currentLang === 'ar' ? 'المقر بالواجهة الخارجية' : 'Façade Extérieure de l\'Agence'}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs" dir="ltr">
                  14 Rue Hadri Mohamed, Oran
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs">
              <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Visado Service sur Google Maps</span>
                </span>
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Itinéraire</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-56 w-full bg-slate-200">
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
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-600 truncate font-medium" dir="ltr">
                  📍 14, Rue Capitaine Hadri Mohamed, Oran
                </span>
                <a
                  href={siteConfig.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentLang === 'ar' ? 'Google Maps' : 'Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            </div>
          </Reveal>

          {/* Right Column: High-Converting Express Quote Form */}
          <Reveal direction="up" delay={80} className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
              
              {!isSubmitted ? (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span>{currentLang === 'ar' ? 'طلب دراسة ملف أو تسعيرة' : 'Demande d\'étude de dossier & devis'}</span>
                        <Sparkles className="w-4 h-4 text-amber-500" />
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                        <Zap className="w-3 h-3 text-emerald-600" />
                        <span>{currentLang === 'ar' ? 'إجابة في أقل من 15 دقيقة' : 'Réponse sous 15 min'}</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {currentLang === 'ar'
                        ? 'اختر وجهتك وصفتك المهنية، ثم اضغط على زر الواتساب لإرسال بياناتك مباشرة إلى مستشارينا.'
                        : 'Complétez vos coordonnées pour que nos conseillers d\'Oran analysent vos pièces et vous répondent immédiatement.'}
                    </p>
                  </div>

                  {/* 1. Quick Destination Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      {currentLang === 'ar' ? '1. الوجهة المطلوبة *' : '1. Destination ou service souhaité *'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {quickDestinations.map((dest) => {
                        const isSelected = formData.destination === dest.value;
                        return (
                          <button
                            type="button"
                            key={dest.value}
                            onClick={() => setFormData({ ...formData, destination: dest.value })}
                            className={`px-3 py-2 rounded-xl text-xs font-semibold text-start border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-50 border-blue-600 text-blue-700 ring-1 ring-blue-600 shadow-2xs'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {dest.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Applicant Profile (Critical for Visa Dossiers) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      {currentLang === 'ar' ? '2. صفتكم المهنية (مهم جداً لتحديد وثائق الملف) *' : '2. Votre statut professionnel (détermine vos pièces justificatives) *'}
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {quickProfiles.map((prof) => {
                        const isSelected = formData.profile === prof.value;
                        return (
                          <button
                            type="button"
                            key={prof.value}
                            onClick={() => setFormData({ ...formData, profile: prof.value })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-50 border-emerald-600 text-emerald-800 ring-1 ring-emerald-600 shadow-2xs'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {prof.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {currentLang === 'ar' ? 'الاسم واللقب *' : 'Nom et Prénom *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Karim Benali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-3 text-base sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 focus:outline-hidden text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        {currentLang === 'ar' ? 'رقم الهاتف (واتساب) *' : 'Numéro de téléphone *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: 0550 12 34 56"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 text-base sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 focus:outline-hidden text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* 4. Optional message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      {currentLang === 'ar' ? 'سؤال أو تفاصيل إضافية (اختياري)' : 'Précisions ou questions (facultatif)'}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={currentLang === 'ar' ? 'هل لديك سجل تجاري، كشف بنكي، أول سفر أو رفض سابق؟' : 'Ex: Premier voyage en Europe, besoin de rendez-vous BLS rapide, relevés bancaires...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 focus:outline-hidden text-slate-900 transition-all resize-none placeholder:text-slate-400"
                    />
                  </div>

                  {/* 5. Primary CTA Action - Opens WhatsApp with prefilled data */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md shadow-emerald-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                      <span>{currentLang === 'ar' ? 'إرسال الطلب عبر واتساب مع البيانات' : 'Envoyer ma demande via WhatsApp'}</span>
                    </button>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleStandardSubmit}
                        className="text-xs text-slate-600 hover:text-blue-700 underline font-medium cursor-pointer"
                      >
                        {currentLang === 'ar' ? 'أو إرسال الطلب عبر الموقع مباشرة' : 'Ou valider par formulaire web sans WhatsApp'}
                      </button>

                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="text-xs text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{currentLang === 'ar' ? `اتصال مباشر : ${siteConfig.phone}` : `Appel direct : ${siteConfig.phone}`}</span>
                      </a>
                    </div>
                  </div>

                  {/* Reassurance Micro-Copy */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ar' ? 'بياناتكم محمية وسرية 100%' : 'Données confidentielles'}</span>
                    </span>
                    <span>{currentLang === 'ar' ? 'استشارة مجانية وبدون التزام' : '0% engagement • Devis gratuit'}</span>
                    <span className="text-slate-600" dir="ltr">📍 14 Rue Hadri, Oran</span>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs ring-8 ring-emerald-50">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {currentLang === 'ar' ? 'تم تجهيز وإرسال معلومات طلبكم !' : 'Informations prêtes pour WhatsApp !'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      {currentLang === 'ar'
                        ? 'تم تنسيق بيانات طلبكم لإرسالها مباشرة إلى مستشاري وكالة Visado Service بوهران.'
                        : 'Vos données ont été préremplies pour notre équipe. Si WhatsApp ne s\'est pas ouvert automatiquement, cliquez sur le bouton ci-dessous :'}
                    </p>
                  </div>

                  {/* Direct Action Link on Success */}
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-xs inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{currentLang === 'ar' ? 'فتح المحادثة على واتساب الآن' : 'Ouvrir sur WhatsApp maintenant'}</span>
                    </a>

                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-xs inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{currentLang === 'ar' ? `اتصال : ${siteConfig.phone}` : `Appeler le ${siteConfig.phone}`}</span>
                    </a>
                  </div>

                  {/* Reassurance channels box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-xs text-start space-y-2">
                    <div className="font-bold text-slate-900 pb-1.5 border-b border-slate-200">
                      {currentLang === 'ar' ? 'معلومات الوكالة الرسمية :' : 'Coordonnées officielles Visado Service :'}
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span>📱 WhatsApp :</span>
                      <strong className="text-emerald-700" dir="ltr">{siteConfig.phone}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span>✉️ Email :</span>
                      <strong className="text-blue-600">{siteConfig.email}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span>📍 Adresse :</span>
                      <span>14, Rue Hadri Mohamed, Oran</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          destination: 'Espagne (BLS)',
                          visaType: 'Visa Touristique (Court séjour)',
                          profile: 'Salarié(e)',
                          message: ''
                        });
                      }}
                      className="py-2.5 px-4 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      {currentLang === 'ar' ? 'طلب استشارة جديدة' : 'Remplir une autre demande'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
