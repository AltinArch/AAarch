/* ════════════════════════════════════════════════════════════════
   ALTIN ADEMI ARCHITECTURE PORTFOLIO — script.js
   Shared for index.html + portfolio.html
   Features: Cursor · i18n · Reveal · Skills · Modal · Form · Nav
   ════════════════════════════════════════════════════════════════ */
'use strict';

/* ════════════════════════════════════════════════════════════════
   TRANSLATIONS
   ════════════════════════════════════════════════════════════════ */
const T = {
  en: {
    /* Landing */
    land_eyebrow:'Architectural Designer',
    land_disc:'Architecture',
    land_cta:'Explore My Portfolio',
    land_loc:'Skopje, North Macedonia',

    /* Nav */
    nav_arch:'Architecture', nav_free:'Freelance', nav_creat:'Creative',
    nav_skills:'Skills',     nav_cv:'CV',           nav_contact:'Contact',

    /* Hub */
    hub_label:'Selected Disciplines',
    hub_role:'Architecture & Design',
    card_arch_sub:'Featured Projects',
    card_cv_sub:'Background & Education',
    card_free_sub:'Client Commissions',
    card_creat_sub:'Craft & Experiments',
    card_skills_sub:'Software & Expertise',
    card_contact_sub:'Start a Conversation',

    /* Architecture */
    arch_kicker:'— Selected Projects',
    arch_desc:'Built and conceptual projects exploring form, structure, and material.',
    p_cat_concept:'Concept Design',
    p_cat_sustain:'Sustainable Design',
    p_cat_res:'Residential',
    p1_name:'Architectural Tower',
    p1_desc:'Mixed-use high-rise exploring vertical urbanism and structural expression through a tapering glass-and-steel facade across 42 floors.',
    p2_name:'Administrative Building',
    p2_desc:'Administrative complex with living green roof, biophilic design principles, and near-zero energy performance through triple-glazed facade systems.',
    p3_name:'Full House Design',
    p3_desc:'Complete interior and exterior residential design — site survey through bespoke joinery and material specification to final photorealistic renders.',
    open_proj:'View Project →',

    /* CV */
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Architectural Designer',
    cv_loc_label:'Location',
    cv_lang_title:'Languages',
    cv_native:'Native',
    cv_fluent:'Fluent',
    cv_advanced:'Advanced',
    cv_download:'Download CV',
    cv_about_title:'About',
    cv_about_text:'A passionate architectural designer with a strong foundation in design, visualization, and creative experimentation. Combining technical precision with artistic sensibility to deliver compelling architectural narratives — residential, commercial, and conceptual.',
    cv_edu_title:'Education',
    cv_exp_title:'Experience',
    cv_awards_title:'Awards',
    edu1_degree:'Bachelor of Architecture',
    edu1_school:'Faculty of Architecture — Ss. Cyril & Methodius University, Skopje',
    edu2_degree:'High School — Sciences & Mathematics',
    edu2_school:'Gymnasium, Skopje',
    exp1_title:'Freelance Architectural Designer',
    exp1_desc:'Independent residential and conceptual projects for private clients across North Macedonia.',
    exp2_title:'Design Intern',
    exp2_desc:'Drafting, visualization, and physical model-making support on multiple commercial projects.',
    award1:'Faculty Design Excellence Award — Architecture Thesis',
    award2:'Best Conceptual Project — Annual Student Exhibition',

    /* Freelance */
    free_kicker:'— Client Commissions',
    free_desc:'Residential design projects delivered for private clients across North Macedonia.',
    f1_name:'Modern Family Home',
    f1_desc:'Open-plan residence with floor-to-ceiling glazing and integrated landscape design.',
    f2_name:'Minimalist Villa',
    f2_desc:'Flat-roofed villa with dark cladding, cantilevered volumes, and a courtyard pool at its centre.',
    f3_name:'Hillside Residence',
    f3_desc:'Terraced hillside home following natural topography with panoramic lake views.',
    f4_name:'Urban Compact House',
    f4_desc:'Space-efficient urban infill with smart layouts, light wells, and a rooftop terrace garden.',

    /* Creative */
    creat_kicker:'— Experiments',
    creat_desc:'Handcraft, drawing, and material exploration beyond the digital screen.',
    c_cat1:'Origami & Paper', c_cat2:'Cardboard Models',
    c_cat3:'Wood Projects',   c_cat4:'Portraits & Sketches',
    c1_1:'Structure #1', c1_2:'Paper Model',    c1_3:'Folded Form',
    c2_1:'Urban Block',  c2_2:'Fragment',
    c3_1:'Joinery Study',c3_2:'Sculptural Form',
    c4_1:'Portrait I',   c4_2:'Portrait II',    c5_1:'Car Sketch',

    /* Skills */
    skills_kicker:'— Expertise',
    skills_desc:'A full-pipeline design toolkit spanning architecture, visualization, and creative craft.',
    sk_software:'Software Proficiency',
    sk_arch_title:'Architecture',
    sk_creat_title:'Creative',
    ska1:'Architectural Design', ska2:'Interior Design', ska3:'Exterior Design',
    ska4:'3D Visualization', ska5:'Concept Development', ska6:'Space Planning',
    ska7:'Technical Drawing', ska8:'Site Analysis', ska9:'Material Specification',
    skc1:'Hand Drawing', skc2:'Portrait Drawing', skc3:'Logo Design',
    skc4:'Website Design', skc5:'Model Making', skc6:'Wood Craft',
    skc7:'Paper Craft', skc8:'Car Sketching',

    /* Contact */
    ct_kicker:'— Say Hello',
    ct_desc:'Open for architecture, collaboration, and creative projects.',
    ct_headline:"Let's build something remarkable together.",
    ct_email_lbl:'Email', ct_loc_lbl:'Location', ct_status_lbl:'Status',
    ct_status_val:'Available for projects',
    cf_name:'Name', cf_email:'Email', cf_subject:'Subject', cf_message:'Message',
    cf_send:'Send Message',
    cf_success:"Message sent! I'll be in touch soon.",
  },

  sq: {
    land_eyebrow:'Dizajner Arkitektonik',
    land_disc:'Arkitekturë',
    land_cta:'Eksploroni Portfolion',
    land_loc:'Shkup, Maqedonia e Veriut',
    nav_arch:'Arkitekturë', nav_free:'Freelance', nav_creat:'Kreative',
    nav_skills:'Aftësi', nav_cv:'CV', nav_contact:'Kontakt',
    hub_label:'Disiplinat e Zgjedhura',
    hub_role:'Arkitekturë & Dizajn',
    card_arch_sub:'Projektet Kryesore',
    card_cv_sub:'Prejardhja & Arsimi',
    card_free_sub:'Punë me Klientë',
    card_creat_sub:'Zejet & Eksperimente',
    card_skills_sub:'Software & Ekspertizë',
    card_contact_sub:'Filloni Bisedën',
    arch_kicker:'— Projektet e Zgjedhura',
    arch_desc:'Projekte të ndërtuar dhe konceptuale duke eksploruar formën, strukturën dhe materialin.',
    p_cat_concept:'Dizajn Konceptual', p_cat_sustain:'Dizajn i Qëndrueshëm', p_cat_res:'Rezidencial',
    p1_name:'Kullë Arkitekturore',
    p1_desc:'Kullë me përdorim të përzier duke eksploruar urbanizmin vertikal nëpërmjet fasadës prej qelqi dhe çeliku.',
    p2_name:'Ndërtesë Administrative',
    p2_desc:'Kompleks administrativ me çati të gjallë, principe biophilic dhe performancë energjetike afër zeros.',
    p3_name:'Dizajn i Plotë Shtëpie',
    p3_desc:'Dizajn i plotë rezidencial — nga studimi i vendit deri te renderimi 3D.',
    open_proj:'Shiko Projektin →',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Dizajner Arkitektonik',
    cv_loc_label:'Vendndodhja', cv_lang_title:'Gjuhët',
    cv_native:'Amtare', cv_fluent:'Rrjedhshëm', cv_advanced:'E Avancuar',
    cv_download:'Shkarko CV',
    cv_about_title:'Rreth Meje',
    cv_about_text:'Dizajner i ri arkitektonik i pasionuar me bazë të fortë në dizajn, vizualizim dhe eksperimentim kreativ.',
    cv_edu_title:'Arsimi', cv_exp_title:'Eksperienca', cv_awards_title:'Çmime',
    edu1_degree:'Bachelor i Arkitekturës',
    edu1_school:'Fakulteti i Arkitekturës — Universiteti "Ss. Cyril & Metodius", Shkup',
    edu2_degree:'Shkolla e Mesme — Shkencat & Matematika',
    edu2_school:'Gjimnaz, Shkup',
    exp1_title:'Dizajner Arkitektonik Freelance',
    exp1_desc:'Projekte të pavarura rezidenciale dhe konceptuale për klientë privatë.',
    exp2_title:'Praktikant Dizajni',
    exp2_desc:'Mbështetje me hartim, vizualizim dhe modelim.',
    award1:'Çmimi i Ekselencës — Teza e Arkitekturës',
    award2:'Projekti më i Mirë Konceptual — Ekspozita Vjetore',
    free_kicker:'— Punë me Klientë',
    free_desc:'Projekte rezidenciale të dorëzuara për klientë privatë.',
    f1_name:'Shtëpi Moderne Familjare', f1_desc:'Banesë me plan të hapur dhe xhama nga dyshemeja.',
    f2_name:'Vilë Minimaliste', f2_desc:'Vilë me çati të sheshtë, veshje të errët dhe oborr pishinë.',
    f3_name:'Rezidencë në Kodër', f3_desc:'Shtëpi e tarracuar me pamje panoramike mbi liqen.',
    f4_name:'Shtëpi Kompakte Urbane', f4_desc:'Shtëpi efiçiente me parterranë inteligjente dhe terracë.',
    creat_kicker:'— Eksperimente',
    creat_desc:'Zejet, vizatimi dhe eksplorimi i materialeve jashtë ekranit.',
    c_cat1:'Origami & Letër', c_cat2:'Modele Kartoni',
    c_cat3:'Projekte Druri',  c_cat4:'Portrete & Skica',
    c1_1:'Strukturë #1', c1_2:'Model Letre', c1_3:'Formë e Palosur',
    c2_1:'Bllok Urban',  c2_2:'Fragment',
    c3_1:'Studim Lidhjesh', c3_2:'Formë Skulpturore',
    c4_1:'Portret I', c4_2:'Portret II', c5_1:'Skicë Makine',
    skills_kicker:'— Ekspertizë',
    skills_desc:'Komplet i plotë mjetesh dizajni arkitektonik dhe kreativ.',
    sk_software:'Niveli i Softuerit', sk_arch_title:'Arkitekturë', sk_creat_title:'Kreative',
    ska1:'Dizajn Arkitektonik', ska2:'Dizajn Interieri', ska3:'Dizajn Eksterieri',
    ska4:'Vizualizim 3D', ska5:'Zhvillim Koncepti', ska6:'Planifikim Hapësinor',
    ska7:'Vizatim Teknik', ska8:'Analizë Vendndodhjeje', ska9:'Specifikim Materialesh',
    skc1:'Vizatim me Dorë', skc2:'Vizatim Portretesh', skc3:'Dizajn Logo',
    skc4:'Dizajn Web', skc5:'Krijim Modelesh', skc6:'Zejet e Drurit',
    skc7:'Zejet e Letrës', skc8:'Skicim Makinash',
    ct_kicker:'— Thuaj Përshëndetje',
    ct_desc:'Hapur për arkitekturë, bashkëpunim dhe projekte kreative.',
    ct_headline:'Le të ndërtojmë diçka të jashtëzakonshme bashkë.',
    ct_email_lbl:'Email', ct_loc_lbl:'Vendndodhja', ct_status_lbl:'Statusi',
    ct_status_val:'I disponueshëm për projekte',
    cf_name:'Emri', cf_email:'Email', cf_subject:'Subjekti', cf_message:'Mesazhi',
    cf_send:'Dërgo Mesazhin',
    cf_success:"Mesazhi u dërgua! Do t'ju kthehem.",
  },

  mk: {
    land_eyebrow:'Архитектонски Дизајнер',
    land_disc:'Архитектура',
    land_cta:'Истражи го Портфолиото',
    land_loc:'Скопје, Северна Македонија',
    nav_arch:'Архитектура', nav_free:'Фриленс', nav_creat:'Креативно',
    nav_skills:'Вештини', nav_cv:'CV', nav_contact:'Контакт',
    hub_label:'Избрани Дисциплини',
    hub_role:'Архитектура & Дизајн',
    card_arch_sub:'Истакнати Проекти',
    card_cv_sub:'Позадина & Образование',
    card_free_sub:'Работа со Клиенти',
    card_creat_sub:'Занает & Експерименти',
    card_skills_sub:'Софтвер & Експертиза',
    card_contact_sub:'Започни Разговор',
    arch_kicker:'— Избрани Проекти',
    arch_desc:'Изградени и концептуални проекти кои ги истражуваат формата, структурата и материјалот.',
    p_cat_concept:'Концептуален Дизајн', p_cat_sustain:'Одржлив Дизајн', p_cat_res:'Резиденцијален',
    p1_name:'Архитектонска Кула',
    p1_desc:'Кула со мешана намена која ги истражува вертикалниот урбанизам преку конусна стаклено-челична фасада.',
    p2_name:'Административна Зграда',
    p2_desc:'Административен комплекс со жив зелен покрив и биофилски принципи.',
    p3_name:'Целосен Дизајн на Куќа',
    p3_desc:'Комплетен резиденцијален дизајн — од геодетска анализа до финален 3D рендер.',
    open_proj:'Отвори Проект →',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Архитектонски Дизајнер',
    cv_loc_label:'Локација', cv_lang_title:'Јазици',
    cv_native:'Мајчин', cv_fluent:'Течно', cv_advanced:'Напредно',
    cv_download:'Преземи CV',
    cv_about_title:'За мене',
    cv_about_text:'Страстен архитектонски дизајнер со цврста основа во дизајн, визуализација и креативно истражување.',
    cv_edu_title:'Образование', cv_exp_title:'Искуство', cv_awards_title:'Награди',
    edu1_degree:'Дипломиран Архитект',
    edu1_school:'Архитектонски Факултет — Универзитет „Свети Кирил и Методиј", Скопје',
    edu2_degree:'Средно Училиште — Природни Науки & Математика',
    edu2_school:'Гимназија, Скопје',
    exp1_title:'Фриленс Архитектонски Дизајнер',
    exp1_desc:'Самостојни резиденцијални и концептуални проекти за приватни клиенти.',
    exp2_title:'Дизајн Практикант',
    exp2_desc:'Поддршка со цртање, визуализација и изработка на модели.',
    award1:'Награда за Извонредност — Архитектонска Теза',
    award2:'Најдобар Концептуален Проект — Студентска Изложба',
    free_kicker:'— Работа со Клиенти',
    free_desc:'Резиденцијални проекти испорачани за приватни клиенти.',
    f1_name:'Модерна Семејна Куќа', f1_desc:'Отворен план со застаклување и интегрирано уредување.',
    f2_name:'Минималистичка Вила', f2_desc:'Рамен покрив, темна облога и базенски двор.',
    f3_name:'Резиденција на Рид', f3_desc:'Терасирана куќа со панорамски поглед врз езерото.',
    f4_name:'Компактна Градска Куќа', f4_desc:'Просторно ефикасна со паметни распореди и тераса.',
    creat_kicker:'— Експерименти',
    creat_desc:'Рачна изработка, цртање и истражување на материјали.',
    c_cat1:'Оригами & Хартија', c_cat2:'Картонски Модели',
    c_cat3:'Дрвени Проекти',   c_cat4:'Портрети & Скици',
    c1_1:'Структура #1', c1_2:'Хартиен Модел', c1_3:'Превиткана Форма',
    c2_1:'Урбан Блок', c2_2:'Фрагмент',
    c3_1:'Студија на Врски', c3_2:'Скулптурна Форма',
    c4_1:'Портрет I', c4_2:'Портрет II', c5_1:'Скица Автомобил',
    skills_kicker:'— Експертиза',
    skills_desc:'Целосен дизајн тулкит низ архитектура, визуализација и занает.',
    sk_software:'Ниво на Софтвер', sk_arch_title:'Архитектура', sk_creat_title:'Креативно',
    ska1:'Архитектонски Дизајн', ska2:'Ентериер Дизајн', ska3:'Екстериер Дизајн',
    ska4:'3D Визуализација', ska5:'Развој на Концепт', ska6:'Просторно Планирање',
    ska7:'Техничко Цртање', ska8:'Анализа на Локација', ska9:'Спецификација на Материјали',
    skc1:'Рачно Цртање', skc2:'Портретно Цртање', skc3:'Дизајн на Лого',
    skc4:'Веб Дизајн', skc5:'Изработка на Модели', skc6:'Дрворезба',
    skc7:'Хартиена Уметност', skc8:'Скицирање Автомобили',
    ct_kicker:'— Кажи Здраво',
    ct_desc:'Отворен за архитектура, соработка и креативни проекти.',
    ct_headline:'Ајде да изградиме нешто извонредно заедно.',
    ct_email_lbl:'Е-пошта', ct_loc_lbl:'Локација', ct_status_lbl:'Статус',
    ct_status_val:'Достапен за проекти',
    cf_name:'Ime', cf_email:'Е-пошта', cf_subject:'Предмет', cf_message:'Порака',
    cf_send:'Испрати Порака',
    cf_success:'Пораката е испратена! Ќе ви се јавам наскоро.',
  }
};

