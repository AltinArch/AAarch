/* ================================================================
   TINIARCH STUDIO — script.js v2
   Loader · Cursor · Navigation · i18n · Scroll · Skills · Modal
   ================================================================ */
'use strict';

/* ================================================================
   TRANSLATIONS (EN / SQ / MK)
   ================================================================ */
const T = {
  en: {
    /* Nav */
    nav_home:'Home', nav_projects:'Projects', nav_freelance:'Freelance',
    nav_creative:'Creative', nav_skills:'Skills', nav_cv:'CV', nav_contact:'Contact',
    /* Hero */
    hero_tag:'Architecture Studio · Est. 2022',
    hero_sub:'Architecture · Design · Creative Structures',
    hero_desc:'Exploring form, function & material through rigorous design experimentation.',
    hero_cta1:'View Projects', hero_cta2:'Get In Touch',
    scroll_hint:'Scroll to explore',
    /* Home cards */
    cards_kicker:'— Selected Disciplines', cards_heading:'Explore the Work',
    card_proj_title:'Architecture',  card_proj_sub:'Featured Projects',
    card_free_title:'Freelance',     card_free_sub:'Client Commissions',
    card_creat_title:'Creative',     card_creat_sub:'Experiments & Craft',
    card_skills_title:'Skills',      card_skills_sub:'Software & Expertise',
    card_cv_title:'CV',              card_cv_sub:'Background & Education',
    card_contact_title:'Contact',    card_contact_sub:'Start a Conversation',
    /* Featured */
    feat_kicker:'— Selected Work', feat_heading:'Latest Projects', feat_all:'All Projects →',
    p1_name:'Architectural Tower', p1_type:'Mixed-Use · Concept Design',
    p2_name:'Administrative Building', p2_type:'Green Roof · Sustainable',
    p3_name:'Full House Design', p3_type:'Interior & Exterior',
    /* Stats */
    stat1:'Projects Completed', stat2:'Freelance Clients',
    stat3:'Software Tools',    stat4:'Years of Practice',
    /* Projects */
    proj_kicker:'— Architecture', proj_page_title:'Projects',
    proj_page_desc:'Architectural design spanning concept, structure, and materiality.',
    p1_cat:'Concept Design',
    p1_desc:'A mixed-use high-rise exploring vertical urbanism and structural expression through a tapering glass-and-steel facade across 42 floors of programme.',
    p2_cat:'Sustainable Design',
    p2_desc:'Administrative complex with living green roof, biophilic principles, and energy-efficient triple-glazed facades achieving near-zero energy performance.',
    p3_cat:'Residential',
    p3_desc:'Complete interior and exterior residential project — from site survey and structural drawings through bespoke joinery details to photorealistic 3D renders.',
    view_project:'View Project',
    /* Freelance */
    free_kicker:'— Client Commissions', free_page_title:'Freelance',
    free_page_desc:'Residential and commercial projects delivered for private clients.',
    f_cat_res:'Residential',
    f1_name:'Modern Family Home', f1_desc:'Open floor plan, floor-to-ceiling glazing and integrated landscape design for a contemporary family residence.',
    f2_name:'Minimalist Villa',   f2_desc:'Flat-roofed villa with dark cladding, cantilevered volumes, and a serene courtyard pool at its centre.',
    f3_name:'Hillside Residence', f3_desc:'Terraced hillside home following natural topography with panoramic views over the lake.',
    f4_name:'Urban Compact House',f4_desc:'Space-efficient urban infill with smart layouts, light wells, and a rooftop terrace garden.',
    /* Creative */
    creat_kicker:'— Experiments', creat_page_title:'Creative Work',
    creat_page_desc:'Handcraft, drawing, and material exploration beyond the screen.',
    c_cat1:'Origami & Paper', c_cat2:'Cardboard Models', c_cat3:'Wood Craftsmanship',
    c_cat4:'Portrait Drawings', c_cat5:'Car Sketches',
    c1_1:'Origami Structure #1', c1_2:'Paper Architectural Model', c1_3:'Folded Form Study',
    c2_1:'Urban Block Model',   c2_2:'Architectural Fragment',
    c3_1:'Joinery Study',       c3_2:'Sculptural Wood Form',
    c4_1:'Portrait Study I',    c4_2:'Portrait Study II',
    c5_1:'Concept Car #1',      c5_2:'Concept Car #2', c5_3:'Sketch Study',
    /* Skills */
    skills_kicker:'— Expertise', skills_page_title:'Skills',
    skills_page_desc:'A full-pipeline design toolkit across architecture and creative disciplines.',
    sk_software:'Software', sk_arch:'Architecture', sk_creat:'Creative',
    ska1:'Architectural Design', ska2:'Interior Design',  ska3:'Exterior Design',
    ska4:'3D Visualization',     ska5:'Concept Development', ska6:'Space Planning',
    ska7:'Technical Drawing',    ska8:'Site Analysis', ska9:'Material Specification',
    skc1:'Hand Drawing', skc2:'Portrait Drawing', skc3:'Logo Design',
    skc4:'Website Design', skc5:'Model Making', skc6:'Wood Craft',
    skc7:'Paper Craft',  skc8:'Car Sketching',
    /* CV */
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Architectural Designer',
    cv_loc_label:'Location', cv_lang_label:'Languages',
    cv_native:'Native', cv_fluent:'Fluent', cv_advanced:'Advanced',
    cv_download:'Download CV',
    cv_about_title:'About',
    cv_about_text:'A passionate young architectural designer with a strong foundation in design, visualization, and creative experimentation. Combining technical precision with artistic sensibility to deliver compelling architectural narratives — residential, commercial, and conceptual.',
    cv_edu_title:'Education',
    cv_edu1_deg:'Bachelor of Architecture',
    cv_edu1_school:'Faculty of Architecture — Ss. Cyril & Methodius University, Skopje',
    cv_edu2_deg:'High School — Sciences & Mathematics',
    cv_edu2_school:'Gymnasium, Skopje',
    cv_exp_title:'Experience',
    cv_exp1_title:'Freelance Architectural Designer',
    cv_exp1_desc:'Independent residential and conceptual projects for private clients across North Macedonia.',
    cv_exp2_title:'Design Intern',
    cv_exp2_desc:'Drafting, visualization, and physical model-making support on multiple commercial projects.',
    cv_awards_title:'Awards & Recognition',
    cv_award1:'Faculty Design Excellence Award — Architecture Thesis',
    cv_award2:'Best Conceptual Project — Annual Student Exhibition',
    /* Contact */
    ct_kicker:'— Say Hello', ct_page_title:'Contact',
    ct_page_desc:'Open for architecture, collaboration, and creative projects.',
    ct_big:"Let's create something remarkable together.",
    cd_email:'Email', cd_loc:'Location', cd_avail:'Availability',
    cd_avail_val:'Available for projects',
    cf_name:'Name', cf_email:'Email', cf_subject:'Subject', cf_message:'Message',
    cf_submit:'Send Message',
    cf_success:"Message sent! I'll get back to you soon.",
    /* Footer */
    footer_copy:'© 2025 TINIARCH STUDIO. All rights reserved.',
  },

  sq: {
    nav_home:'Kreu', nav_projects:'Projektet', nav_freelance:'Freelance',
    nav_creative:'Kreative', nav_skills:'Aftësi', nav_cv:'CV', nav_contact:'Kontakt',
    hero_tag:'Studio Arkitekture · Est. 2022',
    hero_sub:'Arkitekturë · Dizajn · Struktura Kreative',
    hero_desc:'Eksplorimi i formës, funksionit dhe materialit nëpërmjet eksperimentimit.',
    hero_cta1:'Shiko Projektet', hero_cta2:'Na Kontaktoni',
    scroll_hint:'Rrëshqit për të eksploruar',
    cards_kicker:'— Disiplinat e Zgjedhura', cards_heading:'Eksploroni Punën',
    card_proj_title:'Arkitekturë',   card_proj_sub:'Projektet Kryesore',
    card_free_title:'Freelance',     card_free_sub:'Punë me Klientë',
    card_creat_title:'Kreative',     card_creat_sub:'Eksperimente & Zejet',
    card_skills_title:'Aftësi',      card_skills_sub:'Software & Ekspertizë',
    card_cv_title:'CV',              card_cv_sub:'Prejardhja & Arsimi',
    card_contact_title:'Kontakt',    card_contact_sub:'Filloni Bisedën',
    feat_kicker:'— Punë e Zgjedhur', feat_heading:'Projektet e Fundit', feat_all:'Të gjitha projektet →',
    p1_name:'Kullë Arkitekturore',    p1_type:'Përdorim i Përzier · Dizajn Konceptual',
    p2_name:'Ndërtesë Administrative',p2_type:'Çati e Gjelbër · Qëndrueshëm',
    p3_name:'Dizajn i Plotë Shtëpie', p3_type:'Interior & Eksterior',
    stat1:'Projekte të Përfunduara', stat2:'Klientë Freelance',
    stat3:'Mjete Software',          stat4:'Vite Praktike',
    proj_kicker:'— Arkitekturë', proj_page_title:'Projektet',
    proj_page_desc:'Dizajn arkitektonik që eksploron formën, strukturën dhe materialitetin.',
    p1_cat:'Dizajn Konceptual',
    p1_desc:'Një koncept kullë me përdorim të përzier që eksploron urbanizmin vertikal dhe shprehjen strukturore nëpërmjet fasadës prej qelqi dhe çeliku.',
    p2_cat:'Dizajn i Qëndrueshëm',
    p2_desc:'Kompleks administrativ me sistem çati të gjallë, principe biophilic dhe fasada efiçiente energjetike.',
    p3_cat:'Rezidencial',
    p3_desc:'Projekt i plotë rezidencial — nga studimi i vendit dhe vizatimet strukturore deri te renderimi 3D.',
    view_project:'Shiko Projektin',
    free_kicker:'— Punë me Klientë', free_page_title:'Freelance',
    free_page_desc:'Projekte rezidenciale të dorëzuara për klientë privatë.',
    f_cat_res:'Rezidencial',
    f1_name:'Shtëpi Moderne Familjare', f1_desc:'Plan i hapur, xhama nga dyshemeja në tavan dhe peizazh i integruar.',
    f2_name:'Vilë Minimaliste',          f2_desc:'Vilë me çati të sheshtë, veshje të errët dhe oborr pishinë të qetë.',
    f3_name:'Rezidencë në Kodër',        f3_desc:'Shtëpi e tarracuar me pamje panoramike mbi liqen.',
    f4_name:'Shtëpi Kompakte Urbane',    f4_desc:'Shtëpi efiçiente me parterranë inteligjente dhe terracë çati.',
    creat_kicker:'— Eksperimente', creat_page_title:'Punë Kreative',
    creat_page_desc:'Zejet, vizatimi dhe eksplorimi i materialeve jashtë ekranit.',
    c_cat1:'Origami & Letër', c_cat2:'Modele Kartoni', c_cat3:'Zejet e Drurit',
    c_cat4:'Vizatime Portretesh', c_cat5:'Skica Makinash',
    c1_1:'Strukturë Origami #1', c1_2:'Model Letre', c1_3:'Studim Forme',
    c2_1:'Model Blloku Urban',   c2_2:'Fragment Arkitektonik',
    c3_1:'Studim Lidhjesh',      c3_2:'Formë Skulpturore',
    c4_1:'Studim Portreti I',    c4_2:'Studim Portreti II',
    c5_1:'Makinë Konceptuale #1',c5_2:'Makinë Konceptuale #2', c5_3:'Studim Skice',
    skills_kicker:'— Ekspertizë', skills_page_title:'Aftësi',
    skills_page_desc:'Komplet i plotë mjetesh dizajni arkitektonik dhe kreativ.',
    sk_software:'Software', sk_arch:'Arkitekturë', sk_creat:'Kreative',
    ska1:'Dizajn Arkitektonik', ska2:'Dizajn Interieri',  ska3:'Dizajn Eksterieri',
    ska4:'Vizualizim 3D',        ska5:'Zhvillim Koncepti', ska6:'Planifikim Hapësinor',
    ska7:'Vizatim Teknik',       ska8:'Analizë Vendndodhjeje', ska9:'Specifikim Materialesh',
    skc1:'Vizatim me Dorë', skc2:'Vizatim Portretesh', skc3:'Dizajn Logo',
    skc4:'Dizajn Web',      skc5:'Krijim Modelesh',     skc6:'Zejet e Drurit',
    skc7:'Zejet e Letrës',  skc8:'Skicim Makinash',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Dizajner Arkitektonik',
    cv_loc_label:'Vendndodhja', cv_lang_label:'Gjuhët',
    cv_native:'Amtare', cv_fluent:'Rrjedhshëm', cv_advanced:'E Avancuar',
    cv_download:'Shkarko CV',
    cv_about_title:'Rreth Meje',
    cv_about_text:'Dizajner i ri arkitektonik i pasionuar me bazë të fortë në dizajn, vizualizim dhe eksperimentim kreativ.',
    cv_edu_title:'Arsimi',
    cv_edu1_deg:'Bachelor i Arkitekturës',
    cv_edu1_school:'Fakulteti i Arkitekturës — Universiteti "Ss. Cyril & Metodius", Shkup',
    cv_edu2_deg:'Shkolla e Mesme — Shkencat & Matematika',
    cv_edu2_school:'Gjimnaz, Shkup',
    cv_exp_title:'Eksperienca',
    cv_exp1_title:'Dizajner Arkitektonik Freelance',
    cv_exp1_desc:'Projekte të pavarura rezidenciale dhe konceptuale për klientë privatë.',
    cv_exp2_title:'Praktikant Dizajni',
    cv_exp2_desc:'Mbështetje me hartim, vizualizim dhe modelim në projekte të shumta.',
    cv_awards_title:'Çmime & Njohje',
    cv_award1:'Çmimi i Ekselencës — Teza e Arkitekturës',
    cv_award2:'Projekti më i Mirë Konceptual — Ekspozita Vjetore',
    ct_kicker:'— Thuaj Përshëndetje', ct_page_title:'Kontakt',
    ct_page_desc:'Hapur për arkitekturë, bashkëpunim dhe projekte kreative.',
    ct_big:'Le të krijojmë diçka të jashtëzakonshme bashkë.',
    cd_email:'Email', cd_loc:'Vendndodhja', cd_avail:'Disponueshmëria',
    cd_avail_val:'I disponueshëm për projekte',
    cf_name:'Emri', cf_email:'Email', cf_subject:'Subjekti', cf_message:'Mesazhi',
    cf_submit:'Dërgo Mesazhin',
    cf_success:"Mesazhi u dërgua! Do t'ju kthehem së shpejti.",
    footer_copy:'© 2025 TINIARCH STUDIO. Të gjitha të drejtat e rezervuara.',
  },

  mk: {
    nav_home:'Дома', nav_projects:'Проекти', nav_freelance:'Фриленс',
    nav_creative:'Креативно', nav_skills:'Вештини', nav_cv:'CV', nav_contact:'Контакт',
    hero_tag:'Архитектонско Студио · Est. 2022',
    hero_sub:'Архитектура · Дизајн · Креативни Структури',
    hero_desc:'Истражување на формата, функцијата и материјалот преку дизајн.',
    hero_cta1:'Погледни Проекти', hero_cta2:'Контактирај',
    scroll_hint:'Скролај за истражување',
    cards_kicker:'— Избрани Дисциплини', cards_heading:'Истражи ги Делата',
    card_proj_title:'Архитектура',   card_proj_sub:'Истакнати Проекти',
    card_free_title:'Фриленс',       card_free_sub:'Работа со Клиенти',
    card_creat_title:'Креативно',    card_creat_sub:'Експерименти & Занает',
    card_skills_title:'Вештини',     card_skills_sub:'Софтвер & Експертиза',
    card_cv_title:'CV',              card_cv_sub:'Позадина & Образование',
    card_contact_title:'Контакт',    card_contact_sub:'Започни Разговор',
    feat_kicker:'— Избрани Дела', feat_heading:'Последни Проекти', feat_all:'Сите проекти →',
    p1_name:'Архитектонска Кула',     p1_type:'Мешана Намена · Концептуален Дизајн',
    p2_name:'Административна Зграда', p2_type:'Зелен Покрив · Одржлив',
    p3_name:'Целосен Дизајн на Куќа', p3_type:'Ентериер & Екстериер',
    stat1:'Завршени Проекти', stat2:'Фриленс Клиенти',
    stat3:'Софтверски Алатки',stat4:'Години Пракса',
    proj_kicker:'— Архитектура', proj_page_title:'Проекти',
    proj_page_desc:'Архитектонски дизајн кој ги истражува формата, структурата и материјалноста.',
    p1_cat:'Концептуален Дизајн',
    p1_desc:'Концепт кула со мешана намена која ги истражува вертикалниот урбанизам и структурниот израз.',
    p2_cat:'Одржлив Дизајн',
    p2_desc:'Административен комплекс со жив зелен покрив и биофилски принципи.',
    p3_cat:'Резиденцијален',
    p3_desc:'Комплетен резиденцијален проект — од геодетски истражувања до 3D рендери.',
    view_project:'Погледни Проект',
    free_kicker:'— Работа со Клиенти', free_page_title:'Фриленс',
    free_page_desc:'Резиденцијални проекти испорачани за приватни клиенти.',
    f_cat_res:'Резиденцијален',
    f1_name:'Модерна Семејна Куќа', f1_desc:'Отворен план, застаклување и интегрирано уредување.',
    f2_name:'Минималистичка Вила',  f2_desc:'Рамен покрив, темна облога и мирен базенски двор.',
    f3_name:'Резиденција на Рид',   f3_desc:'Терасирана куќа со панорамски поглед врз езерото.',
    f4_name:'Компактна Градска Куќа',f4_desc:'Просторно ефикасна со паметни распореди и тераса.',
    creat_kicker:'— Експерименти', creat_page_title:'Креативна Работа',
    creat_page_desc:'Рачна изработка, цртање и истражување на материјали.',
    c_cat1:'Оригами & Хартија', c_cat2:'Картонски Модели', c_cat3:'Дрворезба',
    c_cat4:'Портретни Цртежи',  c_cat5:'Скици на Автомобили',
    c1_1:'Оригами Структура #1', c1_2:'Хартиен Модел',    c1_3:'Студија на Форма',
    c2_1:'Урбан Блок Модел',    c2_2:'Архитектонски Фрагмент',
    c3_1:'Студија на Врски',    c3_2:'Скулптурна Форма',
    c4_1:'Студија на Портрет I', c4_2:'Студија на Портрет II',
    c5_1:'Концептуален Автомобил #1', c5_2:'Концептуален Автомобил #2', c5_3:'Скица Студија',
    skills_kicker:'— Експертиза', skills_page_title:'Вештини',
    skills_page_desc:'Целосен дизајн тулкит низ архитектура и креативни дисциплини.',
    sk_software:'Софтвер', sk_arch:'Архитектура', sk_creat:'Креативно',
    ska1:'Архитектонски Дизајн', ska2:'Ентериер Дизајн',  ska3:'Екстериер Дизајн',
    ska4:'3D Визуализација',     ska5:'Развој на Концепт', ska6:'Просторно Планирање',
    ska7:'Техничко Цртање',      ska8:'Анализа на Локација', ska9:'Спецификација на Материјали',
    skc1:'Рачно Цртање', skc2:'Портретно Цртање', skc3:'Дизајн на Лого',
    skc4:'Веб Дизајн',   skc5:'Изработка на Модели', skc6:'Дрворезба',
    skc7:'Хартиена Уметност', skc8:'Скицирање Автомобили',
    cv_kicker:'— Curriculum Vitae',
    cv_role:'Архитектонски Дизајнер',
    cv_loc_label:'Локација', cv_lang_label:'Јазици',
    cv_native:'Мајчин', cv_fluent:'Течно', cv_advanced:'Напредно',
    cv_download:'Преземи CV',
    cv_about_title:'За мене',
    cv_about_text:'Страстен млад архитектонски дизајнер со цврста основа во дизајн, визуализација и креативно истражување.',
    cv_edu_title:'Образование',
    cv_edu1_deg:'Дипломиран Архитект',
    cv_edu1_school:'Архитектонски Факултет — Универзитет „Свети Кирил и Методиј", Скопје',
    cv_edu2_deg:'Средно Училиште — Природни Науки & Математика',
    cv_edu2_school:'Гимназија, Скопје',
    cv_exp_title:'Искуство',
    cv_exp1_title:'Фриленс Архитектонски Дизајнер',
    cv_exp1_desc:'Самостојни резиденцијални и концептуални проекти за приватни клиенти.',
    cv_exp2_title:'Дизајн Практикант',
    cv_exp2_desc:'Поддршка со цртање, визуализација и изработка на модели.',
    cv_awards_title:'Награди & Признанија',
    cv_award1:'Награда за Извонредност во Дизајн — Архитектонска Теза',
    cv_award2:'Најдобар Концептуален Проект — Годишна Студентска Изложба',
    ct_kicker:'— Кажи Здраво', ct_page_title:'Контакт',
    ct_page_desc:'Отворен за архитектура, соработка и креативни проекти.',
    ct_big:'Ајде да создадеме нешто извонредно заедно.',
    cd_email:'Е-пошта', cd_loc:'Локација', cd_avail:'Достапност',
    cd_avail_val:'Достапен за проекти',
    cf_name:'Ime', cf_email:'Е-пошта', cf_subject:'Предмет', cf_message:'Порака',
    cf_submit:'Испрати Порака',
    cf_success:'Пораката е испратена! Ќе ви се јавам наскоро.',
    footer_copy:'© 2025 TINIARCH STUDIO. Сите права задржани.',
  }
};

