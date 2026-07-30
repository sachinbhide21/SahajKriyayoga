import {
  GuruParamparaItem,
  AshramBranch,
  TeachingItem,
  EventItem,
  NewsArticle,
  BookPublication,
  YouTubeVideo,
  GalleryPhoto,
  DevoteeTestimonial,
  FAQItem
} from '../types';

export const ASHRAM_INFO = {
  name: "Brahmarishi Satyananda Sannyas Ashram",
  sanskritName: "ब्रह्मर्षि सत्यानन्द संन्यास आश्रम",
  bengaliName: "ব্রহ্মর্ষি সত্যানন্দ সন্ন্যাস আশ্রম",
  foundedYear: 1971,
  founder: "Param Pujya Swami Jagadananda Giri Maharaj",
  inMemoryOf: "Brahmarishi Swami Satyananda Giri Maharaj",
  presentGuru: "Paramhans Gyanananda Maharaj",
  guidingMessage: "Know Thyself",
  guidingMessageEn: "Know Thyself — Realize Your Inner Divine Essence",
  vision: "To preserve the sacred light of Kriya Yoga and Guru Parampara, guiding seekers toward self-realization, inner peace, and the timeless truth of “Know Yourself.”",
  mission: "To nurture sincere spiritual seekers through Kriya Yoga, meditation, scriptural wisdom, satsang, seva, and disciplined ashram life.",
  headquarters: {
    hills: "Gadrasini Pahar",
    town: "Belpahari",
    district: "Jhargram",
    state: "West Bengal",
    country: "India",
    pinCode: "721501",
    phone: "+91 90094 11592, +91 99094 78275",
    email: "gururagomon@gmail.com",
    satsangTimings: "Daily Morning 6:00 AM - 8:00 AM | Evening 5:30 PM - 7:30 PM"
  }
};

