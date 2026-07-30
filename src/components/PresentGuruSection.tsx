import React from 'react';
import { Quote, Sparkles, BookOpen, Flame, Heart, ArrowRight, Play } from 'lucide-react';
import { GURU_PARAMPARA, ASHRAM_INFO } from '../data/ashramData';
import { useTheme } from '../context/ThemeContext';

export const PresentGuruSection: React.FC = () => {
  const { setSelectedGuruForBio } = useTheme();
  const presentGuru = GURU_PARAMPARA.find(g => g.id === 'gyanananda-giri') || GURU_PARAMPARA[5];

  return (
    <section id="present-guru" className="py-20 bg-[#FAF8F5] transition-colors duration-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Present Spiritual Head & Acharya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Paramhans Gyanananda Maharaj
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Guiding thousands of spiritual seekers with infinite compassion, Kriya Yoga wisdom, and Vedic discourses.
          </p>
        </div>

        {/* Main Highlight Grid: Photograph Left, Quote & Teachings Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-200/60 ">
          
          {/* Large Photograph Left */}
          <div className="lg:col-span-5 text-center">
            <div className="relative inline-block mx-auto">
              {/* Outer Golden Aura Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 blur-lg opacity-40 animate-pulse-glow"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300/80 w-full max-w-sm mx-auto">
                <img
                  src={presentGuru.image}
                  alt={presentGuru.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/gurus/guru_6.png';
                  }}
                  className="w-full h-[420px] object-cover object-top filter contrast-105"
                />
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-white/90 p-4 text-center text-slate-800 border-t border-amber-200">
                  <p className="font-serif font-bold text-lg text-slate-900">{presentGuru.name}</p>
                  <p className="text-xs text-amber-800 font-bold">Present Acharya • Satyananda Sannyas Ashram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote & Message Right */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Guiding Message Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-600 space-y-3">
              <div className="flex items-center space-x-2 text-amber-800 ">
                <Quote className="w-8 h-8 opacity-60" />
                <span className="text-xs font-bold uppercase tracking-widest">Guiding Message</span>
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-950 tracking-wide">
                "{ASHRAM_INFO.guidingMessage}"
              </p>
              <p className="text-sm font-quote italic text-slate-700 ">
                "Know Thyself. Turn your consciousness inward through Kriya meditation. Beneath all mental noise lies your true unchanging, blissful Atman."
              </p>
            </div>

            {/* Core Teachings List */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wider">
                Core Teachings & Spiritual Expositions
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-950 flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Kriya Yoga Science</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-950 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Bhagavad Gita</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-950 flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Bhagwat Katha</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-950 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Sanatan Dharma</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-950 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Self Realization</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-950 flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Universal Love</span>
                </div>
              </div>
            </div>

            {/* Read More & Discourses Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedGuruForBio(presentGuru)}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-600 shadow-md transition-all flex items-center space-x-2"
              >
                <span>Read Full Acharya Biography</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
