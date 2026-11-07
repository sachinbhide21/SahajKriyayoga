import React, { useState } from 'react';
import {
  Calendar,
  Plus,
  Trash2,
  Edit2,
  MapPin,
  Clock,
  User,
  Sparkles,
  Search,
  X,
  CheckCircle2
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { EventItem } from '../../types';

export const EventsManagerTab: React.FC = () => {
  const { events, addEvent, updateEvent, deleteEvent, branches } = useWebsiteData();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<EventItem['category']>('Kriya Camp');
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('06:00 AM - 08:00 AM');
  const [location, setLocation] = useState('Belpahari Headquarters Ashram');
  const [branchId, setBranchId] = useState('belpahari-main');
  const [speaker, setSpeaker] = useState('Paramhans Gyanananda Maharaj');
  const [description, setDescription] = useState('');
  const [isUpcoming, setIsUpcoming] = useState(true);

  const categories = ['All', 'Festival', 'Satsang', 'Kriya Camp', 'Bhagwat Katha', 'Special Event'];

  const openCreateModal = () => {
    setEditingEvent(null);
    setTitle('');
    setCategory('Kriya Camp');
    setStartDate(new Date().toISOString().slice(0, 10));
    setEndDate('');
    setTime('06:00 AM - 08:00 AM');
    setLocation('Belpahari Headquarters Ashram');
    setBranchId('belpahari-main');
    setSpeaker('Paramhans Gyanananda Maharaj');
    setDescription('');
    setIsUpcoming(true);
    setIsModalOpen(true);
  };

  const openEditModal = (ev: EventItem) => {
    setEditingEvent(ev);
    setTitle(ev.title);
    setCategory(ev.category);
    setStartDate(ev.startDate);
    setEndDate(ev.endDate || '');
    setTime(ev.time);
    setLocation(ev.location);
    setBranchId(ev.branchId || 'belpahari-main');
    setSpeaker(ev.speaker);
    setDescription(ev.description);
    setIsUpcoming(ev.isUpcoming);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingEvent) {
      updateEvent(editingEvent.id, {
        title: title.trim(),
        category,
        startDate,
        endDate: endDate ? endDate : undefined,
        time: time.trim(),
        location: location.trim(),
        branchId,
        speaker: speaker.trim(),
        description: description.trim(),
        isUpcoming
      });
    } else {
      addEvent({
        title: title.trim(),
        category,
        startDate,
        endDate: endDate ? endDate : undefined,
        time: time.trim(),
        location: location.trim(),
        branchId,
        speaker: speaker.trim(),
        description: description.trim(),
        isUpcoming
      });
    }

    setIsModalOpen(false);
  };

  const filteredEvents = events.filter((ev) => {
    if (filterCategory !== 'All' && ev.category !== filterCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        ev.title.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        ev.speaker.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            <span>Spiritual Calendar Management</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Events, Camps & Kathas
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage upcoming meditation camps, Guru Purnima festivals, Katha weeks, and daily satsang schedules.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Event</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mr-1">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-full transition-colors ${
                filterCategory === cat
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs"
          />
        </div>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  {ev.category}
                </span>
                {ev.isUpcoming ? (
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Upcoming
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">Past</span>
                )}
              </div>

              <h4 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                {ev.title}
              </h4>

              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                {ev.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{ev.startDate} {ev.endDate && `to ${ev.endDate}`}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{ev.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{ev.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{ev.speaker}</span>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  onClick={() => openEditModal(ev)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-[11px] font-semibold flex items-center gap-1"
                >
                  <Edit2 className="w-3 h-3" /> Edit
                </button>
                <button
                  onClick={() => deleteEvent(ev.id)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 text-[11px] font-semibold flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                {editingEvent ? 'Edit Spiritual Event' : 'Schedule New Event'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Event Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 3-Day Intensive Kriya Yoga Sadhana Camp"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                    <option value="Kriya Camp">Kriya Camp</option>
                    <option value="Festival">Festival</option>
                    <option value="Satsang">Satsang</option>
                    <option value="Bhagwat Katha">Bhagwat Katha</option>
                    <option value="Special Event">Special Event</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Associated Branch</label>
                  <select
                    value={branchId}
                    onChange={(e) => setBranchId(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  >
                    <option value="belpahari-main">Belpahari Headquarters</option>
                    {branches.map(b => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Start Date</label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">End Date (Optional)</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Daily Timing</label>
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="e.g. 06:00 AM - 08:00 AM"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Speaker / Acharya</label>
                  <input
                    type="text"
                    value={speaker}
                    onChange={(e) => setSpeaker(e.target.value)}
                    placeholder="Paramhans Gyanananda Maharaj"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Venue / Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Belpahari Headquarters Ashram, Gadrasini Pahar"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Description</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Program overview and guidance for devotees..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="pt-1 flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={isUpcoming}
                    onChange={(e) => setIsUpcoming(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Mark as Active Upcoming Event</span>
                </label>
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
                  className="px-5 py-2 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md"
                >
                  {editingEvent ? 'Save Changes' : 'Schedule Event'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