export const GURU_PARAMPARA: GuruParamparaItem[] = [
  {
  "id": "mahavatar-babaji",
  "order": 1,
  "name": "Mahavatar Babaji Maharaj",
  "sanskritName": "महावतार बाबाजी महाराज",
  "title": "Immortal Himalayan Master & Supreme Source of Kriya Yoga",
  "titleHindi": "दिव्य क्रियायोग परंपरा के अमर महागुरु",
  "period": "Timeless / Immortal (अविनाशी)",
  "image": "/images/gurus/guru_1.png",
  "bio": "Mahavatar Babaji Maharaj is revered as the immortal Mahaguru of the Kriya Yoga lineage. In 1861, in the Himalayan caves near Ranikhet (Dronagiri), Babaji initiated Lahiri Mahasaya into Kriya Yoga, awakening his past-life memories and reviving this sacred science for modern humanity. Babaji radiates infinite compassion, guiding earnest seekers across ages through silent communion and divine grace.",
  "bioHindi": "महावतार बाबाजी महाराज क्रियायोग परंपरा के दिव्य महागुरु के रूप में पूजित हैं। गुरु-परंपरा में वर्णित है कि वे साधकों के जीवन में आवश्यकता के समय प्रकट होकर आध्यात्मिक मार्गदर्शन और संरक्षण प्रदान करते हैं। उनके विषय में उपलब्ध प्रसंग उनके अनिर्वचनीय स्वरूप, योगशक्ति, करुणा और आत्मज्ञान की दिव्य धारा को प्रकट करते हैं।",
  "introductionEn": "Mahavatar Babaji Maharaj is revered as the immortal Mahaguru of the Kriya Yoga lineage. Radiating supreme spiritual power and endless compassion, Babaji remains in a physical body across centuries in the high Himalayas, guiding earnest seekers through silent communion and divine grace.",
  "introductionHi": "महावतार बाबाजी महाराज क्रियायोग परंपरा के दिव्य महागुरु के रूप में पूजित हैं। गुरु-परंपरा में वर्णित है कि वे साधकों के जीवन में आवश्यकता के समय प्रकट होकर आध्यात्मिक मार्गदर्शन और संरक्षण प्रदान करते हैं। उनके विषय में उपलब्ध प्रसंग उनके अनिर्वचनीय स्वरूप, योगशक्ति, करुणा और आत्मज्ञान की दिव्य धारा को प्रकट करते हैं।",
  "earlyLifeEn": "Mahavatar Babaji's birth date, family origins, and early life remain shrouded in divine mystery. He lives in an immortal physical state, accessible only to highly advanced souls and chosen disciples who demonstrate absolute devotion, humility, and inner purity.",
  "earlyLifeHi": "महावतार बाबाजी का जन्मकाल, पारिवारिक पृष्ठभूमि और बाल्यकाल कालतीत और अलौकिक है। वे अमर देह में निवास करते हैं और बाह्य ऐतिहासिक अभिलेखों से परे केवल अंतःकरण की साधना और सद्गुरु-कृपा से संवेद्य हैं।",
  "spiritualJourneyEn": "In Autumn 1861, in the Himalayan caves near Ranikhet (Dronagiri), Babaji initiated Lahiri Mahasaya into Kriya Yoga. With a single divine touch, he awakened Lahiri Mahasaya's past-life memories and revived the ancient science of Kriya Yoga for modern humanity.",
  "spiritualJourneyHi": "सन् 1861 में हिमालय के रानीखेत (द्रोणागिरि पर्वत) क्षेत्र में बाबाजी महाराज ने श्यामाचरण लाहिड़ी महाशय को पूर्वजन्म के स्मरण के साथ क्रियायोग की महान दीक्षा प्रदान की और इस योग-विद्या का पुनरुद्धार किया। उन्होंने सिखाया कि मौन ही आत्मा की वास्तविक भाषा है और ईश्वर प्रत्येक जीव के हृदय में विराजमान हैं।",
  "lineageRoleEn": "As the supreme fountainhead of the Kriya Yoga revival, Mahavatar Babaji initiated Yogiraj Shyamacharan Lahiri Mahasaya, who initiated Swami Sri Yukteswar Giri, who initiated Brahmarishi Swami Satyananda Giri, whose lineage continues through Swami Jagadananda Giri to Paramhansa Gyanananda Maharaj.",
  "lineageRoleHi": "क्रियायोग पुनरुद्धार के परम स्रोत के रूप में, महावतार बाबाजी ने योगिराज श्यामाचरण लाहिड़ी महाशय को दीक्षा दी, जिनसे स्वामी श्री युक्तेश्वर गिरि, तत्पश्चात् ब्रह्मर्षि स्वामी सत्यानंद गिरि, स्वामी जगदानंद गिरि और वर्तमान आचार्य परमहंस ज्ञानानंद महाराज तक यह अविच्छिन्न धारा प्रवाहित है।",
  "contributionEn": "Revived the lost ancient science of Kriya Yoga for the modern era, democratized spiritual liberation for householders and monastics alike, and established an unbroken divine transmission of cosmic energy.",
  "contributionHi": "आधुनिक युग के लिए लुप्तप्राप्त क्रियायोग की वैज्ञानिक साधना का पुनरुद्धार किया और गृहस्थ व संन्यासी दोनों के लिए मोक्ष मार्ग प्रशस्त किया।",
  "legacyEn": "An eternal guiding beacon for all spiritual seekers on Earth, showering silent blessings upon everyone practicing Kriya Yoga in truth and devotion.",
  "legacyHi": "समस्त मानव जाति के लिए अमर आध्यात्मिक संबल और क्रियायोग साधकों के लिए अजस्र कृपा-स्रोत।",
  "conclusionEn": "Mahavatar Babaji Maharaj remains the everlasting Mahaguru whose cosmic presence inspires peace, purity, and supreme self-realization in all hearts.",
  "conclusionHi": "महावतार बाबाजी महाराज के प्रसंग और उपदेश साधकों को मौन, विनय, क्रियायोग, क्षमा, गुरु-भक्ति, आत्मजागरण और सेवा के मार्ग पर चलने की प्रेरणा देते हैं। उनका स्वरूप बाहरी परिचय से अधिक आंतरिक अनुभूति और गुरु-परंपरा की श्रद्धा का विषय है।",
  "seoMetaTitle": "महावतार बाबाजी महाराज जीवनी - दिव्य क्रियायोग परंपरा के अमर महागुरु",
  "seoMetaDescription": "महावतार बाबाजी महाराज का पावन जीवन प्रसंग, उपदेश व काशीधाम तथा रानीखेत दीक्षा की गाथा। ब्रह्मर्षि सत्यानन्द संन्यास आश्रम।",
  "urlSlug": "/guru-parampara/mahavatar-babaji-maharaj",
  "imageAltText": "Mahavatar Babaji Maharaj - Immortal Himalayan Master of Kriya Yoga",
  "shortBio": "महावतार बाबाजी महाराज क्रियायोग परंपरा के दिव्य महागुरु हैं। वे साधकों के जीवन में आवश्यकता के समय प्रकट होकर आध्यात्मिक मार्गदर्शन और संरक्षण प्रदान करते हैं।",
  "keyTeachings": [
    "Silence is the true language of the Soul.",
    "Taking refuge in silence and following all disciplines, remain engaged in Kriya practice.",
    "Truth is beyond words and speech; Truth expects no explanation.",
    "The Soul is inherently complete in itself; the Soul asks no questions; only the restless mind asks questions. Humble the mind toward its true goal to reach Truth.",
    "This world is relative and full of illusion; it is merely another name for the mind.",
    "First still the breath (prana) and illuminate yourself; then all problems resolve naturally.",
    "Restraining mental modifications is true Dhyana (Meditation).",
    "Self-realization is abiding in one's eternal nature—not acquiring, seeing, or becoming something new.",
    "Those who are free liberate everyone who comes in contact with them.",
    "If you wish to be free, forget the world and look upon everyone with forgiveness. Harbor malice toward none.",
    "Yogis take refuge in silence and remain free from worry.",
    "Keep your thoughts fixed on the goal; thoughts will gradually ascend toward the goal.",
    "Be truthful in your own actions. Remain single-mindedly devoted to God.",
    "It is proper to leave immediately any place where the Guru is criticized.",
    "The doorway to Kriya Yoga opens only for those who are genuine seekers of the Self.",
    "A person attached to worldly sense-pleasures is incapable of experiencing God.",
    "God resides in every living body; serving them is the direct service of God."
  ],
  "keyTeachingsHindi": [
    "मौन ही आत्मा की वास्तविक भाषा है।",
    "मौन का आश्रय लेकर और सभी अनुशासनों का पालन करते हुए क्रियानुष्ठान में संलग्न रहो।",
    "सत्य शब्द और वाणी से परे है; सत्य किसी व्याख्या की अपेक्षा नहीं रखता।",
    "आत्मा अपने-आप में स्वयं पूर्ण है; आत्मा कोई प्रश्न नहीं करती; अस्थिर मन ही प्रश्न करता है। मन को उसके उद्देश्य में विनीत करके सत्य तक पहुँचना होता है।",
    "यह जगत प्रपंचात्मक और आपेक्षिक है; यह मन का ही एक भिन्न नाम है।",
    "पहले वायु को स्थिर करके स्वयं को प्रकाशित करो; तब सभी समस्याओं का समाधान अपने-आप हो जाएगा।",
    "चित्तवृत्ति का दमन ही ध्यान है।",
    "आत्मोपलब्धि आत्मस्वरूप में स्थिर होना है; कोई नई चीज़ जानना, देखना या होना नहीं।",
    "जो मुक्त हैं, वे अपने संपर्क में आने वाले सभी को मुक्त करते हैं।",
    "यदि मुक्त होना चाहते हो, तो जगत को भूलकर सभी को क्षमा की दृष्टि से देखो। किसी के प्रति द्वेष मत रखो।",
    "योगीजन मौन का अवलंबन करके निश्चिंत रहते हैं।",
    "अपने विचारों को लक्ष्य में रखो; विचार अपने-आप क्रमशः लक्ष्य की ओर उठते जाएँगे।",
    "अपने कार्य में स्वयं सत्य रहो। परमात्मा में एकनिष्ठ रहो।",
    "जिस स्थान पर गुरु की निंदा की जाती है, उस स्थान को तुरंत छोड़ देना उचित है।",
    "क्रियायोग का द्वार केवल उन्हीं के लिए खुला है, जो वास्तव में आत्म-जिज्ञासु साधक हैं।",
    "विषयासक्त मनुष्य ईश्वर की अनुभूति प्राप्त करने में असमर्थ है।",
    "प्रत्येक जीवित शरीर में भगवान विराजमान हैं; उनकी सेवा ही भगवान की सेवा है।"
  ],
  "quote": "Silence is the true language of the Soul.",
  "quoteHindi": "मौन ही आत्मा की वास्तविक भाषा है।",
  "quotesHindiList": [
    "मौन ही आत्मा की वास्तविक भाषा है।",
    "चित्तवृत्ति का दमन ही ध्यान है।",
    "आत्मोपलब्धि आत्मस्वरूप में स्थिर होना है।",
    "क्रियायोग का द्वार केवल उन्हीं के लिए खुला है, जो वास्तव में आत्म-जिज्ञासु साधक हैं।",
    "प्रत्येक जीवित शरीर में भगवान विराजमान हैं; उनकी सेवा ही भगवान की सेवा है।"
  ],
  "lifeMilestones": [
    {
      "titleEn": "A Miraculous Encounter in Kashi Dham",
      "titleHi": "काशीधाम का एक अद्भुत प्रसंग",
      "textEn": "While Lahiri Mahasaya was engaged in spiritual discourse, Babaji Maharaj entered in simple attire. Lahiri Mahasaya offered Sashtanga Pranam, revealing Babaji as his Gurudev.",
      "textHi": "जब लाहिड़ी महाशय तत्त्व-चर्चा में थे, तभी साधारण वेश में हिंदुस्तानी युवक के रूप में बाबाजी महाराज कमरे में प्रवेश करते हैं। लाहिड़ी महाशय ने उन्हें देखते ही साष्टांग प्रणाम कर अपने श्रीगुरुदेव के रूप में परिचय कराया।"
    },
    {
      "titleEn": "Divine Darshan to Sri Yukteswar Giri Maharaj (1894)",
      "titleHi": "श्री युक्तेश्वर गिरि महाराज को दर्शन (1894)",
      "textEn": "Sri Yukteswar Giri obtained divine vision of Babaji Maharaj at Prayag Kumbh Mela and Serampore Ganges Ghat, describing his radiant and mesmerizing form.",
      "textHi": "स्वामी श्री युक्तेश्वर गिरि महाराज ने प्रयाग कुंभ मेले (बंगाब्द 1300) व श्रीरामपुर गंगाघाट पर बाबाजी महाराज के दर्शन पाए और उनके दिव्य उज्ज्वल स्वरूप का वर्णन किया।"
    },
    {
      "titleEn": "Teaching Equal Vision & Humility",
      "titleHi": "समान भाव की शिक्षा (साधु का लोटा माँजना)",
      "textEn": "Sitting near a poor monk under a banyan tree, Babaji scrubbed the monk's water pot, demonstrating that true spirituality harbors no ego and serves all with equal vision.",
      "textHi": "गंगातट पर वटवृक्ष के नीचे बैठे एक दीन साधु का लोटा बाबाजी महाराज स्वयं माँजकर साफ कर रहे थे, जिससे उन्होंने अहंकार-रहित सेवा व समान भाव का अमर आचरण प्रस्तुत किया।"
    }
  ],
  "structuredSections": [
    {
      "id": "kashi-dham",
      "titleEn": "1. A Miraculous Encounter in Kashi Dham",
      "titleHi": "1. काशीधाम का एक अद्भुत प्रसंग",
      "contentEn": "While Lahiri Mahasaya was engaged in spiritual discourse, a young Indian man in simple attire entered the room—wearing white garments, a sacred thread, and a cloth over his head. Seeing him, Lahiri Mahasaya immediately stood up and offered full prostrations (Sashtanga Pranam), revealing that he was his revered Gurudev, Babaji Maharaj.\n\nThis incident illustrates that Babaji Maharaj is recognized not by external grandeur or formal introductions, but through his divine presence and spiritual aura.",
      "contentHi": "काशीधाम का एक अद्भुत प्रसंग मिलता है। जब लाहिड़ी महाशय तत्त्व-चर्चा में थे, तभी साधारण वेश में एक हिंदुस्तानी युवक कमरे में प्रवेश करता है। शरीर पर सफेद वस्त्र, गले में यज्ञोपवीत और सिर पर कपड़ा था। लाहिड़ी महाशय ने उस युवक को देखते ही शीघ्र उठकर साष्टांग प्रणाम किया और बताया कि यही उनके श्रीगुरुदेव बाबाजी महाराज हैं。\n\nयह प्रसंग दर्शाता है कि बाबाजी महाराज बाहरी वैभव या विशेष परिचय से नहीं, बल्कि अपनी दिव्य उपस्थिति और आत्मिक प्रभाव से पहचाने जाते हैं।"
    },
    {
      "id": "lahiri-and-babaji",
      "titleEn": "2. Lahiri Mahasaya & Babaji Maharaj",
      "titleHi": "2. लाहिड़ी महाशय और बाबाजी महाराज",
      "contentEn": "In the Guru Parampara, Sri Sri Lahiri Mahasaya is described as the principal disciple of Babaji Maharaj. According to records, Lahiri Mahasaya was his only public disciple in the nineteenth century; yet Babaji Maharaj appeared whenever worthy, spiritually seeking practitioners needed guidance.\n\nIn Lahiri Mahasaya's life, Babaji Maharaj held the supreme station of Sri Gurudev. In tradition, he is revered as the Mahaguru who redeems seekers in trials and guides aspiring souls.\n\nYogiraj used to say:\n'Wherever anyone utters the name \"Babaji\" with devotion, the spiritual blessings of Babaji shower upon that devotee.'",
      "contentHi": "गुरु-परंपरा में श्रीश्री लाहिड़ी महाशय को बाबाजी महाराज के प्रमुख शिष्य के रूप में वर्णित किया गया है। दिए गए विवरण के अनुसार, उन्नीसवीं शताब्दी में लाहिड़ी महाशय उनके एकमात्र शिष्य थे; परंतु बाबाजी महाराज योग्य, आध्यात्मिक पिपासु और क्रियावान साधकों की आवश्यकता के समय कभी-कभी प्रकट होते थे।\n\nलाहिड़ी महाशय के जीवन में बाबाजी महाराज का स्थान श्रीगुरुदेव के रूप में था। परंपरा में उन्हें कठिन अवस्था में साधकों का उद्धार करने वाला और साधना-पथ पर अग्रसर आत्माओं को दिशा देने वाला महागुरु माना गया है।\n\nयोगीराज कहते थे—\n“जहाँ कोई भक्तिपूर्वक ‘बाबाजी’ नाम का उच्चारण करता है, वहीं उस भक्त पर बाबाजी का आध्यात्मिक आशीर्वाद बरसता है।”"
    },
    {
      "id": "yukteswar-darshan",
      "titleEn": "3. Divine Vision to Sri Yukteswar Giri Maharaj",
      "titleHi": "3. श्री युक्तेश्वर गिरि महाराज को बाबाजी महाराज के दर्शन",
      "contentEn": "The revered Swami Sri Yukteswar Giri Maharaj obtained the divine vision of Babaji Maharaj at the Prayag Kumbh Mela in Bengabda 1300. Later, he also beheld him at the Ganges ghat in Serampore.\n\nDescribing Babaji Maharaj's divine form, Sri Yukteswar Giri noted that his physical appearance resembled a younger version of Lahiri Mahasaya. His skin was brightly fair. His arms were long, well-built, and strong. His chest was broad, his hair long, and his eyes deep, steady, tranquil, and mesmerizing.\n\nThis description reflects Babaji Maharaj's divine brilliance, composure, and yogic radiance.",
      "contentHi": "साधु-सभापति स्वामी श्री युक्तेश्वर गिरि महाराज ने बंगाब्द 1300 में प्रयाग के कुम्भ मेले में बाबाजी महाराज के दर्शन पाए—ऐसा प्रसंग मिलता है। बाद में उन्होंने अपने निवास-स्थान श्रीरामपुर के गंगाघाट पर भी उसी अतुलनीय महात्मा के दर्शन किए।\n\nश्री युक्तेश्वर गिरि महाराज ने बाबाजी महाराज के दिव्य स्वरूप का वर्णन करते हुए कहा कि उन्हें देखकर लाहिड़ी महाशय के छोटे शरीर की झलक जैसी प्रतीत होती थी। उनका शरीर उज्ज्वल गौरवर्ण था। उनके बाहु लंबे, सुगठित और बलिष्ठ थे। वक्षस्थल चौड़ा, केश दीर्घ और दोनों आँखें गहरी, स्थिर, शांत तथा सम्मोहनकारी थीं।\n\nयह वर्णन बाबाजी महाराज के दिव्य तेज, स्थिरता और योग-सामर्थ्य का सूचक है।"
    },
    {
      "id": "kaivalya-darshan-inspiration",
      "titleEn": "4. Commissioning 'Kaivalya Darshan' (1894)",
      "titleHi": "4. प्रयागराज महाकुंभ 1894 एवं 'कैवल्य दर्शन' रचना की प्रेरणा",
      "contentEn": "In January 1894, during the Kumbh Mela at Prayagraj (Allahabad), Swami Sri Yukteswar Giri was resting under a banyan tree near the Ganges. Suddenly, Mahavatar Babaji appeared before him.\n\nAddressing Sri Yukteswar as 'Swami', Babaji requested him to write a treatise demonstrating the fundamental unity between Eastern Hindu scriptures (Sanatan Dharma) and Western Christian scriptures (Holy Bible).\n\nInspired by Babaji's command, Sri Yukteswar authored Kaivalya Darshan (The Holy Science), proving scientifically that truth is one and all sacred paths converge in the same supreme realization.",
      "contentHi": "जनवरी 1894 में प्रयागराज (इलाहाबाद) के महाकुंभ मेले में गंगा तट पर वटवृक्ष के नीचे स्वामी श्री युक्तेश्वर गिरिजी विराजमान थे। उसी समय महावतार बाबाजी महाराज दिव्य रूप में उनके समक्ष प्रकट हुए।\n\nबाबाजी ने श्री युक्तेश्वरजी को सम्बोधित करते हुए पूर्व (सनातन धर्म शास्त्र) और पश्चिम (बाइबल) के धर्मग्रंथों में निहित गूढ़ ऐक्य और सामंजस्य पर एक ग्रंथ लिखने की प्रेरणा व आदेश दिया।\n\nइसी पावन प्रेरणा के फलस्वरूप श्री युक्तेश्वरजी ने 'कैवल्य दर्शन' (The Holy Science) की रचना की, जिसने सिद्ध किया कि सत्य एक ही है और समस्त पवित्र ग्रंथ उसी परमेश्वर की ओर संकेत करते हैं।"
    },
    {
      "id": "yogananda-blessing",
      "titleEn": "5. Blessing Paramahansa Yogananda for America (1920)",
      "titleHi": "5. परमहंस योगानन्दजी को पाश्चात्य संदेश एवं दिव्य आशीर्वाद (1920)",
      "contentEn": "In 1920, prior to his departure for the United States to address the International Congress of Religious Liberals in Boston, young Mukunda (Paramahansa Yogananda) prayed intensely for divine confirmation.\n\nMahavatar Babaji materialized in Yogananda's room in Kolkata, comforting him:\n'You are the one I have chosen to spread the message of Kriya Yoga in the West. Long ago I met your guru Sri Yukteswar at a Kumbh Mela; I told him then I would send him a disciple he would train for the West. Fear not; my blessing is upon you.'",
      "contentHi": "सन् 1920 में बोस्टन (अमेरिका) में आयोजित अंतराष्ट्रीय धर्म सभा में भाग लेने के लिए अमेरिका प्रस्थान करने से पूर्व, युवा मुकुंद (परमहंस योगानन्दजी) अपने कोलकाता स्थित निवास पर गहरी प्रार्थना में लीन थे।\n\nउसी समय महावतार बाबाजी महाराज उनके कमरे में सशरीर प्रकट हुए और अभय प्रदान करते हुए बोले—\n“तुम ही वह साधक हो जिसे मैंने पाश्चात्य जगत में क्रियायोग का सन्देश फैलाने के लिए चुना है। बहुत समय पूर्व मैंने प्रयाग कुंभ में तुम्हारे गुरु श्री युक्तेश्वरजी से कहा था कि मैं उनके पास एक ऐसा शिष्य भेजूँगा जिसे वे पाश्चात्य देश के लिए तैयार करेंगे। भयभीत मत होओ, मेरा आशीर्वाद तुम्हारे साथ है।”"
    },
    {
      "id": "teachings-philosophy",
      "titleEn": "6. Core Teachings & Universal Philosophy",
      "titleHi": "6. प्रमुख उपदेश व सार्वभौमिक दर्शन",
      "contentEn": "1. Silence is the true language of the Soul (मौन ही आत्मा की वास्तविक भाषा है).\n2. Restraining mental modifications (चित्तवृत्ति का दमन) is true Meditation.\n3. Self-realization is abiding in one's eternal true nature, not acquiring something external.\n4. Serving living beings is direct worship of God residing in every heart.\n5. Humility, desirelessness, and unbroken devotion open the golden door of Kriya Yoga.",
      "contentHi": "1. मौन ही आत्मा की वास्तविक भाषा है।\n2. चित्तवृत्ति का दमन ही सच्चा ध्यान (साधना) है।\n3. आत्मोपलब्धि अपने सनातन स्वरूप में स्थित होना है, बाहर से कुछ नया अर्जित करना नहीं।\n4. प्रत्येक जीव में परमात्मा विराजमान हैं; निष्काम भाव से उनकी सेवा ही भगवान की प्रत्यक्ष पूजा है।\n5. अहंकार रहित विनम्रता, निष्कामता और अविरल निष्ठा ही क्रियायोग के दिव्य द्वार खोलती है।"
    },
    {
      "id": "lineage-presence",
      "titleEn": "7. Unbroken Lineage Transmission & Everlasting Grace",
      "titleHi": "7. अखण्ड गुरु-परंपरा एवं चिरंतन उपस्थिति",
      "contentEn": "From Mahavatar Babaji, the divine stream of Kriya Yoga flowed to Yogiraj Shyamacharan Lahiri Mahasaya, to Swami Sri Yukteswar Giri, to Brahmarishi Swami Satyananda Giri, to Swami Jagadananda Giri, and to present Acharya Paramhansa Gyanananda Maharaj at Gadrasini Pahar Ashram.\n\nBabaji Maharaj remains physically and spiritually active in the Himalayas, showering silent, unbroken grace upon every sincere Kriya practitioner across the globe.",
      "contentHi": "महावतार बाबाजी महाराज से प्रस्फुटित क्रियायोग की यह पावन अमरावती धारा योगिराज श्यामाचरण लाहिड़ी महाशय, स्वामी श्री युक्तेश्वर गिरि, ब्रह्मर्षि स्वामी सत्यानंद गिरि, स्वामी जगदानंद गिरि और वर्तमान आचार्य परमहंस ज्ञानानंद महाराज के माध्यम से गड़रासिनी पहाड़ आश्रम में निरंतर प्रवाहित है।\n\nबाबाजी महाराज आज भी हिमालय की कंदराओं में अमर देह में विद्यमान हैं और सत्यनिष्ठ क्रियायोग साधकों के हृदय में नित्य कृपा बरसाते रहते हैं।"
    },
    {
      "id": "source-note",
      "titleEn": "8. Source Note & Tradition",
      "titleHi": "8. Source Note (स्रोत विवरण)",
      "contentEn": "This life account is presented on the basis of original materials preserved in the ashram tradition, compiled records of the Guru Parampara, and authentic narratives of the Kriya Yoga lineage. The form of Mahavatar Babaji Maharaj remains primarily a matter of spiritual tradition and holy faith.",
      "contentHi": "यह जीवन-प्रसंग आश्रम परंपरा में उपलब्ध मूल सामग्री, गुरु-परंपरा से जुड़े संकलित विवरणों और क्रियायोग परंपरा में वर्णित प्रसंगों के आधार पर प्रस्तुत किया गया है। महावतार बाबाजी महाराज का स्वरूप मुख्य रूप से आध्यात्मिक परंपरा और साधक-श्रद्धा का विषय है।"
    }
  ],
  "lilasList": [
    {
      "titleEn": "1. Materialization of the Golden Palace at Ranikhet (1861)",
      "titleHi": "1. रानीखेत में दिव्य स्वर्ण-प्रासाद लीला (1861)",
      "textEn": "To dissolve Lahiri Mahasaya's remaining past-life desire, Babaji materialized a dazzling celestial palace adorned with diamonds and rubies in the Ranikhet forest. After Lahiri Mahasaya spent the night inside, the palace dissolved back into cosmic space, leaving only the ancient cave.",
      "textHi": "रानीखेत के बीझड़ जंगल में बाबाजी महाराज ने लाहिड़ी महाशय के पूर्वजन्म के अंतिम सूक्ष्म मनोरथ को पूर्ण करने के लिए हीरे-माणिक्यों से जड़ित एक अत्यंत विशाल दिव्य स्वर्ण-प्रासाद प्रकट किया। एक रात उसमें विश्राम के पश्चात् वह प्रासाद वापस सूक्ष्म जगत में लीन हो गया और केवल वही प्राचीन गुफा शेष रही।"
    },
    {
      "titleEn": "2. Commissioning 'The Holy Science' at Prayag Kumbh (1894)",
      "titleHi": "2. प्रयाग कुंभ में श्री युक्तेश्वरजी को आदेश (1894)",
      "textEn": "Appearing under a banyan tree at Allahabad Kumbh Mela, Babaji requested Swami Sri Yukteswar Giri to write a book demonstrating that Eastern Hindu scriptures and Western Christian Bible teach the same universal truth.",
      "textHi": "1894 के प्रयागराज कुंभ मेले में गंगा तट पर प्रकट होकर बाबाजी महाराज ने स्वामी श्री युक्तेश्वर गिरिजी को पूर्व व पश्चिम के धर्मग्रंथों की मूल एकता सिद्ध करने हेतु 'कैवल्य दर्शन' (The Holy Science) की रचना करने का आदेश दिया।"
    },
    {
      "titleEn": "3. Materialization before Yogananda at Kolkata (1920)",
      "titleHi": "3. कोलकाता में योगानन्दजी को दर्शन एवं पाश्चात्य यात्रा का वरदान (1920)",
      "textEn": "Babaji materialized in Yogananda's room in Kolkata, blessing him for his upcoming spiritual mission to America and assuring him of unbroken guidance across oceans.",
      "textHi": "1920 में अमेरिका प्रस्थान से ठीक पूर्व कोलकाता में युवा मुकुंद (योगानन्दजी) के समक्ष बाबाजी महाराज ने भौतिक रूप में प्रकट होकर उन्हें पाश्चात्य देश में क्रियायोग का अमर सन्देश फैलाने का वरदान दिया।"
    },
    {
      "titleEn": "4. Astral Gathering at Dashashwamedh Ghat",
      "titleHi": "4. दशाश्वमेध घाट पर रात्रि में दिव्य समागम",
      "textEn": "Lahiri Mahasaya's disciple Ram Gopal Majumdar witnessed a cosmic stone pillar lift at Dashashwamedh Ghat in Varanasi, revealing a luminous cave where Babaji, Lahiri Mahasaya, and Holy Mother met in astral glory.",
      "textHi": "काशी के दशाश्वमेध घाट पर शिष्य रामगोपाल मजुमदार ने देखा कि एक विशाल शिलाखंड उठा और उसके नीचे प्रकाशमान गुफा में महावतार बाबाजी, लाहिड़ी महाशय और माँ दुर्गा की अलौकिक छवि का दिव्य समागम हुआ।"
    },
    {
      "titleEn": "5. Revival of the Sacrificial Devotee in the Himalayan Camp",
      "titleHi": "5. हिमालयी शिविर में भक्त की निष्ठा व जीवन-दान",
      "textEn": "When a seeker leaped into a burning Yagya fire to prove his willingness to sacrifice everything for the Guru, Babaji touched the charred body, completely restoring him to life and accepting him as a disciple.",
      "textHi": "हिमालयी शिविर में जब एक साधक ने गुरु-प्राप्ति हेतु जलती हुई धूनी में छलांग लगा दी, तब बाबाजी महाराज ने उसके भस्म शरीर पर हाथ फेरकर उसे तुरंत नया जीवन प्रदान किया और अपनी शरण में ले लिया।"
    }
  ]
},
  {
    "id": "lahiri-mahasaya",
    "order": 2,
    "name": "Yogiraj Shyamacharan Lahiri Mahasaya",
    "sanskritName": "योगीराजाधिराज ठाकुर श्री श्री श्यामाचरण लाहिड़ी महाशय",
    "title": "Father of Modern Kriya Yoga & Householder Master (1828 – 1895)",
    "titleHindi": "गृहस्थ जीवन में परम योग-सिद्धि का दिव्य आदर्श",
    "period": "1828 – 1895",
    "image": "/images/gurus/guru_2.png",
    "bio": "Yogiraj Shyamacharan Lahiri Mahasaya (1828 – 1895) is the beloved Father of Modern Kriya Yoga and the divine exemplar of a householder yogi. Born in Nadia, Bengal, he received sacred initiation into Kriya Yoga from Mahavatar Babaji at Ranikhet in 1861. Residing in Varanasi while working as an accountant, Lahiri Mahasaya initiated thousands from all walks of life without distinction of caste, creed, or gender, proving that supreme God-realization can be achieved in the midst of worldly family life.",
    "bioHindi": "योगीराजाधिराज ठाकुर श्री श्री श्यामाचरण लाहिड़ी महाशय क्रियायोग के महान प्रवर्तक और गृहस्थ जीवन में परम योग-सिद्धि के दिव्य आदर्श थे। उनका जन्म 30 सितम्बर 1828 को नदिया जिले के घूर्णी गाँव (बंगाल) में हुआ। 1861 में हिमालय के रानीखेत क्षेत्र में अपने दिव्य गुरु महावतार बाबाजी महाराज से क्रियायोग की परम पावन दीक्षा प्राप्त करने के बाद, उन्होंने काशी (वाराणसी) में रहते हुए बिना किसी जाति, धर्म या वर्ग के भेद के हजारों साधकों को क्रियायोग में दीक्षित किया। उन्होंने सिद्ध किया कि गृहस्थ जीवन के सभी सांसारिक कर्तव्यों का निष्ठापूर्वक पालन करते हुए भी सर्वोच्च निर्विकल्प समाधि और ईश्वर-साक्षात्कार संभव है।",
    "introductionEn": "Yogiraj Shyamacharan Lahiri Mahasaya (1828 – 1895) stands as the supreme exemplar of God-realization within householder life. A towering pillar of the Kriya Yoga lineage, he bridged the gap between ascetic renunciation and family duties, proving that supreme spiritual attainment is accessible to everyone in daily life.",
    "introductionHi": "योगीराजाधिराज ठाकुर श्री श्री श्यामाचरण लाहिड़ी महाशय गृहस्थ जीवन में परम योग-सिद्धि का दिव्य आदर्श हैं। ज्ञान की भूमि काशी के पावन वातावरण में और महावतार बाबाजी महाराज के अलौकिक आलिंगन व मार्गदर्शन से, उन्होंने सिद्ध किया कि संसार में रहते हुए भी मनुष्य सर्वोच्च ईश्वर-साक्षात्कार और निर्विकल्प समाधि प्राप्त कर सकता है।",
    "earlyLifeEn": "Born on September 30, 1828, in Ghurni village, Nadia district, Bengal, to Gour Mohan Lahiri and Muktakeshi Devi. After their ancestral home submerged in the Jalangi river, the family settled permanently in Kashi (Varanasi). From childhood, Lahiri Mahasaya displayed deep meditative traits, often sitting in deep samadhi by the Ganges.",
    "earlyLifeHi": "श्री श्यामाचरण लाहिड़ी महाशय का जन्म 30 सितम्बर 1828 को घूर्णी ग्राम (नदिया, बंगाल) में हुआ। जलंगी नदी के कटाव के बाद उनका परिवार काशी में बस गया। बालक श्यामाचरण बाल्यावस्था से ही अत्यंत आध्यात्मिक प्रवृत्ति के थे। माता मुक्तकेशी देवी के शिव-पूजा काल में वे पद्मासन में ध्यानमग्न हो जाते थे। उन्होंने बंगला, अंग्रेजी, हिंदी, संस्कृत, फारसी और उर्दू का अध्ययन किया और श्रीमती काशीमणि देवी से परिणय सूत्र में बंधे।",
    "spiritualJourneyEn": "In 1861, while working as an accountant for the British Military Engineering Department, Lahiri Mahasaya was transferred to Ranikhet in the Himalayas. There, on Drongiri mountain, he met Mahavatar Babaji, who materialized a golden palace to dissolve his past karma and initiated him into the ancient science of Kriya Yoga.",
    "spiritualJourneyHi": "सन् 1861 में ब्रिटिश सरकार के सैन्य विभाग में सेवा के दौरान लाहिड़ी महाशय का स्थानांतरण रानीखेत (हिमालय) हुआ। वहाँ द्रोणागिरि पर्वत पर महान बाबाजी महाराज ने उन्हें पुकारा और मस्तक स्पर्श कर उनके पूर्वजन्म के स्मृतियों का आवरण हटा दिया। बाबाजी ने एक विशाल दिव्य स्वर्ण-प्रासाद की लीला से उनकी वासनाओं की तृप्ति कर उन्हें क्रियायोग की अमर दीक्षा प्रदान की।",
    "lineageRoleEn": "Lahiri Mahasaya is the direct chief disciple of Mahavatar Babaji and the master of Swami Sri Yukteswar Giri, Swami Pranabananda Giri, Panchanan Bhattacharya, Swami Keshabananda, and many eminent gurus. He democratized Kriya Yoga, making it available to all seekers without barrier of caste, religion, or gender.",
    "lineageRoleHi": "क्रियायोग परंपरा में महावतार बाबाजी महाराज के प्रत्यक्ष प्रथम शिष्य के रूप में, लाहिड़ी महाशय ने स्वामी श्री युक्तेश्वर गिरि, स्वामी प्रणवानंद गिरि, पंचानन भट्टाचार्य, स्वामी केशवानंद, राजा ईश्वरी नारायण सिंह, स्वामी भास्करानंद और अनेक महात्माओं व गृहस्थों को क्रियायोग में दीक्षित किया।",
    "contributionEn": "Disseminated the Bhagavad Gita with spiritual commentaries, established BENGALI TOLA HIGH SCHOOL in Kashi, made Kriya Yoga accessible to all humanity including householders, Muslims, and underprivileged devotees like Brinda Bhagat and Bhola the paan-seller.",
    "contributionHi": "श्रीमद्भगवद्गीता के आध्यात्मिक भाष्य का जन-जन में प्रचार किया, काशी में बंगाली टोला हाई स्कूल की स्थापना की और क्रियायोग को जाति, धर्म और वर्ग के बंधनों से मुक्त कर गृहस्थों, साधुओं, मुस्लिम साधकों (अब्दुल गफूर खान) और उपेक्षित वर्ग के लिए सुलभ बनाया।",
    "legacyEn": "An eternal beacon showing that worldly obligations and intense spiritual sadhana are completely compatible. His miraculous life, silent influence, and divine compassion continue to uplift millions worldwide.",
    "legacyHi": "गृहस्थ जीवन में रहकर सर्वोच्च साधना का मार्ग दिखाने वाले अमर योगेश्वर। उनकी अलौकिक लीलाएँ, सादगीपूर्ण जीवन और 'कर्म ही सत्य है' का संदेश मानव सभ्यता के लिए अमर संबल है।",
    "conclusionEn": "Yogiraj Shyamacharan Lahiri Mahasaya's life is a glorious testimony that God-realization does not demand escaping the world, but transforming inner consciousness through dedicated Kriya Yoga sadhana.",
    "conclusionHi": "योगीराजाधिराज ठाकुर श्री श्री श्यामाचरण लाहिड़ी महाशय का जीवन सिद्ध करता है कि गृहस्थ जीवन में रहते हुए भी कर्तव्य पालन और ईश्वर-अनुभूति पूर्णतः संभव है। उनका जीवन समस्त मानवता के लिए अमर मार्गदर्शक है।",
    "seoMetaTitle": "Yogiraj Lahiri Mahasaya Biography - Father of Modern Kriya Yoga",
    "seoMetaDescription": "Read the complete detailed biography of Yogiraj Shyamacharan Lahiri Mahasaya, the householder master of Kriya Yoga initiated by Mahavatar Babaji in Ranikhet 1861.",
    "urlSlug": "/guru-parampara/lahiri-mahasaya",
    "imageAltText": "Yogiraj Shyamacharan Lahiri Mahasaya - Father of Modern Kriya Yoga",
    "shortBio": "Yogiraj Shyamacharan Lahiri Mahasaya (1828-1895) is the beloved Father of Modern Kriya Yoga. Initiated by Mahavatar Babaji at Ranikhet in 1861, he lived as a humble householder in Kashi while initiating thousands into Kriya Yoga.",
    "keyTeachings": [
      "Action (Kriya) is Truth; all else is transient.",
      "Prana (breath/vital energy) is the direct presence of God.",
      "Banat Banat Ban Jai — Continuous, patient practice guarantees ultimate realization.",
      "If a seeker constantly meditates on God, the Divine takes full care of all worldly needs.",
      "Be diligent and persistent in spiritual practice; shun sloth."
    ],
    "keyTeachingsHindi": [
      "स्वयं को छोटा समझना चाहिए, अर्थात् सेवा, पूजा और समर्पण की भावना रखनी चाहिए।",
      "सदैव सत्संग में रहना चाहिए, अर्थात् अच्छे लोगों की संगति करनी चाहिए या उत्तम पुस्तकों का अध्ययन करना चाहिए।",
      "समय-समय पर, कम से कम सप्ताह में एक बार, मिलकर चर्चा करनी चाहिए।",
      "किसी भी देवता के नाम का अपमान नहीं करना चाहिए।",
      "वर्ष में कम से कम एक बार परिवार से अलग होकर कुछ समय बाहर रहना चाहिए—कम से कम तीन दिन, एक सप्ताह या एक महीने तक।",
      "कर्म ही सत्य है, बाकी सब असत्य है।",
      "कर्म का अभ्यास ही वेदों का अध्ययन है। कर्म ही यज्ञ है। सभी को यह यज्ञ करना चाहिए।",
      "सभी देवता क्रिया-यज्ञ करते हैं। क्रिया का अभ्यास करने वाले ही देवता हैं।",
      "यदि अभ्यास ठीक प्रकार से हो, तो अज्ञानता स्वाभाविक रूप से दूर हो जाती है।",
      "जब जीभ ऊपर उठती है, तब इंद्रियाँ वश में हो जाती हैं।",
      "वायु अथवा श्वास ही ईश्वर है।",
      "दिन में कम से कम एक बार यथासंभव लंबे समय तक एक ही आसन में बैठने का अभ्यास करना चाहिए।",
      "कर्म का अभ्यास करना चाहिए और कर्म की अवस्था में बने रहना चाहिए।",
      "राम मंत्र का अर्थ तभी समझा जा सकता है जब श्वास दिन-रात स्थिर रहे।",
      "जब मनुष्य इच्छाओं से मुक्त हो जाता है, तब वह ब्रह्म हो जाता है।",
      "यदि कोई अपने चंचल मन को भीतर की ओर मोड़कर कूटस्थ पर लगाता है, तो उसे देवी-देवताओं के रूप दिखाई देते हैं।",
      "यदि तुम सच्चे विश्वास के साथ मेरी शरण में आते हो, तो मुझे तुम्हारे पास आना ही पड़ेगा। मैं तुमसे दूर कैसे रह सकता हूँ?",
      "यदि कोई मनुष्य सदैव ईश्वर का ध्यान करता है, तो ईश्वर स्वयं ही उसके अन्य सभी कार्यों का ध्यान रखते हैं।",
      "शून्यता के भीतर की शून्यता ही ब्रह्मांड अथवा ब्रह्म है।",
      "सत्ययुग कर्म की अवस्था है, त्रेतायुग अस्थायी कर्म की अवस्था है, द्वापरयुग कर्म का अभ्यास है, और जो लोग कर्म का अभ्यास नहीं करते, उनके लिए वही कलियुग है।",
      "कोई भी स्वभाव से पापी या पुण्यवान नहीं होता। बुरे मार्ग से अपने मन को न हटाना ही पाप है।",
      "प्राणायाम का अभ्यास करने वाले लोग वास्तव में सभी जीवों से प्रेम करते हैं।",
      "दूसरों को उनके मार्ग पर चलने दो। तुम कर्म के अनुयायी बनो।",
      "आलसी मत बनो, कर्म करो।"
    ],
    "quote": "Action (Kriya) is Truth; all else is transient.",
    "quoteHindi": "कर्म ही सत्य है, बाकी सब असत्य है।",
    "quotesHindiList": [
      "कर्म ही सत्य है, बाकी सब असत्य है।",
      "वायु अथवा श्वास ही ईश्वर है।",
      "आलसी मत बनो, कर्म करो।",
      "यदि कोई मनुष्य सदैव ईश्वर का ध्यान करता है, तो ईश्वर स्वयं ही उसके अन्य सभी कार्यों का ध्यान रखते हैं।",
      "जैसे खिले हुए फूल की सुगंध चारों ओर फैलती है, वैसे ही यदि तुम स्वयं को स्थापित कर लो, तो तुम्हारा प्रभाव भी फैल जाएगा।"
    ],
    "lifeMilestones": [
      {
        "titleEn": "Birth & Early Life in Kashi (1828)",
        "titleHi": "जन्म एवं काशी में धर्मनिष्ठ जीवन (1828)",
        "textEn": "Born on 30 September 1828 at Ghurni, Nadia. Raised in Varanasi with deep devotion and Sanskrit learning, leading an exemplary, selfless householder life.",
        "textHi": "30 सितम्बर 1828 को घूर्णी (नदिया) में जन्म। काशी में निवास कर शासकीय सेवा और निष्काम धर्मनिष्ठ गृहस्थ जीवन का संचालन किया।"
      },
      {
        "titleEn": "Historic Kriya Initiation at Ranikhet (1861)",
        "titleHi": "रानीखेत में ऐतिहासिक क्रियायोग दीक्षा (1861)",
        "textEn": "Transferred to Ranikhet in 1861 where he met Mahavatar Babaji, who awakened his past-life memories and initiated him into Kriya Yoga in a celestial palace cave.",
        "textHi": "1861 में रानीखेत में महावतार बाबाजी से पूर्वजन्म स्मरण व दिव्य स्वर्ण-प्रासाद लीला के साथ क्रियायोग की अमर दीक्षा प्राप्त की।"
      },
      {
        "titleEn": "Universal Dissemination of Kriya & Mahasamadhi (1895)",
        "titleHi": "क्रियायोग का वृहद प्रचार एवं महासमाधि (1895)",
        "textEn": "Initiated householders, kings, and monks without discrimination. Entered Padma Asana Mahasamadhi in Varanasi on 26 September 1895.",
        "textHi": "बिना जाति-धर्म भेद के अनगिनत साधकों को दीक्षा दी। 26 सितम्बर 1895 (दुर्गाष्टमी संध्या) को पद्मासन में समाधि में लीन हुए।"
      }
    ],
    "structuredSections": [
      {
        "id": "intro",
        "titleEn": "1. Introduction — Varanasi & Divine Encounter",
        "titleHi": "1. प्रस्तावना — विश्वनाथ धाम काशी एवं दिव्य समागम",
        "contentEn": "The morning light of dawn was spreading across the eastern sky of Kashi, the land of knowledge. The bells of the Mangal Aarti at Vishwanath Temple echoed through the air and sky. Mother Ganges flowed in her crescent shape. After taking holy dips, countless devotees chanted 'Om Namah Shivaya', offering prostrations at the lotus feet of Vishwanath.\n\nIn this divine atmosphere, an extraordinary event took place. A great yogi with a tranquil and solemn countenance sat in silent communion. Attendant devotees waited eagerly to hear words of wisdom from his lips. Suddenly, he opened his eyes and stepped outside. Standing there was a humble householder dressed in a plain dhoti and kurta. The great yogi embraced him with deep affection. The onlookers were astonished.\n\nWhen asked about the reason for his action, the yogi declared:\n'To attain that state for which I renounced everything, this householder has achieved while living right in the world.'\n\nThat humble householder was none other than Yogiraj Shyamacharan Lahiri Mahasaya, the great propagator of Kriya Yoga.",
        "contentHi": "ज्ञान की भूमि काशी के पूर्वी आकाश में अरुणोदय का प्रकाश फैल रहा था। विश्वनाथ मंदिर की मंगल आरती की घंटियों से आकाश और वायु गूँज रहे थे। माँ गंगा अर्धचन्द्राकार रूप में प्रवाहित हो रही थीं। स्नान के पश्चात् अनेक श्रद्धालु पुरुष और महिलाएँ “ॐ नमः शिवाय” मंत्र का जप करते हुए ज्ञानमय विश्वनाथ के चरणों में प्रणाम कर रहे थे।\n\nऐसे ही एक दिव्य वातावरण में एक अद्भुत घटना घटी। शांत और गंभीर मुखमंडल वाले एक महान योगी मौन भाव से बैठे थे। उपस्थित भक्तगण उनके मुख से कुछ वचन सुनने की प्रतीक्षा कर रहे थे। अचानक उन्होंने नेत्र खोले और उठकर बाहर चले गए। वहाँ धोती-कुर्ता पहने एक साधारण गृहस्थ खड़े थे। उस महान योगी ने उन्हें प्रेमपूर्वक आलिंगन कर लिया। यह दृश्य देखकर उपस्थित भक्त आश्चर्यचकित रह गए।\n\nजब लोगों ने इसका कारण पूछा, तब योगी ने कहा—\n“जिस उपलब्धि को प्राप्त करने के लिए मैंने सब कुछ त्याग दिया, उसी सर्वोच्च अवस्था को इस गृहस्थ पुरुष ने संसार में रहते हुए प्राप्त कर लिया है।”\n\nयह साधारण गृहस्थ कोई और नहीं, बल्कि क्रियायोग के महान प्रवर्तक योगीराजाधिराज ठाकुर श्री श्री श्यामाचरण लाहिड़ी महाशय थे।"
      },
      {
        "id": "birth-family",
        "titleEn": "2. Birth & Family Background",
        "titleHi": "2. जन्म और पारिवारिक पृष्ठभूमि",
        "contentEn": "Sri Shyamacharan Lahiri Mahasaya was born on September 30, 1828 (16th day of Ashwin, 1235 Bengabda) in Ghurni village, Nadia district, Bengal, in a pious Brahmin family. His father was Sri Gour Mohan Lahiri and his mother was Srimati Muktakeshi Devi.\n\nGour Mohan Babu's ancestral home was situated on the banks of the Jalangi River, a tributary of the Padma River. However, due to severe river erosion, the ancestral house was submerged. Since their ancestors had periodically resided in Kashi, Gour Mohan Babu settled permanently in Kashi with his family. Shyamacharan lost his mother during his early childhood.\n\nHis father, Gour Mohan Babu, was a deeply religious man with a longing for yoga. The family had established a Shiva temple, which also eventually succumbed to the river. Mother Muktakeshi Devi was utterly devoted to Shiva worship. Young Shyamacharan inherited deep spiritual inclinations. Whenever his mother performed worship, he would sit beside her absorbed in meditation. Sometimes, in play, he would bury himself up to his neck in sand and remain seated in Lotus posture (Padmasana) for hours.\n\nFollowing family tradition, Gour Mohan Babu instilled in young Shyamacharan the daily routine of morning and evening Ganges baths and Vedic studies. His fair complexioned luster, gravity, courage, and simplicity made him beloved by everyone.",
        "contentHi": "श्री श्यामाचरण लाहिड़ी महाशय का जन्म बंगाल के नदिया जिले के घूर्णी ग्राम में अश्विन मास की १६ तारीख, १२३५ बंगाब्द, अर्थात् ३० सितम्बर १८२८ ईस्वी को एक धर्मनिष्ठ ब्राह्मण परिवार में हुआ। उनके पिता श्री गौरमोहन लाहिड़ी तथा माता श्रीमती मुक्तकेशी देवी थीं।\n\nगौरमोहन बाबू का पैतृक निवास पद्मा नदी की सहायक जलंगी नदी के तट पर था। किन्तु जलंगी नदी के कटाव के कारण वह पैतृक निवास नदी में समा गया। उनके पूर्वज समय-समय पर काशी में निवास करते रहे थे। इसलिए गौरमोहन बाबू भी अपने पुत्र और परिवार के साथ काशी के स्थायी निवासी बन गए। श्यामाचरण की माता का देहावसान उनके बाल्यकाल में ही हो गया था।\n\nउनके पिता गौरमोहन बाबू योगाभिलाषी और धर्मपरायण व्यक्ति थे। परिवार द्वारा स्थापित शिव मंदिर भी था, किन्तु वह भी नदी में विलीन हो गया। माता मुक्तकेशी देवी शिव-पूजा में अत्यंत समर्पित थीं। बालक श्यामाचरण बाल्यावस्था से ही आध्यात्मिक प्रवृत्ति के थे। जब उनकी माता शिव-पूजा करती थीं, तब वे उनके पास ध्यानमग्न होकर बैठते थे। कभी-कभी वे खेल-खेल में गर्दन तक रेत में दबकर पद्मासन में बैठ जाते और लंबे समय तक ध्यानमग्न रहते।\n\nपारिवारिक परंपरा के अनुसार, पिता गौरमोहन बाबू ने बालक श्यामाचरण को बचपन से ही प्रतिदिन प्रातः और सायं गंगा-स्नान तथा वेदाध्ययन की आदत डाली। उनकी गौरवर्ण कांति, गंभीरता, साहस और सरलता ने उन्हें सबका प्रिय बना दिया।"
      },
      {
        "id": "education-householder",
        "titleEn": "3. Education & Householder Life",
        "titleHi": "3. शिक्षा और गृहस्थ जीवन",
        "contentEn": "Shyamacharan studied Bengali, English, Hindi, Persian, and Urdu. Additionally, he pursued advanced Sanskrit studies in Kashi under Mahamahopadhyaya Sri Devnarayan Vachaspati Mahasaya.\n\nPandit Vachaspati was profoundly impressed by Shyamacharan's intellect, patience, and devotion, proposing the marriage of his daughter, Kashimani Devi, to him. With Gour Mohan Babu's consent, the marriage took place when Shyamacharan was eighteen and Kashimani Devi was eight.\n\nIn time, Kashimani Devi received yoga initiation from her husband. She fulfilled her householder duties as an ideal wife, particularly excelling in serving the poor and guests. They were blessed with two sons—Tinkori Lahiri and Dukori Lahiri—and three daughters—Harimati, Harikamini, and Harimohini.\n\nWith the blessings of their yogi father, both sons advanced remarkably in yoga sadhana and initiated many seekers into Kriya Yoga.",
        "contentHi": "श्यामाचरण ने बंगला, अंग्रेज़ी, हिंदी, फारसी और उर्दू भाषाओं का अध्ययन किया। इसके साथ ही उन्होंने काशी के विद्वान महामहोपाध्याय श्री देवनारायण वाचस्पति महाशय के मार्गदर्शन में संस्कृत का भी विशेष अध्ययन किया।\n\nपंडित महाशय श्यामाचरण की बुद्धिमत्ता, धैर्य और श्रद्धा से अत्यंत प्रभावित हुए। उन्होंने अपनी पुत्री काशीमणि देवी के साथ उनका विवाह प्रस्तावित किया। श्रीयुत गौरमोहन बाबू की सहमति मिलने पर श्यामाचरण का विवाह काशीमणि देवी से संपन्न हुआ। उस समय श्यामाचरण की आयु अठारह वर्ष और काशीमणि देवी की आयु आठ वर्ष थी।\n\nसमय आने पर काशीमणि देवी ने अपने पति से योगदीक्षा प्राप्त की। वे एक आदर्श पत्नी के रूप में गृहस्थ जीवन का पालन करती रहीं। वे दरिद्रों और अतिथियों की सेवा में विशेष रूप से निपुण थीं। काशी में उनके दो पुत्र और तीन पुत्रियाँ हुईं। ज्येष्ठ पुत्र का नाम तीनकड़ी लाहिड़ी और कनिष्ठ पुत्र का नाम दुकड़ी लाहिड़ी था। तीन पुत्रियाँ थीं—हरिमति, हरिकामिनी और हरिमोहिनी।\n\nबाद में अपने योगी पिता के आशीर्वाद से उनके दोनों पुत्रों ने योग-साधना में उल्लेखनीय उन्नति प्राप्त की और अनेक नर-नारियों को क्रियायोग साधना में दीक्षित किया।"
      },
      {
        "id": "government-service",
        "titleEn": "4. Government Service & Spiritual Sadhana",
        "titleHi": "4. सरकारी सेवा और आध्यात्मिक साधना",
        "contentEn": "In 1851, Shyamacharan Lahiri joined the British Military Engineering Department as a clerk and subsequently earned promotions. About two and a half years later, following his father's passing, the entire family responsibility rested upon his shoulders.\n\nWhile diligently fulfilling all householder duties, he maintained unshakeable devotion and deep meditative practice.",
        "contentHi": "सन १८५१ में श्यामाचरण लाहिड़ी ब्रिटिश मिलिट्री इंजीनियरिंग विभाग में क्लर्क के पद पर नियुक्त हुए और बाद में पदोन्नत हुए। लगभग ढाई वर्ष बाद पिता के देहावसान के उपरांत परिवार का पूरा उत्तरदायित्व उनके कंधों पर आ गया।\n\nगृहस्थ के सभी कर्तव्यों का निष्ठापूर्वक पालन करते हुए भी उनकी साधना अनवरत चलती रही।"
      }
    ],
    "lilasList": [
      {
        "titleEn": "1. Materializing at Ranikhet Cave",
        "titleHi": "1. रानीखेत गुफा में पूर्वजन्म का स्मरण व स्वर्ण-प्रासाद लीला",
        "textEn": "In 1861, upon arriving at Drongiri Mountain in Ranikhet, Lahiri Mahasaya heard a divine call 'Shyamacharan! Shyamacharan!'. Reaching the cave, Mahavatar Babaji embraced him, materialized a celestial golden palace to fulfill his lingering past-life desire, and initiated him into sacred Kriya Yoga.",
        "textHi": "सन १८६१ में रानीखेत के द्रोणागिरि पर्वत पर भ्रमण के समय श्यामाचरणजी ने एक गुफा के निकट पुकार सुनी—'श्यामाचरण! श्यामाचरण!'\n\nगुफा में प्रवेश करते ही महावतार बाबाजी ने उन्हें प्रेमपूर्वक आलिंगन किया और उनके पूर्वजन्म की स्मृतियों को जागृत किया। बाबाजी ने एक क्षण में एक दिव्य, रत्नजड़ित स्वर्ण-प्रासाद निर्मित किया, जिसके भीतर निवास कराकर उनके पूर्वजन्म के अवशिष्ट सूक्ष्म संस्कार को समाप्त किया। इसके पश्चात् उन्हें क्रियायोग की अमर साधना में दीक्षित किया।"
      },
      {
        "titleEn": "2. Omnipresence & Simultaneous Appearance in Varanasi & Ranikhet",
        "titleHi": "2. एक ही समय काशी और रानीखेत में उपस्थिति",
        "textEn": "While physically staying in Kashi, Lahiri Mahasaya appeared before his superior officer in Ranikhet to sign critical engineering documents, demonstrating yogic omnipresence.",
        "textHi": "लाहिड़ी महाशय की असीम योग-शक्ति का एक अनुपम उदाहरण उनकी सर्वव्यापकता थी। वे काशी में अपने निवास पर भक्तों के बीच बैठे थे, और ठीक उसी समय रानीखेत में अपने वरिष्ठ सैन्य अधिकारी के सामने प्रस्तुत होकर महत्वपूर्ण सरकारी फाइलों पर हस्ताक्षर किए।"
      },
      {
        "titleEn": "3. Raising Abhayananda from the Dead",
        "titleHi": "3. मृत साधक अभयानन्द को जीवनदान",
        "textEn": "When disciple Abhayananda passed away from cholera, Lahiri Mahasaya touched his chest, breathed prana into him, and restored his life instantly.",
        "textHi": "एक बार उनके शिष्य अभयानन्द हैजा रोग से पीड़ित होकर काल-कवलित हो गए। परिजनों का क्रंदन सुनकर लाहिड़ी महाशय वहाँ पधारे। उन्होंने शांत भाव से मृत देह के वक्षस्थल का स्पर्श किया और अपनी योग-शक्ति से प्राण-संचार किया। क्षण भर में अभयानन्दजी नेत्र खोलकर उठ बैठे।"
      },
      {
        "titleEn": "4. Healing Kashimani Devi's Fatal Illness",
        "titleHi": "4. पत्नी काशीमणि देवी की असाध्य बीमारी का निवारण",
        "textEn": "When Kashimani Devi suffered from a severe terminal ailment, Lahiri Mahasaya blessed her with holy water and Kriya energy, curing her completely.",
        "textHi": "उनकी धर्मपत्नी काशीमणि देवी एक बार भीषण असाध्य रोग से ग्रसित हुईं। चिकित्सकों ने निराशा व्यक्त कर दी थी। योगिराज ने जल को अभिमंत्रित कर उन्हें पान कराया और क्रिया-स्पंदन प्रदान किया। देखते ही देखते देवी पूर्णतः स्वस्थ हो गईं।"
      },
      {
        "titleEn": "5. Quenching Thirst in the Desert",
        "titleHi": "5. निर्जल मरुस्थल में शीतल जल की धारा",
        "textEn": "Traveling through a scorched arid region, thirsty companions collapsed. Lahiri Mahasaya touched the ground, causing a crystal-clear spring to flow.",
        "textHi": "एक बार भीषण ग्रीष्मकाल में मरुस्थल मार्ग से यात्रा करते समय साथ चल रहे शिष्य प्यास से व्याकुल होकर मूर्छित होने लगे। दूर-दूर तक जल का कोई स्रोत नहीं था। लाहिड़ी महाशय ने भूमि का स्पर्श किया और वहाँ तत्काल शीतल स्वच्छ जल की अविरल धारा फूट पड़ी।"
      },
      {
        "titleEn": "6. Stopping Train for Devotee's Arrival",
        "titleHi": "6. भक्त के लिए रुकती हुई रेलगाड़ी",
        "textEn": "When a devotee running late prayed mentally to Lahiri Mahasaya, the train engine stopped dead in its tracks at the station until the devotee boarded.",
        "textHi": "एक अनन्य भक्त दर्शन हेतु आ रहा था, किन्तु रेलगाड़ी छूटने ही वाली थी। उसने आर्तभाव से गुरुदेव का स्मरण किया। गाड़ी स्टेशन से एक इंच भी आगे नहीं बढ़ी; यांत्रिक जाँच के बाद भी कोई दोष नहीं मिला। जैसे ही भक्त ने डिब्बे में प्रवेश किया, ट्रेन स्वतः चल पड़ी।"
      },
      {
        "titleEn": "7. Protecting Devotee Brinda from Tiger",
        "titleHi": "7. जंगल में हिंसक व्याघ्र से रक्षा",
        "textEn": "Disciple Brinda was confronted by a wild tiger in a dense forest. Praying to Lahiri Mahasaya, the tiger bowed silently and walked away peacefully.",
        "textHi": "शिष्य वृन्दा गहन जंगल में मार्ग भटक गए और अचानक एक विशाल हिंसक बाघ सामने आ खड़ा हुआ। वृन्दा ने भयभीत होकर योगिराज का ध्यान किया। बाघ ने शांत होकर मस्तक झुकाया और बिना कोई हानि पहुँचाए वन की ओर चला गया।"
      },
      {
        "titleEn": "8. Vision to British Officer's Wife in England",
        "titleHi": "8. अंग्रेज अधिकारी की पत्नी को इंग्लैंड में दर्शन",
        "textEn": "Lahiri Mahasaya informed a worried British officer in Kashi that his wife in England was healed, reciting her letter lines word-for-word before it arrived.",
        "textHi": "एक अंग्रेज अधिकारी अपनी पत्नी की बीमारी के कारण उदास थे। श्यामाचरण ने उनसे कहा—'सर, चिंता न करें। आपकी पत्नी स्वस्थ हो गई हैं। वह अभी आपको पत्र लिख रही हैं।' उन्होंने पत्र की पंक्तियाँ भी सुनाईं। इंग्लैंड से आया पत्र वही था जो उन्होंने बताया था।"
      },
      {
        "titleEn": "9. Lesson to Dr. Chandramohan Dey",
        "titleHi": "9. डॉ. चंद्रमोहन डे को शिक्षा",
        "textEn": "When skeptical Dr. Chandramohan checked Lahiri Mahasaya's pulse and found no heartbeat or breath, Lahiri Mahasaya spoke moments later, proving subtle yogic control.",
        "textHi": "डॉ. चंद्रमोहन डे ने लाहिड़ी बाबा की नाड़ी और श्वास जाँची, जो शून्य पाई गई। क्षण भर बाद लाहिड़ी बाबा बोले—'देखो बाबा, सांसारिक ज्ञान से परे सूक्ष्म जगत के अनेक सिद्धांत हैं।' उसी दिन से डॉक्टर की अश्रद्धा मिट गई।"
      },
      {
        "titleEn": "10. The Photograph Lila",
        "titleHi": "10. लाहिड़ी महाशय का चित्र",
        "textEn": "In a group photograph, Lahiri Mahasaya's seat appeared empty in the film. Upon prayer, he consented to sit for photographer Gangadhar Babu, producing his famed image.",
        "textHi": "समूह फोटो में जहाँ लाहिड़ी महाशय बैठे थे, वह स्थान खाली आया। फोटोग्राफर की प्रार्थना पर लाहिड़ी बाबा ने सहमति दी—'कल कैमरा ले आना, मैं बैठूँगा।' वही चित्र आज जगद्विख्यात है।"
      },
      {
        "titleEn": "11. Vision of Shipwreck in the Sea of Japan",
        "titleHi": "11. जापान के समुद्र में जहाज दुर्घटना",
        "textEn": "Explaining the Gita, Lahiri Mahasaya paused, stating 'Many people are drowning in the Sea of Japan.' Newspapers confirmed a ship disaster at that moment.",
        "textHi": "श्रीगीता व्याख्या करते समय अचानक रुककर बोले—'बहुत लोग जापान के समुद्र में डूब रहे हैं।' अगले दिन समाचार-पत्र में जहाज डूबने की दुर्घटना की पुष्टि हुई।"
      },
      {
        "titleEn": "12. Materialization to Brahmachari Keshabananda",
        "titleHi": "12. ब्रह्मचारी केशवानन्द को दर्शन",
        "textEn": "Lahiri Mahasaya materialized before Keshabananda in Haridwar, directing him to Kashi, and materialized again after Mahasamadhi, assuring his eternal presence.",
        "textHi": "हरिद्वार में केशवानन्दजी को दर्शन देकर काशी आने का आदेश दिया। महासमाधि के पश्चात् पुनः ज्योतिर्मय रूप में प्रकट होकर कहा—'मैं बाबाजी महाराज के साथ हिमालय में हूँ, सदा तुम्हारे साथ हूँ।'"
      },
      {
        "titleEn": "13. Divine Astral Meeting at Dashashwamedh Ghat",
        "titleHi": "13. दशाश्वमेध घाट पर दिव्य दर्शन",
        "textEn": "At night at Dashashwamedh Ghat, Ram Gopal Majumdar witnessed Babaji, Holy Mother, and Lahiri Mahasaya in luminous astral reunion.",
        "textHi": "दशाश्वमेध घाट पर विशाल शिलाखंड के नीचे प्रकाशमय गुफा में महावतार बाबाजी, माताजी और लाहिड़ी महाशय का दिव्य समागम रामगोपाल मजुमदार ने प्रत्यक्ष देखा।"
      }
    ]
  },
  {
  "id": "sri-yukteswar",
  "order": 3,
  "name": "Swami Sri Yukteswar Giri Maharaj",
  "sanskritName": "श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज",
  "title": "Gyanavatar – Incarnation of Wisdom (1855 – 1936)",
  "titleHindi": "ज्ञान, विवेक और क्रियायोग परंपरा के प्रबुद्ध आचार्य",
  "period": "1855 – 1936",
  "image": "/images/gurus/guru_3.png",
  "bio": "Swami Sri Yukteswar Giri Maharaj (10 May 1855 – 9 March 1936), affectionately called 'Gyanavatar' (Incarnation of Wisdom), was a master of Vedic wisdom, astronomy, astrology, and Kriya Yoga. Born Priyanath Karar in Serampore, Bengal, he was a chief disciple of Lahiri Mahasaya. At Mahavatar Babaji's request at the Allahabad Kumbh Mela, Sri Yukteswar authored 'The Holy Science' (Kaivalya Darshan), demonstrating the essential unity of Eastern and Western scriptures. He established Karar Ashram in Puri in 1903 and rigorously trained Paramahansa Yogananda for his mission to the West.",
  "bioHindi": "श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज (10 मई 1855 – 9 मार्च 1936) ज्ञान, विवेक, क्रियायोग और गुरु-भक्ति के प्रबुद्ध आचार्य थे। उनका पूर्वाश्रम नाम प्रियनाथ कारार था और उनका जन्म श्रीरामपुर (पश्चिम बंगाल) में हुआ था। काशी में योगिराज श्यामाचरण लाहिड़ी महाशय से क्रियायोग की दीक्षा प्राप्त कर उन्होंने गहन साधना की। महावतार बाबाजी के निर्देश पर उन्होंने 'कैवल्य दर्शन' (The Holy Science) ग्रंथ की रचना की, जिसमें बाइबल और हिन्दू शास्त्रों में अंतर्निहित अभेद एकता को वैज्ञानिक रूप में सिद्ध किया गया। 1903 में उन्होंने पूरी समुद्र तट पर 'कड़ार आश्रम' की स्थापना की। वे परमहंस योगानन्दजी के महान गुरु थे।",
  "keyTeachings": [
    "The world will not change for you; you must change yourself first.",
    "A spiritual or righteous life is not mere imaginative meditation; it requires ordering one's whole life with discipline.",
    "Do not deceive yourself; remain unconditionally true to your inner self.",
    "Sit near everyone and listen respectfully; even in ashes, a precious gem may be hidden.",
    "Cultivate self-control solely for the purpose of serving God."
  ],
  "keyTeachingsHindi": [
    "धार्मिक या सात्त्विक जीवन केवल ध्यान की कल्पना नहीं है। जब तक मनुष्य अपने संपूर्ण जीवन को व्यवस्थित नहीं करता, तब तक उच्च आदर्शों का विकास कठिन होता है।",
    "ईश्वर की सेवा के उद्देश्य से आत्मसंयम का जीवन अपनाना चाहिए।",
    "जीवन के प्रत्येक कदम पर तपस्या, आत्म-अध्ययन और ईश्वर के प्रति भक्ति पर ध्यान देना चाहिए।",
    "गुरु का पवित्र स्पर्श ज्ञान प्राप्ति में सहायक होता है, पर उस आशीर्वाद को ग्रहण करने के लिए साधक को स्वयं तपस्वी बनना और गुरु के बताए मार्ग पर चलना आवश्यक है।",
    "सच्चा धार्मिक जीवन केवल आसन पर बैठकर मंत्र-जप या योगाभ्यास करने से नहीं बनता। आत्म-सुधार के लिए शरीर और मन दोनों की पूर्णता पर ध्यान देना आवश्यक है।",
    "संत होने का अर्थ केवल मौन रहना नहीं है। ईश्वर-ज्ञान के बाद निष्क्रिय नहीं होना चाहिए।",
    "तीक्ष्ण बुद्धि का विकास सद्गुणों के प्रत्यक्ष आचरण से होता है।",
    "संसार तुम्हारे लिए नहीं बदलेगा; पहले तुम्हें स्वयं को बदलना होगा।",
    "जो कामना, क्रोध, अहंकार और व्यक्तिगत इच्छाओं से मुक्त होते हैं, वे परम शांति की अवस्था प्राप्त करते हैं।",
    "इंद्रियों को नियंत्रित करने के लिए कर्मयोग या क्रियायोग अत्यंत उपयोगी है।",
    "सबसे पहले आत्म-साक्षात्कार की खोज को महत्व देना चाहिए, क्योंकि आत्म-साक्षात्कार के बिना सेवा-कार्य दोषों से पूर्णतः मुक्त नहीं हो सकता।",
    "सरल हृदय और मुस्कान के साथ जीवन जीना एक आशीर्वाद है।",
    "स्वयं को धोखा न दें और अपने प्रति सच्चे रहें।",
    "सबके निकट बैठो, सबकी बात सम्मानपूर्वक सुनो। राख में भी रत्न छिपा हो सकता है।",
    "अपनी साधना की मूल नींव के प्रति सदैव सजग रहो।"
  ],
  "quote": "The world will not change for you; you must change yourself first.",
  "quoteHindi": "संसार तुम्हारे लिए नहीं बदलेगा; पहले तुम्हें स्वयं को बदलना होगा।",
  "quotesHindiList": [
    "संसार तुम्हारे लिए नहीं बदलेगा; पहले तुम्हें स्वयं को बदलना होगा।",
    "स्वयं को धोखा न दें और अपने प्रति सच्चे रहें।",
    "राख में भी रत्न छिपा हो सकता है।",
    "ईश्वर की सेवा के उद्देश्य से आत्मसंयम का जीवन अपनाना चाहिए।",
    "सबसे पहले आत्म-साक्षात्कार की खोज को महत्व देना चाहिए।"
  ],
  "lifeMilestones": [
    {
      "titleEn": "Birth & Early Life (1855)",
      "titleHi": "जन्म एवं प्रारंभिक जीवन (1855)",
      "textEn": "Born on 10 May 1855 as Priyanath Karar in Serampore, Bengal, exhibiting sharp intellect, mathematical mastery, and spiritual curiosity.",
      "textHi": "10 मई 1855 ईस्वी को श्रीरामपुर (बंगाल) के कारार परिवार में जन्म। बाल्यकाल से ही तीव्र बुद्धिमत्ता, तर्कशीलता और गणित में विशेष निपुणता।"
    },
    {
      "titleEn": "Kriya Initiation by Lahiri Mahasaya (1893)",
      "titleHi": "योगिराज लाहिड़ी महाशय से दीक्षा (1893)",
      "textEn": "Initiated into Kriya Yoga on 9 July 1893 by Lahiri Mahasaya in Varanasi, engaging in deep sadhana and scriptural commentary.",
      "textHi": "9 जुलाई 1893 को काशी में योगिराज श्यामाचरण लाहिड़ी महाशय से क्रियायोग की दीक्षा ग्रहण की और साधना के उच्च शिखरों पर आरोहण किया।"
    },
    {
      "titleEn": "Writing 'The Holy Science' & Karar Ashram Puri (1894 - 1903)",
      "titleHi": "'कैवल्य दर्शन' रचना एवं कड़ार आश्रम पूरी (1894 - 1903)",
      "textEn": "Met Mahavatar Babaji at Allahabad Kumbh (1894), authored 'The Holy Science' (Kaivalya Darshan), and established Karar Ashram Puri on the seashore in 1903.",
      "textHi": "1894 प्रयाग कुंभ में महावतार बाबाजी के आदेश से 'कैवल्य दर्शन' (The Holy Science) ग्रंथ लिखा और 1903 में पूरी में 'कड़ार आश्रम' की स्थापना की।"
    },
    {
      "titleEn": "Training Yogananda & Mahasamadhi (1936)",
      "titleHi": "परमहंस योगानन्दजी का मार्गदर्शन एवं महासमाधि (1936)",
      "textEn": "Trained Paramahansa Yogananda for his mission to the West. Entered Mahasamadhi on 9 March 1936 at Karar Ashram, Puri.",
      "textHi": "अपने प्रिय शिष्य परमहंस योगानन्दजी को पश्चिम में क्रियायोग प्रचार हेतु तैयार किया। 9 मार्च 1936 को कड़ार आश्रम पूरी में महासमाधि ली।"
    }
  ],
  "structuredSections": [
    {
      "id": "kumbh-babaji-intro",
      "titleEn": "Meeting Mahavatar Babaji at Allahabad Kumbh Mela",
      "titleHi": "प्रयाग के कुंभ मेले में महावतार बाबाजी से दिव्य भेंट",
      "contentEn": "During the Prayag Kumbh Mela, amidst chanting and the fragrance of sacrificial fires, Priyanath Karar was seeking a divine yogic master. Hearing a divine call 'Swami-ji! Swami-ji!' from a tent, he turned to see a luminescent saint with deep eyes, broad chest, and radiant demeanor—Mahavatar Babaji Maharaj. Babaji addressed him as 'Swami-ji', inspiring him to write a unifying scriptural commentary.",
      "contentHi": "प्रयाग के कुंभ मेले का मार्ग सूर्य की किरणों से जगमगा रहा था। संतों और संन्यासियों के तंबुओं से आती यज्ञ-अग्नि की पवित्र सुगंध वातावरण में फैली हुई थी। चारों ओर वैदिक मंत्रों की ध्वनि गूँज रही थी। त्रिवेणी संगम में स्नान करने के बाद आत्मज्ञान की प्यास रखने वाले साधक संतों के तंबुओं में हरिकथा और सत्संग सुनने के लिए एकत्र हो रहे थे।\n\nएक मुमुक्षु साधक अपने गुरुदेव के प्रोत्साहन से पहली बार महाकुंभ मेले में आए थे। वे किसी दिव्य योग-सिद्ध महात्मा के दर्शन की तीव्र इच्छा लेकर लौट रहे थे। तभी एक तंबू से आवाज आई—“स्वामीजी! स्वामीजी!” वे संन्यासी नहीं थे, इसलिए उन्होंने आवाज को अनसुना कर दिया। फिर आवाज आई—“स्वामीजी!”\n\nजब उन्होंने पीछे मुड़कर देखा, तो एक तेजस्वी साधु उन्हें पुकार रहे थे। उनका वर्ण दूधिया गौर था, भुजाएँ बलिष्ठ थीं, वक्षस्थल चौड़ा था, नेत्र गहरे और तेजस्वी थे, और उनका सम्पूर्ण व्यक्तित्व प्रकाशमान प्रतीत हो रहा था। वे अपने शिष्यों से घिरे हुए बैठे थे।\n\nउस साधक ने विनम्रता से कहा—“आदरणीय महोदय, मैं संन्यासी नहीं हूँ।”\n\nतब उस महात्मा ने कहा—“कोई मेरे वचन को अस्वीकार नहीं करता, फिर आप मुझे क्यों अस्वीकार कर रहे हैं? आइए, बैठिए।”\n\nयह दिव्य महात्मा महावतार बाबाजी महाराज थे, और जिन्हें उन्होंने “स्वामीजी” कहकर संबोधित किया, वे आगे चलकर ज्ञानावतार श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज के रूप में प्रसिद्ध हुए।"
    },
    {
      "id": "birth-family",
      "titleEn": "Birth and Family Background",
      "titleHi": "जन्म और पारिवारिक पृष्ठभूमि",
      "contentEn": "Born Priyanath Karar on May 10, 1855 in Serampore, Bengal, to Sri Kshetranath Karar and Srimati Kadambini Devi. He was exceptionally brilliant in mathematics and logic from childhood.",
      "contentHi": "श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज का पूर्वाश्रम नाम प्रियनाथ था। उनका जन्म 10 मई 1855 ईस्वी को, बंगाली पंचांग के अनुसार वैशाख मास की 29वीं तिथि, शुक्रवार को, भागीरथी नदी के तट पर स्थित श्रीरामपुर के एक प्रतिष्ठित उच्च मध्यमवर्गीय परिवार में हुआ।\n\nउनके पिता का नाम श्रीयुक्त क्षेत्रनाथ कारार और माता का नाम श्रीमती कादंबिनी देवी था। माता-पिता ने अपने इकलौते पुत्र का नाम “प्रियनाथ” रखा। बालक प्रियनाथ बचपन से ही अत्यंत प्रतिभाशाली थे। वे बाद में कहा करते थे कि उन्होंने विद्यालय में गणित में कभी भी 100 से कम अंक प्राप्त नहीं किए। शिक्षक उनकी बुद्धिमत्ता, तर्कशीलता और गंभीरता से अत्यंत प्रभावित थे।\n\nअल्पायु में ही उन्होंने अपने पिता को खो दिया। उस समय उनकी माता कादंबिनी देवी ने रिश्तेदारों की सहायता से अपने पुत्र का पालन-पोषण किया। पिता का व्यापार नष्ट हो चुका था, इसलिए भविष्य में पैतृक संपत्ति की देखभाल का दायित्व भी प्रियनाथ पर आया।"
    },
    {
      "id": "education-curiosity",
      "titleEn": "Education, Logic and Spiritual Curiosity",
      "titleHi": "शिक्षा, तर्कशीलता और आध्यात्मिक जिज्ञासा",
      "contentEn": "Priyanath studied at Serampore Missionary College and Calcutta Medical College, gaining deep knowledge of anatomy, astronomy, Sanskrit, English, Urdu, and Persian while searching for true spiritual wisdom.",
      "contentHi": "प्रियनाथ ने समय पर प्रवेश परीक्षा उत्तीर्ण की और श्रीरामपुर मिशनरी कॉलेज में प्रवेश लिया। वहाँ के वातावरण, ईसा मसीह के जीवन और आध्यात्मिक विचारों ने उन्हें प्रभावित किया। बाद में धार्मिक समन्वय के कार्य में यह अनुभव उनके लिए सहायक सिद्ध हुआ।\n\nविज्ञान और शरीर-क्रिया विज्ञान में रुचि होने के कारण उन्होंने मेडिकल कॉलेज में भी प्रवेश लिया। उनका जीवन विज्ञान, शास्त्र-अध्ययन, शारीरिक शिक्षा, अध्ययन और देवी-माता की सेवा में बीत रहा था। फिर भी उन्हें केवल पारंपरिक शिक्षा पर्याप्त नहीं लगती थी। वे ज्ञान को तर्क और अनुभव की कसौटी पर समझना चाहते थे।\n\nसंतों के जीवन को जानने की इच्छा से वे विभिन्न मठों और आश्रमों में जाने लगे। वे धार्मिक कट्टरता से दूर, तर्कशील और विवेकशील स्वभाव के थे। विद्यासागर महाशय के समाज-सुधार और बंकिमचंद्र की देशभक्ति ने भी उनके मन पर गहरा प्रभाव डाला।\n\nवे संगीत, विशेषकर वाद्य-संगीत में भी रुचि रखते थे। वे संस्कृत, हिंदी, उर्दू, फारसी और अंग्रेजी भाषाओं का अध्ययन करते थे। ज्योतिष और दर्शन में भी उनका ज्ञान उल्लेखनीय था।"
    },
    {
      "id": "householder-search",
      "titleEn": "Householder Life and Search for Sadhana",
      "titleHi": "गृहस्थ जीवन और साधना की खोज",
      "contentEn": "After marriage, Priyanath worked as an accountant and practiced homeopathy. Upon discovering a secret yogic lineage through the Goswami family, his spiritual quest led him to Varanasi.",
      "contentHi": "माता की इच्छा के अनुसार प्रियनाथ का विवाह हुआ और वे कार्यालय में लेखाकार के रूप में कार्य करने लगे। अपनी लगन और दक्षता से उन्होंने शीघ्र ही सबका ध्यान आकर्षित किया, पर उनका मन लंबे समय तक केवल नौकरी में नहीं टिक सका। वे होम्योपैथी का भी अभ्यास करते थे। घुड़सवारी और शस्त्र-चलाना उनके शौक थे।\n\nश्रीरामपुर के गोस्वामी परिवार से उनके पारिवारिक संबंध थे। एक दिन वे वहाँ गए और उन्होंने देखा कि घर के कुछ लोग नियमित रूप से गुप्त साधना करते हैं। पूछताछ करने पर उन्हें ज्ञात हुआ कि वे काशीधाम के एक योगी गुरु के शिष्य हैं। प्रियनाथ के मन में उस गुप्त साधना और योगी गुरु को जानने की तीव्र इच्छा जाग उठी।\n\nधीरे-धीरे उनकी जिज्ञासा बढ़ती गई। अंततः उन्हें वही योगी गुरु प्राप्त हुए। काशी में श्री श्री श्यामाचरण लाहिड़ी महाशय के दर्शन करते ही प्रियनाथ को ऐसा अनुभव हुआ, मानो उनका उस दिव्य महापुरुष से जन्म-जन्मांतर का संबंध हो। वे भावविभोर होकर योगिराज के चरणों में समर्पित हो गए।"
    },
    {
      "id": "kriya-initiation",
      "titleEn": "Kriya Yoga Initiation and Sadhana",
      "titleHi": "क्रियायोग दीक्षा और साधना",
      "contentEn": "On July 9, 1893, Priyanath received Kriya Yoga initiation from Shyamacharan Lahiri Mahasaya in Varanasi. Lahiri Mahasaya affectionately called him 'Priya'.",
      "contentHi": "सोमवार, 9 जुलाई 1893 ईस्वी को, बंगाली पंचांग के अनुसार 1290 बंगाब्द के आषाढ़ शुक्ल पक्ष की 26वीं तिथि को, प्रियनाथ ने श्री श्री श्यामाचरण लाहिड़ी महाशय से क्रियायोग की दीक्षा प्राप्त की। उस दिन से उन्होंने अपना जीवन नियमित साधना में समर्पित कर दिया।\n\nवे अपने गुरुदेव से पत्राचार द्वारा आध्यात्मिक समस्याओं का समाधान प्राप्त करते थे और समय-समय पर गुरु-सान्निध्य के लिए काशी जाते थे। कभी-कभी वे अपनी माता के साथ तीर्थयात्रा पर भी जाते थे।\n\nजगन्नाथ पुरी की यात्रा के दौरान उनकी पत्नी का देहांत हो गया और एक पुत्री उनके संरक्षण में रह गई। तब उन्होंने पुत्री की देखभाल और माता की सेवा स्वयं की। उन्होंने अपनी पुत्री को शिक्षा के साथ भारतीय नारीत्व के आदर्श भी सिखाए। पुत्री के विवाह में उन्होंने वैदिक रीति से उसे पुष्पों से सुशोभित कर विवाह संस्कार संपन्न कराया।"
    },
    {
      "id": "broad-study",
      "titleEn": "Broad Study and Sadhana Harmony",
      "titleHi": "व्यापक अध्ययन और साधना-सामंजस्य",
      "contentEn": "Priyanath met Fakirs, Darveshes, Bauls, Tantrics, and saints like Trailanga Swami, exploring the underlying harmony of all spiritual paths while remaining steadfast in Kriya Yoga.",
      "contentHi": "प्रियनाथ का अध्ययन केवल एक परंपरा तक सीमित नहीं था। वे फकीरों, दरवेशों, बाउलों, तांत्रिकों और वैष्णव साधकों से मिलते थे। वे विभिन्न आध्यात्मिक अनुशासनों का अध्ययन करते और उनमें अंतर्निहित सामंजस्य को अनुभव करते थे।\n\nवे त्रैलंग स्वामी, आगरा के राधास्वामी संप्रदाय, गुरु भास्करानंद सरस्वती और अन्य अनेक साधकों के संपर्क में रहे। विभिन्न धर्मों और साधना-मार्गों का अध्ययन करते हुए भी वे अपने गुरुदेव द्वारा दी गई क्रियायोग साधना से कभी विचलित नहीं हुए।\n\nसरल क्रियायोग के अभ्यास से प्रियनाथ ने साधना के उच्च स्तरों का अनुभव प्राप्त किया। वे गुरुदेव लाहिड़ी महाशय के प्रिय शिष्य के रूप में प्रसिद्ध हुए। लाहिड़ी महाशय उन्हें प्रेम से “प्रिया” कहकर पुकारते थे।\n\nगुरुदेव के निर्देश पर उन्होंने श्रीमद्भगवद्गीता की आध्यात्मिक व्याख्या लिखना आरंभ किया और समर्पित मित्रों के साथ एक गीता सभा की स्थापना की।"
    },
    {
      "id": "simple-life",
      "titleEn": "Simple Life and Generous Heart",
      "titleHi": "सादा जीवन और उदार हृदय",
      "contentEn": "Leading an orderly, frugal, and compassionate life, Priyanath served his elderly mother, welcomed all guests, and avoided ostentatious miracle displays.",
      "contentHi": "प्रियनाथ का जीवन अत्यंत सरल और सुव्यवस्थित था। वे अपनी विधवा माता की श्रद्धापूर्वक सेवा करते थे। सुबह जल्दी उठकर गंगा किनारे टहलने जाते थे। वे मितव्ययी थे और कहते थे—\n“तुम्हारे पास जो है, उसी से गुजारा करो। अतिरिक्त खर्च अनेक कठिनाइयाँ और परेशानियाँ पैदा करता है।”\n\nउनका घर और बगीचा जितना सुव्यवस्थित था, उतना ही उनका आचरण, वचन और कर्म भी सुव्यवस्थित, पूर्ण और सरल थे। वे शांत, गंभीर और कम बोलने वाले थे, पर उनका हृदय उदार और करुणामय था। उनके घर से कोई भूखा नहीं लौटता था। अचानक आए अतिथि से भी वे असहज नहीं होते थे; घर में जो उपलब्ध होता, उसी से सेवा करते थे।\n\nवे चमत्कार और आश्चर्यजनक प्रदर्शन से दूर रहते थे। आत्म-साक्षात्कार के उच्च शिखर पर पहुँचने के बाद भी उनके निकटवर्ती रिश्तेदार और परिचित उनके ज्ञान और आध्यात्मिक पूर्णता को सहजता से नहीं समझ पाते थे।"
    },
    {
      "id": "holy-science-writing",
      "titleEn": "Encounter with Babaji & 'The Holy Science'",
      "titleHi": "महावतार बाबाजी महाराज से भेंट और “कैवल्य दर्शन” / The Holy Science",
      "contentEn": "Meeting Babaji at Prayag in 1894, Priyanath was instructed to write a book establishing the harmony between Eastern and Western scriptures, resulting in 'Kaivalya Darshan' (The Holy Science).",
      "contentHi": "सन् 1894 में इलाहाबाद के पूर्ण कुंभ में प्रियनाथ की महावतार बाबाजी महाराज से दिव्य भेंट हुई। बाबाजी महाराज ने उन्हें “स्वामीजी” कहकर संबोधित किया और कहा—\n“आपने गीता को गुरु के शब्दों में लिखा है; मेरे शब्दों में भी कुछ लिखिए।”\n\nउन्होंने यह भी कहा कि ऐसा ग्रंथ लिखो जो पूर्व और पश्चिम के दर्शन में सामंजस्य स्थापित करे, ताकि पश्चिमी लोग भी इस आध्यात्मिक विषयवस्तु को समझ सकें।\n\nजब प्रियनाथ ने अपनी अक्षमता और ज्ञान की कमी की बात कही, तब बाबाजी महाराज ने उन्हें प्रेरित किया। उनके वचनों से प्रियनाथ के भीतर नई शक्ति का संचार हुआ। बाबाजी महाराज ने कहा कि लेखन पूरा होने पर वे पुनः दर्शन देंगे।\n\nकाशी जाकर जब प्रियनाथ ने यह घटना लाहिड़ी महाशय को बताई, तो लाहिड़ी महाशय अत्यंत प्रसन्न हुए। परमगुरु द्वारा प्रदान की गई “स्वामी” की उपाधि धारण कर प्रियनाथ श्रीरामपुर लौटे और शास्त्र-लेखन का कार्य प्रारंभ किया।\n\nबहुत कम समय में “कैवल्य दर्शन” नामक ग्रंथ पूर्ण हुआ, जो आगे चलकर अंग्रेज़ी में The Holy Science के नाम से प्रसिद्ध हुआ। इस ग्रंथ में श्री युक्तेश्वर गिरि महाराज ने हिंदू शास्त्रों और बाइबिल के आध्यात्मिक तत्त्वों के सामंजस्य को स्पष्ट करते हुए सभी धर्मों की मूल एकता का संदेश प्रस्तुत किया।\n\nपुस्तक पूर्ण होने के बाद गंगा-स्नान के समय उन्हें बाबाजी महाराज के दर्शन हुए। बाद में काशी में लाहिड़ी महाशय के माध्यम से भी उन्हें बाबाजी महाराज का दिव्य दर्शन प्राप्त हुआ। इस घटना ने प्रियनाथ के मन पर गहरा प्रभाव डाला।"
    },
    {
      "id": "kriya-propagation",
      "titleEn": "Spreading Kriya Yoga and Satsang",
      "titleHi": "क्रियायोग प्रचार और सत्संग कार्य",
      "contentEn": "Following Lahiri Mahasaya's Mahasamadhi in 1895, Priyanath began propagating Kriya Yoga and establishing Satsang societies in Hooghly, Serampore, and Khidderpore.",
      "contentHi": "सन् 1895 में श्री श्री लाहिड़ी महाशय की महासमाधि के बाद प्रियनाथ स्वामी ने उनके निर्देशों का पालन करते हुए क्रियायोग का प्रसार आरंभ किया। श्रीरामपुर के प्रसिद्ध वकील श्री अक्षय कुमार भट्टाचार्य उनके प्रथम शिष्यों में माने जाते हैं। उनके मित्र श्री अघोरानाथ चट्टोपाध्याय ने भी उनसे क्रियायोग सीखा। श्रीरामपुर के निकट चतरा के प्रतिष्ठित ब्राह्मण पुत्र श्री मोतीलाल मुखोपाध्याय ने भी उनसे क्रियायोग दीक्षा ली।\n\nसमाज की संकीर्णता के कारण मोतीलाल महाशय को विरोध सहना पड़ा, क्योंकि प्रियनाथ स्वामी ब्राह्मण शरीर से नहीं थे। किंतु मोतीलाल महाशय ने कहा—\n“ज्ञान एक अनमोल खजाना है, ब्रह्म ही उसका सार है, उसकी जाति क्या होती है?”\n\nसन् 1900 में हुगली सत्संग समाज, हुगली बंधव समिति, खिदिरपुर सत्संग समिति, चुंचुरा सत्संग समिति और श्रीरामपुर सत्संग समिति की स्थापना हुई। इन संस्थाओं के अध्यक्ष श्रीयुक्त स्वामी प्रियनाथ कारार थे। श्रीरामपुर के उनके पैतृक भवन से, जिसे उन्होंने “प्रियधाम” नाम दिया था, इन योजनाओं का संचालन होता था।"
    },
    {
      "id": "priyadham-karar-ashram",
      "titleEn": "Priyadham, Sadhu Samvad and Karar Ashram Puri",
      "titleHi": "प्रियधाम, साधु संवाद और कड़ार आश्रम",
      "contentEn": "In 1903, he founded Karar Ashram on Puri seashore and established Veda Vidyalaya in 1906, creating a major center for Kriya Yoga, astrological studies, and youth education.",
      "contentHi": "प्रियनाथ स्वामी ने साधुमंडल के उद्देश्य और संदेश को लोगों तक पहुँचाने के लिए एक पत्रिका प्रकाशित करने की आवश्यकता अनुभव की। इसी उद्देश्य से उन्होंने सन् 1910 में अपने घर पर “प्रियनाथ प्रेस” की स्थापना की। साधुसभा और सत्संग समिति की मुखपत्र पत्रिका “साधु संवाद” का प्रथम प्रकाशन सन् 1910 में श्री नीलानंद चट्टोपाध्याय के संपादन में हुआ।\n\nसांस्कृतिक और व्यावहारिक शिक्षा को बढ़ावा देने तथा ज्योतिष और दर्शनशास्त्र के अध्ययन के उद्देश्य से उन्होंने श्री जगन्नाथ धाम पुरी के समुद्र तट पर भूमि प्राप्त की। सन् 1903 में वहाँ आश्रम का निर्माण हुआ, जिसका नाम “कड़ार आश्रम” रखा गया।\n\nसन् 1906 में उन्होंने वहाँ “वेद विद्यालय” नामक शिक्षण संस्थान की स्थापना की। उन्होंने समझाया कि “कड़ार” का अर्थ सेवक या दास है। आगे चलकर यही स्थान क्रियायोग, शिक्षा और सत्संग का महत्वपूर्ण केंद्र बना।"
    },
    {
      "id": "sannyas-renunciation",
      "titleEn": "Formal Sannyas and the Name Sri Yukteswar Giri",
      "titleHi": "संन्यास और श्री युक्तेश्वर गिरि नाम",
      "contentEn": "Taking formal Sannyas from Mahant Krishna Dayal Giri of Bodh Gaya, he assumed the name Swami Sri Yukteswar Giri ('United with God').",
      "contentHi": "लाहिड़ी बाबा की महासमाधि के लगभग दस वर्ष बाद, शुभचिंतकों और ज्ञानी संतों के अनुरोध पर प्रियनाथ स्वामी ने औपचारिक रूप से संन्यास ग्रहण करने का निर्णय लिया।\n\nउन्होंने बोधगया के महंत श्री कृष्ण दयाल गिरिजी से संन्यास दीक्षा ली और स्वामी श्री युक्तेश्वर गिरि के नाम से प्रसिद्ध हुए। “युक्तेश्वर” का अर्थ है—जो सदैव ईश्वर से एकाग्र रहता है।\n\nउनका व्यक्तित्व शांत, गंभीर और तेजस्वी था। उनके नेत्र गहरे और प्रभावशाली थे। उनकी उपस्थिति ही शिष्यों को अनुशासन और ध्यान की ओर प्रेरित करती थी।\n\nवे श्रीरामपुर आश्रम में छोटे बालकों को आश्रय देते थे और उन्हें शिक्षा प्रदान करते थे। शिष्य शिक्षा प्राप्त करने के बाद आश्रम-सेवा में लग जाते थे। वे शिष्यों को नाम लेकर ऊँची आवाज में नहीं पुकारते थे; केवल दो-तीन बार ताली बजाते और शिष्य तुरंत उपस्थित हो जाते।"
    },
    {
      "id": "disciples-ranchi",
      "titleEn": "Prominent Disciples and Ranchi Brahmacharya Ashram",
      "titleHi": "प्रमुख शिष्य और रांची ब्रह्मचर्य आश्रम",
      "contentEn": "He guided Yogananda Giri, Satyananda Giri, and Hariharananda Giri, helping establish Ranchi Brahmacharya Ashram in 1918.",
      "contentHi": "श्री युक्तेश्वर गिरि महाराज केवल हजारों लोगों के गुरु और आध्यात्मिक मार्गदर्शक ही नहीं थे, बल्कि संन्यास ग्रहण करने के बाद उन्होंने त्यागी शिष्यों को संन्यास जीवन की दिशा भी दी।\n\nउनके प्रमुख संन्यासी शिष्यों में स्वामी योगानंद गिरि, स्वामी सत्यानंद गिरि और स्वामी हरिहरानंद गिरि के नाम उल्लेखनीय हैं। उनके प्रमुख शिष्य स्वामी योगानंद गिरि ने 1920 में अमेरिका के बोस्टन में आयोजित धर्म महासम्मेलन में भाग लेकर पश्चिम में क्रियायोग के प्रचार का कार्य आगे बढ़ाया।\n\nसन् 1918 में रांची में काशिम बाजार के राजा मणिंद्र चंद्र नंदी के बगीचे में ब्रह्मचर्य आश्रम और ब्रह्मचर्य विद्यालय की स्थापना हुई। इस कार्य की मुख्य प्रेरणा श्री युक्तेश्वर गिरि महाराज थे। स्वामी योगानंदजी और स्वामी सत्यानंदजी ने इस विद्यालय की स्थापना के लिए विशेष परिश्रम किया। विद्यालय के प्राचार्य योगीराज के शिष्य, संस्कृत विद्वान स्वामी केबलानंद गिरि महाराज थे।\n\nयोगानंदजी के पश्चिम चले जाने के बाद सत्यानंदजी को रांची आश्रम की जिम्मेदारियाँ संभालनी पड़ीं।"
    },
    {
      "id": "final-dialogue-mahasamadhi",
      "titleEn": "Final Dialogue with Yoganandaji and Mahasamadhi",
      "titleHi": "योगानन्दजी से अंतिम संवाद और महासमाधि",
      "contentEn": "Meeting Yogananda in 1935 upon his return to India, Sri Yukteswar entrusted Karar Ashram and his world mission to him, entering Mahasamadhi on March 9, 1936.",
      "contentHi": "22 अगस्त 1935 को स्वामी योगानंद कुछ शिष्यों के साथ विदेश से भारत लौटे। वर्धा में महात्मा गांधी से मिलने के बाद वे कोलकाता गए और फिर अपने गुरु महाराज से मिलने श्रीरामपुर पहुँचे।\n\nप्रिय शिष्य योगानंद से चर्चा करते हुए श्री युक्तेश्वरजी ने कहा—\n“पृथ्वी पर मेरा कार्य अब पूरा हो गया है, अब तुम्हें ही सब कुछ संभालना होगा।”\n\nउन्होंने योगानंदजी को पूरी कड़ार आश्रम की जिम्मेदारी भी संभालने का संकेत दिया।\n\nसन् 1936 में योगानंदजी अपने विदेशी शिष्यों के साथ कुंभ मेले के लिए प्रयाग गए। उसी वर्ष माघी पूर्णिमा के शुभ दिन श्री युक्तेश्वर गिरि महाराज मेदिनीपुर जिले के घाटाल उपमंडल के खुकुरदाहा गाँव गए और भक्तों-शिष्यों के साथ आनंदमय मिलन हुआ।\n\nइसके बाद वे पूरी लौटे। चैत्र मास की महाविषुव संक्रांति पर कड़ार आश्रम की जयंती मनाई जानी थी। उन्होंने रांची में अपने प्रिय शिष्य सत्यानंदजी को पत्र लिखकर डोला उत्सव से पहले पुरी आने को कहा। सत्यानंदजी अस्वस्थ थे और दो दिन बाद आने की सोच रहे थे।\n\n8 मार्च 1936 को डोला यात्रा के समय श्री युक्तेश्वर गिरिजी अस्वस्थ हुए। फाल्गुन कृष्ण द्वितीया, 9 मार्च 1936 को शाम 7 बजे, श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज परम शांति में महासमाधि में लीन हो गए।\n\nउनके पार्थिव शरीर को पवित्र संन्यासी परंपरा के अनुसार कड़ार आश्रम के उद्यान में समाधिस्थ किया गया। 21 मार्च को साधु भंडारा का आयोजन हुआ।"
    },
    {
      "id": "spiritual-message",
      "titleEn": "Spiritual Message",
      "titleHi": "आध्यात्मिक संदेश",
      "contentEn": "The life of Sri Yukteswar Giri Maharaj exemplifies wisdom, logic, discipline, and devotion, demonstrating that spirituality requires an orderly life, self-control, and unshakeable commitment to truth.",
      "contentHi": "श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज का जीवन ज्ञान, तर्क, विवेक, अनुशासन, क्रियायोग, गुरु-भक्ति और आत्म-साक्षात्कार का महान उदाहरण है। उन्होंने पूर्व और पश्चिम के दर्शन में सामंजस्य स्थापित करने का प्रयास किया और “कैवल्य दर्शन” (The Holy Science) के माध्यम से सभी धर्मों की मूल एकता और आध्यात्मिक सत्य को गहन तथा व्यवस्थित रूप में प्रस्तुत किया।\n\nउनका जीवन यह सिखाता है कि आध्यात्मिकता केवल भावनात्मक श्रद्धा नहीं, बल्कि सुव्यवस्थित जीवन, आत्मसंयम, विवेक, सत्यनिष्ठा, गुरु-निष्ठा और साधना की गहराई से प्रकट होती है।"
    },
    {
      "id": "scriptures-legacy",
      "titleEn": "Scriptures & Divine Legacy",
      "titleHi": "ग्रंथ, उपदेश एवं दिव्य विरासत",
      "contentEn": "His masterwork 'The Holy Science', Gita commentary, 'Sadhu Samvad' magazine, and sacred visions at Karar Ashram Puri remain timeless beacons for spiritual seekers.",
      "contentHi": "श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज की आध्यात्मिक धरोहर में “कैवल्य दर्शन” (The Holy Science), गीता-व्याख्या, क्रियायोग, दर्शन, ज्योतिष और साधना-संबंधी उपदेश महत्वपूर्ण स्थान रखते हैं।\n\n“कैवल्य दर्शन” में उन्होंने हिंदू शास्त्रों और बाइबिल के समान आध्यात्मिक तत्त्वों को सामने रखकर यह संदेश दिया कि सभी धर्मों के मूल सत्य में एकता है।\n\nग्रंथ, उपदेश, सत्संग-संदेश, गीता-व्याख्या, “साधु संवाद” से संबंधित सामग्री और क्रियायोग परंपरा से जुड़े साहित्य।\n\nदिव्य दर्शन एवं चित्रावली: श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज के पावन चित्र, श्रीरामपुर “प्रियधाम”, पुरी कड़ार आश्रम, गुरु-परंपरा, शिष्यों और क्रियायोग साधना से जुड़े प्रेरणादायी चित्र।\n\nSource Note: यह जीवन-प्रसंग आश्रम परंपरा में उपलब्ध मूल सामग्री, गुरु-परंपरा से जुड़े संकलित विवरणों, भक्तों द्वारा संरक्षित प्रसंगों और उपलब्ध सार्वजनिक स्रोतों के आधार पर प्रस्तुत किया गया है।"
    }
  ],
  "lilasList": [
    {
      "titleEn": "1. Fearlessness with a Cobra",
      "titleHi": "1. साँप के साथ निर्भयता",
      "textEn": "When a large black cobra slithered out of bushes at Puri seashore and raised its hood, Sri Yukteswar remained completely calm, clapped softly, and the cobra peacefully passed between his feet into the bushes.",
      "textHi": "पुरी में, कड़ार आश्रम के बाहर, श्री युक्तेश्वरजी अपने एक शिष्य के साथ समुद्र को निहारते हुए बैठे थे। पास की झाड़ियों में एक बिल से एक बड़ा, काला साँप निकला। उसने फन उठाया और फुफकारने लगा।\n\nशिष्य भय से काँप गया, पर श्री युक्तेश्वरजी शांत रहे। उन्होंने मुस्कुराते हुए ताली बजाई। साँप उनके सामने आकर कुछ देर स्थिर खड़ा रहा, फिर अपना फन समेटकर उनके पैरों के बीच से निकलता हुआ पीछे झाड़ियों में चला गया।\n\nयह घटना उनके निर्भय भाव और प्रकृति के प्रति अद्भुत संतुलन को प्रकट करती है।"
    },
    {
      "titleEn": "2. Warning to an Atheist Doctor",
      "titleHi": "2. नास्तिक डॉक्टर की बीमारी और चेतावनी",
      "textEn": "When an atheist veterinary doctor visited the ashram, Sri Yukteswar foresaw his grave illness, healed him upon prayer, but warned him strictly against eating meat; disobeying the warning, the doctor passed away within six months.",
      "textHi": "कोलकाता में एक शिष्य के पड़ोस में एक पशुचिकित्सक रहते थे। वे कट्टर नास्तिक थे और धार्मिक संतों का उपहास करते थे। एक दिन शिष्य उन्हें श्रीरामपुर आश्रम ले गया। डॉक्टर आश्रम में चुप रहे और कुछ देर बाद चले गए।\n\nउनके जाने के बाद श्री युक्तेश्वरजी ने कहा—\n“तुम मरे हुए लोगों को आश्रम क्यों लाते हो?”\n\nउन्होंने डॉक्टर की गंभीर बीमारी और भविष्य की अवस्था के बारे में संकेत दिया। शिष्य की प्रार्थना पर उन्होंने कहा कि वे प्रयास करेंगे। बाद में डॉक्टर बीमार पड़े, फिर धीरे-धीरे स्वस्थ हुए। पर उन्हें मांस न खाने की चेतावनी दी गई। डॉक्टर ने चेतावनी नहीं मानी और छह महीने के भीतर उनका देहांत हो गया।"
    },
    {
      "titleEn": "3. Protection of Shashi",
      "titleHi": "3. शशि की रक्षा",
      "textEn": "Sri Yukteswar warned a youth named Shashi that his unruly life would cause severe illness in exactly one year. A year later, Shashi fell critically ill; weeping at his master's feet, Sri Yukteswar blessed him and healed him completely.",
      "textHi": "शशि नामक एक युवक श्रीरामपुर आश्रम आता था। श्री युक्तेश्वरजी उसे स्नेह करते थे, पर उसके असंयमित जीवन को भी जानते थे। एक दिन उन्होंने उसे चेतावनी दी—\n“शशि, यदि तुम अब से नहीं सुधरे, तो ठीक एक वर्ष में गंभीर रूप से बीमार पड़ जाओगे।”\n\nएक वर्ष बाद शशि गंभीर रोग से ग्रस्त हुआ और रोते हुए गुरुदेव के चरणों में आया। डॉक्टरों ने स्थिति अत्यंत गंभीर बताई थी। गुरुदेव ने उसे आश्वासन दिया और कहा कि उसे भय करने की आवश्यकता नहीं है।\n\nबाद में शशि की स्थिति और बिगड़ी, पर गुरुदेव की कृपा से वह धीरे-धीरे स्वस्थ होने लगा। उसने अनुभव किया कि गुरुदेव प्रकाशमय रूप में उसके पास आए और उसके शरीर का कष्ट दूर हुआ।"
    }
  ]
},
  {
  "id": "satyananda-giri",
  "order": 4,
  "name": "Brahmarishi Swami Satyananda Giri Maharaj",
  "sanskritName": "ब्रह्मर्षि श्रीमत् स्वामी सत्यानन्द गिरि महाराज",
  "title": "Self-Realized Kriya Master, Preceptor of Guru-Bhakti & Character Building",
  "titleHindi": "क्रियायोग, गुरु-भक्ति, सेवा और चरित्र-निर्माण के दिव्य आचार्य",
  "period": "1896 – 1971",
  "image": "/images/gurus/guru_4.png",
  "imageAltText": "Brahmarishi Shrimat Swami Satyananda Giri Maharaj Portrait",
  "seoMetaTitle": "Brahmarishi Swami Satyananda Giri Maharaj Biography & Teachings",
  "seoMetaDescription": "Official biography and complete life history of Brahmarishi Swami Satyananda Giri Maharaj - Kriya Yoga master, disciple of Swami Sri Yukteswar Giri, and beacon of selfless service.",
  "urlSlug": "/guru-parampara/satyananda-giri",
  "bio": "Brahmarishi Shrimat Swami Satyananda Giri Maharaj (1896 – 1971) was an eminent realized master of Kriya Yoga. His life was a divine example of sadhana, guru-bhakti, service, discipline, compassion, and character building.",
  "bioHindi": "ब्रह्मर्षि श्रीमत् स्वामी सत्यानन्द गिरि महाराज भारतवर्ष के प्रसिद्ध ब्रह्मर्षियों में से एक स्मरणीय क्रियायोगाचार्य थे। उनका जीवन साधना, गुरु-भक्ति, सेवा, अनुशासन, करुणा और चरित्र-निर्माण का दिव्य उदाहरण था। वे योगीराज श्री श्यामाचरण लाहिड़ी महाशय द्वारा प्रवर्तित क्रियायोग परंपरा के श्रेष्ठ साधकों में गिने जाते हैं।",
  "introductionEn": "Brahmarishi Shrimat Swami Satyananda Giri Maharaj was an eminent realized master of Kriya Yoga in India. His life was a divine example of sadhana, guru-bhakti, service, discipline, compassion, and character building. He is counted among the foremost sadhakas of the Kriya Yoga lineage propagated by Yogiraj Sri Shyamacharan Lahiri Mahasaya.",
  "introductionHi": "ब्रह्मर्षि श्रीमत् स्वामी सत्यानन्द गिरि महाराज भारतवर्ष के प्रसिद्ध ब्रह्मर्षियों में से एक स्मरणीय क्रियायोगाचार्य थे। उनका जीवन साधना, गुरु-भक्ति, सेवा, अनुशासन, करुणा और चरित्र-निर्माण का दिव्य उदाहरण था।\n\nवे योगीराज श्री श्यामाचरण लाहिड़ी महाशय द्वारा प्रवर्तित क्रियायोग परंपरा के श्रेष्ठ साधकों में गिने जाते हैं। उनका जीवन केवल व्यक्तिगत साधना तक सीमित नहीं था; उन्होंने शिक्षा, आश्रम-निर्माण, समाज-सेवा, ग्रामीण कल्याण और आध्यात्मिक जागरण के कार्यों को भी साधना का अंग माना।\n\nउनके जीवन में गहरी साधना और करुणामय कर्मयोग का सुंदर समन्वय दिखाई देता है।",
  "keyTeachings": [
    "Care for both body and soul through balanced education.",
    "Character building is the root of human life.",
    "Following the instructions of Sri Guru is the key to life success.",
    "Perform work without attached desire for fruits.",
    "Keep mind, speech, and action completely pure.",
    "Acknowledge good qualities in others.",
    "Recognize your own flaws and correct them.",
    "Family and society benefit through sacrifice and service.",
    "Spiritual progress requires devotion and discipline.",
    "Duty performed with love is the highest service."
  ],
  "keyTeachingsHindi": [
    "देह और आत्मा का साधन अलग है, पर शिक्षा दोनों की होनी चाहिए।",
    "चरित्र निर्माण ही मनुष्य जीवन का मूल है।",
    "श्रीगुरु के निर्देशों का पालन ही जीवन की सफलता है।",
    "कर्म करो, फल के लिए नहीं।",
    "मन, वचन और कर्म—तीनों को शुद्ध रखो।",
    "यदि तुम किसी के भीतर एक गुण भी देखो, तो उसे स्वीकार करो।",
    "अपने दोषों को पहचानो।",
    "त्याग और सेवा से परिवार, समाज और संसार का कल्याण संभव है।",
    "उच्च शिक्षा लेकर स्वयं को ज्ञानी समझना उचित नहीं।",
    "भक्ति और अनुशासन के बिना आध्यात्मिक उन्नति नहीं।",
    "सामान्य मनुष्य भी ईश्वर की कृपा का पात्र बन सकता है।",
    "शरीर रोगी हो सकता है, पर मन को दुर्बल मत होने दो।",
    "छोटे-छोटे कार्यों से भी समाज की सेवा की जा सकती है।",
    "केवल बाहरी पूजा नहीं, आंतरिक साधना आवश्यक है।",
    "शुद्ध साधना से ब्रह्मज्ञान और स्वरूप ज्ञान प्राप्त होता है।",
    "सेवा-भाव से कर्म करोगे, तो वास्तविक शांति प्राप्त होगी।",
    "कर्तव्य ही सबसे बड़ी सेवा है।",
    "भोजन शारीरिक, मानसिक और आध्यात्मिक उन्नति से जुड़ा है, इसलिए शुद्ध भोजन आवश्यक है।",
    "यदि कोई क्रियायोग का अभ्यास न भी करे, लेकिन सत्य, सेवा और गुरुभक्ति में स्थित रहे, तो वह ईश्वर-कृपा का अधिकारी बन सकता है।"
  ],
  "quote": "Service to humanity is genuine worship of the Divine.",
  "quoteHindi": "मानव सेवा ही सच्ची पूजा है।",
  "quotesHindiList": [
    "मानव सेवा ही सच्ची पूजा है।",
    "कर्मयोग का अर्थ केवल उपदेश देना नहीं है, स्वयं कार्य करना भी है।",
    "कर्म में ही ईश्वर प्रकट होते हैं।",
    "किसी को छोटा मत समझिए।",
    "कर्तव्य ही सबसे बड़ी सेवा है।"
  ],
  "structuredSections": [
    {
      "id": "bhakta-seva-divya-vishwas",
      "titleEn": "1. Event of Devotee Service & Divine Faith",
      "titleHi": "1. भक्त-सेवा और दिव्य विश्वास का प्रसंग",
      "contentEn": "The atmosphere of the Bhagwanpur police station area in undivided Medinipur district was extremely charming. Nature was covered with trees and creepers. Hundreds of men and women gathered for the darshan of Swami Satyananda Giri Maharaj.\n\nSuddenly the sky filled with clouds. A strong wind blew from the south. Seeing the severe aspect of nature, the organizers grew anxious. If heavy rain fell, food prepared for thousands could be ruined. It was an open field with no place to safeguard food supplies.\n\nEveryone prayed to the president of the sadhu assembly. Sadhu Baba sat calmly and said:\n“There is no fear; rain will not fall here until the work is completed.”\n\nSo it happened. Until devotee service and event were complete, not a single drop fell on the site. As soon as the event ended, torrential rain poured and flooded the field. Seeing this, devotees were overwhelmed with devotion, echoing acclamations for Sadhu Baba.\n\nThis incident recalls the devotion of devotees towards Swami Satyananda Giri Maharaj and his divine presence.",
      "contentHi": "अविभाजित मेदिनीपुर जिले के भगवानपुर थाना क्षेत्र का वातावरण अत्यंत मनोहर था। चारों ओर वृक्षों और लताओं से आच्छादित प्रकृति थी। सैकड़ों नर-नारी स्वामी सत्यानन्द गिरि महाराज के दर्शन के लिए एकत्र हुए थे।\n\nअचानक आकाश मेघों से भर गया। दक्षिण दिशा से तीव्र वायु चलने लगी। प्रकृति का गंभीर रूप देखकर आयोजक चिंतित हो उठे। यदि तेज वर्षा होती, तो हजारों लोगों के लिए बनाया गया भोजन नष्ट हो सकता था। चारों ओर खुला मैदान था और खाद्य-सामग्री को सुरक्षित रखने का कोई स्थान नहीं था।\n\nसभी ने साधु-सभा के सभापति से निवेदन किया। साधु बाबा शांत भाव से बैठे रहे और बोले—\n“कोई भय नहीं, यहाँ कार्य समाप्त हुए बिना वर्षा नहीं होगी।”\n\nवैसा ही हुआ। जब तक भक्तों की सेवा और आयोजन पूर्ण नहीं हुआ, तब तक कार्यक्रम स्थल पर एक बूँद वर्षा नहीं पड़ी। आयोजन समाप्त होते ही चारों ओर प्रबल वर्षा आरंभ हो गई और मैदान जल से भर गया। यह देखकर उपस्थित भक्त भावविभोर हो उठे और साधु बाबा की जय-जयकार से वातावरण गूँज उठा।\n\nयह प्रसंग स्वामी सत्यानन्द गिरि महाराज के प्रति भक्तों की श्रद्धा और उनकी दिव्य उपस्थिति का स्मरण कराता है।"
    },
    {
      "id": "birth-early-life",
      "titleEn": "2. Birth & Early Life",
      "titleHi": "2. जन्म और प्रारंभिक जीवन",
      "contentEn": "Swami Satyananda Giri Maharaj appeared on Sunday, Shukla Ekadashi, 1 Agrahayana 1303 Bangabda (17 November 1896 AD). He was born in Meghna Nagar of the Vikrampur region in East Bengal. His father was Sri Mohinimohan Majumdar and mother Srimati Tarabasini Devi.\n\nTheir first child was a son. Affectionately, he was named 'Khandu', a beloved name given by his mother. Later, his father Mohinimohan gave him another name — 'Manmohan'.\n\nThis child Manmohan later became famous as Gurudeva Swami Satyananda Giri Maharaj, counted among the supreme preceptors of Kriya Yoga sadhana.",
      "contentHi": "स्वामी सत्यानन्द गिरि महाराज का आविर्भाव बंगाब्द 1303 के 1 अग्रहायण, रविवार, शुक्ल एकादशी तिथि, 17 नवंबर 1896 ईस्वी को हुआ। उनका जन्म पूर्व बंगाल के विक्रमपुर क्षेत्र के मेघना नगर में हुआ। उनके पिता का नाम श्री मोहिनीमोहन मजुमदार और माता का नाम श्रीमती ताराबासिनी देवी था।\n\nमोहिनीमोहन और ताराबासिनी देवी की प्रथम संतान पुत्र थी। बचपन में स्नेहपूर्वक उनका नाम “ख़ाँदु” रखा गया, जो माता का अत्यंत प्रिय नाम था। बाद में पिता मोहिनीमोहन ने बालक का एक और नाम रखा—“मनमोहन”।\n\nयही बालक मनमोहन आगे चलकर गुरुदेव स्वामी सत्यानन्द गिरि महाराज के रूप में प्रसिद्ध हुए और क्रियायोग साधना के श्रेष्ठ आचार्यों में गिने गए।"
    },
    {
      "id": "family-values-father-influence",
      "titleEn": "3. Family Values & Father's Influence",
      "titleHi": "3. पारिवारिक संस्कार और पिता का प्रभाव",
      "contentEn": "Manmohan's father Sri Mohinimohan Majumdar was pious, principled, art-loving, and independent-minded. The family belonged to the prestigious Kayastha lineage of Vikrampur Pargana in East Bengal.\n\nMohinimohan Babu disliking working under others possessed moral wisdom. He played sitar beautifully and was skilled in painting. Renowned poet Rajkrishna Rai Mahashaya was impressed by his art, guiding him into Kolkata Art College.\n\nIn Kolkata he associated with Brahmo Samaj members, and met Shivnath Shastri and Vijaykrishna Goswami. With their aid he started a school for deaf and mute students at Kolkata City College, which grew into Kolkata Day and Night School.\n\nSuch an environment of religion, education, art, and service deeply influenced young Manmohan.",
      "contentHi": "मनमोहन के पिता श्री मोहिनीमोहन मजुमदार धर्मपरायण, नीतिवान, कलाप्रेमी और स्वतंत्र स्वभाव के व्यक्ति थे। परिवार का संबंध पूर्व बंगाल के विक्रमपुर परगना के प्रतिष्ठित कायस्थ वंश से था।\n\nमोहिनीमोहन बाबू दूसरों के यहाँ नौकरी करना पसंद नहीं करते थे। उनमें नीति-विवेक था। संगीत के प्रति उनकी विशेष रुचि थी और वे सितार बहुत अच्छा बजाते थे। चित्रकला में भी वे अत्यंत कुशल थे। बाल्यकाल से ही उनके हाथ की चित्रकला देखकर परिवार के बड़े-बूढ़े, शिक्षक और विद्वान लोग प्रभावित होते थे।\n\nप्रसिद्ध कवि राजकृष्ण राय महाशय भी उनकी चित्रकला से प्रभावित हुए। उनके मार्गदर्शन से उन्होंने कलकत्ता के आर्ट कॉलेज में प्रवेश लिया।\n\nकलकत्ता में उनका संपर्क ब्रह्म समाज के सदस्यों से हुआ। बाद में उनका परिचय शिवनाथ शास्त्री और विजयकृष्ण गोस्वामी से हुआ। उनकी सहायता से उन्होंने कलकत्ता सिटी कॉलेज के एक कमरे में मूक-बधिर विद्यालय प्रारंभ किया। आगे चलकर गड़पार रोड के पास अपर सर्कुलर रोड में “कलकत्ता डे एंड नाइट स्कूल” की स्थापना हुई।\n\nऐसे धर्म, शिक्षा, कला और सेवा से युक्त वातावरण ने बालक मनमोहन के जीवन पर गहरा प्रभाव डाला।"
    },
    {
      "id": "education-patriotism",
      "titleEn": "4. Education & Religious Sentiment",
      "titleHi": "4. शिक्षा और धर्मभावना",
      "contentEn": "Manmohan grew up in Kolkata. He received early education at home from his parents and was later enrolled in Metro Institution, earning academic awards.\n\nBrahmo worship and rules took deep root in his heart. Teachers praised his intelligence, patience, and serious nature.\n\nDuring the 1905 Swadeshi Movement, Manmohan attended speeches of national leaders at Federation Ground, Bagbazar. Leaders like Surendranath Banerjee kindled intense patriotism in his heart. For this reason, despite Yogananda's later requests, he preferred remaining in India.",
      "contentHi": "मनमोहन कलकत्ता में ही बड़े हुए। उन्होंने प्रारंभिक शिक्षा घर पर माता-पिता से प्राप्त की। बाद में उन्हें मेट्रो इंस्टिट्यूशन में भर्ती किया गया। वे मेधावी छात्र थे और अच्छे परिणाम के कारण वार्षिक पुरस्कार-वितरण उत्सव में पुरस्कृत भी हुए।\n\nब्रह्म धर्म की उपासनाओं और नियमों ने बालक मनमोहन के हृदय में गहरी जगह बना ली। शिक्षकों ने उनकी बुद्धिमत्ता, धैर्य और गंभीर स्वभाव की प्रशंसा की।\n\n1905 के स्वदेशी आंदोलन के समय मनमोहन बागबाजार के फेडरेशन ग्राउंड में स्वदेशी नेताओं के भाषण सुनने जाते थे। राष्ट्रगुरु सुरेन्द्रनाथ बन्द्योपाध्याय जैसे नेताओं के विचारों ने उनके मन में देशप्रेम की भावना को प्रबल किया। बाल्यकाल से ही भारतभूमि के प्रति गहरा प्रेम उनके भीतर स्थापित हो गया था। इसी कारण आगे चलकर संन्यासी योगानन्दजी के आग्रह के बाद भी वे भारतभूमि छोड़कर विदेश जाने के लिए सहज रूप से तैयार नहीं हुए।"
    },
    {
      "id": "sadhu-sanga-renunciation",
      "titleEn": "5. Association with Saints & Awakening of Renunciation",
      "titleHi": "5. साधु-संग और वैराग्य का जागरण",
      "contentEn": "From 1906, his religious spirit grew sharper. Sri Ramakrishna Mission and its acharyas deeply inspired him. He spent hours in meditation and spiritual discussions.\n\nSaints visited his home, where Manmohan and Mukundalal participated in discussions.\n\nOnce an elderly gentleman remarked:\n“See, people outside serve, preach, talk about religion. But that is not real power. Special power lies in sadhana and silence.”\n\nHearing this, Manmohan rejoiced, realizing true spiritual power awakens from inner sadhana.",
      "contentHi": "1906 सन से उनकी धर्मभावना और भी प्रखर हुई। धीरे-धीरे ऐसा समय आया जब सामान्य सांसारिक कार्य उन्हें आकर्षित नहीं करते थे।\n\nश्रीरामकृष्ण मिशन की महानता और आचार्यों के जीवन ने उन्हें अत्यंत प्रभावित किया। साधु-संग, धर्म-चर्चा और आध्यात्मिक जीवन के प्रति उनकी रुचि निरंतर बढ़ती गई। वे घंटों ध्यान, जप और धर्म-विषयों पर चर्चा करते थे। सहपाठी उन्हें शांत और गंभीर स्वभाव का मानते थे।\n\nउनके घर का वातावरण भी धार्मिक था। वहाँ साधु-संतों का आगमन होता रहता था। मनमोहन और मुकुन्दलाल दोनों धर्म-विषयक चर्चाओं में भाग लेते थे।\n\nएक प्रसंग में एक वृद्ध सज्जन ने कहा—\n“देखो, बाहर लोग सेवा करते हैं, प्रचार करते हैं, धर्म की बातें करते हैं। परन्तु ये सब वास्तविक शक्ति नहीं है। विशेष शक्ति तो साधना और मौन में है।”\n\nयह सुनकर मनमोहन अत्यंत आनंदित हुए। उन्हें अनुभव हुआ कि वास्तविक आध्यात्मिक शक्ति भीतर की साधना से आती है।"
    },
    {
      "id": "higher-studies-sri-yukteswar",
      "titleEn": "6. Studies, Dispassion & Spirit of Sannyas",
      "titleHi": "6. अध्ययन, वैराग्य और संन्यास की भावना",
      "contentEn": "In 1915 Manmohan entered Scottish Church College for B.A. Philosophy Honors. Meanwhile Mukundalal prepared to leave for the West to propagate Kriya Yoga.\n\nManmohan harbored an intense desire for renunciation and sannyas. One day after school, Manmohan and Mukunda visited Sri Yukteswar Giri Maharaj, who showered great love and said:\n“The day you realize inner power, the purpose of life will become clear.”\n\nThis statement left a lasting imprint on Manmohan.",
      "contentHi": "1915 में मनमोहन ने स्कॉटिश चर्च कॉलेज में प्रवेश लिया। दर्शनशास्त्र में ऑनर्स लेकर वे बी.ए. करने लगे। उसी समय मुकुन्दलाल बी.ए. पास करके पश्चिमी देशों में क्रियायोग प्रचार हेतु प्रस्थान की तैयारी कर रहे थे।\n\nमनमोहन के भीतर भी संसार त्यागकर संन्यासी बनने की प्रबल इच्छा थी। उनका मन भीतर से वैराग्य में डूब चुका था। वे नियमित रूप से ध्यान-जप करते थे। बाहर से जीवन सामान्य दिखाई देता था, पर भीतर गहरा तप चल रहा था।\n\nउन्होंने निश्चय किया कि जीवन को सार्थक बनाने के लिए केवल पढ़ाई पर्याप्त नहीं है। साधना और आत्मज्ञान ही जीवन का वास्तविक उद्देश्य है।\n\nएक दिन विद्यालय की छुट्टी के बाद मनमोहन अपने सहपाठी श्री मुकुन्द के साथ श्री युक्तेश्वर गिरि महाराज के दर्शन हेतु पहुँचे। वहाँ उन्हें महान आनंद प्राप्त हुआ। महाराज ने उन्हें विशेष स्नेह दिया और कहा—\n“जिस दिन तुम भीतर की शक्ति को पहचान लोगे, उसी दिन जीवन का उद्देश्य स्पष्ट हो जाएगा।”\n\nइस वचन ने मनमोहन के जीवन पर गहरी छाप छोड़ी। धीरे-धीरे उनका मन पूर्ण रूप से साधना और वैराग्य में स्थिर होने लगा।"
    },
    {
      "id": "ashram-education-society",
      "titleEn": "7. Ashram, Education & Social Upliftment",
      "titleHi": "7. आश्रम, शिक्षा और समाज-निर्माण",
      "contentEn": "The initial sadhana site began as a cottage, expanding into an ashram building. Service, social work, Gita study, physical culture, and character-building flourished.\n\nA hostel was attached where students learned discipline and self-reliance under Manmohan's fatherly guidance. To harmonize ashram values with academics, an ideal school model was developed.",
      "contentHi": "प्रारंभिक साधना-स्थल एक कुटिया के रूप में था, जहाँ क्रियावान साधक आते, साधन-भजन करते और धर्म-चर्चा में भाग लेते थे। बाद में उसी कुटिया को केंद्र बनाकर एक बड़े मिट्टी के घर में आश्रम की स्थापना हुई।\n\nयहीं से सेवा, समाज-निर्माण, गीता, व्यायाम, पाठ-पाठन और सांस्कृतिक चर्चाओं का कार्य आरंभ हुआ। धीरे-धीरे ग्रामीण मानव-कल्याण के उद्देश्य से आश्रम का कार्य बढ़ने लगा। आश्रम के वातावरण में छात्रावास भी जुड़ गया। विद्यार्थी आश्रम में रहकर अनुशासन, सेवा, अध्ययन और आत्मनिर्भर जीवन की शिक्षा लेने लगे।\n\nमनमोहन स्वयं दो-चार बालकों को लेकर आश्रम की व्यवस्था देखते थे। रहने, खाने-पीने, पाठ और अनुशासन से जुड़ी बातों का मार्गदर्शन वे स्वयं करते थे। आश्रम में रहने वाले बालक अपने कार्य स्वयं करना सीखते थे।\n\nकुछ समय बाद यह अनुभव हुआ कि आश्रम की शिक्षा और सामान्य विद्यालयी शिक्षा के बीच समन्वय आवश्यक है। इसलिए एक आदर्श विद्यालय स्थापित करने की भावना विकसित हुई, जहाँ विद्यार्थियों को केवल पुस्तक-ज्ञान नहीं, बल्कि चरित्र, सेवा, अनुशासन, श्रम और साधना का भी प्रशिक्षण मिल सके।"
    },
    {
      "id": "ashram-education-gurubhais",
      "titleEn": "8. Ashrama Education & Cooperation of Guru-Brothers",
      "titleHi": "8. आश्रमिक शिक्षा और गुरुभाइयों का सहयोग",
      "contentEn": "Guru-brothers collaborated: Swami Yogananda Giri served as ashram head, Swami Kebalananda guided education. Students called teachers 'Dada'.\n\nIn 1920 when Yogananda left for America, Swami Satyananda shouldered full ashram responsibility, expanding spiritual and social awakening across Bengal and India.",
      "contentHi": "आश्रम और विद्यालय के विकास में गुरुभाइयों ने मिलकर कार्य किया। स्वामी योगानन्द गिरि आश्रमाध्यक्ष हुए और स्वामी केवलानन्द, जिन्हें शांति महाशय के रूप में भी जाना जाता था, शिक्षा और मार्गदर्शन से जुड़े।\n\nछात्र आश्रम में शिक्षकों को दादा कहकर संबोधित करते थे। योगानन्दजी छात्रों के लिए बड़े भाई जैसे थे, और स्वामी सत्यानन्दजी को छोटे स्वामीजी के रूप में देखा जाता था। सत्यानन्दजी सरल रीति से रहते थे, पर उनका अंतःकरण बालकों के प्रति प्रेम से भरा था।\n\nवे अनुशासनप्रिय थे, पर उनका व्यवहार स्नेहपूर्ण था। विद्यार्थियों को साधना, सेवा, अध्ययन और आचरण में उचित दिशा देने का कार्य वे मनोयोग से करते थे।\n\n1920 ईस्वी में स्वामी योगानन्द अमेरिका के आध्यात्मिक धर्म महासम्मेलन में भाग लेने गए। तब आश्रम और गुरु-संघ का बड़ा दायित्व स्वामी सत्यानन्दजी पर आया। उन्होंने गुरुदेव के निर्देशों के अनुसार आश्रम, विद्यालय और संगठनात्मक कार्यों को निष्ठापूर्वक संभाला।\n\nधीरे-धीरे आश्रम का कार्य समाचारपत्रों के माध्यम से दूर-दूर तक फैलने लगा। आश्रम, विद्यालय और क्रियायोग से जुड़े कार्यों के माध्यम से स्वामी सत्यानन्दजी ने बंगाल और भारत के विभिन्न भागों में आध्यात्मिक और सामाजिक जागरण का कार्य किया।"
    },
    {
      "id": "devotion-sri-yukteswar",
      "titleEn": "9. Devotion to Gurudeva Sri Yukteswar Giri Maharaj",
      "titleHi": "9. गुरुदेव श्री युक्तेश्वर गिरि महाराज के प्रति श्रद्धा",
      "contentEn": "Swami Satyananda's life overflowed with devotion to Sri Yukteswar. Following Mahasamadhi of Sri Yukteswar, he served as secretary and acharya, combining strict discipline with deep tender compassion.",
      "contentHi": "स्वामी सत्यानन्दजी का जीवन गुरुदेव श्री युक्तेश्वर गिरि महाराज के प्रति गहरी श्रद्धा और समर्पण से भरा था। जब गुरुदेव श्री युक्तेश्वर गिरि महाराज की महासमाधि का समाचार मिला, तब वे अत्यंत व्यथित हुए। उन्हें यह भी खेद हुआ कि वे समय पर गुरुदेव के दिव्य कार्य में प्रत्यक्ष उपस्थित नहीं रह सके।\n\nपरंतु उन्होंने प्रेमपूर्वक गुरुदेव के कार्यों में सहयोग किया और आश्रम-कार्य, शिक्षा-कार्य तथा क्रियायोग प्रचार को आगे बढ़ाने में पूर्ण निष्ठा दिखाई।\n\nश्री युक्तेश्वर गिरि महाराज के तिरोभाव के बाद वे आश्रम के संघ-सचिव और आचार्य पद से जुड़े। वे अनुशासनप्रिय थे, पर उनका हृदय अत्यंत कोमल था। किसी का दुःख देखते ही उनका मन व्याकुल हो उठता था।"
    },
    {
      "id": "karuna-poor-service",
      "titleEn": "10. Compassion & Service to the Poor and Suffering",
      "titleHi": "10. करुणा और दीन-दुखियों की सेवा",
      "contentEn": "Extremely compassionate to the poor, Swami Satyananda gave his own woolen shawl to a shivering elderly man on a journey.\n\nHe helped a poor shopkeeper, teaching:\n“Help one person and that cycle will support you in return.”\n\n“Do not let ego near. Learn to recognize the human spirit.”\n\nHe often served quietly, affirming:\n“The inner heart has no boundaries.”\n“God manifests in work.”\n“Do not consider anyone small.”",
      "contentHi": "स्वामी सत्यानन्द गिरि महाराज दीन-दरिद्रों के प्रति अत्यंत करुणामय थे। लोगों के कष्ट की बात सुनते ही वे सहायता के लिए तत्पर हो जाते थे।\n\nएक बार यात्रा के दौरान उन्होंने देखा कि एक वृद्ध व्यक्ति सर्दी में काँप रहा है। उन्होंने तुरंत गाड़ी रुकवाई और अपने कंधे का ऊनी शॉल उतारकर उस वृद्ध को ओढ़ा दिया।\n\nकिसी ने उनसे पूछा—“आप कहाँ जाएँगे? यहाँ क्या करेंगे?”\nस्वामीजी मुस्कुराकर बोले—\n“जहाँ जरूरत होगी, वहीं जाऊँगा।”\n\nएक अन्य प्रसंग में उन्होंने एक गरीब दुकानदार को सहायता दी, जो स्वयं समर्थ न होते हुए भी किसी जरूरतमंद की मदद करना चाहता था। स्वामीजी ने उसे धन देकर कहा—\n“एक जन की सहायता करोगे तो वही चक्र फिर तुम्हें सहारा देगा।”\n\nजब वह व्यक्ति बाद में आश्रम आकर स्वामीजी के चरणों में गिर पड़ा, तब स्वामीजी ने कहा—\n“अहंकार को पास मत आने दो। मनुष्य को पहचानना सीखो।”\n\nवे कई बार बिना बताए लोगों की सहायता करते थे। वे कहते थे—\n“अंतःकरण की सीमा नहीं है।”\n“कर्म में ही ईश्वर प्रकट होते हैं।”\n“आप किसी को छोटा मत समझिए।”"
    },
    {
      "id": "seva-hi-dharma",
      "titleEn": "11. Service is Religion",
      "titleHi": "11. सेवा ही धर्म",
      "contentEn": "Once he brought a sick man lying under a Bael tree into his house, nursed him to health, and said: “Serving is its own blessing.”\n\nDuring annual ashram functions, he personally served meals in the kitchen, remarking:\n“All are His will; we are merely instruments.”",
      "contentHi": "एक बार घर के पास बेल के पेड़ के नीचे एक व्यक्ति पड़ा था। लोग उसे पागल समझ रहे थे। स्वामीजी ने पास जाकर देखा और समझ गए कि वह बीमार है। उन्होंने उसे उठाकर घर लाया, सेवा की और स्वस्थ किया। बाद में वह व्यक्ति रोते हुए बोला—\n“मैं आपका ऋणी हूँ।”\nस्वामीजी ने उत्तर दिया—\n“ऋण नहीं, सेवा करना ही अच्छा है।”\n\nस्वामी सत्यानन्दजी सेवा को धर्म मानते थे। यदि किसी व्यक्ति को घर ले जाकर सेवा देना आवश्यक हो, तो वे स्वयं भी पीछे नहीं हटते थे।\n\nएक दिन कुछ गुरुभाई आश्रम के वार्षिक आयोजन में आए। किसी ने पूछा—\n“गुरुदेव, इतने लोगों की व्यवस्था कैसे होगी?”\nस्वामी सत्यानन्द गिरि महाराज ने शांत स्वर में कहा—\n“बाबा, गुरुदेव की कृपा से सब हो जाएगा।”\n\nउन्होंने स्वयं रसोई में जाकर गुरुभाइयों के लिए भोजन की व्यवस्था कराई। वे कहते थे—\n“सभी गुरुभाइयों को अपना समझो।”\n“मेरे घर में आज सबकी सेवा होगी।”\n\nएक भक्त ने पूछा—“गुरुदेव, आप इतना कष्ट क्यों करते हैं?”\nउन्होंने हँसकर उत्तर दिया—\n“सभी उनकी इच्छा है, हम तो उपकरण मात्र हैं।”"
    },
    {
      "id": "tribal-rural-service",
      "titleEn": "12. Work for Tribal & Rural Society",
      "titleHi": "12. आदिवासी और ग्रामीण समाज के लिए कार्य",
      "contentEn": "Swami Satyananda spent time with tribal villagers, starting education, Yajna, sankirtan, and Narayana Seva among them, teaching:\n“Human service is true worship.”\nHe distributed clothes and established permanent tribal welfare programs.",
      "contentHi": "एक समय ग्राम के आदिवासी लोग भी उनके आश्रम में आने लगे। स्वामीजी उनके बीच बैठकर बातें करते, उनकी समस्याएँ सुनते और सहायता करते।\n\nउन्होंने कहा—\n“मानव सेवा ही सच्ची पूजा है।”\n\nउन्होंने आदिवासी समाज के बीच शिक्षा, पाठ, यज्ञ, संकीर्तन और नारायण सेवा का कार्य प्रारंभ कराया। आश्रम के वार्षिक उत्सव में जब अनेक आदिवासी आए और उनके पास उचित वस्त्र नहीं थे, तब स्वामीजी ने कहा—\n“किसी को वस्त्र देने से यदि उसका सम्मान बचता है, तो अवश्य देना चाहिए।”\n\nउस दिन से आदिवासी समाज के लिए विशेष सेवा कार्य और अधिक सक्रिय हो गए।"
    },
    {
      "id": "karmayoga-saman-drishti",
      "titleEn": "13. Karma Yoga & Equal Vision",
      "titleHi": "13. कर्मयोग और समान दृष्टि",
      "contentEn": "Serving all without distinction, he personally served food and said:\n“Karma Yoga means working with your own hands, not just giving discourses.”\nEven in his final days, he instructed:\n“Serve the poorest first.”",
      "contentHi": "आश्रम छोटा था, फिर भी वहाँ आने वालों के लिए प्रेम और सेवा का अभाव नहीं था। एक दिन आश्रम में बहुत अधिक लोग आ गए। कार्यकर्ता चिंतित हो उठे। स्वामीजी ने कहा—\n“जो व्यवस्था होगी, उसी में सबका कल्याण होगा।”\n\nउन्होंने स्वयं कार्यकर्ताओं के साथ भोजन परोसा। वे कहते थे—\n“कर्मयोग का अर्थ केवल उपदेश देना नहीं है, स्वयं कार्य करना भी है।”\n\nउन्होंने लोगों को सिखाया कि सेवा में किसी प्रकार का भेदभाव नहीं होना चाहिए। गरीब, बीमार, साधु, विद्यार्थी—सभी उनके लिए समान थे।\n\nजीवन के अंतिम दिनों में भी उन्होंने सेवा का कार्य बंद नहीं किया। शरीर दुर्बल होने पर भी वे आश्रमवासियों से कहते थे—\n“जो अधिक दरिद्र है, उसकी सहायता पहले करनी होगी।”\n\nएक बार तीन गरीब बालक आश्रम आए। उन्होंने स्वयं उनके भोजन और रात्रि-विश्राम की व्यवस्था की। स्वामीजी बोले—\n“भूखे हाथ आए हैं, अतः हाथ भरकर सेवा देना।”\n\nउनकी सेवा देखकर सभी आश्चर्यचकित हो गए।"
    },
    {
      "id": "upadeshes-teachings",
      "titleEn": "14. Teachings of Swami Satyananda Giri Maharaj",
      "titleHi": "14. स्वामी सत्यानन्द गिरि महाराज के उपदेश",
      "contentEn": "Direct teachings on character building, Guru devotion, Karma Yoga, and inner Kriya Yoga sadhana.",
      "contentHi": "• देह और आत्मा का साधन अलग है, पर शिक्षा दोनों की होनी चाहिए।\n• चरित्र निर्माण ही मनुष्य जीवन का मूल है।\n• श्रीगुरु के निर्देशों का पालन ही जीवन की सफलता है।\n• कर्म करो, फल के लिए नहीं।\n• मन, वचन और कर्म—तीनों को शुद्ध रखो।\n• यदि तुम किसी के भीतर एक गुण भी देखो, तो उसे स्वीकार करो।\n• अपने दोषों को पहचानो।\n• त्याग और सेवा से परिवार, समाज और संसार का कल्याण संभव है।\n• उच्च शिक्षा लेकर स्वयं को ज्ञानी समझना उचित नहीं।\n• भक्ति और अनुशासन के बिना आध्यात्मिक उन्नति नहीं।\n• सामान्य मनुष्य भी ईश्वर की कृपा का पात्र बन सकता है।\n• शरीर रोगी हो सकता है, पर मन को दुर्बल मत होने दो।\n• छोटे-छोटे कार्यों से भी समाज की सेवा की जा सकती है।\n• केवल बाहरी पूजा नहीं, आंतरिक साधना आवश्यक है।\n• शुद्ध साधना से ब्रह्मज्ञान और स्वरूप ज्ञान प्राप्त होता है।\n• सेवा-भाव से कर्म करोगे, तो वास्तविक शांति प्राप्त होगी।\n• कर्तव्य ही सबसे बड़ी सेवा है।\n• भोजन शारीरिक, मानसिक और आध्यात्मिक उन्नति से जुड़ा है, इसलिए शुद्ध भोजन आवश्यक है।\n• यदि कोई क्रियायोग का अभ्यास न भी करे, लेकिन सत्य, सेवा और गुरुभक्ति में स्थित रहे, तो वह ईश्वर-कृपा का अधिकारी बन सकता है।"
    },
    {
      "id": "spiritual-message",
      "titleEn": "15. Spiritual Message",
      "titleHi": "15. आध्यात्मिक संदेश",
      "contentEn": "The life of Brahmarishi Shrimat Swami Satyananda Giri Maharaj teaches that true sadhana manifests in service, compassion, humility, discipline, and character.",
      "contentHi": "ब्रह्मर्षि श्रीमत् स्वामी सत्यानन्द गिरि महाराज का जीवन यह सिखाता है कि सच्ची साधना केवल ध्यान, जप या बाहरी पूजा तक सीमित नहीं है। उसका वास्तविक प्रकाश सेवा, करुणा, विनम्रता, अनुशासन और चरित्र में प्रकट होता है।\n\nउन्होंने दिखाया कि आश्रम केवल साधना का स्थान नहीं, बल्कि शिक्षा, सेवा, समाज-निर्माण और मानव-कल्याण का केंद्र भी हो सकता है। विद्यार्थियों के चरित्र-निर्माण से लेकर आदिवासी समाज की सेवा तक, उनके प्रत्येक कार्य में गुरु-भक्ति और ईश्वर-भाव प्रकट होता है।\n\nउनका जीवन साधकों को यह प्रेरणा देता है कि सेवा में भेदभाव न करें, कर्तव्य को पूजा समझें, मन को दुर्बल न होने दें और गुरु-निर्देशों के अनुसार जीवन को साधना-पथ पर अग्रसर करें।"
    },
    {
      "id": "quote-highlights",
      "titleEn": "16. Quote Highlights",
      "titleHi": "16. Quote Highlights (अमृत वचन)",
      "contentEn": "“Service to humanity is true worship.”\n“Karma Yoga means working with your own hands.”\n“God manifests in action.”\n“Do not consider anyone small.”\n“Duty is the greatest service.”",
      "contentHi": "“मानव सेवा ही सच्ची पूजा है।”\n“कर्मयोग का अर्थ केवल उपदेश देना नहीं है, स्वयं कार्य करना भी है।”\n“कर्म में ही ईश्वर प्रकट होते हैं।”\n“किसी को छोटा मत समझिए।”\n“कर्तव्य ही सबसे बड़ी सेवा है।”"
    },
    {
      "id": "granth-upadesh",
      "titleEn": "17. Scriptures & Teachings",
      "titleHi": "17. ग्रंथ एवं उपदेश",
      "contentEn": "Swami Satyananda Giri Maharaj's life incidents, teachings, and philosophy of service are invaluable spiritual heritage for seekers.",
      "contentHi": "स्वामी सत्यानन्द गिरि महाराज के जीवन-प्रसंग, उपदेश और सेवा-दर्शन साधकों के लिए अमूल्य आध्यात्मिक धरोहर हैं। उनके उपदेशों में चरित्र-निर्माण, गुरु-भक्ति, सेवा, साधना, अनुशासन और मानव-कल्याण का सरल और गहन मार्गदर्शन मिलता है।\n\nजीवन-प्रसंग, उपदेश, आश्रम-इतिहास और क्रियायोग परंपरा।"
    },
    {
      "id": "divya-darshan-citravali",
      "titleEn": "18. Divine Vision & Gallery",
      "titleHi": "18. दिव्य दर्शन एवं चित्रावली",
      "contentEn": "Sacred portraits and visual history of Swami Satyananda Giri Maharaj and the ashram tradition.",
      "contentHi": "दिव्य दर्शन एवं चित्रावली — गुरुदेव स्वामी सत्यानन्द गिरि महाराज के पावन चित्र और आश्रम परंपरा की पावन चित्रावली।"
    },
    {
      "id": "source-note",
      "titleEn": "19. Source Note",
      "titleHi": "19. Source Note (स्रोत टिप्पणी)",
      "contentEn": "This life story is presented based on original materials available in the ashram tradition, compiled accounts of the guru lineage, and incidents preserved by devotees.",
      "contentHi": "यह जीवन-प्रसंग आश्रम परंपरा में उपलब्ध मूल सामग्री, गुरु-परंपरा से जुड़े संकलित विवरणों और भक्तों द्वारा संरक्षित प्रसंगों के आधार पर प्रस्तुत किया गया है।"
    }
  ],
  "lilasList": [
    {
      "titleEn": "1. Devotee Service & Divine Rain Miracle at Bhagwanpur",
      "titleHi": "1. भगवानपुर में भक्त-सेवा और वर्षा-निवारण दिव्य प्रसंग",
      "textEn": "When storm clouds threatened to ruin food for thousands of devotees, Swami Satyananda declared rain would not fall until service was completed — and not a drop fell until all were fed.",
      "textHi": "जब भगवानपुर में आयोजन के समय भारी वर्षा का भय उत्पन्न हुआ, तब स्वामी सत्यानन्दजी के संकल्प से आयोजन पूर्ण होने तक एक बूँद जल नहीं गिरा और कार्य संपन्न होते ही वर्षा हुई।"
    },
    {
      "titleEn": "2. Birth & Family Roots in Vikrampur (1896)",
      "titleHi": "2. विक्रमपुर (1896) में जन्म व बाल्यकाल",
      "textEn": "Born on 17 November 1896 to Mohinimohan and Tarabasini Devi in Meghna Nagar, Vikrampur. Affectionately named 'Khandu' and 'Manmohan'.",
      "textHi": "17 नवंबर 1896 को पूर्व बंगाल के विक्रमपुर (मेघना नगर) में जन्म। बाल्यावस्था में स्नेहपूर्वक नाम 'ख़ाँदु' व 'मनमोहन' रखा गया।"
    },
    {
      "titleEn": "3. Founding Dihika & Ranchi Brahmacharya Vidyalaya (1917-1920)",
      "titleHi": "3. दिहिका व राँची ब्रह्मचर्य विद्यालय का ऐतिहासिक नेतृत्व",
      "textEn": "Co-founded the educational institution with Yogananda, leading Ranchi Ashram for over two decades after Yogananda departed for America in 1920.",
      "textHi": "योगानन्दजी के साथ ब्रह्मचर्य विद्यालय की स्थापना की और 1920 में उनके अमेरिका जाने के पश्चात् दो दशकों तक राँची आश्रम का कुशल नेतृत्व किया।"
    },
    {
      "titleEn": "4. Service to Poor & Tribal Communities at Sevayatan",
      "titleHi": "4. सेवायतन में संथाल व शबर आदिवासियों की निष्काम सेवा",
      "textEn": "Established Shivayatan Ashram, organizing free education, medical care, clothing, and food distribution for impoverished tribal families.",
      "textHi": "सेवायतन में शिवायतन आश्रम बनाकर गरीब व आदिवासी बस्तियों में निःशुल्क शिक्षा, वस्त्र, चिकित्सा और अन्नदान का महान सेवा-यज्ञ चलाया।"
    },
    {
      "titleEn": "5. Authoring 'Sri Sri Swami Sri Yukteswar Giri Jivani' & Gita Commentaries",
      "titleHi": "5. 'श्री श्री स्वामी युक्तेश्वर गिरि जीवनी' व गीता भाष्य की रचना",
      "textEn": "Penned the authentic definitive biography of Swami Sri Yukteswar Giri Maharaj and immortal commentaries on the Srimad Bhagavad Gita and Yoga Sutras.",
      "textHi": "अपने पूज्य गुरुदेव स्वामी श्री युक्तेश्वरजी की प्रामाणिक जीवनी और श्रीमद्भगवद्गीता व योगसूत्र पर उत्कृष्ट ग्रंथों का प्रणयन किया।"
    }
  ]
},
  {
  "id": "jagadananda-giri",
  "order": 5,
  "name": "Swami Jagadananda Giri Maharaj",
  "sanskritName": "परम प्रेममय श्रीमत् स्वामी जगदानन्द गिरि महाराज",
  "title": "Founder Master of Brahmarishi Satyananda Sannyas Ashram (1934 – 1987)",
  "titleHindi": "तप, सेवा, करुणा और क्रियायोग साधना के दिव्य संत",
  "period": "1934 – 1987",
  "image": "/images/gurus/guru_5.png",
  "imageAltText": "Param Preme-maya Shrimat Swami Jagadananda Giri Maharaj Portrait",
  "seoMetaTitle": "Swami Jagadananda Giri Maharaj Biography & Teachings",
  "seoMetaDescription": "Official biography and complete life history of Param Preme-maya Shrimat Swami Jagadananda Giri Maharaj - Founder of Brahmarishi Satyananda Sannyas Ashram Belpahari.",
  "urlSlug": "/guru-parampara/jagadananda-giri",
  "bio": "Param Premamayi Shrimat Swami Jagadananda Giri Maharaj (1934 – 1987) was an embodiment of penance, a steadfast sage, and a compassionate saint. His life was a divine example of renunciation, devotion to Guru, Kriya Yoga sadhana, service, and public welfare.",
  "bioHindi": "परम प्रेममय श्रीमत् स्वामी जगदानन्द गिरि महाराज (21 मई 1934 – 1987) एक तपोमूर्ति, स्थिरप्रज्ञ महात्मा और करुणामय संत थे। उनका जीवन वैराग्य, गुरु-भक्ति, क्रियायोग साधना, सेवा और लोककल्याण का दिव्य उदाहरण था।",
  "introductionEn": "Param Premamayi Shrimat Swami Jagadananda Giri Maharaj was an embodiment of penance, a steadfast sage, and a compassionate saint. His life was a divine example of renunciation, devotion to Guru, Kriya Yoga sadhana, service, and public welfare.\n\nFrom childhood, extraordinary spiritual signs were evident in his life. His mind did not take delight in ordinary worldly attractions. He would often gaze steadily at the sky, as if a deep spiritual remembrance was awakening within him.\n\nLater, this child Jagannath became famous as Brahmachari Jagadananda and then Swami Jagadananda Giri Maharaj. He inspired countless people on the path of sadhana, truth, service, divine remembrance, and self-knowledge.",
  "introductionHi": "परम प्रेममय श्रीमत् स्वामी जगदानन्द गिरि महाराज एक तपोमूर्ति, स्थिरप्रज्ञ महात्मा और करुणामय संत थे। उनका जीवन वैराग्य, गुरु-भक्ति, क्रियायोग साधना, सेवा और लोककल्याण का दिव्य उदाहरण था।\n\nबाल्यकाल से ही उनके जीवन में असाधारण आध्यात्मिक संकेत दिखाई देते थे। उनका मन संसार के सामान्य आकर्षणों में अधिक नहीं रमता था। वे अक्सर स्थिर होकर आकाश की ओर देखते रहते, मानो उनके भीतर किसी गहरे आध्यात्मिक स्मरण का जागरण हो रहा हो।\n\nआगे चलकर यही बालक जगन्नाथ, ब्रह्मचारी जगदानन्द और फिर स्वामी जगदानन्द गिरि महाराज के रूप में प्रसिद्ध हुए। उन्होंने अनेक लोगों को साधना, सत्य, सेवा, नामस्मरण और आत्मज्ञान के मार्ग पर प्रेरित किया।",
  "keyTeachings": [
    "Without understanding the purpose of life, one cannot progress.",
    "Human life is not merely for eating, drinking, and sense enjoyment.",
    "Knowing the Self is the real goal of life.",
    "True religion makes a person humble, compassionate, and truthful.",
    "Kriya Yoga, Pranayama, Japa, and Meditation purify life.",
    "Speak less, serve more.",
    "Speak the truth and serve your parents.",
    "Chant the divine name of God.",
    "Both sadhana and service are essential for life.",
    "Do not fear; remember God."
  ],
  "keyTeachingsHindi": [
    "जीवन का उद्देश्य समझे बिना मनुष्य आगे नहीं बढ़ सकता।",
    "मनुष्य का जीवन केवल खाने-पीने और भोग के लिए नहीं है।",
    "आत्मा को जानना ही जीवन का वास्तविक उद्देश्य है।",
    "सच्चा धर्म मनुष्य को विनम्र, दयालु और सत्यनिष्ठ बनाता है।",
    "क्रियायोग, प्राणायाम, जप और ध्यान जीवन को पवित्र बनाते हैं।",
    "कम बोलो, अधिक सेवा करो।",
    "सत्य बोलो और माता-पिता की सेवा करो।",
    "ईश्वर का नाम जपो।",
    "साधना और सेवा, दोनों जीवन के लिए आवश्यक हैं।",
    "भय मत करो, भगवान को स्मरण करो।"
  ],
  "quote": "Eat, sleep, speak less, serve more.",
  "quoteHindi": "खाओ, सोओ, कम बोलो, अधिक सेवा करो।",
  "quotesHindiList": [
    "खाओ, सोओ, कम बोलो, अधिक सेवा करो।",
    "मनुष्य का जीवन केवल खाने-पीने और भोग के लिए नहीं है।",
    "आत्मा को जानना ही जीवन का वास्तविक उद्देश्य है।",
    "सच्चा धर्म मनुष्य को विनम्र, दयालु और सत्यनिष्ठ बनाता है।",
    "भय मत करो। भगवान को स्मरण करो।"
  ],
  "structuredSections": [
    {
      "id": "birth-family",
      "titleEn": "1. Birth & Family Introduction",
      "titleHi": "1. जन्म और पारिवारिक परिचय",
      "contentEn": "Swami Jagadananda Giri Maharaj appeared on Friday, 4 Jyeshtha 1341 Bangabda (21 May 1934 AD). He was born in Kiyari village under Dantan police station in undivided West Medinipur district.\n\nHis father's name was Shrimat Natabar Maity and his mother's name was Srimati Kshiroda Devi. He was the youngest of two brothers and two sisters. His elder brother was Vikramchandra, and his sisters were Ananda and Subhada.\n\nDue to deep affection from his parents, he was named 'Jagannath'. At home he was lovingly called 'Jaga'. Being the youngest, he was beloved by all, yet from early childhood a distinct seriousness and spiritual mood was visible in him.",
      "contentHi": "स्वामी जगदानन्द गिरि महाराज का आविर्भाव बंगाब्द १३४१ के ४ ज्येष्ठ, शुक्रवार, २१ मई १९३४ ईस्वी को हुआ। उनका जन्म अविभाजित पश्चिम मेदिनीपुर जिले के दांतन थाना अंतर्गत कियारी नामक गाँव में हुआ।\n\nउनके पिता का नाम श्रीमत् नटबर माइति और माता का नाम श्रीमती क्षीरोदा देवी था। दो भाई और दो बहनों में वे सबसे छोटे थे। बड़े भाई का नाम विक्रमचंद्र तथा बहनों के नाम आनंदा और सुभदा थे।\n\nमाता-पिता के अत्यंत स्नेह के कारण उनका नाम “जगन्नाथ” रखा गया। घर में उन्हें प्रेम से “जगा” कहकर पुकारा जाता था। परिवार में सबसे छोटे होने के कारण वे सबके दुलारे थे, परंतु बचपन से ही उनमें एक अलग प्रकार की गंभीरता और आध्यात्मिक भाव दिखाई देता था।"
    },
    {
      "id": "childhood-signs",
      "titleEn": "2. Spiritual Signs of Childhood",
      "titleHi": "2. बाल्यकाल के आध्यात्मिक संकेत",
      "contentEn": "Child Jagannath was not restless like ordinary children. Sometimes he would sit still and gaze absently in one direction. Mother Kshiroda Devi sometimes worried if some unseen influence had touched the child.\n\nOnce the elderly family priest was called. Observing the child's characteristics, he remarked that this was no ordinary trait; this child would become a true 'Jagannath' in the future. He indicated that this child would inspire many toward truth and the path of Brahman.\n\nMother Kshiroda Devi was pious and devout. She narrated stories from the Ramayana and Mahabharata to the children. One evening while listening to a tale, child Jagannath pointed to the sky and asked, 'What is that?' Mother told him about the divine land of the Himalayas, holy saints, and penance. This event became a clear sign of his future spiritual journey.",
      "contentHi": "बालक जगन्नाथ सामान्य बालकों की तरह चंचल नहीं थे। वे कभी-कभी स्थिर होकर अन्यमनस्क भाव से एक दिशा में निहारते रहते। माता क्षीरोदा देवी को कभी-कभी चिंता होती कि बच्चे को कोई अदृश्य प्रभाव तो नहीं लग गया।\n\nएक बार घर के वृद्ध पुरोहित महाशय को बुलाया गया। उन्होंने बालक के लक्षण देखकर कहा कि यह कोई सामान्य बात नहीं है; यह बालक आगे चलकर “जगन्नाथ” बनेगा। उन्होंने संकेत दिया कि यह बालक आगे चलकर अनेक लोगों को सत्य और ब्रह्ममार्ग की ओर प्रेरित करेगा।\n\nमाता क्षीरोदा देवी धर्मप्राणा और भक्तिमयी थीं। वे घर के बच्चों को रामायण और महाभारत की कथाएँ सुनाती थीं। एक दिन संध्या समय कथा सुनते हुए बालक जगन्नाथ ने आकाश की ओर इशारा करके पूछा—“वह क्या है?” माता ने उसे देवभूमि हिमालय, साधु-संतों और तपस्या की बात बताई। यह घटना मानो उनके जीवन के भविष्य मार्ग का संकेत बन गई।"
    },
    {
      "id": "education-renunciation",
      "titleEn": "3. Education & Awakening of Renunciation",
      "titleHi": "3. शिक्षा और वैराग्य का जागरण",
      "contentEn": "His early education began in the village primary school. He was highly proficient in studies and quickly impressed teachers with his intelligence. Later he was enrolled in a lower secondary school in a nearby village.\n\nThe school principal, Sri Manmatha Dey Mahashaya, was deeply impressed by his faith, devotion, and brilliance, holding special affection for student Jagannath.\n\nOne day during childhood while returning from school, under a large banyan tree beside the path, he received darshan of an ascetic saint with matted locks. The saint's radiant demeanor, joyful face, and affectionate voice attracted young Jagannath. The sannyasi squeezed his matted hair, extracted pure water, and gave him a full glass. Upon drinking that sweet water, his hunger, thirst, and fatigue vanished instantly.\n\nThis incident awakened a profound inquiry within his mind: 'What power is this? Is such a state attained through sadhana?' Thereafter, dispassion and yearning for God grew steadily within him.",
      "contentHi": "गाँव की पाठशाला में उनकी प्रारंभिक शिक्षा आरंभ हुई। वे पढ़ाई में अत्यंत दक्ष थे और शीघ्र ही शिक्षकों को अपनी बुद्धिमत्ता से प्रभावित करने लगे। बाद में उन्हें पास के गाँव के निम्न माध्यमिक विद्यालय में भर्ती कराया गया।\n\nविद्यालय के प्रधान शिक्षक श्री मन्मथ दे महाशय उनकी श्रद्धा, भक्ति और मेधा से प्रभावित थे। वे छात्र जगन्नाथ से विशेष स्नेह रखते थे।\n\nबाल्यकाल में एक दिन विद्यालय से लौटते समय मार्ग के पास एक विशाल वटवृक्ष के नीचे उन्हें एक जटाजूटधारी संन्यासी के दर्शन हुए। संन्यासी का तेजस्वी स्वरूप, प्रसन्न मुखमंडल और स्नेहपूर्ण वाणी बालक जगन्नाथ को आकर्षित कर गई। उस संन्यासी ने अपनी जटाओं को निचोड़कर उनमें से जल निकाला और उन्हें गिलास भरकर दे दिया। वह मधुर जल पीते ही उनकी भूख-प्यास और थकान मिट गई।\n\nइस घटना ने उनके मन में गहरा प्रश्न जगा दिया—यह कैसी शक्ति है? क्या साधना से ऐसी अवस्था प्राप्त होती है? इसके बाद उनके भीतर वैराग्य और ईश्वर-जिज्ञासा बढ़ती गई।"
    },
    {
      "id": "life-death-soul",
      "titleEn": "4. Inquiry into Life, Death & Soul",
      "titleHi": "4. जीवन, मृत्यु और आत्मा की जिज्ञासा",
      "contentEn": "After school studies, his father arranged to send him to Kolkata. Around that time, his father passed away. This event left a profound impact on his mind.\n\nAn intense inquiry into the mysteries of life and death awakened within him. He pondered: 'Where does man come from? Where does he go after death? What is the real purpose of life?'\n\nMother Kshiroda Devi observed his detached nature with concern, praying to God. After some time, his mother also fell ill. Jagannath served her with deep devotion. After her passing, he felt that his earthly duties toward his parents were complete.\n\nThe resolve for renunciation of home and intense sadhana became overwhelming within him.",
      "contentHi": "विद्यालय की पढ़ाई के बाद उनके पिता ने उन्हें कोलकाता भेजने की व्यवस्था की। उसी समय उनके पिता का देहांत हो गया। इस घटना ने उनके मन पर गहरा प्रभाव डाला।\n\nउनके भीतर जीवन और मृत्यु के रहस्य को जानने की तीव्र जिज्ञासा उठने लगी। वे सोचते—मनुष्य कहाँ से आता है? मृत्यु के बाद कहाँ जाता है? जीवन का वास्तविक उद्देश्य क्या है?\n\nमाता क्षीरोदा देवी ने उनके विरक्त स्वभाव को देखा और चिंतित हुईं, परंतु वे केवल ईश्वर से प्रार्थना करती रहीं। कुछ समय बाद माता भी अस्वस्थ हुईं। जगन्नाथ ने अत्यंत निष्ठा से उनकी सेवा की। माता के देहांत के बाद उन्हें लगा कि माता-पिता के प्रति उनका लौकिक कर्तव्य पूर्ण हो गया है।\n\nउनके भीतर गृहत्याग और साधना की भावना प्रबल हो चुकी थी।"
    },
    {
      "id": "renunciation-guru-sadhana",
      "titleEn": "5. Renunciation of Home, Darshan of Guru & Search for Sadhana",
      "titleHi": "5. गृहत्याग, गुरुदर्शन और साधना की खोज",
      "contentEn": "In 1962, one evening, Jagannath left home. He carried only copies of the Bhagavad Gita and Durga Saptashati, possessing nothing besides the clothes he wore. Walking on foot, he arrived at Bhadrakali village where he met Swami Ushananda Giri. Swami Ushananda Giri guided him to Shivayatan, the ashram of Swami Satyananda Giri Maharaj.\n\nUpon reaching Shivayatan Ashram, Jagannath had darshan of Acharya Shrimat Swami Satyananda Giri Maharaj. Seeing Gurudeva, a profound devotion awakened within him. He felt complete surrender at his holy feet, spontaneously saying, 'I wish to serve.'\n\nSwami Satyananda Giri Maharaj realized that this youth had not come out of mere external attraction. He served him tea with his own hands and lovingly instructed: 'Jagannath, if you seek bliss, do not return home. One day you will learn much. I will give you initiation.'\n\nLiving in the ashram, Jagannath's spiritual experiences deepened. He listened to the glories of Gurudeva Swami Satyananda Giri Maharaj and became completely drawn to him. The ashram environment, Guru's proximity, and flow of sadhana transformed his life from within.\n\nLater, Swami Satyananda Giri Maharaj bestowed Brahmacharya initiation upon Jagannath and initiated him into Kriya Yoga. Gurudeva gave him the golden life principle: 'Eat, sleep, speak less, serve more.'\n\nThis precept became the foundational sadhana mantra of Jagannath's life.",
      "contentHi": "१९६२ में एक दिन संध्या समय जगन्नाथ घर से निकल पड़े। उनके पास गीता और दुर्गा सप्तशती की पुस्तकें थीं, और पहने हुए वस्त्रों के अतिरिक्त उनके पास कुछ भी नहीं था। वे पैदल चलते हुए भद्रकाली नामक गाँव पहुँचे, जहाँ उनकी भेंट स्वामी उषानन्द गिरि से हुई। स्वामी उषानन्द गिरि ने उन्हें शिवायतन, अर्थात् स्वामी सत्यानन्द गिरि महाराज के आश्रम, तक पहुँचाया।\n\nशिवायतन आश्रम पहुँचकर जगन्नाथ ने आचार्य श्रीमत् स्वामी सत्यानन्द गिरि महाराज के दर्शन किए। गुरुदेव को देखते ही उनके भीतर गहरा श्रद्धा-भाव जाग उठा। उन्हें अनुभव हुआ कि वे स्वयं को पूर्ण रूप से उनके चरणों में समर्पित कर सकते हैं। उनके मुख से सहज ही निकला—“मैं सेवा करना चाहता हूँ।”\n\nस्वामी सत्यानन्द गिरि महाराज ने समझ लिया कि यह युवक केवल बाहरी आकर्षण से नहीं आया है। उन्होंने उसे अपने हाथों से चाय पिलाई और प्रेमपूर्वक शिक्षा दी। उन्होंने कहा—“यदि जगन्नाथ, तुम्हें आनंद चाहिए तो घर मत जाओ। एक दिन बहुत कुछ सीखोगे। तुम्हें दीक्षा दूँगा।”\n\nआश्रम में रहकर जगन्नाथ के आध्यात्मिक अनुभव गहरे होने लगे। वे श्रीगुरुदेव स्वामी सत्यानन्द गिरि महाराज के गुणगान सुनते और धीरे-धीरे उनके प्रति पूर्ण रूप से आकर्षित होते गए। आश्रम का वातावरण, गुरु-सान्निध्य और साधना की धारा उनके जीवन को भीतर से बदलने लगी।\n\nकुछ समय बाद स्वामी सत्यानन्द गिरि महाराज ने जगन्नाथ को ब्रह्मचारी संस्कार प्रदान किया और क्रियायोग साधना-पथ में दीक्षित किया। गुरुदेव ने उन्हें जीवन का उच्च आदर्श बताते हुए कहा—“खाओ, सोओ, कम बोलो, अधिक सेवा करो।”\n\nयह उपदेश जगन्नाथ के जीवन का साधना-सूत्र बन गया।"
    },
    {
      "id": "brahmachari-jagadananda",
      "titleEn": "6. Brahmachari Jagadananda",
      "titleHi": "6. ब्रह्मचारी जगदानन्द",
      "contentEn": "After receiving Kriya Yoga, Jagannath's life was transformed. He devoted his time regularly to Kriya practice, Vedanta, Gita, and Yogavani study. His mind settled securely at Gurudeva's lotus feet.\n\nAfter some time, Sri Gurudeva Swami Satyananda Giri Maharaj bestowed formal Brahmacharya vows upon him, giving him the new name 'Brahmachari Jagadananda'.\n\nHe was entrusted with leading regular study and prayers for students at the ashram residential school. Serving the elders, he became beloved by all. His high character, humility, and spirit of service deeply inspired both teachers and students.",
      "contentHi": "क्रियायोग ग्रहण करने के बाद जगन्नाथ का जीवन बदल गया। वे नियमित रूप से क्रियाभ्यास, वेदांत, गीता और योगवाणी के अध्ययन में समय बिताने लगे। उनका मन गुरु-चरणों में स्थिर होता गया।\n\nकुछ समय बाद श्रीगुरुदेव स्वामी सत्यानन्द गिरि महाराज ने उन्हें ब्रह्मचर्य संस्कार प्रदान किया और नया नाम दिया—“ब्रह्मचारी जगदानन्द।”\n\nआश्रम के आवासीय विद्यालय में छात्रों की नियमित पाठ-प्रार्थना का दायित्व उन्हें दिया गया। वे गुरुजनों की सेवा करते हुए सभी के प्रिय बन गए। उनके आचार-विचार, विनम्रता और सेवा-भाव ने आश्रम के शिक्षकों और विद्यार्थियों को प्रभावित किया।"
    },
    {
      "id": "parivrajan-tapasya",
      "titleEn": "7. Wandering Pilgrimage & Penance",
      "titleHi": "7. परिव्राजन और तपस्या",
      "contentEn": "With the permission of his preceptors, he set out as a wandering monk (Parivrajaka). He visited holy pilgrimage sites such as Rishikesh, Haridwar, Gangotri, Yamunotri, Uttarkashi, Ayodhya, Vrindavan, Kashi, and Gaya.\n\nStaying at various ashrams, he performed selfless service and received the blessings of holy saints. In Uttarkashi he engaged in intense penance. In Kashi Dham he visited Yogiraj Sri Sri Lahiri Mahasaya's ancestral home and sacred Shiva Lingam. After worshiping Lord Vishwanath and Mother Annapurna, he proceeded toward Gaya Dham.\n\nDuring his pilgrimage he enjoyed the holy company of many great souls. Residing in caves, mountain peaks, and secluded places, he engaged in deep sadhana and penance. This wandering period further fortified his dispassion, devotion to sadhana, and spirit of service.",
      "contentHi": "कुछ समय बाद गुरुजनों की अनुमति से वे परिव्राजक बनकर यात्रा पर निकले। उन्होंने ऋषिकेश, हरिद्वार, गंगोत्री, यमुनोत्री, उत्तरकाशी, अयोध्या, वृन्दावन, काशी और गया जैसे पवित्र स्थानों की यात्रा की।\n\nअनेक आश्रमों में रहकर उन्होंने सेवा की और साधु-संतों का आशीर्वाद प्राप्त किया। उत्तरकाशी में उन्होंने कुछ समय तपस्या की। काशीधाम में उन्होंने श्रीश्री लाहिड़ी बाबा के गृह और पवित्र शिवलिंग के दर्शन किए। विश्वनाथ और अन्नपूर्णा माता के दर्शन के बाद वे गया धाम की ओर गए।\n\nयात्रा के दौरान उन्हें अनेक महात्माओं का सान्निध्य मिला। गुफाओं, पर्वतीय प्रदेशों और एकांत स्थलों में रहकर उन्होंने साधना और तपस्या की। इस परिव्राजन ने उनके भीतर वैराग्य, साधना-निष्ठा और सेवा-भाव को और अधिक दृढ़ किया।"
    },
    {
      "id": "ekantavas-lokakalyan",
      "titleEn": "8. Seclusion & Public Welfare",
      "titleHi": "8. एकांतवास और लोककल्याण",
      "contentEn": "After 1972, he began living in seclusion in mountains and dense forests. Sometimes in caves, under trees, or in deserted spots, he remained absorbed in meditation and sadhana.\n\nPeople from Bankura, Purulia, Medinipur, Belpahari, and Garhbetani regions began visiting him. Some sought healing, some mental peace, and others spiritual guidance.\n\nSwami Jagadananda instructed everyone in simple language. Village folk fondly called him 'Chalte-Phirte Sadhu Baba' (The Wandering Holy Saint). He never asked anything from anyone, remaining content with whatever arrived spontaneously. Often he stayed hungry himself to feed others.\n\nHe exhorted youth to give up intoxicants, speak truth, serve parents, and chant the divine name of God. Countless lives were transformed through contact with him.",
      "contentHi": "१९७२ के बाद वे पहाड़ों और जंगलों में एकांतवास करने लगे। कभी किसी गुफा में, कभी वृक्ष के नीचे, तो कभी निर्जन स्थानों में वे ध्यान और साधना में लीन रहते।\n\nबाँकुड़ा, पुरुलिया, मिदनापुर, बेलपहाड़ी और गड़बेतानी क्षेत्र के अनेक लोग उनसे मिलने आने लगे। कोई रोगमुक्ति चाहता, कोई मानसिक शांति, तो कोई आध्यात्मिक मार्गदर्शन।\n\nजगदानन्दजी सभी को सरल भाषा में उपदेश देते। गाँव के सामान्य लोग उन्हें “चलते-फिरते साधु बाबा” कहते थे। वे किसी से कुछ माँगते नहीं थे। जो मिल जाता, उसी में संतुष्ट रहते। कई बार वे स्वयं भूखे रहकर भी दूसरों को भोजन करा देते।\n\nउन्होंने युवकों को नशा छोड़ने, सत्य बोलने, माता-पिता की सेवा करने और ईश्वर का नाम जपने का उपदेश दिया। अनेक लोगों के जीवन में उनके संपर्क से परिवर्तन आने लगा।"
    },
    {
      "id": "ashram-sadhana-prachar",
      "titleEn": "9. Ashram & Propagation of Sadhana",
      "titleHi": "9. आश्रम और साधना-प्रचार",
      "contentEn": "Under Swami Jagadananda's divine influence, the ashram atmosphere radiated peace. In 1971, he established this ashram and named it 'Brahmarishi Satyananda Sannyas Ashram' in memory of his Gurudeva. It subsequently grew into an important center for sadhana, service, and Kriya Yoga tradition.\n\nAnnual celebrations commenced, drawing holy saints and devotees from across the country. Devotees arrived from Tarakeswar, Kashi, Haridwar, Dasnagar, Bankura, Kolaghat, and beyond.\n\nGradually this place gained fame as a sacred penance ground akin to ancient hermitages. Inspired by Swami Jagadananda, branch hermitages were established in various regions.\n\nBestowing Brahmacharya vows, he educated people in sadhana and disciplined living. Assemblies, conferences, and spiritual discourses were organized for propagating Kriya Yoga. Countless souls were touched by his renunciation, character, and words.",
      "contentHi": "जगदानन्दजी के प्रभाव से आश्रम का वातावरण दिव्य हो उठा। सन् १९७१ में उन्होंने इस आश्रम की स्थापना की और अपने गुरुदेव की स्मृति में इसका नाम “ब्रह्मर्षि सत्यानन्द संन्यास आश्रम” रखा। यह आश्रम आगे चलकर साधना, सेवा और क्रियायोग परंपरा का महत्वपूर्ण केंद्र बना।\n\nबाद में वार्षिक उत्सव आयोजित होने लगे। देश के विभिन्न स्थानों से साधु-संत और भक्त आने लगे। तारकेश्वर, काशी, हरिद्वार, दासनगर, बाँकुड़ा, कोलाघाट और अन्य स्थानों से लोग आश्रम पहुँचने लगे।\n\nधीरे-धीरे यह स्थान प्राचीन ऋषियों की तपोभूमि की भाँति प्रसिद्ध हुआ। जगदानन्दजी की प्रेरणा से विभिन्न स्थानों में शाखा आश्रम स्थापित हुए।\n\nवे ब्रह्मचारी संस्कार देकर लोगों को साधना और अनुशासित जीवन की शिक्षा देते थे। क्रियायोग के प्रचार-प्रसार के लिए सभा, सम्मेलन और शिक्षादान का आयोजन होने लगा। उनके त्याग, चरित्र और वचनों से असंख्य लोग प्रभावित हुए।"
    },
    {
      "id": "karuna-alaukik-lila",
      "titleEn": "10. Compassion & Miraculous Lilas",
      "titleHi": "10. करुणा और अलौकिक लीला",
      "contentEn": "Swami Jagadananda Giri Maharaj's life was intertwined with boundless compassion and extraordinary spiritual events.\n\nUnwavering Devotion in Service:\nOnce Swami Jagadananda was carrying food for his Gurudeva Swami Satyananda Giri Maharaj. On the way, a scorpion stung him. The pain was excruciating, yet he allowed no interruption in service. He brushed off the scorpion and brought the food platter to Gurudeva.\nGurudeva Swami Satyananda Giri Maharaj immediately perceived his state and expressed deep compassion and marvel at his endurance for Guru-service. Service for him was not an external duty, but a living form of Guru-devotion and sadhana.\n\nThe Serpent Incident:\nOn another occasion, a snake was crawling across Jagadananda's chest. Devotees panicked, but Jagadananda calmly remarked, 'This is its home; I am a guest here.' A Shiva temple was built on that very spot.\n\nThe Tiger Encounter:\nSitting near the Gadrasini mountain waterfall, a tiger approached to drink water. Both looked at each other for some time. Swamiji said, 'If you are hungry, eat me.' Hearing this, the tiger quietly turned around and returned to the forest.\nSuch events reflect his fearless nature, compassion for all living beings, and spiritual strength.",
      "contentHi": "स्वामी जगदानन्द गिरि महाराज का जीवन करुणा और अद्भुत आध्यात्मिक घटनाओं से जुड़ा हुआ था।\n\nसेवा में अटूट निष्ठा का प्रसंग\nएक बार जगदानन्दजी अपने गुरुदेव स्वामी सत्यानन्द गिरि महाराज के लिए भोजन लेकर जा रहे थे। मार्ग में उन्हें एक बिच्छू ने डंक मार दिया। पीड़ा अत्यंत तीव्र थी, फिर भी उन्होंने सेवा में कोई बाधा नहीं आने दी। उन्होंने बिच्छू को हटाया और भोजन की थाली लेकर गुरुदेव के पास पहुँचे।\nगुरुदेव स्वामी सत्यानन्द गिरि महाराज ने उनकी अवस्था को तुरंत समझ लिया। उन्होंने करुणा और आश्चर्य से कहा कि सेवा के लिए उन्होंने इतना कष्ट सह लिया।\nइस प्रसंग से जगदानन्दजी की गुरु-सेवा, सहनशीलता और समर्पण स्पष्ट दिखाई देता है। उनके लिए सेवा केवल बाहरी कर्तव्य नहीं थी, बल्कि गुरु-भक्ति और साधना का जीवंत रूप थी।\n\nसर्प-प्रसंग\nएक अन्य प्रसंग में जगदानन्दजी के वक्ष पर साँप घूम रहा था। उसे देखकर भक्त भयभीत हुए, पर बाद में जगदानन्दजी ने शांत भाव से कहा—“यह उसका घर है, मैं यहाँ अतिथि हूँ।” इसी स्थल पर आगे चलकर एक शिवालय बना।\n\nगाड़रासिनी पहाड़ के झरने के पास एक दिन वे बैठे थे। तभी एक बाघ पानी पीने आया। कुछ समय तक दोनों एक-दूसरे को देखते रहे। स्वामीजी ने कहा—“यदि भूख लगी है तो मुझे खा लो।” यह सुनकर बाघ शांत होकर जंगल की ओर चला गया।\nऐसी घटनाएँ उनके निडर भाव, जीवों के प्रति करुणा और आत्मबल को दर्शाती हैं।"
    },
    {
      "id": "rogi-piddit-seva",
      "titleEn": "11. Service to the Sick, Suffering & Gau Seva",
      "titleHi": "11. रोगियों और पीड़ितों की सेवा",
      "contentEn": "Swami Jagadananda served sick patients, granting them holy water, blessings, and courage. In numerous cases, people suffering from grave illnesses received complete relief through his touch, mantra chanting, and blessings.\n\nProtection & Service to Cow (Gau Seva):\nService to mother cow held special importance in the ashram.\n\nOnce a child was critically ill. Swamiji reached his house and advised everyone to remain calm. Soon after, the child recovered completely.\n\nTo another person afflicted with severe skin disease, he gave mantra-blessed water for bathing. Shortly thereafter, the disease receded and he was cured.\n\nHis life demonstrates that service rendered with compassion, courage, and faith in God itself becomes supreme sadhana.",
      "contentHi": "स्वामी जगदानन्द रोगियों की सेवा कर उन्हें जल, आशीर्वाद और साहस देते थे। अनेक प्रसंगों में गंभीर रोग से पीड़ित लोगों को उनके स्पर्श, मंत्रजप और आशीर्वाद से राहत मिली।\n\nगोमाता की सेवा\nआश्रम में गोमाता की सेवा का भी विशेष महत्व था।\n\nएक बालक गंभीर रोग से पीड़ित था। स्वामीजी उसके घर पहुँचे और सबको शांत रहने को कहा। बाद में बालक स्वस्थ हो गया।\n\nएक भयंकर चर्मरोग से पीड़ित व्यक्ति को भी उन्होंने मंत्रयुक्त जल दिया और स्नान करने को कहा। कुछ समय बाद उसका रोग कम होने लगा और अंततः वह स्वस्थ हो गया।\n\nउनका जीवन यह दिखाता है कि करुणा, साहस और ईश्वर-विश्वास से सेवा स्वयं साधना बन जाती है।"
    },
    {
      "id": "upadesh-life-message",
      "titleEn": "12. Key Teachings & Life Message",
      "titleHi": "12. मुख्य उपदेश और जीवन-संदेश",
      "contentEn": "Swami Jagadananda Giri Maharaj's teachings were simple, direct, and life-transforming:\n• Without understanding the purpose of life, one cannot progress.\n• Human life is not merely for eating, drinking, and sense enjoyment.\n• Knowing the Self is the real goal of life.\n• True religion makes a person humble, compassionate, and truthful.\n• Kriya Yoga, Pranayama, Japa, and Meditation purify life.\n• Speak less, serve more.\n• Speak truth and serve parents.\n• Chant the divine name of God.\n• Both sadhana and service are essential for life.\n• Do not fear; remember God.",
      "contentHi": "स्वामी जगदानन्द गिरि महाराज के उपदेश सरल, सीधे और जीवन को बदलने वाले थे।\n• जीवन का उद्देश्य समझे बिना मनुष्य आगे नहीं बढ़ सकता।\n• मनुष्य का जीवन केवल खाने-पीने और भोग के लिए नहीं है।\n• आत्मा को जानना ही जीवन का वास्तविक उद्देश्य है।\n• सच्चा धर्म मनुष्य को विनम्र, दयालु और सत्यनिष्ठ बनाता है।\n• क्रियायोग, प्राणायाम, जप और ध्यान जीवन को पवित्र बनाते हैं।\n• कम बोलो, अधिक सेवा करो।\n• सत्य बोलो और माता-पिता की सेवा करो।\n• ईश्वर का नाम जपो।\n• साधना और सेवा, दोनों जीवन के लिए आवश्यक हैं।\n• भय मत करो, भगवान को स्मरण करो।"
    },
    {
      "id": "divya-virasat",
      "titleEn": "13. Divine Legacy",
      "titleHi": "13. दिव्य विरासत",
      "contentEn": "Swami Jagadananda Giri Maharaj showed through his life that a true saint is steadfast in penance, humble in service, vast in compassion, and completely surrendered in Guru-devotion.\n\nHis life became an inspiration for villages, hermitages, students, patients, sadhakas, and common folk alike. He guided countless people on the path of truth, sadhana, divine remembrance, and self-realization.\n\nIn 1987 he left his mortal frame. Yet devotees' reverence for him remains vibrant today. His life events, service, teachings, and divine memories inspire sadhakas that the true goal of human life is knowing the Self, remembering God, and dedicating life to service.",
      "contentHi": "स्वामी जगदानन्द गिरि महाराज ने अपने जीवन से यह दिखाया कि सच्चा संत वही है जो तप में दृढ़, सेवा में विनम्र, करुणा में विशाल और गुरु-भक्ति में पूर्ण समर्पित हो।\n\nउनका जीवन गाँवों, आश्रमों, विद्यार्थियों, रोगियों, साधकों और सामान्य जनों के लिए प्रेरणा बना। उन्होंने अनेक लोगों को सत्य, साधना, नामस्मरण और आत्मज्ञान के मार्ग पर आगे बढ़ाया।\n\n१९८७ में उन्होंने शरीर त्याग किया। किंतु उनके प्रति भक्तों की श्रद्धा आज भी जीवित है। उनके जीवन की घटनाएँ, सेवा, उपदेश और दिव्य स्मृतियाँ साधकों को यह प्रेरणा देती हैं कि मनुष्य जीवन का वास्तविक उद्देश्य आत्मा को जानना, ईश्वर का स्मरण करना और सेवा में जीवन अर्पित करना है।"
    },
    {
      "id": "granth-writing",
      "titleEn": "14. Sacred Books & Writings",
      "titleHi": "14. ग्रंथ एवं लेखन",
      "contentEn": "Sacred scriptures, teachings, life events, and sadhana messages related to Swami Jagadananda Giri Maharaj serve as a beacon of inspiration for spiritual seekers. Through these writings, his penance, service, Guru-devotion, Kriya Yoga sadhana, and public welfare can be deeply understood:\n1. Stotramala (Hymns of Praise)\n2. Paramatma (The Supreme Soul)\n3. Guru Gita Vyakhya (Exposition on Guru Gita)\n4. Spiritual Commentary on Srimad Bhagavad Gita",
      "contentHi": "स्वामी जगदानन्द गिरि महाराज से संबंधित ग्रंथ, उपदेश, जीवन-प्रसंग और साधना-संदेश साधकों के लिए प्रेरणा का स्रोत हैं। इन लेखनों के माध्यम से उनके तप, सेवा, गुरु-भक्ति, क्रियायोग साधना और लोककल्याण के भाव को समझा जा सकता है।\n1. स्तोत्रमाला\n2. परमात्मा\n3. गुरुगीता व्याख्या\n4. श्रीमद् भगवद्गीता पर आध्यात्मिक व्याख्या"
    },
    {
      "id": "divya-darshan-gallery",
      "titleEn": "15. Divine Visions & Photo Gallery",
      "titleHi": "15. दिव्य दर्शन एवं चित्रावली",
      "contentEn": "Holy portraits of Swami Jagadananda Giri Maharaj, serene ashram landscapes, memorable moments of the Guru lineage, and inspiring wallpapers for devotees.\nThrough these images, devotees can lovingly recall Sadhu Baba's life, penance, compassion, and divine presence.",
      "contentHi": "स्वामी जगदानन्द गिरि महाराज के पावन चित्र, आश्रम से जुड़े दृश्य, गुरु-परंपरा के स्मरणीय क्षण और भक्तों के लिए प्रेरणादायी wallpapers।\nइन चित्रों के माध्यम से भक्तजन साधु बाबा के जीवन, तप, करुणा और दिव्य उपस्थिति का स्मरण कर सकते हैं।"
    }
  ],
  "lilasList": [
    {
      "titleEn": "1. Sacred Prophecy on the 6th Day of Birth (Shashti)",
      "titleHi": "1. जन्म के छठवें दिन साधु की अलौकिक भविष्यवाणी",
      "textEn": "A wandering saint visited his home six days after birth, declaring the child would renounce the world and lead thousands toward God.",
      "textHi": "जन्म के छठवें दिन एक अवधूत संत ने घर आकर भविष्यवाणी की कि यह बालक संसार का त्याग कर हज़ारों जीवों को ईश्वर-प्राप्ति का मार्ग दिखाएगा।"
    },
    {
      "titleEn": "2. 3.5 Years Barefoot Narmada Parikrama Pilgrimage",
      "titleHi": "2. 3.5 वर्ष की कठोर नंगे पैर नर्मदा परिक्रमा",
      "textEn": "Circumnavigated the holy Narmada River barefoot for three and a half years, sleeping in forests and surviving on unasked alms.",
      "textHi": "3.5 वर्ष तक नंगे पैर पवित्र नर्मदा नदी की परिक्रमा की, जंगलों व नदी तटों पर रात बिताते हुए मौन क्रियायोग साधना की।"
    },
    {
      "titleEn": "3. Transforming Gadrasini Wilderness into a Sacred Ashram (1971)",
      "titleHi": "3. गड़रासिनी पहाड़ के सघन वन में आश्रम की स्थापना (1971)",
      "textEn": "Established Brahmarishi Satyananda Sannyas Ashram in 1971 at the dense foothills of Gadrasini Pahar, Belpahari.",
      "textHi": "1971 में बेलपहाड़ी के गड़रासिनी पहाड़ की तलहटी में सघन जंगल को स्वच्छ कर 'ब्रह्मर्षि सत्यानन्द संन्यास आश्रम' का निर्माण किया।"
    },
    {
      "titleEn": "4. Protection from Wild Elephants at Ashram Foothills",
      "titleHi": "4. आश्रम व ग्रामीणों की जंगली हाथियों से रक्षा",
      "textEn": "When wild elephant herds descended upon Belpahari village, Swami Jagadananda stood peacefully praying, causing the elephants to bow quietly and return into the forest.",
      "textHi": "जब जंगली हाथियों का दल आश्रम व गाँव की ओर बढ़ा, तब स्वामीजी शांत खड़े होकर ध्यानमग्न हुए; हाथी शांत होकर सिर झुकाकर वापस जंगल में चले गए।"
    },
    {
      "titleEn": "5. Daily Annadaana & Free Healthcare for Tribal Belpahari",
      "titleHi": "5. आदिवासी बेलपहाड़ी जन-समुदाय हेतु निरंतर अन्नदान व सेवा",
      "textEn": "Provided daily free cooked meals, clothes, and medicines to poor Santhal and Sabar tribal families across Belpahari.",
      "textHi": "बेलपहाड़ी के गरीब संथाल व शबर आदिवासियों के लिए प्रतिदिन निःशुल्क भोजन, वस्त्र वितरण व चिकित्सा सेवा का प्रकल्प संचालित किया।"
    }
  ]
},
  {
  "id": "gyanananda-giri",
  "order": 6,
  "name": "Paramhansa Gyanananda Maharaj",
  "sanskritName": "परमहंस ज्ञानानंद महाराज",
  "title": "Present Acharya & Spiritual Head of Ashram",
  "titleHindi": "ब्रह्मर्षि सत्यानंद संन्यास आश्रम के वर्तमान आचार्य",
  "period": "1953 – Present Acharya",
  "image": "/images/gurus/guru_6.png",
  "imageAltText": "Paramhansa Gyanananda Maharaj Portrait",
  "seoMetaTitle": "Paramhansa Gyanananda Maharaj Biography & Teachings",
  "seoMetaDescription": "Official biography and life history of Paramhansa Gyanananda Maharaj - Present Acharya of Brahmarishi Satyananda Sannyas Ashram.",
  "urlSlug": "/guru-parampara/gyanananda-giri",
  "bio": "Paramhansa Gyanananda Maharaj (born 1953) is the present Acharya and spiritual head of Brahmarishi Satyananda Sannyas Ashram. His life is a living example of Kriya Yoga, Guru devotion, Gita wisdom, Srimad Bhagavat contemplation, dispassion, service, and simplicity. Through the ashram and its branches, he inspires seekers on the path of self-reflection, spiritual living, service, and character building.",
  "bioHindi": "परमहंस ज्ञानानंद महाराज ब्रह्मर्षि सत्यानंद संन्यास आश्रम और इसकी शाखा आश्रम परंपरा के माध्यम से साधकों को क्रियायोग, आत्मचिंतन, शास्त्र-जीवन, सेवा और चरित्र-निर्माण की दिशा में प्रेरित कर रहे हैं। उनका जीवन क्रियायोग, गुरु-भक्ति, गीता-ज्ञान, भागवत-चिंतन, वैराग्य, सेवा और सादगी का जीवंत उदाहरण है।",
  "introductionEn": "Paramhansa Gyanananda Maharaj is the present Acharya of Brahmarishi Satyananda Sannyas Ashram. Nestled at the foothills of Gadrasini mountain, surrounded by dense forests, a small river, and mountain waterfalls, the ashram is a serene abode of sadhana. Into this divine environment, a dispassionate youth arrived seeking spiritual refuge under Swami Jagadananda Giri Maharaj, later becoming Paramhansa Gyanananda Maharaj.",
  "introductionHi": "परमहंस ज्ञानानंद महाराज\nब्रह्मर्षि सत्यानंद संन्यास आश्रम के वर्तमान आचार्य\n\nपर्वत की तलहटी में स्थित “ब्रह्मर्षि सत्यानंद संन्यास आश्रम” एक सुंदर, शांत और साधनामय आश्रम है। चारों ओर साल, शीया, महुआ और केंद जैसे वृक्षों, लताओं और झाड़ियों का घना वन है। थोड़ी दूरी पर एक छोटी नदी और पहाड़ी झरना बहता है। श्रावण मास में यह प्रकृति अत्यंत सुंदर प्रतीत होती है, किंतु उसमें चंचलता नहीं, बल्कि शांति और गंभीरता का भाव है।\n\nइसी आध्यात्मिक वातावरण में एक दिन झूलन पूर्णिमा के अगले दिन एक वैराग्यपूर्ण युवक आश्रम में आया। वह संसार की क्षणभंगुरता को समझकर दिव्य संगति, साधना और सद्गुरु की छत्रछाया में जीवन बिताने की आकांक्षा लेकर आया था। आश्रमाचार्य स्वामी जगदानंद गिरि महाराज उस युवक की मनोवृत्ति को समझ गए। उन्होंने उसे आत्म-त्याग, वैराग्य और ब्रह्मानंद के मार्ग की शिक्षा दी।\n\nयुवक ने विनम्रतापूर्वक कहा—“मैं आपके चरणों में आया हूँ, कृपया मुझे स्थान दीजिए।” स्वामी जगदानंद गिरि महाराज ने उसे अपने असीम दिव्य प्रेम से आश्रय दिया। वही युवक आगे चलकर ब्रह्मर्षि सत्यानंद संन्यास आश्रम के वर्तमान आचार्यदेव और क्रियायोग गुरु-परंपरा के आचार्य परमहंस ज्ञानानंद महाराज के रूप में प्रतिष्ठित हुए।",
  "keyTeachings": [
    "Yoga can strengthen confidence in life.",
    "Yoga practice makes the seeker realize the essence of divine existence and the impermanence of the world.",
    "True humanity develops not in material pleasures, but in divine bliss.",
    "Without good company, discernment does not develop.",
    "Desireless service diminishes body-consciousness and manifests soul-consciousness.",
    "One should never be undisciplined while performing service.",
    "Even if physical strength is weak, great work is possible through willpower.",
    "Dispassion brings self-reliance.",
    "Respecting parents and elders is a means of self-welfare.",
    "The human body is a temple; love for God should be developed here.",
    "Permanent peace is not found in external objects; introverted meditation is the way.",
    "One who does not wish good for others, good never happens to them.",
    "Rising before sunrise is a sign of divine virtue.",
    "Keeping someone's shortcomings in mind pollutes life.",
    "The importance of one's words should be kept paramount.",
    "Where life is beautiful, there is peace in family, society, and nation.",
    "Srimad Gita is the calendar of human life.",
    "Action should be done according to scriptures and Guru's instruction.",
    "Thinking about liberation without dispassion is futile.",
    "Tasting the nectar of Srimad Gita is the first step toward self-welfare.",
    "Good habits are easy to leave, but bad habits are difficult to leave.",
    "Illegally earned wealth pollutes the mind and intellect of the family.",
    "Maintain equanimity toward both sweet and bitter experiences in life."
  ],
  "keyTeachingsHindi": [
    "योग जीवन में आत्मविश्वास को मजबूत कर सकता है।",
    "योग अभ्यास साधक को दिव्य सत्ता के सार और संसार की क्षणभंगुरता का बोध कराता है।",
    "सच्ची मानवता भौतिक सुखों में नहीं, बल्कि ईश्वरानंद में विकसित होती है।",
    "अच्छी संगति के बिना विवेक का विकास नहीं होता।",
    "इच्छा-रहित सेवा से शरीर-चेतना क्षीण होती है और आत्मचेतना प्रकट होती है।",
    "सेवा करते समय कभी उच्छृंखल नहीं होना चाहिए।",
    "शारीरिक शक्ति कमजोर हो, फिर भी आत्मबल से महान कार्य संभव हैं।",
    "वैराग्य आत्मनिर्भरता लाता है।",
    "माता-पिता और बड़ों का आदर आत्मकल्याण का साधन है।",
    "मानव शरीर एक मंदिर है; यहाँ भगवान के प्रति प्रेम विकसित करना चाहिए।",
    "बाहरी वस्तुओं में स्थायी शांति नहीं मिलती; अंतर्मुखी ध्यान ही उपाय है।",
    "जो दूसरों का भला नहीं चाहता, उसका भला कभी नहीं होता।",
    "सूर्योदय से पहले उठना दैवीय सद्गुण का संकेत है।",
    "किसी की कमियों को मन में संजोकर रखने से जीवन दूषित होता है।",
    "अपने शब्दों के महत्व को सर्वोपरि रखना चाहिए।",
    "जहाँ जीवन सुंदर होता है, वहाँ परिवार, समाज और देश में शांति होती है।",
    "श्री गीता मानव जीवन का कैलेंडर है।",
    "कर्म शास्त्र और गुरु के निर्देशानुसार करना चाहिए।",
    "वैराग्य के बिना मोक्ष के बारे में सोचना व्यर्थ है।",
    "श्री गीता के अमृत का स्वाद आत्मकल्याण की ओर पहला कदम है।",
    "अच्छी आदतें छोड़ना आसान है, लेकिन बुरी आदतें छोड़ना कठिन है।",
    "अवैध रूप से अर्जित धन परिवार के मन और बुद्धि को दूषित करता है।",
    "जीवन में मधुर और कड़वे दोनों अनुभवों के प्रति समभाव रखना चाहिए।"
  ],
  "quote": "Who can give what to whom? Their belongings reach them on their own.",
  "quoteHindi": "कौन किसे क्या दे सकता है? उसका सामान उस तक पहुँच ही जाता है।",
  "quotesHindiList": [
    "कौन किसे क्या दे सकता है? उसका सामान उस तक पहुँच ही जाता है।",
    "मानव शरीर एक मंदिर है।",
    "वैराग्य आत्मनिर्भरता लाता है।",
    "श्री गीता मानव जीवन का कैलेंडर है।",
    "अच्छी आदतें छोड़ना आसान है, लेकिन बुरी आदतें छोड़ना कठिन है।"
  ],
  "lifeMilestones": [
    {
      "titleEn": "Birth & Early Life (1953)",
      "titleHi": "जन्म और पारिवारिक संस्कार (1953)",
      "textEn": "Born on 22 Chaitra, 1359 Bangabda (1953 AD) in Medinipur as Gopal Pandit. Raised in a devout Gita-reciting family.",
      "textHi": "22 चैत्र, 1359 बंगाब्द (1953 ईस्वी) को अविभाजित मेदिनिपुर में जन्म। बाल्यावस्था का नाम गोपाल। गीता-पाठ व भक्ति वातावरण में लालन-पालन।"
    },
    {
      "titleEn": "Refuge at Ashram & Brahmachari Initiation (1979)",
      "titleHi": "गुरुचरणों में शरण एवं दीक्षा (1979)",
      "textEn": "Reached Gadrasini Ashram in 1979 after Jhulan Purnima, initiated as Brahmachari by Swami Jagadananda Giri Maharaj.",
      "textHi": "1979 ईस्वी में आश्रम आकर स्वामी जगदानन्द गिरि महाराज के चरणों में शरण ली तथा भाद्र मास में ब्रह्मचारी रूप में दीक्षित हुए।"
    },
    {
      "titleEn": "Narmada Parikrama & Sannyas (1980–1986)",
      "titleHi": "नर्मदा परिक्रमा एवं संन्यास दीक्षा (1980–1986)",
      "textEn": "Completed Narmada Parikrama, received formal Sannyas at Shankar Math Bodh Gaya on Maha Saptami as Swami Gyanananda Maharaj.",
      "textHi": "नर्मदा परिक्रमा पूर्ण की। 1986 में बोधगया शंकर मठ में महा सप्तमी पर संन्यास दीक्षा प्राप्त की।"
    },
    {
      "titleEn": "Present Leadership & Service (Present)",
      "titleHi": "वर्तमान आचार्यत्व एवं सेवा कार्य (वर्तमान)",
      "textEn": "Leads Brahmarishi Satyananda Sannyas Ashram & branches, promoting Kriya Yoga, Gita discourses, and tribal community service.",
      "textHi": "वर्तमान आचार्य के रूप में क्रियायोग प्रचार, श्रीमद्भागवत व गीता ज्ञान-यज्ञ, और आदिवासी समाज सेवा में निरंतर समर्पित।"
    }
  ],
  "structuredSections": [
    {
      "id": "introduction-ashram-arrival",
      "titleEn": "Introduction & Arrival at Ashram",
      "titleHi": "आश्रम आगमन और परिचय",
      "contentEn": "Nestled at the foothills of Gadrasini mountain, Brahmarishi Satyananda Sannyas Ashram is surrounded by dense forests of Sal, Sheea, Mahua, and Kend, with a small river and mountain stream flowing nearby. Into this serene environment, a dispassionate youth named Gopal arrived after Jhulan Purnima. Swami Jagadananda Giri Maharaj recognized his spiritual intent and gave him shelter, who later became Paramhansa Gyanananda Maharaj.",
      "contentHi": "पर्वत की तलहटी में स्थित “ब्रह्मर्षि सत्यानंद संन्यास आश्रम” एक सुंदर, शांत और साधनामय आश्रम है। चारों ओर साल, शीया, महुआ और केंद जैसे वृक्षों, लताओं और झाड़ियों का घना वन है। थोड़ी दूरी पर एक छोटी नदी और पहाड़ी झरना बहता है। श्रावण मास में यह प्रकृति अत्यंत सुंदर प्रतीत होती है, किंतु उसमें चंचलता नहीं, बल्कि शांति और गंभीरता का भाव है।\n\nइसी आध्यात्मिक वातावरण में एक दिन झूलन पूर्णिमा के अगले दिन एक वैराग्यपूर्ण युवक आश्रम में आया। वह संसार की क्षणभंगुरता को समझकर दिव्य संगति, साधना और सद्गुरु की छत्रछाया में जीवन बिताने की आकांक्षा लेकर आया था। आश्रमाचार्य स्वामी जगदानंद गिरि महाराज उस युवक की मनोवृत्ति को समझ गए। उन्होंने उसे आत्म-त्याग, वैराग्य और ब्रह्मानंद के मार्ग की शिक्षा दी।\n\nयुवक ने विनम्रतापूर्वक कहा—“मैं आपके चरणों में आया हूँ, कृपया मुझे स्थान दीजिए।” स्वामी जगदानंद गिरि महाराज ने उसे अपने असीम दिव्य प्रेम से आश्रय दिया। वही युवक आगे चलकर ब्रह्मर्षि सत्यानंद संन्यास आश्रम के वर्तमान आचार्यदेव और क्रियायोग गुरु-परंपरा के आचार्य परमहंस ज्ञानानंद महाराज के रूप में प्रतिष्ठित हुए।"
    },
    {
      "id": "birth-family-sanskar",
      "titleEn": "1. Birth & Family Sanskaras",
      "titleHi": "1. जन्म और पारिवारिक संस्कार",
      "contentEn": "Swamiji Maharaj was born on 22 Chaitra, 1359 Bangabda (1953 AD) in a remote village in undivided Medinipur district. His father was Sri Chaitanyacharan Pandit and mother Srimati Kiranbala Devi. He was the eldest of three brothers. His father regularly recited the Bhagavad Gita at home. When Gyanananda Ji was a 6-day-old infant, a visiting holy monk remarked: 'Mother, this son of yours will make you weep, but he will make the world smile.'",
      "contentHi": "स्वामीजी महाराज का जन्म 22 चैत्र, 1359 बंगाब्द (1953 ईस्वी) को अविभाजित मेदिनिपुर जिले के एक दूरस्थ गाँव में हुआ। उनके पिता श्री चैतन्यचरण पंडित और माता श्रीमती किरणबाला देवी थीं।\n\nवे अपने माता-पिता के तीन पुत्रों में सबसे बड़े थे। उनके पिता श्री चैतन्यचरण अत्यंत सरल, उदार और धर्मपरायण व्यक्ति थे। कृषि उनके परिवार की आय का मुख्य आधार था। विशेष औपचारिक शिक्षा न होने पर भी वे प्रतिदिन संध्या समय घर पर भगवद्गीता का पाठ करते थे और अपने पुत्र-पुत्रियों को भी गीता पढ़ने के लिए प्रेरित करते थे।\n\nधनेश्वरपुर गाँव में चैतन्यचरण पंडित और किरणबाला देवी ने वैष्णव मठ के संत श्रीमत् सनातन दास बाबाजी से दीक्षा ली। दोनों तुलसी की माला और तिलक धारण कर नियमित रूप से गुरु-मंत्र का जप करते थे। उनके घर में साधु-संतों का आगमन होता रहता था, और वे श्रद्धा से उनकी सेवा करते थे।\n\nजब ज्ञानानंदजी छह दिन के शिशु थे, तब एक साधु भिक्षा माँगने आए। उन्होंने आँगन में शिशु को देखकर माता से कहा—“माता, तुम्हारा यह पुत्र तुम्हें रुलाएगा, परन्तु संसार को हँसाएगा।” उस समय माता इस वचन का अर्थ नहीं समझ सकीं, पर बाद में जीवन की घटनाओं ने इस वाणी का गहरा अर्थ प्रकट किया।"
    },
    {
      "id": "childhood-education",
      "titleEn": "2. Childhood & Education",
      "titleHi": "2. बाल्यकाल और शिक्षा",
      "contentEn": "His parents named him Gopal. He completed primary, secondary, and higher secondary studies. Though he enrolled in college, financial conditions required him to assist his father in farming. He learned music from Sriyut Khudiram Bag Mahashaya and Kirtan singing from Kirtan Samrat Sri Raghunath Das Mahashaya in Chandaneswar, Odisha.",
      "contentHi": "माता-पिता ने बालक का नाम गोपाल रखा। घुँघराले बालों और अच्छे स्वास्थ्य के कारण गोपाल घर और पड़ोस में सबके प्रिय थे।\n\nउन्होंने अपनी प्रारंभिक शिक्षा गाँव के प्राथमिक विद्यालय में श्री सुशील कुमार पंडित महाशय के मार्गदर्शन में आरंभ की। आगे चलकर उन्होंने जूनियर हाई स्कूल, सेकेंडरी स्कूल और पास के गाँव के हायर सेकेंडरी स्कूल में पढ़ाई पूरी की। गोपाल ने कॉलेज में प्रवेश लिया, किंतु परिवार की आर्थिक स्थिति के कारण उनकी पढ़ाई आगे नहीं बढ़ सकी। इसके बाद वे पिता के साथ खेती-बाड़ी में सहयोग करने लगे।\n\nउनके पिता शिक्षा और संस्कृति में रुचि रखते थे। गोपाल की संगीत के प्रति लगन देखकर उन्होंने कठिन आर्थिक परिस्थिति के बावजूद संगीत सीखने की व्यवस्था की। गोपाल ने पंचेतगढ़ की राजसभा के प्रसिद्ध संगीतकार के शिष्य श्रीयुत खुदीराम बाग महाशय से संगीत सीखा। बाद में उन्होंने ओडिशा के चंदनेश्वर के कीर्तन सम्राट श्री रघुनाथ दास महाशय से कीर्तन गायन सीखा और कई स्थानों पर कीर्तन सत्रों में भाग लिया।"
    },
    {
      "id": "attraction-saintly-life",
      "titleEn": "3. Attraction toward Saintly Life",
      "titleHi": "3. संत जीवन की ओर आकर्षण",
      "contentEn": "Gopal spent his days learning music, singing Kirtan, discussing spiritual topics with visiting saints, and assisting his father. Yet a deep resolution for a saintly life woke within him. He was deeply influenced by Swami Jagadananda Giri Maharaj's thoughts and decided to seek refuge at his holy feet.",
      "contentHi": "संगीत सीखना, कीर्तन गाना, घर आने वाले संतों के साथ भगवद् ज्ञान पर चर्चा करना और पिता के घरेलू कार्यों में सहयोग करना—इसी प्रकार गोपाल के दिन बीतते थे। किंतु उनके मन में संतों और संत-जीवन के प्रति विशेष आकर्षण था।\n\nवे गाँव के अन्य युवकों की तरह गृहस्थ जीवन के आकर्षणों में बँधे नहीं। उनके भीतर आत्म-त्यागी संत जीवन अपनाने का दृढ़ संकल्प जाग रहा था। वे स्वामी जगदानंद गिरि महाराज के विचारों से विशेष रूप से प्रभावित हुए। मन ही मन उन्होंने निश्चय किया कि यदि उन्हें संत बनना है, तो स्वामी जगदानंद के चरणों में शरण लेनी होगी।"
    },
    {
      "id": "refuge-guru-brahmachari-initiation",
      "titleEn": "4. Refuge in Guru & Brahmachari Initiation",
      "titleHi": "4. गुरुचरणों में शरण और ब्रह्मचारी दीक्षा",
      "contentEn": "In 1386 Bangabda (1979 AD), during Shravan month, on the day after Jhulan Purnima, Gopal reached Brahmarishi Satyananda Sannyas Ashram on Gadrasini mountain and surrendered at the feet of Swami Jagadananda Giri Maharaj. On the 16th tithi of Bhadra 1386, Swami Jagadananda initiated him as a Brahmachari and sent him to Haridwar for Kriya Yoga practice.",
      "contentHi": "बंगाब्द 1386 (1979 ईस्वी) में श्रावण मास में, झूलन पूर्णिमा के अगले दिन, गोपाल ने गृहस्थ जीवन के बंधनों से मुक्त होकर बेलपहाड़ी गाडरासिनी पर्वत पर स्थित “ब्रह्मर्षि सत्यानंद संन्यास आश्रम” के प्रमुख योगाचार्य श्रीमत् स्वामी जगदानंद गिरि महाराज के चरणों में शरण ली।\n\nआश्रम में कुछ दिन रहने के बाद, बंगाब्द 1386 (1979 ईस्वी) के भाद्र मास की 16वीं तिथि को स्वामी जगदानंद गिरि महाराज ने गोपाल को ब्रह्मचारी रूप में दीक्षित किया। गुरु ने उन्हें आत्म-सुधार और साधना के लिए हरिद्वार भेजा। वहाँ उन्होंने कुछ समय क्रियायोग का अभ्यास किया।"
    },
    {
      "id": "narmada-parikrama-sadhana",
      "titleEn": "5. Narmada Parikrama & Sadhana Life",
      "titleHi": "5. नर्मदा परिक्रमा और साधना-जीवन",
      "contentEn": "In 1387 Bangabda (1980-1981 AD), with Gurudeva's permission, he began Narmada Parikrama, spending three and a half years under Mother Narmada's shadow. Later he completed walking Narmada Parikrama again in 1409 (2002-2003) and 1422 (2015-2016). In 1415 (2008-2009), he established 'Jagadananda Kriya Yoga Kuteer' at Nanpa on Narmada banks.",
      "contentHi": "बंगाब्द 1387 (1980–1981 ईस्वी) में आश्रम के वार्षिक उत्सव के बाद, गुरुदेव की अनुमति से उन्होंने नर्मदा परिक्रमा प्रारंभ की। परिक्रमा के दौरान उन्हें विभिन्न संप्रदायों के संतों और साधुओं का संग प्राप्त हुआ। गुरु द्वारा निर्धारित अनुष्ठानों और साधना के अभ्यास से उनके भीतर दिव्य ज्ञान और आध्यात्मिक अनुभव गहराते गए।\n\nलगभग साढ़े तीन वर्ष तक नर्मदा माता की स्नेहपूर्ण छाया में रहने के बाद वे गुरुदेव के चरणों में लौट आए। इसके बाद वे गुरुदेव की सेवा करते रहे और विभिन्न शाखा आश्रमों के वार्षिक समारोहों में उनके साथ भाग लेते रहे।\n\nबंगाब्द 1409 (2002–2003 ईस्वी) और 1422 (2015–2016 ईस्वी) में स्वामी ज्ञानानंदजी ने पुनः पैदल नर्मदा परिक्रमा की। बंगाब्द 1415 (2008–2009 ईस्वी) में उन्होंने अपने गुरुदेव के नाम पर “जगदानंद क्रियायोग कुटीर” नामक आश्रम की स्थापना की, ताकि ब्रह्मचारी शिष्य और भक्त नर्मदा तट पर साधना कर सकें। वहाँ भी उन्होंने क्रियायोग का प्रचार जारी रखा।"
    },
    {
      "id": "sannyas-acharya-status",
      "titleEn": "6. Sannyas & Acharya Elevation",
      "titleHi": "6. संन्यास और आचार्य पद",
      "contentEn": "After Swami Jagadananda Giri Maharaj's Mahasamadhi in 1393 Bangabda (1986 AD), Brahmachari Gyanananda reached Shankar Math at Bodh Gaya. On Maha Saptami during Sharadiya Durga Puja, Acharya Swami Jagadishananda Giri Maharaj bestowed formal Sannyas initiation upon him, naming him Swami Gyanananda Maharaj. He then assumed leadership as Acharya of Brahmarishi Satyananda Sannyas Ashram.",
      "contentHi": "बंगाब्द 1393 (1986 ईस्वी) में श्रावण मास की पाँचवीं तिथि को स्वामी जगदानंद गिरि महाराज की महासमाधि के बाद आश्रम के शिष्यों, विशेषकर ज्ञानानंदजी और आत्मानंदजी, पर गहरा शोक छा गया। गुरुदेव की कृपा से उन्होंने आत्मनिर्भरता और आंतरिक शक्ति प्राप्त की।\n\nब्रह्मचारी ज्ञानानंद बोधगया के शंकर मठ पहुँचे। शारदीय दुर्गापूजा के अवसर पर महा सप्तमी तिथि को आदिगुरु शंकराचार्य द्वारा स्थापित दीक्षा-परंपरा के अनुसार आचार्यदेव श्रीमत् स्वामी जगदीशानंद गिरि महाराज ने उन्हें संन्यास दीक्षा प्रदान की। उनका नाम स्वामी ज्ञानानंद महाराज रखा गया।\n\nतब से उन्होंने “ब्रह्मर्षि सत्यानंद संन्यास आश्रम” और इसके अंतर्गत संचालित शाखा आश्रमों के आचार्य का पदभार संभाला। उनके नेतृत्व में आश्रम और शाखा आश्रमों में नए उत्साह के साथ साधना, सेवा और क्रियायोग की धारा आगे बढ़ने लगी।"
    },
    {
      "id": "kriya-propagation-centers",
      "titleEn": "7. Kriya Yoga Propagation & Sadhana Centers",
      "titleHi": "7. क्रियायोग प्रचार और साधना केंद्र",
      "contentEn": "Following Sri Yukteswar Giri, Swami Satyananda Giri, and Swami Jagadananda Giri, Paramhansa Gyanananda Maharaj propagates Kriya Yoga. He establishes small sadhana centers in remote rural areas, initiating hundreds of men and women. Following Yogiraj Lahiri Mahasaya's guidance, active practitioners gather for 3-day annual Kriya retreats at the ashram.",
      "contentHi": "स्वामी ज्ञानानंद महाराज ने श्री युक्तेश्वर गिरि महाराज, स्वामी सत्यानंद गिरि महाराज और गुरुदेव स्वामी जगदानंद गिरि महाराज के आदर्शों को सामने रखकर क्रियायोग के प्रचार-प्रसार का कार्य आगे बढ़ाया।\n\nवे दूरदराज के ग्रामीण क्षेत्रों में छोटे साधना केंद्र स्थापित करने के लिए प्रतिबद्ध रहे। सैकड़ों पुरुषों और महिलाओं को क्रियायोग में दीक्षित कर उनकी आध्यात्मिक उन्नति के लिए वे क्रियायोग चक्रों का संचालन करते हैं।\n\nश्रीश्री लाहिड़ी महाशय की सलाह के अनुसार, क्रियायोग वह साधना-पद्धति है जिसमें सक्रिय साधक वर्ष में कम से कम तीन दिन संसार से विराम लेकर आश्रम में श्रीगुरु की उपस्थिति में क्रिया अभ्यास करते हैं।\n\nवे जाति, धर्म या वर्णभेद से ऊपर उठकर इच्छुक और समर्पित पुरुषों और महिलाओं को दीक्षा देते हैं और साधना के मार्ग पर प्रेरित करते हैं।"
    },
    {
      "id": "simplicity-service-acharyatva",
      "titleEn": "8. Simplicity, Service & Acharyatva",
      "titleHi": "8. सादगी, सेवा और आचार्यत्व",
      "contentEn": "Swami Gyanananda Ji is an embodiment of renunciation, simplicity, and humility. He walks barefoot and eats simple food. Despite being Acharya, he cleans guest rooms with a broom and places footwear of devotees under shade on hot sunny days, teaching that every object in nature deserves respect.",
      "contentHi": "स्वामी ज्ञानानंदजी महाराज त्याग, सादगी और सरल जीवन की मिसाल हैं। वे पैरों में जूते नहीं पहनते। उनके वस्त्रों में कोई चमक-दमक नहीं होती, भोजन में कोई दिखावा नहीं होता और वाणी में कोई जटिलता नहीं होती।\n\nवे बच्चों से लेकर बुजुर्गों तक, अनपढ़ से लेकर विद्वानों तक, गरीब से लेकर संपन्न लोगों तक—सभी के साथ सहजता और प्रेम से रहते हैं। उनके सरल संवादों में गहन आध्यात्मिक ज्ञान और जीवन-दर्शन छिपा रहता है।\n\nआश्रम के आचार्यदेव होने के बाद भी वे आश्रम के अतिथि कक्ष या आँगन को झाड़ू से साफ करने में संकोच नहीं करते। एक बार आश्रम में कार्यक्रम के दौरान भक्तों के जूते-चप्पल तेज धूप में पड़े थे। जब सब भक्त प्रसाद की व्यवस्था में व्यस्त थे, तब स्वामीजी स्वयं उन जूतों-चप्पलों को छाया में रख रहे थे। एक भक्त ने पूछा—“बाबा, आप क्या कर रहे हैं?” गुरुदेव ने सहज भाव से उत्तर दिया कि सब लोग छाया में हैं, पर जूते धूप में पड़े हैं।\n\nइस सरल घटना में भी उनका गहरा जीवन-संदेश था—प्रकृति की हर वस्तु को उचित सम्मान देना चाहिए। ज्ञानी आचार्य अपने आचरण से ही भक्तों और शिष्यों को शिक्षा देते हैं।"
    },
    {
      "id": "service-tribals-poor",
      "titleEn": "9. Service to Tribals & Poor",
      "titleHi": "9. आदिवासी और गरीब जनों की सेवा",
      "contentEn": "Located amidst mountains and forests, the ashram actively serves local tribal and underprivileged communities with education, clothing, and food. Swamiji visits remote tribal hamlets distributing clothes for children and sarees for mothers, encouraging them to chant God's name together.",
      "contentHi": "ब्रह्मर्षि सत्यानंद संन्यास आश्रम पहाड़ों, जंगलों और आदिवासी क्षेत्रों के बीच स्थित है। आश्रमाचार्य स्वामीजी महाराज गरीब और पिछड़े आदिवासी लोगों को शिक्षा, वस्त्र, भोजन आदि उपलब्ध कराने में सक्रिय रहते हैं।\n\nवे कहते हैं—“कौन किसे क्या दे सकता है? उसका सामान उस तक पहुँच ही जाता है।”\n\nएक और भाव वे व्यक्त करते हैं कि गुरु का खजाना मनुष्य की आवश्यकताओं से अधिक वस्तुओं से भरा है; उसे थैली में बंद रखने के बजाय जरूरतमंदों तक पहुँचा देना चाहिए।\n\nजब वे आश्रम में रहते हैं, तो कभी अकेले और कभी भक्तों के साथ दूरस्थ आदिवासी क्षेत्रों में बच्चों के वस्त्र और माताओं के लिए साड़ियाँ लेकर जाते हैं। वे लोगों की आवश्यकताओं और दुखों को ध्यान से सुनते हैं, उन्हें सलाह देते हैं और सहायता करते हैं। वे उन्हें ठाकुर का नाम जपने और शाम को सामूहिक रूप से ईश्वर-स्मरण करने की प्रेरणा भी देते हैं।"
    },
    {
      "id": "bhagavat-gita-spiritual-awakening",
      "titleEn": "10. Srimad Bhagavat, Gita & Spiritual Awakening",
      "titleHi": "10. श्रीमद्भागवत, गीता और आध्यात्मिक जागरण",
      "contentEn": "Swamiji conducts Srimad Bhagavat Gyan Yajna discourses across India and imparts inner wisdom of Srimad Bhagavad Gita. As a worthy carrier of the light bestowed by Mahavatar Babaji and Lahiri Mahasaya through the Guru lineage, Paramhansa Gyanananda Maharaj brings peace to spiritual seekers.",
      "contentHi": "स्वामी ज्ञानानंदजी मानते हैं कि आज के समय में बाहरी अस्थिरता से उत्पन्न कष्टों से मुक्ति पाने का एकमात्र वास्तविक उपाय शास्त्रों के अनुसार जीवन जीना है।\n\nवे भारत के विभिन्न स्थानों पर श्रीमद्भागवत ज्ञान-यज्ञ समारोह आयोजित करते हैं। वे साधकों को श्रीमद्भागवत के उस गहन पक्ष से अवगत कराते हैं, जिसमें मानव जीवन की सूक्ष्म भावनाएँ, साधक जीवन की गहराई और संत जीवन का सुंदर चित्रण मिलता है।\n\nबाल्यकाल से ही घर में भगवद्गीता का संस्कार मिला था। आगे चलकर स्वामी ज्ञानानंदजी ने श्रीमद्भगवद्गीता में आध्यात्मिक जीवन का विशेष सार पाया और भारत के विभिन्न भागों में भक्तों को गीता का आंतरिक ज्ञान प्रदान किया।\n\nयोगिराज श्रीश्री श्यामचरण लाहिड़ी महाशय ने भगवान श्रीश्री बाबाजी महाराज से क्रियायोग प्राप्त कर जिस ज्ञानधारा का प्रसार किया, वही गुरु-परंपरा के माध्यम से साधकों के लिए शांति का स्रोत बनी। परमहंस ज्ञानानंद महाराज इसी ज्ञानधारा के योग्य वाहक हैं।"
    },
    {
      "id": "teachings-paramhansa-gyanananda",
      "titleEn": "11. Teachings of Paramhansa Gyanananda Maharaj",
      "titleHi": "11. परमहंस ज्ञानानंद महाराज के उपदेश",
      "contentEn": "• Yoga can strengthen confidence in life.\n• Yoga practice makes the seeker realize the essence of divine existence and impermanence of the world.\n• True humanity develops in divine bliss.\n• Without good company, discernment does not develop.\n• Desireless service manifests soul-consciousness.\n• Physical strength may be weak, but great works are possible through willpower.\n• Dispassion brings self-reliance.\n• Respecting parents and elders is a means of self-welfare.\n• The human body is a temple.\n• Permanent peace is found in introverted meditation.\n• Srimad Gita is the calendar of human life.\n• Maintain equanimity toward both sweet and bitter experiences.",
      "contentHi": "• योग जीवन में आत्मविश्वास को मजबूत कर सकता है।\n• योग अभ्यास साधक को दिव्य सत्ता के सार और संसार की क्षणभंगुरता का बोध कराता है।\n• सच्ची मानवता भौतिक सुखों में नहीं, बल्कि ईश्वरानंद में विकसित होती है।\n• अच्छी संगति के बिना विवेक का विकास नहीं होता।\n• इच्छा-रहित सेवा से शरीर-चेतना क्षीण होती है और आत्मचेतना प्रकट होती है।\n• सेवा करते समय कभी उच्छृंखल नहीं होना चाहिए।\n• शारीरिक शक्ति कमजोर हो, फिर भी आत्मबल से महान कार्य संभव हैं।\n• वैराग्य आत्मनिर्भरता लाता है।\n• माता-पिता और बड़ों का आदर आत्मकल्याण का साधन है।\n• मानव शरीर एक मंदिर है; यहाँ भगवान के प्रति प्रेम विकसित करना चाहिए।\n• बाहरी वस्तुओं में स्थायी शांति नहीं मिलती; अंतर्मुखी ध्यान ही उपाय है।\n• जो दूसरों का भला नहीं चाहता, उसका भला कभी नहीं होता।\n• सूर्योदय से पहले उठना दैवीय सद्गुण का संकेत है।\n• किसी की कमियों को मन में संजोकर रखने से जीवन दूषित होता है।\n• अपने शब्दों के महत्व को सर्वोपरि रखना चाहिए।\n• जहाँ जीवन सुंदर होता है, वहाँ परिवार, समाज और देश में शांति होती है।\n• श्री गीता मानव जीवन का कैलेंडर है।\n• कर्म शास्त्र और गुरु के निर्देशानुसार करना चाहिए।\n• वैराग्य के बिना मोक्ष के बारे में सोचना व्यर्थ है।\n• श्री गीता के अमृत का स्वाद आत्मकल्याण की ओर पहला कदम है।\n• अच्छी आदतें छोड़ना आसान है, लेकिन बुरी आदतें छोड़ना कठिन है।\n• अवैध रूप से अर्जित धन परिवार के मन और बुद्धि को दूषित करता है।\n• जीवन में मधुर और कड़वे दोनों अनुभवों के प्रति समभाव रखना चाहिए।"
    },
    {
      "id": "present-guidance-legacy",
      "titleEn": "12. Present Guidance & Legacy",
      "titleHi": "12. वर्तमान मार्गदर्शन और विरासत",
      "contentEn": "Paramhansa Gyanananda Maharaj's life is a living testament of Kriya Yoga, Guru devotion, Gita wisdom, Bhagavat contemplation, dispassion, service, and simplicity. Through Brahmarishi Satyananda Sannyas Ashram and its branches, he inspires seekers toward Kriya Yoga, self-reflection, scriptural living, service, and character building.",
      "contentHi": "परमहंस ज्ञानानंद महाराज का जीवन क्रियायोग, गुरु-भक्ति, गीता-ज्ञान, भागवत-चिंतन, वैराग्य, सेवा और सादगी का जीवंत उदाहरण है।\n\nवे ब्रह्मर्षि सत्यानंद संन्यास आश्रम और इसकी शाखा आश्रम परंपरा के माध्यम से साधकों को क्रियायोग, आत्मचिंतन, शास्त्र-जीवन, सेवा और चरित्र-निर्माण की दिशा में प्रेरित कर रहे हैं।\n\nउनका जीवन यह सिखाता है कि सच्चा आचार्य केवल उपदेश नहीं देता, बल्कि अपने आचरण से शिक्षा देता है। सादगी, सेवा, साधना और गुरु-निष्ठा के माध्यम से वे आज भी असंख्य साधकों के जीवन में आध्यात्मिक प्रेरणा का स्रोत हैं।"
    },
    {
      "id": "quote-highlights",
      "titleEn": "13. Quote Highlights",
      "titleHi": "13. Quote Highlights (प्रमुख उद्धरण)",
      "contentEn": "• “Who can give what to whom? Their belongings reach them on their own.”\n• “The human body is a temple.”\n• “Dispassion brings self-reliance.”\n• “Srimad Gita is the calendar of human life.”\n• “Good habits are easy to leave, but bad habits are difficult to leave.”",
      "contentHi": "“कौन किसे क्या दे सकता है? उसका सामान उस तक पहुँच ही जाता है।”\n“मानव शरीर एक मंदिर है।”\n“वैराग्य आत्मनिर्भरता लाता है।”\n“श्री गीता मानव जीवन का कैलेंडर है।”\n“अच्छी आदतें छोड़ना आसान है, लेकिन बुरी आदतें छोड़ना कठिन है।”"
    },
    {
      "id": "granth-literary-works",
      "titleEn": "14. Sacred Scriptures & Literature",
      "titleHi": "14. ग्रंथ-संपदा एवं काव्य-साधना",
      "contentEn": "Paramhansa Gyanananda Maharaj's spiritual literature and scriptures provide guidance for seekers, reflecting Gita knowledge, Srimad Bhagavat, Kriya Yoga, Guru devotion, dispassion, and service:\n• Scriptures, poetic collections, discourse literature, and spiritual writings authored by Gurudeva.",
      "contentHi": "परमहंस ज्ञानानंद महाराज की ग्रंथ-संपदा और आध्यात्मिक साहित्य साधकों के लिए मार्गदर्शन और प्रेरणा का स्रोत है। उनके साहित्य में गीता-ज्ञान, श्रीमद्भागवत, क्रियायोग, गुरु-भक्ति, वैराग्य, सेवा और जीवन-दर्शन की झलक मिलती है।\n गुरुदेव द्वारा रचित ग्रंथ, काव्य-संग्रह, प्रवचन-साहित्य और आध्यात्मिक लेखन।"
    },
    {
      "id": "divya-darshan-gallery-sec",
      "titleEn": "15. Divine Visions & Gallery",
      "titleHi": "15. दिव्य दर्शन एवं चित्रावली",
      "contentEn": "Holy portraits of Paramhansa Gyanananda Maharaj, ashram views, Narmada Parikrama, Jagadananda Kriya Yoga Kuteer, Guru Parampara, and inspiring images for devotees.",
      "contentHi": "परमहंस ज्ञानानंद महाराज के पावन चित्र, आश्रम से जुड़े दृश्य, नर्मदा परिक्रमा, जगदानंद क्रियायोग कुटीर, गुरु-परंपरा और भक्तों के लिए प्रेरणादायी चित्र"
    },
    {
      "id": "source-note",
      "titleEn": "16. Source Note",
      "titleHi": "16. Source Note (स्रोत विवरण)",
      "contentEn": "This life biography is presented based on authentic original materials available in the ashram tradition, Gurudeva's teachings, and accounts compiled by devotees.",
      "contentHi": "यह जीवन-प्रसंग आश्रम परंपरा में उपलब्ध मूल सामग्री, गुरुदेव के उपदेशों और भक्तों द्वारा संकलित विवरणों के आधार पर प्रस्तुत किया गया है।"
    }
  ]
}
];

