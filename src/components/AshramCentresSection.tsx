import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Sparkles,
  Crown,
  Trees,
  ChevronDown,
  ChevronUp,
  Flame,
  Heart,
  BookOpen,
  Users,
  Compass,
  Sun,
  Building2,
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ASHRAM_BRANCHES } from '../data/ashramData';
import { AshramBranch } from '../types';
import { IndiaMap } from './IndiaMap';
import { VisitAshramModal } from './VisitAshramModal';
import { HeadquartersMainCentre } from './HeadquartersMainCentre';

export const AshramCentresSection: React.FC = () => {
  const [selectedCentreId, setSelectedCentreId] = useState<string>('headquarters-belpahari');
  const [activeStateFilter, setActiveStateFilter] = useState<string>('All');
  const [expandedAboutId, setExpandedAboutId] = useState<string | null>('branch-ganjit');
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [modalTargetCentre, setModalTargetCentre] = useState<AshramBranch | null>(null);

  // State to track currently active top image per centre
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});

  // Lightbox modal state for enlarged image preview
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    title: string;
    images: string[];
    index: number;
  }>({
    isOpen: false,
    title: '',
    images: [],
    index: 0
  });

  // Filter centres by state tab
  const filteredCentres =
    activeStateFilter === 'All'
      ? ASHRAM_BRANCHES
      : ASHRAM_BRANCHES.filter((c) => c.state === activeStateFilter);

  const statesList = ['All', 'West Bengal', 'Madhya Pradesh', 'Gujarat', 'Uttarakhand'];

  const handleSelectCentre = (id: string) => {
    setSelectedCentreId(id);
    const cardElement = document.getElementById(`centre-card-${id}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleOpenVisitModal = (centre: AshramBranch) => {
    setModalTargetCentre(centre);
    setVisitModalOpen(true);
  };

  const getActivityIcon = (act: string) => {
    const actLower = act.toLowerCase();
    if (actLower.includes('kriya')) return <Flame className="w-3.5 h-3.5 text-amber-500" />;
    if (actLower.includes('meditation')) return <Sparkles className="w-3.5 h-3.5 text-amber-500" />;
    if (actLower.includes('satsang') || actLower.includes('discourses')) return <Users className="w-3.5 h-3.5 text-amber-500" />;
    if (actLower.includes('retreat') || actLower.includes('camp')) return <Compass className="w-3.5 h-3.5 text-amber-500" />;
    if (actLower.includes('gita')) return <BookOpen className="w-3.5 h-3.5 text-amber-500" />;
    if (actLower.includes('katha') || actLower.includes('festivals')) return <Sun className="w-3.5 h-3.5 text-amber-500" />;
    return <Heart className="w-3.5 h-3.5 text-amber-500" />;
  };

  return (
    <div className="relative">
      {/* Anchor targets */}
      <div id="centres" className="absolute -top-24 left-0" />
      <div id="branches" className="absolute -top-24 left-0" />
      <div id="our-centres" className="absolute -top-24 left-0" />

      {/* 1. Visually Prominent Main Headquarters Section */}
      <HeadquartersMainCentre />

      {/* 2. Interactive India Map & All Branch Centres Section */}
      <section className="py-20 bg-[#FAF8F5] transition-colors duration-300 border-t border-amber-200/60 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header for Branches */}
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/50 shadow-sm">
              <Compass className="w-4 h-4 text-amber-600 " />
              <span>Sacred Geography</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
              All Ashram Centres Across India
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Explore our main headquarters and branch centres located across West Bengal, Madhya Pradesh, Gujarat, and Uttarakhand.
            </p>
          </div>

          {/* Interactive India Map Box */}
          <div>
            <IndiaMap
              centres={ASHRAM_BRANCHES}
              selectedCentreId={selectedCentreId}
              onSelectCentre={handleSelectCentre}
            />
          </div>

          {/* State Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              Filter by State:
            </span>
            {statesList.map((state) => {
              const count =
                state === 'All'
                  ? ASHRAM_BRANCHES.length
                  : ASHRAM_BRANCHES.filter((c) => c.state === state).length;

              return (
                <button
                  key={state}
                  onClick={() => setActiveStateFilter(state)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeStateFilter === state
                      ? 'bg-amber-900 text-slate-800 shadow-lg scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-400'
                  }`}
                >
                  {state} ({count})
                </button>
              );
            })}
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCentres.map((centre) => {
              const isHQ = centre.isHeadquarters;
              const isSelected = selectedCentreId === centre.id;
              const isAboutExpanded = expandedAboutId === centre.id;

              // Determine current display image for the card top header
              const displayImage = activeImageMap[centre.id] || centre.image;

              return (
                <div
                  key={centre.id}
                  id={`centre-card-${centre.id}`}
                  onClick={() => setSelectedCentreId(centre.id)}
                  className={`group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-amber-400 shadow-2xl ring-2 ring-amber-400/50 scale-[1.01]'
                      : 'bg-white border-slate-200 hover:border-amber-300 :border-slate-600 shadow-md hover:shadow-xl'
                  }`}
                >
                  <div>
                    
                    {/* Card Image Header */}
                    <div className="relative h-64 overflow-hidden bg-white">
                      <img
                        src={displayImage}
                        alt={centre.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/gurus/guru_6.png';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                        {isHQ ? (
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-lg ring-2 ring-white/50">
                            <Crown className="w-3.5 h-3.5" />
                            <span>Headquarters</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-50/80 backdrop-blur-md text-amber-700 border border-amber-200">
                            <Building2 className="w-3 h-3 text-amber-400" />
                            <span>{centre.branchName || centre.state}</span>
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-md text-slate-700 border border-amber-400/30">
                          {centre.state}
                        </span>
                      </div>

                      {/* Photo Navigation Prev/Next Arrows if multiple images */}
                      {centre.images && centre.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const imgs = centre.images || [];
                              const currIdx = imgs.indexOf(displayImage);
                              const prevIdx = (currIdx - 1 + imgs.length) % imgs.length;
                              setActiveImageMap((prev) => ({
                                ...prev,
                                [centre.id]: imgs[prevIdx]
                              }));
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-amber-400/30 transition-all z-10 opacity-80 hover:opacity-100 shadow-lg"
                            title="Previous Photo"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const imgs = centre.images || [];
                              const currIdx = imgs.indexOf(displayImage);
                              const nextIdx = (currIdx + 1) % imgs.length;
                              setActiveImageMap((prev) => ({
                                ...prev,
                                [centre.id]: imgs[nextIdx]
                              }));
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-amber-400/30 transition-all z-10 opacity-80 hover:opacity-100 shadow-lg"
                            title="Next Photo"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Bottom Location Label & Fullscreen Button inside image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-800 font-medium z-10">
                        <div className="flex items-center space-x-1.5 truncate pr-2">
                          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="truncate">{centre.location}</span>
                        </div>
                        {centre.images && centre.images.length > 0 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxState({
                                isOpen: true,
                                title: `${centre.name} (${centre.branchName || centre.location})`,
                                images: centre.images || [centre.image],
                                index: centre.images.indexOf(displayImage) >= 0 ? centre.images.indexOf(displayImage) : 0
                              });
                            }}
                            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white/80 hover:bg-amber-500 hover:text-slate-950 text-[10px] font-bold text-amber-700 border border-amber-400/40 backdrop-blur-md transition-colors shrink-0"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span>{centre.images.indexOf(displayImage) + 1}/{centre.images.length} Fullscreen</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Visible Branch Photo Gallery Strip */}
                    {centre.images && centre.images.length > 0 && (
                      <div className="p-3 bg-slate-50 border-b border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between px-1 text-[10px] text-amber-700/90 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <Camera className="w-3 h-3 text-amber-400" />
                            <span>{centre.branchName || centre.name} Photos ({centre.images.length})</span>
                          </span>
                          <span className="text-[9px] text-slate-400">Click photo to preview</span>
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-amber-500/50">
                          {centre.images.map((imgUrl, imgIdx) => {
                            const isSelectedImg = displayImage === imgUrl;
                            return (
                              <button
                                key={imgIdx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageMap((prev) => ({
                                    ...prev,
                                    [centre.id]: imgUrl
                                  }));
                                }}
                                className={`relative shrink-0 w-14 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                  isSelectedImg
                                    ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105 opacity-100 z-10'
                                    : 'border-slate-700 hover:border-amber-400/60 opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={imgUrl}
                                  alt={`Branch photo ${imgIdx + 1}`}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Card Body Content */}
                    <div className="p-6 space-y-4">
                      
                      {/* Title */}
                      <div>
                        {centre.branchName && (
                          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 ">
                            {centre.branchName}
                          </p>
                        )}
                        <h3 className="text-xl font-serif font-bold text-slate-900 leading-snug">
                          {centre.name}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {centre.description}
                      </p>

                      {/* Detailed "About" Collapsible */}
                      {centre.about && (
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedAboutId(isAboutExpanded ? null : centre.id);
                            }}
                            className="inline-flex items-center space-x-1 text-xs font-bold text-amber-700 hover:underline"
                          >
                            <span>{isAboutExpanded ? 'Hide About Details' : 'Read Full About'}</span>
                            {isAboutExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {isAboutExpanded && (
                            <div className="mt-2 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs text-slate-700 leading-relaxed space-y-3 animate-fade-in">
                              <p>{centre.about}</p>
                              {centre.surroundings && (
                                <p className="text-[11px] text-amber-900 font-medium pt-1 border-t border-amber-200/50 ">
                                  🌿 <strong>Environment:</strong> {centre.surroundings}
                                </p>
                              )}

                              {/* Branch Photos Gallery inside Read Full About */}
                              {centre.images && centre.images.length > 0 && (
                                <div className="pt-2.5 border-t border-amber-200/60 space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                                      <Camera className="w-3.5 h-3.5 text-amber-600 " />
                                      <span>Ashram Photo Gallery ({centre.images.length} Photos)</span>
                                    </span>
                                    <span className="text-[10px] text-slate-500 ">
                                      Click photo to view or set as main
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-3 gap-2">
                                    {centre.images.map((imgUrl, imgIdx) => {
                                      const isSelectedImg = displayImage === imgUrl;
                                      return (
                                        <div
                                          key={imgIdx}
                                          className={`relative group/img rounded-xl overflow-hidden cursor-pointer border-2 transition-all aspect-square ${
                                            isSelectedImg
                                              ? 'border-amber-500 ring-2 ring-amber-400/50 shadow-md scale-105 z-10'
                                              : 'border-transparent hover:border-amber-400 opacity-80 hover:opacity-100'
                                          }`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImageMap((prev) => ({
                                              ...prev,
                                              [centre.id]: imgUrl
                                            }));
                                          }}
                                        >
                                          <img
                                            src={imgUrl}
                                            alt={`${centre.name} Photo ${imgIdx + 1}`}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover"
                                          />
                                          <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1">
                                            <button
                                              type="button"
                                              title="Enlarge Photo"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setLightboxState({
                                                  isOpen: true,
                                                  title: `${centre.name} (${centre.branchName || centre.location})`,
                                                  images: centre.images || [],
                                                  index: imgIdx
                                                });
                                              }}
                                              className="p-1 rounded-full bg-white/90 text-slate-900 hover:bg-amber-400 transition-colors"
                                            >
                                              <Maximize2 className="w-3 h-3" />
                                            </button>
                                          </div>
                                          {isSelectedImg && (
                                            <span className="absolute bottom-1 right-1 text-[8px] bg-amber-500 text-slate-950 px-1 py-0.2 rounded font-black uppercase shadow">
                                              Top
                                            </span>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Activities List / Icons */}
                      {centre.activities && centre.activities.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-slate-100 ">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 ">
                            Activities & Spiritual Programs:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {centre.activities.map((act, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-amber-50 text-amber-950 border border-amber-200/60 "
                              >
                                {getActivityIcon(act)}
                                <span>{act}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 space-y-2.5">
                    
                    <div className="grid grid-cols-2 gap-2">
                      {/* View on Google Maps Button */}
                      <a
                        href={
                          centre.googleMapsUrl ||
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            centre.name + ' ' + centre.location
                          )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-900 bg-amber-100 hover:bg-amber-200 :bg-slate-600 border border-amber-300/60 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-amber-700 " />
                        <span>View Map</span>
                      </a>

                      {/* Get Directions Button */}
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${
                          centre.googleMapsUrl
                            ? encodeURIComponent(centre.googleMapsUrl)
                            : encodeURIComponent(centre.name + ' ' + centre.location)
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors shadow-sm"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Directions</span>
                      </a>
                    </div>

                    {/* Visit the Ashram Call to Action Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenVisitModal(centre);
                      }}
                      className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all duration-300 transform group-hover:scale-[1.01]"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Visit the Ashram</span>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Visit Ashram Modal */}
        <VisitAshramModal
          isOpen={visitModalOpen}
          onClose={() => setVisitModalOpen(false)}
          selectedCentre={modalTargetCentre}
        />

        {/* Fullscreen Photo Lightbox Modal */}
        {lightboxState.isOpen && (
          <div
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-slate-800">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold">{lightboxState.title}</span>
                  <span className="text-xs text-slate-400">
                    ({lightboxState.index + 1} of {lightboxState.images.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Box */}
              <div className="relative h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxState.images[lightboxState.index]}
                  alt="Branch Photo Fullscreen"
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />

                {/* Left/Right controls */}
                {lightboxState.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxState((prev) => ({
                          ...prev,
                          index: (prev.index - 1 + prev.images.length) % prev.images.length
                        }))
                      }
                      className="absolute left-4 p-2 rounded-full bg-slate-50/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxState((prev) => ({
                          ...prev,
                          index: (prev.index + 1) % prev.images.length
                        }))
                      }
                      className="absolute right-4 p-2 rounded-full bg-slate-50/80 hover:bg-amber-500 text-white hover:text-slate-950 transition-colors shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Footer */}
              <div className="p-3 bg-white border-t border-slate-800 flex items-center justify-center gap-2 overflow-x-auto">
                {lightboxState.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxState((prev) => ({ ...prev, index: idx }))}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      lightboxState.index === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};


