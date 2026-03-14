/* ════════════════════════════════════════════════════════════════
   ALTIN ADEMI PORTFOLIO — script.js
   Cursor · View Router · i18n · Reveal · Skills · Modal · Form
   ════════════════════════════════════════════════════════════════ */
'use strict';

/* ════════════════════════════════════════════════════════════════
   TRANSLATIONS — EN / SQ (Albanian) / MK (Macedonian)
   ════════════════════════════════════════════════════════════════ */
const LANG = {

  en: {
    /* Landing */
    land_eyebrow: 'Architectural Designer',
    land_name_a:  'ALTIN',
    land_name_b:  'ADEMI',
    land_disc:    'Architecture',
    land_cta:     'Explore My Portfolio',
    land_location:'Skopje, North Macedonia',

    /* Nav */
    nav_arch:    'Architecture',
    nav_free:    'Freelance',
    nav_creat:   'Creative',
    nav_skills:  'Skills',
    nav_cv:      'CV',
    nav_contact: 'Contact',

    /* Hub */
    hub_eyebrow: 'Selected Disciplines',
    hub_role:    'Architecture · Freelance · Creative',
    hc_arch:     'Featured Projects',
    hc_free:     'Client Work',
    hc_creat:    'Craft & Experiments',
    hc_skills:   'Software & Expertise',
    hc_cv:       'Background & Education',
    hc_contact:  'Start a Conversation',

    /* Architecture */
    arch_kicker: '— Selected Projects',
    arch_desc:   'Built and conceptual projects exploring form, structure, and materiality.',
    p_cat_concept: 'Concept Design',
    p_cat_sustain: 'Sustainable Design',
    p_cat_res:     'Residential',
    p1_name: 'Architectural Tower',
    p1_desc: 'Mixed-use high-rise exploring vertical urbanism and structural expression through a tapering glass-and-steel facade across 42 floors of residential, office, and retail programme.',
    p2_name: 'Administrative Building',
    p2_desc: 'Administrative complex with living green roof system, biophilic design principles, and near-zero energy performance through triple-glazed facades and passive solar strategy.',
    p3_name: 'Full House Design',
    p3_desc: 'Complete interior and exterior residential design — site survey through bespoke joinery detail and material specification to final photorealistic 3D renders.',
    view_proj: 'View Project →',

    /* Freelance */
    free_kicker: '— Client Commissions',
    free_desc:   'Residential and commercial projects for private clients across North Macedonia.',
    f1_name: 'Modern Family Home',
    f1_desc: 'Open-plan contemporary residence with floor-to-ceiling glazing and integrated landscape design.',
    f2_name: 'Minimalist Villa',
    f2_desc: 'Flat-roofed villa with dark cladding, cantilevered volumes, and a courtyard pool at its centre.',
    f3_name: 'Hillside Residence',
    f3_desc: 'Terraced hillside home following the natural topography with panoramic lake views.',
    f4_name: 'Urban Compact House',
    f4_desc: 'Space-efficient urban infill with smart layouts, light wells, and a rooftop terrace garden.',

    /* Creative */
    creat_kicker: '— Experiments',
    creat_desc:   'Handcraft, drawing, and material exploration beyond the digital screen.',
    c_cat1: 'Origami & Paper',
    c_cat2: 'Cardboard Models',
    c_cat3: 'Wood Projects',
    c_cat4: 'Portraits & Sketches',
    c1_1: 'Structure #1',    c1_2: 'Paper Model',       c1_3: 'Folded Form',
    c2_1: 'Urban Block',     c2_2: 'Fragment',
    c3_1: 'Joinery Study',   c3_2: 'Sculptural Form',
    c4_1: 'Portrait I',      c4_2: 'Portrait II',        c5_1: 'Car Sketch',

    /* Skills */
    skills_kicker: '— Expertise',
    skills_desc:   'A full-pipeline toolkit spanning architecture, visualization, and creative craft.',
    sk_software: 'Software Proficiency',
    sk_arch_h:   'Architecture',
    sk_creat_h:  'Creative',
    ska1: 'Architectural Design', ska2: 'Interior Design',  ska3: 'Exterior Design',
    ska4: '3D Visualization',     ska5: 'Concept Development', ska6: 'Space Planning',
    ska7: 'Technical Drawing',    ska8: 'Site Analysis',    ska9: 'Material Specification',
    skc1: 'Hand Drawing',  skc2: 'Portrait Drawing', skc3: 'Logo Design',
    skc4: 'Website Design', skc5: 'Model Making',    skc6: 'Wood Craft',
    skc7: 'Paper Craft',   skc8: 'Car Sketching',

    /* CV */
    cv_kicker:   '— Curriculum Vitae',
    cv_role:     'Architectural Designer',
    cv_loc_lbl:  'Location',
    cv_lang_h:   'Languages',
    cv_native:   'Native',
    cv_fluent:   'Fluent',
    cv_advanced: 'Advanced',
    cv_dl:       'Download CV',
    cv_about_h:  'About',
    cv_about:    'A passionate architectural designer with strong foundations in design, visualization, and creative experimentation. Combining technical precision with artistic sensibility to deliver compelling narratives across residential, commercial, and conceptual work.',
    cv_edu_h:    'Education',
    cv_exp_h:    'Experience',
    cv_awards_h: 'Awards',
    edu1_d: 'Bachelor of Architecture',
    edu1_s: 'Faculty of Architecture — Ss. Cyril & Methodius University, Skopje',
    edu2_d: 'High School — Sciences & Mathematics',
    edu2_s: 'Gymnasium, Skopje',
    exp1_t: 'Freelance Architectural Designer',
    exp1_d: 'Independent residential and conceptual projects for private clients across North Macedonia.',
    exp2_t: 'Design Intern',
    exp2_d: 'Drafting, visualization, and model-making on multiple commercial projects.',
    aw1: 'Faculty Design Excellence Award — Architecture Thesis',
    aw2: 'Best Conceptual Project — Annual Student Exhibition',

    /* Contact */
    ct_kicker:   '— Say Hello',
    ct_desc:     'Open for architecture, collaboration, and creative projects.',
    ct_headline: "Let's build something remarkable together.",
    ct_email_l:  'Email',
    ct_loc_l:    'Location',
    ct_status_l: 'Status',
    ct_status_v: 'Available for projects',
    cf_name:    'Name',
    cf_email:   'Email',
    cf_subj:    'Subject',
    cf_msg:     'Message',
    cf_send:    'Send Message',
    cf_success: "Message sent! I'll be in touch soon.",
  },

  sq: {
    land_eyebrow: 'Dizajner Arkitektonik',
    land_name_a:  'ALTIN',
    land_name_b:  'ADEMI',
    land_disc:    'Arkitekturë',
    land_cta:     'Eksploroni Portfolion',
    land_location:'Shkup, Maqedonia e Veriut',
    nav_arch: 'Arkitekturë', nav_free: 'Freelance', nav_creat: 'Kreative',
    nav_skills: 'Aftësi',   nav_cv: 'CV',          nav_contact: 'Kontakt',
    hub_eyebrow: 'Disiplinat e Zgjedhura',
    hub_role: 'Arkitekturë · Freelance · Kreative',
    hc_arch: 'Projektet Kryesore',
    hc_free: 'Punë me Klientë',
    hc_creat: 'Zejet & Eksperimente',
    hc_skills: 'Software & Ekspertizë',
    hc_cv: 'Prejardhja & Arsimi',
    hc_contact: 'Filloni Bisedën',
    arch_kicker: '— Projektet e Zgjedhura',
    arch_desc: 'Projekte të ndërtuar dhe konceptuale duke eksploruar formën, strukturën dhe materialin.',
    p_cat_concept: 'Dizajn Konceptual', p_cat_sustain: 'Dizajn i Qëndrueshëm', p_cat_res: 'Rezidencial',
    p1_name: 'Kullë Arkitekturore',
    p1_desc: 'Kullë me përdorim të përzier duke eksploruar urbanizmin vertikal dhe shprehjen strukturore nëpërmjet fasadës prej qelqi dhe çeliku.',
    p2_name: 'Ndërtesë Administrative',
    p2_desc: 'Kompleks administrativ me çati të gjallë, principe biophilic dhe performancë energjetike afër zeros.',
    p3_name: 'Dizajn i Plotë Shtëpie',
    p3_desc: 'Dizajn i plotë rezidencial — nga studimi i vendit deri te renderimi 3D.',
    view_proj: 'Shiko Projektin →',
    free_kicker: '— Punë me Klientë',
    free_desc: 'Projekte rezidenciale dhe komerciale për klientë privatë.',
    f1_name: 'Shtëpi Moderne Familjare', f1_desc: 'Banesë me plan të hapur dhe xhama nga dyshemeja.',
    f2_name: 'Vilë Minimaliste',          f2_desc: 'Vilë me çati të sheshtë, veshje të errët dhe oborr pishinë.',
    f3_name: 'Rezidencë në Kodër',        f3_desc: 'Shtëpi e tarracuar me pamje panoramike mbi liqen.',
    f4_name: 'Shtëpi Kompakte Urbane',    f4_desc: 'Shtëpi efiçiente me parterranë inteligjente dhe terracë.',
    creat_kicker: '— Eksperimente',
    creat_desc: 'Zejet, vizatimi dhe eksplorimi i materialeve jashtë ekranit.',
    c_cat1: 'Origami & Letër', c_cat2: 'Modele Kartoni', c_cat3: 'Projekte Druri', c_cat4: 'Portrete & Skica',
    c1_1:'Strukturë #1', c1_2:'Model Letre', c1_3:'Formë e Palosur',
    c2_1:'Bllok Urban', c2_2:'Fragment',
    c3_1:'Studim Lidhjesh', c3_2:'Formë Skulpturore',
    c4_1:'Portret I', c4_2:'Portret II', c5_1:'Skicë Makine',
    skills_kicker: '— Ekspertizë',
    skills_desc: 'Komplet i plotë mjetesh dizajni arkitektonik dhe kreativ.',
    sk_software: 'Niveli i Softuerit', sk_arch_h: 'Arkitekturë', sk_creat_h: 'Kreative',
    ska1:'Dizajn Arkitektonik', ska2:'Dizajn Interieri', ska3:'Dizajn Eksterieri',
    ska4:'Vizualizim 3D', ska5:'Zhvillim Koncepti', ska6:'Planifikim Hapësinor',
    ska7:'Vizatim Teknik', ska8:'Analizë Vendndodhjeje', ska9:'Specifikim Materialesh',
    skc1:'Vizatim me Dorë', skc2:'Vizatim Portretesh', skc3:'Dizajn Logo',
    skc4:'Dizajn Web', skc5:'Krijim Modelesh', skc6:'Zejet e Drurit',
    skc7:'Zejet e Letrës', skc8:'Skicim Makinash',
    cv_kicker: '— Curriculum Vitae',
    cv_role: 'Dizajner Arkitektonik', cv_loc_lbl: 'Vendndodhja', cv_lang_h: 'Gjuhët',
    cv_native: 'Amtare', cv_fluent: 'Rrjedhshëm', cv_advanced: 'E Avancuar',
    cv_dl: 'Shkarko CV',
    cv_about_h: 'Rreth Meje',
    cv_about: 'Dizajner i ri arkitektonik i pasionuar me bazë të fortë në dizajn, vizualizim dhe eksperimentim kreativ.',
    cv_edu_h: 'Arsimi', cv_exp_h: 'Eksperienca', cv_awards_h: 'Çmime',
    edu1_d: 'Bachelor i Arkitekturës',
    edu1_s: 'Fakulteti i Arkitekturës — Universiteti "Ss. Cyril & Metodius", Shkup',
    edu2_d: 'Shkolla e Mesme — Shkencat & Matematika',
    edu2_s: 'Gjimnaz, Shkup',
    exp1_t: 'Dizajner Arkitektonik Freelance',
    exp1_d: 'Projekte të pavarura rezidenciale dhe konceptuale për klientë privatë.',
    exp2_t: 'Praktikant Dizajni',
    exp2_d: 'Mbështetje me hartim, vizualizim dhe modelim.',
    aw1: 'Çmimi i Ekselencës — Teza e Arkitekturës',
    aw2: 'Projekti më i Mirë Konceptual — Ekspozita Vjetore',
    ct_kicker: '— Thuaj Përshëndetje',
    ct_desc: 'Hapur për arkitekturë, bashkëpunim dhe projekte kreative.',
    ct_headline: 'Le të ndërtojmë diçka të jashtëzakonshme bashkë.',
    ct_email_l:'Email', ct_loc_l:'Vendndodhja', ct_status_l:'Statusi',
    ct_status_v:'I disponueshëm për projekte',
    cf_name:'Emri', cf_email:'Email', cf_subj:'Subjekti', cf_msg:'Mesazhi',
    cf_send:'Dërgo Mesazhin',
    cf_success:"Mesazhi u dërgua! Do t'ju kthehem.",
  },

  mk: {
    land_eyebrow: 'Архитектонски Дизајнер',
    land_name_a:  'АЛТИН',
    land_name_b:  'АДЕМИ',
    land_disc:    'Архитектура',
    land_cta:     'Истражи го Портфолиото',
    land_location:'Скопје, Северна Македонија',
    nav_arch: 'Архитектура', nav_free: 'Фриленс', nav_creat: 'Креативно',
    nav_skills: 'Вештини',  nav_cv: 'CV',         nav_contact: 'Контакт',
    hub_eyebrow: 'Избрани Дисциплини',
    hub_role: 'Архитектура · Фриленс · Креативно',
    hc_arch: 'Истакнати Проекти',
    hc_free: 'Работа со Клиенти',
    hc_creat: 'Занает & Експерименти',
    hc_skills: 'Софтвер & Експертиза',
    hc_cv: 'Позадина & Образование',
    hc_contact: 'Започни Разговор',
    arch_kicker: '— Избрани Проекти',
    arch_desc: 'Изградени и концептуални проекти кои ги истражуваат формата, структурата и материјалот.',
    p_cat_concept: 'Концептуален Дизајн', p_cat_sustain: 'Одржлив Дизајн', p_cat_res: 'Резиденцијален',
    p1_name: 'Архитектонска Кула',
    p1_desc: 'Кула со мешана намена која ги истражува вертикалниот урбанизам и структурниот израз.',
    p2_name: 'Административна Зграда',
    p2_desc: 'Административен комплекс со жив зелен покрив и биофилски принципи.',
    p3_name: 'Целосен Дизајн на Куќа',
    p3_desc: 'Комплетен резиденцијален дизајн — од геодетска анализа до финален 3D рендер.',
    view_proj: 'Отвори Проект →',
    free_kicker: '— Работа со Клиенти',
    free_desc: 'Резиденцијални и комерцијални проекти за приватни клиенти.',
    f1_name: 'Модерна Семејна Куќа', f1_desc: 'Отворен план со застаклување и интегрирано уредување.',
    f2_name: 'Минималистичка Вила',  f2_desc: 'Рамен покрив, темна облога и базенски двор.',
    f3_name: 'Резиденција на Рид',   f3_desc: 'Терасирана куќа со панорамски поглед врз езерото.',
    f4_name: 'Компактна Градска Куќа', f4_desc: 'Просторно ефикасна со паметни распореди и тераса.',
    creat_kicker: '— Експерименти',
    creat_desc: 'Рачна изработка, цртање и истражување на материјали.',
    c_cat1:'Оригами & Хартија', c_cat2:'Картонски Модели', c_cat3:'Дрвени Проекти', c_cat4:'Портрети & Скици',
    c1_1:'Структура #1', c1_2:'Хартиен Модел', c1_3:'Превиткана Форма',
    c2_1:'Урбан Блок', c2_2:'Фрагмент',
    c3_1:'Студија на Врски', c3_2:'Скулптурна Форма',
    c4_1:'Портрет I', c4_2:'Портрет II', c5_1:'Скица Автомобил',
    skills_kicker: '— Експертиза',
    skills_desc: 'Целосен дизајн тулкит низ архитектура, визуализација и занает.',
    sk_software: 'Ниво на Софтвер', sk_arch_h: 'Архитектура', sk_creat_h: 'Креативно',
    ska1:'Архитектонски Дизајн', ska2:'Ентериер Дизајн', ska3:'Екстериер Дизајн',
    ska4:'3D Визуализација', ska5:'Развој на Концепт', ska6:'Просторно Планирање',
    ska7:'Техничко Цртање', ska8:'Анализа на Локација', ska9:'Спецификација на Материјали',
    skc1:'Рачно Цртање', skc2:'Портретно Цртање', skc3:'Дизајн на Лого',
    skc4:'Веб Дизајн', skc5:'Изработка на Модели', skc6:'Дрворезба',
    skc7:'Хартиена Уметност', skc8:'Скицирање Автомобили',
    cv_kicker: '— Curriculum Vitae',
    cv_role: 'Архитектонски Дизајнер', cv_loc_lbl: 'Локација', cv_lang_h: 'Јазици',
    cv_native: 'Мајчин', cv_fluent: 'Течно', cv_advanced: 'Напредно',
    cv_dl: 'Преземи CV',
    cv_about_h: 'За мене',
    cv_about: 'Страстен архитектонски дизајнер со цврста основа во дизајн, визуализација и творечко истражување.',
    cv_edu_h: 'Образование', cv_exp_h: 'Искуство', cv_awards_h: 'Награди',
    edu1_d: 'Дипломиран Архитект',
    edu1_s: 'Архитектонски Факултет — Универзитет „Свети Кирил и Методиј", Скопје',
    edu2_d: 'Средно Училиште — Природни Науки & Математика',
    edu2_s: 'Гимназија, Скопје',
    exp1_t: 'Фриленс Архитектонски Дизајнер',
    exp1_d: 'Самостојни резиденцијални и концептуални проекти за приватни клиенти.',
    exp2_t: 'Дизајн Практикант',
    exp2_d: 'Поддршка со цртање, визуализација и изработка на модели.',
    aw1: 'Награда за Извонредност — Архитектонска Теза',
    aw2: 'Најдобар Концептуален Проект — Студентска Изложба',
    ct_kicker: '— Кажи Здраво',
    ct_desc: 'Отворен за архитектура, соработка и креативни проекти.',
    ct_headline: 'Ајде да изградиме нешто извонредно заедно.',
    ct_email_l:'Е-пошта', ct_loc_l:'Локација', ct_status_l:'Статус',
    ct_status_v:'Достапен за проекти',
    cf_name:'Ime', cf_email:'Е-пошта', cf_subj:'Предмет', cf_msg:'Порака',
    cf_send:'Испрати Порака',
    cf_success:'Пораката е испратена! Ќе ви се јавам наскоро.',
  },
};

