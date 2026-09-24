import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, 
  Maximize2, 
  X, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Camera, 
  Video, 
  Clock, 
  ExternalLink,
  Sparkles,
  Layers
} from 'lucide-react';
import { imagery } from '../data/imagery';
import { siteConfig } from '../data/config';
import { Reveal } from './ScrollReveal';
import { Language } from '../types';

interface AgencyMediaShowcaseProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export type MediaCategory = 'all' | 'agency' | 'visas' | 'video';

export interface GalleryMediaItem {
  id: string;
  type: 'photo' | 'video';
  imageUrl: string;
  youtubeId?: string;
  titleFr: string;
  titleAr: string;
  subtitleFr: string;
  subtitleAr: string;
  badgeFr: string;
  badgeAr: string;
  locationFr: string;
  locationAr: string;
  descriptionFr: string;
  descriptionAr: string;
  highlightFr: string;
  highlightAr: string;
  category: 'agency' | 'visas' | 'video';
}

export const AgencyMediaShowcase: React.FC<AgencyMediaShowcaseProps> = ({
  currentLang,
  onOpenConsultation
}) => {
  const [activeFilter, setActiveFilter] = useState<MediaCategory>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [inlineVideoPlaying, setInlineVideoPlaying] = useState<boolean>(false);

  // Touch gesture tracking for mobile swipe in lightbox
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 100% Authentic Project Assets (Existing files only, zero external/generated images)
  const mediaItems: GalleryMediaItem[] = [
    {
      id: "storefront-oran",
      type: "photo",
      imageUrl: imagery.realAgency.storefrontOran, // "/images/Exterieur.png"
      titleFr: "Façade officielle de l'agence Visado Service à Oran",
      titleAr: "الواجهة الخارجية الرسمية لوكالة Visado Service بوهران",
      subtitleFr: "14, Rue Hadri Mohamed • Centre-ville d'Oran",
      subtitleAr: "14، شارع حضري محمد • وسط مدينة وهران",
      badgeFr: "Siège Officiel",
      badgeAr: "المقر الرئيسي",
      locationFr: "14, Rue Hadri Mohamed, Oran, Algérie",
      locationAr: "14، شارع حضري محمد، وهران، الجزائر",
      descriptionFr: "Notre agence physique avec enseigne officielle pignon sur rue. Située au cœur d'Oran, nous accueillons nos clients dans un cadre professionnel et sécurisé pour l'ensemble des démarches de visa et de voyage.",
      descriptionAr: "المقر الميداني لوكالتنا بلافتة رسمية واضحة في قلب مدينة وهران. نستقبلكم في أجواء راقية وآمنة لمعالجة كافة ملفات التأشيرات والأسفار الدولية.",
      highlightFr: "Agence avec pignon sur rue",
      highlightAr: "وكالة معتمدة وواجهة ميدانية",
      category: "agency"
    },
    {
      id: "office-tour-video",
      type: "video",
      imageUrl: imagery.youtubeVideos.officeTour.thumbnail, // "https://img.youtube.com/vi/30VIItLvrUI/hqdefault.jpg"
      youtubeId: imagery.youtubeVideos.officeTour.id, // "30VIItLvrUI"
      titleFr: "Visite immersive des locaux en vidéo",
      titleAr: "جولة فيديو استطلاعية داخل مكاتب الوكالة",
      subtitleFr: "Visite guidée authentique • 0:45 min",
      subtitleAr: "جولة مرئية حقيقية • 0:45 د",
      badgeFr: "Vidéo des Locaux",
      badgeAr: "فيديو المقر",
      locationFr: "Visado Service • Oran",
      locationAr: "Visado Service • وهران",
      descriptionFr: "Découvrez en vidéo réelle nos postes de travail informatisés, notre espace d'accueil soigné et les drapeaux officiels des destinations partenaires (Espagne, Canada, etc.).",
      descriptionAr: "شاهد عبر الفيديو التجهيزات المكتبية والإعلامية الحديثة وفضاء استقبال الزبائن وأعلام الوجهات الرسمية المعتمدة (إسبانيا، كندا وغيرها).",
      highlightFr: "Enregistré dans nos bureaux",
      highlightAr: "مصور داخل مكاتبنا بوهران",
      category: "video"
    },
    {
      id: "agency-interior",
      type: "photo",
      imageUrl: imagery.realAgency.agencyInterior, // "/images/interieur.png"
      titleFr: "Espace d'accueil & Bureaux de consultation",
      titleAr: "فضاء الاستقبال ومكاتب الاستشارة الفردية",
      subtitleFr: "Postes de traitement & Analyse confidentielle des dossiers",
      subtitleAr: "مكاتب دراسة الملفات والتدقيق في سرية تامة",
      badgeFr: "Espace Client",
      badgeAr: "فضاء العملاء",
      locationFr: "Bureaux Visado Service • Oran",
      locationAr: "مكاتب Visado Service • وهران",
      descriptionFr: "Un espace de travail moderne et confidentiel où chaque voyageur est conseillé individuellement selon son profil (salarié, commerçant, fonctionnaire, étudiant).",
      descriptionAr: "فضاء استشاري منظم ومكيف يضمن دراسة دقيقة لكل ملف بشكل فردي بحسب صفة كل متقدم (أجير، تاجر، موظف، طالب).",
      highlightFr: "Confidentialité & Confort",
      highlightAr: "سرية تامة ومتابعة فردية",
      category: "agency"
    },
    {
      id: "visa-schengen-proof",
      type: "photo",
      imageUrl: imagery.realAgency.schengenVisaPassport, // "/images/IMG_0070.JPG"
      titleFr: "Preuve de Visa Schengen Espagne délivré & Carte Visado",
      titleAr: "تأشيرة شنغن إسبانيا صادرة وجواز سفر الزبون مع بطاقة الوكالة",
      subtitleFr: "Consulat Général d'Espagne • BLS Oran",
      subtitleAr: "القنصلية العامة لإسبانيا بوهران • مركز BLS",
      badgeFr: "Visa Accordé",
      badgeAr: "تأشيرة مقبولة",
      locationFr: "Consulat d'Espagne • Traitement Visado Service",
      locationAr: "قنصلية إسبانيا • معالجة Visado Service",
      descriptionFr: "Exemple authentique de passeport d'un client avec vignette de visa Schengen Espagne délivrée, photographiée avec la carte de visite officielle de Visado Service.",
      descriptionAr: "توثيق ميداني حقيقي لجواز سفر أحد زبائننا حاملاً تأشيرة شنغن إسبانيا السارية مع بطاقة العمل الرسمية لوكالة Visado Service.",
      highlightFr: "Preuve concrète de résultat",
      highlightAr: "دليل ونتيجة ملموسة لزبائننا",
      category: "visas"
    },
    {
      id: "bls-appointment-file",
      type: "photo",
      imageUrl: imagery.realAgency.blsAppointment, // "/images/rdv.png"
      titleFr: "Dossier physique & Confirmation de Rendez-Vous BLS",
      titleAr: "الملف الورقي واستمارة الموعد الرسمي بمركز BLS",
      subtitleFr: "Centre BLS International Oran • Espagne",
      subtitleAr: "مركز BLS الدولي بوهران • تأشيرة إسبانيا",
      badgeFr: "Dossier BLS",
      badgeAr: "ملف موعد BLS",
      locationFr: "Centre BLS International • Oran",
      locationAr: "مركز BLS International • وهران",
      descriptionFr: "Préparation rigoureuse et vérification méticuleuse de chaque pièce justificative avant le dépôt officiel au centre BLS International Espagne.",
      descriptionAr: "إعداد شامل ودقيق لجميع الوثائق المطلوبة ومطابقتها قبل التوجه للإيداع الرسمي بمركز BLS International إسبانيا.",
      highlightFr: "Dossier 100% conforme",
      highlightAr: "ملف مطابق للشروط القنصلية",
      category: "visas"
    },
    {
      id: "billetterie-officielle",
      type: "photo",
      imageUrl: imagery.realAgency.ticketingPoster, // "/images/visado_billetterie_officielle.jpg"
      titleFr: "Billetterie officielle Air Algérie & Vols Internationaux",
      titleAr: "حجز تذاكر الطيران الرسمية مع الخطوط الجوية الجزائرية والشركات العالمية",
      subtitleFr: "Vols confirmés • Réservations d'hôtels • Assurances",
      subtitleAr: "رحلات مؤكدة • حجوزات فندقية • تأمين سفر",
      badgeFr: "Billetterie & Vols",
      badgeAr: "حجز تذاكر الطيران",
      locationFr: "Visado Service • Agréé Billetterie",
      locationAr: "Visado Service • حجز معتمد",
      descriptionFr: "Émission instantanée de billets d'avion garantis (Air Algérie, Air France, etc.), réservations de vols pour dossiers de visas et assurances voyage internationales.",
      descriptionAr: "إصدار فوري لتذاكر الطيران المعتمدة (الخطوط الجوية الجزائرية والشركات الدولية)، وحجوزات الطيران المؤكدة للملفات وتأمين السفر.",
      highlightFr: "Partenariats IATA & Compagnies",
      highlightAr: "تأكيدات فورية وأسعار مدروسة",
      category: "agency"
    }
  ];

  // Filtered list
  const filteredItems = mediaItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'video') return item.type === 'video';
    return item.category === activeFilter;
  });

  // Lightbox navigation helpers
  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    setInlineVideoPlaying(false);
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const handleNextPhoto = useCallback(() => {
    setActiveLightboxIndex(prev => {
      if (prev === null) return null;
      return (prev + 1) % mediaItems.length;
    });
  }, [mediaItems.length]);

  const handlePrevPhoto = useCallback(() => {
    setActiveLightboxIndex(prev => {
      if (prev === null) return null;
      return (prev - 1 + mediaItems.length) % mediaItems.length;
    });
  }, [mediaItems.length]);

  // Keyboard navigation support: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentLang === 'ar') {
          handlePrevPhoto();
        } else {
          handleNextPhoto();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentLang === 'ar') {
          handleNextPhoto();
        } else {
          handlePrevPhoto();
        }
      }
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, currentLang, handleCloseLightbox, handleNextPhoto, handlePrevPhoto]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;

    // Minimum swipe threshold
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swiped left
        if (currentLang === 'ar') {
          handlePrevPhoto();
        } else {
          handleNextPhoto();
        }
      } else {
        // Swiped right
        if (currentLang === 'ar') {
          handleNextPhoto();
        } else {
          handlePrevPhoto();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentLightboxItem = activeLightboxIndex !== null ? mediaItems[activeLightboxIndex] : null;

  return (
    <section id="media-gallery" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle luxury background ambience */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
                <Camera className="w-3.5 h-3.5" />
                <span>{currentLang === 'ar' ? 'معرض الوكالة والتوثيق الميداني' : 'Galerie Immersive & Preuves Réelles'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentLang === 'ar' 
                  ? 'وكالة حقيقية ومقر معتمد في قلب وهران' 
                  : "Une agence physique et transparente au cœur d'Oran"}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentLang === 'ar'
                  ? 'صور وفيديوهات حقيقية 100% توثق مقرنا بالشارع، مكاتب الاستقبال الفردية، ملفات المواعيد المنجزة ونماذج التأشيرات الصادرة.'
                  : "Explorez nos véritables locaux au 14 Rue Hadri Mohamed, nos bureaux d'accueil, nos dossiers BLS finalisés et nos preuves de visas obtenus."}
              </p>

              {/* Physical trust indicators */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1.5 text-blue-800 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="font-semibold">14, Rue Hadri Mohamed, Oran</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-800 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{currentLang === 'ar' ? '100% صور ومقاطع حقيقية' : '100% Photos réelles de l\'agence'}</span>
                </span>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs self-start lg:self-auto overflow-x-auto max-w-full" role="tablist" aria-label="Filtres de la galerie">
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'all'}
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {currentLang === 'ar' ? 'كافة الوسائط (6)' : 'Tous les visuels (6)'}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'agency'}
                onClick={() => setActiveFilter('agency')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  activeFilter === 'agency'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{currentLang === 'ar' ? 'المقر والواجهة (3)' : 'Locaux & Agence (3)'}</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'visas'}
                onClick={() => setActiveFilter('visas')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  activeFilter === 'visas'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{currentLang === 'ar' ? 'التأشيرات والملفات (2)' : 'Visas & Dossiers (2)'}</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'video'}
                onClick={() => setActiveFilter('video')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  activeFilter === 'video'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Play className="w-3 h-3 fill-current" aria-hidden="true" />
                <span>{currentLang === 'ar' ? 'فيديو المقر (1)' : 'Vidéo Agence (1)'}</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Editorial Bento Grid (Magazine Layout) */}
        {activeFilter === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            
            {/* 1. HERO CARD (Grande image principale - Façade extérieure) */}
            <Reveal direction="up" delay={0} className="lg:col-span-7 lg:row-span-2">
              <div 
                onClick={() => handleOpenLightbox(0)}
                className="group relative h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 cursor-pointer flex flex-col justify-end bg-slate-950"
              >
                {/* Real Image with subtle editorial zoom */}
                <img
                  src={mediaItems[0].imageUrl}
                  alt={currentLang === 'ar' ? mediaItems[0].titleAr : mediaItems[0].titleFr}
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10 group-hover:via-slate-950/40 transition-colors" />

                {/* Top Badges */}
                <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ar' ? mediaItems[0].badgeAr : mediaItems[0].badgeFr}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-100 border border-white/20 backdrop-blur-md hidden sm:inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>14 Rue Hadri Mohamed, Oran</span>
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Editorial Content */}
                <div className="relative z-10 p-5 sm:p-7 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>{currentLang === 'ar' ? mediaItems[0].highlightAr : mediaItems[0].highlightFr}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug group-hover:text-blue-100 transition-colors">
                    {currentLang === 'ar' ? mediaItems[0].titleAr : mediaItems[0].titleFr}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed max-w-xl">
                    {currentLang === 'ar' ? mediaItems[0].descriptionAr : mediaItems[0].descriptionFr}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{currentLang === 'ar' ? mediaItems[0].locationAr : mediaItems[0].locationFr}</span>
                    </span>
                    <span className="font-semibold text-blue-300 flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      <span>{currentLang === 'ar' ? 'عرض الصورة بالحجم الكامل' : 'Agrandir la photo'}</span>
                      <span className="rtl:rotate-180">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2. VIDEO CARD (Courte vidéo existante des locaux - Tour immersif) */}
            <Reveal direction="up" delay={60} className="lg:col-span-5">
              <div className="group relative h-full min-h-[250px] sm:min-h-[280px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 bg-slate-950 flex flex-col justify-between">
                {inlineVideoPlaying ? (
                  <div className="relative w-full h-full min-h-[280px] bg-black flex items-center justify-center">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${mediaItems[1].youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                      title={currentLang === 'ar' ? mediaItems[1].titleAr : mediaItems[1].titleFr}
                      className="w-full h-full min-h-[280px] border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setInlineVideoPlaying(false)}
                      className="absolute top-3 right-3 z-20 px-3 py-1 bg-black/80 hover:bg-black text-white text-xs font-semibold rounded-full border border-white/20 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ar' ? 'إغلاق الفيديو' : 'Fermer'}</span>
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => handleOpenLightbox(1)}
                    className="relative w-full h-full cursor-pointer flex flex-col justify-between p-5 sm:p-6"
                  >
                    {/* Video thumbnail background */}
                    <img
                      src={mediaItems[1].imageUrl}
                      alt={currentLang === 'ar' ? mediaItems[1].titleAr : mediaItems[1].titleFr}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />

                    {/* Top bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-md flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5" />
                        <span>{currentLang === 'ar' ? mediaItems[1].badgeAr : mediaItems[1].badgeFr}</span>
                      </span>

                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-white border border-white/20 backdrop-blur-xs flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>0:45 min</span>
                      </span>
                    </div>

                    {/* Center Play Button with radar pulse */}
                    <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center">
                      <div className="relative">
                        <div className="absolute -inset-2 rounded-full bg-blue-500/30 animate-ping opacity-60 pointer-events-none" />
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 ml-0.5 fill-current" />
                        </div>
                      </div>
                      <span className="mt-2.5 text-xs font-bold tracking-wide uppercase text-white bg-slate-900/70 px-3 py-0.5 rounded-full backdrop-blur-xs border border-white/15">
                        {currentLang === 'ar' ? 'تشغيل الفيديو' : 'Lancer la visite'}
                      </span>
                    </div>

                    {/* Bottom Title */}
                    <div className="relative z-10">
                      <h4 className="text-base sm:text-lg font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                        {currentLang === 'ar' ? mediaItems[1].titleAr : mediaItems[1].titleFr}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                        {currentLang === 'ar' ? mediaItems[1].subtitleAr : mediaItems[1].subtitleFr}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* 3. INTERIOR AGENCY (Bureaux de consultation) */}
            <Reveal direction="up" delay={80} className="lg:col-span-5">
              <div 
                onClick={() => handleOpenLightbox(2)}
                className="group relative h-full min-h-[250px] sm:min-h-[280px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-end bg-slate-950 p-5 sm:p-6"
              >
                <img
                  src={mediaItems[2].imageUrl}
                  alt={currentLang === 'ar' ? mediaItems[2].titleAr : mediaItems[2].titleFr}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10" />

                {/* Top Badge */}
                <div className="absolute top-4 sm:top-5 inset-x-4 sm:inset-x-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 shadow-md backdrop-blur-xs">
                    {currentLang === 'ar' ? mediaItems[2].badgeAr : mediaItems[2].badgeFr}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-[11px] font-semibold text-blue-300 block mb-1">
                    {currentLang === 'ar' ? mediaItems[2].subtitleAr : mediaItems[2].subtitleFr}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                    {currentLang === 'ar' ? mediaItems[2].titleAr : mediaItems[2].titleFr}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {currentLang === 'ar' ? mediaItems[2].descriptionAr : mediaItems[2].descriptionFr}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 4. VISA SCHENGEN PROOF (Preuve tangible avec vignette et carte de visite) */}
            <Reveal direction="up" delay={100} className="lg:col-span-4">
              <div 
                onClick={() => handleOpenLightbox(3)}
                className="group relative h-full min-h-[240px] sm:min-h-[260px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 cursor-pointer flex flex-col justify-end bg-slate-950 p-5"
              >
                <img
                  src={mediaItems[3].imageUrl}
                  alt={currentLang === 'ar' ? mediaItems[3].titleAr : mediaItems[3].titleFr}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ar' ? mediaItems[3].badgeAr : mediaItems[3].badgeFr}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {currentLang === 'ar' ? mediaItems[3].titleAr : mediaItems[3].titleFr}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {currentLang === 'ar' ? mediaItems[3].subtitleAr : mediaItems[3].subtitleFr}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 5. BLS APPOINTMENT DOSSIER (Dossier & Convocation BLS) */}
            <Reveal direction="up" delay={120} className="lg:col-span-4">
              <div 
                onClick={() => handleOpenLightbox(4)}
                className="group relative h-full min-h-[240px] sm:min-h-[260px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-end bg-slate-950 p-5"
              >
                <img
                  src={mediaItems[4].imageUrl}
                  alt={currentLang === 'ar' ? mediaItems[4].titleAr : mediaItems[4].titleFr}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-700 text-white shadow-md">
                    {currentLang === 'ar' ? mediaItems[4].badgeAr : mediaItems[4].badgeFr}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                    {currentLang === 'ar' ? mediaItems[4].titleAr : mediaItems[4].titleFr}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {currentLang === 'ar' ? mediaItems[4].subtitleAr : mediaItems[4].subtitleFr}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 6. BILLETTERIE & VOLS (Affiche officielle Air Algérie & Compagnies) */}
            <Reveal direction="up" delay={140} className="lg:col-span-4">
              <div 
                onClick={() => handleOpenLightbox(5)}
                className="group relative h-full min-h-[240px] sm:min-h-[260px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 cursor-pointer flex flex-col justify-end bg-slate-950 p-5"
              >
                <img
                  src={mediaItems[5].imageUrl}
                  alt={currentLang === 'ar' ? mediaItems[5].titleAr : mediaItems[5].titleFr}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white shadow-md">
                    {currentLang === 'ar' ? mediaItems[5].badgeAr : mediaItems[5].badgeFr}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {currentLang === 'ar' ? mediaItems[5].titleAr : mediaItems[5].titleFr}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {currentLang === 'ar' ? mediaItems[5].subtitleAr : mediaItems[5].subtitleFr}
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        ) : (
          /* Filtered Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => {
              const originalIndex = mediaItems.findIndex(m => m.id === item.id);

              return (
                <Reveal key={item.id} direction="up" delay={50}>
                  <div
                    onClick={() => handleOpenLightbox(originalIndex)}
                    className="group relative min-h-[300px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-end bg-slate-950 p-5 sm:p-6"
                  >
                    <img
                      src={item.imageUrl}
                      alt={currentLang === 'ar' ? item.titleAr : item.titleFr}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/15" />

                    <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md flex items-center gap-1.5">
                        {item.type === 'video' ? <Play className="w-3 h-3 fill-current" /> : <Camera className="w-3 h-3" />}
                        <span>{currentLang === 'ar' ? item.badgeAr : item.badgeFr}</span>
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <span className="text-xs font-semibold text-blue-300 block mb-1">
                        {currentLang === 'ar' ? item.subtitleAr : item.subtitleFr}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                        {currentLang === 'ar' ? item.titleAr : item.titleFr}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
                        {currentLang === 'ar' ? item.descriptionAr : item.descriptionFr}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Physical Agency Callout Banner & Direct Booking */}
        <Reveal direction="up" delay={80}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>{currentLang === 'ar' ? 'مقرنا مفتوح بوهران' : 'Venez nous rencontrer à Oran'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  {currentLang === 'ar'
                    ? '14، شارع حضري محمد، وهران — استشارات مباشرة دون موعد'
                    : '14, Rue Hadri Mohamed, Oran — Accueil direct sans rendez-vous'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentLang === 'ar'
                    ? 'مستشارونا في انتظاركم لمراجعة وثائقكم، إعداد ملفات BLS Spain، حجز المواعيد الرسمية وإصدار تذاكر الطيران على الفور.'
                    : 'Nos conseillers sont disponibles du Samedi au Jeudi (09h00 - 17h00) pour auditer vos pièces justificatives, réserver vos créneaux officiels BLS et émettre vos billets d\'avion.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-all shadow-md active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je souhaite venir à votre agence au 14 Rue Hadri Mohamed à Oran.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <span>{currentLang === 'ar' ? 'طلب دراسة ملف' : 'Demander une étude'}</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ========================================================================= */}
      {/* PREMIUM FULLSCREEN LIGHTBOX WITH KEYBOARD, MOBILE SWIPE & THUMBNAIL STRIP */}
      {/* ========================================================================= */}
      {activeLightboxIndex !== null && currentLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none animate-fadeIn"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={currentLang === 'ar' ? currentLightboxItem.titleAr : currentLightboxItem.titleFr}
        >
          {/* Top Bar: Counter, Title, and Close Button */}
          <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 text-white shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                {currentLightboxItem.type === 'video' ? 'Vidéo' : 'Photo'} {activeLightboxIndex + 1} / {mediaItems.length}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden md:inline truncate max-w-md">
                {currentLang === 'ar' ? currentLightboxItem.titleAr : currentLightboxItem.titleFr}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[11px] text-slate-400 font-mono">
                {currentLang === 'ar' ? 'الأسهم للتنقل • Échap للإغلاق' : '← → pour naviguer • Échap pour fermer'}
              </span>

              <button
                onClick={handleCloseLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label={currentLang === 'ar' ? 'إغلاق المعرض' : 'Fermer'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Stage: Image or Video Display with Left / Right Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden min-h-[260px]">
            
            {/* Previous Button */}
            <button
              onClick={currentLang === 'ar' ? handleNextPhoto : handlePrevPhoto}
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xl group"
              aria-label={currentLang === 'ar' ? 'الصورة التالية' : 'Photo précédente'}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
            </button>

            {/* Media Content Container */}
            <div className="w-full h-full flex items-center justify-center p-1 sm:p-4">
              {currentLightboxItem.type === 'video' ? (
                <div className="w-full max-w-4xl aspect-video max-h-[68vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/20">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${currentLightboxItem.youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                    title={currentLang === 'ar' ? currentLightboxItem.titleAr : currentLightboxItem.titleFr}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative max-h-[68vh] sm:max-h-[72vh] max-w-5xl flex items-center justify-center">
                  <img
                    src={currentLightboxItem.imageUrl}
                    alt={currentLang === 'ar' ? currentLightboxItem.titleAr : currentLightboxItem.titleFr}
                    className="max-h-[65vh] sm:max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-300"
                  />
                </div>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={currentLang === 'ar' ? handlePrevPhoto : handleNextPhoto}
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xl group"
              aria-label={currentLang === 'ar' ? 'الصورة السابقة' : 'Photo suivante'}
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
            </button>
          </div>

          {/* Bottom Bar: Caption, Location, Action, and Interactive Thumbnail Strip */}
          <div className="pt-3 border-t border-white/10 shrink-0 space-y-3">
            
            {/* Metadata & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-white">
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-600 text-white">
                    {currentLang === 'ar' ? currentLightboxItem.badgeAr : currentLightboxItem.badgeFr}
                  </span>
                  <span className="text-xs text-blue-300 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{currentLang === 'ar' ? currentLightboxItem.locationAr : currentLightboxItem.locationFr}</span>
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white">
                  {currentLang === 'ar' ? currentLightboxItem.titleAr : currentLightboxItem.titleFr}
                </h4>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {currentLang === 'ar' ? currentLightboxItem.descriptionAr : currentLightboxItem.descriptionFr}
                </p>
              </div>

              {/* Direct Quick Contact inside Lightbox */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-white/20 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je regarde la galerie photos de votre agence et je souhaite prendre un rendez-vous.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-hide">
              {mediaItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeLightboxIndex === idx
                      ? 'border-blue-500 scale-105 shadow-lg ring-2 ring-blue-400/50'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Aller à ${item.titleFr}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.titleFr}
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-3 h-3 text-white fill-current" />
                    </div>
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>
      )}

    </section>
  );
};
