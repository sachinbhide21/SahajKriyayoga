import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  GalleryItem,
  EventItem,
  AshramBranch,
  YouTubeVideo,
  GuruParamparaItem,
  BookPublication,
  DevoteeTestimonial,
  FAQItem
} from '../types';
import {
  ASHRAM_INFO,
  GALLERY_PHOTOS,
  UPCOMING_EVENTS,
  ASHRAM_BRANCHES,
  YOUTUBE_VIDEOS,
  YOUTUBE_CHANNEL_INFO,
  SPIRITUAL_DISCOURSES,
  GURU_PARAMPARA,
  BOOK_PUBLICATIONS,
  TESTIMONIALS,
  FAQS,
  SpiritualDiscourseItem
} from '../data/ashramData';

const STORAGE_KEY = 'sahaj_kriyayoga_website_cms_data_v2';

const DEFAULT_NOTICES = [
  "🌸 Upcoming Spiritual Camp: 3-Day Intensive Kriya Yoga Sadhana Retreat at Belpahari",
  "🌺 Grand Guru Purnima Mahotsav 2027 at Belpahari Headquarters Ashram",
  "📖 Srimad Bhagwat Katha Saptah on Holy Narmada River Banks, Nanpa",
  "🚩 Gita Jayanti & Youth Spiritual Conclave at Jalampur Ashram",
  "🌊 Sacred Narmada Jayanti Festival at Nanpa Branch, Narmadapuram",
  "📜 Weekly Bhagavad Gita Classes every Sunday Morning",
  "🕉️ Daily Satsang & Morning Kriya Meditation 06:00 AM - 08:00 AM"
];

const INITIAL_SEED_VIDEOS: GalleryItem[] = [
  {
    id: "gal-vid-1",
    type: "video",
    title: "Why & What is Kriyayoga? Complete Spiritual Mechanics",
    category: "Meditation Camps",
    url: "https://www.youtube.com/watch?v=F3a79d3jRsc",
    videoUrl: "https://www.youtube.com/embed/F3a79d3jRsc",
    youtubeId: "F3a79d3jRsc",
    thumbnail: "https://img.youtube.com/vi/F3a79d3jRsc/hqdefault.jpg",
    duration: "45:20",
    speaker: "Paramhans Gyanananda Maharaj",
    caption: "Spiritual discourse explaining the essence and practice of authentic Kriya Yoga for householders.",
    date: "2026-03-15",
    location: "Belpahari Headquarters",
    featured: true
  },
  {
    id: "gal-vid-2",
    type: "video",
    title: "Srimad Bhagwat Katha Amrit Mahotsav at Nanpa Narmada Bank",
    category: "Festivals",
    url: "https://www.youtube.com/watch?v=17c3j_15Lkc",
    videoUrl: "https://www.youtube.com/embed/17c3j_15Lkc",
    youtubeId: "17c3j_15Lkc",
    thumbnail: "https://img.youtube.com/vi/17c3j_15Lkc/hqdefault.jpg",
    duration: "1:12:40",
    speaker: "Paramhans Gyanananda Maharaj",
    caption: "Sacred discourse on the shores of holy river Narmada during the annual festival.",
    date: "2026-01-20",
    location: "Nanpa Ashram, MP",
    featured: true
  },
  {
    id: "gal-vid-3",
    type: "video",
    title: "Guru Purnima Divine Satsang & Guru Parampara Vandana",
    category: "Guru Parampara",
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    youtubeId: "kJQP7kiw5Fk",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    duration: "58:15",
    speaker: "Paramhans Gyanananda Maharaj",
    caption: "Darshan and spiritual discourse commemorating the sacred Guru Lineage.",
    date: "2025-07-21",
    location: "Gadrasini Pahar, Belpahari",
    featured: false
  }
];

export interface WebsiteDataPackage {
  ashramInfo: typeof ASHRAM_INFO;
  notices: string[];
  galleryItems: GalleryItem[];
  events: EventItem[];
  branches: AshramBranch[];
  youtubeVideos: YouTubeVideo[];
  discourses: SpiritualDiscourseItem[];
  guruParampara: GuruParamparaItem[];
  books: BookPublication[];
  testimonials: DevoteeTestimonial[];
  faqs: FAQItem[];
  channelInfo: typeof YOUTUBE_CHANNEL_INFO;
  lastUpdated: string;
}

