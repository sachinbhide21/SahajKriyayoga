import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Trees, Mountain, ShieldCheck, Heart, Sparkles, CheckCircle2, Compass, Target, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { ASHRAM_INFO } from '../data/ashramData';
import { useLanguage } from '../context/LanguageContext';

const SANCTUARY_SLIDES = [
  {
    url: '/images/sanctuary/sanctuary_1.jpg',
    title: 'Gadrasini Pahar Ashram Foothills',
    subtitle: 'Sacred grounds at Belpahari, West Bengal'
  },
  {
    url: '/images/sanctuary/sanctuary_2.jpg',
    title: 'Serene Forest Path & Dhyana Arbor',
    subtitle: 'Tranquil natural environment for quiet sadhana'
  },
  {
    url: '/images/sanctuary/sanctuary_3.jpg',
    title: 'Gadrasini Hill Scenic Vista & Greenery',
    subtitle: 'Foothills offering peaceful spiritual atmosphere'
  },
  {
    url: '/images/sanctuary/sanctuary_4.jpg',
    title: 'Ashram Main Cottage & Meditation Grounds',
    subtitle: 'Founded in 1971 by Swami Jagadananda Giri Maharaj'
  },
  {
    url: '/images/sanctuary/sanctuary_5.jpg',
    title: 'Holy Temple Sanctum & Altar Corner',
    subtitle: 'Dedicated to divine Kriya Yoga lineage'
  },
  {
    url: '/images/sanctuary/sanctuary_6.jpg',
    title: 'Panoramic Mountain Canopy & Ashram View',
    subtitle: 'Unbroken silence for self-inquiry and reflection'
  }
];