/* ════════════════════════════════════════════════════════════════
   PROJECT DATA (for modal)
   ════════════════════════════════════════════════════════════════ */
const PROJECTS = {
  tower: {
    name: 'Architectural Tower', year: '2024',
    cat:  'Mixed-Use High-Rise · Concept',
    desc: 'A mixed-use high-rise concept exploring vertical urbanism and the structural expression of tall buildings. The tapering glass-and-steel facade responds dynamically to loading conditions while creating a recognisable urban silhouette. The 42-storey programme stacks residential, office, and retail in a dialogue between tower and public ground.',
    bgCls: 'pimg-tower',
    drawings: ['Site Plan','Ground Floor','Typical Floor','Section A–A','West Elevation','3D View']
  },
  admin: {
    name: 'Administrative Building', year: '2023',
    cat:  'Green Roof · Sustainable Design',
    desc: 'An administrative complex built around biophilic principles. The living green roof system reduces heat island effect and manages stormwater runoff, while passive solar strategies and triple-glazed facades achieve near-zero energy performance. A central atrium floods the floor plates with daylight, reducing mechanical load throughout the building.',
    bgCls: 'pimg-admin',
    drawings: ['Ground Floor','Roof Plan','Section B–B','Facade Detail','Green Roof Detail','3D View']
  },
  house: {
    name: 'Full House Design', year: '2023',
    cat:  'Interior & Exterior · Residential',
    desc: 'A complete design engagement from site survey to photorealistic render. The split-level section engages a sloping site; warm timber interiors contrast against a raw concrete shell. Every element — bespoke joinery, material specification, landscape grading, lighting strategy — was resolved through this project.',
    bgCls: 'pimg-house',
    drawings: ['Site Plan','Ground Floor','First Floor','Interior Render','Exterior Render','Section C–C']
  }
};