interface WebsiteDataContextType {
  // Data state
  ashramInfo: typeof ASHRAM_INFO;
  notices: string[];
  galleryItems: GalleryItem[];
  events: EventItem[];
  branches: AshramBranch[];
  youtubeVideos: YouTubeVideo[];
  discourses: SpiritualDiscourseItem[];
  guruParampara: GuruParamparaItem[];
  books: BookPublication[];
  testimonials: DevoteeTestimonial[];
  faqs: FAQItem[];
  channelInfo: typeof YOUTUBE_CHANNEL_INFO;
  lastUpdated: string;

  // Ashram Info
  updateAshramInfo: (updates: Partial<typeof ASHRAM_INFO>) => void;

  // Notices
  addNotice: (text: string) => void;
  updateNotice: (index: number, text: string) => void;
  deleteNotice: (index: number) => void;
  reorderNotices: (newNotices: string[]) => void;

  // Gallery (Photos and Videos)
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => GalleryItem;
  updateGalleryItem: (id: string, updates: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;

  // Events
  addEvent: (item: Omit<EventItem, 'id'>) => EventItem;
  updateEvent: (id: string, updates: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;

  // Branches
  addBranch: (item: Omit<AshramBranch, 'id'>) => AshramBranch;
  updateBranch: (id: string, updates: Partial<AshramBranch>) => void;
  deleteBranch: (id: string) => void;

  // YouTube / Discourses
  addYoutubeVideo: (item: Omit<YouTubeVideo, 'id'>) => YouTubeVideo;
  updateYoutubeVideo: (id: string, updates: Partial<YouTubeVideo>) => void;
  deleteYoutubeVideo: (id: string) => void;
  updateChannelInfo: (updates: Partial<typeof YOUTUBE_CHANNEL_INFO>) => void;

  // Guru Parampara
  updateGuru: (id: string, updates: Partial<GuruParamparaItem>) => void;
  addGuru: (item: Omit<GuruParamparaItem, 'id'>) => GuruParamparaItem;

  // Books
  addBook: (item: Omit<BookPublication, 'id'>) => BookPublication;
  updateBook: (id: string, updates: Partial<BookPublication>) => void;
  deleteBook: (id: string) => void;

  // Testimonials
  addTestimonial: (item: Omit<DevoteeTestimonial, 'id'>) => DevoteeTestimonial;
  updateTestimonial: (id: string, updates: Partial<DevoteeTestimonial>) => void;
  deleteTestimonial: (id: string) => void;

  // FAQs
  addFaq: (item: Omit<FAQItem, 'id'>) => FAQItem;
  updateFaq: (id: string, updates: Partial<FAQItem>) => void;
  deleteFaq: (id: string) => void;

  // Backup & Restore
  exportBackup: () => void;
  importBackup: (jsonContent: string) => { success: boolean; error?: string };
  resetToDefaults: () => void;
}

const WebsiteDataContext = createContext<WebsiteDataContextType | undefined>(undefined);

export const WebsiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialData = (): WebsiteDataPackage => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.ashramInfo && parsed.galleryItems) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read saved data from localStorage, using defaults', e);
    }

    // Default package built from source files
    const initialPhotos: GalleryItem[] = GALLERY_PHOTOS.map(p => ({
      ...p,
      type: 'photo' as const
    }));

    return {
      ashramInfo: ASHRAM_INFO,
      notices: DEFAULT_NOTICES,
      galleryItems: [...initialPhotos, ...INITIAL_SEED_VIDEOS],
      events: UPCOMING_EVENTS,
      branches: ASHRAM_BRANCHES,
      youtubeVideos: YOUTUBE_VIDEOS,
      discourses: SPIRITUAL_DISCOURSES,
      guruParampara: GURU_PARAMPARA,
      books: BOOK_PUBLICATIONS,
      testimonials: TESTIMONIALS,
      faqs: FAQS,
      channelInfo: YOUTUBE_CHANNEL_INFO,
      lastUpdated: new Date().toISOString()
    };
  };

  const [data, setData] = useState<WebsiteDataPackage>(getInitialData);

  // Sync to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving website data to localStorage:', e);
    }
  }, [data]);

  const updateTimestamp = () => new Date().toISOString();

  // Ashram Info
  const updateAshramInfo = (updates: Partial<typeof ASHRAM_INFO>) => {
    setData(prev => ({
      ...prev,
      ashramInfo: { ...prev.ashramInfo, ...updates },
      lastUpdated: updateTimestamp()
    }));
  };

  // Notices
  const addNotice = (text: string) => {
    if (!text.trim()) return;
    setData(prev => ({
      ...prev,
      notices: [text.trim(), ...prev.notices],
      lastUpdated: updateTimestamp()
    }));
  };

  const updateNotice = (index: number, text: string) => {
    setData(prev => {
      const copy = [...prev.notices];
      if (index >= 0 && index < copy.length) {
        copy[index] = text.trim();
      }
      return { ...prev, notices: copy, lastUpdated: updateTimestamp() };
    });
  };

  const deleteNotice = (index: number) => {
    setData(prev => {
      const copy = prev.notices.filter((_, idx) => idx !== index);
      return { ...prev, notices: copy, lastUpdated: updateTimestamp() };
    });
  };

  const reorderNotices = (newNotices: string[]) => {
    setData(prev => ({ ...prev, notices: newNotices, lastUpdated: updateTimestamp() }));
  };

  // Gallery Items (Photos and Videos)
  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `gal-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      type: item.type || 'photo'
    };
    setData(prev => ({
      ...prev,
      galleryItems: [newItem, ...prev.galleryItems],
      lastUpdated: updateTimestamp()
    }));
    return newItem;
  };

  const updateGalleryItem = (id: string, updates: Partial<GalleryItem>) => {
    setData(prev => ({
      ...prev,
      galleryItems: prev.galleryItems.map(item =>
        item.id === id ? { ...item, ...updates } : item
      ),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteGalleryItem = (id: string) => {
    setData(prev => ({
      ...prev,
      galleryItems: prev.galleryItems.filter(item => item.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  // Events
  const addEvent = (item: Omit<EventItem, 'id'>) => {
    const newEvent: EventItem = {
      ...item,
      id: `evt-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      events: [newEvent, ...prev.events],
      lastUpdated: updateTimestamp()
    }));
    return newEvent;
  };

  const updateEvent = (id: string, updates: Partial<EventItem>) => {
    setData(prev => ({
      ...prev,
      events: prev.events.map(ev => (ev.id === id ? { ...ev, ...updates } : ev)),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteEvent = (id: string) => {
    setData(prev => ({
      ...prev,
      events: prev.events.filter(ev => ev.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  // Branches
  const addBranch = (item: Omit<AshramBranch, 'id'>) => {
    const newBranch: AshramBranch = {
      ...item,
      id: `branch-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      branches: [...prev.branches, newBranch],
      lastUpdated: updateTimestamp()
    }));
    return newBranch;
  };

  const updateBranch = (id: string, updates: Partial<AshramBranch>) => {
    setData(prev => ({
      ...prev,
      branches: prev.branches.map(b => (b.id === id ? { ...b, ...updates } : b)),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteBranch = (id: string) => {
    setData(prev => ({
      ...prev,
      branches: prev.branches.filter(b => b.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  // YouTube Videos
  const addYoutubeVideo = (item: Omit<YouTubeVideo, 'id'>) => {
    const newVideo: YouTubeVideo = {
      ...item,
      id: `yt-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      youtubeVideos: [newVideo, ...prev.youtubeVideos],
      lastUpdated: updateTimestamp()
    }));
    return newVideo;
  };

  const updateYoutubeVideo = (id: string, updates: Partial<YouTubeVideo>) => {
    setData(prev => ({
      ...prev,
      youtubeVideos: prev.youtubeVideos.map(v => (v.id === id ? { ...v, ...updates } : v)),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteYoutubeVideo = (id: string) => {
    setData(prev => ({
      ...prev,
      youtubeVideos: prev.youtubeVideos.filter(v => v.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  const updateChannelInfo = (updates: Partial<typeof YOUTUBE_CHANNEL_INFO>) => {
    setData(prev => ({
      ...prev,
      channelInfo: { ...prev.channelInfo, ...updates },
      lastUpdated: updateTimestamp()
    }));
  };

  // Guru Parampara
  const updateGuru = (id: string, updates: Partial<GuruParamparaItem>) => {
    setData(prev => ({
      ...prev,
      guruParampara: prev.guruParampara.map(g => (g.id === id ? { ...g, ...updates } : g)),
      lastUpdated: updateTimestamp()
    }));
  };

  const addGuru = (item: Omit<GuruParamparaItem, 'id'>) => {
    const newGuru: GuruParamparaItem = {
      ...item,
      id: `guru-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      guruParampara: [...prev.guruParampara, newGuru],
      lastUpdated: updateTimestamp()
    }));
    return newGuru;
  };

  // Books
  const addBook = (item: Omit<BookPublication, 'id'>) => {
    const newBook: BookPublication = {
      ...item,
      id: `book-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      books: [...prev.books, newBook],
      lastUpdated: updateTimestamp()
    }));
    return newBook;
  };

  const updateBook = (id: string, updates: Partial<BookPublication>) => {
    setData(prev => ({
      ...prev,
      books: prev.books.map(b => (b.id === id ? { ...b, ...updates } : b)),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteBook = (id: string) => {
    setData(prev => ({
      ...prev,
      books: prev.books.filter(b => b.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  // Testimonials
  const addTestimonial = (item: Omit<DevoteeTestimonial, 'id'>) => {
    const newTestimonial: DevoteeTestimonial = {
      ...item,
      id: `test-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      testimonials: [newTestimonial, ...prev.testimonials],
      lastUpdated: updateTimestamp()
    }));
    return newTestimonial;
  };

  const updateTestimonial = (id: string, updates: Partial<DevoteeTestimonial>) => {
    setData(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => (t.id === id ? { ...t, ...updates } : t)),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteTestimonial = (id: string) => {
    setData(prev => ({
      ...prev,
      testimonials: prev.testimonials.filter(t => t.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  // FAQs
  const addFaq = (item: Omit<FAQItem, 'id'>) => {
    const newFaq: FAQItem = {
      ...item,
      id: `faq-${Date.now()}`
    };
    setData(prev => ({
      ...prev,
      faqs: [...prev.faqs, newFaq],
      lastUpdated: updateTimestamp()
    }));
    return newFaq;
  };

  const updateFaq = (id: string, updates: Partial<FAQItem>) => {
    setData(prev => ({
      ...prev,
      faqs: prev.faqs.map(f => (f.id === id ? { ...f, ...updates } : f)),
      lastUpdated: updateTimestamp()
    }));
  };

  const deleteFaq = (id: string) => {
    setData(prev => ({
      ...prev,
      faqs: prev.faqs.filter(f => f.id !== id),
      lastUpdated: updateTimestamp()
    }));
  };

  // Export & Import Backup
  const exportBackup = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `sahaj_kriyayoga_website_backup_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importBackup = (jsonContent: string) => {
    try {
      const parsed = JSON.parse(jsonContent);
      if (!parsed || !parsed.ashramInfo || !parsed.galleryItems) {
        return { success: false, error: 'Invalid backup file structure. Missing core ashram data.' };
      }
      parsed.lastUpdated = updateTimestamp();
      setData(parsed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Failed to parse JSON backup file.' };
    }
  };

  const resetToDefaults = () => {
    const initialPhotos: GalleryItem[] = GALLERY_PHOTOS.map(p => ({
      ...p,
      type: 'photo' as const
    }));

    const defaultPackage: WebsiteDataPackage = {
      ashramInfo: ASHRAM_INFO,
      notices: DEFAULT_NOTICES,
      galleryItems: [...initialPhotos, ...INITIAL_SEED_VIDEOS],
      events: UPCOMING_EVENTS,
      branches: ASHRAM_BRANCHES,
      youtubeVideos: YOUTUBE_VIDEOS,
      discourses: SPIRITUAL_DISCOURSES,
      guruParampara: GURU_PARAMPARA,
      books: BOOK_PUBLICATIONS,
      testimonials: TESTIMONIALS,
      faqs: FAQS,
      channelInfo: YOUTUBE_CHANNEL_INFO,
      lastUpdated: updateTimestamp()
    };

    setData(defaultPackage);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPackage));
  };

  return (
    <WebsiteDataContext.Provider
      value={{
        ashramInfo: data.ashramInfo,
        notices: data.notices,
        galleryItems: data.galleryItems,
        events: data.events,
        branches: data.branches,
        youtubeVideos: data.youtubeVideos,
        discourses: data.discourses,
        guruParampara: data.guruParampara,
        books: data.books,
        testimonials: data.testimonials,
        faqs: data.faqs,
        channelInfo: data.channelInfo,
        lastUpdated: data.lastUpdated,

        updateAshramInfo,

        addNotice,
        updateNotice,
        deleteNotice,
        reorderNotices,

        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,

        addEvent,
        updateEvent,
        deleteEvent,

        addBranch,
        updateBranch,
        deleteBranch,

        addYoutubeVideo,
        updateYoutubeVideo,
        deleteYoutubeVideo,
        updateChannelInfo,

        updateGuru,
        addGuru,

        addBook,
        updateBook,
        deleteBook,

        addTestimonial,
        updateTestimonial,
        deleteTestimonial,

        addFaq,
        updateFaq,
        deleteFaq,

        exportBackup,
        importBackup,
        resetToDefaults
      }}
    >
      {children}
    </WebsiteDataContext.Provider>
  );
};

export const useWebsiteData = () => {
  const context = useContext(WebsiteDataContext);
  if (!context) {
    throw new Error('useWebsiteData must be used within a WebsiteDataProvider');
  }
  return context;
};
