import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ASHRAM_INFO } from '../data/ashramData';

export const FloatingWidgets: React.FC = () => {
  const { setIsDonationModalOpen } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/919909478275?text=Pranam%20Ashram.%20I%20would%20like%20information%20regarding%20Kriya%20Yoga%20and%20Ashram%20visit.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:bg-emerald-600 group relative"
        title="WhatsApp Direct Inquiry"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute right-14 whitespace-nowrap bg-emerald-950 text-emerald-100 text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp Ashram
        </span>
      </a>

      {/* Floating Donation Button */}
      <button
        onClick={() => setIsDonationModalOpen(true)}
        className="px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-bold text-xs flex items-center space-x-1.5 shadow-2xl hover:scale-105 transition-transform border border-amber-300/40"
      >
        <Heart className="w-4 h-4 fill-current text-amber-200 animate-pulse" />
        <span className="hidden sm:inline uppercase tracking-wider">Seva / Donate</span>
      </button>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900 text-amber-300 border border-amber-500/40 flex items-center justify-center shadow-xl hover:bg-amber-600 hover:text-white transition-all"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
