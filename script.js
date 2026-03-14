/* ════════════════════════════════════════════════════════════════
   ARCHITECTURAL TOWER PROJECT — script.js
   Cursor · i18n · Scroll Reveal · Sticky Nav · Parallax · Lightbox
   ════════════════════════════════════════════════════════════════ */
'use strict';

/* ════════════════════════════════════════════════════════════════
   TRANSLATIONS
   ════════════════════════════════════════════════════════════════ */
const T = {
  en: {
    hero_label:       'Architecture Project · 2024',
    hero_name_a:      'ALTIN',
    hero_name_b:      'ADEMI',
    hero_title:       'ARCHITECTURE TOWER PROJECT',
    hero_sub:         'Architectural exploration of vertical form and urban identity.',
    hero_cta:         'Explore Project',
    scroll_label:     'scroll',

    back_label:       'Portfolio',
    nav_proj_title:   'Architecture Tower',
    nav_intro:        'Intro',
    nav_render:       'Render',
    nav_concept:      'Concept',
    nav_plans:        'Plans',
    nav_sections:     'Sections',
    nav_renders:      'Gallery',
    nav_details:      'Details',

    s1_title:         'Introduction',
    stat_type_l:      'Type',         stat_type_v:    'Mixed-Use High-Rise',
    stat_year_l:      'Year',
    stat_loc_l:       'Location',     stat_loc_v:     'Skopje, MK',
    stat_floors_l:    'Floors',
    stat_height_l:    'Height',
    stat_status_l:    'Status',       stat_status_v:  'Concept Design',

    intro_quote:      'A tower is not merely a building — it is a declaration of urban intent, a vertical re-ordering of the city that challenges the ground plane and reaches toward new spatial possibilities.',
    intro_text:       'This mixed-use high-rise explores vertical urbanism through structural expression and material honesty. The tapering glass-and-steel facade responds to prevailing winds and solar exposure while creating a distinctive silhouette that anchors the city skyline. The 42-floor programme stacks residential, office, and retail in a continuous vertical sequence.',
    intro_text2:      'The structural system — a reinforced concrete core with a perimeter steel frame — is made visible through the facade treatment, expressing the building\'s tectonic logic from ground to crown.',

    s2_title:         'Main Render',
    render_caption_l: 'Aerial perspective render — Night elevation, south-east view',

    s3_title:         'Concept',
    concept_h1:       'Vertical Identity',
    concept_p1:       'The tower derives its formal identity from the structural logic of its perimeter frame. Each vertical element is expressed as an independent structural member, creating a rhythm that reads from a distance as a unified facade system yet reveals its tectonic complexity at human scale.',
    concept_h2:       'Programme Strategy',
    concept_p2:       'Lower floors accommodate retail and public programme at the urban level, transitioning through office floors to residential units in the upper third. A sky garden at floor 28 punctuates the vertical sequence and provides communal outdoor space suspended above the city.',
    concept_h3:       'Material Logic',
    concept_p3:       'High-performance triple-glazed unitised panels with integrated solar control sit within the expressed steel frame. The darkened glass and brushed steel produce a shifting surface that responds to light conditions throughout the day.',
    concept_d1:       'Programme Diagram',
    concept_d2:       'Wind Analysis',
    concept_d3:       'Solar Study',

    s4_title:         'Plans',
    plans_intro:      'Typical floor plans demonstrating the structural grid, core organization, and programme distribution across the tower\'s three primary typologies.',
    plan1_level:      'Ground Floor',
    plan2_level:      'Typical Office Floor — L12',
    plan3_level:      'Residential Floor — L32',
    plan4_level:      'Roof / Crown — L42',

    s5_title:         'Sections',

    s6_title:         'Renders',
    rg1_cap:          'Street level perspective — Night view, North elevation',
    rg2_cap:          'Close approach — Base detail',
    rg3_cap:          'Worm\'s eye view — Vertical foreshortening',
    rg4_cap:          'Urban context panorama — Tower in skyline',

    s7_title:         'Details',
    detail1_t:        'Facade Unit — Plan Detail',
    detail2_t:        'Column Connection',
    detail3_t:        'Crown Elevation',

    foot_copy:        '© 2025 Altin Ademi Architecture. All rights reserved.',
    foot_back:        '← Back to Portfolio',
  },

  sq: {
    hero_label:       'Projekt Arkitekture · 2024',
    hero_name_a:      'ALTIN',
    hero_name_b:      'ADEMI',
    hero_title:       'PROJEKTI I KULLËS ARKITEKTURORE',
    hero_sub:         'Eksplorimi arkitektonik i formës vertikale dhe identitetit urban.',
    hero_cta:         'Eksploroni Projektin',
    scroll_label:     'rrësh',

    back_label:       'Portofol',
    nav_proj_title:   'Kullë Arkitekturore',
    nav_intro:'Hyrje', nav_render:'Render', nav_concept:'Koncepti',
    nav_plans:'Planet', nav_sections:'Seksionet', nav_renders:'Galeri', nav_details:'Detajet',

    s1_title:'Hyrje',
    stat_type_l:'Lloji',           stat_type_v:'Ndërtesë me Përdorim të Përzier',
    stat_year_l:'Viti',
    stat_loc_l:'Vendndodhja',      stat_loc_v:'Shkup, MK',
    stat_floors_l:'Katet',
    stat_height_l:'Lartësia',
    stat_status_l:'Statusi',       stat_status_v:'Dizajn Konceptual',

    intro_quote:'Një kullë nuk është thjesht një ndërtesë — ajo është një deklaratë e qëllimit urban, një rirenditje vertikale e qytetit.',
    intro_text:'Kjo ndërtesë me përdorim të përzier eksploron urbanizmin vertikal nëpërmjet shprehjes strukturore dhe ndershmërisë materiale.',
    intro_text2:'Sistemi strukturor — një bërthamë e armuar me beton me kornizë çeliku periferal — bëhet i dukshëm nëpërmjet trajtimit të fasadës.',

    s2_title:'Render Kryesor',
    render_caption_l:'Perspektivë ajrore — Pamje nate, elevata jug-lindore',

    s3_title:'Koncepti',
    concept_h1:'Identiteti Vertikal', concept_h2:'Strategjia e Programit', concept_h3:'Logjika Materiale',
    concept_p1:'Kulla e nxjerr identitetin e saj formal nga logjika strukturore e kornizës periferal.',
    concept_p2:'Katet e poshtme strehojnë programin tregtar dhe publik në nivelin urban.',
    concept_p3:'Panelet e unitizuara me xham tripel me kontroll solar të integruar.',
    concept_d1:'Diagrama e Programit', concept_d2:'Analiza e Erës', concept_d3:'Studim Solar',

    s4_title:'Planet',
    plans_intro:'Planet tipike të kateve që demonstrojnë rrjetin strukturor dhe organizimin e bërthamës.',
    plan1_level:'Kati Parterr',
    plan2_level:'Kat Tipik Zyrash — K12',
    plan3_level:'Kat Banimi — K32',
    plan4_level:'Çati / Kurora — K42',

    s5_title:'Seksionet',

    s6_title:'Renderët',
    rg1_cap:'Perspektivë nga niveli i rrugës — Pamje nate',
    rg2_cap:'Afrim i ngushtë — Detaji i bazës',
    rg3_cap:"Pamje nga poshtë — Deformim vertikal",
    rg4_cap:'Panoramë e kontekstit urban',

    s7_title:'Detajet',
    detail1_t:'Njësia e Fasadës — Detaj Planet',
    detail2_t:'Lidhja e Kolonës',
    detail3_t:'Elevata e Kurorës',

    foot_copy:'© 2025 Altin Ademi Arkitekturë. Të gjitha të drejtat e rezervuara.',
    foot_back:'← Kthehu te Portofoli',
  },

  mk: {
    hero_label:       'Архитектонски Проект · 2024',
    hero_name_a:      'АЛТИН',
    hero_name_b:      'АДЕМИ',
    hero_title:       'ПРОЕКТ НА АРХИТЕКТОНСКА КУЛА',
    hero_sub:         'Архитектонско истражување на вертикалната форма и урбаниот идентитет.',
    hero_cta:         'Истражи Проект',
    scroll_label:     'скролај',

    back_label:       'Портфолио',
    nav_proj_title:   'Архитектонска Кула',
    nav_intro:'Вовед', nav_render:'Рендер', nav_concept:'Концепт',
    nav_plans:'Планови', nav_sections:'Пресеци', nav_renders:'Галерија', nav_details:'Детали',

    s1_title:'Вовед',
    stat_type_l:'Тип',             stat_type_v:'Мешана Намена',
    stat_year_l:'Година',
    stat_loc_l:'Локација',         stat_loc_v:'Скопје, МК',
    stat_floors_l:'Катови',
    stat_height_l:'Висина',
    stat_status_l:'Статус',        stat_status_v:'Концептуален Дизајн',

    intro_quote:'Кулата не е само зграда — таа е декларација на урбана намера, вертикална преуредување на градот.',
    intro_text:'Оваа мешана зграда ги истражува вертикалниот урбанизам преку структурален израз и материјална чесност.',
    intro_text2:'Структуралниот систем — армиранобетонска јадра со периметарска челична рамка — е направен видлив преку обработката на фасадата.',

    s2_title:'Главен Рендер',
    render_caption_l:'Воздушна перспектива — Ноќна елевација, поглед ЈИ',

    s3_title:'Концепт',
    concept_h1:'Вертикален Идентитет', concept_h2:'Стратегија на Програмот', concept_h3:'Материјална Логика',
    concept_p1:'Кулата го изведува својот формален идентитет од структуралната логика на периметарската рамка.',
    concept_p2:'Долните катови сместуваат трговска и јавна програма на урбано ниво.',
    concept_p3:'Висококвалитетни трислојни застаклени единици со интегрирана соларна контрола.',
    concept_d1:'Дијаграм на Програмот', concept_d2:'Анализа на Ветер', concept_d3:'Соларна Студија',

    s4_title:'Планови',
    plans_intro:'Типични планови на катови кои ги прикажуваат структуралната мрежа и организацијата на јадрата.',
    plan1_level:'Приземје',
    plan2_level:'Типичен Кат Канцеларии — К12',
    plan3_level:'Станбен Кат — К32',
    plan4_level:'Покрив / Круна — К42',

    s5_title:'Пресеци',

    s6_title:'Рендери',
    rg1_cap:'Перспектива на ниво на улица — Ноќен поглед',
    rg2_cap:'Близок пристап — Детал на базата',
    rg3_cap:'Поглед од земја нагоре — Вертикално скратување',
    rg4_cap:'Панорама на урбаниот контекст',

    s7_title:'Детали',
    detail1_t:'Единица на Фасада — Детал во план',
    detail2_t:'Врска на Столб',
    detail3_t:'Елевација на Круна',

    foot_copy:'© 2025 Алтин Адеми Архитектура. Сите права задржани.',
    foot_back:'← Назад кон Портфолио',
  },
};

