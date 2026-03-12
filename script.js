/* ================================================================
   TINIARCH STUDIO — script.js
   Navigation · Language · Animations · Interactions
   ================================================================ */

'use strict';

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const i18n = {
  en: {
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_freelance: 'Freelance',
    nav_creative: 'Creative',
    nav_skills: 'Skills',
    nav_cv: 'CV',
    nav_contact: 'Contact',

    hero_eyebrow: 'Architecture Studio',
    hero_subtitle: 'Architecture',
    hero_subtitle2: 'Design',
    hero_subtitle3: 'Creative Structures',
    hero_desc: 'Exploring architecture through design, form and experimentation.',
    hero_btn1: 'View Projects',
    hero_btn2: 'Explore Portfolio',
    scroll_label: 'scroll',

    explore_label: '— Explore',
    card1_title: 'ARCHITECTURE',
    card1_sub: 'Featured Projects',
    card2_title: 'FREELANCE',
    card2_sub: 'Client Work',
    card3_title: 'CREATIVE',
    card3_sub: 'Experiments',

    featured_label: '— Featured Work',
    featured_title: 'Selected Projects',
    see_all: 'View All →',

    proj1_name: 'Architectural Tower',
    proj1_type: 'Mixed-Use High-Rise · Concept',
    proj1_brief: 'A mixed-use high-rise concept exploring vertical urbanism and structural expression through a tapering glass and steel facade.',
    proj2_name: 'Administrative Building',
    proj2_type: 'Green Roof · Sustainable Design',
    proj2_brief: 'An administrative complex featuring a living green roof system, biophilic design principles, and energy-efficient facades.',
    proj3_name: 'Full House Design',
    proj3_type: 'Interior & Exterior · Residential',
    proj3_brief: 'A complete interior and exterior residential design project, from site planning and structural drawings to full 3D visualization.',

    skills_label: '— Expertise',
    skills_title: 'Skills & Software',
    skills_desc: 'From concept to render — mastering the full design pipeline.',
    skills_btn: 'All Skills →',

    contact_label: '— Get In Touch',
    contact_preview_title: "Let's Build Something Together",
    contact_btn: 'Contact Me →',

    projects_eyebrow: '— Architecture',
    projects_title: 'Projects',
    projects_desc: 'Architectural design projects exploring form, function, and materiality.',
    proj_cat_concept: 'Concept Design',
    proj_cat_sustainable: 'Sustainable Design',
    proj_cat_residential: 'Residential',
    view_project: 'View Project →',

    freelance_eyebrow: '— Client Work',
    freelance_title: 'Freelance',
    freelance_desc: 'Residential design projects delivered for real clients — from initial concept to final render.',
    free_cat_res: 'Residential',
    free1_name: 'Modern Family Home',
    free1_brief: 'Contemporary single-family residence with open floor plan, floor-to-ceiling glazing and integrated landscaping.',
    free2_name: 'Minimalist Villa',
    free2_brief: 'A clean-lined villa with a flat roof, dark cladding, and a serene pool courtyard at its heart.',
    free3_name: 'Hillside Residence',
    free3_brief: 'A terraced hillside home designed to follow the natural topography with cantilevered volumes and panoramic views.',
    free4_name: 'Urban Compact House',
    free4_brief: 'A space-efficient urban infill home with smart interior layouts, natural light strategies and a rooftop terrace.',
    free_year: 'Year:',
    free_loc: 'Location:',

    creative_eyebrow: '— Experiments',
    creative_title: 'Creative Work',
    creative_desc: 'Handcraft, drawing, and material exploration beyond the digital screen.',
    creat_cat1: 'Origami & Paper',
    creat_cat2: 'Cardboard Models',
    creat_cat3: 'Wood Craftsmanship',
    creat_cat4: 'Portrait Drawings',
    creat_cat5: 'Car Sketches',
    creat1_1: 'Origami Structure #1',
    creat1_2: 'Paper Architectural Model',
    creat1_3: 'Folded Form Study',
    creat2_1: 'Urban Block Model',
    creat2_2: 'Architectural Fragment',
    creat3_1: 'Wood Joinery Study',
    creat3_2: 'Sculptural Wood Form',
    creat4_1: 'Portrait Study I',
    creat4_2: 'Portrait Study II',
    creat5_1: 'Concept Car #1',
    creat5_2: 'Concept Car #2',
    creat5_3: 'Sketch Study',

    skills_eyebrow: '— Expertise',
    skills_page_title: 'Skills',
    skills_page_desc: 'A multidisciplinary toolkit spanning architecture, technology and craft.',
    skill_software: 'Software',
    skill_architecture: 'Architecture',
    skill_creative: 'Creative',
    sk_arch1: 'Architectural Design', sk_arch2: 'Interior Design', sk_arch3: 'Exterior Design',
    sk_arch4: '3D Visualization', sk_arch5: 'Concept Development', sk_arch6: 'Space Planning',
    sk_arch7: 'Technical Drawing', sk_arch8: 'Site Analysis', sk_arch9: 'Material Specification',
    sk_creat1: 'Hand Drawing', sk_creat2: 'Portrait Drawing', sk_creat3: 'Logo Design',
    sk_creat4: 'Website Design', sk_creat5: 'Model Making', sk_creat6: 'Wood Craft',
    sk_creat7: 'Paper Craft', sk_creat8: 'Car Sketching',

    cv_eyebrow: '— Curriculum Vitae',
    cv_title: 'CV',
    cv_role: 'Architectural Designer',
    cv_lang: 'Languages',
    cv_about: 'About',
    cv_about_text: 'A passionate young architectural designer with a strong foundation in design, visualization, and creative experimentation. Combining technical precision with artistic sensibility to deliver compelling architectural narratives across residential, commercial, and conceptual projects.',
    cv_education: 'Education',
    cv_edu1_title: 'Bachelor of Architecture',
    cv_edu1_school: 'Faculty of Architecture — Ss. Cyril & Methodius University, Skopje',
    cv_edu2_title: 'High School — Sciences & Mathematics',
    cv_edu2_school: 'Gymnasium, Skopje',
    cv_experience: 'Experience',
    cv_exp1_title: 'Freelance Architectural Designer',
    cv_exp1_desc: 'Independent residential and conceptual projects for private clients across North Macedonia.',
    cv_exp2_title: 'Design Intern',
    cv_exp2_desc: 'Supported senior architects with drafting, visualization and model-making on multiple commercial projects.',
    cv_portfolio_hl: 'Portfolio Highlights',

    contact_eyebrow: '— Say Hello',
    contact_title: 'Contact',
    contact_desc: 'Open for collaboration, freelance work and architecture discussion.',
    contact_big: "Let's create something remarkable.",
    cd_email: 'Email',
    cd_location: 'Location',
    cd_available: 'Availability',
    cd_available_val: 'Available for projects',
    form_name: 'Name', form_email: 'Email', form_subject: 'Subject', form_message: 'Message',
    form_name_ph: 'Your name', form_email_ph: 'Your email',
    form_subject_ph: 'Project inquiry', form_message_ph: 'Tell me about your project...',
    form_submit: 'Send Message →',
    form_success: "Message sent! I'll get back to you soon.",

    footer_copy: '© 2025 TINIARCH STUDIO. All rights reserved.',
  },

  sq: {
    nav_home: 'Kreu',
    nav_projects: 'Projektet',
    nav_freelance: 'Freelance',
    nav_creative: 'Kreative',
    nav_skills: 'Aftësitë',
    nav_cv: 'CV',
    nav_contact: 'Kontakt',

    hero_eyebrow: 'Studio Arkitekture',
    hero_subtitle: 'Arkitekturë',
    hero_subtitle2: 'Dizajn',
    hero_subtitle3: 'Struktura Kreative',
    hero_desc: 'Eksplorimi i arkitekturës nëpërmjet dizajnit, formës dhe eksperimentimit.',
    hero_btn1: 'Shiko Projektet',
    hero_btn2: 'Eksploroni Portfolio',
    scroll_label: 'rrësh',

    explore_label: '— Eksploroni',
    card1_title: 'ARKITEKTURË',
    card1_sub: 'Projektet Kryesore',
    card2_title: 'FREELANCE',
    card2_sub: 'Punë me Klientë',
    card3_title: 'KREATIVE',
    card3_sub: 'Eksperimente',

    featured_label: '— Punë e Zgjedhur',
    featured_title: 'Projektet e Zgjedhura',
    see_all: 'Shiko të Gjitha →',

    proj1_name: 'Kullë Arkitekturore',
    proj1_type: 'Ndërtesë me Përdorim të Përzier · Koncepti',
    proj1_brief: 'Një koncept kullë me përdorim të përzier që eksploron urbanizmin vertikal dhe shprehjen strukturore.',
    proj2_name: 'Ndërtesë Administrative',
    proj2_type: 'Çati e Gjelbër · Dizajn i Qëndrueshëm',
    proj2_brief: 'Një kompleks administrativ me sistem çati të gjallë, principe biophilic dhe fasada efiçiente energjetike.',
    proj3_name: 'Dizajn i Plotë Shtëpie',
    proj3_type: 'Interior & Eksterior · Rezidencial',
    proj3_brief: 'Një projekt i plotë dizajni rezidencial nga planifikimi i vendit deri te vizualizimi 3D.',

    skills_label: '— Ekspertizë',
    skills_title: 'Aftësi & Software',
    skills_desc: 'Nga koncepti deri te renderimi — zotërimi i procesit të plotë të dizajnit.',
    skills_btn: 'Të gjitha aftësitë →',

    contact_label: '— Na Kontaktoni',
    contact_preview_title: 'Le të Ndërtojmë Diçka Së Bashku',
    contact_btn: 'Kontaktoni →',

    projects_eyebrow: '— Arkitekturë',
    projects_title: 'Projektet',
    projects_desc: 'Projekte të dizajnit arkitektonik që eksplorojnë formën, funksionin dhe materialitetin.',
    proj_cat_concept: 'Dizajn Konceptual',
    proj_cat_sustainable: 'Dizajn i Qëndrueshëm',
    proj_cat_residential: 'Rezidencial',
    view_project: 'Shiko Projektin →',

    freelance_eyebrow: '— Punë me Klientë',
    freelance_title: 'Freelance',
    freelance_desc: 'Projekte rezidenciale të dorëzuara për klientë realë — nga koncepti fillestar deri te renderimi final.',
    free_cat_res: 'Rezidencial',
    free1_name: 'Shtëpi Moderne Familjare',
    free1_brief: 'Rezidencë bashkëkohore me plan të hapur, xhama nga dyshemeja në tavan dhe peizazh të integruar.',
    free2_name: 'Vilë Minimaliste',
    free2_brief: 'Një vilë me vija të pastra, çati të sheshtë, veshje të errët dhe oborr pishinë të qetë.',
    free3_name: 'Rezidencë në Kodër',
    free3_brief: 'Një shtëpi e tarracuar e projektuar të ndjekë topografinë natyrore me vëllime konsole.',
    free4_name: 'Shtëpi Kompakte Urbane',
    free4_brief: 'Një shtëpi urbane efiçiente me hapësirë me parterranë inteligjente dhe tarracë çati.',
    free_year: 'Viti:',
    free_loc: 'Vendndodhja:',

    creative_eyebrow: '— Eksperimente',
    creative_title: 'Punë Kreative',
    creative_desc: 'Punë me duar, vizatim dhe eksplorimi i materialeve përtej ekranit dixhital.',
    creat_cat1: 'Origami & Letër',
    creat_cat2: 'Modele Kartoni',
    creat_cat3: 'Punë me Dru',
    creat_cat4: 'Vizatime Portretesh',
    creat_cat5: 'Skica Makinash',
    creat1_1: 'Strukturë Origami #1',
    creat1_2: 'Model Arkitektonik Letre',
    creat1_3: 'Studim i Formës së Palosur',
    creat2_1: 'Model Blloku Urban',
    creat2_2: 'Fragment Arkitektonik',
    creat3_1: 'Studim i Lidhjeve të Drurit',
    creat3_2: 'Formë Skulpturore Druri',
    creat4_1: 'Studim Portreti I',
    creat4_2: 'Studim Portreti II',
    creat5_1: 'Makinë Konceptuale #1',
    creat5_2: 'Makinë Konceptuale #2',
    creat5_3: 'Studim Skice',

    skills_eyebrow: '— Ekspertizë',
    skills_page_title: 'Aftësi',
    skills_page_desc: 'Një komplet mjetesh multidisiplinar që përfshin arkitekturë, teknologji dhe zejet.',
    skill_software: 'Software',
    skill_architecture: 'Arkitekturë',
    skill_creative: 'Kreative',
    sk_arch1: 'Dizajn Arkitektonik', sk_arch2: 'Dizajn Interieri', sk_arch3: 'Dizajn Eksterieri',
    sk_arch4: 'Vizualizim 3D', sk_arch5: 'Zhvillim Koncepti', sk_arch6: 'Planifikim Hapësinor',
    sk_arch7: 'Vizatim Teknik', sk_arch8: 'Analizë Vendndodhjeje', sk_arch9: 'Specifikim Materialesh',
    sk_creat1: 'Vizatim me Dorë', sk_creat2: 'Vizatim Portretesh', sk_creat3: 'Dizajn Logo',
    sk_creat4: 'Dizajn Uebsajti', sk_creat5: 'Krijim Modelesh', sk_creat6: 'Zejet e Drurit',
    sk_creat7: 'Zejet e Letrës', sk_creat8: 'Skicim Makinash',

    cv_eyebrow: '— Curriculum Vitae',
    cv_title: 'CV',
    cv_role: 'Dizajner Arkitektonik',
    cv_lang: 'Gjuhët',
    cv_about: 'Rreth Meje',
    cv_about_text: 'Një dizajner i ri arkitektonik i pasionuar me bazë të fortë në dizajn, vizualizim dhe eksperimentim kreativ. Kombinimi i precizionit teknik me ndjeshmërinë artistike.',
    cv_education: 'Arsimi',
    cv_edu1_title: 'Bachelor i Arkitekturës',
    cv_edu1_school: 'Fakulteti i Arkitekturës — Universiteti "Ss. Cyril & Metodius", Shkup',
    cv_edu2_title: 'Shkolla e Mesme — Shkencat & Matematika',
    cv_edu2_school: 'Gjimnaz, Shkup',
    cv_experience: 'Eksperienca',
    cv_exp1_title: 'Dizajner Arkitektonik Freelance',
    cv_exp1_desc: 'Projekte të pavarura rezidenciale dhe konceptuale për klientë privatë në Maqedoninë e Veriut.',
    cv_exp2_title: 'Praktikant Dizajni',
    cv_exp2_desc: 'Mbështeti arkitektët e lartë me hartim, vizualizim dhe modelim në projekte të shumta.',
    cv_portfolio_hl: 'Theksimet e Portfolios',

    contact_eyebrow: '— Thuaj Përshëndetje',
    contact_title: 'Kontakt',
    contact_desc: 'Hapur për bashkëpunim, punë freelance dhe diskutime arkitektonike.',
    contact_big: 'Le të krijojmë diçka të jashtëzakonshme.',
    cd_email: 'Email',
    cd_location: 'Vendndodhja',
    cd_available: 'Disponueshmëria',
    cd_available_val: 'I disponueshëm për projekte',
    form_name: 'Emri', form_email: 'Email', form_subject: 'Subjekti', form_message: 'Mesazhi',
    form_name_ph: 'Emri juaj', form_email_ph: 'Email-i juaj',
    form_subject_ph: 'Kërkesë projekti', form_message_ph: 'Tregoni për projektin tuaj...',
    form_submit: 'Dërgo Mesazhin →',
    form_success: 'Mesazhi u dërgua! Do t\'ju kthehem së shpejti.',

    footer_copy: '© 2025 TINIARCH STUDIO. Të gjitha të drejtat e rezervuara.',
  },

  mk: {
    nav_home: 'Дома',
    nav_projects: 'Проекти',
    nav_freelance: 'Фриленс',
    nav_creative: 'Креативно',
    nav_skills: 'Вештини',
    nav_cv: 'CV',
    nav_contact: 'Контакт',

    hero_eyebrow: 'Архитектонско Студио',
    hero_subtitle: 'Архитектура',
    hero_subtitle2: 'Дизајн',
    hero_subtitle3: 'Креативни Структури',
    hero_desc: 'Истражување на архитектурата преку дизајн, форма и експериментирање.',
    hero_btn1: 'Погледни Проекти',
    hero_btn2: 'Истражи Портфолио',
    scroll_label: 'скролај',

    explore_label: '— Истражи',
    card1_title: 'АРХИТЕКТУРА',
    card1_sub: 'Истакнати Проекти',
    card2_title: 'ФРИЛЕНС',
    card2_sub: 'Работа со Клиенти',
    card3_title: 'КРЕАТИВНО',
    card3_sub: 'Експерименти',

    featured_label: '— Истакнати Дела',
    featured_title: 'Избрани Проекти',
    see_all: 'Погледни сè →',

    proj1_name: 'Архитектонска Кула',
    proj1_type: 'Мешана Намена · Концепт',
    proj1_brief: 'Концепт на кула со мешана намена која ги истражува вертикалниот урбанизам и структурниот израз.',
    proj2_name: 'Административна Зграда',
    proj2_type: 'Зелен Покрив · Одржлив Дизајн',
    proj2_brief: 'Административен комплекс со жив зелен покрив, биофилски принципи и енергетски ефикасни фасади.',
    proj3_name: 'Целосен Дизајн на Куќа',
    proj3_type: 'Ентериер & Екстериер · Резиденцијален',
    proj3_brief: 'Комплетен проект за дизајн на куќа — од урбанистичко планирање до целосна 3D визуализација.',

    skills_label: '— Експертиза',
    skills_title: 'Вештини & Софтвер',
    skills_desc: 'Од концепт до рендер — совладување на целиот процес на дизајн.',
    skills_btn: 'Сите вештини →',

    contact_label: '— Контактирајте',
    contact_preview_title: 'Да Изградиме Нешто Заедно',
    contact_btn: 'Контактирај ме →',

    projects_eyebrow: '— Архитектура',
    projects_title: 'Проекти',
    projects_desc: 'Архитектонски дизајн проекти кои ги истражуваат формата, функцијата и материјалноста.',
    proj_cat_concept: 'Концептуален Дизајн',
    proj_cat_sustainable: 'Одржлив Дизајн',
    proj_cat_residential: 'Резиденцијален',
    view_project: 'Погледни Проект →',

    freelance_eyebrow: '— Работа со Клиенти',
    freelance_title: 'Фриленс',
    freelance_desc: 'Резиденцијални дизајн проекти испорачани за реални клиенти — од концепт до финален рендер.',
    free_cat_res: 'Резиденцијален',
    free1_name: 'Модерна Семејна Куќа',
    free1_brief: 'Современа куќа со отворен план, застаклување под кат и интегрирано уредување.',
    free2_name: 'Минималистичка Вила',
    free2_brief: 'Вила со чисти линии, рамен покрив, темна облога и мирен базенски двор.',
    free3_name: 'Резиденција на Рид',
    free3_brief: 'Терасирана куќа проектирана да ги следи природните форми со конзолни волумени и панорамски поглед.',
    free4_name: 'Компактна Градска Куќа',
    free4_brief: 'Просторно ефикасна градска куќа со паметни распореди, стратегии за природна светлина и тераса.',
    free_year: 'Година:',
    free_loc: 'Локација:',

    creative_eyebrow: '— Експерименти',
    creative_title: 'Креативна Работа',
    creative_desc: 'Рачна изработка, цртање и истражување на материјали надвор од дигиталниот екран.',
    creat_cat1: 'Оригами & Хартија',
    creat_cat2: 'Картонски Модели',
    creat_cat3: 'Дрворезба',
    creat_cat4: 'Портретни Цртежи',
    creat_cat5: 'Скици на Автомобили',
    creat1_1: 'Оригами Структура #1',
    creat1_2: 'Хартиен Архитектонски Модел',
    creat1_3: 'Студија на Сгрупки',
    creat2_1: 'Урбан Блок Модел',
    creat2_2: 'Архитектонски Фрагмент',
    creat3_1: 'Студија на Дрвени Врски',
    creat3_2: 'Скулптурна Дрвена Форма',
    creat4_1: 'Студија на Портрет I',
    creat4_2: 'Студија на Портрет II',
    creat5_1: 'Концептуален Автомобил #1',
    creat5_2: 'Концептуален Автомобил #2',
    creat5_3: 'Скица Студија',

    skills_eyebrow: '— Експертиза',
    skills_page_title: 'Вештини',
    skills_page_desc: 'Мултидисциплинарен сет на алатки кој опфаќа архитектура, технологија и занает.',
    skill_software: 'Софтвер',
    skill_architecture: 'Архитектура',
    skill_creative: 'Креативно',
    sk_arch1: 'Архитектонски Дизајн', sk_arch2: 'Ентериер Дизајн', sk_arch3: 'Екстериер Дизајн',
    sk_arch4: '3D Визуализација', sk_arch5: 'Развој на Концепт', sk_arch6: 'Просторно Планирање',
    sk_arch7: 'Техничко Цртање', sk_arch8: 'Анализа на Локација', sk_arch9: 'Спецификација на Материјали',
    sk_creat1: 'Рачно Цртање', sk_creat2: 'Портретно Цртање', sk_creat3: 'Дизајн на Лого',
    sk_creat4: 'Веб Дизајн', sk_creat5: 'Изработка на Модели', sk_creat6: 'Дрворезба',
    sk_creat7: 'Хартиена Уметност', sk_creat8: 'Скицирање Автомобили',

    cv_eyebrow: '— Curriculum Vitae',
    cv_title: 'CV',
    cv_role: 'Архитектонски Дизајнер',
    cv_lang: 'Јазици',
    cv_about: 'За мене',
    cv_about_text: 'Страстен млад архитектонски дизајнер со цврста основа во дизајн, визуализација и креативно експериментирање. Комбинирање на техничката прецизност со уметничката чувствителност.',
    cv_education: 'Образование',
    cv_edu1_title: 'Дипломиран Архитект',
    cv_edu1_school: 'Архитектонски Факултет — Универзитет „Свети Кирил и Методиј", Скопје',
    cv_edu2_title: 'Средно Училиште — Природни Науки & Математика',
    cv_edu2_school: 'Гимназија, Скопје',
    cv_experience: 'Искуство',
    cv_exp1_title: 'Фриленс Архитектонски Дизајнер',
    cv_exp1_desc: 'Независни резиденцијални и концептуални проекти за приватни клиенти низ Македонија.',
    cv_exp2_title: 'Дизајн Практикант',
    cv_exp2_desc: 'Поддршка на постари архитекти со цртање, визуализација и изработка на модели.',
    cv_portfolio_hl: 'Портфолио Истакнувања',

    contact_eyebrow: '— Кажи Здраво',
    contact_title: 'Контакт',
    contact_desc: 'Отворен за соработка, фриленс работа и дискусии за архитектура.',
    contact_big: 'Ајде да создадеме нешто извонредно.',
    cd_email: 'Е-пошта',
    cd_location: 'Локација',
    cd_available: 'Достапност',
    cd_available_val: 'Достапен за проекти',
    form_name: 'Име', form_email: 'Е-пошта', form_subject: 'Предмет', form_message: 'Порака',
    form_name_ph: 'Вашето ime', form_email_ph: 'Вашата е-пошта',
    form_subject_ph: 'Барање за проект', form_message_ph: 'Кажете ми за вашиот проект...',
    form_submit: 'Испрати Порака →',
    form_success: 'Пораката е испратена! Ќе ви се јавам наскоро.',

    footer_copy: '© 2025 TINIARCH STUDIO. Сите права задржани.',
  }
};

