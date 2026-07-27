import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Quote, Award } from 'lucide-react';
import { GURU_PARAMPARA } from '../data/ashramData';
import { GuruParamparaItem } from '../types';
import { useTheme } from '../context/ThemeContext';

export const GuruParamparaSection: React.FC = () => {
  const { setSelectedGuruForBio } = useTheme();

  return (
    <section id="guru-parampara" className="py-20 bg-gradient-to-b from-amber-950 via-slate-950 to-amber-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Mandala Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Unbroken Divine Lineage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
            Guru Parampara
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base font-quote italic">
            The sacred lineage of Kriya Masters descending from Mahavatar Babaji to present Acharya Paramhans Gyanananda Maharaj.
          </p>
        </div>

        {/* Timeline Desktop Grid / Horizontal Flow */}
        <div className="relative">
          
          {/* Connecting Line across timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600/20 via-amber-400/60 to-amber-600/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
            {GURU_PARAMPARA.map((guru, index) => (
              <div
                key={guru.id}
                onClick={() => setSelectedGuruForBio(guru)}
                className="group relative bg-amber-950/60 dark:bg-slate-900/80 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-5 shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-amber-500/20 cursor-pointer flex flex-col justify-between"
              >
                {/* Sequence Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-serif font-black text-xs shadow-md">
                  0{guru.order}
                </div>

                <div>
                  {/* Guru Portrait Frame */}
                  <div className="relative w-28 h-28 mx-auto mt-2 mb-4 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={guru.image}
                      alt={guru.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/gurus/guru_1.png';
                      }}
                      className="w-full h-full object-cover object-top rounded-full filter contrast-105"
                    />
                    {/* Glowing Aura Ring */}
                    <div className="absolute -inset-1.5 rounded-full border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center space-y-1">
                    <h3 className="font-serif font-bold text-amber-100 text-base group-hover:text-amber-300 transition-colors leading-tight">
                      {guru.name}
                    </h3>
                    {guru.sanskritName && (
                      <p className="text-[11px] text-amber-400 font-medium">
                        {guru.sanskritName}
                      </p>
                    )}
                    <p className="text-[10px] text-amber-300/80 font-mono uppercase tracking-wider">
                      {guru.period}
                    </p>
                  </div>

                  {/* Key Title Tag */}
                  <div className="mt-3 text-center">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-amber-900/50 border border-amber-500/20 text-[10px] text-amber-200 line-clamp-2">
                      {guru.title}
                    </span>
                  </div>

                  {/* Short Quote Preview */}
                  <p className="mt-3 text-[11px] text-amber-200/70 italic font-quote line-clamp-3 text-center">
                    "{guru.quote}"
                  </p>
                </div>

                {/* Read Bio Button */}
                <div className="mt-4 pt-3 border-t border-amber-500/20 text-center">
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-amber-400 group-hover:text-amber-200 uppercase tracking-wider">
                    <span>Read Biography</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Down Arrow / Flow Explanation */}
        <div className="mt-12 text-center text-xs text-amber-300/80 space-y-1">
          <p className="font-medium uppercase tracking-widest">Unbroken Lineage of Kriya Realization</p>
          <p className="text-amber-200/60">Click on any Master to view their detailed divine life story & teachings.</p>
        </div>

      </div>
    </section>
  );
};