/* ================================================================
   PROJECT DATA
   ================================================================ */
const PROJECTS = {
  tower:{
    title:'Architectural Tower',
    year:'2024', cat:'Mixed-Use High-Rise · Concept',
    desc:'A mixed-use high-rise concept exploring vertical urbanism and the expressive potential of structural systems. The tapering glass-and-steel facade responds to prevailing winds while creating a dynamic silhouette. Stacking residential, office, and retail across 42 floors, the project questions the relationship between tower and public ground.',
    bgClass:'pr-img-tower',
    drawings:['Site Plan','Ground Floor Plan','Typical Floor Plan','Section A–A','West Elevation','3D Visualization']
  },
  admin:{
    title:'Administrative Building',
    year:'2023', cat:'Green Roof · Sustainable Design',
    desc:'Administrative complex built around biophilic principles. A living green roof system reduces heat island effect and stormwater runoff. Passive solar strategies and triple-glazed facades achieve near-zero energy performance. A central atrium floods the floor plates with natural daylight.',
    bgClass:'pr-img-admin',
    drawings:['Ground Floor Plan','Roof Plan','Section B–B','Facade Detail','Green Roof Detail','3D Visualization']
  },
  house:{
    title:'Full House Design',
    year:'2023', cat:'Interior & Exterior · Residential',
    desc:'A complete design engagement from site survey to final photorealistic render. The split-level section engages a sloping site; warm timber interiors contrast against a raw concrete shell. Every detail — bespoke joinery, landscape grading, lighting — was resolved through this project.',
    bgClass:'pr-img-house',
    drawings:['Site Plan','Ground Floor','First Floor','Interior Render','Exterior Render','Section C–C']
  }
};

