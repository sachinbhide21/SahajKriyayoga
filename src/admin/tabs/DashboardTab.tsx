import React from 'react';
import {
  Image,
  Video,
  Bell,
  Calendar,
  MapPin,
  BookOpen,
  HelpCircle,
  Download,
  Upload,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { AdminTab } from '../../types';

interface DashboardTabProps {
  setActiveTab: (tab: AdminTab) => void;
}

export const DashboardTab: React.FC<DashboardTabProps> = ({ setActiveTab }) => {
  const {
    galleryItems,
    notices,
    events,
    branches,
    books,
    faqs,
    youtubeVideos,
    lastUpdated,
    exportBackup
  } = useWebsiteData();
  const { currentUser } = useAdminAuth();

  const photoCount = galleryItems.filter(i => (i.type || 'photo') === 'photo').length;
  const videoCount = galleryItems.filter(i => i.type === 'video').length;

  const stats = [
    {
      id: 'gallery-photos',
      label: 'Gallery Photos',
      value: photoCount,
      icon: Image,
      color: 'from-amber-500 to-amber-600',
      action: () => setActiveTab('gallery')
    },
    {
      id: 'gallery-videos',
      label: 'Gallery Videos',
      value: videoCount,
      icon: Video,
      color: 'from-rose-500 to-red-600',
      action: () => setActiveTab('gallery')
    },
    {
      id: 'notices',
      label: 'Active Notices',
      value: notices.length,
      icon: Bell,
      color: 'from-sky-500 to-blue-600',
      action: () => setActiveTab('notices')
    },
    {
      id: 'events',
      label: 'Upcoming Events',
      value: events.length,
      icon: Calendar,
      color: 'from-emerald-500 to-teal-600',
      action: () => setActiveTab('events')
    },
    {
      id: 'branches',
      label: 'Ashram Branches',
      value: branches.length,
      icon: MapPin,
      color: 'from-purple-500 to-indigo-600',
      action: () => setActiveTab('branches')
    },
    {
      id: 'books',
      label: 'Books & Publications',
      value: books.length,
      icon: BookOpen,
      color: 'from-orange-500 to-amber-600',
      action: () => setActiveTab('books')
    },
    {
      id: 'faqs',
      label: 'FAQs Managed',
      value: faqs.length,
      icon: HelpCircle,
      color: 'from-cyan-500 to-blue-600',
      action: () => setActiveTab('faqs')
    },
    {
      id: 'youtube',
      label: 'Discourses & Kathas',
      value: youtubeVideos.length,
      icon: Video,
      color: 'from-pink-500 to-rose-600',
      action: () => setActiveTab('youtube')
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Ashram Administration Suite</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight">
              Welcome back, {currentUser?.name || 'Administrator'}
            </h1>
            <p className="text-amber-100/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Upload photos and videos to the gallery, publish announcements to the notice ticker, update branch details, schedule spiritual retreats, and manage website content with instant live sync.
            </p>
          </div>

          {/* Quick Actions in Banner */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setActiveTab('gallery')}
              className="px-4 py-2.5 rounded-xl bg-white text-amber-900 font-bold text-xs shadow-lg hover:bg-amber-50 transition-all flex items-center space-x-2 active:scale-95"
            >
              <Upload className="w-4 h-4 text-amber-600" />
              <span>Upload to Gallery</span>
            </button>
            <button
              onClick={exportBackup}
              className="px-4 py-2.5 rounded-xl bg-amber-800/80 hover:bg-amber-900 text-white font-bold text-xs shadow-md border border-white/20 transition-all flex items-center space-x-2 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Backup</span>
            </button>
          </div>
        </div>
      </div>

      {/* Live Sync Status Info Pill */}
      <div className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <span>Live Website Synchronized</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-slate-500 text-[11px]">
              Edits made in this admin panel take effect across the entire public website immediately.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-[11px] text-slate-500 sm:border-l sm:border-slate-200 sm:pl-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Updated: {new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-medium text-slate-700">Storage: Local Browser DB</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Website Content Overview
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                onClick={stat.action}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${stat.color} text-white shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </span>
                  <div className="text-[10px] text-amber-700/80 font-medium flex items-center gap-1 mt-0.5">
                    <span>Manage Section</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Access Actions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quick Gallery Upload */}
        <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 space-y-3 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
              <Image className="w-4 h-4 text-amber-600" />
              <span>Gallery Media Management</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Upload high-resolution photos, add YouTube or MP4 videos, assign categories like Gadrasini Pahar, Ashram & Temple, or Guru Parampara.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('gallery')}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-amber-600 hover:bg-amber-700 shadow-sm transition-colors text-center"
          >
            Open Gallery Manager
          </button>
        </div>

        {/* Notices Marquee */}
        <div className="bg-sky-50/70 rounded-2xl p-5 border border-sky-200 space-y-3 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-sky-900 font-bold text-sm">
              <Bell className="w-4 h-4 text-sky-600" />
              <span>Ticker Notices & Marquee</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Edit the live sliding announcement banner at the top of the website. Announce upcoming retreats, katha dates, or darshan hours.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('notices')}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 shadow-sm transition-colors text-center"
          >
            Manage Notice Slider
          </button>
        </div>

        {/* Full Site Settings & Backup */}
        <div className="bg-purple-50/70 rounded-2xl p-5 border border-purple-200 space-y-3 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-purple-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Backup & Administrator Security</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Download complete website backups in one click, restore previous versions, or change your administrator login credentials.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('settings')}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors text-center"
          >
            Open Settings & Backup
          </button>
        </div>

      </div>

    </div>
  );
};
