import React, { useState } from 'react';
import { Layers, X, Code2, Database, Layout, CheckCircle2, Copy, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ElementorCMSGuideModal: React.FC = () => {
  const { isElementorGuideOpen, setIsElementorGuideOpen } = useTheme();
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isElementorGuideOpen) return null;

  const acfSchemaJSON = `{
  "post_types": {
    "guru_parampara": {
      "labels": { "singular": "Guru", "plural": "Guru Parampara" },
      "fields": [
        { "name": "order_number", "type": "number" },
        { "name": "sanskrit_title", "type": "text" },
        { "name": "era_years", "type": "text" },
        { "name": "guru_portrait", "type": "image" },
        { "name": "key_teachings", "type": "repeater" },
        { "name": "divine_quote", "type": "textarea" }
      ]
    },
    "ashram_branches": {
      "labels": { "singular": "Branch", "plural": "Ashram Branches" },
      "fields": [
        { "name": "branch_state", "type": "select" },
        { "name": "google_maps_lat_lng", "type": "text" },
        { "name": "is_headquarters", "type": "true_false" },
        { "name": "contact_phone", "type": "text" }
      ]
    }
  }
}`;

  const handleCopySchema = () => {
    navigator.clipboard.writeText(acfSchemaJSON);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-amber-300 dark:border-slate-700 shadow-2xl relative max-h-[88vh] overflow-y-auto space-y-6">
        
        <button
          onClick={() => setIsElementorGuideOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 border-b border-amber-200 dark:border-slate-800 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-amber-100">
              WordPress & Elementor Pro Developer Guide
            </h3>
            <p className="text-xs text-amber-800 dark:text-amber-400">
              CMS Migration Specs, ACF Data Schemas & Elementor Template Hierarchy
            </p>
          </div>
        </div>

        {/* Section 1: Template Breakdown */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-amber-200 flex items-center gap-2">
            <Layout className="w-4 h-4 text-amber-600" />
            <span>1. Elementor Pro Theme Builder Template Architecture</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-slate-700">
              <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-0.5">Header & Sticky Nav Template</strong>
              <p className="text-slate-600 dark:text-slate-400">Elementor Theme Builder Header set to Entire Site. Uses Elementor Nav Menu widget + Animated Ticker for Announcements.</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-slate-700">
              <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-0.5">Guru Parampara Loop Grid Template</strong>
              <p className="text-slate-600 dark:text-slate-400">Elementor Loop Item for CPT 'guru_parampara'. Card layout with ACF portrait image, quote, and hover animations.</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-slate-700">
              <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-0.5">Events Calendar Loop Grid Template</strong>
              <p className="text-slate-600 dark:text-slate-400">Custom CPT 'ashram_events' displaying category badges, start/end dates, and Elementor Popup trigger for registration.</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-slate-700">
              <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-0.5">Footer & Social Template</strong>
              <p className="text-slate-600 dark:text-slate-400">Global Footer widget featuring Ashram branch links, 80G tax benefit notice, and Mailchimp/Newsletter integration.</p>
            </div>
          </div>
        </div>

        {/* Section 2: ACF JSON Field Group */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-amber-200 flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-600" />
              <span>2. Advanced Custom Fields (ACF) Schema Export</span>
            </h4>
            <button
              onClick={handleCopySchema}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 flex items-center gap-1"
            >
              {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied JSON!' : 'Copy ACF JSON'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 text-amber-300 font-mono text-[11px] overflow-x-auto border border-amber-500/30 max-h-48">
            {acfSchemaJSON}
          </pre>
        </div>

        {/* Section 3: Scalability */}
        <div className="p-4 rounded-2xl bg-amber-100/60 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2 border border-amber-200/60">
          <strong className="block text-amber-900 dark:text-amber-200 font-bold">Future Scalability & Multi-Language Recommendations:</strong>
          <ul className="space-y-1 list-disc pl-4">
            <li>Use WPML or Polylang Pro in WordPress for synchronized English, Hindi, and Bengali page translations.</li>
            <li>Configure Elementor Popup Builder for instant donation receipts and WhatsApp registration redirects.</li>
            <li>Use WooCommerce with Razorpay / Cashfree plugin for 80G compliant instant automated donation receipts.</li>
          </ul>
        </div>

        <div className="text-right pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setIsElementorGuideOpen(false)}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-amber-800 hover:bg-amber-900"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
