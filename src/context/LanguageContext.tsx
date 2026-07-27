import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    ashram_name: "Brahmarishi Satyananda Sannyas Ashram",
    ashram_location: "Gadrasini Pahar, Belpahari, West Bengal",
    explore_ashram: "Explore Ashram",
    learn_kriya: "Learn Kriya Yoga",
    watch_discourses: "Watch Discourses",
    home: "Home",
    about_ashram: "About Ashram",
    guru_parampara: "Guru Parampara",
    present_guru: "Present Guru",
    kriya_yoga: "Kriya Yoga",
    bhagavad_gita: "Bhagavad Gita",
    bhagwat_katha: "Bhagwat Katha",
    branches: "Ashram Centres",
    our_centres: "Our Centres",
    gallery: "Gallery",
    events: "Events & Festivals",
    news: "News & Updates",
    books: "Publications",
    youtube: "YouTube Videos",
    donate: "Donate / Seva",
    contact: "Contact Us",
    faq: "FAQ",
    search: "Search",
    khud_ko_jano: "Khud Ko Jano",
    khud_ko_jano_sub: "Know Thyself — Realize your divine eternal essence",
    phone_label: "Call Us",
    upcoming_camp: "Upcoming Spiritual Camp",
    gita_classes: "Bhagavad Gita Classes",
    guru_purnima: "Guru Purnima Celebration",
    latest_katha: "Latest Bhagwat Katha",
    daily_satsang: "Daily Satsang",
    experience_eternal: "Experience the Eternal Path of Kriya Yoga",
    hero_subheading: "Walking the timeless Guru Parampara from Mahavatar Babaji to Paramhans Gyanananda Maharaj.",
    quick_links: "Quick Links",
    all_rights_reserved: "All Rights Reserved",
    wp_elementor_cms: "WordPress Elementor Guide",
    spiritual_audio: "Spiritual Audio & Chanting",
    our_vision: "Our Vision",
    vision_text: "To preserve the sacred light of Kriya Yoga and Guru Parampara, guiding seekers toward self-realization, inner peace, and the timeless truth of “Know Yourself.”",
    our_mission: "Our Mission",
    mission_text: "To nurture sincere spiritual seekers through Kriya Yoga, meditation, scriptural wisdom, satsang, seva, and disciplined ashram life."
  },
  hi: {
    ashram_name: "ब्रह्मर्षि सत्यानन्द संन्यास आश्रम",
    ashram_location: "गढ़रासिनी पहाड़, बेलपहाड़ी, पश्चिम बंगाल",
    explore_ashram: "आश्रम दर्शन",
    learn_kriya: "क्रिया योग सीखें",
    watch_discourses: "प्रवचन देखें",
    home: "मुख्य पृष्ठ",
    about_ashram: "आश्रम परिचय",
    guru_parampara: "गुरु परंपरा",
    present_guru: "वर्तमान आचार्य",
    kriya_yoga: "क्रिया योग",
    bhagavad_gita: "श्रीमद्भगवद्गीता",
    bhagwat_katha: "भागवत कथा",
    branches: "आश्रम शाखाएं",
    gallery: "चित्र दीर्घा",
    events: "उत्सव व कार्यक्रम",
    news: "समाचार व संदेश",
    books: "प्रकाशन व पुस्तकें",
    youtube: "यूट्यूब वीडियो",
    donate: "दान व सेवा",
    contact: "संपर्क करें",
    faq: "सामान्य प्रश्न",
    search: "खोजें",
    khud_ko_jano: "खुद को जानो",
    khud_ko_jano_sub: "खुद को जानो — अपने भीतर छिपे शाश्वत स्वरूप को पहचानो",
    phone_label: "फोन करें",
    upcoming_camp: "आगामी आध्यात्मिक शिविर",
    gita_classes: "गीता ज्ञान कक्षाएं",
    guru_purnima: "गुरु पूर्णिमा महोत्सव",
    latest_katha: "श्रीमद्भागवत कथा",
    daily_satsang: "दैनिक सत्संग",
    experience_eternal: "क्रिया योग के सनातन मार्ग का अनुभव करें",
    hero_subheading: "महावतार बाबाजी से परमहंस ज्ञानानन्द गिरि महाराज तक अमर गुरु परंपरा का दिव्य पथ।",
    quick_links: "त्वरित लिंक",
    all_rights_reserved: "सर्वाधिकार सुरक्षित",
    wp_elementor_cms: "वर्डप्रेस एलिमेंटॉर गाइड",
    spiritual_audio: "आध्यात्मिक मंत्र व भजन",
    our_vision: "हमारा विजन (Our Vision)",
    vision_text: "क्रियायोग और गुरु परंपरा की पवित्र ज्योति को अक्षुण्ण रखना, साधकों को आत्म-साक्षात्कार, आंतरिक शांति और \"खुद को जानो\" के सनातन सत्य की ओर मार्गदर्शित करना।",
    our_mission: "हमारा मिशन (Our Mission)",
    mission_text: "क्रियायोग, ध्यान, शास्त्र-ज्ञान, सत्संग, सेवा और अनुशासित आश्रम जीवन के माध्यम से निष्ठावान साधकों का आध्यात्मिक पोषण करना।"
  },
  bn: {
    ashram_name: "ব্রহ্মর্ষি সত্যানন্দ সন্ন্যাস আশ্রম",
    ashram_location: "গড়রাসিনী পাহাড়, বেলপাহাড়ী, পশ্চিমবঙ্গ",
    explore_ashram: "আশ্রম পরিচয়",
    learn_kriya: "ক্রিয়া যোগ শিখুন",
    watch_discourses: "প্রবচন দেখুন",
    home: "মূল পাতা",
    about_ashram: "আশ্রম কথা",
    guru_parampara: "গুরু পরম্পরা",
    present_guru: "বর্তমান আচার্য",
    kriya_yoga: "ক্রিয়া যোগ",
    bhagavad_gita: "শ্রীমদ্ভগবদ্গীতা",
    bhagwat_katha: "ভাগবত কথা",
    branches: "আশ্রম শাখা সমূহ",
    gallery: "গ্যালারি",
    events: "উৎসব ও অনুষ্ঠান",
    news: "সংবাদ ও বার্তা",
    books: "প্রকাশনা ও বই",
    youtube: "ইউটিউব ভিডিও",
    donate: "দান ও সেবা",
    contact: "যোগাযোগ",
    faq: "প্রশ্নোত্তর",
    search: "সন্ধান করুন",
    khud_ko_jano: "নিজেকে জানো",
    khud_ko_jano_sub: "নিজেকে জানো — নিজের ভেতরের পরম সত্যকে অনুভব করো",
    phone_label: "ফোন করুন",
    upcoming_camp: "আগামী আধ্যাত্মিক শিবির",
    gita_classes: "গীতা পাঠ ক্লাস",
    guru_purnima: "গুরু পূর্ণিমা উৎসব",
    latest_katha: "ভাগবত কথা",
    daily_satsang: "দৈনিক সৎসঙ্গ",
    experience_eternal: "ক্রিয়া যোগের সনাতন পথের অভিজ্ঞতা নিন",
    hero_subheading: "মহাবতার বাবাজী থেকে পরমহংস জ্ঞানানন্দ গিরি মহারাজ পর্যন্ত চিরন্তন গুরু পরম্পরা।",
    quick_links: "প্রয়োজনীয় লিঙ্ক",
    all_rights_reserved: "সর্বস্বত্ব সংরক্ষিত",
    wp_elementor_cms: "ওয়ার্ডপ্রেস এলিমেন্টর গাইড",
    spiritual_audio: "আধ্যাত্মিক মন্ত্র ও অডিও",
    our_vision: "আমাদের ভিশন (Our Vision)",
    vision_text: "ক্রিয়াযোগ ও গুরু পরম্পরার পবিত্র জ্যোতিকে রক্ষা করা, সাধকদের আত্ম-উপলব্ধি, অভ্যন্তরীণ শান্তি এবং \"নিজেকে জানো\"-র চিরন্তন সত্যের দিকে পরিচালিত করা।",
    our_mission: "আমাদের মিশন (Our Mission)",
    mission_text: "ক্রিয়াযোগ, ধ্যান, শাস্ত্রীয় জ্ঞান, সৎসঙ্গ, সেবা এবং সুশৃঙ্খল আশ্রম জীবনের মাধ্যমে নিষ্ঠাবান সাধকদের আধ্যাত্মিক লালন-পালন করা।"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
