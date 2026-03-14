/* ================================================================
   ALTIN ADEMI ARCHITECTURE PORTFOLIO — script.js
   View Router · Cursor · Grain · i18n · Reveals · Skills · Modal
   ================================================================ */
'use strict';

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const T = {
  en: {
    land_eyebrow:'Architectural Designer', land_disc:'Architecture',
    land_cta:'Explore My Portfolio', land_loc:'Skopje, North Macedonia',
    nav_arch:'Architecture', nav_free:'Freelance', nav_creat:'Creative',
    nav_skills:'Skills', nav_cv:'CV', nav_contact:'Contact',
    hub_kicker:'Selected Disciplines', hub_sub:'Architecture · Freelance · Creative',
    hc_arch:'Featured Projects', hc_free:'Client Commissions',
    hc_creat:'Craft & Experiments', hc_skills:'Software & Expertise',
    hc_cv:'Background & Education', hc_contact:'Start a Conversation',
    arch_kicker:'— Selected Projects',
    arch_desc:'Built and conceptual architectural projects exploring form, materiality, and programme.',
    p_cat_concept:'Concept Design', p_cat_sustain:'Sustainable Design', p_cat_res:'Residential',
    arch_p1_name:'Architectural Tower',
    arch_p1_desc:'Mixed-use high-rise exploring vertical urbanism and structural expression. 42 floors of residential, office, and retail.',
    arch_p2_name:'Administrative Building',
    arch_p2_desc:'Administrative complex with living green roof, biophilic principles, and near-zero energy facade systems.',
    arch_p3_name:'Full House Design',
    arch_p3_desc:'Complete interior and exterior residential design — site survey through bespoke detail to final photorealistic render.',
    open_project:'Open Project →',
    free_kicker:'— Client Commissions',
    free_desc:'Residential and commercial projects for private clients across North Macedonia.',
    f1_name:'Modern Family Home', f1_desc:'Open-plan residence with floor-to-ceiling glazing and integrated landscape design.',
    f2_name:'Minimalist Villa',   f2_desc:'Flat-roofed villa with dark cladding, cantilevered volumes, and a courtyard pool.',
    f3_name:'Hillside Residence', f3_desc:'Terraced hillside home following natural topography with panoramic lake views.',
    f4_name:'Urban Compact House',f4_desc:'Space-efficient urban infill with smart layouts and a rooftop terrace garden.',
    creat_kicker:'— Experiments',
    creat_desc:'Handcraft, drawing, and material exploration beyond the digital screen.',
    c_cat1:'Origami & Paper', c_cat2:'Cardboard Models', c_cat3:'Wood Projects', c_cat4:'Portraits & Sketches',
    c1_1:'Structure #1', c1_2:'Paper Model', c1_3:'Folded Form',
    c2_1:'Urban Block', c2_2:'Fragment',
    c3_1:'Joinery Study', c3_2:'Sculptural Form',
    c4_1:'Portrait I', c4_2:'Portrait II', c5_1:'Car Sketch',
    skills_kicker:'— Expertise',
    skills_desc:'A full-pipeline design toolkit spanning architecture, visualization, and creative craft.',
    sk_h_software:'Software Proficiency', sk_h_arch:'Architecture', sk_h_creat:'Creative',
    ska1:'Architectural Design', ska2:'Interior Design', ska3:'Exterior Design',
    ska4:'3D Visualization', ska5:'Concept Development', ska6:'Space Planning',
    ska7:'Technical Drawing', ska8:'Site Analysis',
    skc1:'Hand Drawing', skc2:'Portrait Drawing', skc3:'Logo Design',
    skc4:'Website Design', skc5:'Model Making', skc6:'Wood Craft',
    skc7:'Paper Craft', skc8:'Car Sketching',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Architectural Designer', cv_loc:'Location', cv_lang_h:'Languages',
    cv_native:'Native', cv_fluent:'Fluent', cv_advanced:'Advanced',
    cv_download:'Download CV',
    cv_about:'About',
    cv_about_text:'A passionate architectural designer with a strong foundation in design, visualization, and creative experimentation. Combining technical precision with artistic sensibility to deliver compelling architectural narratives across residential, commercial, and conceptual work.',
    cv_edu:'Education', cv_exp:'Experience', cv_awards:'Awards',
    edu1_deg:'Bachelor of Architecture', edu1_school:'Faculty of Architecture — Ss. Cyril & Methodius, Skopje',
    edu2_deg:'High School — Sciences & Mathematics', edu2_school:'Gymnasium, Skopje',
    exp1_t:'Freelance Architectural Designer',
    exp1_d:'Independent residential and conceptual projects for private clients across North Macedonia.',
    exp2_t:'Design Intern',
    exp2_d:'Drafting, visualization, and model-making on multiple commercial projects.',
    aw1:'Faculty Design Excellence Award — Architecture Thesis',
    aw2:'Best Conceptual Project — Annual Student Exhibition',
    contact_kicker:'— Say Hello',
    contact_desc:'Open for architecture, collaboration, and creative projects.',
    ct_big:"Let's build something remarkable together.",
    ct_email_l:'Email', ct_loc_l:'Location', ct_avail_l:'Status',
    ct_avail:'Available for projects',
    cf_name:'Name', cf_email:'Email', cf_subj:'Subject', cf_msg:'Message',
    cf_send:'Send Message', cf_ok:"Message sent! I'll be in touch soon.",
  },

  sq: {
    land_eyebrow:'Dizajner Arkitektonik', land_disc:'Arkitekturë',
    land_cta:'Eksploroni Portfolion', land_loc:'Shkup, Maqedonia e Veriut',
    nav_arch:'Arkitekturë', nav_free:'Freelance', nav_creat:'Kreative',
    nav_skills:'Aftësi', nav_cv:'CV', nav_contact:'Kontakt',
    hub_kicker:'Disiplinat e Zgjedhura', hub_sub:'Arkitekturë · Freelance · Kreative',
    hc_arch:'Projektet Kryesore', hc_free:'Punë me Klientë',
    hc_creat:'Zejet & Eksperimente', hc_skills:'Software & Ekspertizë',
    hc_cv:'Prejardhja & Arsimi', hc_contact:'Filloni Bisedën',
    arch_kicker:'— Projektet e Zgjedhura',
    arch_desc:'Projekte arkitektonike të ndërtuar dhe konceptuale duke eksploruar formën, materialitetin dhe programin.',
    p_cat_concept:'Dizajn Konceptual', p_cat_sustain:'Dizajn i Qëndrueshëm', p_cat_res:'Rezidencial',
    arch_p1_name:'Kullë Arkitekturore',
    arch_p1_desc:'Kullë me përdorim të përzier duke eksploruar urbanizmin vertikal dhe shprehjen strukturore. 42 kate.',
    arch_p2_name:'Ndërtesë Administrative',
    arch_p2_desc:'Kompleks administrativ me çati të gjallë të gjelbër, principe biophilic dhe fasada me konsum minimal energjie.',
    arch_p3_name:'Dizajn i Plotë Shtëpie',
    arch_p3_desc:'Dizajn i plotë rezidencial — nga studimi i vendit deri te renderimi 3D.',
    open_project:'Hap Projektin →',
    free_kicker:'— Punë me Klientë',
    free_desc:'Projekte rezidenciale dhe komerciale për klientë privatë në Maqedoninë e Veriut.',
    f1_name:'Shtëpi Moderne Familjare', f1_desc:'Banesë me plan të hapur, xhama nga dyshemeja dhe dizajn të integruar peizazhit.',
    f2_name:'Vilë Minimaliste', f2_desc:'Vilë me çati të sheshtë, veshje të errët dhe oborr pishinë.',
    f3_name:'Rezidencë në Kodër', f3_desc:'Shtëpi e tarracuar me pamje panoramike mbi liqen.',
    f4_name:'Shtëpi Kompakte Urbane', f4_desc:'Shtëpi efiçiente me parterranë inteligjente dhe terracë çati.',
    creat_kicker:'— Eksperimente',
    creat_desc:'Zejet, vizatimi dhe eksplorimi i materialeve jashtë ekranit dixhital.',
    c_cat1:'Origami & Letër', c_cat2:'Modele Kartoni', c_cat3:'Projekte Druri', c_cat4:'Portrete & Skica',
    c1_1:'Strukturë #1', c1_2:'Model Letre', c1_3:'Formë e Palosur',
    c2_1:'Bllok Urban', c2_2:'Fragment',
    c3_1:'Studim Lidhjesh', c3_2:'Formë Skulpturore',
    c4_1:'Portret I', c4_2:'Portret II', c5_1:'Skicë Makine',
    skills_kicker:'— Ekspertizë',
    skills_desc:'Komplet i plotë mjetesh dizajni arkitektonik dhe kreativ.',
    sk_h_software:'Niveli i Softuerit', sk_h_arch:'Arkitekturë', sk_h_creat:'Kreative',
    ska1:'Dizajn Arkitektonik', ska2:'Dizajn Interieri', ska3:'Dizajn Eksterieri',
    ska4:'Vizualizim 3D', ska5:'Zhvillim Koncepti', ska6:'Planifikim Hapësinor',
    ska7:'Vizatim Teknik', ska8:'Analizë Vendndodhjeje',
    skc1:'Vizatim me Dorë', skc2:'Vizatim Portretesh', skc3:'Dizajn Logo',
    skc4:'Dizajn Web', skc5:'Krijim Modelesh', skc6:'Zejet e Drurit',
    skc7:'Zejet e Letrës', skc8:'Skicim Makinash',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Dizajner Arkitektonik', cv_loc:'Vendndodhja', cv_lang_h:'Gjuhët',
    cv_native:'Amtare', cv_fluent:'Rrjedhshëm', cv_advanced:'E Avancuar',
    cv_download:'Shkarko CV',
    cv_about:'Rreth Meje',
    cv_about_text:'Dizajner i ri arkitektonik i pasionuar me bazë të fortë në dizajn, vizualizim dhe eksperimentim kreativ.',
    cv_edu:'Arsimi', cv_exp:'Eksperienca', cv_awards:'Çmime',
    edu1_deg:'Bachelor i Arkitekturës', edu1_school:'Fakulteti i Arkitekturës — Universiteti "Ss. Cyril & Metodius", Shkup',
    edu2_deg:'Shkolla e Mesme — Shkencat & Matematika', edu2_school:'Gjimnaz, Shkup',
    exp1_t:'Dizajner Arkitektonik Freelance',
    exp1_d:'Projekte të pavarura rezidenciale dhe konceptuale për klientë privatë.',
    exp2_t:'Praktikant Dizajni',
    exp2_d:'Mbështetje me hartim, vizualizim dhe modelim.',
    aw1:'Çmimi i Ekselencës në Dizajn — Teza e Arkitekturës',
    aw2:'Projekti më i Mirë Konceptual — Ekspozita Vjetore',
    contact_kicker:'— Thuaj Përshëndetje',
    contact_desc:'Hapur për arkitekturë, bashkëpunim dhe projekte kreative.',
    ct_big:'Le të ndërtojmë diçka të jashtëzakonshme bashkë.',
    ct_email_l:'Email', ct_loc_l:'Vendndodhja', ct_avail_l:'Statusi',
    ct_avail:'I disponueshëm për projekte',
    cf_name:'Emri', cf_email:'Email', cf_subj:'Subjekti', cf_msg:'Mesazhi',
    cf_send:'Dërgo Mesazhin', cf_ok:"Mesazhi u dërgua! Do t'ju kthehem.",
  },

  mk: {
    land_eyebrow:'Архитектонски Дизајнер', land_disc:'Архитектура',
    land_cta:'Истражи го Портфолиото', land_loc:'Скопје, Северна Македонија',
    nav_arch:'Архитектура', nav_free:'Фриленс', nav_creat:'Креативно',
    nav_skills:'Вештини', nav_cv:'CV', nav_contact:'Контакт',
    hub_kicker:'Избрани Дисциплини', hub_sub:'Архитектура · Фриленс · Креативно',
    hc_arch:'Истакнати Проекти', hc_free:'Работа со Клиенти',
    hc_creat:'Занает & Експерименти', hc_skills:'Софтвер & Експертиза',
    hc_cv:'Позадина & Образование', hc_contact:'Започни Разговор',
    arch_kicker:'— Избрани Проекти',
    arch_desc:'Изградени и концептуални архитектонски проекти кои ги истражуваат формата, материјалноста и програмата.',
    p_cat_concept:'Концептуален Дизајн', p_cat_sustain:'Одржлив Дизајн', p_cat_res:'Резиденцијален',
    arch_p1_name:'Архитектонска Кула',
    arch_p1_desc:'Кула со мешана намена која ги истражува вертикалниот урбанизам и структурниот израз. 42 ката.',
    arch_p2_name:'Административна Зграда',
    arch_p2_desc:'Административен комплекс со жив зелен покрив и биофилски принципи.',
    arch_p3_name:'Целосен Дизајн на Куќа',
    arch_p3_desc:'Комплетен резиденцијален дизајн — од геодетска анализа до финален 3D рендер.',
    open_project:'Отвори Проект →',
    free_kicker:'— Работа со Клиенти',
    free_desc:'Резиденцијални и комерцијални проекти за приватни клиенти.',
    f1_name:'Модерна Семејна Куќа', f1_desc:'Отворен план со застаклување и интегрирано уредување.',
    f2_name:'Минималистичка Вила', f2_desc:'Рамен покрив, темна облога и базенски двор.',
    f3_name:'Резиденција на Рид', f3_desc:'Терасирана куќа со панорамски поглед врз езерото.',
    f4_name:'Компактна Градска Куќа', f4_desc:'Просторно ефикасна со паметни распореди и тераса.',
    creat_kicker:'— Експерименти',
    creat_desc:'Рачна изработка, цртање и истражување на материјали надвор од дигиталниот екран.',
    c_cat1:'Оригами & Хартија', c_cat2:'Картонски Модели', c_cat3:'Дрвени Проекти', c_cat4:'Портрети & Скици',
    c1_1:'Структура #1', c1_2:'Хартиен Модел', c1_3:'Превиткана Форма',
    c2_1:'Урбан Блок', c2_2:'Фрагмент',
    c3_1:'Студија на Врски', c3_2:'Скулптурна Форма',
    c4_1:'Портрет I', c4_2:'Портрет II', c5_1:'Скица на Автомобил',
    skills_kicker:'— Експертиза',
    skills_desc:'Целосен дизајн тулкит низ архитектура, визуализација и креативен занает.',
    sk_h_software:'Ниво на Софтвер', sk_h_arch:'Архитектура', sk_h_creat:'Креативно',
    ska1:'Архитектонски Дизајн', ska2:'Ентериер Дизајн', ska3:'Екстериер Дизајн',
    ska4:'3D Визуализација', ska5:'Развој на Концепт', ska6:'Просторно Планирање',
    ska7:'Техничко Цртање', ska8:'Анализа на Локација',
    skc1:'Рачно Цртање', skc2:'Портретно Цртање', skc3:'Дизајн на Лого',
    skc4:'Веб Дизајн', skc5:'Изработка на Модели', skc6:'Дрворезба',
    skc7:'Хартиена Уметност', skc8:'Скицирање Автомобили',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Архитектонски Дизајнер', cv_loc:'Локација', cv_lang_h:'Јазици',
    cv_native:'Мајчин', cv_fluent:'Течно', cv_advanced:'Напредно',
    cv_download:'Преземи CV',
    cv_about:'За мене',
    cv_about_text:'Страстен архитектонски дизајнер со цврста основа во дизајн, визуализација и креативно истражување.',
    cv_edu:'Образование', cv_exp:'Искуство', cv_awards:'Награди',
    edu1_deg:'Дипломиран Архитект', edu1_school:'Архитектонски Факултет — Универзитет „Свети Кирил и Методиј", Скопје',
    edu2_deg:'Средно Училиште — Природни Науки & Математика', edu2_school:'Гимназија, Скопје',
    exp1_t:'Фриленс Архитектонски Дизајнер',
    exp1_d:'Самостојни резиденцијални и концептуални проекти за приватни клиенти.',
    exp2_t:'Дизајн Практикант',
    exp2_d:'Поддршка со цртање, визуализација и изработка на модели.',
    aw1:'Награда за Извонредност во Дизајн — Архитектонска Теза',
    aw2:'Најдобар Концептуален Проект — Годишна Студентска Изложба',
    contact_kicker:'— Кажи Здраво',
    contact_desc:'Отворен за архитектура, соработка и креативни проекти.',
    ct_big:'Ајде да изградиме нешто извонредно заедно.',
    ct_email_l:'Е-пошта', ct_loc_l:'Локација', ct_avail_l:'Статус',
    ct_avail:'Достапен за проекти',
    cf_name:'Име', cf_email:'Е-пошта', cf_subj:'Предмет', cf_msg:'Порака',
    cf_send:'Испрати Порака', cf_ok:'Пораката е испратена!',
  }
};

