import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera,
  Film,
  Video,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Lock,
  Plus
} from 'lucide-react';
import { useWebsiteData } from '../context/WebsiteDataContext';
import { useAdminAuth } from '../context/AdminAuthContext';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const { galleryItems } = useWebsiteData();
  const { isAuthenticated } = useAdminAuth();

  const [mediaTypeFilter, setMediaTypeFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Gadrasini Pahar',
    'Branch Ashrams',
    'Ashram & Temple',
    'Guru Parampara',
    'Festivals',
    'Meditation Camps',
    'Seva Activities'
  ];

  // Filter items based on media type & category
  const filteredItems = galleryItems.filter((item) => {
    const itemType = item.type || 'photo';
    if (mediaTypeFilter !== 'all' && itemType !== mediaTypeFilter) {
      return false;
    }

    if (activeCategory === 'All') return true;

    if (activeCategory === 'Branch Ashrams') {
      return (
        item.category === 'Branch Ashrams' ||
        item.url.includes('/branches/') ||
        item.title.includes('Nanpa') ||
        item.title.includes('Ganjit') ||
        item.title.includes('Jalampura')
      );
    }

    return item.category === activeCategory;
  });

  const currentItem: GalleryItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const handleNext = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const photoCount = galleryItems.filter((i) => (i.type || 'photo') === 'photo').length;
  const videoCount = galleryItems.filter((i) => i.type === 'video').length;

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Divine Visual Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900">
            Ashram Gallery: Photos & Videos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sacred glimpses of Gadrasini Pahar, spiritual discourses by Paramhans Gyanananda Maharaj, Kriya yoga retreats, and devotional celebrations.
          </p>
        </div>

        {/* Media Type Filter Selector + Admin Shortcut */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-200/60 pb-6">
          
          {/* Media Type Toggle: All, Photos, Videos */}
          <div className="inline-flex p-1 bg-white rounded-2xl shadow-sm border border-amber-200/80 text-xs font-semibold">
            <button
              onClick={() => {
                setMediaTypeFilter('all');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                mediaTypeFilter === 'all'
                  ? 'bg-amber-700 text-white shadow-md font-bold'
                  : 'text-slate-700 hover:text-amber-800'
              }`}
            >
              All Media ({galleryItems.length})
            </button>

            <button
              onClick={() => {
                setMediaTypeFilter('photo');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center space-x-1.5 ${
                mediaTypeFilter === 'photo'
                  ? 'bg-amber-700 text-white shadow-md font-bold'
                  : 'text-slate-700 hover:text-amber-800'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photos ({photoCount})</span>
            </button>

            <button
              onClick={() => {
                setMediaTypeFilter('video');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center space-x-1.5 ${
                mediaTypeFilter === 'video'
                  ? 'bg-amber-700 text-white shadow-md font-bold'
                  : 'text-slate-700 hover:text-amber-800'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Videos ({videoCount})</span>
            </button>
          </div>

          {/* Admin Upload / Manage Shortcut */}
          <Link
            to="/admin"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-all shadow-sm hover:shadow"
            title="Upload new photos and videos to the gallery via Admin Panel"
          >
            {isAuthenticated ? (
              <>
                <Plus className="w-3.5 h-3.5 text-amber-700" />
                <span>Upload New Media (Admin)</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-700" />
                <span>Admin Upload Portal</span>
              </>
            )}
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-amber-200/60 p-8 space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-slate-800">
              No media found in this category
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Switch category filters or use the Admin Panel to upload new photos and videos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredItems.map((item, index) => {
              const isVideo = (item.type || 'photo') === 'video';
              const thumbnailSrc = isVideo ? (item.thumbnail || item.url) : item.url;

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-amber-200/70 bg-slate-900 h-64 transition-all duration-300"
                >
                  {/* Thumbnail / Image */}
                  <img
                    src={thumbnailSrc}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/gurus/guru_6.png';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    {isVideo ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-600 text-white flex items-center gap-1 shadow-md">
                        <Play className="w-3 h-3 fill-current" /> VIDEO
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-600 text-white flex items-center gap-1 shadow-md">
                        <Camera className="w-3 h-3" /> PHOTO
                      </span>
                    )}

                    {item.featured && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-400 text-slate-950 shadow-md">
                        ★
                      </span>
                    )}
                  </div>

                  {/* Video Play Circle Icon for Video items */}
                  {isVideo && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-white leading-tight line-clamp-2">
                      {item.title}
                    </h4>
                    {item.location && (
                      <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-1 truncate">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </p>
                    )}

                    <div className="mt-2 text-right">
                      <span className="p-1.5 rounded-full bg-amber-500 text-slate-950 inline-block shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* RICH LIGHTBOX MODAL (SUPPORTS HIGH-RES PHOTO & VIDEO) */}
      {/* ========================================================= */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-slate-800 text-white hover:bg-amber-600 transition-colors z-50 shadow-xl"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-600 transition-colors z-50 shadow-xl"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-600 transition-colors z-50 shadow-xl"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Media & Details Container */}
          <div className="max-w-4xl w-full text-center space-y-4">
            
            <div className="rounded-2xl overflow-hidden max-h-[75vh] border-2 border-amber-400/40 shadow-2xl inline-block w-full bg-black">
              {(currentItem.type || 'photo') === 'video' ? (
                <div className="aspect-video w-full bg-black flex items-center justify-center">
                  {currentItem.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentItem.youtubeId}?autoplay=1&rel=0`}
                      title={currentItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <video
                      src={currentItem.videoUrl || currentItem.url}
                      controls
                      autoPlay
                      className="w-full h-full max-h-[70vh] object-contain"
                    />
                  )}
                </div>
              ) : (
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/gurus/guru_6.png';
                  }}
                  className="max-h-[75vh] w-auto mx-auto object-contain"
                />
              )}
            </div>
            
            {/* Caption Card */}
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-amber-500/30 text-white max-w-2xl mx-auto shadow-2xl text-left space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-amber-400">
                <span className="uppercase font-bold tracking-wider">
                  {currentItem.category} • {(currentItem.type || 'photo').toUpperCase()}
                </span>
                <span className="text-slate-400 font-mono text-xs">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-amber-200 leading-snug">
                {currentItem.title}
              </h3>

              {currentItem.caption && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentItem.caption}
                </p>
              )}

              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                {currentItem.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{currentItem.location}</span>
                  </span>
                )}
                {currentItem.speaker && (
                  <span>Speaker: <strong className="text-slate-200">{currentItem.speaker}</strong></span>
                )}
                {currentItem.duration && (
                  <span className="font-mono">Duration: {currentItem.duration}</span>
                )}
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};
