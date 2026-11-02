/* Content & translations for Polina Politova's portfolio. */
var IMG = {
  before: './assets/images/isa-before.webp', after: './assets/images/isa-after.webp',
  words: './assets/images/isa-word-search.webp',
  lCover: './assets/images/lumina-cover.webp', lResearch: './assets/images/lumina-research.webp',
  lProduct: './assets/images/lumina-product-audience.webp', lSwot: './assets/images/lumina-swot.webp', l4p: './assets/images/lumina-4p.webp',
  b1: './assets/images/bookaholic-cover-03.webp', b2: './assets/images/bookaholic-contents.webp', b3: './assets/images/bookaholic-how-it-started.webp',
  b6: './assets/images/bookaholic-genre-picks.webp', b8: './assets/images/bookaholic-story-time.webp', b9: './assets/images/bookaholic-book-fairs.webp'
};

var UI = {
  en: {
    portfolio: 'Portfolio', navLabel: 'Main', navWork: 'Work', navAbout: 'About', navContact: 'Contact', langLabel: 'Language',
    heroLabel: 'Introduction', role: 'Portfolio — 2026', script: 'portfolio',
    kicker: 'Marketing & Brand Designer',
    intro: 'I’m Polina — a business student who designs. I build visual systems and campaigns, then check the numbers to see if they worked. Last semester that meant 366K views for a student club.',
    facts: [{ n: '366K', l: 'views in 90 days — ISA' }, { n: '10', l: 'people in my team' }, { n: '03', l: 'issues of my own magazine' }],
    next: '(02) The library ↓',
    libMeta: 'The library', libTitle: 'Library', libScript: 'pick one',
    hintD: 'Pull a book — it opens as a spread', hintM: 'Swipe the shelf, tap a book',
    shelfLabel: 'Bookshelf — portfolio sections',
    open: 'Open book: ', close: 'Close book', closeShort: 'Close',
    ctMeta: 'Contact', ctTitle: 'Let’s talk', ctScript: 'hello',
    ctNote: 'Write to me — I usually answer within a couple of days.',
    email: 'Email',
    loc: 'Seoul, South Korea', toTop: 'Back to top', photoAlt: 'Polina Politova in a blue lace frame',
    task: 'Task', did: 'What I did', res: 'Results', gal: 'Gallery', fig: 'Fig.', videoLbl: 'Campaign video',
    city: 'Seoul', navExp: 'Experience',
    pkLabel: 'Break the pumpkin — go to my email',
    pkHint: 'Break the pumpkin on the shelf — its pieces will take you to my email'
  },
  ru: {
    portfolio: 'Портфолио', navLabel: 'Меню', navWork: 'Работы', navAbout: 'Обо мне', navContact: 'Контакты', langLabel: 'Язык',
    heroLabel: 'Знакомство', role: 'Портфолио — 2026', script: 'портфолио',
    kicker: 'Маркетинг- и бренд-дизайнер',
    intro: 'Я Полина — студентка бизнес-факультета, которая занимается дизайном. Я строю визуальные системы и кампании, а потом проверяю по цифрам, сработали ли они. В прошлом семестре это 366 тыс. просмотров для студенческого клуба.',
    facts: [{ n: '366K', l: 'просмотров за 90 дней — ISA' }, { n: '10', l: 'человек в моей команде' }, { n: '03', l: 'выпуска своего журнала' }],
    next: '(02) Библиотека ↓',
    libMeta: 'Библиотека', libTitle: 'Библиотека', libScript: 'выбирай',
    hintD: 'Достаньте книгу — она откроется разворотом', hintM: 'Листайте полку, нажмите на книгу',
    shelfLabel: 'Книжная полка — разделы портфолио',
    open: 'Открыть книгу: ', close: 'Закрыть книгу', closeShort: 'Закрыть',
    ctMeta: 'Контакты', ctTitle: 'Давайте поговорим', ctScript: 'привет',
    ctNote: 'Пишите — обычно я отвечаю в течение пары дней.',
    email: 'Почта',
    loc: 'Сеул, Южная Корея', toTop: 'Наверх', photoAlt: 'Полина Политова в синей кружевной рамке',
    task: 'Задача', did: 'Что я сделала', res: 'Результаты', gal: 'Галерея', fig: 'Рис.', videoLbl: 'Видео кампании',
    city: 'Сеул', navExp: 'Опыт',
    pkLabel: 'Разбить тыкву — перейти к моей почте',
    pkHint: 'Разбейте тыкву на полке — осколки приведут к моей почте'
  }
};

var Q_ISA = { q: { en: '“She has repeatedly shown the ability to translate creative ideas into measurable outcomes.”', ru: '«Она не раз доказала, что умеет превращать творческие идеи в измеримые результаты».' },
  by: { en: '— President, International Student Association, Sejong University', ru: '— Президент Международной студенческой ассоциации, Университет Сэджон' } };
var Q_AIRI = { q: { en: '“Despite her young age, Polina proved herself to be a mature and motivated specialist.”', ru: '«Несмотря на юный возраст, Полина проявила себя как зрелый и мотивированный специалист».' },
  by: { en: '— Alexandra Broytman, Marketing & Communications Director, AIRI', ru: '— Александра Бройтман, директор по маркетингу и коммуникациям, AIRI' } };
var Q_ISA2 = { q: { en: '“She led a full rebranding of our social media aesthetic, giving it a cleaner and more cohesive visual identity.”', ru: '«Она провела полный ребрендинг нашей эстетики в соцсетях и сделала визуальную айдентику чище и целостнее».' },
  by: { en: '— President, International Student Association, Sejong University', ru: '— Президент Международной студенческой ассоциации, Университет Сэджон' } };