/* ================================================================
   PROJECT DATA
   ================================================================ */
const projectData = {
  tower: {
    title: 'ARCHITECTURAL TOWER',
    year: '2024',
    category: 'Mixed-Use High-Rise · Concept',
    description: 'A mixed-use high-rise concept exploring vertical urbanism and the expressive potential of structural systems. The tapered glass and steel facade responds to wind loads while creating a dynamic silhouette visible from across the city. The program stacks residential, office, and retail over 42 floors.',
    bgClass: 'tower-bg',
    drawings: ['Floor Plan', 'Section A-A', 'Elevation West', 'Structural Diagram', '3D Visualization', 'Site Plan']
  },
  admin: {
    title: 'ADMINISTRATIVE BUILDING',
    year: '2023',
    category: 'Green Roof · Sustainable Design',
    description: 'An administrative complex built around biophilic principles. The living green roof system reduces heat island effect and stormwater runoff, while passive solar strategies and triple-glazed facades achieve near-zero energy performance. A central atrium brings natural light deep into the floor plates.',
    bgClass: 'admin-bg',
    drawings: ['Ground Floor Plan', 'Roof Plan', 'Section B-B', 'Facade Detail', '3D Visualization', 'Green Roof Detail']
  },
  house: {
    title: 'FULL HOUSE DESIGN',
    year: '2023',
    category: 'Interior & Exterior · Residential',
    description: 'A complete design from site survey to final render. The single-family residence uses a split-level section to engage the sloped site, with warm timber interiors contrasting against a raw concrete exterior shell. Every detail — from custom joinery to landscape grading — was resolved through this project.',
    bgClass: 'house-bg',
    drawings: ['Site Plan', 'Ground Floor', 'First Floor', 'Interior Render', 'Exterior Render', 'Section C-C']
  }
};

