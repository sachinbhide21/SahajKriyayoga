import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Trash2,
  Edit2,
  FileText,
  DollarSign,
  Sparkles,
  X
} from 'lucide-react';
import { useWebsiteData } from '../../context/WebsiteDataContext';
import { BookPublication } from '../../types';

export const BooksManagerTab: React.FC = () => {
  const { books, addBook, updateBook, deleteBook } = useWebsiteData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<BookPublication | null>(null);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Paramhans Gyanananda Maharaj');
  const [language, setLanguage] = useState('Hindi / Bengali');
  const [pages, setPages] = useState(240);
  const [priceINR, setPriceINR] = useState(150);
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('/images/books/book_1.jpg');
  const [pdfSampleUrl, setPdfSampleUrl] = useState('');

  const openCreateModal = () => {
    setEditingBook(null);
    setTitle('');
    setAuthor('Paramhans Gyanananda Maharaj');
    setLanguage('Hindi');
    setPages(200);
    setPriceINR(150);
    setDescription('');
    setCoverImage('/images/books/book_1.jpg');
    setPdfSampleUrl('');
    setIsModalOpen(true);
  };

  const openEditModal = (book: BookPublication) => {
    setEditingBook(book);
    setTitle(book.title);
    setAuthor(book.author);
    setLanguage(book.language);
    setPages(book.pages);
    setPriceINR(book.priceINR || 0);
    setDescription(book.description);
    setCoverImage(book.coverImage);
    setPdfSampleUrl(book.pdfSampleUrl || '');
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingBook) {
      updateBook(editingBook.id, {
        title: title.trim(),
        author: author.trim(),
        language: language.trim(),
        pages: Number(pages),
        priceINR: Number(priceINR),
        description: description.trim(),
        coverImage: coverImage.trim() || '/images/books/book_1.jpg',
        pdfSampleUrl: pdfSampleUrl.trim()
      });
    } else {
      addBook({
        title: title.trim(),
        author: author.trim(),
        language: language.trim(),
        pages: Number(pages),
        priceINR: Number(priceINR),
        description: description.trim(),
        coverImage: coverImage.trim() || '/images/books/book_1.jpg',
        pdfSampleUrl: pdfSampleUrl.trim()
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-[11px] font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-orange-700" />
            <span>Ashram Literature & Publications</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Books & Spiritual Treatises
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage sacred commentaries on Bhagavad Gita, Kriya Yoga manuals, and guru biographies.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Publication</span>
        </button>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl border border-slate-200/80 hover:border-orange-300 hover:shadow-lg transition-all p-4 flex space-x-4 group"
          >
            <div className="w-24 h-32 rounded-xl overflow-hidden bg-slate-100 shrink-0 shadow-md border border-slate-200">
              <img
                src={book.coverImage}
                alt={book.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/gurus/guru_6.png';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between text-xs space-y-2">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-orange-600">
                  {book.language} • {book.pages} Pages
                </span>
                <h4 className="font-serif font-bold text-sm text-slate-900 line-clamp-2 leading-snug">
                  {book.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  By {book.author}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs">
                  ₹{book.priceINR || 'Free Seva'}
                </span>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => openEditModal(book)}
                    className="p-1 rounded text-slate-600 hover:text-orange-700 hover:bg-orange-50"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteBook(book.id)}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-base text-slate-900">
                {editingBook ? 'Edit Publication' : 'Add Spiritual Publication'}
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
                <label className="font-bold text-slate-700">Book Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Srimad Bhagavad Gita Rahasya"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Author</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Language</label>
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Total Pages</label>
                  <input
                    type="number"
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Price (INR)</label>
                  <input
                    type="number"
                    value={priceINR}
                    onChange={(e) => setPriceINR(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Cover Image URL</label>
                <input
                  type="text"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="/images/books/... or https://..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Subject matter and spiritual guidance inside..."
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
                  className="px-5 py-2 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-md"
                >
                  {editingBook ? 'Save Changes' : 'Add Publication'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
