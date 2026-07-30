import React, { useState } from 'react';
import { Heart, Sparkles, Copy, Check, ShieldCheck, QrCode, Phone, Building } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ASHRAM_INFO } from '../data/ashramData';

export const DonationSection: React.FC = () => {
  const { isDonationModalOpen, setIsDonationModalOpen } = useTheme();
  const [copiedBank, setCopiedBank] = useState(false);
  const [selectedSeva, setSelectedSeva] = useState<string>('Annadaana Seva');

  const sevaCauses = [
    { name: 'Annadaana Seva (Free Meal Distribution)', desc: 'Provides daily nutritious sattvic meals to visiting sadhaks and rural villagers around Belpahari.' },
    { name: 'Dhyana Mandir & Ashram Development', desc: 'Maintenance and expansion of meditation halls, guest rooms, and Yagya Shala.' },
    { name: 'Kriya Yoga Literature & Propagation', desc: 'Printing and free distribution of Kriya Yoga literature and Gita study books.' },
    { name: 'Tree Plantation & Gau Seva', desc: 'Care for Ashram Gau Shala cows and environmental greening around Gadrasini Pahar.' }
  ];

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("Brahmarishi Satyananda Sannyas Ashram | A/C: 00000000 | IFSC: SBIN0001827");
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  return (
    <section id="donate" className="py-20 bg-[#FAF8F5] text-slate-900 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner CTA */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-700 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>Sacred Seva & Offerings</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
            Support Ashram Seva Activities
          </h2>

          <p className="text-slate-700/80 text-sm sm:text-base leading-relaxed">
            Your generous contributions sustain the daily Annadaana, Kriya Yoga propagation, Gau Seva, and sacred forest hermitages of Gadrasini Pahar.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Causes Left */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif font-bold text-slate-700 text-xl">
              Select Your Preferred Seva Contribution:
            </h3>

            <div className="space-y-3">
              {sevaCauses.map((cause, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSeva(cause.name)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    selectedSeva === cause.name
                      ? 'bg-amber-900/80 border-amber-400 text-white shadow-xl'
                      : 'bg-slate-50/60 border-amber-500/20 text-slate-700/80 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-sm text-slate-700">{cause.name}</h4>
                    <span className="text-amber-400 font-bold">{selectedSeva === cause.name ? '✓' : ''}</span>
                  </div>
                  <p className="text-xs text-slate-700/70 mt-1">{cause.desc}</p>
                </div>
              ))}
            </div>

            {/* Tax Exemption Badge */}
            <div className="p-4 rounded-2xl bg-amber-900/40 border border-amber-200 flex items-center space-x-3 text-xs text-slate-700">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-amber-700">80G Income Tax Benefit</p>
                <p className="text-[11px] text-slate-700/80">Donations qualify for 80G tax deduction. Official receipts issued instantly.</p>
              </div>
            </div>
          </div>

          {/* Bank & UPI Details Right */}
          <div className="lg:col-span-6 bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2 pb-4 border-b border-amber-500/20">
              <h4 className="font-serif font-bold text-xl text-slate-700">Direct Bank & UPI Transfer</h4>
              <p className="text-xs text-slate-700/70">Scan QR Code or transfer directly to Ashram Bank Account</p>
            </div>

            {/* QR Code & UPI Placeholder */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="w-36 h-36 bg-white rounded-2xl p-2 flex flex-col items-center justify-center border-2 border-amber-400 shadow-xl text-slate-950 text-center">
                <QrCode className="w-24 h-24 text-slate-900" />
                <span className="text-[9px] font-bold uppercase mt-1">UPI / GPay / PhonePe</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700 text-center sm:text-left">
                <p className="font-bold text-amber-700 text-sm">Brahmarishi Satyananda Sannyas Ashram</p>
                <p><strong>Bank:</strong> State Bank of India (SBI)</p>
                <p><strong>Branch:</strong> Belpahari Branch, Jhargram</p>
                <p><strong>Account No:</strong> 00000000</p>
                <p><strong>IFSC Code:</strong> SBIN0001827</p>
                <p><strong>UPI ID:</strong> satyanandashram@sbi</p>
              </div>
            </div>

            {/* Copy Button */}
            <div className="pt-2">
              <button
                onClick={handleCopyAccount}
                className="w-full py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-600 transition-colors flex items-center justify-center space-x-2"
              >
                {copiedBank ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                <span>{copiedBank ? 'Bank Details Copied to Clipboard!' : 'Copy Bank Account Details'}</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-700/60 text-center">
              After transfer, please share transaction reference via WhatsApp at <strong className="text-amber-700">+91 99094 78275 / +91 90094 11592</strong> to receive 80G receipt.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
