import React, { useState } from 'react';
import {
  HelpCircle,
  Plus,
  Trash2,
  Edit2,
  ChevronDown,
  X
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { FAQItem } from '../../types';

export const FaqManagerTab: React.FC = () => {
  const { faqs, addFaq, updateFaq, deleteFaq } = useWebsiteData();

  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<FAQItem | null>(null);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState<FAQItem['category']>('Kriya Yoga');

  const categories = ['All', 'Kriya Yoga', 'Ashram Visit', 'Bhagwat Katha', 'Donations', 'General'];

  const openCreateModal = () => {
    setEditingItem(null);
    setQuestion('');
    setAnswer('');
    setCategory('Kriya Yoga');
    setIsModalOpen(true);
  };

  const openEditModal = (item: FAQItem) => {
    setEditingItem(item);
    setQuestion(item.question);
    setAnswer(item.answer);
    setCategory(item.category);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    if (editingItem) {
      updateFaq(editingItem.id, {
        question: question.trim(),
        answer: answer.trim(),
        category
      });
    } else {
      addFaq({
        question: question.trim(),
        answer: answer.trim(),
        category
      });
    }

    setIsModalOpen(false);
  };

  const filteredFaqs = faqs.filter(
    (f) => filterCategory === 'All' || f.category === filterCategory
  );

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-700" />
            <span>Devotee Assistance & Inquiries</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Answer common questions about Kriya initiation, ashram accommodation, rules, donations, and events.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-cyan-600 hover:bg-cyan-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New FAQ</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5 bg-white p-3 rounded-2xl border border-slate-200/80">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2">
          Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              filterCategory === cat
                ? 'bg-cyan-600 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQs Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-cyan-300 transition-all space-y-2"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <span className="text-[10px] uppercase font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                  {faq.category}
                </span>
                <h4 className="font-serif font-bold text-sm text-slate-900 pt-1">
                  {faq.question}
                </h4>
              </div>

              <div className="flex items-center space-x-1 shrink-0">
                <button
                  onClick={() => openEditModal(faq)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-700 hover:bg-cyan-50"
                  title="Edit FAQ"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteFaq(faq.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                  title="Delete FAQ"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                {editingItem ? 'Edit Question & Answer' : 'Add New FAQ'}
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
                <label className="font-bold text-slate-700">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                >
                  <option value="Kriya Yoga">Kriya Yoga</option>
                  <option value="Ashram Visit">Ashram Visit</option>
                  <option value="Bhagwat Katha">Bhagwat Katha</option>
                  <option value="Donations">Donations</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Question *</label>
                <input
                  type="text"
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. How can a householder receive Kriya Yoga Diksha?"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Answer *</label>
                <textarea
                  rows={4}
                  required
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Detailed spiritual and administrative response for the seeker..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs leading-relaxed"
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
                  className="px-5 py-2 rounded-xl font-bold text-white bg-cyan-600 hover:bg-cyan-700 shadow-md"
                >
                  {editingItem ? 'Save Changes' : 'Add FAQ'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