export const ASHRAM_BRANCHES: AshramBranch[] = [
  {
    id: "headquarters-belpahari",
    name: "Brahmarshi Satyananda Sannyas Ashram",
    branchName: "Main Centre",
    state: "West Bengal",
    location: "Gadrasini Pahar, Belpahari, Jhargram District, West Bengal, India",
    address: "Gadrasini Pahar Foothills, Belpahari, Jhargram, West Bengal - 721501, India",
    phone: "+91 90094 11592, +91 99094 78275",
    email: "gururagomon@gmail.com",
    googleMapsUrl: "https://maps.app.goo.gl/S4bbtwjks2kErX1p9",
    description: "Founded in 1971 by Param Pujya Swami Jagadananda Giri Maharaj, this is the main Ashram and spiritual headquarters of the Guru Parampara at Gadrasini Pahar, Belpahari. Surrounded by forests and hills, the Ashram features Vasudev Bhagavan Mandir along with Mahabali Hanumanji Mandir as the first sacred destination when climbing the hill, Mokshanath Baba Shrine, and Sri Gita Mandir.",
    about: "Established in 1971 by Param Pujya Swami Jagadananda Giri Maharaj, this is the headquarters of Brahmarshi Satyananda Sannyas Ashram at Gadrasini Pahar, Belpahari. Nestled amidst serene forests and hills, when starting to climb Gadrasini Hill, the very first sacred destination encountered in the forest is Vasudev Bhagavan Mandir along with Mahabali Hanumanji Mandir. The Ashram serves as the principal centre for Kriya Yoga, meditation, Bhagavad Gita teachings, Bhagwat Katha, spiritual retreats, and Guru Parampara traditions.",
    activities: [
      "Kriya Yoga Meditation",
      "Bhagavad Gita Classes",
      "Bhagwat Katha",
      "Guru Purnima Celebrations",
      "Spiritual Camps",
      "Daily Satsang",
      "Festivals",
      "Seva Activities"
    ],
    surroundings: "Vasudev Bhagavan Mandir & Mahabali Hanumanji Mandir at hill footway, Mokshanath Baba Shrine on hilltop, sacred forests, natural springs, and tranquil mountain air.",
    image: "https://lh3.googleusercontent.com/d/1plBIGEMab60g234-a5ax8DHfSwCDT7Vm",
    isHeadquarters: true,
    coordinates: { lat: 22.6315, lng: 86.7582 }
  },
  {
    id: "branch-nanpa",
    name: "Jagadanand Sahaj Kriyayog Kutir",
    branchName: "Nanpa Branch",
    state: "Madhya Pradesh",
    location: "Nanpa, Narmadapuram (Hoshangabad) District, Madhya Pradesh, India",
    address: "Nanpa Village, Holy Narmada River Bank, Narmadapuram District, Madhya Pradesh, India",
    phone: "+91 8250582147",
    email: "nanpa@satyanandashram.org",
    googleMapsUrl: "https://maps.app.goo.gl/Rb7BdaWSK56fZmoL6",
    description: "A peaceful branch Ashram situated near the holy River Narmada where devotees practice Kriya Yoga, meditation and spiritual disciplines.",
    about: "Situated near the sacred banks of the holy River Narmada, the Nanpa Ashram serves as an important centre for Kriya Yoga practice, meditation, spiritual retreats, and satsang under the guidance of the Guru Parampara. The tranquil environment makes it an ideal place for seekers pursuing inner peace and spiritual discipline.",
    activities: [
      "Meditation",
      "Kriya Yoga",
      "Narmada Spiritual Retreats",
      "Satsang",
      "Guru Discourses"
    ],
    surroundings: "Holy Narmada river waters, quiet river ghats, ancient neem trees, and peaceful sunrise meditation terraces.",
    image: "/images/branches/nanpa_1.jpg",
    images: [
      "/images/branches/nanpa_1.jpg",
      "/images/branches/nanpa_2.jpg",
      "/images/branches/nanpa_3.jpg",
      "/images/branches/nanpa_4.jpg",
      "/images/branches/nanpa_5.jpg",
      "/images/branches/nanpa_6.jpg"
    ],
    isHeadquarters: false,
    coordinates: { lat: 22.7500, lng: 77.7167 }
  },
  {
    id: "branch-ganjit",
    name: "Jagadanand Sahaj Kriyayog Kutir",
    branchName: "Ganjit Branch",
    state: "Madhya Pradesh",
    location: "Ganjit, Madhya Pradesh, India",
    phone: "+91 8250582147",
    email: "ganjit@satyanandashram.org",
    description: "A spiritual centre dedicated to Kriya Yoga practice, meditation, satsang and Guru Parampara teachings.",
    about: "The Ganjit Ashram continues the mission of Brahmarshi Satyananda Sannyas Ashram by promoting the practice of authentic Kriya Yoga, spiritual education, meditation, and devotional activities for seekers in the region.",
    activities: [
      "Kriya Yoga",
      "Meditation",
      "Spiritual Guidance",
      "Satsang"
    ],
    surroundings: "Tranquil spiritual environment designed for focused sadhana and devotional discourses.",
    image: "/images/branches/ganjit_1.jpg",
    images: [
      "/images/branches/ganjit_1.jpg",
      "/images/branches/ganjit_2.jpg",
      "/images/branches/ganjit_3.jpg",
      "/images/branches/ganjit_4.jpg",
      "/images/branches/ganjit_5.jpg",
      "/images/branches/ganjit_6.jpg"
    ],
    isHeadquarters: false,
    coordinates: { lat: 22.4500, lng: 78.1000 }
  },
  {
    id: "branch-jalampura",
    name: "Jagadanand Sahaj Kriyayog Kutir",
    branchName: "Jalampura Branch",
    state: "Gujarat",
    location: "Jalampura, Near Ahmedabad, Gujarat, India",
    phone: "+91 8250582147",
    email: "jalampur@satyanandashram.org",
    description: "Serving devotees in Gujarat through Kriya Yoga, spiritual discourses, meditation and devotional activities.",
    about: "The Jalampura centre serves devotees in Gujarat by conducting Kriya Yoga practice, spiritual discourses, devotional gatherings, and Guru Parampara activities while preserving the authentic teachings of the Ashram.",
    activities: [
      "Kriya Yoga",
      "Meditation",
      "Bhagavad Gita Study",
      "Spiritual Camps"
    ],
    surroundings: "Lush green spiritual garden, meditation hall, Vedic library, and Gau Shala.",
    image: "/images/branches/jalampura_1.jpg",
    images: [
      "/images/branches/jalampura_1.jpg",
      "/images/branches/jalampura_2.jpg",
      "/images/branches/jalampura_3.jpg",
      "/images/branches/jalampura_4.jpg",
      "/images/branches/jalampura_5.jpg",
      "/images/branches/jalampura_6.jpg"
    ],
    isHeadquarters: false,
    coordinates: { lat: 23.0225, lng: 72.5714 }
  },
  {
    id: "branch-haridwar",
    name: "Jagadanand Sahaj Kriyayog Kutir",
    branchName: "Haridwar Branch",
    state: "Uttarakhand",
    location: "Haridwar, Uttarakhand, India",
    phone: "+91 8250582147",
    email: "haridwar@satyanandashram.org",
    description: "A centre for meditation, Kriya Yoga and satsang located in one of India's most sacred pilgrimage cities.",
    about: "Located in one of India's holiest pilgrimage cities, the Haridwar centre offers seekers an opportunity to deepen their spiritual practice through meditation, Kriya Yoga, satsang, and devotional activities inspired by the Guru Parampara.",
    activities: [
      "Meditation",
      "Kriya Yoga",
      "Spiritual Discourses",
      "Satsang"
    ],
    surroundings: "Sacred Ganges pilgrimage atmosphere and serene meditation sanctuary.",
    image: "/images/branches/haridwar_1.jpg",
    images: [
      "/images/branches/haridwar_1.jpg"
    ],
    isHeadquarters: false,
    coordinates: { lat: 29.9457, lng: 78.1642 }
  },
  {
    id: "branch-dindori",
    name: "Jagadanand Sahaj Kriyayog Kutir",
    branchName: "Dindori Branch",
    state: "Madhya Pradesh",
    location: "Dindori, Madhya Pradesh, India",
    phone: "+91 8250582147",
    email: "dindori@satyanandashram.org",
    description: "Dedicated to spreading Kriya Yoga, meditation and Sanatan Dharma through the teachings of the Guru Parampara.",
    about: "The Dindori centre is dedicated to spreading the teachings of Kriya Yoga and Sanatan Dharma while providing a peaceful environment for meditation, spiritual learning, and devotional practice.",
    activities: [
      "Kriya Yoga",
      "Meditation",
      "Spiritual Guidance",
      "Devotional Gatherings"
    ],
    surroundings: "Serene natural forest and mountain foothills ideal for quiet inner reflection.",
    image: "/images/branches/indori_1.jpg",
    images: [
      "/images/branches/indori_1.jpg",
      "/images/branches/indori_2.jpg"
    ],
    isHeadquarters: false,
    coordinates: { lat: 22.9500, lng: 81.0800 }
  }
];