/* ════════════════════════════════════════════════════════════════
   PROJECT DATA (for modal)
   ════════════════════════════════════════════════════════════════ */
const PROJECTS = {
  tower: {
    title: 'Architectural Tower', year: '2024',
    cat: 'Mixed-Use High-Rise · Concept',
    desc: 'A mixed-use high-rise exploring vertical urbanism and structural expression. The tapering glass-and-steel facade responds dynamically to loading conditions while creating a recognisable urban silhouette. Stacking residential, office, and retail across 42 floors, the project examines the relationship between tower typology and public ground.',
    imgCls: 'pr-img-t',
    drawings: ['Site Plan', 'Ground Floor', 'Typical Floor', 'Section A–A', 'West Elevation', '3D View'],
  },
  admin: {
    title: 'Administrative Building', year: '2023',
    cat: 'Green Roof · Sustainable Design',
    desc: 'An administrative complex built around biophilic principles. The living green roof reduces heat island effect; passive solar strategies and triple-glazed facades achieve near-zero energy performance. A central atrium floods the floor plates with daylight.',
    imgCls: 'pr-img-a',
    drawings: ['Ground Floor', 'Roof Plan', 'Section B–B', 'Facade Detail', 'Green Roof Detail', '3D View'],
  },
  house: {
    title: 'Full House Design', year: '2023',
    cat: 'Interior & Exterior · Residential',
    desc: 'A complete design engagement from site survey to photorealistic render. The split-level section engages a sloping site; warm timber interiors contrast against raw concrete. Every element — bespoke joinery, material specification, lighting — was resolved through this project.',
    imgCls: 'pr-img-h',
    drawings: ['Site Plan', 'Ground Floor', 'First Floor', 'Interior Render', 'Exterior Render', 'Section C–C'],
  },
};

