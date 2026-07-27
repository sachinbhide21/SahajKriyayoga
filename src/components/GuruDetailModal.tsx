import React, { useState, useEffect } from 'react';
import { 
  X, Quote, Sparkles, BookOpen, Calendar, Award, Globe, Tag, 
  Compass, HeartHandshake, Flame, Share2, Check, ChevronRight, 
  Image as ImageIcon, BookMarked, ArrowRight, Home, ShieldCheck 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GURU_PARAMPARA as guruParampara } from '../data/ashramData';

export const GuruDetailModal: React.FC = () => {
  const { selectedGuruForBio, setSelectedGuruForBio } = useTheme();
  const [bioLang, setBioLang] = useState<'en' | 'hi'>('hi');
  const [showSeoMeta, setShowSeoMeta] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedGuruForBio) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedGuruForBio]);

  if (!selectedGuruForBio) return null;

  const g = selectedGuruForBio;
  const isHi = bioLang === 'hi';

  const handleCopyLink = () => {
    const slug = g.urlSlug || `/guru-parampara/${g.id}`;
    navigator.clipboard.writeText(`${window.location.origin}${slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const otherGurus = guruParampara.filter(item => item.id !== g.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-amber-50/95 dark:bg-slate-950/95 backdrop-blur-md animate-fade-in transition-all min-h-screen">
      
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-amber-200/80 dark:border-slate-800 shadow-sm px-4 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setSelectedGuruForBio(null)} 
            className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1 font-bold text-amber-800 dark:text-amber-300"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isHi ? "मुख्य पृष्ठ" : "Home"}</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 font-semibold">{isHi ? "गुरु परंपरा" : "Guru Parampara"}</span>
          <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="text-amber-900 dark:text-amber-200 font-bold truncate max-w-[150px] sm:max-w-none">
            {isHi && g.sanskritName ? g.sanskritName : g.name}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Switch */}
          <div className="inline-flex rounded-lg p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setBioLang('hi')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                isHi ? 'bg-amber-700 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-amber-700'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => setBioLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                !isHi ? 'bg-amber-700 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-amber-700'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setShowSeoMeta(!showSeoMeta)}
            className="hidden md:flex px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-100/70 dark:bg-slate-800 border border-amber-300 dark:border-slate-700 text-amber-900 dark:text-amber-300 hover:bg-amber-200/80 items-center gap-1"
            title="SEO Metadata & Publishing Info"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>SEO Specs</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 flex items-center gap-1 text-xs font-semibold"
            title="Copy Direct Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setSelectedGuruForBio(null)}
            className="p-1.5 rounded-full bg-amber-800 text-white hover:bg-amber-900 shadow-md transition-all"
            title="Close Biography"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Main Page Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* SEO Meta Box */}
        {showSeoMeta && (
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-100/90 dark:bg-slate-900/90 border border-amber-300 dark:border-slate-700 text-xs space-y-2 animate-fade-in">
            <p className="font-bold text-amber-950 dark:text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Tag className="w-4 h-4 text-amber-600" /> SEO & Web Publishing Metadata Specs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800 dark:text-slate-200 font-mono text-[11px] leading-relaxed">
              <div><span className="font-bold text-amber-800 dark:text-amber-400">SEO Title:</span> {g.seoMetaTitle || `${g.name} Official Biography - Kriya Yoga Master`}</div>
              <div><span className="font-bold text-amber-800 dark:text-amber-400">URL Slug:</span> {g.urlSlug || `/guru-parampara/${g.id}`}</div>
              <div className="sm:col-span-2"><span className="font-bold text-amber-800 dark:text-amber-400">Meta Description:</span> {g.seoMetaDescription || g.bio}</div>
              <div><span className="font-bold text-amber-800 dark:text-amber-400">Image Alt Text:</span> {g.imageAltText || `${g.name} Portrait`}</div>
              <div><span className="font-bold text-amber-800 dark:text-amber-400">Guru Lineage Order:</span> Master #{g.order}</div>
            </div>
          </div>
        )}

        {/* Hero Banner Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 via-amber-950 to-slate-950 text-white shadow-2xl border border-amber-500/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Master Portrait */}
            <div className="relative shrink-0 group">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl p-1.5 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 shadow-2xl ring-4 ring-amber-400/20">
                <img
                  src={g.image}
                  alt={g.imageAltText || g.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/gurus/guru_1.png';
                  }}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider shadow-lg whitespace-nowrap">
                Guru #{g.order}
              </div>
            </div>

            {/* Master Titles */}
            <div className="space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-400/40 text-amber-300 uppercase tracking-widest">
                  {isHi ? "गुरु परंपरा आधिकारिक जीवनी" : "Official Guru Biography"}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-100">
                  {g.period}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-100 leading-tight">
                {isHi && g.sanskritName ? g.sanskritName : g.name}
              </h1>

              {g.sanskritName && !isHi && (
                <p className="text-base sm:text-lg font-serif font-semibold text-amber-300">{g.sanskritName}</p>
              )}

              <p className="text-base sm:text-lg font-medium text-amber-200/90 leading-relaxed max-w-2xl">
                {isHi && g.titleHindi ? g.titleHindi : g.title}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-amber-300/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  {isHi ? "100% प्रमाणिक दस्तावेज व ऐतिहासिक तथ्य" : "100% Authenticated Historical Biography"}
                </span>
                <span>•</span>
                <span>{isHi ? "ब्रह्मर्षि सत्यानन्द संन्यास आश्रम" : "Brahmarshi Satyananda Sannyas Ashram"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Introduction Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-md space-y-4">
          <div className="flex items-center gap-3 border-b border-amber-100 dark:border-slate-800 pb-3">
            <BookOpen className="w-6 h-6 text-amber-600 shrink-0" />
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-200">
              {isHi ? "प्रस्तावना — दिव्य प्राकट्य एवं जीवन दर्शन" : "Page Introduction & Overview"}
            </h2>
          </div>
          
          <div className="prose prose-amber dark:prose-invert max-w-none font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line space-y-4">
            {isHi ? (g.introductionHi || g.bioHindi) : (g.introductionEn || g.bio)}
          </div>
        </div>

        {/* Main Content Sections (Uncompressed Word-for-Word Text) */}
        {g.structuredSections && g.structuredSections.length > 0 ? (
          <div className="space-y-8">
            {g.structuredSections.map((sec, idx) => (
              <div 
                key={sec.id || idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-4 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3 border-b border-amber-100 dark:border-slate-800 pb-3">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200">
                    {isHi ? sec.titleHi : sec.titleEn}
                  </h3>
                </div>

                <div className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line space-y-4">
                  {isHi ? sec.contentHi : sec.contentEn}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Standard Structured Sections fallback for other gurus */
          <div className="space-y-8">
            {g.earlyLifeHi && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-600" />
                  <span>{isHi ? "बाल्यकाल एवं पारिवारिक पृष्ठभूमि" : "Early Life & Background"}</span>
                </h3>
                <p className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {isHi ? g.earlyLifeHi : g.earlyLifeEn}
                </p>
              </div>
            )}

            {g.spiritualJourneyHi && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-600" />
                  <span>{isHi ? "आध्यात्मिक यात्रा व क्रियायोग साधना" : "Spiritual Journey & Kriya Yoga"}</span>
                </h3>
                <p className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {isHi ? g.spiritualJourneyHi : g.spiritualJourneyEn}
                </p>
              </div>
            )}

            {g.lineageRoleHi && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span>{isHi ? "गुरु परंपरा एवं संचरण" : "Guru Parampara Role"}</span>
                </h3>
                <p className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {isHi ? g.lineageRoleHi : g.lineageRoleEn}
                </p>
              </div>
            )}

            {g.contributionHi && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-amber-600" />
                  <span>{isHi ? "मानव समाज को योगदान" : "Contribution to Humanity"}</span>
                </h3>
                <p className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {isHi ? g.contributionHi : g.contributionEn}
                </p>
              </div>
            )}

            {g.legacyHi && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-amber-600" />
                  <span>{isHi ? "दिव्य विरासत एवं प्रभाव" : "Spiritual Legacy"}</span>
                </h3>
                <p className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {isHi ? g.legacyHi : g.legacyEn}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Miraculous Lilas & Important Life Events */}
        {((g.lilasList && g.lilasList.length > 0) || (g.lifeMilestones && g.lifeMilestones.length > 0)) && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b border-amber-100 dark:border-slate-800 pb-3">
              <Calendar className="w-6 h-6 text-amber-600 shrink-0" />
              <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-200">
                {isHi ? "अलौकिक लीलाएँ व मुख्य ऐतिहासिक प्रसंग (Important Events & Lilas)" : "Important Life Events & Miraculous Lilas"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {g.lilasList && g.lilasList.length > 0 ? (
                g.lilasList.map((lila, lIdx) => (
                  <div 
                    key={lIdx} 
                    className="p-5 sm:p-6 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200/80 dark:border-slate-700 space-y-3"
                  >
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-950 dark:text-amber-300 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-600 text-white text-xs font-sans flex items-center justify-center shrink-0 font-bold">
                        {lIdx + 1}
                      </span>
                      <span>{isHi ? lila.titleHi : lila.titleEn}</span>
                    </h3>
                    <div className="font-serif text-base leading-relaxed sm:leading-loose text-slate-800 dark:text-slate-200 whitespace-pre-line pl-0 sm:pl-9">
                      {isHi ? lila.textHi : lila.textEn}
                    </div>
                  </div>
                ))
              ) : (
                g.lifeMilestones?.map((ms, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 sm:p-6 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200/80 dark:border-slate-700 space-y-2"
                  >
                    <h3 className="font-serif font-bold text-lg text-amber-950 dark:text-amber-300">
                      {isHi ? ms.titleHi : ms.titleEn}
                    </h3>
                    <p className="font-serif text-base text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                      {isHi ? ms.textHi : ms.textEn}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Core Teachings Section */}
        <div className="bg-amber-100/60 dark:bg-amber-950/30 rounded-3xl p-6 sm:p-10 border border-amber-300/80 dark:border-amber-800/50 shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-amber-300/60 dark:border-amber-800/50 pb-3">
            <Award className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0" />
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-200">
              {isHi ? "मुख्य उपदेश व पावन सिद्धान्त (Teachings & Directives)" : "Core Teachings & Spiritual Principles"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isHi && g.keyTeachingsHindi ? g.keyTeachingsHindi : g.keyTeachings).map((kt, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-slate-800 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="font-serif text-base text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
                  {kt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Highlights Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-800 via-amber-900 to-slate-900 text-white border-l-8 border-amber-400 shadow-xl space-y-3">
          <p className="text-xs font-bold text-amber-300 uppercase tracking-widest flex items-center gap-2">
            <Quote className="w-5 h-5 text-amber-400" />
            <span>{isHi ? "अमृत वचन व अमर वाणी (Sacred Quote Highlights)" : "Sacred Quote Highlights"}</span>
          </p>
          <blockquote className="font-serif italic text-xl sm:text-2xl font-semibold text-amber-100 leading-relaxed">
            "{isHi && g.quoteHindi ? g.quoteHindi : g.quote}"
          </blockquote>

          {isHi && g.quotesHindiList && g.quotesHindiList.length > 1 && (
            <div className="pt-4 border-t border-amber-700/60 space-y-2">
              <p className="text-xs font-bold text-amber-300 uppercase">{isHi ? "अन्य महत्वपूर्ण अमृत विचार:" : "Other Sacred Sayings:"}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-200 font-serif">
                {g.quotesHindiList.slice(1).map((qItem, qIdx) => (
                  <li key={qIdx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>"{qItem}"</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Books & Literature Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-md space-y-4">
          <div className="flex items-center gap-3 border-b border-amber-100 dark:border-slate-800 pb-3">
            <BookMarked className="w-6 h-6 text-amber-600 shrink-0" />
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-200">
              {isHi ? "ग्रंथ, साहित्य एवं भाष्य (Books & Literature)" : "Spiritual Literature & Commentaries"}
            </h2>
          </div>
          <p className="font-serif text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200">
            {isHi ? 
              "योगीराज श्री श्री श्यामाचरण लाहिड़ी महाशय के पावन निर्देशन व आशीर्वाद से श्रीमद्भगवद्गीता का आध्यात्मिक भाष्य, दार्शनिक रचनाएँ, संहिताएँ, व्याख्या-पुस्तिकाएँ और क्रियायोग साधना संबंधी अमर साहित्य प्रकाशित हुआ, जो आज भी साधकों का पथप्रदर्शन कर रहा है।" 
              : "Under the divine guidance and blessings of Yogiraj Sri Sri Shyamacharan Lahiri Mahasaya, spiritual commentaries on the Bhagavad Gita, philosophical texts, samhitas, and authentic Kriya Yoga literature were published to guide seekers worldwide."
            }
          </p>
        </div>

        {/* Image Placement & Visual Gallery Suggestions */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-amber-100 dark:border-slate-800 pb-3">
            <ImageIcon className="w-6 h-6 text-amber-600 shrink-0" />
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-200">
              {isHi ? "दिव्य दर्शन एवं चित्रावली (Gallery & Photo Placement)" : "Divine Gallery & Photo Suggestions"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden border border-amber-200/80 dark:border-slate-700 bg-amber-50 dark:bg-slate-800 p-3 text-center space-y-2">
              <div className="h-48 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={g.image}
                  alt={g.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/gurus/guru_1.png';
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs font-bold text-amber-900 dark:text-amber-300">
                {isHi ? "पावन तैलचित्र एवं स्वरूप" : "Official Sacred Portrait"}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-amber-200/80 dark:border-slate-700 bg-amber-50 dark:bg-slate-800 p-3 text-center space-y-2">
              <div className="h-48 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center p-4">
                <p className="text-xs font-serif text-slate-600 dark:text-slate-300 italic">
                  {isHi ? "काशी विश्वनाथ धाम, मणिकर्णिका घाट व दशाश्वमेध घाट चित्र" : "Kashi Vishwanath & Dashashwamedh Ghat"}
                </p>
              </div>
              <p className="text-xs font-bold text-amber-900 dark:text-amber-300">
                {isHi ? "काशी धाम व साधना स्थल" : "Kashi Sadhana Spot"}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-amber-200/80 dark:border-slate-700 bg-amber-50 dark:bg-slate-800 p-3 text-center space-y-2">
              <div className="h-48 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center p-4">
                <p className="text-xs font-serif text-slate-600 dark:text-slate-300 italic">
                  {isHi ? "रानीखेत हिमालय द्रोणागिरि गुफा क्षेत्र चित्र" : "Ranikhet Himalayan Cave Site"}
                </p>
              </div>
              <p className="text-xs font-bold text-amber-900 dark:text-amber-300">
                {isHi ? "रानीखेत दीक्षा भूमि" : "Ranikhet Initiation Site"}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white p-8 sm:p-10 text-center space-y-4 shadow-xl border border-amber-500/40">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-100">
            {isHi ? "क्रियायोग साधना एवं ब्रह्मर्षि सत्यानन्द संन्यास आश्रम" : "Learn Kriya Yoga & Visit Ashram"}
          </h2>
          <p className="font-serif text-base sm:text-lg text-amber-200/90 max-w-2xl mx-auto leading-relaxed">
            {isHi ? 
              "गुरु-परंपरा के पावन सिद्धांतों के अनुरूप क्रियायोग दीक्षा, नियमित सत्संग, गीता स्वाध्याय और साधना शिविर हेतु ब्रह्मर्षि सत्यानन्द संन्यास आश्रम में आपका हार्दिक स्वागत है।" 
              : "You are cordially invited to visit Brahmarshi Satyananda Sannyas Ashram to receive authentic Kriya Yoga guidance, join daily satsangs, and deepen your spiritual journey."
            }
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setSelectedGuruForBio(null)}
              className="px-6 py-3 rounded-full bg-white text-amber-900 text-sm font-extrabold hover:bg-amber-100 shadow-md transition-all flex items-center gap-2"
            >
              <span>{isHi ? "आश्रम की शाखाएँ व संपर्क देखें" : "Explore Ashram Branches"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Related Pages / Related Gurus Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-amber-100 dark:border-slate-800 pb-3">
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <span>{isHi ? "गुरु-परंपरा के अन्य पूज्य आचार्य (Related Gurus)" : "Explore Other Gurus in Lineage"}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherGurus.map((other) => (
              <button
                key={other.id}
                onClick={() => setSelectedGuruForBio(other)}
                className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800/50 hover:bg-amber-100/80 dark:hover:bg-slate-800 border border-amber-200/80 dark:border-slate-700 transition-all text-left group flex items-center gap-4"
              >
                <img
                  src={other.image}
                  alt={other.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/gurus/guru_1.png';
                  }}
                  className="w-16 h-16 rounded-xl object-cover object-top shrink-0 border border-amber-300 dark:border-slate-600 shadow-sm"
                />
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest block">
                    Guru #{other.order}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-amber-100 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors truncate">
                    {isHi && other.sanskritName ? other.sanskritName : other.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                    {other.period}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center py-6 border-t border-amber-200/60 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-serif space-y-1">
          <p className="font-bold text-amber-900 dark:text-amber-300">
            ब्रह्मर्षि सत्यानन्द संन्यास आश्रम • Brahmarshi Satyananda Sannyas Ashram
          </p>
          <p>
            {isHi ? 
              "मूल दस्तावेज प्रमाणिकता — यह पृष्ठ आश्रम परंपरा के संरक्षित ऐतिहासिक अभिलेखों पर आधारित है।" 
              : "Official Lineage Biography — Content authenticated from sacred Ashram records."
            }
          </p>
        </div>

      </div>
    </div>
  );
};
