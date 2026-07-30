import React, { createContext, useContext, useState, useEffect } from 'react';
import { GuruParamparaItem, EventItem } from '../types';

export interface AudioTrack {
  id: string;
  title: string;
  sanskritTitle: string;
  duration: string;
  audioUrl: string;
  fileName: string;
}

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: "track-guru-stotra",
    title: "Guru Stotra",
    sanskritTitle: "गुरु स्तोत्रम् एवं प्रार्थना (Guru Stotram & Vandana)",
    duration: "08:30 mins",
    fileName: "GURU STOTRA.mp3",
    audioUrl: "/audio/GURU STOTRA.mp3"
  },
  {
    id: "track-amar-gurur-charan",
    title: "Amar Gurur Charan",
    sanskritTitle: "আমার গুরুর চরণ (অমর गुरु पद वंदना)",
    duration: "06:45 mins",
    fileName: "AMAR GURUR CHARAN.mp3",
    audioUrl: "/audio/AMAR GURUR CHARAN.mp3"
  },
  {
    id: "track-vasudev-kirtan",
    title: "Vasudev Kirtan",
    sanskritTitle: "वासुदेव संकीर्तन (Hare Vasudeva Kirtan)",
    duration: "12:15 mins",
    fileName: "VASUDEV KIRTAN.mp3",
    audioUrl: "/audio/VASUDEV KIRTAN.mp3"
  }
];

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isElementorGuideOpen: boolean;
  setIsElementorGuideOpen: (open: boolean) => void;
  isDonationModalOpen: boolean;
  setIsDonationModalOpen: (open: boolean) => void;
  selectedGuruForBio: GuruParamparaItem | null;
  setSelectedGuruForBio: (guru: GuruParamparaItem | null) => void;
  selectedEventForReg: EventItem | null;
  setSelectedEventForReg: (event: EventItem | null) => void;
  activeAudioTrack: AudioTrack | null;
  isPlayingAudio: boolean;
  toggleAudioPlay: (track?: AudioTrack) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isElementorGuideOpen, setIsElementorGuideOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedGuruForBio, setSelectedGuruForBio] = useState<GuruParamparaItem | null>(null);
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);
  
  const [activeAudioTrack, setActiveAudioTrack] = useState<AudioTrack | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleDarkMode = () => {
    // Dark mode is disabled based on user request for a strictly light, humanized theme
  };

  const toggleAudioPlay = (track?: AudioTrack) => {
    const selected = track || activeAudioTrack || AUDIO_TRACKS[0];

    if (activeAudioTrack?.id === selected.id && isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      setActiveAudioTrack(selected);
      setIsPlayingAudio(true);
    }
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      isSearchOpen,
      setIsSearchOpen,
      isElementorGuideOpen,
      setIsElementorGuideOpen,
      isDonationModalOpen,
      setIsDonationModalOpen,
      selectedGuruForBio,
      setSelectedGuruForBio,
      selectedEventForReg,
      setSelectedEventForReg,
      activeAudioTrack,
      isPlayingAudio,
      toggleAudioPlay
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