/* ================================================================
   PROJECT DATA
   ================================================================ */
const PROJECTS = {
  tower:{
    name:'Architectural Tower', year:'2024',
    cat:'Mixed-Use High-Rise · Concept',
    desc:'A mixed-use high-rise concept exploring vertical urbanism and structural expression. The tapering glass-and-steel facade responds to loading conditions while creating a distinctive urban silhouette. Stacking residential, office, and retail across 42 floors, the project questions the relationship between tower typology and public ground.',
    bg:'linear-gradient(160deg,#060611,#0d0d1e)',
    drawings:['Site Plan','Ground Floor','Typical Floor','Section A–A','West Elevation','3D View']
  },
  admin:{
    name:'Administrative Building', year:'2023',
    cat:'Green Roof · Sustainable Design',
    desc:'Administrative complex with living green roof system, biophilic principles, and energy-efficient triple-glazed facades achieving near-zero energy performance. A central atrium floods the floor plates with natural daylight, reducing reliance on mechanical systems.',
    bg:'linear-gradient(160deg,#040d04,#0a1a0a)',
    drawings:['Ground Floor','Roof Plan','Section B–B','Facade Detail','Green Roof','3D View']
  },
  house:{
    name:'Full House Design', year:'2023',
    cat:'Interior & Exterior · Residential',
    desc:'A complete design engagement from site survey to final photorealistic render. The split-level section engages a sloping site; warm timber interiors contrast against a raw concrete shell. Every detail — bespoke joinery, landscape grading, lighting strategy — was resolved through this project.',
    bg:'linear-gradient(160deg,#0c0806,#1a1408)',
    drawings:['Site Plan','Ground Floor','First Floor','Interior Render','Exterior Render','Section C–C']
  }
};