/* ════════════════════════════════════════════════════════════════
   STATE
   ════════════════════════════════════════════════════════════════ */
let lang        = 'en';
let currentView = 'landing';
let mX = 0, mY = 0, fX = 0, fY = 0;

/* ════════════════════════════════════════════════════════════════
   CURSOR
   ════════════════════════════════════════════════════════════════ */
const cursorEl = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  mX = e.clientX; mY = e.clientY;
  cursorEl.style.left = mX + 'px';
  cursorEl.style.top  = mY + 'px';
});

/* Smooth-follow variant for the outer ring (if added) */
(function raf() {
  fX += (mX - fX) * 0.12;
  fY += (mY - fY) * 0.12;
  requestAnimationFrame(raf);
})();

/* ════════════════════════════════════════════════════════════════
   LANGUAGE
   ════════════════════════════════════════════════════════════════ */
function applyLang(l) {
  lang = l;
  const t = LANG[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('.ll-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = l;
  try { sessionStorage.setItem('aa_lang', l); } catch (_) {}
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ════════════════════════════════════════════════════════════════
   VIEW ROUTER
   ════════════════════════════════════════════════════════════════ */
function goTo(viewId, skipScroll) {
  if (viewId === currentView) return;
  currentView = viewId;

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + viewId);
  if (target) {
    target.classList.add('active');
    if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeMenu();
  closeModal();

  /* Trigger reveals */
  setTimeout(triggerReveals, 80);

  /* Skill bars when navigating to skills */
  if (viewId === 'skills') setTimeout(animateSkills, 500);

  /* Hub header scroll class */
  if (viewId === 'hub') {
    const hdr = document.getElementById('hub-hdr');
    if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 40);
  }
}

/* Wire all [data-goto] */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-goto]');
  if (btn) {
    e.preventDefault();
    goTo(btn.dataset.goto);
  }
  const projBtn = e.target.closest('[data-proj]');
  if (projBtn && projBtn.classList.contains('pr-open-btn')) {
    openModal(projBtn.dataset.proj);
  }
});

