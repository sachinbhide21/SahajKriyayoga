import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Music, Volume2 } from 'lucide-react';
import { useTheme, AUDIO_TRACKS } from '../context/ThemeContext';

export const AudioPlayerBar: React.FC = () => {
  const { activeAudioTrack, isPlayingAudio, toggleAudioPlay } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playbackError, setPlaybackError] = useState<boolean>(false);

  const currentTrack = activeAudioTrack || AUDIO_TRACKS[0];

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      setPlaybackError(false);
      audioRef.current.play().catch((err) => {
        console.warn("Audio play blocked or failed:", err);
        setPlaybackError(true);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingAudio, activeAudioTrack]);

  if (!activeAudioTrack && !isPlayingAudio) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm w-full bg-white/95 text-slate-800 p-3.5 rounded-2xl border border-amber-500/40 shadow-2xl backdrop-blur-md animate-fade-in space-y-2">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onError={() => setPlaybackError(true)}
        loop
      />

      {playbackError && (
        <div className="bg-amber-900/60 border border-amber-200 text-slate-700 text-[11px] px-2.5 py-1.5 rounded-lg flex items-center justify-between">
          <span>Tap Play to start audio stream</span>
          <button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.play()
                  .then(() => setPlaybackError(false))
                  .catch(() => {});
              }
            }}
            className="font-bold underline text-amber-700 hover:text-slate-800 ml-2"
          >
            Play Now
          </button>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        {/* Track Icon & Info */}
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30 animate-pulse">
            <Music className="w-5 h-5" />
          </div>

          <div className="overflow-hidden text-xs space-y-0.5">
            <p className="font-serif font-bold text-slate-700 truncate">{currentTrack.title}</p>
            <p className="text-[10px] text-amber-700/80 font-medium truncate">{currentTrack.sanskritTitle}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => toggleAudioPlay(currentTrack)}
            className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center hover:scale-105 transition-transform"
            title={isPlayingAudio ? 'Pause Audio' : 'Play Audio'}
          >
            {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          {/* Change track */}
          <select
            onChange={(e) => {
              const selected = AUDIO_TRACKS.find(t => t.id === e.target.value);
              if (selected) toggleAudioPlay(selected);
            }}
            value={currentTrack.id}
            className="bg-slate-50 border border-amber-200 text-[10px] text-slate-700 rounded-lg px-2 py-1 max-w-[110px]"
          >
            {AUDIO_TRACKS.map(t => (
              <option key={t.id} value={t.id}>{t.title}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
