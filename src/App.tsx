import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { EuropeSection } from './components/EuropeSection';
import { CanadaSection } from './components/CanadaSection';
import { Approach } from './components/Approach';
import { WhyUs } from './components/WhyUs';
import { Trust } from './components/Trust';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ConsultationModal } from './components/ConsultationModal';
import { Language } from './types';
import { translations } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Synchronize document language and text direction (RTL for Arabic)
  useEffect(() => {
    const isRtl = currentLang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // Update page title dynamically
    const t = translations[currentLang];
    if (t?.meta?.title) {
      document.title = t.meta.title;
    }
  }, [currentLang]);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#071A2F] text-[#F7F7F5] selection:bg-[#C7A76C]/30 selection:text-white ${currentLang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Header / Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Cinématique */}
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
          onExploreServices={() => handleNavigateToSection('services')}
        />

        {/* 2. Transition Éditoriale & Manifeste */}
        <Intro currentLang={currentLang} />

        {/* 3. Nos Expertises / Services en Grands Formats */}
        <Services
          currentLang={currentLang}
          onNavigateToSection={handleNavigateToSection}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 4. Section Europe Immersive (Schengen) */}
        <EuropeSection
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 5. Section Canada Immersive & Parcours */}
        <CanadaSection
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 6. Notre Approche (Timeline 5 étapes) */}
        <Approach currentLang={currentLang} />

        {/* 7. Pourquoi Visado Service (5 Piliers & Agence Oran) */}
        <WhyUs currentLang={currentLang} />

        {/* 8. Confiance & Rigueur */}
        <Trust currentLang={currentLang} />

        {/* 9. Témoignages (Structure éthique sans faux avis) */}
        <Testimonials currentLang={currentLang} />

        {/* 10. Questions Fréquentes (FAQ Accordéon) */}
        <FAQ currentLang={currentLang} />

        {/* 11. Contact & Localisation à Oran */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Bouton WhatsApp Flottant */}
      <WhatsAppFloat currentLang={currentLang} />

      {/* Modal Consultation "Parler à un conseiller" */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
}