/* ════════════════════════════════════════════════════════════════
   STATE
   ════════════════════════════════════════════════════════════════ */
let lang     = 'en';
let mouseX   = 0, mouseY   = 0;
let followX  = 0, followY  = 0;

/* ════════════════════════════════════════════════════════════════
   CUSTOM CURSOR
   ════════════════════════════════════════════════════════════════ */
const curDot  = document.getElementById('cur-dot');
const curRing = document.getElementById('cur-ring');

if (curDot && curRing) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    curDot.style.left = mouseX + 'px';
    curDot.style.top  = mouseY + 'px';
  });

  (function animRing() {
    followX += (mouseX - followX) * 0.1;
    followY += (mouseY - followY) * 0.1;
    curRing.style.left = followX + 'px';
    curRing.style.top  = followY + 'px';
    requestAnimationFrame(animRing);
  })();

  /* Scale ring on interactive elements */
  document.addEventListener('mouseover', e => {
    const el = e.target;
    const isInteractive = el.matches('button,a,.card,.fc,.cg-tile,.proj,.open-proj,.land-btn');
    curRing.style.width        = isInteractive ? '52px'                    : '34px';
    curRing.style.height       = isInteractive ? '52px'                    : '34px';
    curRing.style.borderColor  = isInteractive ? 'rgba(224,219,210,.6)'    : 'rgba(224,219,210,.38)';
  });
}

