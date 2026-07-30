import React, { useState } from 'react';
import {
  Crown,
  MapPin,
  Sparkles,
  Navigation,
  ExternalLink,
  Calendar,
  Clock,
  Phone,
  Mail,
  Flame,
  Heart,
  BookOpen,
  Compass,
  Sun,
  Shield,
  Trees,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Feather,
  Camera,
  FolderOpen,
  Video,
  Play,
  Film
} from 'lucide-react';
import { HQ_ORIGINAL_PHOTOS, HQPhoto, HQCategory } from '../data/headquartersPhotos';
import { VisitAshramModal } from './VisitAshramModal';
import { ASHRAM_BRANCHES } from '../data/ashramData';

interface LandmarkAlbum {
  id: HQCategory;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  isVideo?: boolean;
  videoEmbedUrl?: string;
  videoLink?: string;
}

const LANDMARK_ALBUMS: LandmarkAlbum[] = [
  {
    id: 'Vasudev Mandir',
    number: '01',
    title: 'Vasudev Mandir & Hanumanji Shrine',
    subtitle: 'First sacred temple on Gadrasini Hill ascent',
    description: 'Enshrined together on the sacred hill path, Vasudev Bhagavan Mandir and Mahabali Hanumanji Mandir bestow spiritual peace and protection on pilgrims.',
    coverImage: 'https://lh3.googleusercontent.com/d/1plBIGEMab60g234-a5ax8DHfSwCDT7Vm'
  },
  {
    id: 'Mokshanath Temple',
    number: '02',
    title: 'Mokshanath Temple (Shiv Ji)',
    subtitle: 'Hilltop Shiva Temple at Gadrasini Peak',
    description: 'Perched on the mountain peak, offering elevated spiritual vibrations and serene open sky views for deep Kriya Yoga meditation.',
    coverImage: 'https://lh3.googleusercontent.com/d/11WFzoXZxAKq2EQKFb82hwhrNo-IrpCV6'
  },
  {
    id: 'Ashram View',
    number: '03',
    title: 'Ashram View & Natural Sanctuary',
    subtitle: 'Grounds, Cottages, Footpaths & Forest Vistas',
    description: 'Scenic overviews of the main ashram complex, flower gardens, traditional meditation cottages, and sal forest ranges of Belpahari.',
    coverImage: 'https://lh3.googleusercontent.com/d/1T3eHg2hju3MtPZQHKC6eXabo6y8DpOui'
  },
  {
    id: 'Gita Mandir',
    number: '04',
    title: 'Sri Gita Mandir Sanctum',
    subtitle: 'Sacred Temple of Lord Krishna & Gita Discourses',
    description: 'Dedicated Gita temple housing Lord Krishna altar, founder portrait, and inscribed Bhagavad Gita verses for daily scriptural recitation.',
    coverImage: 'https://lh3.googleusercontent.com/d/1cu81lVu4hZaLsCRpMao-nxH1AvYMG6iG'
  },
  {
    id: 'Guru Mandir',
    number: '05',
    title: 'Guru Mandir Sanctum',
    subtitle: 'Guru Parampara Shrine & Meditation Corner',
    description: 'Consecrated Guru Mandir dedicated to the revered Lineage Masters, facilitating holy darshan, Guru worship, and silent Kriya Yoga reflection.',
    coverImage: 'https://lh3.googleusercontent.com/d/12IfzNE1SLspZxXVcW3kqiKe6oGMXW7h4'
  },
  {
    id: 'Ashram & Gadrasini Hill View',
    number: '06',
    title: 'Ashram and Gadrasini Hill View',
    subtitle: 'Scenic Video Tour of Ashram Premises & Mountain Peak',
    description: 'Exclusive video tour capturing panoramic aerial and scenic ground views of Brahmarshi Satyananda Sannyas Ashram and the majestic Gadrasini Hill in Belpahari.',
    coverImage: 'https://lh3.googleusercontent.com/d/1T3eHg2hju3MtPZQHKC6eXabo6y8DpOui',
    isVideo: true,
    videoEmbedUrl: 'https://drive.google.com/file/d/1QeG9etg71UQzUqBzPm4KnDuf2FnT6Knu/preview',
    videoLink: 'https://drive.google.com/file/d/1QeG9etg71UQzUqBzPm4KnDuf2FnT6Knu/view?usp=sharing'
  }
];