/* ════════════════════════════════════════════════════════════════
   STATE
   ════════════════════════════════════════════════════════════════ */
let lang  = 'en';
let mX    = 0;
let mY    = 0;

/* ════════════════════════════════════════════════════════════════
   CURSOR
   ════════════════════════════════════════════════════════════════ */
const curEl = document.getElementById('cur');
if (curEl) {
  document.addEventListener('mousemove', e => {
    mX = e.clientX; mY = e.clientY;
    curEl.style.left = mX + 'px';
    curEl.style.top  = mY + 'px';
  });
}

/* ════════════════════════════════════════════════════════════════
   LANGUAGE
   ════════════════════════════════════════════════════════════════ */
function applyLang(l) {
  lang = l;
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('.hl-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = l;
  try { sessionStorage.setItem('tower_lang', l); } catch(_) {}
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ════════════════════════════════════════════════════════════════
   SMOOTH SCROLL for anchor links
   ════════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id  = a.getAttribute('href').slice(1);
    const el  = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const navH = document.getElementById('pnav')?.offsetHeight || 0;
    const top  = el.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ════════════════════════════════════════════════════════════════
   STICKY NAV — show after hero
   ════════════════════════════════════════════════════════════════ */
const pnav   = document.getElementById('pnav');
const heroEl = document.querySelector('.hero');

function updateNav() {
  if (!pnav || !heroEl) return;
  const heroBottom = heroEl.getBoundingClientRect().bottom;
  pnav.classList.toggle('visible', heroBottom <= 0);
}

window.addEventListener('scroll', updateNav, { passive: true });

/* ════════════════════════════════════════════════════════════════
   ACTIVE NAV LINK on scroll
   ════════════════════════════════════════════════════════════════ */
const sections  = ['intro','render','concept','plans','sections','renders','details'];
const pnlLinks  = document.querySelectorAll('.pnl');

function updateActiveLink() {
  const navH = pnav ? pnav.offsetHeight : 60;
  let active  = '';
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const top = sec.getBoundingClientRect().top;
    if (top - navH - 60 <= 0) active = id;
  });
  pnlLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + active);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

