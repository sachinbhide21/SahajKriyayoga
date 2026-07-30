import React from 'react';
import { Quote, Sparkles, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/ashramData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Devotee Experiences & Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Devotee Testimonials
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reflections of peace and spiritual transformation from seekers associated with the Guru Parampara.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 shadow-lg border border-amber-200/60 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-amber-500 opacity-60" />
                
                <p className="font-serif italic text-sm text-slate-800 leading-relaxed font-quote">
                  "{t.quote}"
                </p>

                <p className="text-xs text-slate-600 ">
                  {t.fullStory}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-0.5">
                <p className="font-serif font-bold text-sm text-amber-900 ">{t.name}</p>
                <p className="text-[11px] text-slate-500 ">{t.roleOrProfession} • {t.location}</p>
                <p className="text-[10px] text-amber-600 font-bold">Associated for {t.associationYears} Years</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
