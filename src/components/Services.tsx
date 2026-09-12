import React from 'react';
import { Globe, FileCheck2, Plane, Sparkles, ArrowRight } from 'lucide-react';
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
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-3 py-1 rounded-full inline-block mb-3">
            {currentLang === 'ar' ? 'خدماتنا الرئيسية' : currentLang === 'en' ? 'Our Core Services' : 'Nos Services'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
            {currentLang === 'ar' 
              ? 'خدمات شاملة لمرافقة التأشيرات والسفر' 
              : currentLang === 'en' 
              ? 'Comprehensive Visa & Travel Services' 
              : 'Des démarches claires, structurées et sans stress'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5F6368]">
            {currentLang === 'ar'
              ? 'حلول موثوقة ومخصصة لجميع احتياجاتكم من إعداد الملف حتى السفر.'
              : 'Une prise en charge personnalisée de votre dossier du premier conseil jusqu’à l’obtention.'}
          </p>
        </div>

        {/* 4 Clean Minimalist Cards - Responsive Grid & Mobile Snap-Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-5 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="google-card p-6 flex flex-col justify-between min-w-[285px] sm:min-w-[320px] md:min-w-0 snap-start"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-lg ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-[#202124] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#1A73E8] mb-3">
                    {service.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 border-t border-[#F1F3F4] pt-3 mb-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-[11px] text-[#3C4043] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full mt-2 py-2 px-3 text-xs font-semibold text-[#1A73E8] bg-[#F8F9FA] hover:bg-[#E8F0FE] border border-[#DADCE0] hover:border-[#1A73E8] rounded-md transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>{currentLang === 'ar' ? 'طلب الخدمة' : 'Demander ce service'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Prompt */}
        <div className="mt-10 p-5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-start">
            <h4 className="text-sm font-bold text-[#202124]">
              {currentLang === 'ar' ? 'هل لديك حالة خاصة أو استفسار عن وجهة معينة؟' : 'Vous avez un doute sur les pièces à fournir pour votre profil ?'}
            </h4>
            <p className="text-xs text-[#5F6368]">
              {currentLang === 'ar' ? 'فريقنا في وهران مستعد للإجابة على جميع تساؤلاتكم.' : 'Nos conseillers étudient votre situation (salarié, commerçant, étudiant, retraité).'}
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold rounded-md whitespace-nowrap shadow-xs transition-colors cursor-pointer"
          >
            {currentLang === 'ar' ? 'استشارة مجانية' : 'Demander un conseil'}
          </button>
        </div>

      </div>
    </section>
  );
};
