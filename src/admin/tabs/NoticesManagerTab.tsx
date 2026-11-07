import React, { useState } from 'react';
import {
  Bell,
  Plus,
  Trash2,
  Edit2,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';

export const NoticesManagerTab: React.FC = () => {
  const { notices, addNotice, updateNotice, deleteNotice, reorderNotices } = useWebsiteData();

  const [newNoticeText, setNewNoticeText] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const emojiSuggestions = ['🌸', '🌺', '🕉️', '📖', '🚩', '🌊', '📜', '✨', '🙏', '🪔'];

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeText.trim()) return;
    addNotice(newNoticeText.trim());
    setNewNoticeText('');
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditingText(notices[index]);
  };

  const saveEdit = (index: number) => {
    if (editingText.trim()) {
      updateNotice(index, editingText.trim());
    }
    setEditingIndex(null);
    setEditingText('');
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const copy = [...notices];
    const temp = copy[index - 1];
    copy[index - 1] = copy[index];
    copy[index] = temp;
    reorderNotices(copy);
  };

  const moveDown = (index: number) => {
    if (index === notices.length - 1) return;
    const copy = [...notices];
    const temp = copy[index + 1];
    copy[index + 1] = copy[index];
    copy[index] = temp;
    reorderNotices(copy);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Bell className="w-3.5 h-3.5 text-sky-600" />
            <span>Top Marquee Banner</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Announcements & Ticker Notices
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Notices appear in the animated announcement slider at the top of every page on the website.
          </p>
        </div>
      </div>

      {/* Add New Notice Form */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <h3 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-2">
          <Plus className="w-4 h-4 text-sky-600" />
          <span>Publish New Announcement Notice</span>
        </h3>

        <form onSubmit={handleAddNotice} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              required
              placeholder="e.g. 🌸 Upcoming Spiritual Camp: 3-Day Intensive Kriya Yoga Retreat at Belpahari..."
              value={newNoticeText}
              onChange={(e) => setNewNoticeText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Emoji suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[11px] text-slate-400 font-semibold mr-1">
              Insert icon:
            </span>
            {emojiSuggestions.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setNewNoticeText((prev) => `${emoji} ${prev}`)}
                className="p-1 px-2 rounded-lg bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-800 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Live Notice Slider</span>
            </button>
          </div>
        </form>
      </div>

      {/* Notices List */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-sm text-slate-800">
            Active Notice Sequence ({notices.length})
          </h3>
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Info className="w-3.5 h-3.5" /> Reorder to change playback sequence
          </span>
        </div>

        {notices.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-400">
            No notices currently published. Add a notice above.
          </div>
        ) : (
          <div className="space-y-2.5">
            {notices.map((notice, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-sky-300 transition-all flex items-center justify-between gap-3 text-xs"
              >
                {/* Index badge */}
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                  {idx + 1}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {editingIndex === idx ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-sky-400 bg-white text-xs focus:outline-none"
                        autoFocus
                      />
                      <button
                        onClick={() => saveEdit(idx)}
                        className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                        title="Save"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingIndex(null)}
                        className="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-300"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <p className="text-slate-800 font-medium truncate">
                      {notice}
                    </p>
                  )}
                </div>

                {/* Order & Action Buttons */}
                <div className="flex items-center space-x-1 shrink-0">
                  <button
                    onClick={() => moveUp(idx)}
                    disabled={idx === 0}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 disabled:opacity-20 transition-colors"
                    title="Move Up"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => moveDown(idx)}
                    disabled={idx === notices.length - 1}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 disabled:opacity-20 transition-colors"
                    title="Move Down"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>

                  <div className="w-px h-4 bg-slate-200 mx-1" />

                  <button
                    onClick={() => startEdit(idx)}
                    className="p-1 rounded-md text-sky-600 hover:bg-sky-50 transition-colors"
                    title="Edit Notice"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteNotice(idx)}
                    className="p-1 rounded-md text-red-500 hover:bg-red-50 transition-colors"
                    title="Delete Notice"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
