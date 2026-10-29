export interface TechEquipment {
  id: string;
  category: "sound" | "lighting" | "led" | "stage";
  title: string;
  brand: string;
  model: string;
  image: string;
  specs: { [key: string]: string };
  badge?: string;
}

export interface LocalizedText {
  uz: string;
  ru: string;
  en: string;
}

export interface PortfolioItem {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  location: LocalizedText;
  year: string;
  image: string;
  span: string;
}

export interface WorkflowStep {
  number: string;
  title: { uz: string; ru: string; en: string };
  description: { uz: string; ru: string; en: string };
}

export interface FaqItem {
  question: { uz: string; ru: string; en: string };
  answer: { uz: string; ru: string; en: string };
}

export const siteData = {
  company: {
    name: "JASZIYO EVENT",
    tagline: {
      uz: "PRO OVOZ, YORITISH VA LED",
      ru: "ПРО ЗВУК, СВЕТ И LED-ЭКРАНЫ",
      en: "PRO AUDIO, LIGHTING & LED",
    },
    phone: "+998 90 123 45 67",
    phone2: "+998 71 200 99 88",
    email: "info@jasziyo-event.uz",
    address: {
      uz: "Toshkent shahri, Chilonzor tumani, Bunyodkor shox ko'chasi, 15-uy",
      ru: "г. Ташкент, Чиланзарский район, пр-т Бунёдкор, д. 15",
      en: "15 Bunyodkor Ave, Chilanzar District, Tashkent, Uzbekistan",
    },
    workingHours: {
      uz: "24/7 texnik xizmat va yordam",
      ru: "Техническая поддержка 24/7",
      en: "24/7 Service & Technical Support",
    },
    socials: [
      { name: "Telegram", url: "https://t.me" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "YouTube", url: "https://youtube.com" },
      { name: "Facebook", url: "https://facebook.com" },
    ],
  },

  navigation: [
    { href: "#tech", label: "tech" },
    { href: "#portfolio", label: "portfolio" },
    { href: "#workflow", label: "workflow" },
    { href: "#faq", label: "faq" },
  ],
  locales: [
    { code: "uz", name: "UZ" },
    { code: "ru", name: "RU" },
    { code: "en", name: "EN" },
  ],

  hero: {
    videoUrl: "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/91/Enter_Enea_Festival_2019._Ko%C4%8Dani_Orkestar.mpg/Enter_Enea_Festival_2019._Ko%C4%8Dani_Orkestar.mpg.720p.vp9.webm",
    videoPoster: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Enter_Enea_Festival_2019._Ko%C4%8Dani_Orkestar.mpg/1280px--Enter_Enea_Festival_2019._Ko%C4%8Dani_Orkestar.mpg.jpg",
    videoCredit: {
      label: "Enter Enea Festival 2019 — Michał Sobkowski · CC BY-SA 4.0 · cropped",
      url: "https://commons.wikimedia.org/wiki/File:Enter_Enea_Festival_2019._Ko%C4%8Dani_Orkestar.mpg",
    },
    title: {
      uz: "LOUD & CLEAR. TOSHKENTDAGI PROFESSIONAL EVENT PARK",
      ru: "МОЩНЫЙ ЗВУК И СВЕТ. ТОП ИВЕНТ ПАРК В ТАШКЕНТЕ",
      en: "LOUD & CLEAR. PREMIUM EVENT PRODUCTION TASHKENT",
    },
    subtitle: {
      uz: "Konsertlar, festivallar va shoular uchun professional ovoz, yorug'lik va LED ekranlar muhandisligi hamda ijarasi.",
      ru: "Аренда профессионального звука, света и LED-экранов, а также техническое продюсирование концертов и шоу.",
      en: "Professional sound, intelligent lighting, and high-refresh LED screen rental & live show engineering.",
    },
    stats: [
      { value: "500+", label: { uz: "O'tkazilgan shoular", ru: "Проведенных шоу", en: "Live Shows" } },
      { value: "120 kW", label: { uz: "Ovoz quvvati", ru: "Мощность звука", en: "Sound Power" } },
      { value: "350 m²", label: { uz: "LED ekranlar", ru: "LED экраны", en: "LED Screens" } },
      { value: "24/7", label: { uz: "Texnik servis", ru: "Техподдержка", en: "Tech Support" } },
    ],
  },

  techCategories: [
    { id: "all", name: { uz: "Barchasi", ru: "Все", en: "All" } },
    { id: "sound", name: { uz: "Ovoz Tizimlari", ru: "Звуковое Оборудование", en: "Sound Systems" } },
    { id: "lighting", name: { uz: "Yoritish Texnikasi", ru: "Световое Оборудование", en: "Lighting Rig" } },
    { id: "led", name: { uz: "LED Ekranlar", ru: "LED Экраны", en: "LED Screens" } },
    { id: "stage", name: { uz: "Sahna & Truss", ru: "Сцена и Конструкции", en: "Stage & Truss" } },
  ],

  equipment: [
    {
      id: "eq-1",
      category: "sound",
      title: "RCF TTL 55-A Active Line Array",
      brand: "RCF Italy",
      model: "TTL 55-A",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      badge: "Flagship Audio",
      specs: {
        Power: "3500W RMS / 7000W Peak",
        "Max SPL": "143 dB",
        Frequency: "45 Hz - 20 kHz",
        Control: "RDNet Networked DSP",
      },
    },
    {
      id: "eq-2",
      category: "sound",
      title: "Dynacord Cobra-4 Concert System",
      brand: "Dynacord Germany",
      model: "Cobra-4-System",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
      badge: "Pro Acoustic",
      specs: {
        Type: "Far-Field Line Array",
        DSP: "FIR-Drive DSP Processing",
        Amplifiers: "L3600FD Power Amps",
        Coverage: "Stadium & Arena Grade",
      },
    },
    {
      id: "eq-3",
      category: "lighting",
      title: "grandMA3 Full-Size Console",
      brand: "MA Lighting",
      model: "grandMA3 full-size",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      badge: "Industry Standard",
      specs: {
        Parameters: "20,480 Parameters",
        Screens: "3x Multi-touch screens",
        Faders: "60 motorized faders",
        Protocol: "sACN, Art-Net, MA-Net3",
      },
    },
    {
      id: "eq-4",
      category: "lighting",
      title: "Avolites Arena Lighting Desk",
      brand: "Avolites UK",
      model: "Arena Console",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      badge: "Fast Live Control",
      specs: {
        Universes: "16 DMX Universes",
        Engine: "Titan v16.0 OS",
        Display: "15.6” Main Touchscreen",
        Networking: "OpticalCon Fibre Link",
      },
    },
    {
      id: "eq-5",
      category: "led",
      title: "Unilumin P2.6 Ultra-HD LED Wall",
      brand: "Unilumin Pro",
      model: "P2.6 Indoor / Outdoor",
      image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop",
      badge: "4K Cinema Clarity",
      specs: {
        PixelPitch: "2.6 mm",
        Refresh: "3840 Hz High-Refresh",
        Brightness: "1200 nits",
        Curving: "Concave & Convex setup",
      },
    },
    {
      id: "eq-6",
      category: "led",
      title: "P3.9 Outdoor High-Brightness Wall",
      brand: "Absen LED",
      model: "P3.9 IP65 Weatherproof",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      badge: "Outdoor Monster",
      specs: {
        PixelPitch: "3.91 mm",
        Protection: "IP65 Weatherproof",
        Brightness: "5500 nits daylight clear",
        Processor: "Novastar VX1000 4K",
      },
    },
    {
      id: "eq-7",
      category: "lighting",
      title: "BSW 380W Hybrid Beam/Spot/Wash",
      brand: "Sharpy Pro",
      model: "Hybrid 380W",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      badge: "3-in-1 Fixture",
      specs: {
        Lamp: "OSRAM Sirius 382W",
        Prism: "8+16 Facet Rotating",
        Gobos: "14 Static + 9 Rotating",
        Movement: "540° Pan / 270° Tilt",
      },
    },
    {
      id: "eq-8",
      category: "stage",
      title: "Prolyte Heavy Duty Roof & Truss",
      brand: "Prolyte Europe",
      model: "H40V Ground Support",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc436?q=80&w=1200&auto=format&fit=crop",
      badge: "TÜV Certified",
      specs: {
        LoadCapacity: "Up to 12 Tons load",
        Certifications: "TÜV Rheinland",
        Structure: "Aluminum Square Truss 40cm",
        Hoists: "CM Lodestar Electric Motors",
      },
    },
  ] as TechEquipment[],

  portfolio: [
    {
      id: "p1",
      title: {
        uz: "Xalqaro musiqa festivali 2025",
        ru: "Международный музыкальный фестиваль 2025",
        en: "International Music Festival 2025",
      },
      category: { uz: "Arena konserti", ru: "Концерт на арене", en: "Stadium Concert" },
      location: {
        uz: "Humo Arena, Toshkent",
        ru: "Humo Arena, Ташкент",
        en: "Humo Arena, Tashkent",
      },
      year: "2025",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: "p2",
      title: { uz: "Elektron musiqa kechasi", ru: "Ночь электронной музыки", en: "Electronic Night Arena" },
      category: { uz: "Yorug'lik va lazer shousi", ru: "Световое и лазерное шоу", en: "Light & Laser Show" },
      location: { uz: "CAEx Uzbekistan", ru: "CAEx Uzbekistan", en: "CAEx Uzbekistan" },
      year: "2025",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: "p3",
      title: { uz: "Milliy mukofotlar gala marosimi", ru: "Национальная церемония награждения", en: "National Gala Award Ceremony" },
      category: { uz: "Korporativ LED va sahna", ru: "Корпоративная сцена и LED", en: "Corporate LED & Stage" },
      location: {
        uz: "International Hotel, Toshkent",
        ru: "International Hotel, Ташкент",
        en: "International Hotel Tashkent",
      },
      year: "2024",
      image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: "p4",
      title: { uz: "Ochiq osmon ostidagi rok festivali", ru: "Рок-фестиваль под открытым небом", en: "Open Air Rock Festival" },
      category: { uz: "Kuchli line-array ovozi", ru: "Мощная линейная акустика", en: "Massive Line Array Sound" },
      location: { uz: "Chorvoq amfiteatri", ru: "Амфитеатр Чарвака", en: "Charvak Amphitheatre" },
      year: "2024",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: "p5",
      title: { uz: "Toshkent moda haftaligi", ru: "Ташкентская неделя моды", en: "Tashkent Fashion Week" },
      category: { uz: "Aqlli yoritish tizimi", ru: "Интеллектуальный свет", en: "Intelligent Lighting Rig" },
      location: { uz: "Tashkent City Hall", ru: "Tашкент Сити Холл", en: "Tashkent City Hall" },
      year: "2024",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1",
    },
  ] as PortfolioItem[],

  workflow: [
    {
      number: "01",
      title: {
        uz: "TEXNIK TOPSHIRIQLAR VA RIDER",
        ru: "ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ И РАЙДЕР",
        en: "TECHNICAL RIDER & CONSULTATION",
      },
      description: {
        uz: "Artist va tadbir tashkilotchilarining texnik riderini o'rganamiz, joyning akustik va optik xususiyatlarini tahlil qilamiz.",
        ru: "Изучаем технический райдер артистов и организаторов, анализируем акустику и конфигурацию площадки.",
        en: "We review artist riders and event specifications, analyzing acoustic coverage and venue spatial geometry.",
      },
    },
    {
      number: "02",
      title: {
        uz: "3D MUHANDISLIK VA DRAFTING",
        ru: "3D ИНЖЕНИРИНГ И ПРОЕКТИРОВАНИЕ",
        en: "3D ENGINEERING & STAGE DESIGN",
      },
      description: {
        uz: "Capture / Wysiwyg va Soundvision dasturlarida sahna, yoritish va ovoz qamrovining 3D vizualizatsiyasini tayyorlaymiz.",
        ru: "Создаем 3D визуализацию сцены, световой партитуры и акустического покрытия в Capture / Wysiwyg и Soundvision.",
        en: "We design 3D stage layouts, lighting rigs, and acoustic prediction maps using Wysiwyg and Soundvision software.",
      },
    },
    {
      number: "03",
      title: {
        uz: "MONTAJ, SOZLASH VA SOUNDCHECK",
        ru: "МОНТАЖ, НАСТРОЙКА И САУНДЧЕК",
        en: "RIGGING, SETUP & SOUNDCHECK",
      },
      description: {
        uz: "Professional brigada uskunani xavfsiz o'rnatadi, lazer va chastotali sozlashlarni amalga oshirib, soundcheck o'tkazadi.",
        ru: "Опытная бригада производит безопасный монтаж, лазерную юстировку, измерение частот и проводит саундчек.",
        en: "Our certified rigging team installs equipment safely, performs frequency tuning, and executes smooth soundchecks.",
      },
    },
    {
      number: "04",
      title: {
        uz: "TADBIRNI BEXATOLIK JONLI BOSHQARISH",
        ru: "БЕЗУПРЕЧНОЕ ПРЯМОЕ УПРАВЛЕНИЕ",
        en: "FLAWLESS LIVE SHOW CONTROL",
      },
      description: {
        uz: "Tadbir davomida yetakchi ovoz rejissyorlari va sveto-operatorlar real vaqt rejimida shouni boshqaradi.",
        ru: "Во время мероприятия топ-звукорежиссеры и художники по свету управляют шоу в режиме реального времени.",
        en: "Top audio engineers and lighting designers execute real-time mixing and lighting cues throughout the live event.",
      },
    },
  ] as WorkflowStep[],

  faq: [
    {
      question: {
        uz: "Uskunani qancha vaqt oldin buyurtma qilish kerak?",
        ru: "За сколько времени нужно бронировать оборудование?",
        en: "How far in advance should we book equipment?",
      },
      answer: {
        uz: "Yirik konsert va festivallar uchun kamida 2-3 hafta oldin, kichikroq korporativ va shoular uchun 5-7 kun oldin murojaat qilish tavsiya etiladi.",
        ru: "Для крупных концертов и фестивалей рекомендуется бронировать за 2-3 недели, для корпоративных ивентов — за 5-7 дней.",
        en: "For major concerts and outdoor festivals, 2-3 weeks in advance is recommended. For corporate events, 5-7 days beforehand.",
      },
    },
    {
      question: {
        uz: "Sizda mutaxassislar (ingener, svetorejissyor, soundman) bormi?",
        ru: "Входят ли в стоимость услуги специалистов?",
        en: "Are technical crew and sound/lighting engineers included?",
      },
      answer: {
        uz: "Ajoyib savol! Biz shunchaki uskunani ijaraga bermaymiz, balki to'liq muhandislik xizmatini ko'rsatamiz: soundman, svetorejissyor, LED-vizualizator va montajchilar jamoasi bilan ishlaymiz.",
        ru: "Да! Мы предоставляем полный комплекс услуг 'под ключ' с нашей командой звукорежиссеров, художников по свету, LED-инженеров и монтажников.",
        en: "Absolutely! We deliver a full turnkey production with experienced sound engineers, lighting operators, LED specialists, and rigging crew.",
      },
    },
    {
      question: {
        uz: "Ochiq havodagi (Open-Air) tadbirlarga mos texnikangiz bormi?",
        ru: "Есть ли у вас оборудование для работы на открытых площадках?",
        en: "Do you have weather-resistant equipment for Open-Air events?",
      },
      answer: {
        uz: "Ha, bizda IP65 suv o'tkazmaydigan LED ekranlar, ob-havoga chidamli harakatlanuvchi nur chiroqlari (moving heads) va professional sahna konstruktsiyalari mavjud.",
        ru: "Да, в нашем парке есть IP65 влагозащищенные LED экраны, всепогодные световые приборы и мощные алюминиевые конструкции Prolyte.",
        en: "Yes, our technical park features IP65 waterproof LED walls, high-power outdoor moving heads, and certified heavy-duty roof structures.",
      },
    },
    {
      question: {
        uz: "To'lov shakllari va shartnomalar qanday rasmiylashtiriladi?",
        ru: "Каковы формы оплаты и условия заключения договора?",
        en: "What are the payment options and legal contracting procedure?",
      },
      answer: {
        uz: "Barcha to'lovlar naqd va pul o'tkazish (pereчисление) yo'li bilan rasmiy shartnoma va QQS hujjatlari asosida amalga oshiriladi.",
        ru: "Мы работаем по официальному договору, с оплатой по безналичному расчету (включая НДС) или наличными.",
        en: "All contracts are official. Payments can be settled via corporate bank transfer (with VAT) or other official methods.",
      },
    },
  ] as FaqItem[],
};
