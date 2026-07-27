import React, { useEffect } from 'react';
import { ASHRAM_INFO } from '../data/ashramData';

interface SEOHeadProps {
  activeSection: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ activeSection }) => {
  useEffect(() => {
    // Generate page title based on active view
    let title = `${ASHRAM_INFO.name} | Official Website`;
    let description = "Official website of Brahmarishi Satyananda Sannyas Ashram located at Gadrasini Pahar, Belpahari, West Bengal. Preserving authentic Kriya Yoga, Bhagavad Gita, Bhagwat Katha, and Guru Parampara teachings.";

    switch (activeSection) {
      case 'centres':
      case 'our-centres':
      case 'branches':
        title = `Our Ashram Centres | ${ASHRAM_INFO.name}`;
        description = "Discover our spiritual centres across India dedicated to Kriya Yoga, meditation, satsang and the timeless Guru Parampara at Belpahari, Nanpa, Ganjit, Jalampura, Haridwar, and Dindori.";
        break;
      case 'about':
        title = `About Ashram | ${ASHRAM_INFO.name}`;
        description = "Learn about the history of Brahmarishi Satyananda Sannyas Ashram founded in 1971 at Belpahari foothills by Swami Jagadananda Giri Maharaj.";
        break;
      case 'guru-parampara':
        title = `Guru Parampara | ${ASHRAM_INFO.name}`;
        description = "Discover the sacred Kriya Yoga lineage descending from Mahavatar Babaji to Lahiri Mahasaya, Sri Yukteswar, Swami Satyananda Giri, Swami Jagadananda Giri, and Paramhans Gyanananda Maharaj.";
        break;
      case 'present-guru':
        title = `Paramhans Gyanananda Maharaj | Present Acharya`;
        description = "Life, teachings, and 'Khud Ko Jano' spiritual message of Paramhans Gyanananda Maharaj, Present Spiritual Head of Belpahari Ashram.";
        break;
      case 'kriya-yoga':
        title = `Kriya Yoga Science & Meditation | Belpahari Ashram`;
        description = "Explore the authentic science of Kriya Yoga breath mastery, spiritual initiation, and meditation practices.";
        break;
      case 'events':
        title = `Upcoming Events & Kriya Camps | Belpahari Ashram`;
        description = "Register for Guru Purnima Mahotsav, 3-Day Intensive Kriya Yoga Sadhana Camp, and Srimad Bhagwat Kathas.";
        break;
      case 'donate':
        title = `Donate & Seva | Brahmarishi Satyananda Sannyas Ashram`;
        description = "Support Annadaana Seva, Ashram Development, Gau Seva, and Kriya Yoga propagation. 80G Tax Exemption available.";
        break;
      default:
        break;
    }

    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Inject JSON-LD Schema Markup for Organization & Place
    const schemaJSON = {
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": ASHRAM_INFO.name,
      "alternateName": [ASHRAM_INFO.sanskritName, ASHRAM_INFO.bengaliName],
      "url": "https://satyanandashram.org",
      "logo": "https://satyanandashram.org/logo.png",
      "foundingDate": "1971",
      "founder": {
        "@type": "Person",
        "name": ASHRAM_INFO.founder
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${ASHRAM_INFO.headquarters.hills}, ${ASHRAM_INFO.headquarters.town}`,
        "addressLocality": ASHRAM_INFO.headquarters.district,
        "addressRegion": ASHRAM_INFO.headquarters.state,
        "postalCode": ASHRAM_INFO.headquarters.pinCode,
        "addressCountry": "IN"
      },
      "telephone": ASHRAM_INFO.headquarters.phone,
      "email": ASHRAM_INFO.headquarters.email
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaJSON);

  }, [activeSection]);

  return null;
};
