import React, { useState } from 'react';
import { Search, X, BookOpen, Flame, Calendar, User, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GURU_PARAMPARA, TEACHINGS, UPCOMING_EVENTS, BOOK_PUBLICATIONS } from '../data/ashramData';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setSelectedGuruForBio, setSelectedEventForReg } = useTheme();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredGurus = GURU_PARAMPARA.filter(
    g => g.name.toLowerCase().includes(query.toLowerCase()) || g.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTeachings = TEACHINGS.filter(
    t => t.title.toLowerCase().includes(query.toLowerCase()) || t.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const filteredEvents = UPCOMING_EVENTS.filter(
    e => e.title.toLowerCase().includes(query.toLowerCase()) || e.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBooks = BOOK_PUBLICATIONS.filter(
    b => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-white/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 border border-amber-300 shadow-2xl relative max-h-[80vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-200 ">
          <div className="flex items-center space-x-2 text-amber-800 font-serif font-bold text-lg">
            <Search className="w-5 h-5 text-amber-600" />
            <span>Search Ashram Website</span>
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-amber-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="my-4 relative">
          <input
            autoFocus
            type="text"
            placeholder="Type to search (e.g., Kriya Yoga, Babaji, Gita, Belpahari, Guru Purnima)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-amber-300 bg-amber-50 text-sm text-slate-900 "
          />
        </div>

        {/* Results Scroll Area */}
        <div className="overflow-y-auto space-y-4 pr-2 text-xs">
          
          {/* Gurus */}
          {filteredGurus.length > 0 && (
            <div className="space-y-2">
              <p className="font-bold text-amber-800 uppercase tracking-wider">Guru Parampara Masters ({filteredGurus.length})</p>
              {filteredGurus.map(guru => (
                <div
                  key={guru.id}
                  onClick={() => { setSelectedGuruForBio(guru); setIsSearchOpen(false); }}
                  className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="font-serif font-bold text-slate-900 ">{guru.name}</p>
                      <p className="text-[10px] text-slate-500">{guru.title}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </div>
              ))}
            </div>
          )}

          {/* Teachings */}
          {filteredTeachings.length > 0 && (
            <div className="space-y-2">
              <p className="font-bold text-amber-800 uppercase tracking-wider">Ashram Teachings ({filteredTeachings.length})</p>
              {filteredTeachings.map(t => (
                <div key={t.id} className="p-3 rounded-xl bg-amber-50 flex items-center space-x-3">
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900 ">{t.title}</p>
                    <p className="text-[10px] text-slate-500">{t.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events */}
          {filteredEvents.length > 0 && (
            <div className="space-y-2">
              <p className="font-bold text-amber-800 uppercase tracking-wider">Upcoming Events ({filteredEvents.length})</p>
              {filteredEvents.map(ev => (
                <div
                  key={ev.id}
                  onClick={() => { setSelectedEventForReg(ev); setIsSearchOpen(false); }}
                  className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="font-bold text-slate-900 ">{ev.title}</p>
                      <p className="text-[10px] text-slate-500">{ev.startDate} • {ev.location}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </div>
              ))}
            </div>
          )}

          {/* Books */}
          {filteredBooks.length > 0 && (
            <div className="space-y-2">
              <p className="font-bold text-amber-800 uppercase tracking-wider">Publications ({filteredBooks.length})</p>
              {filteredBooks.map(b => (
                <div key={b.id} className="p-3 rounded-xl bg-amber-50 flex items-center space-x-3">
                  <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900 ">{b.title}</p>
                    <p className="text-[10px] text-slate-500">By {b.author}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