/* ================================================================
   STATE
   ================================================================ */
let currentLang = 'en';
let currentPage = 'home';

/* ================================================================
   CURSOR
   ================================================================ */
const cursor      = document.getElementById('cursor');
const cursorFollow = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followX = 0, followY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animateFollower() {
  followX += (mouseX - followX) * 0.1;
  followY += (mouseY - followY) * 0.1;
  cursorFollow.style.left = followX + 'px';
  cursorFollow.style.top  = followY + 'px';
  requestAnimationFrame(animateFollower);
})();

/* ================================================================
   LANGUAGE SWITCHER
   ================================================================ */
function applyLanguage(lang) {
  currentLang = lang;
  const t = i18n[lang];

  // Update text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

/* ================================================================
   PAGE NAVIGATION
   ================================================================ */
function navigateTo(page) {
  if (page === currentPage) return;
  currentPage = page;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Close mobile nav
  closeMobileNav();

  // Trigger reveals
  setTimeout(() => triggerReveals(), 100);

  // Animate skill bars if on skills page
  if (page === 'skills') setTimeout(() => animateSkillBars(), 400);
}

// All clickable nav/page elements
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const page = el.dataset.page;
    if (page) navigateTo(page);
  });
});

/* ================================================================
   MOBILE NAV
   ================================================================ */