export const TEACHINGS: TeachingItem[] = [
  {
    id: "kriya-yoga",
    title: "Kriya Yoga Science",
    hindiTitle: "क्रिया योग साधना",
    bengaliTitle: "ক্রিয়া যোগ সাধনা",
    subtitle: "The Timeless Scientific Path to Divine Self-Realization",
    shortDescription: "An ancient psychophysiological technique handed down directly through Mahavatar Babaji to harmonize breath, life energy (Prana), and higher spiritual consciousness.",
    fullDescription: "Kriya Yoga is a simple, scientific, and non-sectarian method of psycho-physical breath control. By circulating life energy up and down the spinal axis through subtle pranayama, the seeker neutralizes mental restlessness and achieves effortless meditation. It accelerates human evolution safely under Guru guidance.",
    iconName: "Flame",
    benefits: [
      "Calms mental oscillations and reduces stress instantly.",
      "Awakens dormant spiritual energy along the spine.",
      "Promotes radiant physical health, vitality, and longevity.",
      "Direct experience of inner divine Light and Sound."
    ],
    practiceOverview: "Includes Kriya Pranayama, Mahamudra, Jyoti Mudra, and Paravastha meditation phases taught in direct initiation."
  },
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita Wisdom",
    hindiTitle: "श्रीमद्भगवद्गीता ज्ञान",
    bengaliTitle: "শ্রীমদ্ভগবদ্গীতা জ্ঞান",
    subtitle: "Eternal Blueprint for Victorious Living in the Modern World",
    shortDescription: "Systematic chapter-by-chapter discourses unpacking the deep allegorical and practical meanings of Lord Krishna's eternal dialogue with Arjuna.",
    fullDescription: "The Bhagavad Gita is not merely an ancient scripture; it is a live map of human consciousness. Present Guru Paramhans Gyanananda Maharaj illuminates the internal battlefield between good and negative tendencies, guiding seekers to perform duty without attachment (Karma Yoga) while remaining anchored in Supreme Realization.",
    iconName: "BookOpen",
    benefits: [
      "Clarity of mind during life decisions and crisis.",
      "Freedom from anxiety, fear, and emotional turmoil.",
      "Synthesis of Karma, Bhakti, and Gyana Yoga.",
      "Living with unbroken peace amidst daily responsibilities."
    ],
    practiceOverview: "Weekly Gita study circles, online shloka chanting sessions, and deep meditative commentaries."
  },
  {
    id: "bhagwat-katha",
    title: "Bhagwat Katha Saptah",
    hindiTitle: "श्रीमद्भागवत कथा",
    bengaliTitle: "শ্রীমদ্ভাগবত কথা",
    subtitle: "Immersing the Soul in Devotional Bliss and Divine Lilas",
    shortDescription: "7-Day sacred recitation and divine expositions of the Srimad Bhagavatam, invoking pure love for the Supreme Lord.",
    fullDescription: "Srimad Bhagwat Katha is the immortal nectar of Vedic wisdom. Through soulful narration, devotional kirtan, and profound spiritual expositions, Kathas organized by the Ashram ignite the flame of selfless devotion (Bhakti) in thousands of hearts.",
    iconName: "Heart",
    benefits: [
      "Purification of subtle impressions (Samskaras).",
      "Experiencing ecstatic devotional joy and peace.",
      "Deepening faith and connection with the Almighty.",
      "Community harmony and spiritual unity."
    ],
    practiceOverview: "Annual 7-day Kathas held at Gadrasini Pahar, Nanpa, Jalampur, and major cities across India."
  },
  {
    id: "sanatan-dharma",
    title: "Sanatan Dharma Values",
    hindiTitle: "सनातन धर्म संस्कार",
    bengaliTitle: "সনাতন ধর্ম সংস্কার",
    subtitle: "The Timeless Universal Science of Eternal Order & Peace",
    shortDescription: "Promoting ethical living, respect for nature, cow protection (Gau Seva), Vedic culture, and unity of all creation.",
    fullDescription: "Sanatan Dharma stands for universal cosmic principles that uphold harmony in creation. The Ashram actively teaches Vedic values, environmental conservation, tree planting around Gadrasini Pahar, and free food distribution (Annadaana).",
    iconName: "Sun",
    benefits: [
      "Fostering universal compassion and brotherhood.",
      "Eco-spiritual harmony with mother nature.",
      "Preserving sacred Vedic heritage for future generations.",
      "Selfless Seva as a spiritual discipline."
    ],
    practiceOverview: "Daily Yagya, Annadaana, Gau Seva, and youth character building camps."
  },
  {
    id: "self-realization",
    title: "Self Realization — 'Know Thyself'",
    hindiTitle: "आत्मज्ञान — खुद को जानो",
    bengaliTitle: "আত্মজ্ঞান — নিজেকে জানো",
    subtitle: "Discovering Your True Unchanging Divine Nature",
    shortDescription: "The direct call of Paramhans Gyanananda Maharaj to transcend temporary body-mind identity and abide in pure Atman.",
    fullDescription: "'Know Thyself' is the heart message of the present Acharya. By turning the outward-seeking senses inward through silent Kriya meditation, one transcends illusions of mortality and realizes the infinite bliss inherent within.",
    iconName: "Sparkles",
    benefits: [
      "Permanent freedom from spiritual ignorance.",
      "Unshakable peace regardless of external circumstances.",
      "Experience of oneness with all living beings.",
      "Fulfillment of the ultimate goal of human birth."
    ],
    practiceOverview: "Silent meditation retreats, daily introspection, and Satsang question-answer sessions."
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "guru-purnima-2027",
    title: "Grand Guru Purnima Mahotsav 2027",
    startDate: "2027",
    time: "05:00 AM – 09:00 PM",
    location: "Gadrasini Pahar Ashram, Belpahari",
    branchId: "headquarters-belpahari",
    description: "Annual sacred celebration honoring the timeless Guru Parampara. Program includes Special Kriya Initiation, Paduka Puja, Akhand Chanting, Spiritual Discourses by Paramhans Gyanananda Maharaj, and Grand Bhandara (Annadaana).",
    category: "Festival",
    isUpcoming: true,
    speaker: "Paramhans Gyanananda Maharaj"
  },
  {
    id: "kriya-camp-2027",
    title: "3-Day Intensive Kriya Yoga Sadhana Camp",
    startDate: "2027",
    time: "06:00 AM – 08:30 PM",
    location: "Gadrasini Pahar Foothills Meditation Complex",
    branchId: "headquarters-belpahari",
    description: "Residential meditation retreat focused on Kriya Pranayama refinements, silent introspective practices, forest walking meditation, and personal guidance from senior Sannyasis.",
    category: "Kriya Camp",
    isUpcoming: true,
    speaker: "Paramhans Gyanananda Maharaj & Senior Monks"
  },
  {
    id: "bhagwat-katha-nanpa",
    title: "Srimad Bhagwat Katha Saptah at Nanpa Narmada",
    startDate: "2027",
    time: "03:00 PM – 07:00 PM Daily",
    location: "Nanpa Ashram, Holy Narmada River Bank, MP",
    branchId: "branch-nanpa",
    description: "7 Days of nectarine Bhagwat Katha on the peaceful banks of holy Narmada. Devotees can participate in Narmada Aarti, Holy Dip, Katha listening, and daily Prasadam distribution.",
    category: "Bhagwat Katha",
    isUpcoming: true,
    speaker: "Paramhans Gyanananda Maharaj"
  },
  {
    id: "gita-jayanti-jalampur",
    title: "Gita Jayanti & Youth Spiritual Conclave",
    startDate: "2027",
    time: "09:00 AM – 05:00 PM",
    location: "Jalampur Ashram Complex, Gujarat",
    branchId: "branch-jalampur",
    description: "Full-day recitation of all 18 Chapters of Bhagavad Gita, interactive youth Q&A with Acharyas, book release, and community Satsang.",
    category: "Special Event",
    isUpcoming: true,
    speaker: "Paramhans Gyanananda Maharaj"
  },
  {
    id: "narmada-jayanti-2027-nanpa",
    title: "Narmada Jayanti Festival at Nanpa Branch",
    startDate: "February 13, 2027",
    time: "05:00 AM – 09:00 PM",
    location: "Nanpa Ghat, Jagadanand Sahaj Kriyayog Kutir, Narmadapuram (Hoshangabad), MP",
    branchId: "branch-nanpa",
    description: "Grand celebration on Magha Shukla Saptami marking the birth anniversary of Sacred River Narmada at Nanpa Ghat. Devotees participate in holy dip, Narmada worship, Parikrama, devotional hymns, floating wheat-flour diyas (lamps) on holy water, and grand evening Maha Aarti with Paramhans Gyanananda Maharaj.",
    category: "Festival",
    isUpcoming: true,
    speaker: "Paramhans Gyanananda Maharaj"
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "monsoon-plantation-drive",
    title: "Annual Green Gadrasini Pahar Plantation Drive Completed",
    date: "2026-07-10",
    category: "Ashram Activities",
    excerpt: "Over 5,000 native tree saplings planted across the foothills of Gadrasini Pahar by ashram volunteers and local tribal communities.",
    content: "In alignment with Sanatan Dharma's reverence for Mother Nature (Prakriti), Brahmarishi Satyananda Sannyas Ashram successfully organized its annual environmental drive. Ashram monastics alongside hundreds of devotees planted banyan, neem, peepal, and fruit trees across the hill surroundings.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    author: "Ashram Seva Media Team"
  },
  {
    id: "new-meditation-hall-inauguration",
    title: "New Dhyana Mandir Opened at Nanpa Narmada Ashram",
    date: "2026-06-21",
    category: "Branch Update",
    excerpt: "On International Day of Yoga, Paramhans Gyanananda Maharaj dedicated the newly constructed quiet meditation hall to all Kriya seekers.",
    content: "A spacious new meditation hall constructed with natural river stone and eco-friendly wood was dedicated on the holy banks of River Narmada. Designed specifically for deep silent Kriya meditation, the hall can accommodate up to 300 meditators.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    author: "Ashram Press"
  },
  {
    id: "free-medical-camp-belpahari",
    title: "Free Healthcare & Eye Checkup Camp Served 1,200 Villagers",
    date: "2026-05-15",
    category: "Social Seva",
    excerpt: "Belpahari rural tribes received free medical consultations, medicines, and cataract surgeries sponsored by Ashram devotees.",
    content: "As part of Swami Satyananda Giri Maharaj's ideal of 'Service to Man is Service to God', a team of specialist doctors provided free medical treatment, blood tests, and health kits to remote villagers near Gadrasini Pahar.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    author: "Healthcare Seva Wing"
  }
];