/* ════════════════════════════════════════════════════════════════
   LANGUAGE
   ════════════════════════════════════════════════════════════════ */
function setLang(l) {
  lang = l;
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = l;
  /* Persist in sessionStorage so nav retains lang */
  try { sessionStorage.setItem('aa_lang', l); } catch(e) {}
}

/* Wire all lang buttons */
document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

/* Restore lang on page load */
(function restoreLang() {
  try {
    const saved = sessionStorage.getItem('aa_lang');
    if (saved && T[saved]) setLang(saved);
    else setLang('en');
  } catch(e) { setLang('en'); }
})();

/* ════════════════════════════════════════════════════════════════
   STICKY HEADER  (portfolio page)
   ════════════════════════════════════════════════════════════════ */
const pHdr = document.getElementById('p-hdr');
if (pHdr) {
  window.addEventListener('scroll', () => {
    pHdr.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ════════════════════════════════════════════════════════════════
   MOBILE MENU  (portfolio page)
   ════════════════════════════════════════════════════════════════ */
const burgerBtn = document.getElementById('burger');
const mobMenu   = document.getElementById('mob-menu');

function closeMobMenu() {
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
    mobMenu.setAttribute('aria-hidden', !open);
    burgerBtn.setAttribute('aria-expanded', open);
  });

  /* Close on any mobile link click */
  mobMenu.querySelectorAll('.mm-link').forEach(a => {
    a.addEventListener('click', closeMobMenu);
  });
}

/* ════════════════════════════════════════════════════════════════
   SMOOTH SCROLL for card links (#hash anchors)
   ════════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      closeMobMenu();
      const hdrH = pHdr ? pHdr.offsetHeight : 0;
      const top  = target.getBoundingClientRect().top + window.scrollY - hdrH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ════════════════════════════════════════════════════════════════
   SCROLL REVEAL  (IntersectionObserver)
   ════════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ════════════════════════════════════════════════════════════════
   SKILL BAR ANIMATION
   ════════════════════════════════════════════════════════════════ */
const skillBarsWrap = document.getElementById('sk-bars-wrap');

if (skillBarsWrap) {
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        document.querySelectorAll('.skb-fill').forEach(bar => {
          const w = parseInt(bar.dataset.w) / 100;
          bar.style.transform = `scaleX(${w})`;
          bar.classList.add('on');
        });
        skillObs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  skillObs.observe(skillBarsWrap);
}

/* ════════════════════════════════════════════════════════════════
   PROJECT MODAL
   ════════════════════════════════════════════════════════════════ */
const modal     = document.getElementById('proj-modal');
const modalBody = document.getElementById('pm-body');
const modalClose = document.getElementById('pm-close');

function openModal(id) {
  const p = PROJECTS[id];
  if (!p || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="pm-hero ${p.bgCls}">
      <div class="proj-art"><svg viewBox="0 0 200 140" fill="none" class="pa-svg" style="width:40%;height:60%;opacity:.7">
        ${id === 'tower'
          ? '<rect x="70" y="5" width="60" height="130" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" stroke-width="0.8"/><line x1="88" y1="5" x2="88" y2="135" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/><line x1="100" y1="5" x2="100" y2="135" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/><line x1="112" y1="5" x2="112" y2="135" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/><line x1="70" y1="35" x2="130" y2="35" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><line x1="70" y1="65" x2="130" y2="65" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><line x1="70" y1="95" x2="130" y2="95" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><rect x="74" y="15" width="10" height="14" rx="1" fill="rgba(255,248,220,0.08)"/><rect x="88" y="45" width="10" height="14" rx="1" fill="rgba(255,248,220,0.1)"/><rect x="112" y="75" width="10" height="14" rx="1" fill="rgba(255,248,220,0.07)"/>'
          : id === 'admin'
          ? '<rect x="20" y="50" width="160" height="85" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" stroke-width="0.7"/><line x1="10" y1="50" x2="190" y2="50" stroke="rgba(255,255,255,0.13)" stroke-width="1"/><rect x="20" y="50" width="160" height="8" fill="rgba(80,150,80,0.07)"/><line x1="60" y1="50" x2="60" y2="135" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><line x1="100" y1="50" x2="100" y2="135" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><line x1="140" y1="50" x2="140" y2="135" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><rect x="26" y="70" width="28" height="16" rx="1" fill="rgba(255,248,220,0.07)"/><rect x="108" y="70" width="28" height="16" rx="1" fill="rgba(255,248,220,0.09)"/>'
          : '<polygon points="20,135 20,60 100,10 180,60 180,135" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" stroke-width="0.7"/><line x1="20" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="0.7"/><line x1="68" y1="60" x2="68" y2="135" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><line x1="132" y1="60" x2="132" y2="135" stroke="rgba(255,255,255,0.06)" stroke-width="0.4"/><rect x="76" y="90" width="48" height="45" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/><rect x="38" y="72" width="22" height="18" rx="1" fill="rgba(255,248,220,0.07)"/><rect x="140" y="72" width="22" height="18" rx="1" fill="rgba(255,248,220,0.07)"/>'}
      </svg></div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
      <span style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--lgray)">${p.year}</span>
      <span style="color:var(--stone);font-size:9px">—</span>
      <span style="font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--mid);padding:3px 9px;border:1px solid var(--ink-5);border-radius:3px">${p.cat}</span>
    </div>
    <h2 class="pm-title">${p.name}</h2>
    <p class="pm-desc">${p.desc}</p>
    <p class="pm-drawings-label">— Drawings &amp; Visualizations</p>
    <div class="pm-drawings">
      ${p.drawings.map(d => `<div class="pm-drawing"><span>${d}</span></div>`).join('')}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

/* Wire open buttons */
document.querySelectorAll('.open-proj').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openModal(btn.dataset.project);
  });
});

