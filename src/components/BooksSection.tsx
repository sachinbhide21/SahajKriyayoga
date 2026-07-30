import React, { useState } from 'react';
import { BookOpen, ShoppingBag, Check, X, MessageCircle, ExternalLink } from 'lucide-react';
import { BOOK_PUBLICATIONS } from '../data/ashramData';
import { BookPublication } from '../types';

export const BooksSection: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookPublication | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  const getWhatsAppUrl = (bookTitle: string) => {
    const text = encodeURIComponent(`Hari Om! I would like to inquire about / order the book publication: "${bookTitle}" from Satyananda Sannyas Ashram.`);
    return `https://wa.me/919909478275?text=${text}`;
  };

  return (
    <section id="publications" className="py-20 bg-[#FAF8F5] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200 ">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Spiritual Literature & Sacred Scriptures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 ">
            Ashram Publications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Authentic books authored by the Gurus covering Kriya Yoga, Bhagavad Gita, and spiritual self-inquiry.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BOOK_PUBLICATIONS.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-3xl p-5 shadow-lg border border-amber-200/60 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Book Cover Frame - Title Only SVG Cover */}
                <div className="h-64 rounded-2xl overflow-hidden bg-amber-50/20 relative shadow-md group-hover:shadow-xl transition-shadow">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-slate-900 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 ">
                    By {book.author}
                  </p>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={getWhatsAppUrl(book.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order via WhatsApp</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                <button
                  onClick={() => setSelectedBook(book)}
                  className="w-full py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 :bg-slate-700 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Request Form Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Book Order Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-amber-300 shadow-2xl relative space-y-4">
            
            <button
              onClick={() => { setSelectedBook(null); setRequestSent(false); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-red-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!requestSent ? (
              <>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-xl">
                    📖
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 ">
                      Order Book Publication
                    </h3>
                    <p className="text-xs text-amber-700 font-semibold">{selectedBook.title}</p>
                    <p className="text-[11px] text-slate-500">By {selectedBook.author}</p>
                  </div>
                </div>

                {/* Direct WhatsApp Prompt Banner */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-emerald-900 ">Fastest Way to Order</p>
                    <p className="text-[11px] text-emerald-700 ">Chat directly on WhatsApp to check availability and dispatch</p>
                  </div>
                  <a
                    href={getWhatsAppUrl(selectedBook.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shrink-0 hover:bg-emerald-700 flex items-center gap-1.5 shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200 "></div>
                  <span className="flex-shrink mx-3 text-[11px] text-slate-400 font-semibold">OR FILL ORDER FORM</span>
                  <div className="flex-grow border-t border-slate-200 "></div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRequestSent(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">WhatsApp Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 9909478275"
                      className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Postal Delivery Address *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Full street address, PIN code, district, state"
                      className="w-full px-3 py-2 rounded-xl border border-amber-300 bg-white text-slate-900 "
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 shadow-lg transition-colors"
                  >
                    Submit Book Order Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900 ">
                  Book Request Submitted!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Hari Om! Our Ashram Publication wing will connect with you via WhatsApp (wa.me/919909478275) for dispatch confirmation.
                </p>
                <button
                  onClick={() => { setSelectedBook(null); setRequestSent(false); }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-amber-800"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