/* ================================================================
   STATE
   ================================================================ */
let lang    = 'en';
let view    = 'landing';
let mouseX  = 0, mouseY  = 0;
let followX = 0, followY = 0;

/* ================================================================
   GRAIN CANVAS
   ================================================================ */
(function initGrain(){
  const c  = document.getElementById('grain');
  const g  = c.getContext('2d');
  let frame = 0;
  function resize(){ c.width = window.innerWidth; c.height = window.innerHeight; }
  function drawGrain(){
    const w = c.width, h = c.height;
    const img = g.createImageData(w, h);
    const d = img.data;
    for(let i=0;i<d.length;i+=4){
      const v = Math.random()*255|0;
      d[i]=d[i+1]=d[i+2]=v; d[i+3]=255;
    }
    g.putImageData(img,0,0);
    if(++frame % 3 === 0) requestAnimationFrame(drawGrain);
    else setTimeout(()=>requestAnimationFrame(drawGrain),50);
  }
  resize();
  window.addEventListener('resize',resize);
  drawGrain();
})();

/* ================================================================
   CUSTOM CURSOR
   ================================================================ */
const cDot  = document.getElementById('c-dot');
const cRing = document.getElementById('c-ring');

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cDot.style.left = mouseX+'px'; cDot.style.top = mouseY+'px';
});
(function animRing(){
  followX += (mouseX - followX) * 0.1;
  followY += (mouseY - followY) * 0.1;
  cRing.style.left = followX+'px'; cRing.style.top = followY+'px';
  requestAnimationFrame(animRing);
})();
/* Ring scale on hover */
document.addEventListener('mouseover', e => {
  if(e.target.matches('button,a,.card,.fcard,.ar,.cgi-w')){
    cRing.style.width  = '56px';
    cRing.style.height = '56px';
    cRing.style.borderColor = 'rgba(232,228,220,.55)';
  }else{
    cRing.style.width  = '36px';
    cRing.style.height = '36px';
    cRing.style.borderColor = 'rgba(232,228,220,.35)';
  }
});