/* ════════════════════════════════════════════════════════════════
   CONTACT FORM
   ════════════════════════════════════════════════════════════════ */
const ctForm   = document.getElementById('ct-form');
const cfOk     = document.getElementById('cf-success');

if (ctForm && cfOk) {
  ctForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = ctForm.querySelector('.cf-submit');
    btn.style.opacity  = '.5';
    btn.disabled       = true;
    setTimeout(() => {
      ctForm.reset();
      btn.style.opacity = '1';
      btn.disabled      = false;
      cfOk.classList.remove('hidden');
      setTimeout(() => cfOk.classList.add('hidden'), 5000);
    }, 1500);
  });
}

/* ════════════════════════════════════════════════════════════════
   LANDING PAGE — mouse parallax on SVG bg
   ════════════════════════════════════════════════════════════════ */
const landSvg = document.querySelector('.land-arch');
const geos    = document.querySelectorAll('.geo');

if (landSvg) {
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    landSvg.style.transform = `scale(1.04) translate(${dx * 12}px, ${dy * 7}px)`;
    geos.forEach((g, i) => {
      const d = (i + 1) * 5;
      g.style.transform = `translateY(${parseFloat(g.style.transform?.replace(/[^-\d.]/g,'') || 0)}px) translate(${dx * d * .15}px, ${dy * d * .12}px)`;
    });
  });
}

/* ════════════════════════════════════════════════════════════════
   KEYBOARD: ESC closes modal and mobile menu
   ════════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeMobMenu(); }
});

/* ════════════════════════════════════════════════════════════════
   ACTIVE NAV LINK on scroll  (portfolio page)
   ════════════════════════════════════════════════════════════════ */
const sections  = document.querySelectorAll('.port-section[id]');
const navLinks  = document.querySelectorAll('.pn-link');

if (sections.length && navLinks.length) {
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + en.target.id
            ? 'var(--cream)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navObs.observe(s));
}
