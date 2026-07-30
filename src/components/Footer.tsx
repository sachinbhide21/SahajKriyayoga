import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Send, Sparkles, Layers, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ASHRAM_INFO } from '../data/ashramData';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { setIsDonationModalOpen, setIsElementorGuideOpen } = useTheme();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-slate-900 border-t border-amber-200 border-t border-amber-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Quote Banner */}
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-10 border border-amber-200 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-amber-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Subscribe to Spiritual Wisdom & Updates</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Receive Daily Satsang Messages & Event Alerts
            </h3>
            <p className="text-xs text-slate-600">
              Get monthly newsletters containing Paramhans Gyanananda Maharaj's discourses and Kriya camp schedules.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            {!subscribed ? (
              <>
                <input
                  required
                  type="email"
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-full bg-white border border-amber-300 text-xs text-slate-900 placeholder-slate-400 min-w-[260px] focus:outline-none focus:border-amber-500 shadow-inner"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-600 transition-colors shrink-0 flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe Now</span>
                </button>
              </>
            ) : (
              <div className="px-6 py-3 rounded-full bg-emerald-900/80 text-emerald-200 text-xs font-bold flex items-center gap-2 border border-emerald-500/40">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Hari Om! Subscribed successfully.</span>
              </div>
            )}
          </form>
        </div>

        {/* Footer Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.svg"
                  alt="Brahmarishi Satyananda Sannyas Ashram Official Logo"
                  className="w-full h-full object-contain filter drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="font-serif font-bold text-lg text-slate-700">
                {ASHRAM_INFO.name}
              </h2>
            </div>

            <p className="text-slate-700/80 leading-relaxed text-xs">
              Founded in 1971 by Param Pujya Swami Jagadananda Giri Maharaj in memory of Brahmarishi Swami Satyananda Giri Maharaj. Preserving authentic Kriya Yoga and Vedic teachings at Gadrasini Pahar, Belpahari.
            </p>

            <div className="space-y-1.5 text-slate-700/90 text-[11px]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{ASHRAM_INFO.headquarters.hills}, {ASHRAM_INFO.headquarters.town}, West Bengal - {ASHRAM_INFO.headquarters.pinCode}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${ASHRAM_INFO.headquarters.phone}`} className="hover:underline font-bold text-amber-700">
                  {ASHRAM_INFO.headquarters.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{ASHRAM_INFO.headquarters.email}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-amber-700 uppercase tracking-wider text-xs">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-slate-700/80">
              <li><button onClick={() => { navigate('/'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Home</button></li>
              <li><button onClick={() => { navigate('/about'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• About Ashram</button></li>
              <li><button onClick={() => { navigate('/guru-parampara'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Guru Parampara</button></li>
              <li><button onClick={() => { navigate('/present-guru'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Present Guru</button></li>
              <li><button onClick={() => { navigate('/kriya-yoga'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Kriya Yoga Science</button></li>
              <li><button onClick={() => { navigate('/teachings'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Teachings & Gita</button></li>
            </ul>
          </div>

          {/* Ashram Activities */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-amber-700 uppercase tracking-wider text-xs">
              Ashram Activities
            </h3>
            <ul className="space-y-2 text-slate-700/80">
              <li><button onClick={() => { navigate('/branches'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Branches & Map</button></li>
              <li><button onClick={() => { navigate('/events'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Events & Festivals</button></li>
              <li><button onClick={() => { navigate('/gallery'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Photo Gallery</button></li>
              <li><button onClick={() => { navigate('/publications'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• Books & Publications</button></li>
              <li><button onClick={() => { navigate('/youtube'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• YouTube Discourses</button></li>
              <li><button onClick={() => { navigate('/faq'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">• FAQ</button></li>
            </ul>
          </div>

          {/* Seva & CMS */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-amber-700 uppercase tracking-wider text-xs">
              Support & Seva
            </h3>
            <p className="text-slate-700/70 text-[11px] leading-relaxed">
              Donations made to the Ashram qualify for 80G Income Tax exemption benefits.
            </p>
            
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-600 flex items-center justify-center space-x-1.5 shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Make Seva Offering</span>
            </button>

            <button
              onClick={() => setIsElementorGuideOpen(true)}
              className="w-full py-2.5 px-4 rounded-full text-[11px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-300 flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>Elementor CMS Guide</span>
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-700/60 gap-4">
          <p>© 1971 – 2026 {ASHRAM_INFO.name}. {t('all_rights_reserved')}.</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => { navigate('/about'); window.scrollTo(0,0); }} className="hover:text-amber-400">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => { navigate('/about'); window.scrollTo(0,0); }} className="hover:text-amber-400">Terms of Use</button>
            <span>•</span>
            <span className="text-amber-400">Hari Om Tat Sat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