/* ================================================================
   STATE
   ================================================================ */
let lang      = 'en';
let curPage   = 'home';
let mouseX    = 0;
let mouseY    = 0;
let followX   = 0;
let followY   = 0;
let rafCursor = null;

/* ================================================================
   LOADER
   ================================================================ */
(function loader(){
  const loaderEl  = document.getElementById('loader');
  const fillEl    = loaderEl.querySelector('.loader-fill');
  const pctEl     = document.getElementById('loader-pct');
  let pct = 0;

  const interval = setInterval(() => {
    pct += Math.random() * 18 + 4;
    if(pct >= 100){ pct = 100; clearInterval(interval); }
    fillEl.style.width = pct + '%';
    pctEl.textContent = Math.round(pct) + '%';
    if(pct === 100){
      setTimeout(() => {
        loaderEl.classList.add('gone');
        /* Trigger hero reveal after load */
        setTimeout(() => {
          document.querySelectorAll('#page-home .reveal').forEach(triggerReveal);
          animateCounters();
        }, 400);
      }, 400);
    }
  }, 60);
})();

/* ================================================================
   CURSOR
   ================================================================ */
const dot   = document.getElementById('cursor-dot');
const ring  = document.getElementById('cursor-ring');
const label = document.getElementById('cursor-label');

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
  label.style.left = mouseX + 'px';
  label.style.top  = mouseY + 'px';
});