/* ================================================================
   VIEW ROUTER
   ================================================================ */
function goTo(target, skipScroll){
  if(target === view && target !== 'hub') return;
  view = target;

  /* Hide all */
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  /* Show target */
  const el = document.getElementById('view-'+target);
  if(el){
    el.classList.add('active');
    if(!skipScroll) window.scrollTo({top:0,behavior:'smooth'});
  }

  /* Update nav active state */
  document.querySelectorAll('.hn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === target);
  });

  closeMobMenu();
  closeModal();

  /* Trigger reveals */
  setTimeout(observeReveals, 80);

  /* Skill bars if skills page */
  if(target === 'skills') setTimeout(animSkillBars, 500);
}

/* Wire every [data-view] element */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-view]');
  if(btn){ e.preventDefault(); goTo(btn.dataset.view); }

  const obtn = e.target.closest('[data-project]');
  if(obtn) openModal(obtn.dataset.project);
});

/* Landing CTA */
const landCta = document.getElementById('land-cta');
if(landCta) landCta.addEventListener('click', () => goTo('hub'));

/* ================================================================
   LANGUAGE
   ================================================================ */
function setLang(l){
  lang = l;
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if(t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('.lr-btn,.ll').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = l;
}
document.querySelectorAll('[data-lang]').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

/* ================================================================
   BURGER / MOBILE MENU
   ================================================================ */
const brgBtn  = document.getElementById('brg');
const mobMenu = document.getElementById('mob-menu');

function closeMobMenu(){
  if(!brgBtn || !mobMenu) return;
  brgBtn.classList.remove('open');
  mobMenu.classList.remove('open');
  brgBtn.setAttribute('aria-expanded','false');
}
if(brgBtn){
  brgBtn.addEventListener('click', () => {
    const open = mobMenu.classList.toggle('open');
    brgBtn.classList.toggle('open');
    brgBtn.setAttribute('aria-expanded', open);
  });
}

/* ================================================================
   STICKY HUB HEADER
   ================================================================ */
const hubHdr = document.getElementById('hub-hdr');
window.addEventListener('scroll', () => {
  if(!hubHdr) return;
  hubHdr.classList.toggle('scrolled', window.scrollY > 40);
},{passive:true});

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){
      en.target.classList.add('in');
      revObs.unobserve(en.target);
    }
  });
},{threshold:0.1, rootMargin:'0px 0px -40px 0px'});