export const AboutAshramSection: React.FC = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  // Auto slide timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SANCTUARY_SLIDES.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SANCTUARY_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SANCTUARY_SLIDES.length) % SANCTUARY_SLIDES.length);
  };

  const currentSlide = SANCTUARY_SLIDES[currentIndex];

  return (
    <section id="about" className="py-20 bg-[#FAF8F5] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center">
            <img src="/images/logo.svg" alt="Ashram Official Logo" className="w-full h-full object-contain filter drop-shadow-md" referrerPolicy="no-referrer" />
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Sacred Sanctuary of Kriya Yoga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 dark:text-amber-100 tracking-tight">
            About Brahmarishi Satyananda Sannyas Ashram
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Established at the holy foothills of Gadrasini Pahar in 1971 to preserve and propagate the authentic Kriya Yoga tradition.
          </p>
        </div>

        {/* Main Content Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Continuous Auto Slider Container */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group aspect-[4/3] bg-slate-900"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Slide Images with Fade Transition */}
              {SANCTUARY_SLIDES.map((slide, idx) => (
                <div
                  key={slide.url}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                aria-label="Previous sanctuary image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-amber-600 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={goToNext}
                aria-label="Next sanctuary image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-amber-600 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Play/Pause Toggle & Image Counter Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  className="p-1.5 rounded-full bg-black/50 text-white/90 hover:text-amber-300 backdrop-blur-md transition-colors"
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <span className="px-2.5 py-1 rounded-full bg-black/50 text-amber-200 text-[11px] font-mono backdrop-blur-md font-bold tracking-wider">
                  {currentIndex + 1} / {SANCTUARY_SLIDES.length}
                </span>
              </div>

              {/* Floating Badge / Caption on Active Slide */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-black/60 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-amber-500/30 text-white transition-all duration-300">
                <p className="text-xs sm:text-sm font-serif font-bold text-amber-300 truncate">
                  {currentSlide.title}
                </p>
                <p className="text-[11px] text-slate-200/90 mt-0.5 truncate">
                  {currentSlide.subtitle}
                </p>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center space-x-1.5 mt-2.5">
                  {SANCTUARY_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Accent Gold Badge */}
            <div className="absolute -top-4 -left-4 z-30 bg-gradient-to-br from-amber-500 to-amber-700 text-white p-3.5 rounded-2xl shadow-xl hidden sm:block border border-amber-300/40">
              <p className="text-xl font-serif font-extrabold leading-none">50+</p>
              <p className="text-[9px] font-semibold uppercase tracking-wider mt-1 text-amber-100">Years of Sadhana</p>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="font-serif font-bold text-amber-800 dark:text-amber-400 text-lg">
                Brahmarishi Satyananda Sannyas Ashram is a traditional Kriya Yoga Ashram founded in 1971 by Param Pujya Swami Jagadananda Giri Maharaj at the sacred foothills of Gadrasini Pahar near Belpahari, West Bengal.
              </p>

              <p>
                The Ashram was established in the divine memory of his beloved Guru, <strong className="text-amber-900 dark:text-amber-200 font-semibold">Brahmarishi Swami Satyananda Giri Maharaj</strong>. It preserves the authentic, unadulterated Kriya Yoga tradition received through the unbroken Guru Parampara descending directly from Mahavatar Babaji.
              </p>

              <p>
                Surrounded by verdant forests, hills, and natural beauty, the Ashram provides an ideal, pristine environment for deep meditation, self-inquiry, and intense spiritual practice (sadhana).
              </p>
            </div>

            {/* Key Ashram Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-amber-50 dark:bg-slate-800/60 border border-amber-200/60 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-950 dark:text-amber-200 uppercase tracking-wide">Authentic Lineage</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Direct Kriya techniques from Babaji & Lahiri Mahasaya.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-amber-50 dark:bg-slate-800/60 border border-amber-200/60 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-950 dark:text-amber-200 uppercase tracking-wide">Sacred Environment</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Gadrasini Pahar hill silence for quiet Dhyana.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-amber-50 dark:bg-slate-800/60 border border-amber-200/60 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-950 dark:text-amber-200 uppercase tracking-wide">Seva & Annadaana</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Daily free meals for devotees & medical camps.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-amber-50 dark:bg-slate-800/60 border border-amber-200/60 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-950 dark:text-amber-200 uppercase tracking-wide">All-India Devotees</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Thousands associated across West Bengal, MP, Gujarat & Uttarakhand.</p>
                </div>
              </div>
            </div>

            {/* Learn More Expandable Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowFullHistory(!showFullHistory)}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 dark:bg-amber-700 dark:hover:bg-amber-600 transition-colors shadow-md"
              >
                <span>{showFullHistory ? 'Show Less' : 'Learn More About Ashram History'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${showFullHistory ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Expandable History Content */}
            {showFullHistory && (
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 animate-fade-in shadow-xl">
                <h3 className="font-serif font-bold text-amber-900 dark:text-amber-300 text-base">
                  Detailed History of Belpahari Ashram
                </h3>
                <p>
                  In the late 1960s, Swami Jagadananda Giri Maharaj walked extensively across the forest trails of Jhargram and Belpahari. Recognizing the intense spiritual vibration of Gadrasini Pahar, he chose this sacred soil to establish a retreat center free from worldly distractions.
                </p>
                <p>
                  Over the decades, under the guidance of Sannyasis, the Ashram grew from a humble thatched cottage to a vibrant spiritual sanctuary featuring the Dhyana Mandir, Annapurna Dining Complex, Gau Shala, and residential quarters for visiting sadhaks.
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Our Vision & Our Mission Block */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Vision Card */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-100/60 dark:from-slate-800 dark:via-slate-800/90 dark:to-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shadow-md shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Guiding Light</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-amber-100">
                  {t('our_vision')}
                </h3>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-serif italic border-l-4 border-amber-500 pl-4 py-1">
              "{t('vision_text')}"
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-amber-100/50 to-orange-50/60 dark:from-slate-800 dark:via-slate-800/90 dark:to-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center shadow-md shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Sacred Purpose</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-amber-100">
                  {t('our_mission')}
                </h3>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-serif italic border-l-4 border-amber-600 pl-4 py-1">
              "{t('mission_text')}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