function animRing(){
  followX += (mouseX - followX) * 0.1;
  followY += (mouseY - followY) * 0.1;
  ring.style.left = followX + 'px';
  ring.style.top  = followY + 'px';
  rafCursor = requestAnimationFrame(animRing);
}
animRing();

/* Cursor label for cards */
document.querySelectorAll('[data-cursor]').forEach(el => {
  el.addEventListener('mouseenter', () => label.textContent = el.dataset.cursor);
  el.addEventListener('mouseleave', () => label.textContent = '');
});

/* ================================================================
   NAVIGATION
   ================================================================ */
const header = document.getElementById('site-header');
const burger = document.getElementById('burger');
const drawer = document.getElementById('mobile-drawer');

/* Sticky */
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
},{passive:true});

/* Go to page */
function gotoPage(page){
  if(page === curPage) return;
  curPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if(target){
    target.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  }

  document.querySelectorAll('.nav-links .nl').forEach(nl => {
    nl.classList.toggle('active', nl.dataset.goto === page);
  });

  closeBurger();

  /* Trigger reveals on new page */
  setTimeout(() => observeReveals(), 100);

  /* Skill bars */
  if(page === 'skills') setTimeout(animateSkillBars, 500);
}

/* Wire all [data-goto] buttons */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-goto]');
  if(btn) gotoPage(btn.dataset.goto);
  const vBtn = e.target.closest('[data-project]');
  if(vBtn) openModal(vBtn.dataset.project);
});

