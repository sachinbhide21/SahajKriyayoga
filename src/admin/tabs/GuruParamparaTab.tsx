import React, { useState } from 'react';
import {
  Sparkles,
  Edit2,
  X,
  Save,
  CheckCircle2,
  User,
  Quote
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { GuruParamparaItem } from '../../types';

export const GuruParamparaTab: React.FC = () => {
  const { guruParampara, updateGuru } = useWebsiteData();

  const [editingGuru, setEditingGuru] = useState<GuruParamparaItem | null>(null);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const openEdit = (g: GuruParamparaItem) => {
    setEditingGuru(g);
    setName(g.name);
    setTitle(g.title);
    setPeriod(g.period);
    setQuote(g.quote);
    setImage(g.image);
    setBio(g.bio);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGuru) return;

    updateGuru(editingGuru.id, {
      name,
      title,
      period,
      quote,
      image,
      bio
    });

    setEditingGuru(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Sacred Lineage Content</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Guru Parampara Masters
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage holy portraits, spiritual titles, life milestones, quotes, and biographies of the Kriya Yoga lineage.
          </p>
        </div>
      </div>

      {/* Gurus Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {guruParampara.map((guru) => (
          <div
            key={guru.id}
            className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-lg transition-all p-5 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start space-x-3.5">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-amber-50 border border-amber-200 shrink-0 shadow-sm">
                <img
                  src={guru.image}
                  alt={guru.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/gurus/guru_6.png';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">
                  Order #{guru.order} • {guru.period}
                </span>
                <h4 className="font-serif font-bold text-sm text-slate-900 truncate">
                  {guru.name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {guru.title}
                </p>
              </div>
            </div>

            {/* Quote */}
            {guru.quote && (
              <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-100 text-[11px] text-amber-950 italic flex items-start gap-1.5">
                <Quote className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                <span className="line-clamp-2">"{guru.quote}"</span>
              </div>
            )}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] text-slate-400">
                {guru.keyTeachings ? `${guru.keyTeachings.length} Core Teachings` : ''}
              </span>

              <button
                onClick={() => openEdit(guru)}
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingGuru && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                Edit Guru: {editingGuru.name}
              </h3>
              <button
                onClick={() => setEditingGuru(null)}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Master Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Spiritual Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Era / Period</label>
                  <input
                    type="text"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Holy Image URL</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Central Holy Quote</label>
                <input
                  type="text"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Short Biography</label>
                <textarea
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingGuru(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md"
                >
                  Save Master Profile
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
