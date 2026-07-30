import React from 'react';
import { ArrowRight, Play, Compass, Sparkles, Sun, Mountain, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { HeroCanvas } from './HeroCanvas';

interface HeroBannerProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { setIsDonationModalOpen } = useTheme();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] text-slate-900 pt-12 pb-20">
      
      {/* Background Hero Image with Soft Parallax & Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
          alt="Gadrasini Pahar Foothills Sunrise"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/gurus/guru_6.png';
          }}
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-10000 animate-pulse-slow"
        />
        {/* Soft Golden Sunrise & Mountain Glow Gradients */}
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* Floating Canvas Particles */}
      <HeroCanvas />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Spiritual Crest Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-amber-700 text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <img src="/images/logo.svg" alt="Ashram Emblem" className="w-full h-full object-contain filter drop-shadow-sm" referrerPolicy="no-referrer" />
          </div>
          <span>Brahmarishi Satyananda Sannyas Ashram • Gadrasini Pahar</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-amber-700 leading-tight drop-shadow-sm">
            {t('experience_eternal')}
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-800/90 font-light leading-relaxed tracking-wide font-quote italic">
            "{t('hero_subheading')}"
          </p>
        </div>

        {/* Guiding Mantra Badge */}
        <div className="py-2">
          <div className="inline-block relative">
            <div className="px-6 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 shadow-md backdrop-blur-md">
              <p className="text-amber-700 font-serif font-bold text-lg sm:text-2xl tracking-widest uppercase flex items-center justify-center gap-2">
                <span>ॐ</span>
                <span>"Know Thyself"</span>
                <span>ॐ</span>
              </p>
              <p className="text-[11px] text-slate-700/80 uppercase tracking-widest font-semibold mt-0.5">
                Present Guru's Message • Paramhans Gyanananda Maharaj
              </p>
            </div>
            {/* Soft Aura Ring */}
            <div className="absolute -inset-1 rounded-2xl bg-amber-500/20 blur-md -z-10"></div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          
          {/* Explore Ashram */}
          <button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>{t('explore_ashram')}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          {/* Learn Kriya Yoga */}
          <button
            onClick={() => onNavigate('kriya-yoga')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm text-slate-800 bg-amber-100 border border-amber-300 hover:bg-amber-200 hover:border-amber-400 shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>{t('learn_kriya')}</span>
          </button>

          {/* Watch Discourses */}
          <button
            onClick={() => onNavigate('youtube')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm text-slate-700 bg-slate-50/80 border border-slate-700/80 hover:bg-slate-800 hover:text-white shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4 text-red-400 fill-current" />
            <span>{t('watch_discourses')}</span>
          </button>
        </div>

        {/* Key Ashram Highlights Bar */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-amber-200 text-center text-xs">
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 shadow-sm">
            <p className="text-xl sm:text-2xl font-serif font-bold text-amber-700">1971</p>
            <p className="text-slate-700/80 text-[11px]">Founded Year at Belpahari</p>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 shadow-sm">
            <p className="text-xl sm:text-2xl font-serif font-bold text-amber-700">6 Gurus</p>
            <p className="text-slate-700/80 text-[11px]">Timeless Kriya Lineage</p>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 shadow-sm">
            <p className="text-xl sm:text-2xl font-serif font-bold text-amber-700">6 Branches</p>
            <p className="text-slate-700/80 text-[11px]">West Bengal, MP, Gujarat & Uttarakhand</p>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 shadow-sm">
            <p className="text-xl sm:text-2xl font-serif font-bold text-amber-700">Thousands</p>
            <p className="text-slate-700/80 text-[11px]">Devotees across India</p>
          </div>
        </div>

      </div>

      {/* Decorative Lotus Curve Divider at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent"></div>
    </section>
  );
};
