import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';
import { siteConfig } from '../data/config';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface FAQProps {
  currentLang: Language;
  onOpenConsultation?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ currentLang, onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[currentLang];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-24 bg-slate-50/60 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100/60 px-3.5 py-1 rounded-full inline-block mb-3 shadow-2xs">
              {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Questions fréquentes'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentLang === 'ar' ? 'كل ما تحتاج معرفته عن خدماتنا' : 'Réponses claires à vos questions'}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentLang === 'ar'
                ? 'إجابات شفافة ومفصلة حول ملفات التأشيرة والمواعيد والتكاليف.'
                : 'Informations transparentes sur les démarches, délais et prise en charge de votre dossier.'}
            </p>
          </div>
        </Reveal>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.id} delay={index * 50} direction="up">
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-blue-200 shadow-sm ring-1 ring-blue-100/60' 
                      : 'border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    id={`faq-btn-${item.id}`}
                    aria-controls={`faq-answer-${item.id}`}
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-start px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer text-slate-900 group"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-blue-600 text-white shadow-xs' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100/70'
                      }`}>
                        <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                        <p className="ps-0 sm:ps-11">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Contextual CTA after FAQ */}
        <Reveal direction="up" delay={80}>
          <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-5 hover:border-blue-200 hover:shadow-md transition-all duration-300">
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {currentLang === 'ar' ? 'هل لديك حالة خاصة أو سؤال غير مذكور هنا؟' : 'Une question sur votre situation personnelle ?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {currentLang === 'ar'
                  ? 'مستشارونا متاحون للإجابة على تساؤلاتكم وتحديد الوثائق المطلوبة لحالتكم.'
                  : 'Salarié, commerçant, profession libérale ou étudiant : chaque profil a des règles spécifiques.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent('Bonjour Visado Service, j\'ai une question spécifique concernant mon dossier de visa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl shadow-2xs active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>{currentLang === 'ar' ? 'اسأل عبر واتساب' : 'Poser ma question'}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-2xs active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang === 'ar' ? 'دراسة الملف' : 'Demander une étude'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
