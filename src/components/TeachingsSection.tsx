import React, { useState } from 'react';
import { Flame, BookOpen, Heart, Sun, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { TEACHINGS } from '../data/ashramData';
import { TeachingItem } from '../types';

export const TeachingsSection: React.FC = () => {
  const [selectedTeaching, setSelectedTeaching] = useState<TeachingItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-amber-500" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-amber-500" />;
      case 'Heart': return <Heart className="w-6 h-6 text-amber-500" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-500" />;
      default: return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="teachings" className="py-20 bg-[#F5F0EB] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Pillars of Spiritual Wisdom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Core Ashram Teachings
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Empowering seekers through ancient scientific Yoga, scriptural wisdom, and devotional immersion.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHINGS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTeaching(item)}
              className="group bg-white rounded-3xl p-7 shadow-lg border border-amber-200/60 hover:border-amber-400 :border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon + Titles */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  {item.hindiTitle && (
                    <span className="text-xs font-serif font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">
                      {item.hindiTitle}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 :text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 ">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {item.shortDescription}
                </p>

                {/* Benefits List Preview */}
                <div className="space-y-1.5 pt-2 border-t border-amber-100 ">
                  {item.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-700 ">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900 :text-amber-700">
                <span>Explore Teaching</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Teaching Detail Modal */}
      {selectedTeaching && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-300 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            
            <button
              onClick={() => setSelectedTeaching(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-amber-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                {getIcon(selectedTeaching.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 ">
                  {selectedTeaching.title}
                </h3>
                <p className="text-xs font-bold text-amber-700 ">
                  {selectedTeaching.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedTeaching.fullDescription}
            </p>

            <div className="space-y-3 bg-amber-50 p-5 rounded-2xl border border-amber-200/60 ">
              <h4 className="font-serif font-bold text-amber-900 text-sm">
                Key Spiritual Benefits & Outcomes:
              </h4>
              <ul className="space-y-2">
                {selectedTeaching.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-slate-700 ">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-600 ">
              <p className="font-bold text-amber-800 mb-1">Practice Overview:</p>
              <p>{selectedTeaching.practiceOverview}</p>
            </div>

            <div className="text-right">
              <button
                onClick={() => setSelectedTeaching(null)}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