/* ════════════════════════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ════════════════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revObs.unobserve(en.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ════════════════════════════════════════════════════════════════
   HERO PARALLAX — SVG background drifts with mouse
   ════════════════════════════════════════════════════════════════ */
const towerSvg  = document.querySelector('.tower-svg');
const fshapeEls = document.querySelectorAll('.fs');

document.addEventListener('mousemove', e => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  if (towerSvg) {
    towerSvg.style.transform =
      `scale(1.04) translate(${dx * 14}px, ${dy * 8}px)`;
  }
  fshapeEls.forEach((el, i) => {
    const d = (i + 1) * 5;
    el.style.transform = `translate(${dx * d * .16}px, ${dy * d * .12}px)`;
  });
});

/* ════════════════════════════════════════════════════════════════
   HERO SCROLL FADE — hero fades as user scrolls
   ════════════════════════════════════════════════════════════════ */
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroH    = heroEl ? heroEl.offsetHeight : window.innerHeight;
  const progress = Math.min(scrolled / (heroH * 0.55), 1);

  if (heroContent) {
    heroContent.style.opacity    = String(1 - progress * 1.4);
    heroContent.style.transform  = `translateY(${progress * 40}px)`;
  }
}, { passive: true });

/* ════════════════════════════════════════════════════════════════
   SECTION PARALLAX — sections gently drift on scroll
   ════════════════════════════════════════════════════════════════ */
