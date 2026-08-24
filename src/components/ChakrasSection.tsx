import React from 'react';
import { Sparkles, Activity } from 'lucide-react';

const CHAKRAS = [
  {
    id: 7,
    name: 'Sahasrara',
    englishName: 'Crown Chakra',
    colorText: 'text-purple-600',
    colorBg: 'bg-purple-100',
    colorBorder: 'border-purple-200',
    description: 'The center of spiritual connection, divine wisdom, and enlightenment. Located at the crown of the head.',
  },
  {
    id: 6,
    name: 'Ajna',
    englishName: 'Third Eye Chakra',
    colorText: 'text-indigo-600',
    colorBg: 'bg-indigo-100',
    colorBorder: 'border-indigo-200',
    description: 'The center of intuition, foresight, and spiritual insight. Located between the eyebrows.',
  },
  {
    id: 5,
    name: 'Vishuddha',
    englishName: 'Throat Chakra',
    colorText: 'text-blue-600',
    colorBg: 'bg-blue-100',
    colorBorder: 'border-blue-200',
    description: 'The center of communication, truth, and self-expression. Located at the base of the throat.',
  },
  {
    id: 4,
    name: 'Anahata',
    englishName: 'Heart Chakra',
    colorText: 'text-green-600',
    colorBg: 'bg-green-100',
    colorBorder: 'border-green-200',
    description: 'The center of love, compassion, and emotional balance. Located in the center of the chest.',
  },
  {
    id: 3,
    name: 'Manipura',
    englishName: 'Solar Plexus Chakra',
    colorText: 'text-yellow-600',
    colorBg: 'bg-yellow-100',
    colorBorder: 'border-yellow-200',
    description: 'The center of personal power, confidence, and inner fire. Located in the upper abdomen.',
  },
  {
    id: 2,
    name: 'Svadhishthana',
    englishName: 'Sacral Chakra',
    colorText: 'text-orange-600',
    colorBg: 'bg-orange-100',
    colorBorder: 'border-orange-200',
    description: 'The center of creativity, sexuality, and emotional flow. Located in the lower abdomen.',
  },
  {
    id: 1,
    name: 'Muladhara',
    englishName: 'Root Chakra',
    colorText: 'text-red-600',
    colorBg: 'bg-red-100',
    colorBorder: 'border-red-200',
    description: 'The center of stability, security, and basic survival needs. Located at the base of the spine.',
  }
];

export const ChakrasSection: React.FC = () => {
  return (
    <section id="chakras" className="py-20 bg-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Activity className="w-4 h-4 text-amber-600" />
            <span>Spiritual Anatomy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 leading-tight">
            The 7 Chakras of the Human Body
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Discover the energy centers that govern your physical, emotional, and spiritual well-being through the practice of Kriya Yoga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-5 relative group">
            {/* Soft Glow Behind Image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-200 via-indigo-200 to-purple-200 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 w-full h-[600px] bg-slate-900">
              <img
                src="/images/7-chakras.jpg"
                alt="7 Chakras Meditation"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform ease-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20"></div>
              
              {/* Bottom Title */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-white/90 text-sm font-medium tracking-widest uppercase mb-1">Inner Alignment</p>
                <h3 className="text-white text-2xl font-serif font-bold">Awaken Your Potential</h3>
              </div>
            </div>
          </div>

          {/* Chakras List Right */}
          <div className="lg:col-span-7 space-y-4">
            {CHAKRAS.map((chakra, index) => (
              <div 
                key={chakra.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Chakra Icon/Number */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border ${chakra.colorBg} ${chakra.colorBorder}`}>
                  <span className={`text-lg font-bold ${chakra.colorText}`}>{chakra.id}</span>
                </div>
                
                {/* Chakra Info */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h4 className={`text-xl font-bold font-serif ${chakra.colorText}`}>
                      {chakra.name}
                    </h4>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                      ({chakra.englishName})
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {chakra.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
