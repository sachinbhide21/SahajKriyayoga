import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { AshramBranch } from '../types';

interface VisitAshramModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCentre: AshramBranch | null;
}

export const VisitAshramModal: React.FC<VisitAshramModalProps> = ({
  isOpen,
  onClose,
  selectedCentre
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    visitorCount: '1',
    message: ''
  });

  if (!isOpen || !selectedCentre) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-500/30 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-amber-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-amber-100">
              Visit Request Received
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Hari Om! Your visit inquiry for <strong>{selectedCentre.name} ({selectedCentre.branchName || selectedCentre.location})</strong> has been logged. Our Ashram Seva team will contact you shortly.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 text-left space-y-1">
              <p className="font-bold text-amber-900 dark:text-amber-300">Direct Contact Details:</p>
              <p>📞 Phone: {selectedCentre.phone || '+91 90094 11592, +91 99094 78275'}</p>
              <p>✉️ Email: {selectedCentre.email || 'gururagomon@gmail.com'}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Visit the Ashram</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-amber-100">
                Plan Your Spiritual Visit
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Selected Centre: <strong className="text-amber-800 dark:text-amber-300">{selectedCentre.name} ({selectedCentre.branchName || selectedCentre.state})</strong>
              </p>
            </div>

            {/* Centre Info Card */}
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-slate-900 dark:text-amber-100">{selectedCentre.location}</p>
                <p className="text-slate-600 dark:text-slate-300">{selectedCentre.description}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / Whatsapp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Expected Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Number of Visitors
                  </label>
                  <select
                    value={formData.visitorCount}
                    onChange={(e) => setFormData({ ...formData, visitorCount: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    <option value="1">1 Person (Individual)</option>
                    <option value="2">2 Persons</option>
                    <option value="3-5">3 - 5 Persons (Family/Group)</option>
                    <option value="6+">6+ Persons</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Purpose of Visit / Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Attending Kriya Yoga meditation, Satsang, or accommodation inquiry..."
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg transition-colors flex items-center gap-1.5"
                >
                  <Heart className="w-4 h-4" />
                  <span>Submit Visit Request</span>
                </button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
