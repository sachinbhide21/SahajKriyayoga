import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Sparkles,
  Save,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';

export const AshramInfoTab: React.FC = () => {
  const { ashramInfo, updateAshramInfo } = useWebsiteData();

  const [formData, setFormData] = useState({
    name: ashramInfo.name,
    sanskritName: ashramInfo.sanskritName || '',
    bengaliName: ashramInfo.bengaliName || '',
    foundedYear: ashramInfo.foundedYear,
    founder: ashramInfo.founder,
    inMemoryOf: ashramInfo.inMemoryOf,
    presentGuru: ashramInfo.presentGuru,
    guidingMessage: ashramInfo.guidingMessage,
    guidingMessageEn: ashramInfo.guidingMessageEn || '',
    vision: ashramInfo.vision,
    mission: ashramInfo.mission,
    headquarters: {
      hills: ashramInfo.headquarters.hills,
      town: ashramInfo.headquarters.town,
      district: ashramInfo.headquarters.district,
      state: ashramInfo.headquarters.state,
      country: ashramInfo.headquarters.country,
      pinCode: ashramInfo.headquarters.pinCode,
      phone: ashramInfo.headquarters.phone,
      email: ashramInfo.headquarters.email,
      satsangTimings: ashramInfo.headquarters.satsangTimings
    }
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAshramInfo(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>General Ashram Configuration</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Ashram Profile & Headquarters
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Update official ashram titles, holy mission, headquarters address, phone numbers, and spiritual timings.
          </p>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Changes Saved to Live Site!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Section 1: Official Names & Lineage Identity */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Official Ashram Identity</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1 sm:col-span-1">
              <label className="font-bold text-slate-700">Ashram Name (English) *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Ashram Name (Sanskrit / Devanagari)</label>
              <input
                type="text"
                value={formData.sanskritName}
                onChange={(e) => setFormData({ ...formData, sanskritName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Ashram Name (Bengali Script)</label>
              <input
                type="text"
                value={formData.bengaliName}
                onChange={(e) => setFormData({ ...formData, bengaliName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Founder Master</label>
              <input
                type="text"
                value={formData.founder}
                onChange={(e) => setFormData({ ...formData, founder: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">In Divine Memory Of</label>
              <input
                type="text"
                value={formData.inMemoryOf}
                onChange={(e) => setFormData({ ...formData, inMemoryOf: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Present Spiritual Head</label>
              <input
                type="text"
                value={formData.presentGuru}
                onChange={(e) => setFormData({ ...formData, presentGuru: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Headquarters Contact Details & Timings */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Headquarters Address & Ashram Contact Numbers</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Hills / Mountain Location</label>
              <input
                type="text"
                value={formData.headquarters.hills}
                onChange={(e) => setFormData({
                  ...formData,
                  headquarters: { ...formData.headquarters, hills: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Town / Block</label>
              <input
                type="text"
                value={formData.headquarters.town}
                onChange={(e) => setFormData({
                  ...formData,
                  headquarters: { ...formData.headquarters, town: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">District & State</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="District"
                  value={formData.headquarters.district}
                  onChange={(e) => setFormData({
                    ...formData,
                    headquarters: { ...formData.headquarters, district: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={formData.headquarters.state}
                  onChange={(e) => setFormData({
                    ...formData,
                    headquarters: { ...formData.headquarters, state: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-600" /> Official Phone Numbers
              </label>
              <input
                type="text"
                value={formData.headquarters.phone}
                onChange={(e) => setFormData({
                  ...formData,
                  headquarters: { ...formData.headquarters, phone: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-600" /> Email Address
              </label>
              <input
                type="email"
                value={formData.headquarters.email}
                onChange={(e) => setFormData({
                  ...formData,
                  headquarters: { ...formData.headquarters, email: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> Daily Satsang Timings
              </label>
              <input
                type="text"
                value={formData.headquarters.satsangTimings}
                onChange={(e) => setFormData({
                  ...formData,
                  headquarters: { ...formData.headquarters, satsangTimings: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Spiritual Guiding Message, Vision & Mission */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Guiding Message, Vision & Mission Statements</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Central Spiritual Dictum / Motto</label>
              <input
                type="text"
                value={formData.guidingMessageEn}
                onChange={(e) => setFormData({ ...formData, guidingMessageEn: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Ashram Vision</label>
              <textarea
                rows={2}
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Ashram Mission</label>
              <textarea
                rows={2}
                value={formData.mission}
                onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Update Ashram Profile on Live Website</span>
          </button>
        </div>

      </form>

    </div>
  );
};
