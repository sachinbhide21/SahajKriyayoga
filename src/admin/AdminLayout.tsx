import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Image,
  Bell,
  Building2,
  Calendar,
  MapPin,
  Youtube,
  Sparkles,
  BookOpen,
  MessageSquareQuote,
  HelpCircle,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Database
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useWebsiteData } from '../context/WebsiteDataContext';
import { AdminTab } from '../types';

import { DashboardTab } from './tabs/DashboardTab';
import { GalleryManagerTab } from './tabs/GalleryManagerTab';
import { NoticesManagerTab } from './tabs/NoticesManagerTab';
import { AshramInfoTab } from './tabs/AshramInfoTab';
import { EventsManagerTab } from './tabs/EventsManagerTab';
import { BranchesManagerTab } from './tabs/BranchesManagerTab';
import { YouTubeManagerTab } from './tabs/YouTubeManagerTab';
import { GuruParamparaTab } from './tabs/GuruParamparaTab';
import { BooksManagerTab } from './tabs/BooksManagerTab';
import { TestimonialsManagerTab } from './tabs/TestimonialsManagerTab';
import { FaqManagerTab } from './tabs/FaqManagerTab';
import { SettingsBackupTab } from './tabs/SettingsBackupTab';

export const AdminLayout: React.FC = () => {
  const { currentUser, logout } = useAdminAuth();
  const { ashramInfo, galleryItems, notices, events } = useWebsiteData();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<AdminTab>('gallery');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard' as AdminTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'gallery' as AdminTab, label: 'Gallery (Photos & Videos)', icon: Image, badge: galleryItems.length },
    { id: 'notices' as AdminTab, label: 'Notice Slider', icon: Bell, badge: notices.length },
    { id: 'ashram-info' as AdminTab, label: 'Ashram Profile', icon: Building2 },
    { id: 'events' as AdminTab, label: 'Events & Camps', icon: Calendar, badge: events.length },
    { id: 'branches' as AdminTab, label: 'Branch Ashrams', icon: MapPin },
    { id: 'youtube' as AdminTab, label: 'YouTube & Discourses', icon: Youtube },
    { id: 'guru-parampara' as AdminTab, label: 'Guru Parampara', icon: Sparkles },
    { id: 'books' as AdminTab, label: 'Books & Literature', icon: BookOpen },
    { id: 'testimonials' as AdminTab, label: 'Devotee Testimonials', icon: MessageSquareQuote },
    { id: 'faqs' as AdminTab, label: 'FAQ Management', icon: HelpCircle },
    { id: 'settings' as AdminTab, label: 'Settings & Backup', icon: Settings }
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab setActiveTab={setActiveTab} />;
      case 'gallery':
        return <GalleryManagerTab />;
      case 'notices':
        return <NoticesManagerTab />;
      case 'ashram-info':
        return <AshramInfoTab />;
      case 'events':
        return <EventsManagerTab />;
      case 'branches':
        return <BranchesManagerTab />;
      case 'youtube':
        return <YouTubeManagerTab />;
      case 'guru-parampara':
        return <GuruParamparaTab />;
      case 'books':
        return <BooksManagerTab />;
      case 'testimonials':
        return <TestimonialsManagerTab />;
      case 'faqs':
        return <FaqManagerTab />;
      case 'settings':
        return <SettingsBackupTab />;
      default:
        return <GalleryManagerTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-slate-800 flex flex-col font-sans">
      
      {/* Top Admin Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.svg"
                  alt="Ashram Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-serif font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors leading-tight">
                  Ashram Management Console
                </h1>
                <p className="text-[10px] text-slate-500 font-medium">
                  {ashramInfo.name}
                </p>
              </div>
            </Link>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3 text-xs">
            
            {/* View Live Site Button */}
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold transition-all shadow-sm"
              title="Open public website in a new tab"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
            </Link>

            {/* Admin User Info Pill */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">{currentUser?.username || 'admin'}</span>
              <span className="text-[10px] text-slate-400 font-semibold">• Super Admin</span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-bold transition-colors flex items-center space-x-1.5"
              title="Logout from Admin"
            >
              <LogOut className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-4">
          <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Navigation Menu
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/20'
                      : 'text-slate-600 hover:bg-amber-50 hover:text-amber-900'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/25 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Storage Status Widget in Sidebar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-2 text-xs">
            <div className="flex items-center space-x-2 text-slate-800 font-bold">
              <Database className="w-4 h-4 text-emerald-600" />
              <span>Instant Live Storage</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              All edits to photos, videos, notices, and events automatically persist locally and update the website instantaneously.
            </p>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden flex">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="relative w-72 max-w-full bg-white h-full shadow-2xl p-5 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="font-serif font-bold text-sm text-slate-900">
                  Admin Menu
                </div>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-amber-600 text-white font-bold shadow-md'
                          : 'text-slate-600 hover:bg-amber-50 hover:text-amber-900'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-mono">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/"
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center space-x-2"
                >
                  <span>Open Public Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content Area */}
        <main className="flex-1 min-w-0">
          {renderActiveTab()}
        </main>

      </div>

    </div>
  );
};
