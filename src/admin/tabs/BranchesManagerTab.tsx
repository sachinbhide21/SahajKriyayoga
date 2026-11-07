import React, { useState } from 'react';
import {
  MapPin,
  Plus,
  Trash2,
  Edit2,
  Phone,
  Mail,
  ExternalLink,
  Sparkles,
  Building,
  X
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { AshramBranch } from '../../types';

export const BranchesManagerTab: React.FC = () => {
  const { branches, addBranch, updateBranch, deleteBranch } = useWebsiteData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState<AshramBranch | null>(null);

  const [name, setName] = useState('');
  const [state, setState] = useState('West Bengal');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('+91 90094 11592');
  const [email, setEmail] = useState('gururagomon@gmail.com');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [isHeadquarters, setIsHeadquarters] = useState(false);

  const openCreateModal = () => {
    setEditingBranch(null);
    setName('');
    setState('West Bengal');
    setLocation('');
    setAddress('');
    setPhone('+91 90094 11592');
    setEmail('gururagomon@gmail.com');
    setDescription('');
    setImage('/images/branches/jalampura_1.png');
    setGoogleMapsUrl('');
    setIsHeadquarters(false);
    setIsModalOpen(true);
  };

  const openEditModal = (b: AshramBranch) => {
    setEditingBranch(b);
    setName(b.name);
    setState(b.state);
    setLocation(b.location);
    setAddress(b.address || '');
    setPhone(b.phone || '');
    setEmail(b.email || '');
    setDescription(b.description || '');
    setImage(b.image || '');
    setGoogleMapsUrl(b.googleMapsUrl || '');
    setIsHeadquarters(b.isHeadquarters || false);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editingBranch) {
      updateBranch(editingBranch.id, {
        name: name.trim(),
        state: state.trim(),
        location: location.trim(),
        address: address.trim(),
        phone: phone.trim(),
        email: email.trim(),
        description: description.trim(),
        image: image.trim() || '/images/branches/jalampura_1.png',
        googleMapsUrl: googleMapsUrl.trim(),
        isHeadquarters
      });
    } else {
      addBranch({
        name: name.trim(),
        state: state.trim(),
        location: location.trim(),
        address: address.trim(),
        phone: phone.trim(),
        email: email.trim(),
        description: description.trim(),
        image: image.trim() || '/images/branches/jalampura_1.png',
        googleMapsUrl: googleMapsUrl.trim(),
        isHeadquarters,
        coordinates: { lat: 22.6, lng: 86.8 }
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-purple-700" />
            <span>Ashram Branch Network</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Branches & Sadhana Kutirs
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage ashram centers across West Bengal, Gujarat, Madhya Pradesh, Uttarakhand, and Odisha.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Branch</span>
        </button>
      </div>

      {/* Branches List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {branches.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl border border-slate-200/80 hover:border-purple-300 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              <img
                src={b.image}
                alt={b.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/branches/jalampura_1.png';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-600 text-white shadow-md">
                  {b.state}
                </span>
                {b.isHeadquarters && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-400 text-slate-900 shadow-md">
                    ★ Headquarters
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                  {b.name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {b.description || b.about}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span className="truncate">{b.location}</span>
                </div>
                {b.phone && (
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{b.phone}</span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end space-x-2">
                  <button
                    onClick={() => openEditModal(b)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-[11px] font-semibold flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" /> Edit
                  </button>
                  {!b.isHeadquarters && (
                    <button
                      onClick={() => deleteBranch(b.id)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 text-[11px] font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                {editingBranch ? 'Edit Ashram Branch' : 'Add New Ashram Branch'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Branch Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jagadanand Sahaj Kriyayog Kutir, Jalampura"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">State</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gujarat"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">City / District / Region</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jalampura, Anand / Kheda"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Complete Address</label>
                <textarea
                  rows={2}
                  placeholder="Street address, landmarks, pin code..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99094 78275"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ashram@example.com"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Branch Photo URL</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="e.g. /images/branches/jalampura_1.png or https://..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Google Maps Direction URL</label>
                <input
                  type="text"
                  value={googleMapsUrl}
                  onChange={(e) => setGoogleMapsUrl(e.target.value)}
                  placeholder="https://maps.google.com/?q=..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Description / Spiritual Activities</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Sadhana schedule, temple premises, silent meditation facilities..."
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
                  className="px-5 py-2 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-md"
                >
                  {editingBranch ? 'Save Changes' : 'Add Branch'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