export const BOOK_PUBLICATIONS: BookPublication[] = [
  {
    id: "book-1",
    title: 'Jagdananda Charit',
    author: 'Paramhans Gyanananda',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Biographical exposition and spiritual guidance on Paramhans Jagdananda Giri Maharaj.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237C2D12%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23991B1B%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2226%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20Jagdananda%20Charit%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Paramhans%20Gyanananda%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-2",
    title: 'Giri Nirzar',
    author: 'Paramhans Gyanananda',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'A deep spiritual treatise on the lineage and teachings of Kriya Yoga Gurus.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231E3A8A%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231E40AF%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2226%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20Giri%20Nirzar%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Paramhans%20Gyanananda%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-3",
    title: 'Namami Maa Narmade',
    author: 'Paramhans Gyanananda',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Sacred glorification and spiritual significance of Holy Narmada River Parikrama and meditation.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23065F46%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23047857%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2226%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20Namami%20Maa%20Narmade%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Paramhans%20Gyanananda%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-4",
    title: 'स्तोत्रमाला',
    author: 'Swami Jagdananda Giri',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Collection of sacred Sanskrit stotrams, hymns, and chants for daily sadhana and devotion.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23701A75%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2386198F%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2226%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%BE%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Swami%20Jagdananda%20Giri%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-5",
    title: 'परमात्मा',
    author: 'Swami Jagdananda Giri',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Profound philosophical discourse on Paramatma, self-realization, and ultimate truth.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23881337%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239F1239%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2226%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20%E0%A4%AA%E0%A4%B0%E0%A4%AE%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%BE%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Swami%20Jagdananda%20Giri%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-6",
    title: 'गुरुगीता व्याख्या',
    author: 'Swami Jagdananda Giri',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Detailed spiritual commentary on Sri Guru Gita, highlighting the eternal role of the Guru.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23831843%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239D174D%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2226%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20%E0%A4%97%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Swami%20Jagdananda%20Giri%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-7",
    title: 'श्रीमद् भगवद्गीता पर आध्यात्मिक व्याख्या',
    author: 'Swami Jagdananda Giri',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Esoteric and practical spiritual commentary on Srimad Bhagavad Gita for seekers.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2378350F%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2392400E%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2217%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%A6%E0%A5%8D%20%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%A6%E0%A5%8D%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE%20%E0%A4%AA%E0%A4%B0%20%E0%A4%86%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%BF%E0%A4%95%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Swami%20Jagdananda%20Giri%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: "book-8",
    title: 'कैवल्य दर्शन: The Holy Science',
    author: 'Swami Yukteshwar Giri',
    language: "Hindi / Sanskrit / English",
    pages: 200,
    description: 'Classic spiritual masterwork by Swami Sri Yukteswar Giri comparing Christian Bible and Hindu Scriptures.',
    coverImage: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20560%22%20width%3D%22400%22%20height%3D%22560%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231F2937%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23374151%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spine%22%20cx%3D%2210%25%22%20cy%3D%2250%25%22%20r%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFFFFF%22%20stop-opacity%3D%220.2%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.5%22/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23bg%29%22/%3E%0A%20%20%3Crect%20width%3D%22400%22%20height%3D%22560%22%20rx%3D%228%22%20fill%3D%22url%28%23spine%29%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%22560%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.25%22/%3E%0A%20%20%3Cline%20x1%3D%2224%22%20y1%3D%220%22%20x2%3D%2224%22%20y2%3D%22560%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.5%22/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2236%22%20y%3D%2236%22%20width%3D%22328%22%20height%3D%22488%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%222%22%20stroke-opacity%3D%220.7%22%20stroke-dasharray%3D%2210%2C5%22/%3E%0A%20%20%3Crect%20x%3D%2244%22%20y%3D%2244%22%20width%3D%22312%22%20height%3D%22472%22%20rx%3D%226%22%20fill%3D%22none%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.9%22/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%2254%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%20%20%3Ccircle%20cx%3D%22346%22%20cy%3D%22506%22%20r%3D%224%22%20fill%3D%22%23FDE68A%22/%3E%0A%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2242%22%20fill%3D%22%23FEF3C7%22%20fill-opacity%3D%220.15%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22154%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2238%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%E0%A5%90%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22270%22%20font-family%3D%22Georgia%2C%20%27Noto%20Serif%20Devanagari%27%2C%20serif%22%20font-size%3D%2220%22%20fill%3D%22%23FFFFFF%22%20text-anchor%3D%22middle%22%20font-weight%3D%22bold%22%3E%0A%20%20%20%20%E0%A4%95%E0%A5%88%E0%A4%B5%E0%A4%B2%E0%A5%8D%E0%A4%AF%20%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%3A%20The%20Holy%20Science%0A%20%20%3C/text%3E%0A%0A%20%20%3Cline%20x1%3D%22120%22%20y1%3D%22330%22%20x2%3D%22280%22%20y2%3D%22330%22%20stroke%3D%22%23FDE68A%22%20stroke-width%3D%221.5%22%20stroke-opacity%3D%220.8%22/%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22375%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3E%0A%20%20%20%20Swami%20Yukteshwar%20Giri%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22475%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20fill%3D%22%23F1F5F9%22%20text-anchor%3D%22middle%22%20opacity%3D%220.8%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20SATYANANDA%20SANNYAS%20ASHRAM%0A%20%20%3C/text%3E%0A%20%20%3Ctext%20x%3D%22200%22%20y%3D%22492%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23FDE68A%22%20text-anchor%3D%22middle%22%20opacity%3D%220.7%22%3E%0A%20%20%20%20KRIYA%20YOGA%20PUBLICATIONS%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
];

export const YOUTUBE_PLAYLISTS = [
  {
    id: "pl-1",
    playlistId: "PLNcJhVp7EanvD1QYtdl4bRzBscMBqP8I9",
    title: "1. What is Kriyayog (क्या है क्रियायोग)",
    url: "https://www.youtube.com/playlist?list=PLNcJhVp7EanvD1QYtdl4bRzBscMBqP8I9",
    videoCount: 15,
    description: "Essential spiritual discourses, pravachans, and satsangs on Kriya Yoga, overcoming ego, and guru-bhakti by Paramhans Gyanananda Maharaj.",
    thumbnail: "https://i.ytimg.com/vi/RH8k3aCrBcY/hqdefault.jpg",
    featuredVideoIds: ["RH8k3aCrBcY", "RJX_mhnHjtg", "_j4heP0UR5M", "sis7-rmLvIk", "cjOv7awYwVI"]
  },
  {
    id: "pl-2",
    playlistId: "PLNcJhVp7EansyYXZcVvH-d5mPW3MSyu_B",
    title: "2. Bhagawat Katha by Paramhans Gyanananda",
    url: "https://www.youtube.com/playlist?list=PLNcJhVp7EansyYXZcVvH-d5mPW3MSyu_B",
    videoCount: 99,
    description: "Complete divine series of Srimad Bhagwat Katha discourses, spiritual stories, and nectarine pravachans by Paramhans Gyanananda Maharaj.",
    thumbnail: "https://i.ytimg.com/vi/0zIZl2ZM-0o/hqdefault.jpg",
    featuredVideoIds: ["0zIZl2ZM-0o", "5TSzSCZ8KsA", "wx1wx4siJtA", "p6mt7wsQBDg", "eWikfOX7zUo"]
  }
];

export const YOUTUBE_CHANNEL_INFO = {
  name: "Satyananda Sannyas Ashram - Kriyayoga",
  handle: "@SatyanandAshram",
  url: "https://www.youtube.com/@SatyanandAshram",
  latestVideos: [
    {
      id: "vid-channel-1",
      youtubeId: "7XApaYvisrE",
      title: "Kanu ! krishna Bhajan ! By Paramhansa Gyanananda",
      category: "Guru Vandana" as const,
      duration: "08:15",
      speaker: "Paramhans Gyanananda Maharaj",
      views: "12K views",
      date: "Latest Upload",
      thumbnail: "https://i.ytimg.com/vi/7XApaYvisrE/hqdefault.jpg"
    },
    {
      id: "vid-channel-2",
      youtubeId: "W8bEm_G-BUw",
      title: "सुहृदं सर्व भुतानाम Beautiful Pravachan by Pujya Gurudev Paramhansa Gyanananda",
      category: "Kriya Yoga" as const,
      duration: "18:42",
      speaker: "Paramhans Gyanananda Maharaj",
      views: "28K views",
      date: "Latest Upload",
      thumbnail: "https://i.ytimg.com/vi/W8bEm_G-BUw/hqdefault.jpg"
    },
    {
      id: "vid-channel-3",
      youtubeId: "vckhuf9sSOY",
      title: "हे अर्जुन...श्री गीता आमार हृदय | Hey Arjun... Sri Gita Amar Hriday | Krishna Bhajan",
      category: "Bhagavad Gita" as const,
      duration: "06:30",
      speaker: "Paramhans Gyanananda Maharaj",
      views: "35K views",
      date: "Latest Upload",
      thumbnail: "https://i.ytimg.com/vi/vckhuf9sSOY/hqdefault.jpg"
    },
    {
      id: "vid-channel-4",
      youtubeId: "Sy8pnOeRd9M",
      title: "Garrasinir Kole Kripa korle Na Asile Bhajan by Paramhansa Gyanananda",
      category: "Guru Vandana" as const,
      duration: "09:20",
      speaker: "Paramhans Gyanananda Maharaj",
      views: "19K views",
      date: "Latest Upload",
      thumbnail: "https://i.ytimg.com/vi/Sy8pnOeRd9M/hqdefault.jpg"
    }
  ]
};

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  ...YOUTUBE_CHANNEL_INFO.latestVideos,
  {
    id: "vid-1",
    youtubeId: "RH8k3aCrBcY",
    title: "मन का मत सुनो - Part 2 | सहज क्रियायोग सत्संग सभा",
    category: "Kriya Yoga",
    duration: "24:15",
    speaker: "Paramhans Gyanananda Maharaj",
    views: "145K views",
    date: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/RH8k3aCrBcY/hqdefault.jpg"
  },
  {
    id: "vid-2",
    youtubeId: "xG7T01uswew",
    title: "श्रीमद् भगवत गीता अध्याय 7 Shlok 29-30 | श्रीमद् भगवद्गीता प्रवचन",
    category: "Bhagavad Gita",
    duration: "42:10",
    speaker: "Paramhans Gyanananda Maharaj",
    views: "98K views",
    date: "8 months ago",
    thumbnail: "https://i.ytimg.com/vi/xG7T01uswew/hqdefault.jpg"
  },
  {
    id: "vid-3",
    youtubeId: "0zIZl2ZM-0o",
    title: "Bangla Bhagwat Kotha Day-2 (Part-1) by Paramhansa Gyanananda",
    category: "Bhagwat Katha",
    duration: "52:40",
    speaker: "Paramhans Gyanananda Maharaj",
    views: "210K views",
    date: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/0zIZl2ZM-0o/hqdefault.jpg"
  },
  {
    id: "vid-4",
    youtubeId: "cjOv7awYwVI",
    title: "गुरु भक्ति किसे कहते है ? | Paramhans Gyanananda Maharaj Pravachan",
    category: "Guru Vandana",
    duration: "28:22",
    speaker: "Paramhans Gyanananda Maharaj",
    views: "176K views",
    date: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/cjOv7awYwVI/hqdefault.jpg"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Jalampura Ashram - Main Ashram View & Dhyana Mandir",
    category: "Ashram & Temple",
    url: "/images/branches/jalampura_1.png",
    caption: "Panoramic view of Jagadanand Sahaj Kriyayog Kutir at Jalampura Branch, Gujarat."
  },
  {
    id: "gal-2",
    title: "Jagadanand Sahaj Kriyayog Kutir - Ganjit Branch Entrance",
    category: "Ashram & Temple",
    url: "/images/branches/ganjit_1.jpg",
    caption: "Main entrance and serene premises of Jagadanand Sahaj Kriyayog Kutir, Ganjit Branch."
  },
  {
    id: "gal-3",
    title: "Nanpa Ashram on Sacred Banks of Narmada River",
    category: "Ashram & Temple",
    url: "/images/branches/nanpa_1.jpg",
    caption: "Nanpa Ashram branch located along the holy Narmada River in Narmadapuram, MP."
  },
  {
    id: "gal-4",
    title: "Paramhansa Gyanananda Maharaj - Present Spiritual Head",
    category: "Guru Parampara",
    url: "/images/gurus/guru_6.png",
    caption: "Holy portrait of Paramhansa Gyanananda Maharaj, leading Kriya Yoga satsangs and sadhana camps."
  },
  {
    id: "gal-5",
    title: "Maun Mandir & Meditation Premises - Jalampura Ashram",
    category: "Meditation Camps",
    url: "/images/branches/jalampura_2.jpg",
    caption: "Dedicated Maun Mandir (Silence Temple) at Jalampura Branch for silent Kriya meditation."
  },
  {
    id: "gal-6",
    title: "Shri Radha Krishna Shrine - Jalampura Ashram",
    category: "Festivals",
    url: "/images/branches/jalampura_6.jpg",
    caption: "Devotional Radha Krishna deity altar at Jalampura Ashram where daily Aarti and Kirtans take place."
  },
  {
    id: "gal-7",
    title: "Jagadanand Sahaj Kriyayog Kutir Temple - Ganjit Branch",
    category: "Ashram & Temple",
    url: "/images/branches/ganjit_2.jpg",
    caption: "Sacred shrine at Ganjit Branch founded in memory of Param Pujya Swami Jagadananda Giri Maharaj."
  },
  {
    id: "gal-8",
    title: "Satsang & Devotional Gathering - Jalampura Ashram",
    category: "Festivals",
    url: "/images/branches/jalampura_4.jpg",
    caption: "Devotees gathered for Satsang and spiritual discourses at Jalampura Ashram during annual celebrations."
  },
  {
    id: "gal-9",
    title: "Param Preme-maya Swami Jagadananda Giri Maharaj",
    category: "Guru Parampara",
    url: "/images/gurus/guru_5.png",
    caption: "Holy image of Param Pujya Swami Jagadananda Giri Maharaj, founder of Gadrasini Pahar Ashram & Branches."
  },
  {
    id: "gal-10",
    title: "Holy Narmada River Ghat & Meditation Area - Nanpa",
    category: "Gadrasini Pahar",
    url: "/images/branches/nanpa_3.jpg",
    caption: "Tranquil river ghats at Nanpa Branch on the banks of Narmada where Parikramavasis and sadhaks meditate."
  },
  {
    id: "gal-11",
    title: "Sacred Meditation Garden - Ganjit Kutir",
    category: "Meditation Camps",
    url: "/images/branches/ganjit_6.jpg",
    caption: "Peaceful green courtyard at Ganjit Branch providing ideal atmosphere for Kriya Yoga practice."
  },
  {
    id: "gal-12",
    title: "Ganjit Ashram Main Prayer Gate & Holy Entrance",
    category: "Ashram & Temple",
    url: "/images/branches/ganjit_3.jpg",
    caption: "Welcoming archway and entrance pathway leading to Jagadanand Sahaj Kriyayog Kutir in Ganjit."
  },
  {
    id: "gal-13",
    title: "Jalampura Ashram Courtyard & Seva Grounds",
    category: "Seva Activities",
    url: "/images/branches/jalampura_5.jpg",
    caption: "Sadhak gathering area and Gau Shala surroundings at Jalampura Ashram, Gujarat."
  },
  {
    id: "gal-14",
    title: "Nanpa Ashram Satsang Hall & Prayer Arena",
    category: "Festivals",
    url: "/images/branches/nanpa_4.jpg",
    caption: "Satsang hall at Nanpa Branch where Srimad Bhagwat Kathas and Guru Purnima programs are hosted."
  },
  {
    id: "gal-15",
    title: "Swami Satyananda Giri Maharaj",
    category: "Guru Parampara",
    url: "/images/gurus/guru_4.png",
    caption: "Revered Kriya Guru Swami Satyananda Giri Maharaj, chief disciple of Swami Sri Yukteswar Giri Maharaj."
  },
  {
    id: "gal-16",
    title: "Gadrasini Pahar Spiritual Lineage - Sri Yukteswar Giri",
    category: "Gadrasini Pahar",
    url: "/images/gurus/guru_3.png",
    caption: "Swami Sri Yukteswar Giri Maharaj, fountainhead of wisdom in the revered Kriya Yoga lineage."
  },
  {
    id: "gal-17",
    title: "Morning View at Nanpa Ashram Narmada Banks",
    category: "Gadrasini Pahar",
    url: "/images/branches/nanpa_2.jpg",
    caption: "Serene morning view at Nanpa Ashram along Narmada River bank."
  },
  {
    id: "gal-18",
    title: "Inner Shrine Altar & Prasadam Arena - Ganjit Kutir",
    category: "Seva Activities",
    url: "/images/branches/ganjit_5.jpg",
    caption: "Inside view of Ganjit Ashram during morning prayer and Prasad distribution."
  },
  {
    id: "gal-19",
    title: "Jagadanand Sahaj Kriyayog Kutir - Nanpa Branch",
    category: "Branch Ashrams",
    url: "/images/branches/nanpa_6.jpg",
    caption: "Jagadanand Sahaj Kriyayog Kutir premises at Nanpa Branch, Narmadapuram, MP."
  },
  {
    id: "gal-20",
    title: "Jagadanand Sahaj Kriyayog Kutir - Jalampura Branch",
    category: "Branch Ashrams",
    url: "/images/branches/jalampura_1.jpg",
    caption: "Front view of Jagadanand Sahaj Kriyayog Kutir premises at Jalampura Branch, Gujarat."
  },
  {
    id: "gal-21",
    title: "Jagadanand Sahaj Kriyayog Kutir - Haridwar Branch",
    category: "Branch Ashrams",
    url: "/images/branches/haridwar_1.jpg",
    caption: "Jagadanand Sahaj Kriyayog Kutir premises at Haridwar Branch, Uttarakhand."
  },
  {
    id: "gal-22",
    title: "Jagadanand Sahaj Kriyayog Kutir - Indori Branch",
    category: "Branch Ashrams",
    url: "/images/branches/indori_1.jpg",
    caption: "Jagadanand Sahaj Kriyayog Kutir premises at Indori (Dindori) Branch, Madhya Pradesh."
  }
];

