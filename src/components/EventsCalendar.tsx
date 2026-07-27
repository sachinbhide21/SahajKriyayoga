import React, { useState } from 'react';
import { Calendar, MapPin, Clock, User, Sparkles, Filter, CheckCircle2, X } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/ashramData';
import { EventItem } from '../types';
import { useTheme } from '../context/ThemeContext';

export const EventsCalendar: React.FC = () => {
  const { setSelectedEventForReg } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const categories = ['All', 'Festival', 'Kriya Camp', 'Bhagwat Katha', 'Special Event'];

  const filteredEvents = activeCategory === 'All'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(e => e.category === activeCategory);

  return (
    <section id="events" className="py-20 bg-[#F5F0EB] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-200 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Sacred Gatherings & Festivals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 dark:text-amber-100">
            Upcoming Events & Spiritual Camps
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Participate in divine celebrations, intensive Kriya retreats, and Srimad Bhagwat Kathas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                activeCategory === cat
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-7 shadow-lg border border-amber-200/60 dark:border-slate-800 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Date Badge & Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300">
                    {event.category}
                  </span>
                  
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-slate-800 px-3 py-1 rounded-lg border border-amber-200/50">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>{event.startDate} {event.endDate ? `to ${event.endDate}` : ''}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-amber-100">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {event.description}
                </p>

                {/* Specs */}
                <div className="space-y-2 pt-3 border-t border-amber-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Timings:</strong> {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Venue:</strong> {event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Presided By:</strong> {event.speaker}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedEventForReg(event)}
                  className="w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-800 shadow-md transition-all text-center"
                >
                  Register / Participate in Event
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
