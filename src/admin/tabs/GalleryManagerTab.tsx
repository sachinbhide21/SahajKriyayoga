import React, { useState, useRef } from 'react';
import {
  Image,
  Video,
  Upload,
  Plus,
  Trash2,
  Edit2,
  Eye,
  Search,
  Filter,
  Check,
  X,
  Sparkles,
  Play,
  Film,
  Camera,
  Layers,
  Calendar,
  MapPin,
  ExternalLink,
  Youtube
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { GalleryItem, GalleryMediaType } from '../../types';

export const GalleryManagerTab: React.FC = () => {
  const {
    galleryItems,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem
  } = useWebsiteData();

  // Filters & Search
  const [mediaFilter, setMediaFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Photo form fields
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoCategory, setPhotoCategory] = useState('Ashram & Temple');
  const [photoCustomCategory, setPhotoCustomCategory] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoCaption, setPhotoCaption] = useState('');
  const [photoLocation, setPhotoLocation] = useState('Belpahari Headquarters');
  const [photoDate, setPhotoDate] = useState(new Date().toISOString().slice(0, 10));
  const [photoFeatured, setPhotoFeatured] = useState(false);
  const [photoFilePreview, setPhotoFilePreview] = useState<string | null>(null);

  // Video form fields
  const [videoTitle, setVideoTitle] = useState('');
  const [videoCategory, setVideoCategory] = useState('Meditation Camps');
  const [videoCustomCategory, setVideoCustomCategory] = useState('');
  const [videoInputUrl, setVideoInputUrl] = useState('');
  const [videoCaption, setVideoCaption] = useState('');
  const [videoSpeaker, setVideoSpeaker] = useState('Paramhans Gyanananda Maharaj');
  const [videoDuration, setVideoDuration] = useState('45:00');
  const [videoThumbnailUrl, setVideoThumbnailUrl] = useState('');
  const [videoLocation, setVideoLocation] = useState('Gadrasini Pahar, Belpahari');
  const [videoDate, setVideoDate] = useState(new Date().toISOString().slice(0, 10));
  const [videoFeatured, setVideoFeatured] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    'All',
    'Ashram & Temple',
    'Gadrasini Pahar',
    'Guru Parampara',
    'Festivals',
    'Meditation Camps',
    'Branch Ashrams',
    'Seva Activities'
  ];

  // Helper to extract YouTube ID
  const extractYouTubeId = (url: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Handle Photo File selection -> base64
  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoFilePreview(result);
        setPhotoUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Video URL change and auto extract thumbnail & embed
  const handleVideoUrlChange = (url: string) => {
    setVideoInputUrl(url);
    const ytId = extractYouTubeId(url);
    if (ytId) {
      if (!videoThumbnailUrl) {
        setVideoThumbnailUrl(`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`);
      }
    }
  };

  // Submit Photo
  const handlePhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoTitle.trim()) return;

    const finalCategory = photoCategory === 'Custom' ? photoCustomCategory.trim() : photoCategory;
    const finalUrl = photoFilePreview || photoUrl.trim() || '/images/sanctuary/sanctuary_1.jpg';

    if (editingItem) {
      updateGalleryItem(editingItem.id, {
        title: photoTitle.trim(),
        category: finalCategory,
        url: finalUrl,
        caption: photoCaption.trim(),
        location: photoLocation.trim(),
        date: photoDate,
        featured: photoFeatured
      });
      setEditingItem(null);
    } else {
      addGalleryItem({
        type: 'photo',
        title: photoTitle.trim(),
        category: finalCategory,
        url: finalUrl,
        caption: photoCaption.trim(),
        location: photoLocation.trim(),
        date: photoDate,
        featured: photoFeatured
      });
    }

    resetPhotoForm();
    setIsPhotoModalOpen(false);
  };

  // Submit Video
  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoTitle.trim() || !videoInputUrl.trim()) return;

    const ytId = extractYouTubeId(videoInputUrl.trim());
    const finalCategory = videoCategory === 'Custom' ? videoCustomCategory.trim() : videoCategory;
    const embedUrl = ytId ? `https://www.youtube.com/embed/${ytId}` : videoInputUrl.trim();
    const thumbnail = videoThumbnailUrl.trim() || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '/images/sanctuary/sanctuary_2.jpg');

    if (editingItem) {
      updateGalleryItem(editingItem.id, {
        title: videoTitle.trim(),
        category: finalCategory,
        url: videoInputUrl.trim(),
        videoUrl: embedUrl,
        youtubeId: ytId || undefined,
        thumbnail: thumbnail,
        caption: videoCaption.trim(),
        speaker: videoSpeaker.trim(),
        duration: videoDuration.trim(),
        location: videoLocation.trim(),
        date: videoDate,
        featured: videoFeatured
      });
      setEditingItem(null);
    } else {
      addGalleryItem({
        type: 'video',
        title: videoTitle.trim(),
        category: finalCategory,
        url: videoInputUrl.trim(),
        videoUrl: embedUrl,
        youtubeId: ytId || undefined,
        thumbnail: thumbnail,
        caption: videoCaption.trim(),
        speaker: videoSpeaker.trim(),
        duration: videoDuration.trim(),
        location: videoLocation.trim(),
        date: videoDate,
        featured: videoFeatured
      });
    }

    resetVideoForm();
    setIsVideoModalOpen(false);
  };

  const resetPhotoForm = () => {
    setPhotoTitle('');
    setPhotoCategory('Ashram & Temple');
    setPhotoCustomCategory('');
    setPhotoUrl('');
    setPhotoCaption('');
    setPhotoLocation('Belpahari Headquarters');
    setPhotoDate(new Date().toISOString().slice(0, 10));
    setPhotoFeatured(false);
    setPhotoFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetVideoForm = () => {
    setVideoTitle('');
    setVideoCategory('Meditation Camps');
    setVideoCustomCategory('');
    setVideoInputUrl('');
    setVideoCaption('');
    setVideoSpeaker('Paramhans Gyanananda Maharaj');
    setVideoDuration('45:00');
    setVideoThumbnailUrl('');
    setVideoLocation('Gadrasini Pahar, Belpahari');
    setVideoDate(new Date().toISOString().slice(0, 10));
    setVideoFeatured(false);
  };

  const openEditModal = (item: GalleryItem) => {
    setEditingItem(item);
    if ((item.type || 'photo') === 'video') {
      setVideoTitle(item.title);
      setVideoCategory(item.category);
      setVideoInputUrl(item.url || item.videoUrl || '');
      setVideoCaption(item.caption);
      setVideoSpeaker(item.speaker || 'Paramhans Gyanananda Maharaj');
      setVideoDuration(item.duration || '45:00');
      setVideoThumbnailUrl(item.thumbnail || '');
      setVideoLocation(item.location || 'Gadrasini Pahar');
      setVideoDate(item.date || new Date().toISOString().slice(0, 10));
      setVideoFeatured(item.featured || false);
      setIsVideoModalOpen(true);
    } else {
      setPhotoTitle(item.title);
      setPhotoCategory(item.category);
      setPhotoUrl(item.url);
      setPhotoFilePreview(item.url.startsWith('data:') ? item.url : null);
      setPhotoCaption(item.caption);
      setPhotoLocation(item.location || 'Belpahari Headquarters');
      setPhotoDate(item.date || new Date().toISOString().slice(0, 10));
      setPhotoFeatured(item.featured || false);
      setIsPhotoModalOpen(true);
    }
  };

  // Filtered Items
  const filteredItems = galleryItems.filter(item => {
    const itemType = item.type || 'photo';
    if (mediaFilter !== 'all' && itemType !== mediaFilter) return false;
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCaption = item.caption.toLowerCase().includes(q);
      const matchLoc = (item.location || '').toLowerCase().includes(q);
      return matchTitle || matchCaption || matchLoc;
    }
    return true;
  });

  const photoCount = galleryItems.filter(i => (i.type || 'photo') === 'photo').length;
  const videoCount = galleryItems.filter(i => i.type === 'video').length;

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Tab Header & Action Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Media Management</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Gallery: Photos & Videos
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Upload new photography, add spiritual discourse videos, organize categories, and manage live gallery exhibits.
          </p>
        </div>

        {/* Upload Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => {
              resetPhotoForm();
              setEditingItem(null);
              setIsPhotoModalOpen(true);
            }}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95"
          >
            <Camera className="w-4 h-4" />
            <span>Upload Photo</span>
          </button>

          <button
            onClick={() => {
              resetVideoForm();
              setEditingItem(null);
              setIsVideoModalOpen(true);
            }}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95"
          >
            <Film className="w-4 h-4" />
            <span>Add Video</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-4">
        
        {/* Top Filter Row: Media Types + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Media Type Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setMediaFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mediaFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Media ({galleryItems.length})
            </button>
            <button
              onClick={() => setMediaFilter('photo')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                mediaFilter === 'photo'
                  ? 'bg-white text-amber-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Image className="w-3.5 h-3.5 text-amber-600" />
              <span>Photos ({photoCount})</span>
            </button>
            <button
              onClick={() => setMediaFilter('video')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                mediaFilter === 'video'
                  ? 'bg-white text-rose-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-rose-600" />
              <span>Videos ({videoCount})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, caption, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Media Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-sm space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-base text-slate-800">
            No media found matching current filter
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try choosing another category, clear your search query, or upload new photos and videos.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item) => {
            const isVideo = (item.type || 'photo') === 'video';
            const displayThumbnail = isVideo ? (item.thumbnail || item.url) : item.url;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                {/* Image / Thumbnail Container */}
                <div
                  onClick={() => setPreviewItem(item)}
                  className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden"
                >
                  <img
                    src={displayThumbnail}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/gurus/guru_6.png';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />

                  {/* Type Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    {isVideo ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-600 text-white flex items-center gap-1 shadow-md">
                        <Play className="w-3 h-3 fill-current" /> VIDEO
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-600 text-white flex items-center gap-1 shadow-md">
                        <Camera className="w-3 h-3" /> PHOTO
                      </span>
                    )}

                    {item.featured && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-400 text-slate-900 shadow-md">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Video Play Overlay */}
                  {isVideo && (
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Category overlay */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white/90">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm truncate max-w-[140px]">
                      {item.category}
                    </span>
                    {isVideo && item.duration && (
                      <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm font-mono">
                        {item.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-xs text-slate-900 line-clamp-1 leading-snug">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 truncate max-w-[120px]">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{item.location || 'Ashram'}</span>
                    </span>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => setPreviewItem(item)}
                        className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => openEditModal(item)}
                        className="p-1 rounded-md text-amber-600 hover:text-amber-800 hover:bg-amber-50 transition-colors"
                        title="Edit Item"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(item.id)}
                        className="p-1 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                        title="Delete Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================= */}
      {/* PHOTO UPLOAD / EDIT MODAL */}
      {/* ========================================================= */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {editingItem ? 'Edit Gallery Photo' : 'Upload New Gallery Photo'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Provide image file or URL and display details
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsPhotoModalOpen(false);
                  setEditingItem(null);
                }}
                className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePhotoSubmit} className="space-y-4 text-xs">
              
              {/* Photo Title */}
              <div className="space-y-1">
                <label className="block font-bold text-slate-700">
                  Photo Title *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Gadrasini Pahar Sunrise Sadhana"
                  value={photoTitle}
                  onChange={(e) => setPhotoTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 focus:bg-white text-sm"
                />
              </div>

              {/* Photo File Upload or Direct URL */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                <label className="block font-bold text-amber-950">
                  Select Image File (Local Upload or Online URL)
                </label>
                
                {/* File picker */}
                <div className="flex items-center gap-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoFileChange}
                    className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
                  />
                </div>

                <div className="text-center font-semibold text-slate-400 text-[10px]">
                  — OR ENTER REMOTE IMAGE URL —
                </div>

                <input
                  type="text"
                  placeholder="e.g. /images/sanctuary/sanctuary_1.jpg or https://images.unsplash.com/..."
                  value={photoUrl}
                  onChange={(e) => {
                    setPhotoUrl(e.target.value);
                    setPhotoFilePreview(null);
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                />

                {/* Image Preview */}
                {(photoFilePreview || photoUrl) && (
                  <div className="mt-2 relative rounded-xl overflow-hidden border border-amber-200 aspect-video max-h-40 bg-slate-900">
                    <img
                      src={photoFilePreview || photoUrl}
                      alt="Upload Preview"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
                      Image Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Category</label>
                  <select
                    value={photoCategory}
                    onChange={(e) => setPhotoCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                  >
                    <option value="Ashram & Temple">Ashram & Temple</option>
                    <option value="Gadrasini Pahar">Gadrasini Pahar</option>
                    <option value="Guru Parampara">Guru Parampara</option>
                    <option value="Festivals">Festivals</option>
                    <option value="Meditation Camps">Meditation Camps</option>
                    <option value="Branch Ashrams">Branch Ashrams</option>
                    <option value="Seva Activities">Seva Activities</option>
                    <option value="Custom">Custom Category...</option>
                  </select>
                </div>

                {photoCategory === 'Custom' && (
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-700">Custom Category Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Vedic Yagya"
                      value={photoCustomCategory}
                      onChange={(e) => setPhotoCustomCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Belpahari Ashram, Jhargram"
                    value={photoLocation}
                    onChange={(e) => setPhotoLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="space-y-1">
                <label className="block font-bold text-slate-700">Caption / Description</label>
                <textarea
                  rows={2}
                  placeholder="Brief spiritual description or context for devotees..."
                  value={photoCaption}
                  onChange={(e) => setPhotoCaption(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
                />
              </div>

              {/* Date & Featured */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center space-x-2">
                  <label className="font-bold text-slate-700">Date:</label>
                  <input
                    type="date"
                    value={photoDate}
                    onChange={(e) => setPhotoDate(e.target.value)}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                </div>

                <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={photoFeatured}
                    onChange={(e) => setPhotoFeatured(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span>Mark as Featured</span>
                </label>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsPhotoModalOpen(false);
                    setEditingItem(null);
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md"
                >
                  {editingItem ? 'Save Changes' : 'Upload Photo'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIDEO UPLOAD / ADD MODAL */}
      {/* ========================================================= */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {editingItem ? 'Edit Gallery Video' : 'Add Video to Gallery'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Add YouTube discourse or MP4 video to gallery
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  setEditingItem(null);
                }}
                className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleVideoSubmit} className="space-y-4 text-xs">
              
              {/* Video Title */}
              <div className="space-y-1">
                <label className="block font-bold text-slate-700">
                  Video Title *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Srimad Bhagwat Katha - Day 1 by Paramhans Gyanananda Maharaj"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-500 bg-slate-50 focus:bg-white text-sm"
                />
              </div>

              {/* Video URL (YouTube or MP4) */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200/80">
                <label className="block font-bold text-rose-950 flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-rose-600" />
                  <span>YouTube URL or Direct Video Link *</span>
                </label>
                
                <input
                  required
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/... or .mp4"
                  value={videoInputUrl}
                  onChange={(e) => handleVideoUrlChange(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                />

                <p className="text-[11px] text-slate-500">
                  Paste any YouTube link. The system automatically extracts the YouTube video ID and high-res thumbnail.
                </p>

                {/* Auto Thumbnail preview */}
                {videoThumbnailUrl && (
                  <div className="mt-2 relative rounded-xl overflow-hidden border border-rose-200 aspect-video max-h-36 bg-black">
                    <img
                      src={videoThumbnailUrl}
                      alt="Video Thumbnail Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-current opacity-80" />
                    </div>
                    <span className="absolute bottom-1 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                      Thumbnail Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Speaker & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Speaker / Presenter</label>
                  <input
                    type="text"
                    value={videoSpeaker}
                    onChange={(e) => setVideoSpeaker(e.target.value)}
                    placeholder="e.g. Paramhans Gyanananda Maharaj"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Duration</label>
                  <input
                    type="text"
                    value={videoDuration}
                    onChange={(e) => setVideoDuration(e.target.value)}
                    placeholder="e.g. 45:20 or 1:15:00"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              {/* Category & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Category</label>
                  <select
                    value={videoCategory}
                    onChange={(e) => setVideoCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  >
                    <option value="Meditation Camps">Meditation Camps</option>
                    <option value="Festivals">Festivals</option>
                    <option value="Guru Parampara">Guru Parampara</option>
                    <option value="Ashram & Temple">Ashram & Temple</option>
                    <option value="Gadrasini Pahar">Gadrasini Pahar</option>
                    <option value="Branch Ashrams">Branch Ashrams</option>
                    <option value="Kriya Yoga">Kriya Yoga</option>
                    <option value="Bhagavad Gita">Bhagavad Gita</option>
                    <option value="Bhagwat Katha">Bhagwat Katha</option>
                    <option value="Custom">Custom Category...</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Location</label>
                  <input
                    type="text"
                    value={videoLocation}
                    onChange={(e) => setVideoLocation(e.target.value)}
                    placeholder="e.g. Nanpa Ashram, Narmada River"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              {videoCategory === 'Custom' && (
                <div className="space-y-1">
                  <label className="block font-bold text-slate-700">Custom Category Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sannyas Diksha"
                    value={videoCustomCategory}
                    onChange={(e) => setVideoCustomCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              )}

              {/* Caption */}
              <div className="space-y-1">
                <label className="block font-bold text-slate-700">Caption / Description</label>
                <textarea
                  rows={2}
                  placeholder="Spiritual topic and key teachings in this video..."
                  value={videoCaption}
                  onChange={(e) => setVideoCaption(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              {/* Date & Featured */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center space-x-2">
                  <label className="font-bold text-slate-700">Date:</label>
                  <input
                    type="date"
                    value={videoDate}
                    onChange={(e) => setVideoDate(e.target.value)}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                </div>

                <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={videoFeatured}
                    onChange={(e) => setVideoFeatured(e.target.checked)}
                    className="rounded text-rose-600 focus:ring-rose-500"
                  />
                  <span>Mark as Featured</span>
                </label>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    setEditingItem(null);
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md"
                >
                  {editingItem ? 'Save Changes' : 'Add Video to Gallery'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* PREVIEW LIGHTBOX MODAL */}
      {/* ========================================================= */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 space-y-4">
            
            {/* Close button */}
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white hover:bg-amber-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Player / Image */}
            <div className="aspect-video bg-black flex items-center justify-center overflow-hidden">
              {(previewItem.type || 'photo') === 'video' ? (
                previewItem.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${previewItem.youtubeId}?autoplay=1`}
                    title={previewItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <video
                    src={previewItem.url || previewItem.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )
              ) : (
                <img
                  src={previewItem.url}
                  alt={previewItem.title}
                  className="max-h-[70vh] w-auto mx-auto object-contain"
                />
              )}
            </div>

            {/* Caption & Metadata */}
            <div className="p-5 text-white space-y-2 bg-slate-950/80 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40">
                  {previewItem.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {(previewItem.type || 'photo').toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-amber-200">
                {previewItem.title}
              </h3>
              {previewItem.caption && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {previewItem.caption}
                </p>
              )}
              {previewItem.location && (
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{previewItem.location}</span>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* DELETE CONFIRMATION DIALOG */}
      {/* ========================================================= */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-base text-slate-900">
                Delete Media Item?
              </h3>
              <p className="text-xs text-slate-500">
                This item will be permanently removed from the website gallery.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteGalleryItem(deleteConfirmId);
                  setDeleteConfirmId(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md"
              >
                Yes, Delete Item
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
