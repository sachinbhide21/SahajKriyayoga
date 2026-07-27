import json
import re

babaji_sections = [
  {
    "id": "intro",
    "titleEn": "1. Introduction & Eternal Immortal Form",
    "titleHi": "1. प्रस्तावना एवं सनातन अमर स्वरूप",
    "contentEn": "Mahavatar Babaji Maharaj is revered as the immortal Mahaguru of the Kriya Yoga lineage. Radiating supreme spiritual power and endless compassion, Babaji remains in a physical body across centuries in the high Himalayas (Ranikhet, Dronagiri, Badrinath region), guiding earnest seekers through silent communion and divine grace.\n\nHis eternal form is shrouded in cosmic mystery. He is known not by earthly birth records, but by spiritual communion and unbroken grace. His true language is Silence: 'Silence is the true language of the Soul' (मौन ही आत्मा की वास्तविक भाषा है).",
    "contentHi": "महावतार बाबाजी महाराज क्रियायोग परंपरा के दिव्य अमर महागुरु के रूप में पूजित हैं। गुरु-परंपरा में वर्णित है कि वे साधकों के जीवन में आवश्यकता के समय प्रकट होकर आध्यात्मिक मार्गदर्शन और संरक्षण प्रदान करते हैं। उनका स्वरूप बाहरी परिचय से अधिक आंतरिक अनुभूति और गुरु-परंपरा की श्रद्धा का विषय है।\n\nहिमालय के उत्तुंग शिखरों (रानीखेत, द्रोणागिरि, बद्रीनाथ क्षेत्र) में अमर देह में निवास करते हुए वे युगों-युगों से मुमुक्षु साधकों को मौन प्रेरणा और असीम कृपा-दृष्टि प्रदान करते आ रहे हैं। उन्होंने सिखाया कि मौन ही आत्मा की वास्तविक भाषा है और ईश्वर प्रत्येक जीव के हृदय में विराजमान हैं।"
  },
  {
    "id": "revival-1861",
    "titleEn": "2. Revival of Kriya Yoga at Ranikhet (1861)",
    "titleHi": "2. रानीखेत (द्रोणागिरि) में क्रियायोग का पुनरुद्धार (1861)",
    "contentEn": "In Autumn 1861, Sri Shyamacharan Lahiri was transferred to Ranikhet in the Himalayas as an accountant for the British Military Engineering Department. Driven by an inner divine call, Lahiri Mahasaya walked up Drongiri mountain where Babaji called him by name:\n'Shyamacharan! Shyamacharan!'\n\nBabaji led him into a cave, gently touched his forehead, and dispelled past-life forgetfulness. Lahiri Mahasaya instantly recognized his past-life cave, seat, and kamandalu (water pot). To dissolve Lahiri's lingering past-life desire, Babaji materialized a magnificent, gem-studded Golden Palace.\n\nFollowing a holy Yagya, Babaji initiated Lahiri Mahasaya into the ancient science of Kriya Yoga—the same sacred yoga taught by Lord Krishna to Arjuna in the Bhagavad Gita. Babaji granted permission to disseminate Kriya Yoga to all earnest householders and seekers without distinction of caste, creed, or gender, proclaiming: 'Swalpamasya dharmasya trayate mahato bhayat' (Gita 2.40).",
    "contentHi": "सन् 1861 के शरद काल में ब्रिटिश सरकार के सैन्य विभाग में सेवा के दौरान श्यामाचरण लाहिड़ी का स्थानांतरण हिमालय प्रदेश के रानीखेत क्षेत्र में हुआ। एक दोपहर एक अज्ञात अलौकिक प्रेरणा से खिंचकर वे द्रोणागिरि पर्वत पर चढ़े। वहाँ पर्वत शिखर से एक स्पष्ट और गंभीर वाणी गूँजी—\n“श्यामाचरण! श्यामाचरण!”\n\nश्यामाचरण ऊपर पहुँचे और एक दिव्य तेजस्वी महात्मा के दर्शन किए। बाबाजी महाराज ने उन्हें गुफा में ले जाकर मस्तक स्पर्श किया। स्पर्श मात्र से अज्ञान का आवरण हट गया और लाहिड़ी महाशय को अपने पूर्वजन्मों का स्मरण हो आया—वही गुफा, वही आसन, वही कमंडलु और सामने खड़े उनके सनातन गुरुदेव!\n\nबाबाजी ने उनके पूर्वजन्म के अवशेष मनोरथ को मिटाने के लिए एक अत्यंत विशाल एवं अलौकिक मणिखचित स्वर्ण-प्रासाद की रचना की। तदनन्तर पवित्र यज्ञ और क्रियायोग की महान दीक्षा प्रदान की। बाबाजी ने ऐतिहासिक आज्ञा दी कि यह परम पावन क्रियायोग अब केवल संन्यासियों तक सीमित न रहकर संसार के समस्त गृहस्थों, मुमुक्षुओं और सरल हृदय साधकों के लिए सुलभ होगा—'स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्'।"
  },
  {
    "id": "prayag-kumbh-1894",
    "titleEn": "3. Prayag Kumbh Mela 1894 & Commissioning 'The Holy Science'",
    "titleHi": "3. प्रयागराज महाकुंभ 1894 एवं 'कैवल्य दर्शन' रचना की प्रेरणा",
    "contentEn": "In January 1894, during the Kumbh Mela at Prayagraj (Allahabad), Swami Sri Yukteswar Giri was resting under a banyan tree near the Ganges. Suddenly, Mahavatar Babaji appeared before him.\n\nAddressing Sri Yukteswar as 'Swami', Babaji requested him to write a treatise demonstrating the fundamental unity between Eastern Hindu scriptures (Sanatan Dharma) and Western Christian scriptures (Holy Bible).\n\nInspired by Babaji's command, Sri Yukteswar authored Kaivalya Darshan (The Holy Science), proving scientifically that truth is one and all sacred paths converge in the same supreme realization.",
    "contentHi": "जनवरी 1894 में प्रयागराज (इलाहाबाद) के महाकुंभ मेले में गंगा तट पर वटवृक्ष के नीचे स्वामी श्री युक्तेश्वर गिरिजी विराजमान थे। उसी समय महावतार बाबाजी महाराज दिव्य रूप में उनके समक्ष प्रकट हुए।\n\nबाबाजी ने श्री युक्तेश्वरजी को सम्बोधित करते हुए पूर्व (सनातन धर्म शास्त्र) और पश्चिम (बाइबल) के धर्मग्रंथों में निहित गूढ़ ऐक्य और सामंजस्य पर एक ग्रंथ लिखने की प्रेरणा व आदेश दिया।\n\nइसी पावन प्रेरणा के फलस्वरूप श्री युक्तेश्वरजी ने 'कैवल्य दर्शन' (The Holy Science) की रचना की, जिसने सिद्ध किया कि सत्य एक ही है और समस्त पवित्र ग्रंथ उसी परमेश्वर की ओर संकेत करते हैं।"
  },
  {
    "id": "yogananda-blessing",
    "titleEn": "4. Blessing Paramahansa Yogananda for America (1920)",
    "titleHi": "4. परमहंस योगानन्दजी को पाश्चात्य संदेश एवं दिव्य आशीर्वाद (1920)",
    "contentEn": "In 1920, prior to his departure for the United States to address the International Congress of Religious Liberals in Boston, young Mukunda (Paramahansa Yogananda) prayed intensely for divine confirmation.\n\nMahavatar Babaji materialized in Yogananda's room in Kolkata, comforting him:\n'You are the one I have chosen to spread the message of Kriya Yoga in the West. Long ago I met your guru Sri Yukteswar at a Kumbh Mela; I told him then I would send him a disciple he would train for the West. Fear not; my blessing is upon you.'",
    "contentHi": "सन् 1920 में बोस्टन (अमेरिका) में आयोजित अंतराष्ट्रीय धर्म सभा में भाग लेने के लिए अमेरिका प्रस्थान करने से पूर्व, युवा मुकुंद (परमहंस योगानन्दजी) अपने कोलकाता स्थित निवास पर गहरी प्रार्थना में लीन थे।\n\nउसी समय महावतार बाबाजी महाराज उनके कमरे में सशरीर प्रकट हुए और अभय प्रदान करते हुए बोले—\n“तुम ही वह साधक हो जिसे मैंने पाश्चात्य जगत में क्रियायोग का सन्देश फैलाने के लिए चुना है। बहुत समय पूर्व मैंने प्रयाग कुंभ में तुम्हारे गुरु श्री युक्तेश्वरजी से कहा था कि मैं उनके पास एक ऐसा शिष्य भेजूँगा जिसे वे पाश्चात्य देश के लिए तैयार करेंगे। भयभीत मत होओ, मेरा आशीर्वाद तुम्हारे साथ है।”"
  },
  {
    "id": "teachings-philosophy",
    "titleEn": "5. Core Teachings & Universal Philosophy",
    "titleHi": "5. प्रमुख उपदेश व सार्वभौमिक दर्शन",
    "contentEn": "1. Silence is the true language of the Soul (मौन ही आत्मा की वास्तविक भाषा है).\n2. Restraining mental modifications (चित्तवृत्ति का दमन) is true Meditation.\n3. Self-realization is abiding in one's eternal true nature, not acquiring something external.\n4. Serving living beings is direct worship of God residing in every heart.\n5. Humility, desirelessness, and unbroken devotion open the golden door of Kriya Yoga.",
    "contentHi": "1. मौन ही आत्मा की वास्तविक भाषा है।\n2. चित्तवृत्ति का दमन ही सच्चा ध्यान (साधना) है।\n3. आत्मोपलब्धि अपने सनातन स्वरूप में स्थित होना है, बाहर से कुछ नया अर्जित करना नहीं।\n4. प्रत्येक जीव में परमात्मा विराजमान हैं; निष्काम भाव से उनकी सेवा ही भगवान की प्रत्यक्ष पूजा है।\n5. अहंकार रहित विनम्रता, निष्कामता और अविरल निष्ठा ही क्रियायोग के दिव्य द्वार खोलती है।"
  },
  {
    "id": "lineage-presence",
    "titleEn": "6. Unbroken Lineage Transmission & Everlasting Grace",
    "titleHi": "6. अखण्ड गुरु-परंपरा एवं चिरंतन उपस्थिति",
    "contentEn": "From Mahavatar Babaji, the divine stream of Kriya Yoga flowed to Yogiraj Shyamacharan Lahiri Mahasaya, to Swami Sri Yukteswar Giri, to Brahmarishi Swami Satyananda Giri, to Swami Jagadananda Giri, and to present Acharya Paramhansa Gyanananda Giri Maharaj at Garhrasini Pahar Ashram.\n\nBabaji Maharaj remains physically and spiritually active in the Himalayas, showering silent, unbroken grace upon every sincere Kriya practitioner across the globe.",
    "contentHi": "महावतार बाबाजी महाराज से प्रस्फुटित क्रियायोग की यह पावन अमरावती धारा योगिराज श्यामाचरण लाहिड़ी महाशय, स्वामी श्री युक्तेश्वर गिरि, ब्रह्मर्षि स्वामी सत्यानंद गिरि, स्वामी जगदानंद गिरि और वर्तमान आचार्य परमहंस ज्ञानानंद महाराज के माध्यम से गड़रासिनी पहाड़ आश्रम में निरंतर प्रवाहित है।\n\nबाबाजी महाराज आज भी हिमालय की कंदराओं में अमर देह में विद्यमान हैं और सत्यनिष्ठ क्रियायोग साधकों के हृदय में नित्य कृपा बरसाते रहते हैं।"
  }
]