const navToggle  = document.getElementById('nav-toggle');
const mobileNav  = document.getElementById('mobile-nav');

function closeMobileNav() {
  navToggle.classList.remove('open');
  mobileNav.classList.remove('open');
}

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

/* ================================================================
   STICKY NAV
   ================================================================ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function triggerReveals() {
  const reveals = document.querySelectorAll('.page.active .reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// Add reveal class to major elements
function addRevealClasses() {
  const selectors = [
    '.main-card', '.featured-item', '.freelance-card',
    '.creat-item', '.skill-block', '.project-card',
    '.cv-section', '.contact-detail-item', '.creative-category'
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
  });
}

/* ================================================================
   SKILL BAR ANIMATION
   ================================================================ */
function animateSkillBars() {
  document.querySelectorAll('.sk-fill').forEach(bar => {
    bar.classList.add('animated');
  });
}

/* ================================================================
   PROJECT OVERLAY
   ================================================================ */
const overlay      = document.getElementById('project-overlay');
const overlayClose = document.getElementById('overlay-close');
const overlayContent = document.getElementById('overlay-content');

function openProject(projectId) {
  const p = projectData[projectId];
  if (!p) return;

  overlayContent.innerHTML = `
    <div class="overlay-project-hero">
      <div class="arch-placeholder ${p.bgClass}" style="height:100%; min-height:unset;">
        <div class="arch-lines">
          <div class="arch-line"></div>
          <div class="arch-line"></div>
          <div class="arch-line"></div>
        </div>
        <div class="arch-label">${p.title} / ${p.year}</div>
      </div>
    </div>
    <div class="overlay-meta">
      <span class="proj-year">${p.year}</span>
      <span class="proj-cat">${p.category}</span>
    </div>
    <h1 class="overlay-title">${p.title}</h1>
    <p class="overlay-desc">${p.description}</p>
    <div style="margin-bottom:20px;">
      <div class="section-label">— Drawings &amp; Visualizations</div>
    </div>
    <div class="overlay-drawings">
      ${p.drawings.map(d => `
        <div class="overlay-drawing">
          <span class="drawing-label">${d}</span>
        </div>
      `).join('')}
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

overlayClose.addEventListener('click', closeProject);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeProject();
});

document.querySelectorAll('.proj-open-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openProject(btn.dataset.project);
  });
});

// ESC to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProject();
});

/* ================================================================
   CONTACT FORM
   ================================================================ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const success = contactForm.querySelector('.form-success');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      btn.textContent = i18n[currentLang].form_submit;
      btn.disabled = false;
      success.classList.remove('hidden');
      setTimeout(() => success.classList.add('hidden'), 5000);
    }, 1400);
  });
}

/* ================================================================
   PARALLAX on hero
   ================================================================ */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const shapes = document.querySelectorAll('.float-shape');
  shapes.forEach((shape, i) => {
    const depth = (i + 1) * 0.5;
    shape.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});

/* ================================================================
   HERO ORB mouse parallax
   ================================================================ */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  if (orb1) orb1.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  if (orb2) orb2.style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`;
});