var Q_ISA3 = { q: { en: '“Under her direction, our events have seen improved participation rates.”', ru: '«Под её руководством на наши мероприятия стало приходить больше участников».' },
  by: { en: '— President, International Student Association, Sejong University', ru: '— Президент Международной студенческой ассоциации, Университет Сэджон' } };
var Q_UWC = { q: { en: '“Polina Politova is a talented, versatile person with an outstanding combination of analytical thinking and creative skills.”', ru: '«Полина Политова — талантливый, разносторонний человек с выдающимся сочетанием аналитического мышления и креативности».' },
  by: { en: '— Maria Usacheva, Head of the Art History Laboratory, UWC Dilijan Short Course', ru: '— Мария Усачева, руководитель лаборатории истории искусств, краткосрочный курс UWC Dilijan' } };
var Q_BECK = { q: { en: '“She is a willing participant in all classroom activities, and frequently provides intelligent and insightful contributions to classroom discussions.”', ru: '«Она охотно участвует во всех занятиях и часто приносит в обсуждения умные и глубокие мысли».' },
  by: { en: '— Peter Beck, GCSE English Literature, Algorithm School', ru: '— Питер Бек, GCSE English Literature, Algorithm School' } };

var BOOKS = [
  {
    id: 'isa', no: '01', roman: 'I',
    spine: { en: 'ISA', ru: 'ISA' }, type: { en: 'Case · Identity · Social', ru: 'Кейс · Айдентика · SMM' },
    script: { en: 'the feed', ru: 'лента' },
    kicker: { en: 'Case 01 · Identity · Social · Campaign', ru: 'Кейс 01 · Айдентика · SMM · Кампания' },
    title: { en: 'ISA Rebrand', ru: 'Ребрендинг ISA' },
    lead: { en: 'Sejong University’s International Student Association had an Instagram where every post looked different.', ru: 'У Международной студенческой ассоциации Университета Сэджон был Instagram, где каждый пост выглядел по-своему.' },
    s1p: { en: 'Give @sejong_isa one recognisable visual system — and build up to the Back-to-School event on 23 September.', ru: 'Собрать для @sejong_isa единую узнаваемую визуальную систему и подвести аудиторию к событию Back-to-School 23 сентября.' },
    s1items: { en: ['Before: blue updates, masquerade reds, mixed fonts — no shared look.'], ru: ['До: синие объявления, «маскарадный» красный, разные шрифты — никакой общей системы.'] },
    s2items: {
      en: ['Wrote the brand book: wine red + white with warm cream accents, Bebas Neue Cyrillic titles, Georgia Pro Condensed text, recurring stars and the ISA cat.',
        'Set the tone of voice: warm, community-first, bilingual-friendly — less promo, more stories.',
        'Planned the semester: 17 posts, 12 reel covers and 8 A3 posters, plus a buffer of evergreen posts.',
        'Ran the Back-to-School campaign, 2–21 Sept: 4 posts + 4 reels, “What’s in my bag?” and a film parody, a mark-the-date reminder and a word-search story game — the first 15 got a gift.',
        'Lead the 10-person marketing team as Marketing Director (promoted from Lead Graphic Designer after one semester).'],
      ru: ['Написала брендбук: винно-красный и белый с тёплыми кремовыми акцентами, заголовки — Bebas Neue Cyrillic, текст — Georgia Pro Condensed, сквозные звёзды и кот ISA.',
        'Задала тон коммуникации: тёплый, про сообщество, удобный для двух языков — меньше промо, больше историй.',
        'Спланировала семестр: 17 постов, 12 обложек для рилс и 8 постеров A3, плюс запас вечнозелёных постов.',
        'Провела кампанию Back-to-School, 2–21 сентября: 4 поста + 4 рилс, «Что у меня в сумке?» и пародия на фильм, напоминание о дате и игра-филворд в сторис — первые 15 получили подарок.',
        'Руковожу маркетинговой командой из 10 человек как Marketing Director (повышена с позиции Lead Graphic Designer через семестр).']
    },
    stats: [
      { n: '366K', l: { en: 'views in 90 days', ru: 'просмотров за 90 дней' } },
      { n: '79%', l: { en: 'of views from non-followers', ru: 'просмотров — от неподписчиков' } },
      { n: '259K', l: { en: 'views on one reel', ru: 'просмотров одного рилс' } },
      { n: '+187', l: { en: 'net new followers', ru: 'новых подписчиков (нетто)' } },
      { n: '28K+', l: { en: 'interactions overall', ru: 'взаимодействий всего' } },
      { n: '9.6K', l: { en: 'shares of the top reel', ru: 'репостов топового рилс' } }
    ],
    note: { en: 'Instagram Insights for @sejong_isa, 1 Aug – 29 Oct 2026: 233K unique viewers; reels alone brought 297K views. Top reel “Week 7 hits different”: 259K views, 14K likes, 9.6K shares; regular posts get 2–4K views each.', ru: 'Instagram Insights @sejong_isa, 1 авг – 29 окт 2026: 233K уникальных зрителей; одни только рилс собрали 297K просмотров. Топовый рилс «Week 7 hits different»: 259K просмотров, 14K лайков, 9,6K репостов; обычные посты набирают 2–4K просмотров.' },
    video: './assets/video/isa-campaign.mp4',
    videoCap: { en: 'September events — campaign reel', ru: 'September events — рилс кампании' },
    images: [
      { src: IMG.after, cap: { en: 'After — one wine-red system', ru: 'После — единая винно-красная система' } },
      { src: IMG.before, cap: { en: 'Before', ru: 'До' } },
      { src: './assets/images/isa-brandbook-overview.webp', cap: { en: 'Brand book — overview & palette', ru: 'Брендбук — обзор и палитра' } },
      { src: './assets/images/isa-brandbook-content.webp', cap: { en: 'Brand book — content & principles', ru: 'Брендбук — контент и принципы' } },
      { src: './assets/images/isa-reel-cover-259k.webp', cap: { en: 'Cover of the 259K-view reel', ru: 'Обложка рилс на 259K' } },
      { src: './assets/images/isa-fall-expect.webp', cap: { en: 'What to expect from ISA in fall', ru: 'Чего ждать от ISA осенью' } },
      { src: IMG.words, cap: { en: 'Word-search story game', ru: 'Игра-филворд в сторис' } },
      { src: './assets/images/isa-postcard.webp', cap: { en: 'ISA postcard', ru: 'Открытка ISA' } },
      { src: './assets/images/isa-insights-90days.webp', cap: { en: 'Insights — 90 days', ru: 'Статистика за 90 дней' } },
      { src: './assets/images/isa-insights-top.webp', cap: { en: 'Insights — top content', ru: 'Статистика — топ публикаций' } }
    ],
    quotes: [Q_ISA2, Q_ISA]
  },
  {
    id: 'lumina', no: '02', roman: 'II', wide: true,
    spine: { en: 'Lumina', ru: 'Lumina' }, type: { en: 'Case · Product · Brand', ru: 'Кейс · Продукт · Бренд' },
    script: { en: 'morning', ru: 'утро' },
    kicker: { en: 'Case 02 · Product · Brand · Strategy', ru: 'Кейс 02 · Продукт · Бренд · Стратегия' },
    title: { en: 'Lumina', ru: 'Lumina' },
    lead: { en: '“Your life — your plan.” A calm all-in-one morning app: weather, route, calendar and wellbeing on one screen, with Lumi, an AI companion.', ru: '«Твоя жизнь — твой план». Спокойное утреннее приложение «всё в одном»: погода, маршрут, календарь и самочувствие на одном экране, вместе с AI-компаньоном Луми.' },
    s1p: { en: 'Design a calm all-in-one morning app from scratch — and check whether people actually want it.', ru: 'С нуля придумать спокойное утреннее приложение «всё в одном» — и проверить, нужно ли оно людям.' },
    s1items: { en: ['Role: solo founder, end to end.'], ru: ['Роль: соло-основатель, весь цикл.'] },
    s2items: {
      en: ['User research: surveyed 33 people and mapped the problem to a solution.', 'Product concept and audience — one screen for weather, route, calendar and wellbeing, plus Lumi.', 'Brand identity and the pitch deck.', 'Business model: freemium, unit economics, SWOT and the 4P marketing mix.'],
      ru: ['Исследование: опросила 33 человека и связала проблему с решением.', 'Концепция продукта и аудитория — один экран для погоды, маршрута, календаря и самочувствия, плюс Луми.', 'Айдентика бренда и питч-дек.', 'Бизнес-модель: freemium, юнит-экономика, SWOT-анализ и маркетинг-микс 4P.']
    },
    stats: [
      { n: '90%', l: { en: 'interest among 33 surveyed users', ru: 'интереса среди 33 опрошенных' } },
      { n: '61%', l: { en: 'preferred the freemium model', ru: 'выбрали модель freemium' } },
      { n: '9×', l: { en: 'projected LTV / CAC (healthy = 3×)', ru: 'прогнозный LTV / CAC (норма — 3×)' } },
      { n: 'M14', l: { en: 'projected break-even month', ru: 'прогнозный месяц выхода в ноль' } }
    ],
    images: [
      { src: IMG.lCover, cap: { en: 'Pitch deck cover', ru: 'Обложка питч-дека' } },
      { src: IMG.lResearch, cap: { en: 'Problem & solution', ru: 'Проблема и решение' } },
      { src: IMG.lProduct, cap: { en: 'Product & audience', ru: 'Продукт и аудитория' } },
      { src: IMG.lSwot, cap: { en: 'SWOT', ru: 'SWOT-анализ' } },
      { src: IMG.l4p, cap: { en: '4P marketing mix', ru: 'Маркетинг-микс 4P' } }
    ]
  },
  {
    id: 'bookaholic', no: '03', roman: 'III',
    spine: { en: 'Bookaholic', ru: 'Bookaholic' }, type: { en: 'Case · Editorial · Writing', ru: 'Кейс · Журнал · Тексты' },
    script: { en: 'for readers', ru: 'для читающих' },
    kicker: { en: 'Case 03 · Editorial · Writing · Layout', ru: 'Кейс 03 · Журнал · Тексты · Вёрстка' },
    title: { en: 'Bookaholic', ru: 'Bookaholic' },
    lead: { en: '“The bookaholic” is a magazine for people who read. I write, edit and lay it out myself; issue 03 is about obsession, true crime and escaping reality.', ru: '«The bookaholic» — журнал для читающих людей. Я сама пишу, редактирую и верстаю его; третий выпуск — об одержимости, тру-крайме и побеге от реальности.' },
    s1p: { en: 'Turn a love of books into a magazine with its own voice — and put together issue 03 from the cover to the last page.', ru: 'Превратить любовь к книгам в журнал со своим голосом — и собрать третий выпуск от обложки до последней страницы.' },
    s2items: {
      en: ['Concept of the issue: obsession, true crime and “the most mysterious book in the world” — with a hidden message coded into the pages.',
        'Wrote every rubric: book of the month (Codex Seraphinianus), genre picks, a personal story, “my guilty pleasure”, book-fair season in Moscow, an interview and a meme page.',
        'Art direction and layout in Canva: wine and cream palette, serif display type, photo collages, A4 format.'],
      ru: ['Концепция выпуска: одержимость, тру-крайм и «самая таинственная книга в мире» — плюс скрытое послание, зашифрованное в страницах.',
        'Написала все рубрики: книга месяца («Кодекс Серафини»), подборки по жанрам, личная история, «my guilty pleasure», сезон книжных ярмарок в Москве, интервью и страница мемов.',
        'Арт-дирекшн и вёрстка в Canva: винная и кремовая палитра, антиква в заголовках, фотоколлажи, формат A4.']
    },
    stats: [
      { n: '3', l: { en: 'issues since January 2025', ru: 'выпуска с января 2025' } },
      { n: '12', l: { en: 'A4 pages', ru: 'страниц A4' } },
      { n: '8', l: { en: 'rubrics in the issue', ru: 'рубрик в выпуске' } }
    ],
    note: { en: 'Issue 01 — January 2025 · issue 02 — April 2025 · issue 03 — 2025.', ru: 'Выпуск 01 — январь 2025 · выпуск 02 — апрель 2025 · выпуск 03 — 2025.' },
    images: [
      { src: IMG.b1, cap: { en: 'Cover, issue 03', ru: 'Обложка, выпуск 03' } },
      { src: './assets/images/bookaholic-cover-01.webp', cap: { en: 'Cover, issue 01', ru: 'Обложка, выпуск 01' } },
      { src: './assets/images/bookaholic-cover-02.webp', cap: { en: 'Cover, issue 02 — “spring exacerbation”', ru: 'Обложка, выпуск 02 — «spring exacerbation»' } },
      { src: IMG.b2, cap: { en: 'Contents', ru: 'Оглавление' } },
      { src: IMG.b3, cap: { en: 'How it started', ru: 'История создания' } },
      { src: IMG.b6, cap: { en: 'Genre picks', ru: 'Подборка по жанрам' } },
      { src: IMG.b8, cap: { en: 'Story time', ru: 'Story time' } },
      { src: IMG.b9, cap: { en: 'Book fairs', ru: 'Книжные ярмарки' } }
    ]
  },
  {
    id: 'planty', no: '04', roman: 'IV', wide: true,
    spine: { en: 'planty', ru: 'planty' }, type: { en: 'Case · Code · Python', ru: 'Кейс · Код · Python' },
    script: { en: 'go green', ru: 'эко' },
    kicker: { en: 'Case · Code · Python', ru: 'Кейс · Код · Python' },
    title: { en: 'Planty', ru: 'Planty' },
    lead: { en: 'An eco Telegram bot in Python that helps people live greener: tips and facts, recycling maps, an AI eco-helper — and points for sorting waste that turn into volunteer hours.', ru: 'Эко-бот для Telegram на Python, который помогает жить экологичнее: советы и факты, карты переработки, AI-экопомощник — и баллы за сортировку мусора, которые превращаются в волонтёрские часы.' },
    s1p: { en: 'Make eco-friendly habits easy to keep: teach, track progress and reward real actions like sorting waste.', ru: 'Сделать экологичные привычки простыми: учить, отслеживать прогресс и награждать за реальные действия — например, сортировку мусора.' },
    s2items: {
      en: ['Wrote the bot in Python with pyTelegramBotAPI; user data is saved between sessions.',
        'Bilingual onboarding (English / Russian): name, optional age, city.',
        'Menu with six functions: my score, recycling maps, AI eco-helper, random eco fact or tip, photo of waste sorting, rules.',
        'Recycling maps and guides for Russia, New Zealand, South Korea and the USA.',
        'Points system: users send photos of sorted waste, the admin checks them and awards points; 500 points = 1 volunteer hour on dobro.rf, +30 minutes for every extra 1,000.',
        'Admin tools: awarding points, banning and unbanning users.'],
      ru: ['Написала бота на Python с pyTelegramBotAPI; данные пользователей сохраняются между сессиями.',
        'Двуязычное знакомство (английский / русский): имя, возраст по желанию, город.',
        'Меню из шести функций: мои баллы, карты переработки, AI-экопомощник, случайный экофакт или совет, фото сортировки, правила.',
        'Карты и гайды по переработке для России, Новой Зеландии, Южной Кореи и США.',
        'Система баллов: пользователи присылают фото сортировки, админ проверяет и начисляет баллы; 500 баллов = 1 час волонтёрства на добро.рф, +30 минут за каждую дополнительную 1000.',
        'Инструменты админа: начисление баллов, бан и разбан пользователей.']
    },
    stats: [
      { n: '6', l: { en: 'functions in the bot menu', ru: 'функций в меню бота' } },
      { n: '2', l: { en: 'languages — EN / RU', ru: 'языка — EN / RU' } },
      { n: '4', l: { en: 'countries with recycling maps', ru: 'страны с картами переработки' } },
      { n: '500', l: { en: 'points = 1 volunteer hour', ru: 'баллов = 1 час волонтёрства' } }
    ],
    images: [{ src: './assets/images/planty-cover.webp', cap: { en: 'Eco bot Planty — “Sort waste, earn volunteer hours and help the planet”', ru: 'Эко-бот Planty — «Сортируй мусор, получай за это волонтёрские часы и помогай планете»' } }]
  },
  {
    id: 'works', no: '05', roman: 'V', wide: true,
    spine: { en: 'My Works', ru: 'Мои работы' }, type: { en: 'Selected projects', ru: 'Избранные проекты' },
    script: { en: 'early days', ru: 'начало' },
    kicker: { en: 'Selected projects · 2022–2025', ru: 'Избранные проекты · 2022–2025' },
    title: { en: 'My Works', ru: 'Мои работы' },
    lead: { en: 'Projects from before ISA — an internship, volunteering and a summer course.', ru: 'Проекты до ISA — стажировка, волонтёрство и летняя программа.' },
    s1p: { en: 'Bring ideas to life in teams outside university — from a summer-school campaign at AIRI to a sustainability show at UWC Dilijan.', ru: 'Воплощать идеи в командах за пределами университета — от кампании летней школы в AIRI до шоу об устойчивом развитии в UWC Dilijan.' },
    s2items: {
      en: ['AIRI (Artificial Intelligence Research Institute), Moscow — 4-week internship in the Marketing Department, 4–29 Jul 2022: learned Figma, made booklets and materials for the “Summer school with AIRI” project, Telegram stickers and press-wall layouts.',
        'UWC Dilijan, Armenia, Jul 2024 — co-curated a Sustainability Day “Met Gala”: came up with dresses made from waste, led the collection of materials around campus, facilitated five groups, prepared two presentations on Trash Art and was the main speaker at the exhibition.',
        'Society for Kindness — SMM Volunteer, remote, Jul–Aug 2025: 20+ posts for the charity’s VK community.',
        'British Higher School of Art and Design — “Inspired”, a work from the Art and Design course.',
        'Essay “Three Cases of Value Creation in Russian Business” — Yandex Market, DDX Fitness and news Telegram channels.'],
      ru: ['AIRI (Институт искусственного интеллекта), Москва — 4-недельная стажировка в отделе маркетинга, 4–29 июля 2022: освоила Figma, делала буклеты и материалы для проекта «Летняя школа с AIRI», стикеры для Telegram и макеты пресс-волла.',
        'UWC Dilijan, Армения, июль 2024 — сокурировала «Met Gala» ко Дню устойчивого развития: придумала платья из отходов, организовала сбор материалов по кампусу, вела пять групп, подготовила две презентации о Trash Art и была главным спикером выставки.',
        'Society for Kindness — SMM-волонтёр, удалённо, июль–авг 2025: 20+ постов для VK-сообщества благотворительной организации.',
        'Британская высшая школа дизайна — «Inspired», работа с курса «Искусство и дизайн».',
        'Эссе «Три кейса создания ценности в российском бизнесе» — Яндекс Маркет, DDX Fitness и новостные Telegram-каналы.']
    },
    stats: [
      { n: '4', l: { en: 'weeks in AIRI’s marketing team', ru: 'недели в маркетинге AIRI' } },
      { n: '5', l: { en: 'groups facilitated at UWC', ru: 'групп под моим руководством в UWC' } },
      { n: '2', l: { en: 'presentations on Trash Art', ru: 'презентации о Trash Art' } },
      { n: '20+', l: { en: 'posts for the charity’s VK community', ru: 'постов для VK-сообщества организации' } }
    ],
    images: [
      { src: './assets/images/works-trash-fashion-presentation.webp', cap: { en: 'Trash Fashion — my presentation for the UWC “Met Gala”', ru: 'Trash Fashion — моя презентация для «Met Gala» в UWC' } },
      { src: './assets/images/works-trash-fashion-sketches.webp', cap: { en: 'Trash Fashion — sketches', ru: 'Trash Fashion — эскизы' } },
      { src: './assets/images/works-trash-fashion-nature.webp', cap: { en: 'Trash Fashion — inspiration: nature', ru: 'Trash Fashion — вдохновение: природа' } },
      { src: './assets/images/works-inspired-bhsad.webp', cap: { en: '“Inspired” — work from the Art and Design course, British Higher School of Art and Design', ru: '«Inspired» — работа с курса «Искусство и дизайн», Британская высшая школа дизайна' } }
    ],
    quotes: [Q_AIRI, Q_UWC]
  },
  {
    id: 'diplomas', no: '06', roman: 'VI',
    spine: { en: 'Diplomas', ru: 'Дипломы' }, type: { en: 'Education · Certificates', ru: 'Образование · Сертификаты' },
    script: { en: 'learning', ru: 'учёба' },
    kicker: { en: 'Education · Certificates · Letters', ru: 'Образование · Сертификаты · Рекомендации' },
    title: { en: 'Diplomas', ru: 'Дипломы' },
    lead: { en: 'Where my design, code and language skills come from.', ru: 'Откуда мои навыки в дизайне, коде и языках.' },
    h1: { en: 'Education', ru: 'Образование' }, h2: { en: 'Languages & tools', ru: 'Языки и инструменты' },
    h3: { en: 'In numbers', ru: 'В цифрах' }, h4: { en: 'Documents', ru: 'Документы' },
    s1items: {
      en: ['BA Business Administration — Sejong University, Seoul (2026 —)',
        'IELTS Academic — overall 7.0, Reading 8.5 (Aug 2026)',
        '“Art and Design” course — British Higher School of Art and Design, two certificates (#9874, #11946)',
        'Three diplomas — Coddy coding school',
        'English Language Course, 30 hours — MLI International Centre, UCD Dublin (Jul 2025)',
        'JDI: UWC Short Course “Attitudes and Relations Lab” — UWC Dilijan, Armenia (Jul 2024)',
        '3-week Cultural Experience Program — Center for International Education, Sejong University (Jul 2023)',
        'GCSE English Literature — Algorithm School, Moscow (2 years)',
        'Google Data Analytics — in progress'],
      ru: ['Бакалавриат, бизнес-администрирование — Университет Сэджон, Сеул (с 2026)',
        'IELTS Academic — общий балл 7.0, Reading 8.5 (август 2026)',
        'Курс «Искусство и дизайн» — Британская высшая школа дизайна, два сертификата (№9874, №11946)',
        'Три диплома — школа программирования Coddy',
        'Курс английского языка, 30 часов — MLI International Centre, UCD Dublin (июль 2025)',
        'JDI: краткосрочный курс UWC «Лаборатория позиций и отношений» — UWC Dilijan, Армения (июль 2024)',
        '3-недельная программа культурного опыта — Центр международного образования, Университет Сэджон (июль 2023)',
        'GCSE English Literature — Algorithm School, Москва (2 года)',
        'Google Data Analytics — в процессе']
    },
    s2items: { en: ['Russian — native', 'English — C1, IELTS Academic 7.0', 'Korean — learning', 'Canva · Figma'], ru: ['Русский — родной', 'Английский — C1, IELTS Academic 7.0', 'Корейский — изучаю', 'Canva · Figma'] },
    stats: [
      { n: '7.0', l: { en: 'IELTS Academic overall', ru: 'IELTS Academic, общий балл' } },
      { n: '8.5', l: { en: 'IELTS Reading', ru: 'IELTS Reading' } },
      { n: '3', l: { en: 'study programmes abroad — Armenia, Ireland, Korea', ru: 'учебные программы за рубежом — Армения, Ирландия, Корея' } },
      { n: '5', l: { en: 'recommendation letters', ru: 'рекомендательных писем' } }
    ],
    images: [
      { src: './assets/images/diploma-art-design-9874.webp', cap: { en: 'Art and Design — certificate #9874', ru: 'Искусство и дизайн — сертификат №9874' } },
      { src: './assets/images/diploma-art-design-11946.webp', cap: { en: 'Art and Design — certificate #11946', ru: 'Искусство и дизайн — сертификат №11946' } },
      { src: './assets/images/diploma-uwc-2024.webp', cap: { en: 'UWC Short Course 2024', ru: 'Курс UWC 2024' } },
      { src: './assets/images/diploma-ucd-english.webp', cap: { en: 'English course, UCD Dublin', ru: 'Курс английского, UCD Dublin' } },
      { src: './assets/images/diploma-sejong-cultural.webp', cap: { en: 'Cultural Experience Program, Sejong', ru: 'Программа культурного опыта, Сэджон' } }
    ],
    quotes: [Q_BECK]
  },
  {
    id: 'about', no: '07', roman: 'VII', portrait: true, wide: true,
    spine: { en: 'About me', ru: 'Обо мне' }, type: { en: 'Bio · Experience', ru: 'Био · Опыт' },
    script: { en: 'hello', ru: 'привет' },
    kicker: { en: 'Hi, I’m Polina', ru: 'Привет, я Полина' },
    title: { en: 'About me', ru: 'Обо мне' },
    lead: { en: 'Business Administration student at Sejong University in Seoul. I joined the International Student Association in Spring 2026 as Lead Graphic Designer and was promoted to Marketing Director for the fall semester — now leading a 10-person team.', ru: 'Студентка бизнес-администрирования в Университете Сэджон в Сеуле. Весной 2026 года пришла в Международную студенческую ассоциацию как Lead Graphic Designer, а к осеннему семестру стала Marketing Director — теперь руковожу командой из 10 человек.' },
    h1: { en: 'Background', ru: 'Бэкграунд' }, h2: { en: 'Beyond work', ru: 'Помимо работы' }, h3: { en: 'In numbers', ru: 'В цифрах' },
    s1p: { en: 'Design training from the British Higher School of Art and Design, three diplomas from Coddy coding school, and a marketing internship at AIRI in Moscow.', ru: 'Дизайн-образование в Британской высшей школе дизайна, три диплома школы программирования Coddy и маркетинговая стажировка в AIRI в Москве.' },
    s1items: { en: ['Languages — Russian (native) · English C1, IELTS 7.0 · Korean (learning)', 'Tools — Canva · Figma · Google Data Analytics (in progress)'], ru: ['Языки — русский (родной) · английский C1, IELTS 7.0 · корейский (изучаю)', 'Инструменты — Canva · Figma · Google Data Analytics (в процессе)'] },
    s2items: {
      en: ['100+ volunteer hours', 'My own reading magazine — “The bookaholic”, three issues so far', 'Short course at UWC Dilijan, Armenia (Jul 2024)'],
      ru: ['100+ часов волонтёрства', 'Свой журнал о книгах — «The bookaholic», уже три выпуска', 'Летняя программа UWC Dilijan, Армения (июль 2024)']
    },
    stats: [
      { n: '10', l: { en: 'people in the team I lead', ru: 'человек в моей команде' } },
      { n: '3', l: { en: 'languages — RU, EN, KO', ru: 'языка — RU, EN, KO' } },
      { n: '100+', l: { en: 'volunteer hours', ru: 'часов волонтёрства' } },
      { n: '5', l: { en: 'recommendation letters', ru: 'рекомендательных писем' } }
    ],
    images: [{ src: './assets/images/about-seoul-park.webp', cap: { en: 'Seoul, Children’s Grand Park', ru: 'Сеул, Children’s Grand Park' } }],
    quotes: [Q_UWC]
  },
  {
    id: 'workexp', no: '08', roman: 'VIII',
    spine: { en: 'Work experience', ru: 'Опыт работы' }, type: { en: 'Roles · 2022–2026', ru: 'Должности · 2022–2026' },
    script: { en: 'so far', ru: 'пока что' },
    kicker: { en: 'Experience · 2022–2026', ru: 'Опыт · 2022–2026' },
    title: { en: 'Work experience', ru: 'Опыт работы' },
    lead: { en: 'From a design internship in Moscow to running the marketing team of a student association in Seoul.', ru: 'От дизайн-стажировки в Москве до руководства маркетинговой командой студенческой ассоциации в Сеуле.' },
    h1: { en: 'Roles', ru: 'Должности' }, h2: { en: 'What I did there', ru: 'Чем занималась' }, h3: { en: 'In numbers', ru: 'В цифрах' },
    s1items: {
      en: ['Marketing Director — ISA, Sejong University · Fall 2026 — now', 'Lead Graphic Designer — ISA, Sejong University · Spring 2026', 'SMM Volunteer — Society for Kindness (remote) · Jul–Aug 2025', 'Sales Consultant — Gloria Jeans · 2025', 'Marketing Design Intern — AIRI, Moscow · Jul 2022'],
      ru: ['Marketing Director — ISA, Университет Сэджон · осень 2026 — сейчас', 'Lead Graphic Designer — ISA, Университет Сэджон · весна 2026', 'SMM-волонтёр — Society for Kindness (удалённо) · июль–авг 2025', 'Консультант-продавец — Gloria Jeans · 2025', 'Стажёр-дизайнер в маркетинге — AIRI, Москва · июль 2022']
    },
    s2items: {
      en: ['ISA: lead a 10-person marketing team; rebranded the Instagram — 366K views in 90 days.', 'ISA: designed posts, reel covers and posters before being promoted after one semester.', 'Society for Kindness: 20+ posts for the charity’s VK community.', 'Gloria Jeans: worked with customers in retail sales.', 'AIRI: booklets, a press wall and Telegram stickers in Figma.'],
      ru: ['ISA: руковожу маркетинговой командой из 10 человек; сделала ребрендинг Instagram — 366K просмотров за 90 дней.', 'ISA: дизайн постов, обложек для рилс и постеров — через семестр повысили.', 'Society for Kindness: 20+ постов для VK-сообщества организации.', 'Gloria Jeans: работа с покупателями в рознице.', 'AIRI: буклеты, пресс-волл и стикеры для Telegram в Figma.']
    },
    stats: [
      { n: '5', l: { en: 'roles since 2022', ru: 'должностей с 2022 года' } },
      { n: '10', l: { en: 'people in the team I lead', ru: 'человек в моей команде' } },
      { n: '1', l: { en: 'semester from Designer to Director', ru: 'семестр от дизайнера до директора' } },
      { n: '5', l: { en: 'recommendation letters', ru: 'рекомендательных писем' } }
    ],
    images: [],
    quotes: [Q_ISA3, Q_AIRI]
  }
];

