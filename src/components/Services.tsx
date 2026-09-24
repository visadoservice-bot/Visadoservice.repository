import React from 'react';
import { Globe, FileCheck2, Plane, Sparkles, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface ServicesProps {
  currentLang: Language;
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  currentLang,
  onNavigateToSection,
  onOpenConsultation
}) => {
  const servicesList = [
    {
      id: "schengen",
      icon: Globe,
      iconColor: "text-[#1A73E8]",
      iconBg: "bg-[#E8F0FE]",
      title: currentLang === 'ar' ? 'تأشيرات شنغن وأوروبا' : currentLang === 'en' ? 'Schengen & European Visas' : 'Visa Schengen & Europe',
      subtitle: currentLang === 'ar' ? 'فرنسا، إسبانيا، إيطاليا وكافة دول أوروبا' : currentLang === 'en' ? 'France, Spain, Italy & Schengen Area' : 'France, Espagne, Italie & Espace Schengen',
      description: currentLang === 'ar'
        ? 'مرافقة شاملة لإعداد الملف، حجز المواعيد (TLScontact, BLS, VFS)، التأمين الدولي، والتحقق الدقيق من الوثائق.'
        : currentLang === 'en'
        ? 'Comprehensive application file preparation, appointment assistance (TLScontact, BLS, VFS), travel insurance, and consular document verification.'
        : 'Assistance complète pour le montage de dossier, prise de rendez-vous consulaires (TLScontact, BLS, VFS), assurance voyage et conformité des pièces.',
      features: currentLang === 'ar' 
        ? ['حجز وتتبع المواعيد', 'تدقيق كامل للوثائق', 'تأمين سفر دولي معتمد']
        : ['Assistance prise de RDV', 'Audit minutieux des pièces', 'Assurance voyage certifiée']
    },
    {
      id: "canada",
      icon: Sparkles,
      iconColor: "text-[#D93025]",
      iconBg: "bg-[#FCE8E6]",
      title: currentLang === 'ar' ? 'تأشيرات كندا والدول الدولية' : currentLang === 'en' ? 'Canada & Global Visas' : 'Visa Canada & International',
      subtitle: currentLang === 'ar' ? 'تأشيرة زائر، دراسة، وسياحة' : currentLang === 'en' ? 'Visitor, Study & Tourism Visas' : 'Visiteur, Tourisme & Études',
      description: currentLang === 'ar'
        ? 'إعداد الحساب الإلكتروني الرسمي لكندا، صياغة رسائل الشرح المتقنة، وترتيب الوثائق المالية والمهنية.'
        : currentLang === 'en'
        ? 'Official online portal submissions, customized purpose-of-travel explanation letters, and financial backing organization.'
        : 'Création et téléversement sur le portail officiel canadien, rédaction soignée des lettres explicatives et structuration des garanties financières.',
      features: currentLang === 'ar'
        ? ['تعبئة الاستمارات الرسمية', 'رسائل دافع متقنة', 'تنسيق البصمات والمتابعة']
        : ['Formulaires en ligne IRCC', 'Lettres explicatives solides', 'Suivi étape par étape']
    },
    {
      id: "dossier",
      icon: FileCheck2,
      iconColor: "text-[#1E8E3E]",
      iconBg: "bg-[#E6F4EA]",
      title: currentLang === 'ar' ? 'إعداد ومراجعة الملفات' : currentLang === 'en' ? 'File Auditing & Verification' : 'Traitement & Audit de Dossier',
      subtitle: currentLang === 'ar' ? 'ضمان اكتمال الوثائق وتفادي الرفض' : currentLang === 'en' ? 'Prevent errors & maximize success' : 'Éviter les erreurs & maximiser l\'accord',
      description: currentLang === 'ar'
        ? 'فحص شامل وتدقيق دقيق لشهادات العمل، السجلات التجارية، كشوف الحسابات البنكية وحجوزات الفنادق.'
        : currentLang === 'en'
        ? 'Rigorous pre-submission audit of employment records, trade registers, bank statements, and confirmed accommodation.'
        : 'Examen rigoureux et structuration méthodique des justificatifs professionnels, fiches de paie, relevés bancaires et hébergements.',
      features: currentLang === 'ar'
        ? ['تصحيح الثغرات والنقائص', 'ترتيب منطقي ومقنع للملف', 'مطابقة معايير القنصليات']
        : ['Détection des anomalies', 'Classement optimal des pièces', 'Conformité consulaire stricte']
    },
    {
      id: "billetterie",
      icon: Plane,
      iconColor: "text-[#F9AB00]",
      iconBg: "bg-[#FEF7E0]",
      title: currentLang === 'ar' ? 'حجز التذاكر والفنادق' : currentLang === 'en' ? 'Flight & Hotel Ticketing' : 'Billetterie & Réservations',
      subtitle: currentLang === 'ar' ? 'الخطوط الجوية الجزائرية والشركات العالمية' : currentLang === 'en' ? 'Air Algérie, Air France & Global Airlines' : 'Air Algérie, Air France & Vols Mondiaux',
      description: currentLang === 'ar'
        ? 'إصدار تذاكر الطيران الرسمية وحجوزات الفنادق المؤكدة الصالحة للتقديم في ملفات التأشيرات والسفر.'
        : currentLang === 'en'
        ? 'Official confirmed flight bookings and certified hotel reservations tailored for consular application compliance.'
        : 'Émission de billets d\'avion et de réservations hôtelières confirmées conformes aux exigences des ambassades et consulats.',
      features: currentLang === 'ar'
        ? ['تذاكر طيران مؤكدة', 'حجوزات فندقية موثوقة', 'أفضل الأسعار والخيارات']
        : ['Billets d\'avion certifiés', 'Réservations d\'hôtel valides', 'Tarifs compétitifs']
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {currentLang === 'ar' ? 'خدماتنا الرئيسية' : currentLang === 'en' ? 'Our Core Services' : 'Nos Services'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentLang === 'ar' 
                ? 'خدمات شاملة لمرافقة التأشيرات والسفر' 
                : currentLang === 'en' 
                ? 'Comprehensive Visa & Travel Services' 
                : 'Des démarches claires, structurées et sans stress'}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentLang === 'ar'
                ? 'حلول موثوقة ومخصصة لجميع احتياجاتكم من إعداد الملف حتى السفر.'
                : 'Une prise en charge personnalisée de votre dossier du premier conseil jusqu’à l’obtention.'}
            </p>
          </div>
        </Reveal>

        {/* 4 Clean Minimalist Cards - Responsive Grid & Mobile Snap-Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {servicesList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <Reveal 
                key={service.id} 
                delay={idx * 80} 
                direction="up" 
                className="flex flex-col h-full min-w-[260px] min-[380px]:min-w-[290px] sm:min-w-[320px] md:min-w-0 snap-start"
              >
                <div
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 p-5 sm:p-7 flex flex-col justify-between h-full shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
                >
                  <div>
                    {/* Icon with smooth scale on group hover */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300 shadow-2xs`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-3">
                      {service.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3.5 mb-4">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 group-hover:scale-125 transition-transform" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={onOpenConsultation}
                    className="w-full mt-2 py-2.5 px-3.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98] group/btn"
                  >
                    <span>{currentLang === 'ar' ? 'طلب الخدمة' : 'Demander ce service'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-blue-600 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* BLS Appointment & Document Assistance Focus Banner with Real Proof */}
        <Reveal direction="up" delay={120}>
          <div className="mt-8 sm:mt-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{currentLang === 'ar' ? 'خدمة حجز مواعيد BLS Espagne بوهران' : 'Assistance Rendez-Vous BLS Espagne Officiel'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentLang === 'ar' 
                    ? 'حجز وتأكيد مواعيد مركز BLS إسبانيا ومراجعة كافة وثائق الملف' 
                    : 'Prise de rendez-vous BLS Espagne & préparation rigoureuse des justificatifs'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentLang === 'ar' 
                    ? 'نوفر لكم متابعة مستمرة وتأكيداً رسمياً للمواعيد مع فحص شامل لجواز السفر، شهادات العمل، كشوف الحسابات، والتأمين الدولي.'
                    : 'Visado Service vous assiste pour l\'obtention des créneaux de rendez-vous BLS International et audite chaque pièce de votre dossier avant votre dépôt au centre.'}
                </p>
                <div className="pt-1 flex flex-wrap gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer text-center"
                  >
                    {currentLang === 'ar' ? 'طلب موعد BLS' : 'Demander mon RDV BLS'}
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md max-w-[200px] sm:max-w-[220px] group cursor-pointer" onClick={onOpenConsultation}>
                  <img
                    src="/images/rdv.png"
                    alt="Confirmation officielle de rendez-vous BLS Espagne"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white text-[10px] font-semibold py-1.5 px-2 text-center backdrop-blur-xs">
                    {currentLang === 'ar' ? 'نموذج موعد BLS معتمد' : 'Récépissé BLS vérifié'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Global Contextual CTA Block after Services */}
        <Reveal direction="up" delay={150}>
          <div className="mt-8 sm:mt-10 p-5 sm:p-7 bg-gradient-to-r from-blue-50/70 via-white to-slate-50/80 border border-blue-100 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-5 shadow-xs hover:shadow-md transition-shadow">
            <div className="text-center lg:text-start space-y-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 bg-blue-100/60 px-2.5 py-0.5 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'ar' ? 'تدقيق احترافي قبل الإيداع' : 'Audit avant dépôt consulaire'}</span>
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {currentLang === 'ar' ? 'تريد التأكد من اكتمال ملفك ومطابقته قبل إيداعه؟' : 'Vous préparez un dossier pour l\'Espagne, la France ou le Canada ?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {currentLang === 'ar' 
                  ? 'تجنب أسباب الرفض الشائعة (نقص الوثائق، عدم تطابق كشف الحساب). يقوم مستشارونا بمراجعة شاملة لملفكم.'
                  : 'Évitez les motifs de refus évitables. Nos conseillers vérifient la conformité de chaque pièce selon votre statut (salarié, commerçant, profession libérale, étudiant).'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                {currentLang === 'ar' ? 'طلب دراسة ملف' : 'Demander une étude de dossier'}
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent('Bonjour Visado Service, je prépare un dossier de visa et je souhaite parler à un conseiller.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shadow-xs active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>{currentLang === 'ar' ? 'استشارة عبر واتساب' : 'Parler à un conseiller'}</span>
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