/* ================================================================
   CARD 3D TILT
   ================================================================ */
function addCardTilt(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotY =  ((x - cx) / cx) * 6;
      const rotX = -((y - cy) / cy) * 6;
      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ================================================================
   GLITCH TITLE EFFECT
   ================================================================ */
function addGlitch() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;

  setInterval(() => {
    if (Math.random() > 0.95) {
      heroTitle.style.textShadow = `
        2px 0 0 rgba(0,212,255,0.5),
        -2px 0 0 rgba(201,169,110,0.5)
      `;
      setTimeout(() => heroTitle.style.textShadow = '', 80);
    }
  }, 1500);
}

/* ================================================================
   TYPING EFFECT for hero eyebrow
   ================================================================ */
function typeEffect(el, text, speed = 60) {
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i++];
    } else {
      clearInterval(timer);
    }
  }, speed);
}

/* ================================================================
   INIT
   ================================================================ */
function init() {
  addRevealClasses();
  applyLanguage('en');
  navigateTo('home');

  setTimeout(() => {
    const eyebrow = document.querySelector('.eyebrow-text');
    if (eyebrow) typeEffect(eyebrow, i18n[currentLang].hero_eyebrow || 'Architecture Studio');
  }, 300);

  addCardTilt('.main-card');
  addGlitch();

  // Initial reveal
  setTimeout(() => triggerReveals(), 200);

  // Animate hero content entrance
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    requestAnimationFrame(() => {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 200);
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

/* ================================================================
   WINDOW SCROLL — trigger reveals per scroll on active page
   ================================================================ */
window.addEventListener('scroll', () => {
  triggerReveals();
}, { passive: true });
