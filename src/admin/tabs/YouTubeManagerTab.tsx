import React, { useState } from 'react';
import {
  Youtube,
  Plus,
  Trash2,
  Edit2,
  Play,
  ExternalLink,
  Sparkles,
  Save,
  Clock,
  User,
  X
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { YouTubeVideo } from '../../types';

export const YouTubeManagerTab: React.FC = () => {
  const {
    youtubeVideos,
    addYoutubeVideo,
    updateYoutubeVideo,
    deleteYoutubeVideo,
    channelInfo,
    updateChannelInfo
  } = useWebsiteData();

  // Channel details
  const [channelName, setChannelName] = useState(channelInfo.name);
  const [channelHandle, setChannelHandle] = useState(channelInfo.handle);
  const [channelUrl, setChannelUrl] = useState(channelInfo.url);
  const [channelSaved, setChannelSaved] = useState(false);

  // Video modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<YouTubeVideo | null>(null);

  const [title, setTitle] = useState('');
  const [youtubeInput, setYoutubeInput] = useState('');
  const [category, setCategory] = useState<YouTubeVideo['category']>('Kriya Yoga');
  const [duration, setDuration] = useState('45:00');
  const [speaker, setSpeaker] = useState('Paramhans Gyanananda Maharaj');
  const [thumbnail, setThumbnail] = useState('');

  const extractYouTubeId = (url: string): string => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const handleChannelSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateChannelInfo({
      name: channelName,
      handle: channelHandle,
      url: channelUrl
    });
    setChannelSaved(true);
    setTimeout(() => setChannelSaved(false), 2500);
  };

  const openCreateModal = () => {
    setEditingVideo(null);
    setTitle('');
    setYoutubeInput('');
    setCategory('Kriya Yoga');
    setDuration('45:00');
    setSpeaker('Paramhans Gyanananda Maharaj');
    setThumbnail('');
    setIsModalOpen(true);
  };

  const openEditModal = (v: YouTubeVideo) => {
    setEditingVideo(v);
    setTitle(v.title);
    setYoutubeInput(v.youtubeId);
    setCategory(v.category);
    setDuration(v.duration);
    setSpeaker(v.speaker);
    setThumbnail(v.thumbnail);
    setIsModalOpen(true);
  };

  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !youtubeInput.trim()) return;

    const ytId = extractYouTubeId(youtubeInput.trim());
    const finalThumb = thumbnail.trim() || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '/images/sanctuary/sanctuary_1.jpg');

    if (editingVideo) {
      updateYoutubeVideo(editingVideo.id, {
        title: title.trim(),
        youtubeId: ytId,
        category,
        duration: duration.trim(),
        speaker: speaker.trim(),
        thumbnail: finalThumb
      });
    } else {
      addYoutubeVideo({
        title: title.trim(),
        youtubeId: ytId,
        category,
        duration: duration.trim(),
        speaker: speaker.trim(),
        views: '1.2K views',
        date: new Date().toISOString().slice(0, 10),
        thumbnail: finalThumb
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Youtube className="w-3.5 h-3.5 text-red-600" />
            <span>Spiritual Discourses & Media</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            YouTube Channel & Discourses
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Configure YouTube channel metadata and curate video discourses for seekers.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Discourse Video</span>
        </button>
      </div>

      {/* Channel Settings Box */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-2">
            <Youtube className="w-4 h-4 text-red-600" />
            <span>Official YouTube Channel Settings</span>
          </h3>
          {channelSaved && (
            <span className="text-xs font-bold text-emerald-600">Saved!</span>
          )}
        </div>

        <form onSubmit={handleChannelSave} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="space-y-1">
            <label className="font-bold text-slate-700">Channel Display Title</label>
            <input
              type="text"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">YouTube Handle</label>
            <input
              type="text"
              value={channelHandle}
              onChange={(e) => setChannelHandle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Channel URL</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 text-xs shrink-0 flex items-center gap-1"
              >
                <Save className="w-3.5 h-3.5" /> Save
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {youtubeVideos.map((v) => (
          <div
            key={v.id}
            className="bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative aspect-video bg-black overflow-hidden">
              <img
                src={v.thumbnail || `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                alt={v.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/75 px-1.5 py-0.5 rounded text-[10px] text-white font-mono">
                {v.duration}
              </span>
            </div>

            <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between text-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-red-600">
                  {v.category}
                </span>
                <h4 className="font-serif font-bold text-xs text-slate-900 line-clamp-2 leading-snug">
                  {v.title}
                </h4>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="truncate max-w-[130px]">{v.speaker}</span>

                <div className="flex items-center space-x-1 shrink-0">
                  <button
                    onClick={() => openEditModal(v)}
                    className="p-1 rounded text-slate-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteYoutubeVideo(v.id)}
                    className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                {editingVideo ? 'Edit YouTube Video' : 'Add Spiritual Video'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleVideoSubmit} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Video Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Science of Kriya Yoga Explained"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">YouTube Video URL or ID *</label>
                <input
                  type="text"
                  required
                  placeholder="https://www.youtube.com/watch?v=... or 11-char ID"
                  value={youtubeInput}
                  onChange={(e) => {
                    setYoutubeInput(e.target.value);
                    const id = extractYouTubeId(e.target.value);
                    if (id && !thumbnail) {
                      setThumbnail(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
                    }
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  >
                    <option value="Kriya Yoga">Kriya Yoga</option>
                    <option value="Bhagavad Gita">Bhagavad Gita</option>
                    <option value="Bhagwat Katha">Bhagwat Katha</option>
                    <option value="Guru Vandana">Guru Vandana</option>
                    <option value="Ashram Life">Ashram Life</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="45:00"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Speaker</label>
                <input
                  type="text"
                  value={speaker}
                  onChange={(e) => setSpeaker(e.target.value)}
                  placeholder="Paramhans Gyanananda Maharaj"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Thumbnail URL</label>
                <input
                  type="text"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  placeholder="Leave empty to use automatic YouTube thumbnail"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-md"
                >
                  {editingVideo ? 'Save Changes' : 'Add Video'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
