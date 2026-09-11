import React, { useState, useEffect } from 'react';
import { Play, Pause, Maximize2, ExternalLink, X, MapPin, CheckCircle, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { imagery } from '../data/imagery';
import { siteConfig } from '../data/config';
import { translations } from '../data/translations';
import { Language } from '../types';

interface AgencyMediaShowcaseProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

interface VideoReel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  thumbnail: string;
  tag: string;
  tiktokUrl: string;
}

interface PhotoItem {
  id: string;
  title: string;
  category: 'visas' | 'agency' | 'ticketing';
  location: string;
  description: string;
  imageUrl: string;
  verifiedLabel: string;
}

export const AgencyMediaShowcase: React.FC<AgencyMediaShowcaseProps> = ({
  currentLang,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos'>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoReel | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [activePhotoModal, setActivePhotoModal] = useState<PhotoItem | null>(null);

  const t = translations[currentLang];

  // The 3 authentic videos from the agency
  const videoReels: VideoReel[] = [
    {
      id: "reel-1",
      title: currentLang === 'ar' 
        ? "معالجة الملفات وتأكيد مواعيد BLS" 
        : currentLang === 'en' 
        ? "File Processing & BLS Appointment Confirmation"
        : "Traitement de Dossier & Confirmation de Rendez-vous BLS",
      subtitle: currentLang === 'ar'
        ? "مراجعة دقيقة لملفات تأشيرة إسبانيا شنغن والمطبوعات الرسمية"
        : currentLang === 'en'
        ? "Rigorous verification of BLS Spain forms and appointment confirmation"
        : "Vérification rigoureuse des formulaires officiels BLS Spain et confirmation de dépôt",
      description: currentLang === 'ar'
        ? "مشهد مصور داخل وكالتنا يوضح إعداد ملفات مواعيد BLS إسبانيا مع الأعلام الرسمية واللافتة المضيئة لوكالة Visado Service."
        : currentLang === 'en'
        ? "Authentic footage inside our Oran office showing official BLS Spain appointment slips, the executive desk with flags, and the illuminated 3D Visado sign."
        : "Séquence filmée dans nos bureaux montrant les fiches de confirmation BLS Spain, le bureau avec les drapeaux officiels et l'enseigne 3D rétroéclairée de Visado Service.",
      duration: "0:15",
      thumbnail: imagery.realAgency.appointmentFiles,
      tag: "BLS Spain • Dossiers",
      tiktokUrl: siteConfig.tiktokUrl
    },
    {
      id: "reel-2",
      title: currentLang === 'ar' 
        ? "جولة داخلية في مكاتبنا بوهران" 
        : currentLang === 'en' 
        ? "Interior Walkthrough of our Oran Office"
        : "Visite Intérieure de nos Bureaux à Oran",
      subtitle: currentLang === 'ar'
        ? "فضاء استقبال عصري ومريح ومكاتب استشارة متكاملة"
        : currentLang === 'en'
        ? "Modern consulting workstations, elegant chandeliers and welcoming client reception"
        : "Espaces de consultation modernes, luminaires design et mur décoratif des capitales",
      description: currentLang === 'ar'
        ? "اكتشفوا الفضاء المخصص لاستقبالكم في 14 شارع النقيب حادري محمد: تجهيزات حديثة، راحة تامة وقائمة شاملة لكافة الخدمات المقدمة."
        : currentLang === 'en'
        ? "Experience the welcoming atmosphere at 14 Rue Capitaine Hadri Mohamed: modern desks, complete comfort, and full list of visa services on entrance decals."
        : "Découvrez l'espace d'accueil au 14 Rue Capitaine Hadri Mohamed : postes de travail informatisés, confort soigné et vitrophanie détaillée de nos prestations.",
      duration: "0:18",
      thumbnail: imagery.realAgency.agencyInterior,
      tag: "Visite Bureaux • Oran",
      tiktokUrl: siteConfig.tiktokUrl
    },
    {
      id: "reel-3",
      title: currentLang === 'ar' 
        ? "الوصول ومدخل الوكالة بشارع حادري محمد" 
        : currentLang === 'en' 
        ? "Street Arrival & Agency Entrance"
        : "Arrivée & Immersion à l'Agence (14 Rue Hadri Mohamed)",
      subtitle: currentLang === 'ar'
        ? "من واجهة الشارع الحجرية مباشرة إلى مكتب الاستقبال وخريطة العالم المضيئة"
        : currentLang === 'en'
        ? "From the sunny stone storefront to our front desk and golden illuminated world map"
        : "De la façade extérieure en pierre jusqu'à notre planisphère doré lumineux",
      description: currentLang === 'ar'
        ? "مقطع يوثق سهولة الوصول إلى الوكالة بوسط وهران مع مدخل أنيق وموظفين جاهزين لإرشادكم ومرافقتكم في كل الإجراءات."
        : currentLang === 'en'
        ? "Walk straight from the street into Visado Service Oran: recognizable storefront decals, easy access steps, and warm team greeting."
        : "Immersion directe depuis la rue dans l'agence : façade en pierre claire, vitrophanies distinctives, accueil chaleureux et grand planisphère mural.",
      duration: "0:22",
      thumbnail: imagery.realAgency.storefrontOran,
      tag: "Façade • Immersion",
      tiktokUrl: siteConfig.tiktokUrl
    }
  ];

  // The authentic photographs
  const photos: PhotoItem[] = [
    {
      id: "photo-1",
      title: currentLang === 'ar' ? "تأشيرة شنغن إسبانيا صادرة وجواز سفر" : currentLang === 'en' ? "Approved Spanish Schengen Visa & Passport" : "Visa Schengen Espagne Délivré & Passeport",
      category: "visas",
      location: "Visado Service • Oran",
      description: currentLang === 'ar' 
        ? "جواز سفر حقيقي بتأشيرة شنغن إسبانيا سارية وأختام المطار، مع بطاقة العمل الرسمية لوكالة Visado Service."
        : currentLang === 'en'
        ? "Real passport with approved Spanish Schengen visa sticker and entry/exit stamps, presented with the official Visado Service business card."
        : "Passeport réel avec vignette visa Schengen Espagne officielle, cachets aéroportuaires et carte de visite Visado Service.",
      imageUrl: imagery.realAgency.schengenVisaPassport,
      verifiedLabel: "Visa Délivré • Preuve de Rigueur"
    },
    {
      id: "photo-2",
      title: currentLang === 'ar' ? "ملفات ومواعيد BLS إسبانيا الرسمية" : currentLang === 'en' ? "Official BLS Spain Appointment Letters" : "Dossiers & Mises en Forme BLS Espagne",
      category: "visas",
      location: "Bureau de Consultation • Oran",
      description: currentLang === 'ar'
        ? "تأكيدات حجز المواعيد الرسمية لمركز BLS إسبانيا مع الأعلام الوطنية والأوروبية على مكتب العمل."
        : currentLang === 'en'
        ? "Official appointment confirmation slips for BLS Spain application center with national Algerian and European flags on consulting desk."
        : "Confirmations officielles de rendez-vous BLS Spain soigneusement reliées et vérifiées sur le bureau de consultation.",
      imageUrl: imagery.realAgency.appointmentFiles,
      verifiedLabel: "Rendez-vous BLS • Traitement Conforme"
    },
    {
      id: "photo-3",
      title: currentLang === 'ar' ? "فضاء الاستقبال وخريطة العالم المذهبة" : currentLang === 'en' ? "Consultation Lounge & Golden World Map" : "Espace d'Accueil & Planisphère Doré",
      category: "agency",
      location: "14 Rue Capitaine Hadri Mohamed, Oran",
      description: currentLang === 'ar'
        ? "منظر داخلي للمكتب الرئيسي مع الجدار الأزرق الملكي، خريطة العالم المضيئة، والمكاتب المجهزة للمستشارين."
        : currentLang === 'en'
        ? "Interior view of the main consulting room featuring the royal blue accent wall, illuminated golden world map and modern advisor desks."
        : "Vue intérieure de la salle de consultation principale : mur bleu nuit, planisphère mural rétroéclairé et bureaux équipés.",
      imageUrl: imagery.realAgency.agencyInterior,
      verifiedLabel: "Locaux Réels • Oran Centre"
    },
    {
      id: "photo-4",
      title: currentLang === 'ar' ? "الواجهة الخارجية وموقع الوكالة" : currentLang === 'en' ? "Agency Storefront & Entrance in Oran" : "Façade Extérieure & Entrée de l'Agence",
      category: "agency",
      location: "14 Rue Capitaine Hadri Mohamed, Oran 31000",
      description: currentLang === 'ar'
        ? "واجهة الوكالة بواجهة حجرية مميزة وواجهات زجاجية تعرض كافة خدمات التأشيرة، لتسهيل وصول الزبائن الكرام."
        : currentLang === 'en'
        ? "Stone facade and glass entrance door with clear decals of all visa services to guide visiting clients effortlessly in Oran."
        : "Façade en pierre appareillée et porte vitrée affichant le détail des prestations pour accueillir les voyageurs à Oran.",
      imageUrl: imagery.realAgency.storefrontOran,
      verifiedLabel: "Adresse Officielle • 14 Rue Hadri Mohamed"
    },
    {
      id: "photo-5",
      title: currentLang === 'ar' ? "ملصق حجز تذاكر الطيران الدولية" : currentLang === 'en' ? "International Flight Ticketing Poster" : "Affiche Billetterie & Vols Internationaux",
      category: "ticketing",
      location: "Partenariats Air Algérie & Air France",
      description: currentLang === 'ar'
        ? "ملصق وكالتنا لحجوزات الطيران نحو كافة دول العالم مع عروض الخطوط الجوية الجزائرية والخطوط الفرنسية عبر الرقم 0557 42 67 84."
        : currentLang === 'en'
        ? "Official promotional poster for worldwide airline ticketing featuring best offers with Air Algérie and Air France (Direct line: 0557 42 67 84)."
        : "Affiche officielle de notre service billetterie internationale : vols toutes destinations, Air Algérie et Air France, assistance directe au 0557 42 67 84.",
      imageUrl: imagery.realAgency.ticketingPoster,
      verifiedLabel: "Billetterie • 0557 42 67 84"
    }
  ];

  // Video progress animation when modal is active
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeVideoModal && isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [activeVideoModal, isPlaying]);

  const handleOpenVideo = (reel: VideoReel) => {
    setActiveVideoModal(reel);
    setVideoProgress(0);
    setIsPlaying(true);
  };

  return (
    <section id="media-gallery" className="py-24 sm:py-32 bg-[#051322] relative overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0B2545]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C7A76C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C7A76C]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-semibold">
                {currentLang === 'ar' ? 'شفافية وتوثيق ميداني' : currentLang === 'en' ? 'AUTHENTICITY & REAL FOOTAGE' : 'IMMERSION & TRANSPARENCE'}
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
              {currentLang === 'ar' ? 'وكالتنا بالصور والفيديو' : currentLang === 'en' ? 'Our Agency in Photos & Videos' : "L'Agence en Images & Vidéos"}
            </h2>
            <p className="text-sm sm:text-base text-[#E9ECEF]/75 font-light mt-3 max-w-2xl leading-relaxed">
              {currentLang === 'ar'
                ? 'استكشفوا أجواء العمل اليومية بمقرنا في وهران، الملفات المحضرة بدقة، ومواعيد BLS الرسمية المنجزة لزبائننا.'
                : currentLang === 'en'
                ? 'Discover our genuine Oran agency environment, official BLS Spain appointments processed, and the meticulous care behind every travel project.'
                : 'Découvrez les locaux de notre agence à Oran, les rendez-vous officiels BLS traités avec rigueur et les visas délivrés pour nos voyageurs.'}
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 p-1.5 luxury-glass rounded-sm border border-white/10 self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all ${
                activeTab === 'all' ? 'bg-[#C7A76C] text-[#071A2F] font-bold shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              {currentLang === 'ar' ? 'الكل' : currentLang === 'en' ? 'All' : 'Tous les médias'}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all flex items-center gap-1.5 ${
                activeTab === 'videos' ? 'bg-[#C7A76C] text-[#071A2F] font-bold shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{currentLang === 'ar' ? 'فيديوهات (3)' : currentLang === 'en' ? 'Videos (3)' : 'Vidéos (3)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all ${
                activeTab === 'photos' ? 'bg-[#C7A76C] text-[#071A2F] font-bold shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              {currentLang === 'ar' ? 'الصور الحقيقية' : currentLang === 'en' ? 'Real Photos' : 'Photos réelles'}
            </button>
          </div>
        </div>

        {/* 1. Video Reels Showcase (Vertical 9:16 & 4:3 Luxury Formats) */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C7A76C] animate-pulse" />
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white">
                  {currentLang === 'ar' ? 'جولات فيديو وتوثيق الملفات' : currentLang === 'en' ? 'Agency Reels & File Walkthroughs' : "Visites Vidéos & Traitement des Dossiers"}
                </h3>
              </div>
              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-[#C7A76C] hover:underline flex items-center gap-1.5 font-medium"
              >
                <span>TikTok @visadoservice</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {videoReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => handleOpenVideo(reel)}
                  className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/15 bg-[#0B2545]/40 hover:border-[#C7A76C]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-black/60"
                >
                  {/* Aspect Box */}
                  <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-[#071A2F]">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051322] via-[#051322]/40 to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full luxury-glass border border-white/15 text-[10px] uppercase tracking-wider text-white font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {reel.tag}
                      </span>
                      <span className="text-[11px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded-sm">
                        {reel.duration}
                      </span>
                    </div>

                    {/* Central Play Button Ripple */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#C7A76C] text-[#071A2F] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C7A76C] font-semibold block mb-1">
                        14 Rue Capitaine Hadri Mohamed
                      </span>
                      <h4 className="font-serif-luxury text-lg sm:text-xl text-white font-normal line-clamp-2 leading-snug mb-1">
                        {reel.title}
                      </h4>
                      <p className="text-xs text-[#E9ECEF]/75 font-light line-clamp-2">
                        {reel.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Authentic Photos Gallery */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C7A76C]" />
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white">
                  {currentLang === 'ar' ? 'صور حقيقية من الوكالة والتأشيرات' : currentLang === 'en' ? 'Real Agency & Approved Visa Photographs' : 'Photographies Réelles de nos Locaux & Visas'}
                </h3>
              </div>
              <span className="text-xs text-[#E9ECEF]/60 font-light hidden sm:inline">
                {currentLang === 'ar' ? 'توثيق حقيقي بدون تصاميم وهمية' : currentLang === 'en' ? 'Genuine documents and real Oran office' : 'Documents certifiés & agence à Oran'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhotoModal(photo)}
                  className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#0B2545]/30 hover:border-[#C7A76C]/50 transition-all duration-300"
                >
                  <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-sm bg-black/60 border border-white/15 text-[10px] uppercase tracking-wider text-[#C7A76C] font-semibold">
                        {photo.verifiedLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#E9ECEF]/70 mb-1">
                        <MapPin className="w-3 h-3 text-[#C7A76C]" />
                        <span>{photo.location}</span>
                      </div>
                      <h4 className="font-serif-luxury text-lg text-white font-normal mb-1">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-[#E9ECEF]/70 line-clamp-2 font-light">
                        {photo.description}
                      </p>
                    </div>

                    {/* Magnify icon */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Billetterie Callout with Authentic Poster Contact */}
        <div className="mt-16 p-8 sm:p-10 rounded-sm bg-gradient-to-r from-[#0B2545] to-[#071A2F] border border-[#C7A76C]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7A76C] font-bold">
                {currentLang === 'ar' ? 'خدمة حجز التذاكر الدولية' : currentLang === 'en' ? 'INTERNATIONAL FLIGHT TICKETING' : 'SERVICE BILLETTERIE INTERNATIONALE'}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-normal">
                {currentLang === 'ar' ? 'سافروا إلى كافة أنحاء العالم مع Visado Service' : currentLang === 'en' ? 'Travel Anywhere in the World with Visado Service' : 'Voyagez Partout dans le Monde avec Visado Service'}
              </h3>
              <p className="text-sm text-[#E9ECEF]/80 font-light max-w-2xl leading-relaxed">
                {currentLang === 'ar'
                  ? 'أفضل عروض الرحلات الجوية مع الخطوط الجوية الجزائرية والخطوط الفرنسية، استشارات شخصية وسرعة في الحجز. تواصلوا معنا مباشرة على 0557 42 67 84.'
                  : currentLang === 'en'
                  ? 'Competitive fares with Air Algérie and Air France, bespoke flight routing, and dedicated booking assistance. Direct line: 0557 42 67 84.'
                  : 'Meilleures offres de vols avec Air Algérie & Air France, conseils personnalisés et billetterie rapide toutes destinations. Réservations directes au 0557 42 67 84.'}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#E9ECEF]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C7A76C]" />
                  Air Algérie & Air France
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C7A76C]" />
                  Europe • Canada • Turquie • Moyen-Orient
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C7A76C]" />
                  Assistance immédiate
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="py-3.5 px-6 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-xs uppercase tracking-widest font-bold rounded-sm text-center shadow-lg transition-colors"
              >
                Appeler : {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Visado Service, je souhaite réserver un billet d'avion ou obtenir des informations de vol.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold rounded-sm text-center border border-white/20 transition-colors"
              >
                Billetterie WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* 3. Interactive Video Player Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl luxury-glass border border-white/20 rounded-sm shadow-2xl overflow-hidden">
            
            {/* Modal Top Bar */}
            <div className="p-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs uppercase tracking-widest text-[#C7A76C] font-semibold">
                  {activeVideoModal.tag}
                </span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Simulated Canvas / Player */}
            <div className="relative h-[380px] sm:h-[460px] bg-black overflow-hidden flex items-center justify-center group">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Real Video Overlay Scanline / Ambient Animation */}
              {isPlaying && (
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" />
              )}

              {/* Watermark in video */}
              <div className="absolute top-4 right-4 luxury-glass px-3 py-1 rounded-sm border border-white/10 text-xs text-white/90 font-mono flex items-center gap-1.5">
                <span>@visadoservice</span>
              </div>

              {/* Center Play / Pause trigger */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 rounded-full bg-black/60 hover:bg-[#C7A76C] text-white hover:text-[#071A2F] transition-all transform hover:scale-110"
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
              </button>

              {/* Audio Toggle */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 text-white/80 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Video Timeline Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div
                  className="h-full bg-[#C7A76C] transition-all duration-300"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
            </div>

            {/* Modal Bottom Information */}
            <div className="p-6 bg-[#071A2F]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A76C] font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>14 Rue Capitaine Hadri Mohamed, Oran</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-white font-normal mb-2">
                {activeVideoModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E9ECEF]/80 font-light leading-relaxed mb-6">
                {activeVideoModal.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={activeVideoModal.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#FE2C55] hover:bg-[#e0264b] text-white text-center text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Voir cette vidéo sur TikTok</span>
                </a>
                <button
                  onClick={() => {
                    setActiveVideoModal(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 py-3 bg-[#C7A76C] hover:bg-[#b89658] text-[#071A2F] text-center text-xs uppercase tracking-wider font-bold rounded-sm transition-colors"
                >
                  Parler à un conseiller
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. Photo Detail Lightbox Modal */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl luxury-glass border border-white/20 rounded-sm shadow-2xl overflow-hidden p-6 sm:p-8">
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors z-20"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[60vh] overflow-hidden rounded-sm mb-6 border border-white/10">
              <img
                src={activePhotoModal.imageUrl}
                alt={activePhotoModal.title}
                className="w-full h-auto max-h-[60vh] object-contain mx-auto"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C7A76C] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activePhotoModal.location}</span>
                <span>•</span>
                <span>{activePhotoModal.verifiedLabel}</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-white font-normal">
                {activePhotoModal.title}
              </h3>
              <p className="text-sm text-[#E9ECEF]/80 font-light leading-relaxed">
                {activePhotoModal.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActivePhotoModal(null)}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-wider font-semibold rounded-sm border border-white/20 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
