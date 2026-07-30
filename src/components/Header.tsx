import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Phone,
  Search,
  Globe,
  Heart,
  Menu,
  X,
  Sparkles,
  Music,
  BookOpen,
  MapPin,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ASHRAM_INFO } from '../data/ashramData';
import { Language } from '../types';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const {
    setIsSearchOpen,
    setIsDonationModalOpen,
    setIsElementorGuideOpen,
    isPlayingAudio,
    toggleAudioPlay
  } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const notices = [
    "🌸 Upcoming Spiritual Camp: 3-Day Intensive Kriya Yoga Sadhana Retreat at Belpahari",
    "🌺 Grand Guru Purnima Mahotsav 2027 at Belpahari Headquarters Ashram",
    "📖 Srimad Bhagwat Katha Saptah on Holy Narmada River Banks, Nanpa",
    "🚩 Gita Jayanti & Youth Spiritual Conclave at Jalampur Ashram",
    "🌊 Sacred Narmada Jayanti Festival at Nanpa Branch, Narmadapuram",
    "📜 Weekly Bhagavad Gita Classes every Sunday Morning",
    "🕉️ Daily Satsang & Morning Kriya Meditation 06:00 AM - 08:00 AM"
  ];

  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [notices.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about_ashram') },
    { id: 'guru-parampara', label: t('guru_parampara') },
    { id: 'present-guru', label: t('present_guru') },
    { id: 'kriya-yoga', label: t('kriya_yoga') },
    { id: 'teachings', label: 'Teachings' },
    { id: 'branches', label: t('branches') },
    { id: 'events', label: t('events') },
    { id: 'gallery', label: t('gallery') },
    { id: 'publications', label: t('books') },
    { id: 'youtube', label: t('youtube') },
    { id: 'contact', label: t('contact') }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    navigate(id === 'home' ? '/' : `/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md transition-all duration-300">
      {/* Top Notice Slider Announcement Bar */}
      <div className="bg-amber-100 text-amber-900 border-b border-amber-200 text-xs py-1.5 px-3 sm:px-4 border-b border-amber-700/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Notice Badge & Animated Slider */}
          <div className="flex items-center space-x-2 flex-1 min-w-0 overflow-hidden">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-600/70 text-slate-800 uppercase tracking-wider shrink-0 shadow-sm border border-amber-500/40">
              <Sparkles className="w-3 h-3 mr-1 animate-pulse text-amber-700" /> Notice
            </span>

            {/* Slider Text Window */}
            <div className="relative flex-1 h-5 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNoticeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center text-slate-800 font-medium tracking-wide truncate text-[11px] sm:text-xs"
                >
                  <span className="truncate">{notices[currentNoticeIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Arrows & Dots */}
            <div className="flex items-center space-x-0.5 shrink-0 pl-1.5 border-l border-amber-700/50">
              <button
                onClick={() => setCurrentNoticeIndex((prev) => (prev - 1 + notices.length) % notices.length)}
                className="p-0.5 hover:bg-amber-700/60 rounded text-amber-700 hover:text-white transition-colors"
                title="Previous Notice"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono text-amber-700/80 px-1 font-semibold">
                {currentNoticeIndex + 1}/{notices.length}
              </span>
              <button
                onClick={() => setCurrentNoticeIndex((prev) => (prev + 1) % notices.length)}
                className="p-0.5 hover:bg-amber-700/60 rounded text-amber-700 hover:text-white transition-colors"
                title="Next Notice"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Direct Phone, Social Links (WhatsApp, Instagram, Facebook) & CMS Guide */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 text-xs text-slate-700">
            {/* Phone Button (Icon Only) */}
            <a
              href="tel:+918250582147"
              className="p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-all border border-amber-300 flex items-center justify-center"
              title="Call Ashram (+91 82505 82147)"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
            </a>

            <span className="hidden sm:inline text-amber-600/60">|</span>

            {/* Social & Messaging Action Icons */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919909478275?text=Pranam%20Ashram.%20I%20would%20like%20information%20regarding%20Kriya%20Yoga%20and%20Ashram%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-all border border-emerald-300 text-[11px] font-medium"
                title="Chat on WhatsApp (+91 99094 78275)"
              >
                <svg className="w-3.5 h-3.5 fill-current text-emerald-600" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.12-1.335c1.467.798 3.12 1.218 4.887 1.219h.005c5.507 0 9.991-4.479 9.992-9.986 0-2.668-1.038-5.176-2.924-7.062C17.194 3.039 14.68 2 12.012 2zm5.836 14.182c-.244.688-1.427 1.314-1.972 1.398-.517.08-1.189.113-3.414-.805-2.848-1.175-4.683-4.06-4.825-4.25-.142-.19-1.155-1.54-1.155-2.936 0-1.397.731-2.083.992-2.368.261-.285.57-.356.76-.356.19 0 .38.002.546.01.178.008.416-.067.653.5.243.582.83 2.023.902 2.166.072.143.119.309.024.499-.095.19-.143.309-.285.475-.142.167-.3.372-.428.5-.142.143-.29.298-.125.583.167.285.74 1.22 1.587 1.975 1.09.972 2.01 1.272 2.295 1.415.285.143.452.119.618-.072.166-.19.712-.832.902-1.118.19-.285.38-.238.641-.143.261.095 1.663.784 1.948.926.285.143.475.214.546.333.072.119.072.689-.172 1.377z"/>
                </svg>
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/paramhansagyanananda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 transition-all border border-pink-300 text-[11px] font-medium"
                title="Follow Paramhansa Gyanananda on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current text-pink-600" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="hidden md:inline">Instagram</span>
              </a>

              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/GarrashiniAshram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition-all border border-blue-300 text-[11px] font-medium"
                title="Visit Garashini Ashram on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current text-blue-600" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden md:inline">Facebook</span>
              </a>
            </div>

            <span className="hidden xl:inline text-amber-600/60">|</span>

            <button
              onClick={() => setIsElementorGuideOpen(true)}
              className="hidden xl:flex items-center space-x-1 text-amber-900 hover:text-amber-700 transition-colors underline decoration-dotted underline-offset-2"
              title="WordPress Elementor CMS Guide"
            >
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>CMS Guide</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-2 text-slate-900 shadow-xl border-b border-amber-200' : 'bg-white py-3 text-slate-800 border-b border-amber-100 '}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            {/* Official Ashram Logo Emblem */}
            <div className="relative w-11 h-11 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo.svg"
                alt="Brahmarishi Satyananda Sannyas Ashram Official Logo"
                className="w-full h-full object-contain filter drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h1 className={`font-serif font-bold tracking-tight text-base sm:text-lg leading-tight transition-colors ${isScrolled ? 'text-slate-800' : 'text-amber-950 '}`}>
                {ASHRAM_INFO.name}
              </h1>
              <p className={`text-[11px] font-medium tracking-wide flex items-center gap-1.5 ${isScrolled ? 'text-amber-700/90' : 'text-amber-700 '}`}>
                <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                <span>{ASHRAM_INFO.headquarters.hills}, {ASHRAM_INFO.headquarters.town}, West Bengal</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-xs font-semibold uppercase tracking-wider">
            {navItems.map((item) => {
              const isActive = location.pathname === (item.id === 'home' ? '/' : `/${item.id}`);
              return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-amber-900 bg-amber-200 font-bold border-b-2 border-amber-500 shadow-sm'
                    : isScrolled
                    ? 'text-slate-800 hover:text-amber-700 hover:bg-amber-100'
                    : 'text-slate-700 hover:text-amber-700 hover:bg-amber-100'
                }`}
              >
                {item.label}
              </button>
            )})}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Audio Chanting Button */}
            <button
              onClick={() => toggleAudioPlay()}
              className={`p-2 rounded-full transition-colors relative ${isPlayingAudio ? 'bg-amber-600 text-white animate-pulse' : isScrolled ? 'bg-amber-900/60 text-slate-700 hover:bg-amber-800' : 'bg-amber-100 text-amber-900 hover:bg-amber-200 '}`}
              title={isPlayingAudio ? 'Pause Chanting Audio' : 'Play Sacred Spiritual Audio (Guru Stotra, Amar Gurur Charan, Vasudev Kirtan)'}
            >
              <Music className="w-4 h-4" />
              {isPlayingAudio && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900"></span>
              )}
            </button>

            {/* Global Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-amber-900/60 text-slate-700 hover:bg-amber-800' : 'bg-amber-100 text-amber-900 hover:bg-amber-200 '}`}
              title="Search Website"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-colors ${isScrolled ? 'bg-amber-900/60 text-slate-700 hover:bg-amber-800' : 'bg-amber-100 text-amber-900 hover:bg-amber-200 '}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{language}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-amber-200 py-1.5 z-50 text-xs">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-amber-50 :bg-slate-800 ${language === 'en' ? 'font-bold text-amber-600' : ''}`}
                  >
                    <span>English</span>
                    {language === 'en' && '✓'}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('hi')}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-amber-50 :bg-slate-800 ${language === 'hi' ? 'font-bold text-amber-600' : ''}`}
                  >
                    <span>हिंदी (Hindi)</span>
                    {language === 'hi' && '✓'}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('bn')}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-amber-50 :bg-slate-800 ${language === 'bn' ? 'font-bold text-amber-600' : ''}`}
                  >
                    <span>বাংলা (Bengali)</span>
                    {language === 'bn' && '✓'}
                  </button>
                </div>
              )}
            </div>


            {/* Donation CTA Button */}
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-800 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-slate-800 animate-pulse" />
              <span>{t('donate')}</span>
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-amber-600 hover:bg-amber-100 :bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-amber-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-fade-in">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {navItems.map((item) => {
                const isActive = location.pathname === (item.id === 'home' ? '/' : `/${item.id}`);
                return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-amber-600 text-white font-bold'
                      : 'text-slate-700 hover:bg-amber-50 :bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              )})}
            </div>

            <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
              <button
                onClick={() => setIsElementorGuideOpen(true)}
                className="flex items-center space-x-2 text-xs text-amber-700 font-medium"
              >
                <Layers className="w-4 h-4 text-amber-500" />
                <span>Elementor CMS Guide</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDonationModalOpen(true);
                }}
                className="flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold text-slate-800 bg-gradient-to-r from-amber-600 to-amber-700 shadow-md"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>{t('donate')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