export const TESTIMONIALS: DevoteeTestimonial[] = [
  {
    id: "test-1",
    name: "Dr. Debabrata Roy",
    location: "Kolkata, West Bengal",
    associationYears: 18,
    quote: "Kriya Yoga initiation at Gadrasini Pahar completely restructured my internal life. The peaceful vibration of the Ashram is unlike anything else in India.",
    fullStory: "I first visited Belpahari Ashram in 2008 seeking relief from chronic stress. Receiving Kriya Yoga from Paramhans Gyanananda Maharaj brought deep inner quietude that stays with me every single day.",
    roleOrProfession: "Senior Medical Consultant"
  },
  {
    id: "test-2",
    name: "Sunita Sharma",
    location: "Ahmedabad, Gujarat",
    associationYears: 12,
    quote: "Listening to Paramhans Gyanananda Maharaj's Gita Kathas opened the spiritual light in my family. 'Know Thyself' is our daily guiding compass.",
    fullStory: "We attend the Jalampur branch regularly. The Ashram's emphasis on genuine spiritual practice without commercial showmanship is truly rare and inspiring.",
    roleOrProfession: "Educationist & Devotee"
  },
  {
    id: "test-3",
    name: "Rajeshwar Singh",
    location: "Indore, Madhya Pradesh",
    associationYears: 22,
    quote: "The Nanpa Ashram branch along the Narmada River is a piece of heaven. Practicing Kriya on the ghats at sunrise is pure divine nectar.",
    fullStory: "Having associated with the Ashram since Swami Jagadananda Giri Maharaj's times, I have witnessed how thousands of lives have transformed through authentic Kriya practice.",
    roleOrProfession: "Retired Civil Engineer"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Kriya Yoga",
    question: "How can I receive authentic Kriya Yoga initiation at the Ashram?",
    answer: "Kriya Yoga initiation is imparted directly by Paramhans Gyanananda Maharaj or authorized senior monastics during scheduled Kriya Camps at Gadrasini Pahar, Nanpa, or Jalampur branches. Interested seekers should fill out the Kriya Initiation Inquiry form on our website or visit during Satsang hours."
  },
  {
    id: "faq-2",
    category: "Kriya Yoga",
    question: "Do I need prior experience in yoga or meditation before learning Kriya?",
    answer: "No prior experience is necessary. Kriya Yoga is a universal, scientific technique suitable for householders, professionals, and monastics alike, regardless of age, background, or religious belief."
  },
  {
    id: "faq-3",
    category: "Ashram Visit",
    question: "Where is the main Ashram located and how can I reach there?",
    answer: "The main headquarters is located at Gadrasini Pahar, Belpahari, Jhargram district, West Bengal (PIN 721501). The nearest railway stations are Jhargram (approx. 40 km) and Ghatshila (approx. 35 km). Direct buses and taxis are available from Jhargram to Belpahari."
  },
  {
    id: "faq-4",
    category: "Ashram Visit",
    question: "Is accommodation and food available for visitors staying at the Ashram?",
    answer: "Yes, the Ashram provides simple, clean accommodation rooms (Guest Niwas) and wholesome sattvic prasadam meals for spiritual seekers. Advance booking or notification is appreciated."
  },
  {
    id: "faq-5",
    category: "Donations",
    question: "Are donations to Brahmarishi Satyananda Sannyas Ashram tax-exempt?",
    answer: "Yes, donations made to the Ashram qualify for 80G Tax Exemption under the Income Tax Act in India. Official receipts and tax exemption certificates are issued for all contributions."
  },
  {
    id: "faq-6",
    category: "Bhagwat Katha",
    question: "How can we organize a Bhagwat Katha or Gita Discourse in our city?",
    answer: "Devotees or Satsang committees wishing to host Bhagwat Katha or Gita discourses by Paramhans Gyanananda Maharaj can contact the Ashram office via phone at +91 90094 11592 / +91 99094 78275 or email gururagomon@gmail.com."
  }
];