babaji_lilas = [
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

yukteswar_sections = [
  {
    "id": "intro-early",
    "titleEn": "1. Birth, Family Background & Academic Brilliance",
    "titleHi": "1. जन्म, पारिवारिक पृष्ठभूमि एवं उच्च शिक्षा",
    "contentEn": "Swami Sri Yukteswar Giri Maharaj was born Priyanath Karar on May 10, 1855, in Serampore (West Bengal) to Sri Kshetranath Karar and Srimati Kadambini Devi. His father was a wealthy landholder and deeply respected citizen.\n\nPriyanath exhibited extraordinary intellect, sharp logical acumen, and intense thirst for truth from early childhood. He pursued rigorous studies in science, astronomy, Sanskrit grammar, English, and Ayurvedic medicine at Serampore College and Calcutta Medical College.\n\nHe married and fulfilled householder responsibilities, having a daughter. After the passing of his wife, he dedicated his entire existence to scriptural study and spiritual renunciation.",
    "contentHi": "श्रीमत् स्वामी श्री युक्तेश्वर गिरि महाराज का पूर्वाश्रम नाम प्रियनाथ कारार था। उनका जन्म 10 मई 1855 ईस्वी को श्रीरामपुर (होली रिवर हुगली तट, पश्चिम बंगाल) में एक समृद्ध और धर्मनिष्ठ परिवार में हुआ। उनके पिता श्री क्षेत्रनाथ कारार और माता श्रीमती कादम्बिनी देवी थीं।\n\nबाल्यकाल से ही प्रियनाथ तीव्र बुद्धि, तार्किक प्रतिभा और सत्य की खोज के प्रति समर्पित थे। उन्होंने श्रीरामपुर कॉलेज और कलकत्ता मेडिकल कॉलेज में विज्ञान, खगोलशास्त्र, संस्कृत व्याकरण, अंग्रेजी और आयुर्वेद का गहरा अध्ययन किया।\n\nउन्होंने गृहस्थ धर्म का पालन किया और उनकी एक पुत्री हुई। धर्मपत्नी के देहावसान के उपरान्त उन्होंने संपूर्ण जीवन शास्त्र-चिंतन और योग-साधना को समर्पित कर दिया।"
  },
  {
    "id": "initiation-lahiri",
    "titleEn": "2. Kriya Initiation by Yogiraj Lahiri Mahasaya (1893)",
    "titleHi": "2. योगिराज श्यामाचरण लाहिड़ी महाशय से दीक्षा (1893)",
    "contentEn": "In Varanasi, Priyanath Karar met Yogiraj Shyamacharan Lahiri Mahasaya and was initiated into Kriya Yoga on July 9, 1893. Lahiri Mahasaya deeply admired his razor-sharp intellect and spiritual depth.\n\nPriyanath established a hermitage at Rai Ghat in Serampore, spending long hours in Kriya meditation and analyzing the Bhagavad Gita and Upanishads in the light of direct yoga experience.",
    "contentHi": "काशी में प्रियनाथ कारार ने योगिराज श्यामाचरण लाहिड़ी महाशय के दर्शन किए और 9 जुलाई 1893 को क्रियायोग की पावन दीक्षा ग्रहण की। लाहिड़ी महाशय उनकी सूक्ष्म प्रज्ञा और निर्मल साधना से अत्यंत प्रसन्न रहते थे।\n\nप्रियनाथ ने श्रीरामपुर के राय घाट पर एक आश्रम की स्थापना की और अहोरात्र क्रियायोग ध्यान व श्रीमद्भगवद्गीता और उपनिषदों की योगपरक व्याख्या में लीन रहने लगे।"
  },
  {
    "id": "holy-science",
    "titleEn": "3. Encounter with Babaji & Writing 'The Holy Science' (1894)",
    "titleHi": "3. प्रयाग कुंभ 1894, बाबाजी का आदेश एवं 'कैवल्य दर्शन'",
    "contentEn": "During the Allahabad Kumbh Mela in January 1894, Mahavatar Babaji met Priyanath Karar near the Ganges and addressed him as 'Swami'. Babaji commanded him to author a treatise demonstrating the essential harmony between Hindu Sanatan Dharma scriptures and Western Christian Bible teachings.\n\nPriyanath authored Kaivalya Darshan (The Holy Science) in Sanskrit and English, scientifically establishing the cosmic Yuga cycles and the oneness of sacred revelations across civilizations.",
    "contentHi": "जनवरी 1894 के प्रयागराज कुंभ मेले में गंगा तट पर महावतार बाबाजी महाराज ने प्रियनाथ कारार को दर्शन दिए और उन्हें 'स्वामी' सम्बोधन से अलंकृत किया। बाबाजी ने उन्हें पूर्व (हिन्दू उपनिषद/गीता) और पश्चिम (बाइबल) के ग्रंथों की मूल तात्विक एकता सिद्ध करने हेतु ग्रंथ रचना का आदेश दिया।\n\nप्रियानाथ ने 'कैवल्य दर्शन' (The Holy Science) की रचना की, जिसमें खगोलीय युग-चक्र (सत्ययुग, त्रेता, द्वापर, कलि) तथा पूर्व व पाश्चात्य दर्शन की अभेद एकता का अद्भुत वैज्ञानिक निरूपण किया गया।"
  },
  {
    "id": "karar-ashram-puri",
    "titleEn": "4. Founding Karar Ashram Puri (1903) & Ashram Discipline",
    "titleHi": "4. कड़ार आश्रम पूरी की स्थापना (1903) एवं कठोर नियम-अनुशासन",
    "contentEn": "On March 22, 1903, Sri Yukteswar established Karar Ashram at Swargadwar in Puri, Odisha, right on the shores of the Bay of Bengal. He formally took Sannyas under the Giri order of Shankara, taking the name Swami Sri Yukteswar Giri.\n\nKarar Ashram became a formidable citadel of strict spiritual discipline, Brahmacharya training, astrological wisdom, and Kriya Yoga sadhana. Sri Yukteswar insisted on absolute truthfulness, cleanliness, and intellectual honesty.",
    "contentHi": "22 मार्च 1903 को स्वामी श्री युक्तेश्वरजी ने ओडिशा की पवित्र जगन्नाथ पुरी में समुद्र तट (स्वर्गद्वार) पर 'कड़ार आश्रम' की आधारशिला रखी। उन्होंने शंकराचार्य परंपरा के गिरि सम्प्रदाय में संन्यास ग्रहण कर 'स्वामी श्री युक्तेश्वर गिरि' नाम धारण किया।\n\nकड़ार आश्रम क्रियायोग साधना, कठोर ब्रह्मचर्य, खगोल-ज्योतिष और अनुशासित जीवन का महान केंद्र बना। श्री युक्तेश्वरजी का नियम था कि साधक के जीवन में कथनी और करनी में रत्ती भर भी अंतर नहीं होना चाहिए।"
  },
  {
    "id": "training-yogananda",
    "titleEn": "5. Training Paramahansa Yogananda for the West",
    "titleHi": "5. परमहंस योगानन्दजी का १० वर्षों का कठोर प्रशिक्षण",
    "contentEn": "In 1910, young Mukunda Giri met Sri Yukteswar at Serampore market. Sri Yukteswar embraced him warmly, saying:\n'My son, you have come! How many years I have waited for you!'\n\nFor ten rigorous years, Sri Yukteswar disciplined Yogananda, burning away ego and polishing him into a spiritual world-teacher sent to America in 1920 to spread Kriya Yoga globally.",
    "contentHi": "सन् 1910 में श्रीरामपुर बाजार में युवा मुकुंद ने स्वामी श्री युक्तेश्वरजी के दर्शन किए। श्री युक्तेश्वरजी ने उन्हें देखते ही आलिंगनबद्ध कर लिया और बोले—\n“बेटा, तुम आ गए! मैं कितने वर्षों से तुम्हारी प्रतीक्षा कर रहा था!”\n\nअगले दस वर्षों तक श्री युक्तेश्वरजी ने मुकुंद (परमहंस योगानन्दजी) को कठोर अनुशासन में गढ़ा और 1920 में क्रियायोग के विश्वव्यापी प्रचार के लिए अमेरिका भेजा।"
  },
  {
    "id": "mahasamadhi-resurrection",
    "titleEn": "6. Mahasamadhi (1936) & Astral Resurrection in Mumbai",
    "titleHi": "6. महासमाधि (1936) एवं मुंबई में अलौकिक पुनरागमन",
    "contentEn": "On March 9, 1936, Swami Sri Yukteswar Giri entered Conscious Mahasamadhi in Lotus posture at Karar Ashram, Puri.\n\nIn June 1936, while Yogananda was mourning his Master at the Regent Hotel in Mumbai, Sri Yukteswar materialized before him in physical warmth and glowing light. He revealed the grand mysteries of the Astral World (Hiranyaloka) and assured Yogananda of eternal spiritual immortality.",
    "contentHi": "9 मार्च 1936 को स्वामी श्री युक्तेश्वर गिरि महाराज ने कड़ार आश्रम पूरी में पद्मासन में समाधिस्थ होकर महासमाधि ली।\n\nजून 1936 में जब योगानन्दजी मुंबई के रीजेंट होटल में गुरुदेव के विरह में रो रहे थे, तब श्री युक्तेश्वरजी सजीव, उष्ण और तेजोमय रूप में कमरे में प्रकट हुए। उन्होंने योगानन्दजी को सूक्ष्मालोक (हिरण्यलोक) के दिव्य रहस्यों का साक्षात ज्ञान कराया और अपनी अमरता का प्रमाण दिया।"
  }
]

yukteswar_lilas = [
  {
    "titleEn": "1. Reviving Friend Ram from Death by Cholera",
    "titleHi": "1. मित्र राम को हैजा से पुनर्जीवन",
    "textEn": "When Sri Yukteswar's friend Ram died of cholera, Sri Yukteswar prayed to Lahiri Mahasaya. Following Lahiri Mahasaya's instruction, Sri Yukteswar poured seven drops of lamp oil into Ram's mouth; upon the seventh drop, Ram breathed again and revived.",
    "textHi": "श्री युक्तेश्वरजी के मित्र राम की हैजा से मृत्यु हो गई। गुरुदेव लाहिड़ी महाशय के आदेशानुसार उन्होंने राम के मुख में चिराग के तेल की सात बूँदें डालीं; सातवीं बूँद गिरते ही राम जीवित हो उठे।"
  },
  {
    "titleEn": "2. Meeting Mahavatar Babaji at Prayag Kumbh Mela (1894)",
    "titleHi": "2. प्रयाग कुंभ में बाबाजी महाराज से अलौकिक भेंट (1894)",
    "textEn": "Encountered Mahavatar Babaji under a banyan tree on the Ganges bank during the 1894 Kumbh Mela, receiving the command to write 'The Holy Science'.",
    "textHi": "1894 के प्रयाग महाकुंभ में बाबाजी महाराज से भेंट कर 'कैवल्य दर्शन' (The Holy Science) की रचना का पावन आदेश प्राप्त किया।"
  },
  {
    "titleEn": "3. First Meeting with Mukunda in Serampore Market (1910)",
    "titleHi": "3. श्रीरामपुर बाजार में युवा मुकुंद (योगानन्दजी) से प्रथम मिलन (1910)",
    "textEn": "Recognized young Mukunda in Serampore market, declaring that Babaji had promised to send him a chosen disciple to be trained for the Western world.",
    "textHi": "श्रीरामपुर बाजार में युवा मुकुंद को देखते ही पहचान लिया और बाबाजी महाराज की भविष्यवाणी स्मरण कर उन्हें अपना प्रधान शिष्य स्वीकार किया।"
  },
  {
    "titleEn": "4. Astrological Bangles & Controlling Cosmic Energies",
    "titleHi": "4. ज्योतिषीय कंगन व ग्रहों के कुप्रभाव का शमन",
    "textEn": "Prescribed specific metals and astrological bangles to disciples, mitigating planetary karmic afflictions through cosmic ray harmonization.",
    "textHi": "साधकों के ग्रहों के अशुभ प्रभाव को निष्फल करने के लिए विशिष्ट धातुओं के कंगन पहनने का विधान किया और कॉस्मिक तरंगों से उनके स्वास्थ्य की रक्षा की।"
  },
  {
    "titleEn": "5. Astral Resurrection in Mumbai & Revelation of Hiranyaloka (1936)",
    "titleHi": "5. मुंबई के रीजेंट होटल में देहातीत पुनरागमन व हिरण्यलोक का वर्णन (1936)",
    "textEn": "Materialized in living physical touch before Yogananda at Mumbai in June 1936 after his Mahasamadhi, revealing the structure of the Astral Universe (Hiranyaloka).",
    "textHi": "महासमाधि के तीन माह बाद जून 1936 में मुंबई के रीजेंट होटल में योगानन्दजी के समक्ष सशरीर प्रकट होकर हिरण्यलोक (सूक्ष्मालोक) के रहस्यों का उद्घाटन किया।"
  }
]

satyananda_sections = [
  {
    "id": "birth-education",
    "titleEn": "1. Birth, Family Background & Academic Excellence",
    "titleHi": "1. जन्म, पारिवारिक पृष्ठभूमि एवं उच्च शिक्षा",
    "contentEn": "Brahmarishi Swami Satyananda Giri Maharaj was born Manmohan Majumdar on November 17, 1896, in Vikrampur (Meghna Nagar, East Bengal / Bangladesh) to Sri Umesh Chandra Majumdar and Srimati Kshiroda Devi. His father was a deeply religious man of high integrity.\n\nManmohan possessed a remarkable intellect, passion for truth, and deep reverence for spiritual sadhakas from early boyhood. He earned his B.A. Honors in Philosophy from Scottish Church College, Kolkata, excelling in Western and Eastern philosophical thought.",
    "contentHi": "ब्रह्मर्षि श्रीमत् स्वामी सत्यानन्द गिरि महाराज का जन्म 17 नवम्बर 1896 ईस्वी को पूर्व बंगाल के विक्रमपुर (मेघना नगर) में हुआ। उनके पिता श्री उमेशचंद्र मजूमदार और माता श्रीमती क्षीरोदा देवी थीं। बाल्यावस्था में उनका नाम मनमोहन था।\n\nमनमोहन बाल्यावस्था से ही सत्य की खोज, प्रकृति-प्रेम और साधु-संतों के प्रति गहरी श्रद्धा रखते थे। उन्होंने कलकत्ता के विख्यात स्कॉटिश चर्च कॉलेज से दर्शनशास्त्र में बी.ए. ऑनर्स की उपाधि प्राप्त की।"
  },
  {
    "id": "discipleship-yogananda",
    "titleEn": "2. Initiation by Sri Yukteswar & Brotherhood with Yogananda",
    "titleHi": "2. श्री युक्तेश्वरजी से दीक्षा एवं योगानन्दजी से प्रगाढ़ भ्रातृत्व",
    "contentEn": "During his student days in Kolkata, Manmohan met Swami Sri Yukteswar Giri Maharaj at Serampore Ashram and was initiated into Kriya Yoga. He became an intimate boyhood friend and spiritual brother of Mukunda (Paramahansa Yogananda).\n\nIn 1917, together with Yogananda, he founded the Satsanga / Brahmacharya Ashram School at Dihika, Bengal, combining academic study with Kriya Yoga meditation.",
    "contentHi": "छात्र जीवन के दौरान मनमोहन ने श्रीरामपुर आश्रम में स्वामी श्री युक्तेश्वर गिरिजी के दर्शन किए और क्रियायोग की पावन दीक्षा ली। वे मुकुंद (परमहंस योगानन्दजी) के अभिन्न बाल-सखा और प्रिय गुरुभाई बने।\n\n1917 में उन्होंने योगानन्दजी के साथ मिलकर दिहिका (बंगाल) में सतसंग/ब्रह्मचर्य विद्यालय की स्थापना की, जहाँ शिक्षा के साथ-साथ ध्यान और चरित्र-निर्माण का शिक्षण दिया जाता था।"
  },
  {
    "id": "ranchi-ashram-leadership",
    "titleEn": "3. Leadership of Ranchi Ashram & School (1920 – 1938)",
    "titleHi": "3. राँची आश्रम एवं ब्रह्मचर्य विद्यालय का महान संचालन (1920)",
    "contentEn": "In 1918, the school shifted to Ranchi on a sprawling campus donated by the Maharaja of Kasimbazar as Ranchi Brahmacharya Vidyalaya (Yogoda Satsanga Society).\n\nWhen Yogananda departed for America in 1920, Swami Satyananda Giri assumed complete leadership as Principal and Spiritual Head of Ranchi Ashram for over two decades. He nurtured hundreds of young students in 'How-to-Live' principles, physical culture, agriculture, and Kriya Yoga.",
    "contentHi": "1818 में कासिमबाजार के महाराजा द्वारा प्रदत्त विशाल भूमि पर यह विद्यालय राँची स्थानांतरित हुआ और राँची ब्रह्मचर्य विद्यालय के रूप में विख्यात हुआ।\n\n1920 में जब योगानन्दजी अमेरिका गए, तब स्वामी सत्यानन्दजी ने दो दशकों से अधिक समय तक राँची आश्रम और विद्यालय का सर्वतोभावेन कुशल संचालन किया। उन्होंने विद्यार्थियों को अनुशासित जीवन, कृषि, शारीरिक व्यायाम और क्रियायोग साधना में निपुण बनाया।"
  },
  {
    "id": "shivayatan-tribal-service",
    "titleEn": "4. Founding Shivayatan Ashram & Tribal Community Service",
    "titleHi": "4. शिवायतन आश्रम की स्थापना एवं ग्रामीण-आदिवासी सेवा-यज्ञ",
    "contentEn": "Driven by intense compassion for the poor, Swami Satyananda Giri founded Shivayatan Ashram at Sevayatan (Jhargram / Medinipur) and branch hermitages across Bengal, Bihar, and Orissa.\n\nHe dedicated his life to the upliftment of impoverished tribal communities (Santhals, Sabars), establishing free primary schools, charitable dispensaries, textile weaving centers, and food distribution drives, exemplifying Swami Sri Yukteswar's motto: 'Service to Man is Service to God'.",
    "contentHi": "दीन-दुखियों के प्रति अपार करुणा से द्रवित होकर स्वामी सत्यानन्दजी ने सेवायतन (झाड़ग्राम/मेदिनीपुर सीमा) में 'शिवायतन आश्रम' तथा बंगाल, बिहार व उड़ीसा में अनेक शाखा आश्रमों की स्थापना की।\n\nउन्होंने अपना जीवन संथाल व शबर आदिवासी जनजातियों के कल्याण हेतु समर्पित कर दिया। निःशुल्क प्राथमिक विद्यालय, धर्मार्थ चिकित्सालय, वस्त्र-बुनाई केंद्र और अन्नदान चलाकर उन्होंने स्वामी श्री युक्तेश्वरजी के वाक्य—'मानव सेवा ही ईश्वर सेवा है' को साकार किया।"
  },
  {
    "id": "writings-sadhana",
    "titleEn": "5. Austerity, Writings & Disciple Lineage",
    "titleHi": "5. तपोमय जीवन, साहित्य रचना एवं शिष्य-परंपरा",
    "contentEn": "Swami Satyananda Giri was a prolific writer and scholar, authoring the official biography Sri Sri Swami Sri Yukteswar Giri Jivani, Bengali commentaries on the Srimad Bhagavad Gita, and Patanjali Yoga Sutras.\n\nHe initiated worthy monastic disciples into Sannyas, including Swami Jagadananda Giri Maharaj, transmitting the pure unbroken flame of Kriya Yoga.",
    "contentHi": "स्वामी सत्यानन्दजी एक प्रकांड विद्वान और लेखक थे। उन्होंने गुरुदेव की प्रामाणिक जीवनी 'श्री श्री स्वामी युक्तेश्वर गिरि जीवनी', श्रीमद्भगवद्गीता तथा पातंजल योगसूत्र पर बंगला टीका की रचना की।\n\nउन्होंने स्वामी जगदानंद गिरि महाराज सहित अनेक सुयोग्य साधकों को संन्यास व क्रियायोग में दीक्षित कर परंपरा को संवर्धित किया।"
  },
  {
    "id": "mahasamadhi-legacy",
    "titleEn": "6. Mahasamadhi (1971) & Immortal Spiritual Legacy",
    "titleHi": "6. महासमाधि (1971) एवं अमर आध्यात्मिक वसीयत",
    "contentEn": "In August 1971, Brahmarishi Swami Satyananda Giri Maharaj entered Mahasamadhi, leaving behind an immortal legacy of Kriya Yoga sadhana, character building, and selfless social service.",
    "contentHi": "अगस्त 1971 में ब्रह्मर्षि स्वामी सत्यानन्द गिरि महाराज महासमाधि में लीन हुए। उनका त्यागमय जीवन और मानव सेवा का संकल्प आज भी जन-जन के लिए प्रेरणापुंज है।"
  }
]

satyananda_lilas = [
  {
    "titleEn": "1. Founding Dihika & Ranchi Brahmacharya Schools (1917-1918)",
    "titleHi": "1. दिहिका व राँची ब्रह्मचर्य विद्यालय की स्थापना (1917-1918)",
    "textEn": "Co-founded the pioneering 'How-to-Live' educational institution with Yogananda, integrating academic learning with Kriya Yoga and moral character building.",
    "textHi": "योगानन्दजी के साथ मिलकर दिहिका व राँची में ब्रह्मचर्य विद्यालय की नींव रखी, जहाँ आधुनिक शिक्षा के साथ क्रियायोग व नैतिक चरित्र का निर्माण किया जाता था।"
  },
  {
    "titleEn": "2. Guiding Ranchi Ashram During Yogananda's Mission to America",
    "titleHi": "2. योगानन्दजी के अमेरिका प्रस्थान पश्चात् राँची आश्रम का नेतृत्व",
    "textEn": "Managed Ranchi Ashram for over twenty years during Yogananda's stay in the US, nurturing hundreds of students and monks with fatherly care.",
    "textHi": "1920 में योगानन्दजी के पाश्चात्य देश जाने के बाद दो दशकों तक राँची आश्रम का कुशल नेतृत्व किया और सैकड़ों विद्यार्थियों का जीवन सँवारा।"
  },
  {
    "titleEn": "3. Service to Santhal & Sabar Tribal Communities at Sevayatan",
    "titleHi": "3. सेवायतन में संथाल व शबर आदिवासियों की निष्काम सेवा",
    "textEn": "Established Shivayatan Ashram at Sevayatan, providing free education, healthcare, and clothing to underprivileged tribal families.",
    "textHi": "सेवायतन में शिवायतन आश्रम बनाकर गरीब आदिवासी बस्तियों में निःशुल्क अन्नदान, वस्त्र वितरण व चिकित्सा सेवा का विशाल यज्ञ चलाया।"
  },
  {
    "titleEn": "4. Authoring 'Sri Sri Swami Sri Yukteswar Giri Jivani' & Gita Commentaries",
    "titleHi": "4. 'श्री श्री स्वामी युक्तेश्वर गिरि जीवनी' व गीता भाष्य की रचना",
    "textEn": "Penned the definitive authentic biography of Swami Sri Yukteswar Giri Maharaj and insightful commentaries on the Gita and Patanjali Yoga Sutras.",
    "textHi": "अपने पूज्य गुरुदेव स्वामी श्री युक्तेश्वरजी की प्रामाणिक जीवनी और श्रीमद्भगवद्गीता व योगसूत्र पर उत्कृष्ट ग्रंथों का प्रणयन किया।"
  },
  {
    "titleEn": "5. Initiating Swami Jagadananda Giri & Transmitting Lineage Grace",
    "titleHi": "5. स्वामी जगदानन्दजी को दीक्षा व क्रियायोग परंपरा का हस्तांतरण",
    "textEn": "Granted Brahmacharya and Sannyas initiation to Swami Jagadananda Giri Maharaj, empowering him to found Belpahari Ashram.",
    "textHi": "स्वामी जगदानन्द गिरि महाराज को दीक्षा व आशीर्वाद प्रदान कर गड़रासिनी पहाड़ आश्रम की स्थापना का मार्ग प्रशस्त किया।"
  }
]

jagadananda_sections = [
  {
    "id": "birth-prophecy",
    "titleEn": "1. Birth, Family Background & Sacred Prophecy",
    "titleHi": "1. जन्म, पारिवारिक पृष्ठभूमि एवं दिव्य भविष्यवाणी",
    "contentEn": "Swami Jagadananda Giri Maharaj was born Jagannath Ghosh on May 21, 1934 (7th Jyeshtha, 1341 Bengabda) in Kiyari village, Dantan, Paschim Medinipur, West Bengal to Sri Purna Chandra Ghosh and Srimati Kshiroda Devi. His father was a devout and honest householder.\n\nOn the 6th day after his birth (Shashti), a wandering saint visited their home, held the infant in his arms, and prophesied:\n'This child is not an ordinary mortal; he will renounce worldly ties and guide thousands toward God-realization.'",
    "contentHi": "परम प्रेममय श्रीमत् स्वामी जगदानन्द गिरि महाराज का जन्म 21 मई 1934 ईस्वी (7 ज्येष्ठ, 1341 बंगाब्द) को कियारी ग्राम (दांतन, पश्चिम मेदिनीपुर, पश्चिम बंगाल) में हुआ। उनके पिता श्री पूर्णचंद्र घोष और माता श्रीमती क्षीरोदा देवी थीं। बाल्यावस्था में उनका नाम जगन्नाथ था।\n\nजन्म के छठवें दिन (षष्ठी) एक भ्रमणशील अवधूत संत घर पधारे। उन्होंने बालक को गोद में उठाकर आशीर्वाद देते हुए भविष्यवाणी की—\n“यह बालक साधारण मनुष्य नहीं है; यह संसार के बंधनों को त्यागकर हज़ारों जीवों को ईश्वर-मार्ग दिखाएगा।”"
  },
  {
    "id": "dispassion-renunciation",
    "titleEn": "2. Dispassion, Renunciation (1962) & Shivayatan Ashram Arrival",
    "titleHi": "2. बाल्यावस्था के संस्कार, वैराग्य एवं गृहत्याग (1962)",
    "contentEn": "From early childhood, Jagannath exhibited extreme innocence, truthfulness, and love for silent prayer at the village Shiva temple. In 1962, felt an irresistible inner call to dedicate his life entirely to God; he left home without money or belongings and reached Shivayatan Ashram.\n\nHe received Brahmacharya initiation under the holy remembrance of Brahmarishi Swami Satyananda Giri Maharaj, immersing himself in intense Kriya Yoga sadhana.",
    "contentHi": "बाल्यावस्था से ही जगन्नाथ अत्यंत सरल, निष्कपट और गाँव के शिव मंदिर में घंटों प्रार्थना करने वाले बालक थे। 1962 में उनके हृदय में तीव्र वैराग्य की ज्वाला प्रज्वलित हुई। वे बिना धन या सामग्री लिए चुपचाप गृहत्याग कर शिवायतन आश्रम पहुँचे।\n\nवहाँ उन्होंने ब्रह्मर्षि स्वामी सत्यानन्द गिरि महाराज की पावन स्मृति में ब्रह्मचर्य दीक्षा ग्रहण की और कठोर क्रियायोग साधना में लीन हो गए।"
  },
  {
    "id": "narmada-parikrama",
    "titleEn": "3. 3.5 Years Barefoot Narmada River Parikrama",
    "titleHi": "3. 3.5 वर्ष की कठोर नंगे पैर पवित्र नर्मदा परिक्रमा",
    "contentEn": "Swami Jagadananda Giri undertook the grueling 3.5-year barefoot pilgrimage around the holy Narmada River (Omkareshwar, Amarkantak, Maheshwar).\n\nLiving solely on unasked alms (Madhukari), he slept under trees and riverbanks, enduring scorching heat, torrential monsoon rains, and wild forest animals in unbroken silent Kriya meditation.",
    "contentHi": "स्वामी जगदानन्दजी ने पवित्र नर्मदा नदी की 3.5 वर्ष की अत्यंत कठिन नंगे पैर परिक्रमा (ओंकारेश्वर, अमरकंटक, महेश्वर) पूर्ण की।\n\nवे केवल अयाचित भिक्षा (मधुकरी) पर जीवन निर्वाह करते थे। जंगलों, वृक्षों के नीचे और नदी के कछारों में सोते हुए, भीषण गर्मी, वर्षा और हिंसक पशुओं के बीच वे निरन्तर मौन क्रियायोग ध्यान में लीन रहे।"
  },
  {
    "id": "founding-belpahari-ashram",
    "titleEn": "4. Founding Belpahari Garhrasini Ashram (1971)",
    "titleHi": "4. गड़रासिनी पहाड़ (बेलपहाड़ी) आश्रम की स्थापना (1971)",
    "contentEn": "In 1971, guided by divine inner inspiration, Swami Jagadananda Giri reached the quiet foothills of Garhrasini Pahar in Belpahari, Jhargram district.\n\nHe transformed dense, wild forest inhabited by tribal communities into 'Brahmarishi Satyananda Sannyas Ashram' in memory of his Gurudev. He built the main Dhyana Mandir, Yagya Shala, Gau Shala, and free food kitchen (Annadaana).",
    "contentHi": "1971 में अंतःकरण की दिव्य प्रेरणा से स्वामी जगदानन्दजी झाड़ग्राम जिले के बेलपहाड़ी स्थित गड़रासिनी पहाड़ की तलहटी में पहुँचे।\n\nसघन वनों और हिंसक वन्यजीवों से घिरे इस क्षेत्र को उन्होंने अपने पूज्य गुरुदेव की स्मृति में 'ब्रह्मर्षि सत्यानन्द संन्यास आश्रम' के रूप में परिवर्तित किया। उन्होंने ध्यान मंदिर, यज्ञशाला, गौशाला और निःशुल्क अन्नदान क्षेत्र का निर्माण कराया।"
  },
  {
    "id": "lilas-service",
    "titleEn": "5. Extreme Penance, Tribal Service & Miraculous Lilas",
    "titleHi": "5. कठोर तप, जनसेवा, भ्रातृभाव एवं अलौकिक लीलाएँ",
    "contentEn": "His life motto was: 'Eat less, sleep less, speak less, serve more' (खाओ, सोओ, कम बोलो, अधिक सेवा करो).\n\nHe treated poor tribal villagers as living Narayana, providing free food, clothing, education, and medical care. Villagers witnessed wild elephants bowing peacefully at the Ashram gate through his silent prayer.",
    "contentHi": "उनका मूलमंत्र था—'खाओ, सोओ, कम बोलो, अधिक सेवा करो'।\n\nवे दरिद्र आदिवासी ग्रामीणों को साक्षात नारायण मानकर भोजन, वस्त्र व औषधियाँ वितरित करते थे। उनके तपोबल का प्रभाव ऐसा था कि हिंसक जंगली हाथी भी आश्रम के द्वार पर आकर शांत खड़े हो जाते थे।"
  },
  {
    "id": "mahasamadhi-shrine",
    "titleEn": "6. Mahasamadhi (1987) & Garhrasini Samadhi Shrine",
    "titleHi": "6. महासमाधि (1987) एवं गड़रासिनी समाधि मंदिर",
    "contentEn": "In 1987, Swami Jagadananda Giri Maharaj entered Mahasamadhi at Garhrasini Pahar Ashram. His holy Samadhi Shrine at the foothill sanctuary remains an active, vibrating center of peace, prayer, and divine energy.",
    "contentHi": "1987 में स्वामी जगदानन्द गिरि महाराज गड़रासिनी आश्रम में समाधिस्थ हुए। पर्वत की तलहटी में उनका पावन समाधि मंदिर आज भी साधकों के लिए शांति, ध्यान और आध्यात्मिक ऊर्जा का जाग्रत केंद्र है।"
  }
]

jagadananda_lilas = [
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
    "titleEn": "3. Transforming Garhrasini Wilderness into a Sacred Ashram (1971)",
    "titleHi": "3. गड़रासिनी पहाड़ के सघन वन में आश्रम की स्थापना (1971)",
    "textEn": "Established Brahmarishi Satyananda Sannyas Ashram in 1971 at the dense foothills of Garhrasini Pahar, Belpahari.",
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

gyanananda_sections = [
  {
    "id": "birth-early",
    "titleEn": "1. Birth, Family Background & Early Gita Sanskaras",
    "titleHi": "1. जन्म, पारिवारिक पृष्ठभूमि एवं प्रारंभिक आध्यात्मिक संस्कार",
    "contentEn": "Paramhansa Gyanananda Maharaj was born Gopal Pandit on April 5, 1953 (22nd Chaitra, 1359 Bengabda) in Dhaneshwarpur village, undivided Medinipur district, West Bengal to Sri Chaitanya Charan Pandit and Srimati Kiranbala Devi. His family was steeped in daily Srimad Bhagavad Gita recitation, Kirtan, and traditional Vedic values.\n\nFrom early boyhood, Gopal displayed deep spiritual dispassion (Vairagya), exceptional musical talent in devotional singing, and heartfelt compassion for all living beings.",
    "contentHi": "परमहंस ज्ञानानंद महाराज का जन्म 22 चैत्र, 1359 बंगाब्द (5 अप्रैल 1953 ईस्वी) को अविभाजित मेदिनीपुर जिले के धनेश्वरपुर ग्राम में हुआ। उनके पिता श्री चैतन्यचरण पंडित और माता श्रीमती किरणबाला देवी थीं। बाल्यावस्था में उनका नाम गोपाल था।\n\nउनका परिवार नित्य श्रीमद्भगवद्गीता पाठ, संकीर्तन और वैदिक संस्कारों से ओत-प्रोत था। बाल्यावस्था से ही गोपाल में तीव्र वैराग्य, भक्ति संगीत की अद्भुत प्रतिभा और प्राणिमात्र के प्रति सहज दयाभाव विद्यमान था।"
  },
  {
    "id": "garhrasini-guru-seva",
    "titleEn": "2. Arrival at Garhrasini Ashram (1979) & Dedicated Guru Seva",
    "titleHi": "2. गड़रासिनी आश्रम आगमन (1979) एवं अनन्य गुरु-सेवा",
    "contentEn": "In August 1979 (after Jhulan Purnima), Gopal arrived at Garhrasini Pahar Ashram, Belpahari. Meeting Swami Jagadananda Giri Maharaj, he instantly surrendered completely at his lotus feet as his eternal disciple.\n\nHe served his Master with total dedication—managing Ashram affairs, cooking, serving visiting pilgrims, and practicing Kriya Yoga with intense devotion.",
    "contentHi": "अगस्त 1979 में (झूलन पूर्णिमा के पश्चात्) गोपाल गड़रासिनी पहाड़ स्थित आश्रम पहुँचे। स्वामी जगदानंद गिरि महाराज के दर्शन करते ही उन्होंने स्वयं को उनके चरणों में समर्पित कर दिया।\n\nउन्होंने अनन्य गुरु-सेवा की—आश्रम के समस्त कार्यों का प्रबंधन, भोजन पकाना, आने वाले साधकों की सेवा और गुरुदेव के मार्गदर्शन में कठोर क्रियायोग साधना।"
  },
  {
    "id": "sannyas-acharya",
    "titleEn": "3. Narmada Parikrama, Bodh Gaya Sannyas & Acharya Leadership",
    "titleHi": "3. नर्मदा परिक्रमा, बोधगया संन्यास दीक्षा एवं आचार्यत्व",
    "contentEn": "Paramhansa Gyanananda Maharaj completed the sacred Narmada River Parikrama, absorbing deep penance along the holy river banks.\n\nHe received formal Sannyas initiation into the Giri order of Shankara at Shankar Math, Bodh Gaya from Paramhansa Swami Jagadishananda Giri Maharaj, receiving the name Paramhansa Gyanananda Giri. He became the official Spiritual Head (Acharya) of Brahmarishi Satyananda Sannyas Ashram and its branch hermitages.",
    "contentHi": "उन्होंने पवित्र नर्मदा नदी की परिक्रमा पूर्ण कर तपस्या का अर्जन किया।\n\nतत्पश्चात् बोधगया स्थित शंकर मठ में परमहंस स्वामी जगदीशानंद गिरि महाराज से विधिवत संन्यास दीक्षा ग्रहण कर 'परमहंस ज्ञानानंद गिरि' नाम प्राप्त किया। वे ब्रह्मर्षि सत्यानंद संन्यास आश्रम व इसकी शाखाओं के आधिकारिक आचार्यदेव बने।"
  },
  {
    "id": "kriya-bhagawat-service",
    "titleEn": "4. Kriya Dissemination, Bhagawat Katha & Social Service",
    "titleHi": "4. क्रियायोग दीक्षा, श्रीमद्भागवत कथा एवं जन-कल्याण",
    "contentEn": "As present Acharya, Paramhansa Gyanananda Maharaj grants Kriya Yoga initiation to earnest seekers nationwide, maintaining the unbroken lineage transmission.\n\nHe conducts 7-Day Srimad Bhagwat Katha Saptahs, Gita Gyan Yagyas, and spiritual discourses across West Bengal, Jharkhand, Odisha, MP, and Gujarat. In 2008, he established 'Jagadananda Kriya Yoga Kuteer' at Nanpa on the banks of River Narmada. He spearheads tribal welfare, free food distribution (Annadaana), youth character-building camps, and cow protection (Gau Seva).",
    "contentHi": "वर्तमान आचार्य के रूप में वे देश भर के मुमुक्षु साधकों को क्रियायोग की पावन दीक्षा प्रदान कर रहे हैं।\n\nवे पश्चिम बंगाल, झारखंड, ओडिशा, मध्य प्रदेश व गुजरात में श्रीमद्भागवत कथा सप्ताह, गीता ज्ञान-यज्ञ और अध्यात्म सम्मेलनों का आयोजन करते हैं। 2008 में उन्होंने नर्मदा तट (नानपा) पर 'जगदानंद क्रियायोग कुटीर' की स्थापना की। वे आदिवासी समाज कल्याण, निःशुल्क अन्नदान, युवा चरित्र-निर्माण और गौ-सेवा के प्रकल्पों का नेतृत्व कर रहे हैं।"
  },
  {
    "id": "khud-ko-jano",
    "titleEn": "5. 'Know Thyself' (Khud Ko Jano) Message & Sacred Literature",
    "titleHi": "5. 'खुद को जानो' दिव्य संदेश एवं साहित्य रचना",
    "contentEn": "His guiding motto is: 'Khud Ko Jano' (Know Thyself) — realize the inner divine Atman beyond body and mind.\n\nHe authors sacred devotional literature, commentaries on the Srimad Bhagavad Gita, and devotional bhajans, illuminating the path of self-knowledge for spiritual seekers everywhere.",
    "contentHi": "उनका अमर सन्देश है—'खुद को जानो' (अपने वास्तविक आत्मस्वरूप को पहचानो)।\n\nवे धार्मिक साहित्य, श्रीमद्भगवद्गीता पर व्याख्यान और भक्ति भजनों की रचना कर साधकों को आत्म-साक्षात्कार की ओर प्रेरित कर रहे हैं।"
  },
  {
    "id": "garhrasini-dhyanapeeth",
    "titleEn": "6. Garhrasini Dhyanapeeth & Unbroken Grace",
    "titleHi": "6. गड़रासिनी ध्यानपीठ एवं निरन्तर कृपा-प्रवाह",
    "contentEn": "At Garhrasini Pahar Ashram, Paramhansa Gyanananda Maharaj welcomes all spiritual seekers, maintaining an atmosphere of tranquil meditation, divine chanting, and unbroken spiritual grace.",
    "contentHi": "गड़रासिनी पहाड़ आश्रम में परमहंस ज्ञानानंद महाराज साधकों को ध्यान, सत्संग और क्रियायोग साधना का मार्गदर्शन प्रदान कर रहे हैं। आश्रम का शांत वातावरण जन-जन में शांति का संचार करता है।"
  }
]

gyanananda_lilas = [
  {
    "titleEn": "1. Childhood Devotion to Srimad Bhagavad Gita Recitation & Kirtan",
    "titleHi": "1. बाल्यावस्था में श्रीमद्भगवद्गीता पाठ व संकीर्तन अनुराग",
    "textEn": "Demonstrated deep spiritual inclination from childhood in Dhaneshwarpur, chanting Gita verses and leading devotional singing.",
    "textHi": "धनेश्वरपुर गाँव में बाल्यावस्था से ही नित्य गीता-पाठ व संकीर्तन में लीन होकर आध्यात्मिक संस्कारों को प्रदर्शित किया।"
  },
  {
    "titleEn": "2. Arrival at Garhrasini Ashram & Total Surrender to Gurudev (1979)",
    "titleHi": "2. 1979 में गड़रासिनी आश्रम आगमन व स्वामी जगदानन्दजी से मिलन",
    "textEn": "Arrived at Garhrasini Ashram in August 1979, offering complete dedication at the lotus feet of Swami Jagadananda Giri Maharaj.",
    "textHi": "अगस्त 1979 में आश्रम पहुँचे और स्वामी जगदानंद गिरि महाराज के प्रति पूर्ण समर्पण कर अनन्य गुरु-सेवा में जुट गए।"
  },
  {
    "titleEn": "3. Narmada Parikrama & Sannyas Initiation at Shankar Math Bodh Gaya",
    "titleHi": "3. पवित्र नर्मदा परिक्रमा व बोधगया शंकर मठ में संन्यास ग्रहण",
    "textEn": "Completed Narmada River Parikrama and received formal Sannyas initiation into the Shankara Giri order at Bodh Gaya.",
    "textHi": "पवित्र नर्मदा परिक्रमा पूर्ण की और बोधगया स्थित शंकर मठ में परमहंस स्वामी जगदीशानंदजी से संन्यास दीक्षा ग्रहण की।"
  },
  {
    "titleEn": "4. Founding Jagadananda Kriya Yoga Kuteer at Nanpa (2008)",
    "titleHi": "4. 2008 में नानपा (नर्मदा तट) पर 'जगदानंद क्रियायोग कुटीर' की स्थापना",
    "textEn": "Established a riverside retreat center at Nanpa, Madhya Pradesh on the holy banks of River Narmada for Kriya Yoga sadhaks.",
    "textHi": "2008 में मध्य प्रदेश के नानपा (नर्मदा तट) पर साधकों के ध्यान हेतु 'जगदानंद क्रियायोग कुटीर' आश्रम की स्थापना की।"
  },
  {
    "titleEn": "5. Srimad Bhagawat Katha Saptahs & 'Khud Ko Jano' Spiritual Movement",
    "titleHi": "5. श्रीमद्भागवत कथा सप्ताह, गीता ज्ञान-यज्ञ व 'खुद को जानो' संदेश",
    "textEn": "Delivers uplifting Bhagawat and Gita discourses across multiple states, propagating 'Khud Ko Jano' (Know Thyself) for universal spiritual awakening.",
    "textHi": "अनेक राज्यों में श्रीमद्भागवत कथा व गीता ज्ञान-यज्ञ का भव्य आयोजन कर 'खुद को जानो' के माध्यम से आत्म-साक्षात्कार का अलख जगा रहे हैं।"
  }
]

file_path = "/app/applet/src/data/ashramData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Read TS file and insert structuredSections and lilasList into each guru
# We find each guru object by id and add structuredSections and lilasList
def update_guru_in_code(code, guru_id, sections, lilas):
    pattern = r'("id":\s*"' + guru_id + r'".*?)("lifeMilestones":\s*\[.*?\n\s*\])'
    # Find position of lifeMilestones in guru block
    match = re.search(pattern, code, re.DOTALL)
    if not match:
        print(f"Failed to match guru_id {guru_id}")
        return code
    
    sections_json = json.dumps(sections, ensure_ascii=False, indent=6)
    lilas_json = json.dumps(lilas, ensure_ascii=False, indent=6)
    
    replacement = match.group(1) + match.group(2) + f',\n    "structuredSections": {sections_json},\n    "lilasList": {lilas_json}'
    code = code[:match.start()] + replacement + code[match.end():]
    return code

text = update_guru_in_code(text, "mahavatar-babaji", babaji_sections, babaji_lilas)
text = update_guru_in_code(text, "sri-yukteswar", yukteswar_sections, yukteswar_lilas)
text = update_guru_in_code(text, "satyananda-giri", satyananda_sections, satyananda_lilas)
text = update_guru_in_code(text, "jagadananda-giri", jagadananda_sections, jagadananda_lilas)
text = update_guru_in_code(text, "gyanananda-giri", gyanananda_sections, gyanananda_lilas)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Successfully updated ashramData.ts for all Gurus!")