/* Pumpkin shatter physics data: slice coordinates into the pumpkin atlas image. */
var MO = {"W":960,"H":578,"cx":493.18,"cy":320.0,"floor":530,"p":[[0,0,131,177,430,27,1],[133,0,43,68,316,268,0],[178,0,46,68,239,287,0],[226,0,45,64,548,130,0],[273,0,32,64,312,336,0],[307,0,30,62,338,335,0],[339,0,63,61,531,163,0],[404,0,49,61,360,448,0],[455,0,35,61,240,355,0],[492,0,44,58,244,268,0],[538,0,65,58,381,219,0],[605,0,26,57,303,174,0],[633,0,38,55,709,260,0],[673,0,42,55,429,318,0],[717,0,41,54,583,312,0],[760,0,43,54,291,326,0],[805,0,42,54,407,375,0],[849,0,56,54,553,209,0],[907,0,55,54,399,193,0],[964,0,35,54,288,273,0],[0,179,30,53,598,397,0],[32,179,39,53,448,476,0],[73,179,37,53,444,200,0],[112,179,39,52,318,218,0],[153,179,50,52,694,337,0],[205,179,54,51,677,288,0],[261,179,35,51,543,478,0],[298,179,53,51,561,370,0],[353,179,49,51,443,252,0],[404,179,32,51,578,470,0],[438,179,50,50,593,168,0],[490,179,55,50,657,319,0],[547,179,57,50,342,301,0],[606,179,48,50,514,123,0],[656,179,43,50,562,263,0],[701,179,42,50,339,404,0],[745,179,52,49,351,175,0],[799,179,44,49,623,363,0],[845,179,47,49,397,258,0],[894,179,47,49,628,145,0],[943,179,50,49,347,261,0],[0,234,44,49,692,217,0],[46,234,47,49,665,176,0],[95,234,47,49,259,409,0],[144,234,41,49,350,215,0],[187,234,44,49,541,238,0],[233,234,51,49,242,326,0],[286,234,45,48,504,481,0],[333,234,49,48,321,442,0],[384,234,39,48,249,221,0],[425,234,44,48,364,154,0],[471,234,43,48,698,389,0],[516,234,43,48,679,238,0],[561,234,39,47,303,399,0],[602,234,40,47,690,367,0],[644,234,43,47,614,392,0],[689,234,34,47,555,320,0],[725,234,45,46,633,300,0],[772,234,41,46,459,286,0],[815,234,38,46,346,132,0],[855,234,42,46,667,262,0],[899,234,55,46,588,348,0],[956,234,53,46,431,432,0],[0,285,32,46,322,178,0],[34,285,32,45,632,447,0],[68,285,33,45,419,117,0],[103,285,44,45,341,391,0],[149,285,45,45,654,405,0],[196,285,40,45,499,285,0],[238,285,48,45,302,470,0],[288,285,47,45,471,463,0],[337,285,47,45,278,436,0],[386,285,53,44,390,336,0],[441,285,50,44,506,193,0],[493,285,42,44,364,350,0],[537,285,30,44,665,367,0],[569,285,36,44,372,379,0],[607,285,49,44,386,443,0],[658,285,34,44,272,176,0],[694,285,46,44,520,372,0],[742,285,41,44,657,189,0],[785,285,46,43,551,487,0],[833,285,35,43,429,276,0],[870,285,31,43,718,335,0],[903,285,46,42,614,329,0],[951,285,47,42,515,266,0],[0,333,47,42,283,232,0],[49,333,54,42,381,408,0],[105,333,44,41,280,378,0],[151,333,49,41,476,248,0],[202,333,39,41,523,416,0],[243,333,39,41,518,456,0],[284,333,45,40,544,341,0],[331,333,42,40,442,367,0],[375,333,43,40,394,298,0],[420,333,63,40,342,482,0],[485,333,51,40,667,425,0],[538,333,40,40,607,480,0],[580,333,40,39,435,396,0],[622,333,28,39,499,368,0],[652,333,49,39,408,455,0],[703,333,31,38,500,326,0],[736,333,35,38,593,155,0],[773,333,43,38,607,225,0],[818,333,31,38,516,337,0],[851,333,30,37,720,311,0],[883,333,47,37,589,294,0],[932,333,41,37,513,233,0],[0,377,51,37,606,191,0],[53,377,22,36,472,409,0],[77,377,51,36,404,480,0],[130,377,51,36,484,443,0],[183,377,34,36,467,221,0],[219,377,27,36,268,373,0],[248,377,35,36,645,468,0],[285,377,42,36,532,400,0],[329,377,35,36,456,332,0],[366,377,42,35,650,226,0],[410,377,37,35,407,162,0],[449,377,32,35,633,204,0],[483,377,45,35,482,427,0],[530,377,47,35,538,294,0],[579,377,36,35,664,449,0],[617,377,47,34,271,217,0],[666,377,42,34,598,251,0],[710,377,35,34,575,437,0],[747,377,43,34,309,145,0],[792,377,44,34,542,444,0],[838,377,36,34,607,129,0],[876,377,39,33,472,193,0],[917,377,26,33,561,420,0],[945,377,23,33,498,216,0],[970,377,22,33,488,326,0],[0,416,37,32,384,137,0],[39,416,47,32,565,125,0],[88,416,44,31,377,122,0],[134,416,32,31,637,270,0],[168,416,34,31,528,314,0],[204,416,34,29,493,405,0],[240,416,42,29,603,283,0],[284,416,25,29,579,414,0],[311,416,51,28,609,435,0],[364,416,35,28,601,455,0],[401,416,40,27,639,248,0],[443,416,37,27,406,144,0],[482,416,52,25,470,506,0],[536,416,30,22,487,356,0],[568,416,35,22,462,363,0],[605,416,22,22,483,378,0],[629,416,59,20,404,509,0],[690,416,36,17,475,399,0]]};
var MO_SRC = './assets/images/pumpkin-atlas.webp';
var PK_BB = { x0: 239, y0: 27, w: 511, h: 504 };
var PK_GRID = [[170,0,170,90,1],[114,88,30,36,0],[144,88,44,36,0],[188,88,37,36,0],[225,88,50,36,0],[275,88,31,36,0],[306,88,35,36,0],[341,88,33,36,0],[374,88,41,36,0],[45,124,37,45,0],[82,124,30,45,0],[112,124,36,45,0],[148,124,43,45,0],[191,124,38,45,0],[229,124,35,45,0],[264,124,42,45,0],[306,124,35,45,0],[341,124,32,45,0],[373,124,34,45,0],[407,124,49,45,0],[26,169,30,32,0],[56,169,36,32,0],[92,169,36,32,0],[128,169,35,32,0],[163,169,35,32,0],[198,169,39,32,0],[237,169,40,32,0],[277,169,36,32,0],[313,169,47,32,0],[360,169,50,32,0],[410,169,36,32,0],[446,169,35,32,0],[0,201,21,40,0],[21,201,41,40,0],[62,201,43,40,0],[105,201,35,40,0],[140,201,34,40,0],[174,201,38,40,0],[212,201,32,40,0],[244,201,40,40,0],[284,201,39,40,0],[323,201,49,40,0],[372,201,48,40,0],[420,201,30,40,0],[450,201,49,40,0],[0,241,32,30,0],[32,241,39,30,0],[71,241,45,30,0],[116,241,40,30,0],[156,241,35,30,0],[191,241,45,30,0],[236,241,45,30,0],[281,241,35,30,0],[316,241,31,30,0],[347,241,38,30,0],[385,241,30,30,0],[415,241,41,30,0],[456,241,42,30,0],[498,241,13,30,0],[0,271,18,45,0],[18,271,41,45,0],[59,271,42,45,0],[101,271,48,45,0],[149,271,30,45,0],[179,271,44,45,0],[223,271,31,45,0],[254,271,35,45,0],[289,271,49,45,0],[338,271,36,45,0],[374,271,33,45,0],[407,271,37,45,0],[444,271,44,45,0],[488,271,23,45,0],[0,316,35,44,0],[35,316,38,44,0],[73,316,44,44,0],[117,316,33,44,0],[150,316,48,44,0],[198,316,41,44,0],[239,316,39,44,0],[278,316,31,44,0],[309,316,43,44,0],[352,316,32,44,0],[384,316,36,44,0],[420,316,40,44,0],[460,316,46,44,0],[506,316,5,44,0],[5,360,40,39,0],[45,360,38,39,0],[83,360,47,39,0],[130,360,32,39,0],[162,360,39,39,0],[201,360,40,39,0],[241,360,39,39,0],[280,360,35,39,0],[315,360,32,39,0],[347,360,50,39,0],[397,360,34,39,0],[431,360,39,39,0],[470,360,41,39,0],[8,399,32,33,0],[40,399,49,33,0],[89,399,47,33,0],[136,399,42,33,0],[178,399,31,33,0],[209,399,37,33,0],[246,399,49,33,0],[295,399,41,33,0],[336,399,38,33,0],[374,399,44,33,0],[418,399,50,33,0],[468,399,43,33,0],[49,432,31,32,0],[80,432,45,32,0],[125,432,40,32,0],[165,432,36,32,0],[201,432,34,32,0],[235,432,48,32,0],[283,432,34,32,0],[317,432,50,32,0],[367,432,43,32,0],[410,432,33,32,0],[443,432,35,32,0],[70,464,39,39,0],[109,464,34,39,0],[143,464,44,39,0],[187,464,49,39,0],[236,464,35,39,0],[271,464,46,39,0],[317,464,44,39,0],[361,464,45,39,0],[406,464,40,39,0]];
var PK_TC = 0.05, PK_TB = 0.75, PK_FALL = 1.9;
function pkEase(k) { return k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }
function moRng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
