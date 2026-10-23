import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { AgencyMediaShowcase } from './components/AgencyMediaShowcase';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { Language } from './types';
import { translations } from './data/translations';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'ar';
  
  try {
    // Detect browser / phone preferred language fresh on every visit
    const browserLangs = navigator.languages || [navigator.language || ''];
    for (const lang of browserLangs) {
      if (!lang) continue;
      const code = lang.toLowerCase();
      if (code.startsWith('ar')) return 'ar';
      if (code.startsWith('fr')) return 'fr';
      if (code.startsWith('en')) return 'en';
    }
  } catch (e) {
    // Fallback gracefully on restricted environments
  }

  // Fallback to Arabic ('ar') as requested by client
  return 'ar';
};

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(getInitialLanguage);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  // Ensure no legacy storage or service workers keep stale cached versions
  useEffect(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {}

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      }).catch(() => {});
    }
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
      }).catch(() => {});
    }
  }, []);

  // Synchronize document language, text direction (RTL for Arabic), and SEO metadata
  useEffect(() => {
    const isRtl = currentLang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // Update page title and meta description dynamically
    const t = translations[currentLang];
    if (t?.meta?.title) {
      document.title = t.meta.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && t.meta.description) {
        metaDesc.setAttribute('content', t.meta.description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', t.meta.title);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && t.meta.description) {
        ogDesc.setAttribute('content', t.meta.description);
      }

      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) {
        ogLocale.setAttribute('content', currentLang === 'ar' ? 'ar_DZ' : 'fr_FR');
      }
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
        onLanguageChange={handleLanguageChange}
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

        {/* 2.5 Section de confiance & Proximité (Agence physique Oran, Avis Google, Contact direct) */}
        <Trust
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* 3. Services (Grille 4 services épurés) */}
        <Services
          currentLang={currentLang}
          onNavigateToSection={handleNavigateToSection}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 4. Pourquoi nous choisir / À propos (Rapidité, Simplicité, Support, Prix transparents) */}
        <WhyUs 
          currentLang={currentLang} 
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 5. Galerie Photos & Vidéos authentiques (Locaux à Oran, Visas délivrés, Billetterie) */}
        <AgencyMediaShowcase
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 6. Foire Aux Questions (FAQ Accordéon) */}
        <FAQ 
          currentLang={currentLang} 
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 7. Formulaire de contact / Devis & Carte Google Maps */}
        <ContactSection currentLang={currentLang} />

        {/* 8. Témoignages & Avis Clients réels (Juste avant le Footer) */}
        <Testimonials
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />
      </main>

      {/* 9. Pied de page / Footer */}
      <Footer 
        currentLang={currentLang} 
        onOpenLegalModal={() => setIsLegalModalOpen(true)}
      />

      {/* Bouton WhatsApp Flottant sur Desktop */}
      <WhatsAppFloat currentLang={currentLang} />

      {/* Barre CTA Fixe Mobile (WhatsApp / Appeler / Prendre RDV) */}
      <MobileBottomBar
        currentLang={currentLang}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Modal Devis / Consultation */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        currentLang={currentLang}
      />

      {/* Modal Mentions Légales & Politique de Confidentialité */}
      <LegalNoticeModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
}
