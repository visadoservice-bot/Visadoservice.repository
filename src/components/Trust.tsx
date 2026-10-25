import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  Building2, 
  FileCheck2, 
  Sparkles,
  Camera
} from 'lucide-react';
import { siteConfig } from '../data/config';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';
import { Card } from './Card';

interface TrustProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Trust: React.FC<TrustProps> = ({ 
  currentLang, 
  onOpenConsultation,
  onNavigateToSection
}) => {
  const isArabic = currentLang === 'ar';
  const isEnglish = currentLang === 'en';

  const handleScroll = (id: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trust" className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Soft background ambient gradient */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-50/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>{isArabic ? 'ثقة وشفافية • وهران' : isEnglish ? 'Trust, Rigor & Transparency' : 'Confiance, Rigueur & Transparence'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isArabic 
                ? 'خدمات سفر ومرافقة متكاملة في قلب وهران' 
                : isEnglish
                ? 'Integrated travel services and guidance in central Oran'
                : 'Services et accompagnement de voyage à Oran'}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {isArabic
                ? 'نستقبلكم في مكاتبنا بشارع حضري محمد لمرافقتكم وتوجيهكم في كافة إجراءات وحجوزات سفركم بكل شفافية واحترافية.'
                : isEnglish
                ? 'At 14 Rue Capitaine Hadri Mohamed, we welcome you in person to guide you through your travel bookings and application procedures with complete transparency.'
                : 'Au 14 Rue Capitaine Hadri Mohamed, nous vous recevons en personne pour vous orienter, vous assister dans vos démarches et vous accompagner dans vos réservations en toute sérénité.'}
            </p>
          </div>
        </Reveal>

        {/* 4 Trust Pillars with unified Card architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: Adresse à Oran */}
          <Reveal direction="up" delay={0} className="flex flex-col h-full">
            <Card
              icon={Building2}
              badge={isArabic ? 'مقر رسمي' : 'Adresse officielle'}
              title={isArabic ? 'مكاتبنا المفتوحة بوهران' : 'Nos bureaux à Oran'}
              description={isArabic
                ? 'فضاء استقبال ومكاتب استشارة مكيفة ومهيأة لاستقبالكم مباشرة لمراجعة الوثائق والتوجيه في الإجراءات.'
                : 'Bureaux d\'accueil et de consultation au centre-ville d\'Oran pour examiner vos pièces et échanger en toute confidentialité.'}
              highlights={[
                siteConfig.address,
                isArabic ? 'السبت - الخميس: 09:00 إلى 17:00' : 'Samedi - Jeudi : 09h00 - 17h00'
              ]}
              colorClass="blue"
              action={{
                label: isArabic ? 'موقعنا على الخريطة' : 'Itinéraire Google Maps',
                onClick: () => window.open(siteConfig.googleMapsShareUrl, '_blank')
              }}
            />
          </Reveal>

          {/* Pillar 2: Avis Clients Réels & Note Google Maps 4.9/5 */}
          <Reveal direction="up" delay={60} className="flex flex-col h-full">
            <Card
              icon={ShieldCheck}
              badge="4.9 / 5 sur Google Maps"
              title={isArabic ? 'تقييمات موثقة من زبائن حقيقيين' : 'Avis Clients Vérifiés'}
              description={isArabic
                ? 'أكثر من 120 تقييم حقيقي لمسافرين رافقناهم في إجراءات تأشيرة إسبانيا، فرنسا، كندا وحجوزات السفر.'
                : 'Plus de 120 retours d\'expérience de voyageurs accompagnés pour leurs démarches de visa Schengen, Canada et réservations.'}
              highlights={[
                isArabic ? 'شهادات زبائن موثوقة' : 'Retours d\'expérience réels',
                isArabic ? 'تدقيق دقيق قبل الإيداع' : 'Vérification minutieuse'
              ]}
              colorClass="amber"
              action={{
                label: isArabic ? 'قراءة التقييمات على Google' : 'Consulter les avis Google',
                onClick: () => window.open(siteConfig.googleMapsShareUrl, '_blank')
              }}
            />
          </Reveal>

          {/* Pillar 3: Contact Direct & Disponibilité Téléphonique / WhatsApp */}
          <Reveal direction="up" delay={120} className="flex flex-col h-full">
            <Card
              icon={Phone}
              badge={isArabic ? 'خط مباشر' : 'Ligne Directe'}
              title={isArabic ? 'تواصل فوري دون وسطاء' : 'Téléphone & WhatsApp Directs'}
              description={isArabic
                ? 'تواصل مباشر مع مستشارينا عبر الهاتف أو تطبيق واتساب للحصول على استفسارات سريعة وتحديد موعد الاستقبال.'
                : 'Pas de standard automatisé ni d\'attente inutile : vous dialoguez en direct avec nos conseillers basés à Oran.'}
              highlights={[
                `📞 ${siteConfig.phone}`,
                `💬 WhatsApp 7j/7`
              ]}
              colorClass="emerald"
              action={{
                label: isArabic ? 'مراسلة عبر واتساب' : 'Écrire sur WhatsApp',
                onClick: () => window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je souhaite avoir des renseignements sur vos services de voyage à Oran.")}`, '_blank')
              }}
            />
          </Reveal>

          {/* Pillar 4: Accompagnement Personnalisé & Services Complets */}
          <Reveal direction="up" delay={180} className="flex flex-col h-full">
            <Card
              icon={FileCheck2}
              badge={isArabic ? 'دراسة دقيقة' : 'Sur-mesure'}
              title={isArabic ? 'مرافقة شاملة لرحلتكم' : 'Accompagnement Rigoureux'}
              description={isArabic
                ? 'استشارات شخصية، متابعة المواعيد المتاحة، ومساعدة في حجوزات السفر عبر المنصات المعتمدة.'
                : 'Conseils personnalisés selon votre destination, suivi de vos créneaux et assistance aux réservations officielles.'}
              highlights={[
                isArabic ? 'استشارات وإرشادات مخصصة' : 'Conseils et orientation sur-mesure',
                isArabic ? 'مساعدة في حجوزات الطيران والإقامة' : 'Assistance aux réservations de voyage',
                isArabic ? 'شفافية كاملة دون وعود وهمية' : 'Transparence totale sans fausses promesses'
              ]}
              colorClass="purple"
              action={onOpenConsultation ? {
                label: isArabic ? 'تحدث مع مستشار' : 'Parler à un conseiller',
                onClick: onOpenConsultation
              } : undefined}
            />
          </Reveal>

        </div>

      </div>
    </section>
  );
};
