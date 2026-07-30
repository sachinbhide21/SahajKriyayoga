import React, { useState } from 'react';
import { Play, Pause, Youtube, ExternalLink, ListVideo, Sparkles, Eye, X, Radio, BookOpen, Music, Volume2 } from 'lucide-react';
import { YOUTUBE_VIDEOS, YOUTUBE_PLAYLISTS, YOUTUBE_CHANNEL_INFO, SPIRITUAL_DISCOURSES, SpiritualDiscourseItem } from '../data/ashramData';
import { YouTubeVideo } from '../types';
import { useTheme, AUDIO_TRACKS } from '../context/ThemeContext';

export const YouTubeSection: React.FC = () => {
  const { activeAudioTrack, isPlayingAudio, toggleAudioPlay } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

  const categories = ['All', 'Kriya Yoga', 'Bhagavad Gita', 'Srimad Bhagwat', 'Guru Bhakti', 'Grihastha Life', 'Sadhana'];

  const filteredDiscourses = activeCategory === 'All'
    ? SPIRITUAL_DISCOURSES
    : SPIRITUAL_DISCOURSES.filter(d => d.category === activeCategory);

  const activePlaylist = YOUTUBE_PLAYLISTS.find(p => p.playlistId === selectedPlaylistId);

  return (
    <section id="youtube" className="py-20 bg-[#F5F0EB] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200/50 ">
            <Youtube className="w-4 h-4 text-red-600" />
            <span>Official Channel • Satyananda Sannyas Ashram - Kriyayoga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Spiritual Discourses & Kathas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Watch divine discourses on Kriya Yoga, Bhagavad Gita, and Srimad Bhagwat Katha by Paramhans Gyanananda Maharaj.
          </p>
        </div>

        {/* --- SECTION 1: CHANNEL BANNER & TOP LATEST VIDEOS --- */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border border-red-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-2xl bg-red-600 text-white shadow-lg">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-700">
                    {YOUTUBE_CHANNEL_INFO.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-amber-700/80">
                    <span className="font-mono">{YOUTUBE_CHANNEL_INFO.handle}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                      <Radio className="w-3 h-3 animate-pulse" /> Auto-Updated Latest Videos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={YOUTUBE_CHANNEL_INFO.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Latest Uploads from Channel
              </h4>
              <span className="text-xs text-slate-400 hidden sm:inline">Updated automatically</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {YOUTUBE_CHANNEL_INFO.latestVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group bg-slate-50/80 hover:bg-slate-50 border border-white/10 hover:border-red-500/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-black overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-700">
                      {video.duration}
                    </span>
                  </div>

                  <div className="p-3.5 space-y-1.5">
                    <span className="text-[10px] font-bold text-red-400 tracking-wide uppercase">
                      {video.category}
                    </span>
                    <h5 className="font-serif font-bold text-xs text-slate-800 group-hover:text-red-300 transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 truncate">
                      {video.speaker}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTION 2: FEATURED YOUTUBE PLAYLISTS --- */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
            <div>
              <h3 className="text-2xl font-serif font-extrabold text-slate-900 flex items-center gap-2">
                <ListVideo className="w-6 h-6 text-red-600" />
                Official Video Playlists
              </h3>
              <p className="text-xs text-slate-600 ">
                Explore complete discourse series organized by topic
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {YOUTUBE_PLAYLISTS.map((pl) => (
              <div
                key={pl.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Playlist Banner Header */}
                  <div className="relative h-48 bg-white overflow-hidden group">
                    <img
                      src={pl.thumbnail}
                      alt={pl.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                          Official Playlist • {pl.videoCount}+ Videos
                        </span>
                        <h4 className="font-serif font-extrabold text-lg sm:text-xl text-slate-800 mt-1 drop-shadow">
                          {pl.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => setSelectedPlaylistId(pl.playlistId)}
                        className="p-3 rounded-full bg-red-600 text-white shadow-xl hover:scale-110 transition-transform"
                        title="Play Full Playlist"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Playlist Info & Featured Tracks */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pl.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 ">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                        Featured Videos in this Playlist:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {pl.featuredVideoIds.slice(0, 3).map((vidId, idx) => (
                          <div
                            key={vidId}
                            onClick={() => setSelectedVideo({
                              id: vidId,
                              youtubeId: vidId,
                              title: `Discourse Video #${idx+1} in ${pl.title}`,
                              category: pl.id === 'pl-1' ? 'Kriya Yoga' : 'Bhagwat Katha',
                              duration: 'Pravachan',
                              speaker: 'Paramhans Gyanananda Maharaj',
                              views: 'Official Playlist',
                              date: 'Series',
                              thumbnail: `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`
                            })}
                            className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 hover:bg-red-50 :bg-slate-800 cursor-pointer text-xs transition-colors group"
                          >
                            <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                              {idx + 1}
                            </span>
                            <span className="font-semibold text-slate-800 truncate flex-1">
                              Watch Video #{idx + 1} ({vidId})
                            </span>
                            <Play className="w-3.5 h-3.5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Playlist Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPlaylistId(pl.playlistId)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Play Playlist in App
                  </button>

                  <a
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 :bg-slate-700 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SPIRITUAL AUDIO & MEDITATION CHANTING SECTION --- */}
        <div id="audio-chanting" className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border border-amber-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-200">
                <Music className="w-3.5 h-3.5" />
                <span>Spiritual Audio & Chanting</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800">
                Sacred Meditation Audio & Chanting Tracks
              </h3>
              <p className="text-xs sm:text-sm text-slate-700/80">
                Immerse in devotional Guru Stotra, Amar Gurur Charan vandana, and sacred Vasudev Kirtan audio tracks.
              </p>
            </div>
            {isPlayingAudio && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold animate-pulse shrink-0">
                <Volume2 className="w-4 h-4" />
                <span>Audio Playing Now</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIO_TRACKS.map((track) => {
              const isSelected = activeAudioTrack?.id === track.id;
              const isCurrentPlaying = isSelected && isPlayingAudio;

              return (
                <div
                  key={track.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    isCurrentPlaying
                      ? 'bg-amber-50/90 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.02]'
                      : 'bg-slate-50/80 border-amber-500/20 hover:border-amber-400/60 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isCurrentPlaying ? 'bg-amber-500 text-slate-950 animate-pulse' : 'bg-amber-500/20 text-amber-700'
                      }`}>
                        <Music className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-base text-slate-800">{track.title}</h4>
                      <p className="text-xs font-semibold text-amber-700/90">{track.sanskritTitle}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleAudioPlay(track)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isCurrentPlaying
                        ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md'
                        : 'bg-amber-900/50 hover:bg-amber-600 text-slate-800 border border-amber-500/40'
                    }`}
                  >
                    {isCurrentPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Pause Audio</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Play Sacred Track</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- SECTION 3: ALL DISCOURSES GRID WITH FILTERS --- */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-serif font-extrabold text-slate-900 ">
              Browse All Spiritual Discourses
            </h3>
            <p className="text-xs sm:text-base text-slate-600 ">
              Spiritual discourse series and pravachans by Paramhans Gyanananda Maharaj
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-red-700 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-red-50 :bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Discourses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDiscourses.map((disc) => (
              <div
                key={disc.id}
                onClick={() => setSelectedVideo({
                  id: disc.id,
                  youtubeId: disc.youtubeId || 'RH8k3aCrBcY',
                  title: disc.title,
                  category: 'Kriya Yoga',
                  duration: 'Pravachan Series',
                  speaker: disc.speaker,
                  views: 'Official Discourse',
                  date: 'Series',
                  thumbnail: disc.thumbnail
                })}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-amber-200/60 hover:border-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Title Thumbnail Frame */}
                  <div className="relative h-52 overflow-hidden bg-white">
                    <img
                      src={disc.thumbnail}
                      alt={disc.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-white/30 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow">
                      {disc.category}
                    </div>
                  </div>

                  {/* Discourse Details */}
                  <div className="p-5 space-y-2">
                    <h4 className="font-serif font-bold text-lg text-slate-900 group-hover:text-red-600 :text-red-400 transition-colors line-clamp-2">
                      {disc.title}
                    </h4>

                    <p className="text-xs text-amber-800 font-medium">
                      {disc.speaker}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1">
                      {disc.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 mt-2">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 ">
                    <BookOpen className="w-3.5 h-3.5" /> Spiritual Discourse
                  </span>
                  <span className="font-bold text-red-600 ">Watch Discourse →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- VIDEO PLAYER MODAL WITH REAL EMBEDDED YOUTUBE IFRAME --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-50 rounded-3xl max-w-4xl w-full p-6 border border-amber-200 shadow-2xl relative space-y-4">
            
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10 space-y-1">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                {selectedVideo.category} • Official YouTube Video
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-700">
                {selectedVideo.title}
              </h3>
            </div>

            {/* Embedded YouTube Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white border border-slate-800 shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <div className="space-y-0.5">
                <span className="text-amber-700 font-semibold">{selectedVideo.speaker}</span>
                <p className="text-[11px] text-slate-500">Satyananda Sannyas Ashram - Kriyayoga Channel ({YOUTUBE_CHANNEL_INFO.handle})</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-800 hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-red-700 hover:bg-red-800 transition-colors"
                >
                  Close Player
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- PLAYLIST PLAYER MODAL WITH REAL EMBEDDED YOUTUBE PLAYLIST IFRAME --- */}
      {selectedPlaylistId && activePlaylist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-50 rounded-3xl max-w-4xl w-full p-6 border border-amber-200 shadow-2xl relative space-y-4">
            
            <button
              onClick={() => setSelectedPlaylistId(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10 space-y-1">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Official YouTube Playlist • {activePlaylist.videoCount}+ Videos
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-700">
                {activePlaylist.title}
              </h3>
            </div>

            {/* Embedded YouTube Playlist Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white border border-slate-800 shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${activePlaylist.playlistId}&autoplay=1`}
                title={activePlaylist.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <p className="text-xs text-slate-300 max-w-lg">
                {activePlaylist.description}
              </p>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={activePlaylist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-800 hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Playlist on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedPlaylistId(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-red-700 hover:bg-red-800 transition-colors"
                >
                  Close Playlist
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