/* Burger */
function closeBurger(){
  burger.classList.remove('open');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  burger.setAttribute('aria-expanded','false');
}
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  burger.classList.toggle('open');
  drawer.setAttribute('aria-hidden', !open);
  burger.setAttribute('aria-expanded', open);
});

/* ESC closes drawer */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    closeBurger();
    closeModal();
  }
});

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
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  document.documentElement.lang = l;
}

document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

/* ================================================================
   SCROLL REVEAL (IntersectionObserver)
   ================================================================ */
function triggerReveal(el){ el.classList.add('in'); }

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){
      triggerReveal(en.target);
      revealObserver.unobserve(en.target);
    }
  });
},{threshold:0.12, rootMargin:'0px 0px -48px 0px'});

function observeReveals(){
  document.querySelectorAll('.page.active .reveal:not(.in)').forEach(el => {
    revealObserver.observe(el);
  });
}

/* Also observe on scroll for any missed */
window.addEventListener('scroll', observeReveals, {passive:true});

/* ================================================================
   SKILL BARS
   ================================================================ */
function animateSkillBars(){
  document.querySelectorAll('.sb-fill').forEach(fill => {
    const w = fill.dataset.w;
    fill.style.setProperty('transform','scaleX(1)');
    fill.classList.add('animated');
    /* Use CSS transition — set width as transform */
    fill.style.transform = `scaleX(${parseInt(w)/100})`;
  });
}

