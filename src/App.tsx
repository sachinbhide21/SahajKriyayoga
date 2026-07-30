import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { AboutAshramSection } from './components/AboutAshramSection';
import { GuruParamparaSection } from './components/GuruParamparaSection';
import { PresentGuruSection } from './components/PresentGuruSection';
import { TeachingsSection } from './components/TeachingsSection';
import { BranchesSection } from './components/BranchesSection';
import { EventsCalendar } from './components/EventsCalendar';
import { GallerySection } from './components/GallerySection';
import { YouTubeSection } from './components/YouTubeSection';
import { BooksSection } from './components/BooksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DonationSection } from './components/DonationSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

import { SearchModal } from './components/SearchModal';
import { GuruDetailModal } from './components/GuruDetailModal';
import { EventRegistrationModal } from './components/EventRegistrationModal';
import { ElementorCMSGuideModal } from './components/ElementorCMSGuideModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { FloatingWidgets } from './components/FloatingWidgets';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#FAF8F5] text-slate-800 transition-colors duration-300 font-sans">
            
            <SEOHead activeSection="home" />

            <Header />

            <main>
              <Routes>
                <Route path="/" element={<HeroBanner onNavigate={() => {}} />} />
                <Route path="/about" element={<AboutAshramSection />} />
                <Route path="/guru-parampara" element={<GuruParamparaSection />} />
                <Route path="/present-guru" element={<PresentGuruSection />} />
                <Route path="/teachings" element={<TeachingsSection />} />
                <Route path="/kriya-yoga" element={<TeachingsSection />} />
                <Route path="/branches" element={<BranchesSection />} />
                <Route path="/events" element={<EventsCalendar />} />
                <Route path="/gallery" element={<GallerySection />} />
                <Route path="/youtube" element={<YouTubeSection />} />
                <Route path="/publications" element={<BooksSection />} />
                <Route path="/testimonials" element={<TestimonialsSection />} />
                <Route path="/donate" element={<DonationSection />} />
                <Route path="/contact" element={<ContactSection />} />
                <Route path="/faq" element={<FAQSection />} />
              </Routes>
            </main>

            <Footer onNavigate={() => {}} />

            <SearchModal />
            <GuruDetailModal />
            <EventRegistrationModal />
            <ElementorCMSGuideModal />
            <AudioPlayerBar />
            <FloatingWidgets />

          </div>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}