function parallaxSections() {
  const scrollY = window.scrollY;

  document.querySelectorAll('.render-img, .rg-img, .plan-img, .sec-img').forEach(el => {
    const rect   = el.getBoundingClientRect();
    const centre = rect.top + rect.height / 2;
    const vH     = window.innerHeight;
    const offset = ((centre / vH) - 0.5) * 18;
    el.style.transform = `translateY(${offset}px)`;
  });
}

window.addEventListener('scroll', parallaxSections, { passive: true });

/* ════════════════════════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════════════════════════ */
const lightbox    = document.getElementById('lightbox');
const lbBackdrop  = document.getElementById('lb-backdrop');
const lbClose     = document.getElementById('lb-close');
const lbContent   = document.getElementById('lb-content');
const lbCaption   = document.getElementById('lb-caption');

function openLightbox(el) {
  /* Clone the SVG/img inside the trigger */
  const imgEl = el.querySelector('svg, img');
  if (!imgEl) return;

  const clone = imgEl.cloneNode(true);
  clone.removeAttribute('class');
  clone.style.width      = '100%';
  clone.style.height     = 'auto';
  clone.style.maxHeight  = '85vh';
  clone.style.display    = 'block';

  lbContent.innerHTML = '';
  lbContent.appendChild(clone);

  /* Caption */
  const capEl = el.querySelector('.rg-caption, .render-caption .rc-label, .cd-label, .dc-title, .plan-info .pi-level');
  lbCaption.textContent = capEl ? capEl.textContent.trim() : '';

  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lb-open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
  setTimeout(() => { lbContent.innerHTML = ''; lbCaption.textContent = ''; }, 400);
}

/* Wire lightbox triggers */
document.querySelectorAll('[data-lightbox="true"]').forEach(el => {
  el.addEventListener('click', () => openLightbox(el));
});

if (lbClose)   lbClose.addEventListener('click', closeLightbox);
if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ════════════════════════════════════════════════════════════════
   HERO BUTTON → smooth scroll to #intro
   ════════════════════════════════════════════════════════════════ */
const heroCta = document.getElementById('hero-btn');
if (heroCta) {
  heroCta.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById('intro');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */
(function init() {
  /* Restore language */
  try {
    const saved = sessionStorage.getItem('tower_lang');
    applyLang(saved && T[saved] ? saved : 'en');
  } catch(_) {
    applyLang('en');
  }

  updateNav();
  updateActiveLink();
})();