export interface SpiritualDiscourseItem {
  id: string;
  title: string;
  category: string;
  speaker: string;
  description: string;
  thumbnail: string;
  youtubeId?: string;
}

export const SPIRITUAL_DISCOURSES: SpiritualDiscourseItem[] = [
  {
    id: 'disc-1',
    title: 'Why & What is Kriyayoga?',
    category: 'Kriya Yoga',
    speaker: 'Paramhans Gyanananda Maharaj',
    description: 'A foundational discourse exploring the scientific spiritual mechanics of Kriya Yoga, how prana control accelerates self-realization, and why Kriya Yoga is essential in modern life.',
    youtubeId: 'RH8k3aCrBcY',
    thumbnail: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20800%20450%27%20width%3D%27800%27%20height%3D%27450%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27grad%27%20x1%3D%270%25%27%20y1%3D%270%25%27%20x2%3D%27100%25%27%20y2%3D%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%237C2D12%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23EA580C%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27halo%27%20cx%3D%2750%25%27%20cy%3D%2740%25%27%20r%3D%2750%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23FFF8E7%27%20stop-opacity%3D%270.25%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23000000%27%20stop-opacity%3D%270.6%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23grad%29%27/%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23halo%29%27/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2720%27%20y%3D%2720%27%20width%3D%27760%27%20height%3D%27410%27%20rx%3D%2716%27%20fill%3D%27none%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%272%27%20stroke-opacity%3D%270.4%27%20stroke-dasharray%3D%2712%2C6%27/%3E%0A%20%20%3Crect%20x%3D%2728%27%20y%3D%2728%27%20width%3D%27744%27%20height%3D%27394%27%20rx%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27%23FEF3C7%27%20stroke-width%3D%271%27%20stroke-opacity%3D%270.6%27/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%27400%27%20cy%3D%27135%27%20r%3D%2745%27%20fill%3D%27%23F59E0B%27%20fill-opacity%3D%270.2%27%20stroke%3D%27%23FCD34D%27%20stroke-width%3D%271.5%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27149%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2738%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%E0%A5%90%3C/text%3E%0A%20%20%0A%20%20%3Crect%20x%3D%27240%27%20y%3D%27200%27%20width%3D%27320%27%20height%3D%2728%27%20rx%3D%2714%27%20fill%3D%27%23B45309%27%20fill-opacity%3D%270.85%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%271%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27218%27%20font-family%3D%27sans-serif%27%20font-size%3D%2712%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%20letter-spacing%3D%271.5%27%3EKRIYA%20YOGA%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27280%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2728%27%20fill%3D%27%23FFFFFF%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%0A%20%20%20%20Why%20%26%20What%20is%20Kriyayoga%3F%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27335%27%20font-family%3D%27sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%23FDE68A%27%20text-anchor%3D%27middle%27%20font-weight%3D%27600%27%3E%0A%20%20%20%20Paramhans%20Gyanananda%20Maharaj%0A%20%20%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27370%27%20font-family%3D%27sans-serif%27%20font-size%3D%2711%27%20fill%3D%27%23E2E8F0%27%20text-anchor%3D%27middle%27%20opacity%3D%270.85%27%3E%0A%20%20%20%20Satyananda%20Sannyas%20Ashram%20%E2%80%A2%20Spiritual%20Discourse%20Series%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: 'disc-2',
    title: 'Bhagvad Gita for all',
    category: 'Bhagavad Gita',
    speaker: 'Paramhans Gyanananda Maharaj',
    description: 'Practical life wisdom and eternal spiritual guidance derived from Srimad Bhagavad Gita, making ancient Gita shlokas understandable and applicable for everyday living.',
    youtubeId: 'xG7T01uswew',
    thumbnail: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20800%20450%27%20width%3D%27800%27%20height%3D%27450%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27grad%27%20x1%3D%270%25%27%20y1%3D%270%25%27%20x2%3D%27100%25%27%20y2%3D%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23831843%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23D97706%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27halo%27%20cx%3D%2750%25%27%20cy%3D%2740%25%27%20r%3D%2750%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23FFF8E7%27%20stop-opacity%3D%270.25%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23000000%27%20stop-opacity%3D%270.6%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23grad%29%27/%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23halo%29%27/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2720%27%20y%3D%2720%27%20width%3D%27760%27%20height%3D%27410%27%20rx%3D%2716%27%20fill%3D%27none%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%272%27%20stroke-opacity%3D%270.4%27%20stroke-dasharray%3D%2712%2C6%27/%3E%0A%20%20%3Crect%20x%3D%2728%27%20y%3D%2728%27%20width%3D%27744%27%20height%3D%27394%27%20rx%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27%23FEF3C7%27%20stroke-width%3D%271%27%20stroke-opacity%3D%270.6%27/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%27400%27%20cy%3D%27135%27%20r%3D%2745%27%20fill%3D%27%23F59E0B%27%20fill-opacity%3D%270.2%27%20stroke%3D%27%23FCD34D%27%20stroke-width%3D%271.5%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27149%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2738%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%E0%A5%90%3C/text%3E%0A%20%20%0A%20%20%3Crect%20x%3D%27240%27%20y%3D%27200%27%20width%3D%27320%27%20height%3D%2728%27%20rx%3D%2714%27%20fill%3D%27%23B45309%27%20fill-opacity%3D%270.85%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%271%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27218%27%20font-family%3D%27sans-serif%27%20font-size%3D%2712%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%20letter-spacing%3D%271.5%27%3EBHAGAVAD%20GITA%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27280%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2728%27%20fill%3D%27%23FFFFFF%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%0A%20%20%20%20Bhagvad%20Gita%20for%20all%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27335%27%20font-family%3D%27sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%23FDE68A%27%20text-anchor%3D%27middle%27%20font-weight%3D%27600%27%3E%0A%20%20%20%20Paramhans%20Gyanananda%20Maharaj%0A%20%20%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27370%27%20font-family%3D%27sans-serif%27%20font-size%3D%2711%27%20fill%3D%27%23E2E8F0%27%20text-anchor%3D%27middle%27%20opacity%3D%270.85%27%3E%0A%20%20%20%20Satyananda%20Sannyas%20Ashram%20%E2%80%A2%20Spiritual%20Discourse%20Series%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: 'disc-3',
    title: "Srimad Bhagawat : Lord Krishna's Divine Pasttimes",
    category: 'Srimad Bhagwat',
    speaker: 'Paramhans Gyanananda Maharaj',
    description: 'Immersion into the sweet, nectarine Leelas of Sri Krishna, exploring divine love, devotion (Bhakti), and the esoteric spiritual secrets behind Srimad Bhagwat Katha.',
    youtubeId: '0zIZl2ZM-0o',
    thumbnail: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20800%20450%27%20width%3D%27800%27%20height%3D%27450%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27grad%27%20x1%3D%270%25%27%20y1%3D%270%25%27%20x2%3D%27100%25%27%20y2%3D%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%231E3A8A%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%230284C7%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27halo%27%20cx%3D%2750%25%27%20cy%3D%2740%25%27%20r%3D%2750%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23FFF8E7%27%20stop-opacity%3D%270.25%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23000000%27%20stop-opacity%3D%270.6%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23grad%29%27/%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23halo%29%27/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2720%27%20y%3D%2720%27%20width%3D%27760%27%20height%3D%27410%27%20rx%3D%2716%27%20fill%3D%27none%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%272%27%20stroke-opacity%3D%270.4%27%20stroke-dasharray%3D%2712%2C6%27/%3E%0A%20%20%3Crect%20x%3D%2728%27%20y%3D%2728%27%20width%3D%27744%27%20height%3D%27394%27%20rx%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27%23FEF3C7%27%20stroke-width%3D%271%27%20stroke-opacity%3D%270.6%27/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%27400%27%20cy%3D%27135%27%20r%3D%2745%27%20fill%3D%27%23F59E0B%27%20fill-opacity%3D%270.2%27%20stroke%3D%27%23FCD34D%27%20stroke-width%3D%271.5%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27149%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2738%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%E0%A5%90%3C/text%3E%0A%20%20%0A%20%20%3Crect%20x%3D%27240%27%20y%3D%27200%27%20width%3D%27320%27%20height%3D%2728%27%20rx%3D%2714%27%20fill%3D%27%23B45309%27%20fill-opacity%3D%270.85%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%271%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27218%27%20font-family%3D%27sans-serif%27%20font-size%3D%2712%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%20letter-spacing%3D%271.5%27%3ESRIMAD%20BHAGWAT%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27280%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2728%27%20fill%3D%27%23FFFFFF%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%0A%20%20%20%20Srimad%20Bhagawat%20%3A%20Lord%20Krishna%27s%20Divine%20Pasttimes%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27335%27%20font-family%3D%27sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%23FDE68A%27%20text-anchor%3D%27middle%27%20font-weight%3D%27600%27%3E%0A%20%20%20%20Paramhans%20Gyanananda%20Maharaj%0A%20%20%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27370%27%20font-family%3D%27sans-serif%27%20font-size%3D%2711%27%20fill%3D%27%23E2E8F0%27%20text-anchor%3D%27middle%27%20opacity%3D%270.85%27%3E%0A%20%20%20%20Satyananda%20Sannyas%20Ashram%20%E2%80%A2%20Spiritual%20Discourse%20Series%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: 'disc-4',
    title: 'Guru Bhakti',
    category: 'Guru Bhakti',
    speaker: 'Paramhans Gyanananda Maharaj',
    description: 'Understanding true devotion to the Spiritual Master, surrender (Sharanagati), and how Guru Kripa awakens the latent Kundalini energy within the disciple.',
    youtubeId: 'cjOv7awYwVI',
    thumbnail: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20800%20450%27%20width%3D%27800%27%20height%3D%27450%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27grad%27%20x1%3D%270%25%27%20y1%3D%270%25%27%20x2%3D%27100%25%27%20y2%3D%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23701A75%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23C026D3%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27halo%27%20cx%3D%2750%25%27%20cy%3D%2740%25%27%20r%3D%2750%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23FFF8E7%27%20stop-opacity%3D%270.25%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23000000%27%20stop-opacity%3D%270.6%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23grad%29%27/%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23halo%29%27/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2720%27%20y%3D%2720%27%20width%3D%27760%27%20height%3D%27410%27%20rx%3D%2716%27%20fill%3D%27none%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%272%27%20stroke-opacity%3D%270.4%27%20stroke-dasharray%3D%2712%2C6%27/%3E%0A%20%20%3Crect%20x%3D%2728%27%20y%3D%2728%27%20width%3D%27744%27%20height%3D%27394%27%20rx%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27%23FEF3C7%27%20stroke-width%3D%271%27%20stroke-opacity%3D%270.6%27/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%27400%27%20cy%3D%27135%27%20r%3D%2745%27%20fill%3D%27%23F59E0B%27%20fill-opacity%3D%270.2%27%20stroke%3D%27%23FCD34D%27%20stroke-width%3D%271.5%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27149%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2738%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%E0%A5%90%3C/text%3E%0A%20%20%0A%20%20%3Crect%20x%3D%27240%27%20y%3D%27200%27%20width%3D%27320%27%20height%3D%2728%27%20rx%3D%2714%27%20fill%3D%27%23B45309%27%20fill-opacity%3D%270.85%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%271%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27218%27%20font-family%3D%27sans-serif%27%20font-size%3D%2712%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%20letter-spacing%3D%271.5%27%3EGURU%20BHAKTI%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27280%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2728%27%20fill%3D%27%23FFFFFF%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%0A%20%20%20%20Guru%20Bhakti%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27335%27%20font-family%3D%27sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%23FDE68A%27%20text-anchor%3D%27middle%27%20font-weight%3D%27600%27%3E%0A%20%20%20%20Paramhans%20Gyanananda%20Maharaj%0A%20%20%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27370%27%20font-family%3D%27sans-serif%27%20font-size%3D%2711%27%20fill%3D%27%23E2E8F0%27%20text-anchor%3D%27middle%27%20opacity%3D%270.85%27%3E%0A%20%20%20%20Satyananda%20Sannyas%20Ashram%20%E2%80%A2%20Spiritual%20Discourse%20Series%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: 'disc-5',
    title: 'Live Happy Married Life',
    category: 'Grihastha Life',
    speaker: 'Paramhans Gyanananda Maharaj',
    description: 'Spiritual principles for householders (Grihastha Sadhakas) on maintaining harmony, love, mutual respect, and spiritual practice amidst family responsibilities.',
    youtubeId: 'W8bEm_G-BUw',
    thumbnail: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20800%20450%27%20width%3D%27800%27%20height%3D%27450%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27grad%27%20x1%3D%270%25%27%20y1%3D%270%25%27%20x2%3D%27100%25%27%20y2%3D%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23065F46%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23059669%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27halo%27%20cx%3D%2750%25%27%20cy%3D%2740%25%27%20r%3D%2750%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23FFF8E7%27%20stop-opacity%3D%270.25%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23000000%27%20stop-opacity%3D%270.6%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23grad%29%27/%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23halo%29%27/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2720%27%20y%3D%2720%27%20width%3D%27760%27%20height%3D%27410%27%20rx%3D%2716%27%20fill%3D%27none%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%272%27%20stroke-opacity%3D%270.4%27%20stroke-dasharray%3D%2712%2C6%27/%3E%0A%20%20%3Crect%20x%3D%2728%27%20y%3D%2728%27%20width%3D%27744%27%20height%3D%27394%27%20rx%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27%23FEF3C7%27%20stroke-width%3D%271%27%20stroke-opacity%3D%270.6%27/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%27400%27%20cy%3D%27135%27%20r%3D%2745%27%20fill%3D%27%23F59E0B%27%20fill-opacity%3D%270.2%27%20stroke%3D%27%23FCD34D%27%20stroke-width%3D%271.5%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27149%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2738%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%E0%A5%90%3C/text%3E%0A%20%20%0A%20%20%3Crect%20x%3D%27240%27%20y%3D%27200%27%20width%3D%27320%27%20height%3D%2728%27%20rx%3D%2714%27%20fill%3D%27%23B45309%27%20fill-opacity%3D%270.85%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%271%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27218%27%20font-family%3D%27sans-serif%27%20font-size%3D%2712%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%20letter-spacing%3D%271.5%27%3EGRIHASTHA%20LIFE%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27280%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2728%27%20fill%3D%27%23FFFFFF%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%0A%20%20%20%20Live%20Happy%20Married%20Life%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27335%27%20font-family%3D%27sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%23FDE68A%27%20text-anchor%3D%27middle%27%20font-weight%3D%27600%27%3E%0A%20%20%20%20Paramhans%20Gyanananda%20Maharaj%0A%20%20%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27370%27%20font-family%3D%27sans-serif%27%20font-size%3D%2711%27%20fill%3D%27%23E2E8F0%27%20text-anchor%3D%27middle%27%20opacity%3D%270.85%27%3E%0A%20%20%20%20Satyananda%20Sannyas%20Ashram%20%E2%80%A2%20Spiritual%20Discourse%20Series%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
  {
    id: 'disc-6',
    title: 'Sadhana Sessions',
    category: 'Sadhana',
    speaker: 'Paramhans Gyanananda Maharaj',
    description: 'Guided instructions and practical discourses on daily meditation discipline, pranayama, posture stability, and inward concentration techniques.',
    youtubeId: '7XApaYvisrE',
    thumbnail: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20800%20450%27%20width%3D%27800%27%20height%3D%27450%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27grad%27%20x1%3D%270%25%27%20y1%3D%270%25%27%20x2%3D%27100%25%27%20y2%3D%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23881337%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23E11D48%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27halo%27%20cx%3D%2750%25%27%20cy%3D%2740%25%27%20r%3D%2750%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23FFF8E7%27%20stop-opacity%3D%270.25%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23000000%27%20stop-opacity%3D%270.6%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23grad%29%27/%3E%0A%20%20%3Crect%20width%3D%27800%27%20height%3D%27450%27%20fill%3D%27url%28%23halo%29%27/%3E%0A%20%20%0A%20%20%3Crect%20x%3D%2720%27%20y%3D%2720%27%20width%3D%27760%27%20height%3D%27410%27%20rx%3D%2716%27%20fill%3D%27none%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%272%27%20stroke-opacity%3D%270.4%27%20stroke-dasharray%3D%2712%2C6%27/%3E%0A%20%20%3Crect%20x%3D%2728%27%20y%3D%2728%27%20width%3D%27744%27%20height%3D%27394%27%20rx%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27%23FEF3C7%27%20stroke-width%3D%271%27%20stroke-opacity%3D%270.6%27/%3E%0A%20%20%0A%20%20%3Ccircle%20cx%3D%27400%27%20cy%3D%27135%27%20r%3D%2745%27%20fill%3D%27%23F59E0B%27%20fill-opacity%3D%270.2%27%20stroke%3D%27%23FCD34D%27%20stroke-width%3D%271.5%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27149%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2738%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%E0%A5%90%3C/text%3E%0A%20%20%0A%20%20%3Crect%20x%3D%27240%27%20y%3D%27200%27%20width%3D%27320%27%20height%3D%2728%27%20rx%3D%2714%27%20fill%3D%27%23B45309%27%20fill-opacity%3D%270.85%27%20stroke%3D%27%23FDE68A%27%20stroke-width%3D%271%27/%3E%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27218%27%20font-family%3D%27sans-serif%27%20font-size%3D%2712%27%20fill%3D%27%23FEF3C7%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%20letter-spacing%3D%271.5%27%3ESADHANA%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27280%27%20font-family%3D%27Georgia%2C%20serif%27%20font-size%3D%2728%27%20fill%3D%27%23FFFFFF%27%20text-anchor%3D%27middle%27%20font-weight%3D%27bold%27%3E%0A%20%20%20%20Sadhana%20Sessions%0A%20%20%3C/text%3E%0A%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27335%27%20font-family%3D%27sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%23FDE68A%27%20text-anchor%3D%27middle%27%20font-weight%3D%27600%27%3E%0A%20%20%20%20Paramhans%20Gyanananda%20Maharaj%0A%20%20%3C/text%3E%0A%20%20%0A%20%20%3Ctext%20x%3D%27400%27%20y%3D%27370%27%20font-family%3D%27sans-serif%27%20font-size%3D%2711%27%20fill%3D%27%23E2E8F0%27%20text-anchor%3D%27middle%27%20opacity%3D%270.85%27%3E%0A%20%20%20%20Satyananda%20Sannyas%20Ashram%20%E2%80%A2%20Spiritual%20Discourse%20Series%0A%20%20%3C/text%3E%0A%3C/svg%3E'
  },
];