import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/ashramData';
import { GalleryPhoto } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);

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

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : activeCategory === 'Branch Ashrams'
    ? GALLERY_PHOTOS.filter(p => p.category === 'Branch Ashrams' || p.url.includes('/branches/') || p.title.includes('Nanpa') || p.title.includes('Ganjit') || p.title.includes('Jalampura'))
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  const currentLightboxPhoto = lightboxPhotoIndex !== null ? filteredPhotos[lightboxPhotoIndex] : null;

  const handleNext = () => {
    if (lightboxPhotoIndex === null) return;
    setLightboxPhotoIndex((lightboxPhotoIndex + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (lightboxPhotoIndex === null) return;
    setLightboxPhotoIndex((lightboxPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Divine Visual Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Ashram Photo Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Glimpses of Gadrasini Pahar, Guru Satsangs, Kriya camps, and devotional celebrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                activeCategory === cat
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-amber-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhotoIndex(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-amber-200/60 bg-slate-50 h-64"
            >
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/gurus/guru_6.png';
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-slate-800">
                <span className="text-[10px] uppercase font-bold text-amber-400">{photo.category}</span>
                <h4 className="font-serif font-bold text-sm text-slate-800 leading-tight">{photo.title}</h4>
                <div className="mt-2 text-right">
                  <span className="p-1.5 rounded-full bg-amber-500 text-slate-950 inline-block">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentLightboxPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-md animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={() => setLightboxPhotoIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-slate-800 text-white hover:bg-amber-600 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-600 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-600 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="max-w-4xl w-full text-center space-y-4">
            <div className="rounded-2xl overflow-hidden max-h-[75vh] border-2 border-amber-400/40 shadow-2xl inline-block">
              <img
                src={currentLightboxPhoto.url}
                alt={currentLightboxPhoto.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/gurus/guru_6.png';
                }}
                className="max-h-[75vh] w-auto mx-auto object-contain"
              />
            </div>
            
            <div className="bg-slate-50/80 p-4 rounded-xl border border-amber-500/20 text-slate-800 max-w-xl mx-auto">
              <h3 className="font-serif font-bold text-lg text-amber-700">{currentLightboxPhoto.title}</h3>
              <p className="text-xs text-slate-800/80 mt-1">{currentLightboxPhoto.caption}</p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