/* Landing CTA */
const landBtn = document.getElementById('land-btn');
if (landBtn) {
  landBtn.addEventListener('click', () => goTo('hub'));
}

/* ════════════════════════════════════════════════════════════════
   STICKY HUB HEADER
   ════════════════════════════════════════════════════════════════ */
const hubHdr = document.getElementById('hub-hdr');
window.addEventListener('scroll', () => {
  if (hubHdr && currentView === 'hub') {
    hubHdr.classList.toggle('scrolled', window.scrollY > 40);
  }
}, { passive: true });

/* ════════════════════════════════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════════════════════════════════ */
const burgerBtn = document.getElementById('burger-btn');
const mobMenu   = document.getElementById('mob-menu');

function closeMenu() {
  if (!burgerBtn || !mobMenu) return;
  burgerBtn.classList.remove('open');
  mobMenu.classList.remove('open');
  mobMenu.setAttribute('aria-hidden', 'true');
  burgerBtn.setAttribute('aria-expanded', 'false');
}

if (burgerBtn && mobMenu) {
  burgerBtn.addEventListener('click', () => {
    const open = mobMenu.classList.toggle('open');
    burgerBtn.classList.toggle('open');
    mobMenu.setAttribute('aria-hidden',   String(!open));
    burgerBtn.setAttribute('aria-expanded', String(open));
  });
}