export const HeadquartersMainCentre: React.FC = () => {
  const [activeAlbum, setActiveAlbum] = useState<HQCategory | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  const hqData = ASHRAM_BRANCHES.find((b) => b.isHeadquarters) || ASHRAM_BRANCHES[0];

  // Get photos for current active album in album modal
  const albumPhotos = activeAlbum
    ? HQ_ORIGINAL_PHOTOS.filter((p) => p.category === activeAlbum)
    : [];

  const openAlbumModal = (category: HQCategory) => {
    setActiveAlbum(category);
  };

  const closeAlbumModal = () => {
    setActiveAlbum(null);
    setLightboxIndex(null);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % albumPhotos.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + albumPhotos.length) % albumPhotos.length);
    }
  };

  return (
    <section
      id="main-headquarters"
      className="py-16 bg-[#FAF8F5] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Full-Width Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200 group">
          {/* Main Hero Background Image */}
          <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] w-full overflow-hidden">
            <img
              src={HQ_ORIGINAL_PHOTOS[0].imageUrl}
              alt={HQ_ORIGINAL_PHOTOS[0].alt}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/gurus/guru_6.png';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Light Overlay */}
            <div className="absolute inset-0 bg-white/50" />

            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl border border-white/50 animate-pulse">
                <Crown className="w-4 h-4 text-slate-950" />
                <span>Main Headquarters</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="px-3.5 py-1 rounded-full bg-slate-50/80 backdrop-blur-md text-slate-700 text-xs font-bold border border-amber-200">
                  Est. 1971
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-50/80 backdrop-blur-md text-amber-700 text-xs font-bold border border-amber-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Gadrasini Pahar, Belpahari</span>
                </span>
              </div>
            </div>

            {/* Banner Text Content */}
            <div className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10 lg:left-12 lg:right-12 z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider bg-amber-50/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-500/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Central Spiritual Hub of Guru Parampara</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-800 leading-tight drop-shadow-md">
                Brahmarshi Satyananda Sannyas Ashram
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-800/90 font-medium leading-relaxed max-w-3xl drop-shadow">
                The divine birthplace and headquarters of our sacred mission, located amidst the serene forests and hills of Gadrasini Pahar, Belpahari, Jhargram, West Bengal.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisitModalOpen(true)}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Plan Your Visit</span>
                </button>

                <a
                  href="https://maps.app.goo.gl/S4bbtwjks2kErX1p9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-amber-50/80 hover:bg-amber-900 backdrop-blur-md border border-amber-500/50 shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="#hq-gallery"
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-200 bg-slate-50/80 hover:bg-slate-800 backdrop-blur-md border border-slate-700 shadow-md transition-colors flex items-center gap-2"
                >
                  <FolderOpen className="w-4 h-4 text-amber-700" />
                  <span>6 Landmark Collections</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Ashram Introduction Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-200 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/50">
                <Crown className="w-3.5 h-3.5 text-amber-600 " />
                <span>Headquarters Overview</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
                Welcome to the Spiritual Sanctum at Gadrasini Pahar
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Nestled amidst the tranquil sal forests and granite rock peaks of Gadrasini Pahar in Belpahari, Jhargram district, Brahmarshi Satyananda Sannyas Ashram stands as the sacred central headquarters of our organization. Established in 1971 by Param Pujya Swami Jagadananda Giri Maharaj, this sanctuary radiates peace, devotion, and high spiritual vibrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center space-y-1">
                  <p className="text-2xl font-serif font-black text-amber-900 ">1971</p>
                  <p className="text-xs font-bold text-slate-600 ">Established Year</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center space-y-1">
                  <p className="text-2xl font-serif font-black text-amber-900 ">Belpahari</p>
                  <p className="text-xs font-bold text-slate-600 ">Jhargram, West Bengal</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center space-y-1">
                  <p className="text-2xl font-serif font-black text-amber-900 ">Kriya Yoga</p>
                  <p className="text-xs font-bold text-slate-600 ">Authentic Lineage</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-amber-50 text-slate-800 p-6 rounded-2xl border border-amber-200 space-y-4 shadow-md">
              <h3 className="text-lg font-serif font-bold text-amber-800 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Headquarters Location</span>
              </h3>

              <div className="text-xs space-y-2 text-slate-800/90 leading-relaxed">
                <p className="font-bold text-slate-800">Brahmarshi Satyananda Sannyas Ashram</p>
                <p>Gadrasini Pahar, Belpahari</p>
                <p>Jhargram District, West Bengal - 721501, India</p>
              </div>

              <div className="pt-2 space-y-2 border-t border-amber-200 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>+91 90094 11592, +91 99094 78275</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>gururagomon@gmail.com</span>
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/S4bbtwjks2kErX1p9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4 text-slate-950" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. The 6 Sacred Landmark Photo & Video Collections */}
        <div id="hq-gallery" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/50">
              <FolderOpen className="w-3.5 h-3.5 text-amber-600 " />
              <span>Gadrasini Pahar Sanctuaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
              6 Sacred Landmark Collections
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 ">
              Explore the 6 sacred landmarks of Gadrasini Pahar including photo galleries and video views.
            </p>
          </div>

          {/* 6 Landmark Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LANDMARK_ALBUMS.map((landmark) => {
              const count = HQ_ORIGINAL_PHOTOS.filter((p) => p.category === landmark.id).length;
              return (
                <div
                  key={landmark.id}
                  onClick={() => openAlbumModal(landmark.id)}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5"
                >
                  <div>
                    {/* Cover Image Frame */}
                    <div className="relative h-52 w-full overflow-hidden bg-white">
                      <img
                        src={landmark.coverImage}
                        alt={landmark.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/gurus/guru_6.png';
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Number Badge Top Left */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-lg">
                        #{landmark.number}
                      </span>

                      {/* Photo / Video Badge Top Right */}
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-50/80 backdrop-blur-md text-amber-700 text-[11px] font-bold border border-amber-500/40 flex items-center gap-1 shadow-md">
                        {landmark.isVideo ? (
                          <>
                            <Video className="w-3.5 h-3.5 text-amber-400" />
                            <span>Video Tour</span>
                          </>
                        ) : (
                          <>
                            <Camera className="w-3.5 h-3.5 text-amber-400" />
                            <span>{count} Photos</span>
                          </>
                        )}
                      </span>

                      {/* Play Button Overlay for Video Card */}
                      {landmark.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Subtitle at bottom of image */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-[11px] font-bold text-slate-700 drop-shadow line-clamp-1">
                          {landmark.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-amber-700 :text-amber-700 transition-colors leading-snug">
                        {landmark.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {landmark.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-5 pb-5 pt-0">
                    <button
                      type="button"
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-100 text-amber-900 group-hover:bg-amber-400 group-hover:text-slate-950 font-bold text-xs transition-colors duration-300 flex items-center justify-center gap-2 border border-amber-300/50 "
                    >
                      {landmark.isVideo ? (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Video & View Gallery</span>
                        </>
                      ) : (
                        <>
                          <span>Explore Gallery ({count})</span>
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Landmark #06 Featured Video Showcase */}
        <div id="hq-video-tour" className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Video className="w-3.5 h-3.5 text-slate-950" />
                <span>Landmark #06 Video Feature</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800">
                Ashram and Gadrasini Hill View Video
              </h3>
              <p className="text-xs text-slate-700/80">
                A scenic video capture showcasing the peaceful Belpahari Ashram premises and the surrounding Gadrasini Hill range.
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1QeG9etg71UQzUqBzPm4KnDuf2FnT6Knu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-amber-50/80 hover:bg-amber-900 border border-amber-500/50 shadow-md transition-colors"
            >
              <span>Watch on Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-2xl">
            <iframe
              src="https://drive.google.com/file/d/1QeG9etg71UQzUqBzPm4KnDuf2FnT6Knu/preview"
              title="Ashram and Gadrasini Hill View Video"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* 4. About the Ashram Section */}
        <div className="bg-amber-900/10 rounded-3xl p-8 sm:p-12 border border-amber-300/40 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/50">
              <Crown className="w-3.5 h-3.5 text-amber-700 " />
              <span>Headquarters Significance</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 ">
              Brahmarshi Satyananda Sannyas Ashram (Headquarters)
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Founded in 1971 by Param Pujya Swami Jagadananda Giri Maharaj, Brahmarshi Satyananda Sannyas Ashram at Gadrasini Pahar, Belpahari, is the spiritual headquarters of the Guru Parampara. Surrounded by forests and hills, the Ashram is dedicated to Kriya Yoga, meditation, Bhagavad Gita, Bhagwat Katha, Guru Seva, and spiritual upliftment. It continues to inspire seekers from across India under the guidance of Paramhans Gyanananda Maharaj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-slate-900 ">
                Gadrasini Pahar Sacred Forest
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The untouched natural forest surrounding Gadrasini Pahar provides an ideal sanctuary for silent meditation, Kriya Yoga sadhana, and communion with nature.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-slate-900 ">
                Kriya Yoga Lineage Hub
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As the central seat of the Guru Parampara, the Ashram preserves the pure, ancient Kriya Yoga teachings transmitted directly through the realized Gurus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-slate-900 ">
                Sri Gita Mandir & Discourses
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The dedicated Sri Gita Mandir inside the headquarters conducts daily scripture recitations, Bhagwat Katha sessions, and spiritual discourses for local villagers and visiting devotees.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Daily Activities */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Ashram Routine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 ">
                Daily Ashram Activities
              </h2>
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 ">
              Open to All Devotees & Seekers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 ">05:00 AM - 06:30 AM</span>
                <Sun className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 ">Mangal Arati & Chanting</h3>
              <p className="text-xs text-slate-600 ">Morning prayers, Vedic chanting, and Guru Vandana at Sri Gita Mandir.</p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 ">07:00 AM - 08:30 AM</span>
                <Flame className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 ">Kriya Yoga Meditation</h3>
              <p className="text-xs text-slate-600 ">Guided Kriya Yoga pranayama and silent meditation in the forest kutir.</p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 ">10:00 AM - 11:30 AM</span>
                <BookOpen className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 ">Bhagavad Gita Classes</h3>
              <p className="text-xs text-slate-600 ">In-depth shloka study and practical spiritual philosophy at Sri Gita Mandir.</p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 ">12:30 PM - 02:00 PM</span>
                <Heart className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 ">Guru Seva & Mahaprasadam</h3>
              <p className="text-xs text-slate-600 ">Community kitchen seva, sanctified vegetarian meals and rest.</p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 ">05:00 PM - 06:30 PM</span>
                <Users className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 ">Bhagwat Katha & Evening Satsang</h3>
              <p className="text-xs text-slate-600 ">Spiritual discourses, devotional bhajans, and satsang by Paramhans Gyanananda Maharaj.</p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 ">07:00 PM - 08:00 PM</span>
                <Flame className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 ">Evening Meditation & Sandhya Arati</h3>
              <p className="text-xs text-slate-600 ">Deep evening meditation followed by arati and peaceful silent retreat.</p>
            </div>
          </div>
        </div>

        {/* 6. Major Festivals & Annual Programs */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/50">
              <Calendar className="w-3.5 h-3.5 text-amber-600 " />
              <span>Sacred Calendar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
              Major Festivals & Annual Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                July / Ashadha Purnima
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 ">Guru Purnima Mahotsav</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The grandest annual festival at headquarters where thousands of devotees gather to offer reverence to Paramhans Gyanananda Maharaj and the Guru Parampara lineage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                Auspicious Tithi / Annual Celebration
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 ">Swami Jagadananda Giri Guru Maharaj Aavirbhav Divas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Celebrating the holy birth anniversary (Aavirbhav Divas) of founder master Param Pujya Swami Jagadananda Giri Maharaj with special Yajna, Bhandara, and Guru Vandana.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                Magha Shukla Saptami / Jan - Feb
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 ">Narmada Jayanti Mahotsav</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sacred celebration commemorating Divine Mother Narmada with special prayer, Kriya Yoga sadhana camp, and spiritual discourses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                August / September (Bhadrapada)
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 ">Shri Krishna Janmashtami Mahotsav</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Divine celebration of Lord Krishna's advent at Gita Mandir featuring night-long prayer, Gita chanting, and joyful devotional satsang.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-md">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                February / March
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 ">Maha Shivaratri Sadhana Camp</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Night-long vigil, special abhishekam, and intense Kriya Yoga meditation at the Mokshanath Baba Shrine on Gadrasini Pahar.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Visiting Information & Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visiting Details */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 space-y-6 shadow-md">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Traveler Guide</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 ">
                Visiting Information & How to Reach
              </h2>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                <p className="font-bold text-slate-900 text-sm">📍 Full Address:</p>
                <p>Brahmarshi Satyananda Sannyas Ashram, Gadrasini Pahar, Belpahari, Jhargram District, West Bengal - 721501, India.</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-slate-900 ">🚉 By Train:</p>
                <p>Nearest major railway stations are <strong>Jhargram Railway Station (JGM)</strong> (~40 km) and <strong>Kharagpur Junction (KGP)</strong> (~80 km). Taxis and buses are readily available from Jhargram to Belpahari.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setVisitModalOpen(true)}
                className="flex-1 px-5 py-2.5 rounded-full text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Plan Your Visit</span>
              </button>

              <a
                href="https://maps.app.goo.gl/S4bbtwjks2kErX1p9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-amber-900 hover:bg-amber-800 transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 border border-amber-200 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-serif font-bold text-slate-800">
                  Interactive Headquarters Map
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                Belpahari, West Bengal
              </span>
            </div>

            {/* Embedded Google Maps iframe */}
            <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-amber-200 relative">
              <iframe
                title="Brahmarshi Satyananda Sannyas Ashram Belpahari Google Map"
                src="https://maps.google.com/maps?q=Brahmarshi+Satyananda+Sannyas+Ashram,+Gadrasini+Pahar,+Belpahari,+Jhargram,+West+Bengal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full filter saturate-[0.9]"
              />
            </div>

            <div className="p-3 rounded-xl bg-white text-xs text-slate-700/90 flex items-center justify-between">
              <span>📍 Belpahari Headquarters • Gadrasini Pahar</span>
              <a
                href="https://maps.app.goo.gl/S4bbtwjks2kErX1p9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Open Direct Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* 8. Contact & Call-to-Action Banner */}
        <div className="bg-amber-100 rounded-3xl p-8 sm:p-12 text-slate-800 shadow-md border border-amber-300 relative overflow-hidden text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-widest shadow-md">
              Hari Om! Seekers Welcome
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-800">
              Plan Your Visit to the Headquarters
            </h2>

            <p className="text-xs sm:text-sm text-slate-700/90 leading-relaxed">
              Experience the peaceful vibration of Gadrasini Pahar, attend divine Kriya Yoga meditation sessions, and receive the grace of the Guru Parampara at Belpahari.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              type="button"
              onClick={() => setVisitModalOpen(true)}
              className="px-8 py-3.5 rounded-full text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Plan Your Visit</span>
            </button>

            <a
              href="https://maps.app.goo.gl/S4bbtwjks2kErX1p9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white hover:bg-amber-200 border border-amber-300 shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-amber-600" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Landmark Album Modal */}
      {activeAlbum && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in overflow-y-auto">
          
          <div className="max-w-6xl mx-auto w-full my-auto space-y-6 bg-slate-50/90 border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            {/* Modal Control Bar */}
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Landmark Photo Collection</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-serif font-black text-slate-800">
                  {activeAlbum} Gallery ({albumPhotos.length} Photographs)
                </h3>
              </div>

              <button
                type="button"
                onClick={closeAlbumModal}
                className="p-2.5 rounded-full bg-slate-800 text-slate-200 hover:text-amber-700 hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Category Tabs for Quick Navigation */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {LANDMARK_ALBUMS.map((alb) => {
                const count = HQ_ORIGINAL_PHOTOS.filter((p) => p.category === alb.id).length;
                return (
                  <button
                    key={alb.id}
                    type="button"
                    onClick={() => setActiveAlbum(alb.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                      activeAlbum === alb.id
                        ? 'bg-amber-400 text-slate-950 shadow-lg scale-105 font-black'
                        : 'bg-slate-800 text-slate-700 border border-slate-700 hover:border-amber-500/50'
                    }`}
                  >
                    <span>#{alb.number} {alb.id}</span>
                    <span className="text-[10px] opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Embedded Google Drive Video if category has video */}
            {activeAlbum === 'Ashram & Gadrasini Hill View' && (
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-500/40 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-slate-800">Featured Video: Ashram and Gadrasini Hill View</span>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1QeG9etg71UQzUqBzPm4KnDuf2FnT6Knu/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-amber-700 bg-amber-50/80 border border-amber-500/40 hover:bg-amber-900 transition-colors"
                  >
                    <span>Open in Google Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-200 bg-slate-50">
                  <iframe
                    src="https://drive.google.com/file/d/1QeG9etg71UQzUqBzPm4KnDuf2FnT6Knu/preview"
                    title="Ashram and Gadrasini Hill View Video"
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}

            {/* Album Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto pr-2">
              {albumPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(index)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 bg-white flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={photo.imageUrl}
                      alt={photo.alt}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/gurus/guru_6.png';
                      }}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-50/80 text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-4 space-y-1 bg-slate-50">
                    <h4 className="text-sm font-serif font-bold text-slate-800 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-700/80 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-amber-500/20 text-center text-xs text-amber-700/80 font-medium">
              Click on any photograph to view full-resolution lightbox slideshow
            </div>

          </div>

        </div>
      )}

      {/* Full Resolution Lightbox Modal */}
      {lightboxIndex !== null && albumPhotos.length > 0 && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in">
          
          {/* Lightbox Top Control Bar */}
          <div className="flex items-center justify-between text-slate-800 z-10">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs">
                {lightboxIndex + 1} / {albumPhotos.length}
              </span>
              <span className="text-xs text-slate-700/90 font-semibold hidden sm:inline">
                {activeAlbum} Photo Collection
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-slate-800 text-slate-200 hover:text-amber-700 hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image Frame */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            
            {/* Prev Image Button */}
            <button
              type="button"
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-slate-50/80 text-amber-700 hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-2xl border border-amber-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Preserved Full Image */}
            <img
              src={albumPhotos[lightboxIndex].imageUrl}
              alt={albumPhotos[lightboxIndex].alt}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/gurus/guru_6.png';
              }}
              className="max-h-[75vh] max-w-full object-contain drop-shadow-2xl rounded-2xl border border-amber-500/20"
            />

            {/* Next Image Button */}
            <button
              type="button"
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-slate-50/80 text-amber-700 hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-2xl border border-amber-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption Bar */}
          <div className="bg-slate-50/90 border border-amber-200 rounded-2xl p-4 sm:p-5 text-center max-w-3xl mx-auto w-full z-10 space-y-1">
            <h3 className="text-base sm:text-lg font-serif font-bold text-slate-800">
              {albumPhotos[lightboxIndex].title}
            </h3>
            <p className="text-xs text-slate-700/90">
              {albumPhotos[lightboxIndex].caption}
            </p>
          </div>

        </div>
      )}

      {/* Plan Your Visit Modal */}
      <VisitAshramModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        selectedCentre={hqData}
      />

    </section>
  );
};
