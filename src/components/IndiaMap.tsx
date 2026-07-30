import React, { useState } from 'react';
import { MapPin, Crown, Sparkles, Navigation, ExternalLink, Compass } from 'lucide-react';
import { AshramBranch } from '../types';

interface IndiaMapProps {
  centres: AshramBranch[];
  selectedCentreId: string;
  onSelectCentre: (id: string) => void;
}

export const IndiaMap: React.FC<IndiaMapProps> = ({
  centres,
  selectedCentreId,
  onSelectCentre,
}) => {
  const [hoveredCentreId, setHoveredCentreId] = useState<string | null>(null);

  // Map coordinates projection for India SVG viewBox (0 0 600 650)
  // Converting Lat/Lng to X/Y inside India bounds
  const getMapPosition = (lat: number, lng: number) => {
    // Precise geographic bounds for map alignment inside viewBox="0 0 600 650"
    const minLat = 8.0;   // Kanyakumari ~8.0° N
    const maxLat = 37.0;  // Kashmir / Ladakh ~37.0° N
    const minLng = 68.0;  // Gujarat West ~68.0° E
    const maxLng = 97.0;  // Arunachal East ~97.0° E

    // Map canvas bounding dimensions in SVG
    const mapLeft = 60;
    const mapRight = 540;
    const mapTop = 40;
    const mapBottom = 600;

    const x = mapLeft + ((lng - minLng) / (maxLng - minLng)) * (mapRight - mapLeft);
    const y = mapBottom - ((lat - minLat) / (maxLat - minLat)) * (mapBottom - mapTop);

    return { x, y };
  };

  const activeCentre = centres.find((c) => c.id === (hoveredCentreId || selectedCentreId)) || centres[0];

  return (
    <div className="bg-[#FAF8F5] text-amber-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200 overflow-hidden relative">
      
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar inside Map */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Interactive Sacred Geography</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-1">
            Ashram Centres Map of India
          </h3>
          <p className="text-xs text-slate-700/80">
            Click any pin to inspect the centre details and get Google Maps directions.
          </p>
        </div>

        {/* Map Legend */}
        <div className="flex items-center space-x-4 text-xs bg-slate-50/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-amber-200 shrink-0">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] flex items-center justify-center">
              <Crown className="w-2 h-2 text-slate-950" />
            </span>
            <span className="text-slate-700 font-semibold">Headquarters</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-slate-700/90">Branch Centres</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* SVG Map Canvas Column */}
        <div className="lg:col-span-7 relative flex justify-center items-center bg-white/60 rounded-2xl p-4 border border-amber-500/20">
          <svg
            viewBox="0 0 600 650"
            className="w-full max-w-[480px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            {/* India Map Outline Silhouette & Islands */}
            <g className="fill-slate-900/90 stroke-amber-500/40 stroke-[1.5]">
              {/* Outer India Path Silhouette */}
              <path
                d="M 205,40
                   C 215,42 225,50 230,65
                   C 235,78 225,95 235,110
                   C 240,120 250,135 240,148
                   C 230,160 220,162 228,176
                   C 236,188 250,192 260,195
                   C 280,200 310,210 330,215
                   C 350,220 375,222 390,224
                   C 395,220 398,216 402,218
                   C 406,222 404,228 408,232
                   C 420,232 440,233 457,233
                   C 475,225 500,210 523,204
                   C 535,210 542,218 538,226
                   C 530,240 515,260 500,275
                   C 488,288 480,300 482,310
                   C 475,320 460,320 450,312
                   C 445,305 448,298 449,295
                   C 440,290 435,285 438,278
                   C 442,270 450,268 454,268
                   C 440,260 425,262 418,275
                   C 412,288 410,305 407,320
                   C 402,330 395,335 390,339
                   C 382,350 365,362 349,372
                   C 335,385 325,398 313,412
                   C 298,435 280,470 263,501
                   C 258,525 258,545 255,555
                   C 250,570 235,588 217,598
                   C 212,599 208,595 209,590
                   C 205,580 200,570 196,561
                   C 185,530 170,490 156,465
                   C 148,435 142,410 139,388
                   C 138,365 140,352 139,345
                   C 132,348 120,352 110,355
                   C 95,348 85,338 76,325
                   C 72,318 82,312 96,310
                   C 88,302 78,298 73,295
                   C 63,295 72,282 82,272
                   C 92,260 98,245 101,233
                   C 112,215 125,202 134,195
                   C 148,175 160,158 172,144
                   C 180,120 162,95 167,59
                   C 178,48 192,38 205,40
                   Z"
                className="fill-amber-950/40 hover:fill-amber-950/60 transition-colors cursor-pointer"
              />

              {/* Andaman & Nicobar Islands */}
              <circle cx="485" cy="485" r="3.5" className="fill-amber-400/80" />
              <circle cx="490" cy="510" r="3" className="fill-amber-400/80" />
              <circle cx="495" cy="535" r="2.5" className="fill-amber-400/80" />

              {/* Lakshadweep Islands */}
              <circle cx="165" cy="545" r="2.5" className="fill-amber-400/80" />
              <circle cx="170" cy="560" r="2.5" className="fill-amber-400/80" />

              {/* Sri Lanka Silhouette Outline */}
              <path
                d="M 275,580 C 282,583 285,595 280,605 C 275,612 268,608 268,598 Z"
                className="fill-amber-950/30 stroke-amber-500/20 stroke-1"
              />

              {/* Internal Sacred River Curves (Ganges & Narmada) */}
              {/* Ganges River curve from Uttarakhand through UP, Bihar to West Bengal */}
              <path
                d="M 230,175 Q 310,250 370,318"
                className="stroke-amber-400/25 stroke-[1.2] fill-none stroke-dasharray-[3_3]"
              />
              {/* Narmada River curve through MP to Gujarat Gulf of Khambhat */}
              <path
                d="M 280,310 Q 210,315 140,345"
                className="stroke-amber-400/25 stroke-[1.2] fill-none stroke-dasharray-[3_3]"
              />
            </g>

            {/* State & Region Name Labels on Map */}
            <text x="375" y="305" className="text-[10px] font-sans fill-amber-300/90 font-bold tracking-wide">West Bengal</text>
            <text x="210" y="340" className="text-[10px] font-sans fill-amber-300/90 font-bold tracking-wide">Madhya Pradesh</text>
            <text x="95" y="295" className="text-[10px] font-sans fill-amber-300/90 font-bold tracking-wide">Gujarat</text>
            <text x="215" y="165" className="text-[10px] font-sans fill-amber-300/90 font-bold tracking-wide">Uttarakhand</text>

            {/* Interactive Pins / Markers for all Centres */}
            {centres.map((centre) => {
              const pos = getMapPosition(centre.coordinates.lat, centre.coordinates.lng);
              const isSelected = selectedCentreId === centre.id;
              const isHovered = hoveredCentreId === centre.id;
              const isHQ = centre.isHeadquarters;

              return (
                <g
                  key={centre.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  className="cursor-pointer group"
                  onMouseEnter={() => setHoveredCentreId(centre.id)}
                  onMouseLeave={() => setHoveredCentreId(null)}
                  onClick={() => onSelectCentre(centre.id)}
                >
                  {/* Pulse Radar Ring for Selected or HQ */}
                  {(isSelected || isHQ || isHovered) && (
                    <circle
                      r={isHQ ? 24 : 18}
                      className={`animate-ping opacity-40 ${
                        isHQ ? 'fill-amber-400' : 'fill-amber-500'
                      }`}
                    />
                  )}

                  {/* Outer Glow Circle */}
                  <circle
                    r={isSelected ? 16 : isHQ ? 14 : 10}
                    className={`transition-all duration-300 ${
                      isSelected
                        ? 'fill-amber-400 stroke-2 stroke-amber-100 shadow-2xl'
                        : isHQ
                        ? 'fill-amber-500 stroke-2 stroke-amber-200'
                        : 'fill-amber-600/90 hover:fill-amber-400 stroke-1 stroke-amber-200'
                    }`}
                  />

                  {/* Icon inside pin */}
                  <foreignObject
                    x={isSelected ? -10 : isHQ ? -9 : -7}
                    y={isSelected ? -10 : isHQ ? -9 : -7}
                    width={isSelected ? 20 : isHQ ? 18 : 14}
                    height={isSelected ? 20 : isHQ ? 18 : 14}
                  >
                    <div className="flex items-center justify-center w-full h-full text-slate-950 font-bold">
                      {isHQ ? (
                        <Crown className="w-full h-full text-slate-950" />
                      ) : (
                        <MapPin className="w-full h-full text-slate-950" />
                      )}
                    </div>
                  </foreignObject>

                  {/* Marker Pin Label Tag */}
                  <foreignObject
                    x={-60}
                    y={16}
                    width={120}
                    height={30}
                    className="overflow-visible pointer-events-none"
                  >
                    <div className="flex justify-center">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap shadow-md border transition-all ${
                          isSelected || isHovered
                            ? 'bg-amber-400 text-slate-950 border-white scale-110'
                            : 'bg-slate-50/90 text-slate-700 border-amber-500/40'
                        }`}
                      >
                        {centre.branchName || centre.name.split(' ')[0]}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Centre Interactive Feature Box */}
        <div className="lg:col-span-5 bg-slate-50/90 backdrop-blur-md rounded-2xl p-6 border border-amber-200 space-y-4 relative">
          
          <div className="flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                activeCentre.isHeadquarters
                  ? 'bg-amber-400 text-slate-950 shadow-md flex items-center gap-1'
                  : 'bg-amber-900/60 text-amber-700 border border-amber-700/60'
              }`}
            >
              {activeCentre.isHeadquarters && <Crown className="w-3.5 h-3.5" />}
              <span>{activeCentre.isHeadquarters ? 'Main Headquarters' : activeCentre.state}</span>
            </span>

            <span className="text-xs text-slate-700/70 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeCentre.state}</span>
            </span>
          </div>

          <div className="rounded-xl overflow-hidden border border-amber-200 h-40 relative group">
            <img
              src={activeCentre.image}
              alt={activeCentre.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/gurus/guru_6.png';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 text-xs text-slate-800 font-medium">
              📍 {activeCentre.location}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-slate-800 leading-snug">
              {activeCentre.name}
            </h4>
            {activeCentre.branchName && (
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">
                {activeCentre.branchName}
              </p>
            )}
          </div>

          <p className="text-xs text-slate-800/80 leading-relaxed line-clamp-3">
            {activeCentre.description}
          </p>

          {/* Quick Activities Pills */}
          {activeCentre.activities && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeCentre.activities.slice(0, 4).map((act, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-amber-50/80 text-slate-700 text-[10px] border border-amber-700/50"
                >
                  ✨ {act}
                </span>
              ))}
              {activeCentre.activities.length > 4 && (
                <span className="px-2 py-0.5 rounded-md bg-slate-800 text-amber-700 text-[10px]">
                  +{activeCentre.activities.length - 4} more
                </span>
              )}
            </div>
          )}

          {/* Action links */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <a
              href={
                activeCentre.googleMapsUrl ||
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeCentre.name + ' ' + activeCentre.location
                )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${
                activeCentre.googleMapsUrl
                  ? encodeURIComponent(activeCentre.googleMapsUrl)
                  : encodeURIComponent(activeCentre.name + ' ' + activeCentre.location)
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-amber-900/60 hover:bg-amber-800/80 border border-amber-500/40 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
