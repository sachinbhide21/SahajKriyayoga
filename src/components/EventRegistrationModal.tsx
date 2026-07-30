import React, { useState } from 'react';
import { X, Calendar, Check, User, Phone, MapPin, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const EventRegistrationModal: React.FC = () => {
  const { selectedEventForReg, setSelectedEventForReg } = useTheme();
  const [registered, setRegistered] = useState(false);

  if (!selectedEventForReg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-amber-300 shadow-2xl relative space-y-4">
        
        <button
          onClick={() => { setSelectedEventForReg(null); setRegistered(false); }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 "
        >
          <X className="w-5 h-5" />
        </button>

        {!registered ? (
          <>
            <div className="space-y-1 pr-6">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 uppercase">
                {selectedEventForReg.category}
              </span>
              <h3 className="font-serif font-bold text-lg text-slate-900 ">
                {selectedEventForReg.title}
              </h3>
              <p className="text-xs text-amber-700 font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedEventForReg.startDate} • {selectedEventForReg.location}</span>
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setRegistered(true);
              }}
              className="space-y-3 text-xs pt-2"
            >
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Anupam Mukherjee"
                  className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-white text-slate-900 "
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="9909478275"
                  className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-white text-slate-900 "
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">City / District</label>
                <input
                  type="text"
                  placeholder="e.g. Jhargram / Kolkata"
                  className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-white text-slate-900 "
                />
              </div>

              <div className="p-3 rounded-xl bg-amber-50 text-[11px] text-amber-900 ">
                <p>• Accommodation & Sattvic Prasadam provided at Belpahari Ashram during camps.</p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-white bg-amber-700 hover:bg-amber-800"
              >
                Confirm Event Registration
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900 ">
              Registration Confirmed!
            </h3>
            <p className="text-xs text-slate-600 ">
              Hari Om! Your registration for <strong>{selectedEventForReg.title}</strong> has been received. Our event coordinator will send updates on WhatsApp.
            </p>
            <button
              onClick={() => { setSelectedEventForReg(null); setRegistered(false); }}
              className="px-6 py-2 rounded-full text-xs font-bold text-white bg-amber-800"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
