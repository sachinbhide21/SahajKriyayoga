export type HQCategory = 'Vasudev Mandir' | 'Mokshanath Temple' | 'Ashram View' | 'Gita Mandir' | 'Guru Mandir' | 'Ashram & Gadrasini Hill View';

export interface HQPhoto {
  id: string;
  title: string;
  caption: string;
  description: string;
  category: HQCategory;
  imageUrl: string;
  alt: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
}

export const HQ_ORIGINAL_PHOTOS: HQPhoto[] = [
  {
    id: 'hq-vasudev-1',
    title: 'Vasudev Bhagavan Mandir on Gadrasini Pahar',
    caption: 'Vasudev Bhagavan Mandir situated in the tranquil forest on Gadrasini Pahar.',
    description: 'When starting to climb the Gadrasini Hill, the very first destination encountered is Vasudev Bhagavan Mandir along with Mahabali Hanumanji Mandir, nestled peacefully in the mountain forest.',
    category: 'Vasudev Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1plBIGEMab60g234-a5ax8DHfSwCDT7Vm',
    alt: 'Vasudev Bhagavan Mandir situated in the forest on Gadrasini Pahar',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-vasudev-2',
    title: 'Vasudev Bhagavan & Mahabali Hanumanji Mandir',
    caption: 'First holy shrine along the Gadrasini Hill ascent path.',
    description: 'Enshrined together on the sacred footway of Gadrasini Pahar, Vasudev Bhagavan Mandir along with Mahabali Hanumanji Mandir bestows spiritual peace, devotion, and protective energy on every pilgrim starting the ascent.',
    category: 'Vasudev Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_r4Hk-c4HlKgGgS8LY-An-Qa7TPbOibm',
    alt: 'Vasudev Bhagavan Mandir along with Mahabali Hanumanji Mandir on Gadrasini Hill',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-vasudev-3',
    title: 'Forest Path to Vasudev Mandir Sanctuary',
    caption: 'Serene forest surroundings of Vasudev Bhagavan Mandir on Gadrasini Hill.',
    description: 'Surrounded by ancient forest trees and pristine mountain air, Vasudev Bhagavan Mandir serves as the initial holy sanctuary before ascending further to Mokshanath Baba Temple and Ashram premises.',
    category: 'Vasudev Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KU7SSuYHgrHjmYJkwDFQ0KywJy8_6nw4',
    alt: 'Forest surroundings of Vasudev Bhagavan Mandir on Gadrasini Pahar',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-mokshanath-1',
    title: 'Mokshanath Temple - Shiv Ji Temple on Gadrasini Hilltop',
    caption: 'Mokshanath Temple, sacred temple of Lord Shiva (Shiv Ji), perched on top of Gadrasini Hill.',
    description: 'Landmark #02 on Gadrasini Pahar is Mokshanath Temple, the sacred temple of Shiv ji situated at the highest peak of Gadrasini Hill surrounded by open sky and mountain nature.',
    category: 'Mokshanath Temple',
    imageUrl: 'https://lh3.googleusercontent.com/d/11WFzoXZxAKq2EQKFb82hwhrNo-IrpCV6',
    alt: 'Mokshanath Shiva Temple situated on top of Gadrasini Hill',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-mokshanath-2',
    title: 'Mokshanath Baba Shiva Sanctum on Hilltop',
    caption: 'Hilltop sanctum of Lord Shiva at Mokshanath Temple on Gadrasini Peak.',
    description: 'A place of sublime silence and intense spiritual vibrations, Mokshanath Temple on top of Gadrasini Hill is dedicated to Lord Shiva (Shiv Ji) for tapasya, prayer, and Kriya Yoga contemplation.',
    category: 'Mokshanath Temple',
    imageUrl: 'https://lh3.googleusercontent.com/d/13YG0SBpFunnvpXIrsCYMHYmB3NOYcnqv',
    alt: 'Hilltop Shiva temple sanctum of Mokshanath Baba on Gadrasini Pahar',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-mokshanath-3',
    title: 'Mokshanath Temple & Mountain Peak Landscape',
    caption: 'Serene mountain landscape surrounding Mokshanath Shiv Ji Temple on Gadrasini Hill top.',
    description: 'Offering panoramic views across Belpahari forest ranges, Mokshanath Shiv Ji Temple crowns the top of Gadrasini Hill as a supreme beacon of peace.',
    category: 'Mokshanath Temple',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ZagCq6Rz523Fh5LCXYyWvvVm3-QThxoy',
    alt: 'Gadrasini Hilltop view around Mokshanath Shiva Temple',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-1',
    title: 'Panoramic Ashram View - Gadrasini Pahar',
    caption: 'Lush green mountain landscape and serene ashram grounds at Gadrasini Pahar.',
    description: 'Landmark #03: Scenic overview of Brahmarshi Satyananda Sannyas Ashram nestled at the foothills of Gadrasini Pahar.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1T3eHg2hju3MtPZQHKC6eXabo6y8DpOui',
    alt: 'Panoramic Ashram View at Gadrasini Pahar Belpahari',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-2',
    title: 'Ashram Cottage & Forest Landscape',
    caption: 'Traditional yellow meditation cottage nestled in the dense forest.',
    description: 'Landmark #03: Peaceful ashram cottage surrounded by ancient sal trees and fresh mountain air.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/182pEO_69cyu-tHvRrGvJpxK_cCWZeyEw',
    alt: 'Ashram Cottage surrounded by forest at Gadrasini Pahar',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-3',
    title: 'Sacred Footpath & Ashram Grounds',
    caption: 'Winding stone footpath leading through the tranquil ashram premises.',
    description: 'Landmark #03: Sacred footway connecting the meditation groves, temple sanctums, and residential cottages.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KpfbXbZYFUt0c5r4NN3Vz12IDFF1Bt8q',
    alt: 'Stone footpath through Gadrasini Pahar Ashram grounds',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-4',
    title: 'Gadrasini Mountain & Ashram Vista',
    caption: 'Majestic view of Gadrasini Hill rising behind the ashram grounds.',
    description: 'Landmark #03: The iconic peak of Gadrasini Pahar overlooking the quiet spiritual retreat.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1JK1cyzPuBw6EowzucDPDpXo_lBHl3ROj',
    alt: 'Gadrasini Mountain peak view behind ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-5',
    title: 'Ashram Garden & Floral Courtyard',
    caption: 'Vibrant flower garden and sacred trees in the ashram courtyard.',
    description: 'Landmark #03: Beautifully tended flora and sacred groves offering a peaceful setting for Kriya Yoga sadhana.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1haQwrGbgEgjcUtbaf2O9RI-ZW43Bq4lT',
    alt: 'Ashram garden and flowers at Gadrasini Pahar',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-6',
    title: 'Meditation Arbor & Forest Shade',
    caption: 'Shaded seating under old forest trees for quiet reflection.',
    description: 'Landmark #03: Quiet, cool corners across the ashram premises ideal for japa, self-study, and introspection.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1-IHyLZKC9Gr_5gePMkruTUei7kL4czek',
    alt: 'Shaded forest meditation arbor in ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-7',
    title: 'Ashram Premises & Hill Slope',
    caption: 'Panoramic view across the gentle slopes of Gadrasini Pahar.',
    description: 'Landmark #03: Natural forest landscape offering uninterrupted tranquility away from urban noise.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/19DCrunatvDJRp2fjaASW35-5cYeMZmuc',
    alt: 'Ashram premises and hill slope at Gadrasini',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-8',
    title: 'Spiritual Retreat Cottage View',
    caption: 'Cozy forest retreat cottages provided for visiting sadhaks.',
    description: 'Landmark #03: Simple, serene accommodation cottages surrounded by nature for spiritual retreats.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SNC8XEH-HdHLLTyxdf0n9s1FPiIpnFGq',
    alt: 'Spiritual retreat cottage view at ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-9',
    title: 'Ashram Courtyard & Gathering Area',
    caption: 'Exterior perspective of the central ashram gathering area.',
    description: 'Landmark #03: Sacred courtyard where devotees gather for morning and evening prayers and satsangs.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1lDbMQK1MOpctnPikIOOGeWMp4O4HHNLR',
    alt: 'Ashram central courtyard and gathering space',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-10',
    title: 'Verdant Forest Canopy at Gadrasini',
    caption: 'Dense green forest canopy surrounding the ashram complex.',
    description: 'Landmark #03: Pristine forest environment offering pure oxygen, silence, and natural harmony.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Otv6Z9VWrvsE0pKsu7OcK0OfLCTVInLH',
    alt: 'Verdant forest canopy over Gadrasini ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-11',
    title: 'Ashram Pathway & Mountain View',
    caption: 'Clean stone path lined with green foliage leading through the ashram.',
    description: 'Landmark #03: Scenic walkway connecting the main entrance, temples, and meditation halls.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1719BYS_9yitCWqV-oCa_Kv-qDE4L3S_n',
    alt: 'Ashram pathway and mountain scenery',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-12',
    title: 'Forest Sanctuary View - Belpahari',
    caption: 'Overview of the quiet wilderness surrounding the ashram.',
    description: 'Landmark #03: Unspoiled natural beauty of Belpahari forest range embracing the sacred ashram.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1xnTgHmnzoU2Y98l0kjk8BMUNj98-X2yZ',
    alt: 'Belpahari forest sanctuary view around ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-13',
    title: 'Ashram Entrance Lawn & Garden',
    caption: 'Maintained green lawn and floral border inside the ashram.',
    description: 'Landmark #03: Welcoming green landscape at the heart of Gadrasini Pahar Ashram.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GRh2CM-sWttL_pgCfXGcC0RIguiqao6p',
    alt: 'Ashram entrance lawn and garden',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-14',
    title: 'Gadrasini Foothills & Ashram View',
    caption: 'Scenic vista at the base of Gadrasini Hill.',
    description: 'Landmark #03: Inspirational views inspiring devotion and peace in every visiting seeker.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/19rVwzmmcwvyx90IbYAYNuno0gHF8-7k-',
    alt: 'Gadrasini foothills and ashram landscape',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-15',
    title: 'Quiet Meditation Pavilion Exterior',
    caption: 'Secluded forest pavilion dedicated to silent meditation.',
    description: 'Landmark #03: Built amidst nature to facilitate continuous Kriya Yoga practice and contemplation.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1yf2EiGmoG3w-2J9Y4jqHQb7sFHpoezEl',
    alt: 'Quiet meditation pavilion in ashram forest',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-16',
    title: 'Ashram Forest Footpath & Nature Trail',
    caption: 'Scenic walking trail winding around the ashram hill perimeter.',
    description: 'Landmark #03: Nature trail used by sadhaks for meditative walks and mindful solitude.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Cv306mXXb-GUHFkbQsE_YHMT3dtLzYVr',
    alt: 'Forest footpath and nature trail at ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-ashram-view-17',
    title: 'Twilight View over Ashram Grounds',
    caption: 'Serene dusk view over Gadrasini Pahar ashram landscape.',
    description: 'Landmark #03: Atmospheric evening light wrapping the ashram in sublime peace and stillness.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DhAQiFMYLDmFH7aZMZOuxJthcF6STWA7',
    alt: 'Twilight view over Gadrasini Pahar ashram grounds',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-gitamandir-1',
    title: 'Gita Mandir Exterior Sanctum - Gadrasini Pahar',
    caption: 'Gita Mandir temple building at Brahmarshi Satyananda Sannyas Ashram.',
    description: 'Landmark #04: Gita Mandir at Gadrasini Pahar Ashram, housing the sacred altar of Lord Krishna, founder portrait, and Bhagavad Gita verse inscriptions for scriptural discourse and spiritual study.',
    category: 'Gita Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1cu81lVu4hZaLsCRpMao-nxH1AvYMG6iG',
    alt: 'Gita Mandir exterior view at Gadrasini Pahar Ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-gitamandir-2',
    title: 'Gita Mandir Altar & Sacred Sanctum View',
    caption: 'Interior/sanctum perspective of Gita Mandir at Gadrasini Pahar headquarters.',
    description: 'Landmark #04: Sacred sanctum of Gita Mandir where daily Gita recitation, evening aarti, and spiritual discourses are held for spiritual seekers.',
    category: 'Gita Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1769n52rRcNRf8KOUX0MOLmBovEDZlUUW',
    alt: 'Gita Mandir sanctum and altar view at Gadrasini Pahar Ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-gurumandir-1',
    title: 'Guru Mandir Sanctum - Gadrasini Pahar',
    caption: 'Guru Mandir temple consecrated to the Guru Parampara at Gadrasini Ashram.',
    description: 'Landmark #05: Guru Mandir at Brahmarshi Satyananda Sannyas Ashram, Gadrasini Pahar. Dedicated to the revered Masters of the Guru Parampara, facilitating holy darshan, deep devotion, and silent Kriya Yoga contemplation.',
    category: 'Guru Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/12IfzNE1SLspZxXVcW3kqiKe6oGMXW7h4',
    alt: 'Guru Mandir consecrated sanctum at Gadrasini Pahar Ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-gurumandir-2',
    title: 'Guru Mandir Sacred Altar & Guru Parampara Shrine',
    caption: 'Sacred altar inside Guru Mandir displaying revered portraits of the Guru Lineage.',
    description: 'Landmark #05: Interior shrine of Guru Mandir enshrining the holy portraits of Param Pujya Swami Jagadananda Giri Maharaj and Paramhans Swami Gyanananda Maharaj.',
    category: 'Guru Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1f4VTFqFWKxk-z-nAD6O1QzClzGUYy680',
    alt: 'Sacred altar inside Guru Mandir with Guru Parampara portraits',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-gurumandir-3',
    title: 'Guru Mandir View & Sacred Meditation Corner',
    caption: 'Peaceful ambience surrounding Guru Mandir at Gadrasini Pahar.',
    description: 'Landmark #05: Surrounded by the tranquil mountain forest, Guru Mandir offers a serene sanctuary where sadhaks receive Guru divine grace and inner quietude.',
    category: 'Guru Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/12vtW9OUZTeR4fPe6rpyT-SEJuvfJSGQX',
    alt: 'Guru Mandir peaceful sanctuary surroundings at Gadrasini Pahar',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-photo-1',
    title: 'Main Entrance Gate & Ashram Archway',
    caption: 'Main entrance archway with lion sentinels & Bengali signboard "ব্রহ্মর্ষি সত্যানন্দ সন্ন্যাস আশ্রম - গড়রাসিনী পাহাড়".',
    description: 'The sacred main gate welcoming devotees and seekers to Brahmarshi Satyananda Sannyas Ashram at Gadrasini Pahar, Belpahari. Flanked by majestic lion statues and shaded by dense forest trees.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GRh2CM-sWttL_pgCfXGcC0RIguiqao6p',
    alt: 'Main entrance gate of Brahmarshi Satyananda Sannyas Ashram Gadrasini Pahar Belpahari with lion statues and sign',
    aspectRatio: '16:9'
  },
  {
    id: 'hq-photo-2',
    title: 'Mokshanath Baba Temple Shrine on Hilltop Rocks',
    caption: 'Mokshanath Baba Temple Shrine situated on the sacred rocky peak of Gadrasini Pahar.',
    description: 'Perched on the granite boulders of Gadrasini Pahar, this serene temple dedicated to Mokshanath Baba (Lord Shiva) offers elevated vibrations for solitary meditation and prayer under the open sky.',
    category: 'Mokshanath Temple',
    imageUrl: 'https://lh3.googleusercontent.com/d/11WFzoXZxAKq2EQKFb82hwhrNo-IrpCV6',
    alt: 'Mokshanath Baba Temple Shrine on rocky peak of Gadrasini Pahar',
    aspectRatio: '3:4'
  },
  {
    id: 'hq-photo-3',
    title: 'Swami Gyanananda Maharaj & Devotees at Forest Cottage',
    caption: 'Swami Gyanananda Maharaj with devotees outside the yellow forest temple cottage.',
    description: 'Paramhans Swami Gyanananda Maharaj in orange robes standing with humble devotees with folded hands outside the yellow temple cottage in the tranquil Gadrasini forest.',
    category: 'Guru Mandir',
    imageUrl: '/images/gurus/guru_6.png',
    alt: 'Swami Gyanananda Maharaj with devotees outside yellow temple cottage in Gadrasini forest',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-photo-4',
    title: 'Sri Gita Mandir Temple Sanctum',
    caption: 'Sri Gita Mandir at Gadrasini Pahar Ashram featuring Lord Krishna altar & Gita verse inscriptions.',
    description: 'The sanctum sanctorum of Sri Gita Mandir featuring Lord Krishna deity, portrait of founder Param Pujya Swami Jagadananda Giri Maharaj, Lord Hanuman statue, and Bhagavad Gita verse inscriptions.',
    category: 'Gita Mandir',
    imageUrl: 'https://lh3.googleusercontent.com/d/1cu81lVu4hZaLsCRpMao-nxH1AvYMG6iG',
    alt: 'Sanctum and temple view of Sri Gita Mandir at Gadrasini Pahar Ashram',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-photo-5',
    title: 'Satsang & Prayer Gathering outside Ashram Cottage',
    caption: 'Swami Gyanananda Maharaj leading prayer with devotees in front of the Ashram cottage.',
    description: 'A serene gathering of spiritual seekers receiving blessings from Paramhans Swami Gyanananda Maharaj amidst the natural forest surroundings of Gadrasini Pahar.',
    category: 'Guru Mandir',
    imageUrl: '/images/gurus/guru_6.png',
    alt: 'Satsang and prayer with Swami Gyanananda Maharaj outside Ashram cottage',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-photo-6',
    title: 'Swami Jagadananda Giri Maharaj - Founder Master',
    caption: 'Param Pujya Swami Jagadananda Giri Maharaj, founder of Gadrasini Ashram Belpahari.',
    description: 'Sacred image of Param Pujya Swami Jagadananda Giri Maharaj who founded Brahmarshi Satyananda Sannyas Ashram at Gadrasini Pahar in 1971.',
    category: 'Guru Mandir',
    imageUrl: '/images/gurus/guru_5.png',
    alt: 'Param Pujya Swami Jagadananda Giri Maharaj founder',
    aspectRatio: '4:3'
  },
  {
    id: 'hq-photo-7',
    title: 'Paramhans Swami Gyanananda Maharaj - Present Spiritual Head',
    caption: 'Paramhans Swami Gyanananda Maharaj guiding seekers at Belpahari Ashram.',
    description: 'An intimate portrait of Paramhans Swami Gyanananda Maharaj, present spiritual head of Brahmarshi Satyananda Sannyas Ashram.',
    category: 'Guru Mandir',
    imageUrl: '/images/gurus/guru_6.png',
    alt: 'Paramhans Swami Gyanananda Maharaj present spiritual head',
    aspectRatio: '3:4'
  },
  {
    id: 'hq-photo-8',
    title: 'Sacred Neem & Banyan Meditation Grove',
    caption: 'Centuries-old Banyan & Neem meditation arbor at the foothills of Gadrasini Pahar.',
    description: 'Ancient canopy providing quiet shade for Kriya Yoga practitioners and solitary sadhaks seeking inner peace.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Otv6Z9VWrvsE0pKsu7OcK0OfLCTVInLH',
    alt: 'Ancient Banyan and Neem meditation grove at Gadrasini Pahar Ashram',
    aspectRatio: '16:9'
  },
  {
    id: 'hq-photo-9',
    title: 'Twilight Vista over Belpahari Hill Range',
    caption: 'Peaceful dusk sky over the Gadrasini forest and surrounding Belpahari hills.',
    description: 'The golden horizon at twilight reflecting serenity over the spiritual sanctuary.',
    category: 'Ashram View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DhAQiFMYLDmFH7aZMZOuxJthcF6STWA7',
    alt: 'Twilight vista over Belpahari hill range and Ashram forest',
    aspectRatio: '16:9'
  },
  {
    id: 'hq-hill-view-1',
    title: 'Ashram and Gadrasini Hill View Video',
    caption: 'Scenic video tour of Brahmarshi Satyananda Sannyas Ashram and Gadrasini Hill View.',
    description: 'Landmark #06: Exclusive video tour capturing panoramic views of Brahmarshi Satyananda Sannyas Ashram premises and the surrounding Gadrasini Hill peak in Belpahari.',
    category: 'Ashram & Gadrasini Hill View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1T3eHg2hju3MtPZQHKC6eXabo6y8DpOui',
    alt: 'Ashram and Gadrasini Hill View Video Tour',
    aspectRatio: '16:9'
  },
  {
    id: 'hq-hill-view-2',
    title: 'Gadrasini Hill Forest & Ashram Landscape',
    caption: 'Lush green forest canopy stretching towards Gadrasini Pahar peak.',
    description: 'Landmark #06: Sweeping mountain vista and forest canopy around Belpahari Ashram premises.',
    category: 'Ashram & Gadrasini Hill View',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GRh2CM-sWttL_pgCfXGcC0RIguiqao6p',
    alt: 'Gadrasini Hill Range and forest canopy view',
    aspectRatio: '16:9'
  },
  {
    id: 'hq-hill-view-3',
    title: 'Hilltop Overview of Belpahari Sanctuaries',
    caption: 'Panoramic view from the slopes of Gadrasini Pahar.',
    description: 'Landmark #06: High vantage point view looking over the sacred ashram cottages and forest groves.',
    category: 'Ashram & Gadrasini Hill View',
    imageUrl: 'https://lh3.googleusercontent.com/d/11WFzoXZxAKq2EQKFb82hwhrNo-IrpCV6',
    alt: 'Panoramic view from Gadrasini Pahar',
    aspectRatio: '16:9'
  }
];
