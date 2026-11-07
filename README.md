# Brahmarishi Satyananda Sannyas Ashram - Official Website & Admin CMS

Official website and comprehensive content management system (CMS) for Brahmarishi Satyananda Sannyas Ashram, preserving authentic Kriya Yoga, Bhagavad Gita, and Guru Parampara teachings from Gadrasini Pahar, Belpahari, West Bengal.

---

## 🌟 Key Features

1. **Interactive Ashram Website:**
   - **Hero & Lineage Showcase:** Sacred Guru Parampara, present spiritual master Paramhans Gyanananda Maharaj, and Kriya Yoga science.
   - **Ashram Photo & Video Gallery:** Unified media gallery with category filtering, photo viewer, and embedded responsive video player (YouTube & MP4 support).
   - **Events Calendar:** Schedule of upcoming spiritual camps, retreats, and Bhagwat Katha weeks.
   - **Interactive India Map & Branch Directory:** Explore centres in West Bengal, Gujarat, MP, Uttarakhand, and Odisha.
   - **Spiritual Discourses & YouTube Library:** Video lectures, katha discourses, and sacred chanting audio.
   - **Sacred Audio Chanting Player:** Continuous floating player for Guru Stotra, Amar Gurur Charan, and Vasudev Kirtan.
   - **Multilingual Support:** English, Hindi (हिंदी), and Bengali (বাংলা).

2. **Complete Admin Control Panel (`/admin`):**
   - **Secure Staff Authentication:**
     - **Default Username:** `admin`
     - **Default Password:** `ashram@123`
     - Built-in credentials manager to update password at any time.
   - **Gallery Media Manager:**
     - **Upload Photos:** Local file drag-and-drop / file selector with instant base64 conversion & preview, or remote image URL.
     - **Upload / Add Videos:** YouTube URL/ID auto-extractor with high-resolution thumbnail generation or direct MP4 video link.
     - Categorize by *Ashram & Temple, Gadrasini Pahar, Guru Parampara, Festivals, Meditation Camps, Branch Ashrams, Seva Activities*, or create custom categories.
     - Edit captions, locations, dates, featured flags, and delete items.
   - **Ticker Notices & Marquee Manager:**
     - Add, edit, reorder, and remove animated announcements on the top header ticker.
   - **Events & Retreats Management:**
     - Schedule new Kriya Yoga camps, festivals, and discourses.
   - **Branch Ashrams Directory:**
     - Add and manage centres with location addresses, contacts, photos, and Google Maps links.
   - **Ashram Information & Contacts:**
     - Manage official ashram names, contact phone numbers, emails, and satsang timings.
   - **YouTube & Video Discourses:**
     - Update official YouTube channel links, handles, and discourse catalogue.
   - **Guru Parampara Profiles:**
     - Edit spiritual master titles, bios, quotes, and portraits.
   - **Books & Publications:**
     - Manage ashram literature, authors, pages, pricing in INR, and cover images.
   - **Devotee Testimonials & FAQs:**
     - Manage seeker inquiries and real spiritual testimonials.
   - **Full Backup & Restore:**
     - **One-Click JSON Export:** Download complete website data snapshot (`sahaj_kriyayoga_website_backup_<date>.json`).
     - **Instant JSON Import:** Restore or migrate full website data from any backup file.
     - **Reset to Factory Content:** One-click rollback to default ashram seed dataset.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (version 18 or newer)
- npm or bun

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Environment Variables (Optional)
If using Gemini AI features, copy `.env.example` to `.env.local` and add your API key:
```bash
cp .env.example .env.local
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be accessible at:
- **Public Website:** `http://localhost:3000/`
- **Gallery Page:** `http://localhost:3000/gallery`
- **Admin Panel:** `http://localhost:3000/admin`

---

## 🔐 Admin Panel Access

1. Open your browser and navigate to `http://localhost:3000/admin` (or click **"Admin"** in the top header or **"Admin Portal"** in the footer).
2. Enter the administrator credentials:
   - **Username:** `admin`
   - **Password:** `ashram@123`
   *(A quick "Autofill" button is available on the login card for easy access)*
3. Manage all sections of the website live! Any change you make will immediately reflect across the entire public website.

---

## 📁 Project Structure

```
├── public/                 # Static assets, logos, guru images, audio tracks
│   ├── images/             # Gurus, branches, sanctuary photos
│   └── audio/              # Sacred chanting mp3s
├── src/
│   ├── admin/              # Comprehensive Admin CMS
│   │   ├── AdminLogin.tsx  # Staff authentication screen
│   │   ├── AdminLayout.tsx # Main dashboard layout & sidebar
│   │   ├── AdminPage.tsx   # Admin route wrapper
│   │   └── tabs/           # Dedicated management tabs:
│   │       ├── DashboardTab.tsx
│   │       ├── GalleryManagerTab.tsx   # Photos & Videos upload & manager
│   │       ├── NoticesManagerTab.tsx   # Scrolling marquee notices
│   │       ├── AshramInfoTab.tsx       # Headquarters & contact info
│   │       ├── EventsManagerTab.tsx    # Spiritual camps & retreat scheduler
│   │       ├── BranchesManagerTab.tsx  # Branch network directory
│   │       ├── YouTubeManagerTab.tsx   # Discourses & channel settings
│   │       ├── GuruParamparaTab.tsx    # Lineage masters & quotes
│   │       ├── BooksManagerTab.tsx     # Publications & literature
│   │       ├── TestimonialsManagerTab.tsx
│   │       ├── FaqManagerTab.tsx       # FAQs by category
│   │       └── SettingsBackupTab.tsx   # Backup JSON export/import & password
│   ├── components/         # Public React website components
│   │   ├── GallerySection.tsx          # Upgraded photo & video gallery
│   │   ├── Header.tsx                  # Header with dynamic ticker & admin link
│   │   ├── Footer.tsx                  # Footer with admin link
│   │   ├── EventsCalendar.tsx          # Dynamic events calendar
│   │   ├── YouTubeSection.tsx          # Dynamic discourse video catalogue
│   │   └── ...
│   ├── context/
│   │   ├── AdminAuthContext.tsx        # Admin authentication & credentials state
│   │   ├── WebsiteDataContext.tsx      # Central reactive website data & persistence
│   │   ├── LanguageContext.tsx         # Multi-language provider
│   │   └── ThemeContext.tsx            # Audio player & theme state
│   ├── data/
│   │   └── ashramData.ts               # Core ashram master dataset
│   ├── App.tsx                         # Router configuration
│   └── main.tsx                        # App entry point
└── package.json
```

---

## 🕉️ Preserving the Sacred Light of Kriya Yoga
**Hari Om Tat Sat**
