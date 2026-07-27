import React, { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
          
          {/* Dynamic SEO Meta Tags & Schema */}
          <SEOHead activeSection={activeSection} />

          {/* Sticky Header */}
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Main Homepage Flow */}
          <main>
            <HeroBanner onNavigate={scrollToSection} />
            <AboutAshramSection />
            <GuruParamparaSection />
            <PresentGuruSection />
            <TeachingsSection />
            <BranchesSection />
            <EventsCalendar />
            <GallerySection />
            <YouTubeSection />
            <BooksSection />
            <TestimonialsSection />
            <DonationSection />
            <ContactSection />
            <FAQSection />
          </main>

          {/* Footer */}
          <Footer onNavigate={scrollToSection} />

          {/* Global Modals & Overlay Utilities */}
          <SearchModal />
          <GuruDetailModal />
          <EventRegistrationModal />
          <ElementorCMSGuideModal />
          <AudioPlayerBar />
          <FloatingWidgets />

        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
