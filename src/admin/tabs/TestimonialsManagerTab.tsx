import React, { useState } from 'react';
import {
  MessageSquareQuote,
  Plus,
  Trash2,
  Edit2,
  Quote,
  User,
  MapPin,
  X
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { DevoteeTestimonial } from '../../types';

export const TestimonialsManagerTab: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useWebsiteData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<DevoteeTestimonial | null>(null);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [associationYears, setAssociationYears] = useState(5);
  const [roleOrProfession, setRoleOrProfession] = useState('Kriya Sadhak');
  const [quote, setQuote] = useState('');
  const [fullStory, setFullStory] = useState('');

  const openCreateModal = () => {
    setEditingItem(null);
    setName('');
    setLocation('');
    setAssociationYears(5);
    setRoleOrProfession('Kriya Sadhak');
    setQuote('');
    setFullStory('');
    setIsModalOpen(true);
  };

  const openEditModal = (t: DevoteeTestimonial) => {
    setEditingItem(t);
    setName(t.name);
    setLocation(t.location);
    setAssociationYears(t.associationYears);
    setRoleOrProfession(t.roleOrProfession || 'Kriya Sadhak');
    setQuote(t.quote);
    setFullStory(t.fullStory);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    if (editingItem) {
      updateTestimonial(editingItem.id, {
        name: name.trim(),
        location: location.trim(),
        associationYears: Number(associationYears),
        roleOrProfession: roleOrProfession.trim(),
        quote: quote.trim(),
        fullStory: fullStory.trim() || quote.trim()
      });
    } else {
      addTestimonial({
        name: name.trim(),
        location: location.trim(),
        associationYears: Number(associationYears),
        roleOrProfession: roleOrProfession.trim(),
        quote: quote.trim(),
        fullStory: fullStory.trim() || quote.trim()
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5 text-teal-700" />
            <span>Devotee Experiences</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Devotee Testimonials & Grace
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage real spiritual experiences shared by practicing Kriya sadhaks and devotees.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-lg transition-all p-5 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <Quote className="w-6 h-6 text-teal-400 opacity-60" />
              <p className="font-serif italic text-xs text-slate-800 leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-xs text-slate-900">{t.name}</h5>
                <span className="text-[11px] text-slate-500">
                  {t.location} • {t.associationYears} yrs with Ashram
                </span>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => openEditModal(t)}
                  className="p-1 rounded text-slate-600 hover:text-teal-700 hover:bg-teal-50"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => deleteTestimonial(t.id)}
                  className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                {editingItem ? 'Edit Testimonial' : 'Add Devotee Testimonial'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Devotee Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">City / State</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Kolkata, West Bengal"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Years of Association</label>
                  <input
                    type="number"
                    value={associationYears}
                    onChange={(e) => setAssociationYears(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Role / Profession</label>
                  <input
                    type="text"
                    value={roleOrProfession}
                    onChange={(e) => setRoleOrProfession(e.target.value)}
                    placeholder="e.g. Senior Kriya Sadhak"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Featured Quote *</label>
                <textarea
                  rows={2}
                  required
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Key blessing, transformative quote, or insight..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Full Spiritual Story (Optional)</label>
                <textarea
                  rows={3}
                  value={fullStory}
                  onChange={(e) => setFullStory(e.target.value)}
                  placeholder="Full testimonial of sadhana experiences with Paramhans Gyanananda Maharaj..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md"
                >
                  {editingItem ? 'Save Changes' : 'Add Testimonial'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