function observeReveals(){
  document.querySelectorAll('.view.active .reveal:not(.in)').forEach(el => revObs.observe(el));
}
window.addEventListener('scroll', observeReveals, {passive:true});

/* ================================================================
   SKILL BAR ANIMATION
   ================================================================ */
function animSkillBars(){
  document.querySelectorAll('.sb-bar').forEach(bar => {
    const w = parseInt(bar.dataset.w) / 100;
    bar.style.transform = `scaleX(${w})`;
    bar.classList.add('on');
  });
}
const skillsObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){ animSkillBars(); skillsObs.disconnect(); }
  });
},{threshold:0.2});
const sbWrap = document.getElementById('skill-bars');
if(sbWrap) skillsObs.observe(sbWrap);

/* ================================================================
   PROJECT MODAL
   ================================================================ */
const modal    = document.getElementById('proj-modal');
const modalClose = document.getElementById('pmo-close');
const modalBody  = document.getElementById('pmo-body');

function openModal(id){
  const p = PROJECTS[id];
  if(!p || !modal) return;
  const bgClass = id==='tower' ? 'ar-img-t' : id==='admin' ? 'ar-img-a' : 'ar-img-h';
  modalBody.innerHTML = `
    <div class="pmo-hero ${bgClass}">
      <div class="ar-art">
        ${id==='tower'
          ? `<div class="aa-tower"></div><div class="aa-hl aa-hl1"></div><div class="aa-hl aa-hl2"></div>`
          : id==='admin'
          ? `<div class="aa-block"></div><div class="aa-roof"></div>`
          : `<div class="aa-house"></div>`}
      </div>
    </div>
    <div class="ar-meta" style="margin-bottom:14px">
      <span class="ar-yr">${p.year}</span><span class="ar-dash">—</span>
      <span class="ar-cat">${p.cat}</span>
    </div>
    <h2 class="pmo-title">${p.name}</h2>
    <p class="pmo-desc">${p.desc}</p>
    <div class="pmo-sec-label">— Drawings &amp; Visualizations</div>
    <div class="pmo-grid">
      ${p.drawings.map(d=>`<div class="pmo-cell"><span>${d}</span></div>`).join('')}
    </div>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}

function closeModal(){
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

if(modalClose) modalClose.addEventListener('click', closeModal);
if(modal) modal.addEventListener('click', e => { if(e.target===modal) closeModal(); });

/* ================================================================
   CONTACT FORM
   ================================================================ */
const ctForm = document.getElementById('ct-form');
const ctOk   = document.getElementById('cf-ok');

if(ctForm){
  ctForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = ctForm.querySelector('.cf-btn');
    btn.style.opacity = '.5';
    btn.disabled = true;
    setTimeout(() => {
      ctForm.reset();
      btn.style.opacity = '1';
      btn.disabled = false;
      ctOk.classList.remove('hidden');
      setTimeout(() => ctOk.classList.add('hidden'), 5000);
    }, 1500);
  });
}

/* ================================================================
   LANDING PARALLAX — SVG drifts with mouse
   ================================================================ */
document.addEventListener('mousemove', e => {
  const px = (e.clientX / window.innerWidth  - .5) * 14;
  const py = (e.clientY / window.innerHeight - .5) * 8;
  const svg = document.querySelector('.land-svg');
  if(svg) svg.style.transform = `scale(1.04) translate(${px}px,${py}px)`;

  /* Floating shapes */
  document.querySelectorAll('.ls').forEach((s,i) => {
    const d = (i+1) * 6;
    s.style.transform = `translate(${px*d*.1}px,${py*d*.1}px)`;
  });
});

/* ================================================================
   ESC KEY
   ================================================================ */
document.addEventListener('keydown', e => {
  if(e.key==='Escape'){ closeModal(); closeMobMenu(); }
});

/* ================================================================
   INIT
   ================================================================ */
(function init(){
  setLang('en');
  /* Initial reveal on landing */
  setTimeout(observeReveals, 300);
})();
