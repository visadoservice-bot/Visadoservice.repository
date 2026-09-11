import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { AgencyMediaShowcase } from './components/AgencyMediaShowcase';
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
    <div className={`min-h-screen bg-white text-[#202124] ${currentLang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* 1. En-tête / Header (Style Google Sites / Profil Entreprise) */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Main Single Page Content */}
      <main>
        {/* 2. Bannière principale / Hero */}
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
          onExploreServices={() => handleNavigateToSection('services')}
        />

        {/* 3. Services (Grille 4 services épurés) */}
        <Services
          currentLang={currentLang}
          onNavigateToSection={handleNavigateToSection}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 4. Pourquoi nous choisir / À propos (Rapidité, Simplicité, Support, Prix transparents) */}
        <WhyUs currentLang={currentLang} />

        {/* 5. Galerie Photos & Vidéos authentiques (Locaux à Oran, Visas délivrés, Billetterie) */}
        <AgencyMediaShowcase
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 6. Foire Aux Questions (FAQ Accordéon) */}
        <FAQ currentLang={currentLang} />

        {/* 7. Formulaire de contact / Devis & Carte Google Maps */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* 8. Pied de page / Footer */}
      <Footer currentLang={currentLang} />

      {/* Bouton WhatsApp Flottant */}
      <WhatsAppFloat currentLang={currentLang} />

      {/* Modal Devis / Consultation */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
}