/* ════════════════════════════════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revObs.unobserve(en.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

function triggerReveals() {
  document.querySelectorAll('.view.active .reveal:not(.in)').forEach(el => revObs.observe(el));
}

window.addEventListener('scroll', triggerReveals, { passive: true });

/* ════════════════════════════════════════════════════════════════
   SKILL BARS
   ════════════════════════════════════════════════════════════════ */
function animateSkills() {
  document.querySelectorAll('.skb-fill').forEach(bar => {
    const w = parseInt(bar.dataset.w) / 100;
    bar.style.transform = `scaleX(${w})`;
    bar.classList.add('on');
  });
}

/* Also animate when scrolled into view */
const skWrap = document.getElementById('sk-left');
if (skWrap) {
  const skObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateSkills(); skObs.disconnect(); }
  }, { threshold: 0.2 });
  skObs.observe(skWrap);
}

/* ════════════════════════════════════════════════════════════════
   PROJECT MODAL
   ════════════════════════════════════════════════════════════════ */
const modal      = document.getElementById('proj-modal');
const modalBody  = document.getElementById('pm-body');
const modalClose = document.getElementById('pm-close');

function openModal(id) {
  const p = PROJECTS[id];
  if (!p || !modal || !modalBody) return;

  /* Build inline SVG matching project */
  const svgMap = {
    tower: `<svg viewBox="0 0 200 300" fill="none" style="width:40%;height:60%;opacity:.8">
      <rect x="65" y="15" width="70" height="270" fill="rgba(238,232,220,.02)" stroke="rgba(238,232,220,.12)" stroke-width=".8"/>
      <line x1="83" y1="15" x2="83" y2="285" stroke="rgba(238,232,220,.06)" stroke-width=".4"/>
      <line x1="100" y1="15" x2="100" y2="285" stroke="rgba(238,232,220,.06)" stroke-width=".4"/>
      <line x1="117" y1="15" x2="117" y2="285" stroke="rgba(238,232,220,.06)" stroke-width=".4"/>
      <line x1="65" y1="75" x2="135" y2="75" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <line x1="65" y1="130" x2="135" y2="130" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <line x1="65" y1="185" x2="135" y2="185" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <rect x="71" y="35" width="10" height="18" rx="1" fill="rgba(255,250,225,.08)"/>
      <rect x="88" y="90" width="10" height="18" rx="1" fill="rgba(255,250,225,.1)"/>
      <rect x="105" y="145" width="10" height="18" rx="1" fill="rgba(255,250,225,.07)"/>
    </svg>`,
    admin: `<svg viewBox="0 0 280 190" fill="none" style="width:55%;height:60%;opacity:.8">
      <rect x="20" y="65" width="240" height="115" fill="rgba(238,232,220,.015)" stroke="rgba(238,232,220,.09)" stroke-width=".7"/>
      <line x1="10" y1="65" x2="270" y2="65" stroke="rgba(238,232,220,.14)" stroke-width="1"/>
      <rect x="20" y="65" width="240" height="9" fill="rgba(80,150,80,.07)"/>
      <line x1="68" y1="65" x2="68" y2="180" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <line x1="116" y1="65" x2="116" y2="180" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <line x1="164" y1="65" x2="164" y2="180" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <line x1="212" y1="65" x2="212" y2="180" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <rect x="28" y="82" width="30" height="18" rx="1" fill="rgba(255,250,225,.07)"/>
      <rect x="122" y="82" width="30" height="18" rx="1" fill="rgba(255,250,225,.09)"/>
    </svg>`,
    house: `<svg viewBox="0 0 260 210" fill="none" style="width:50%;height:60%;opacity:.8">
      <polygon points="24,210 24,90 130,22 236,90 236,210" fill="rgba(238,232,220,.015)" stroke="rgba(238,232,220,.09)" stroke-width=".7"/>
      <line x1="24" y1="90" x2="236" y2="90" stroke="rgba(238,232,220,.12)" stroke-width=".8"/>
      <line x1="86" y1="90" x2="86" y2="210" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <line x1="174" y1="90" x2="174" y2="210" stroke="rgba(238,232,220,.05)" stroke-width=".4"/>
      <rect x="88" y="150" width="84" height="60" fill="rgba(238,232,220,.02)" stroke="rgba(238,232,220,.07)" stroke-width=".5"/>
      <rect x="44" y="102" width="26" height="22" rx="1" fill="rgba(255,250,225,.07)"/>
      <rect x="178" y="102" width="26" height="22" rx="1" fill="rgba(255,250,225,.07)"/>
    </svg>`,
  };

  modalBody.innerHTML = `
    <div class="pm-hero ${p.imgCls}" style="min-height:260px">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">${svgMap[id]}</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <span style="font-family:'Fira Code',monospace;font-size:10px;letter-spacing:2px;color:#c8c4ba">${p.year}</span>
      <span style="color:#4a4a4a;font-size:9px">—</span>
      <span style="font-family:'Fira Code',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#787878;padding:4px 10px;border:1px solid #262626;border-radius:3px">${p.cat}</span>
    </div>
    <h2 class="pm-title">${p.title}</h2>
    <p class="pm-desc">${p.desc}</p>
    <p class="pm-dl-label">— Drawings &amp; Visualizations</p>
    <div class="pm-drawings">
      ${p.drawings.map(d => `<div class="pm-dr"><span>${d}</span></div>`).join('')}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

/* ════════════════════════════════════════════════════════════════
   CONTACT FORM
   ════════════════════════════════════════════════════════════════ */
const ctForm  = document.getElementById('ct-form');
const cfOk    = document.getElementById('cf-ok');

if (ctForm && cfOk) {
  ctForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = ctForm.querySelector('.cf-submit');
    btn.style.opacity = '.5'; btn.disabled = true;
    setTimeout(() => {
      ctForm.reset();
      btn.style.opacity = '1'; btn.disabled = false;
      cfOk.classList.remove('hidden');
      setTimeout(() => cfOk.classList.add('hidden'), 5000);
    }, 1600);
  });
}

/* ════════════════════════════════════════════════════════════════
   LANDING — mouse parallax
   ════════════════════════════════════════════════════════════════ */
const archSvg = document.querySelector('.arch-bg-svg');
const floatEls = document.querySelectorAll('.fs');

document.addEventListener('mousemove', e => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  if (archSvg) {
    archSvg.style.transform = `scale(1.04) translate(${dx * 12}px, ${dy * 7}px)`;
  }
  floatEls.forEach((el, i) => {
    const d = (i + 1) * 4;
    el.style.marginLeft = `${dx * d * .2}px`;
    el.style.marginTop  = `${dy * d * .15}px`;
  });
});

/* ════════════════════════════════════════════════════════════════
   KEYBOARD
   ════════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeMenu(); }
});

/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */
(function init() {
  /* Restore language */
  try {
    const saved = sessionStorage.getItem('aa_lang');
    applyLang(saved && LANG[saved] ? saved : 'en');
  } catch (_) {
    applyLang('en');
  }

  /* Start on landing */
  goTo('landing', true);

  /* First-run reveals */
  setTimeout(triggerReveals, 400);
})();