/* Also trigger if scrolled into view */
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){
      animateSkillBars();
      skillsObserver.disconnect();
    }
  });
},{threshold:0.2});
const skillBarsEl = document.getElementById('skill-bars');
if(skillBarsEl) skillsObserver.observe(skillBarsEl);

/* ================================================================
   COUNTER ANIMATION (stats)
   ================================================================ */
function animateCounters(){
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current  = 0;
    const step   = Math.max(1, Math.ceil(target / 30));
    const timer  = setInterval(() => {
      current += step;
      if(current >= target){ current = target; clearInterval(timer); }
      el.textContent = current;
    }, 50);
  });
}

/* Stats observer — trigger when home stats scroll into view */
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){ animateCounters(); statsObs.disconnect(); }
  });
},{threshold:0.3});
const statsEl = document.querySelector('.home-stats');
if(statsEl) statsObs.observe(statsEl);

/* ================================================================
   PROJECT MODAL
   ================================================================ */
const modal     = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose= document.getElementById('modal-close');

function openModal(id){
  const p = PROJECTS[id];
  if(!p) return;

  modalBody.innerHTML = `
    <div class="modal-visual ${p.bgClass}">
      <div class="pr-arch-art">
        ${id === 'tower' ? `
          <div class="paa-tower-body"></div>
          <div class="paa-line paa-l1"></div>
          <div class="paa-line paa-l2"></div>
        ` : id === 'admin' ? `
          <div class="paa-admin-body"></div>
          <div class="paa-green-roof"></div>
        ` : `
          <div class="paa-house-body"></div>
        `}
      </div>
    </div>
    <div class="pr-meta" style="margin-bottom:16px">
      <span class="pr-year">${p.year}</span>
      <span class="pr-cat">${p.cat}</span>
    </div>
    <h2 class="modal-title">${p.title}</h2>
    <p class="modal-desc">${p.desc}</p>
    <div class="section-kicker" style="margin-bottom:16px">— Drawings &amp; Visualizations</div>
    <div class="modal-drawings">
      ${p.drawings.map(d=>`<div class="modal-drawing"><span>${d}</span></div>`).join('')}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });

/* ================================================================
   CONTACT FORM
   ================================================================ */
const form       = document.getElementById('contact-form');
const successMsg = document.getElementById('cf-success');

if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.cf-submit');
    btn.style.opacity = '.6';
    btn.disabled = true;

    /* Simulate send */
    setTimeout(() => {
      form.reset();
      btn.style.opacity = '1';
      btn.disabled = false;
      successMsg.classList.remove('hidden');
      setTimeout(() => successMsg.classList.add('hidden'), 5000);
    }, 1600);
  });
}

/* ================================================================
   PARALLAX — hero orbs respond to mouse
   ================================================================ */
document.addEventListener('mousemove', e => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  document.querySelectorAll('.hero-orb').forEach((orb, i) => {
    const depth = (i + 1) * 10;
    orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
  });

  /* Arch SVG subtle drift */
  const svg = document.querySelector('.arch-svg');
  if(svg){
    svg.style.transform = `translate(${dx * 6}px, ${dy * 4}px)`;
  }
});

/* ================================================================
   CUBE CARD 3-D TILT
   ================================================================ */
document.querySelectorAll('.cube-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r  = card.getBoundingClientRect();
    const x  = e.clientX - r.left;
    const y  = e.clientY - r.top;
    const cx = r.width  / 2;
    const cy = r.height / 2;
    const ry =  ((x - cx) / cx) * 8;
    const rx = -((y - cy) / cy) * 8;
    card.style.transform =
      `translateY(-10px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ================================================================
   HERO GLITCH — subtle title shimmer
   ================================================================ */
(function glitch(){
  const headline = document.querySelector('.hero-headline');
  if(!headline) return;
  setInterval(() => {
    if(Math.random() > 0.93){
      headline.style.filter = 'blur(1.5px)';
      setTimeout(() => headline.style.filter = '', 60);
    }
  }, 2000);
})();

/* ================================================================
   INIT
   ================================================================ */
(function init(){
  setLang('en');
  gotoPage('home');

  /* Start observing */
  setTimeout(observeReveals, 800);
})();
