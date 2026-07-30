import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Check, Sparkles, Navigation } from 'lucide-react';
import { ASHRAM_INFO } from '../data/ashramData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    purpose: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Connect with Ashram</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Contact Us & Directions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reach out for Kriya Yoga initiation inquiries, Ashram visits, accommodation, or Bhagwat Katha bookings.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Map Left */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/60 space-y-5">
              <h3 className="font-serif font-bold text-xl text-slate-900 border-b border-amber-100 pb-3">
                Main Ashram Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 ">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Address:</strong>
                    <span>{ASHRAM_INFO.headquarters.hills}, {ASHRAM_INFO.headquarters.town}, District {ASHRAM_INFO.headquarters.district}, {ASHRAM_INFO.headquarters.state} - {ASHRAM_INFO.headquarters.pinCode}, India</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone / WhatsApp:</strong>
                    <a href={`tel:${ASHRAM_INFO.headquarters.phone}`} className="text-amber-700 font-bold hover:underline">
                      {ASHRAM_INFO.headquarters.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Email:</strong>
                    <span>{ASHRAM_INFO.headquarters.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Satsang & Visiting Hours:</strong>
                    <span>{ASHRAM_INFO.headquarters.satsangTimings}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919909478275?text=Pranam%20Ashram.%20I%20would%20like%20information%20regarding%20Kriya%20Yoga%20and%20Ashram%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat directly on WhatsApp (+91 99094 78275)</span>
                </a>
              </div>
            </div>

            {/* How to Reach Card */}
            <div className="bg-amber-50 text-slate-800 rounded-3xl p-6 border border-amber-800 space-y-2 text-xs">
              <h4 className="font-serif font-bold text-slate-700 text-sm flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>How to Reach Belpahari Ashram:</span>
              </h4>
              <p>• <strong>By Train:</strong> Nearest railway stations are Jhargram (40 km) and Ghatshila (35 km).</p>
              <p>• <strong>By Bus / Taxi:</strong> Direct buses and taxis available from Jhargram town to Belpahari.</p>
              <p>• <strong>By Air:</strong> Nearest airport is Kolkata (NSCBIA) approx 180 km.</p>
            </div>

          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-200/60 ">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-slate-900 border-b border-amber-100 pb-3">
                  Send Your Inquiry / Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Swapan Banerjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="9909478275"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Inquiry Purpose</label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    >
                      <option>Kriya Yoga Initiation</option>
                      <option>Ashram Visit & Stay</option>
                      <option>Bhagwat Katha / Gita Class</option>
                      <option>Book / Publication Request</option>
                      <option>Donation & 80G Receipt</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold text-slate-700 mb-1">Your Message / Query *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-slate-900 "
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Ashram Office</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 ">
                  Hari Om! Message Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our Ashram Office at Gadrasini Pahar has received your message regarding <em>{formData.purpose}</em> and will contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-amber-800"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
