'use strict';
/* ═══════════════════════════════════════════════════════════════
   ALTIN ADEMI — Architecture Portfolio · script.js
   ═══════════════════════════════════════════════════════════════ */

const T = {
  en:{
    land_eyebrow:'Architectural Designer',land_cta:'Explore My Portfolio',land_loc:'Skopje, North Macedonia',
    nav_home:'Home',nav_port:'Portfolio',nav_arch:'Architecture',nav_free:'Freelance',nav_creat:'Creative',nav_skills:'Skills',nav_cv:'CV',nav_ach:'Achievements',nav_cert:'Certificates',nav_contact:'Contact',
    hub_eyebrow:'Portfolio',hub_sub:'Architectural Designer · Skopje, North Macedonia',
    hub_arch:'Architecture',hub_arch_sub:'Featured Projects',hub_cv:'CV',hub_cv_sub:'Background & Education',hub_free:'Freelance',hub_free_sub:'Client Commissions',hub_creat:'Creative',hub_creat_sub:'Craft & Experiments',hub_skills:'Skills',hub_skills_sub:'Software & Expertise',hub_ach:'Achievements',hub_ach_sub:'Awards & Competitions',hub_cert:'Certificates',hub_cert_sub:'Diplomas & Licenses',hub_contact:'Contact',hub_contact_sub:'Start a Conversation',
    ct_headline:"Let's build something remarkable together.",
    ct_email_lbl:'Email',ct_loc_lbl:'Location',ct_status_lbl:'Status',ct_status_val:'Available for projects',
    cf_name:'Name',cf_email:'Email',cf_subject:'Subject',cf_message:'Message',cf_send:'Send Message',cf_success:"Message sent — I'll be in touch soon.",
    sk_software:'Software Proficiency',sk_arch_title:'Architecture',sk_creat_title:'Creative',
    cv_about_title:'About',cv_edu_title:'Education',cv_exp_title:'Experience',cv_awards_title:'Awards',
    cv_about_text:'A passionate architectural designer with a strong foundation in design, visualization, and creative experimentation. Combining technical precision with artistic sensibility to deliver compelling architectural narratives.',
    cv_download:'Download CV',cv_lang_title:'Languages',cv_native:'Native',cv_fluent:'Fluent',cv_advanced:'Advanced',
  },
  sq:{
    land_eyebrow:'Dizajner Arkitektonik',land_cta:'Eksploroni Portfolion',land_loc:'Shkup, Maqedonia e Veriut',
    nav_home:'Kreu',nav_port:'Portfolio',nav_arch:'Arkitekturë',nav_free:'Freelance',nav_creat:'Kreative',nav_skills:'Aftësi',nav_cv:'CV',nav_ach:'Arritje',nav_cert:'Çertifikata',nav_contact:'Kontakt',
    hub_eyebrow:'Portfolio',hub_sub:'Dizajner Arkitektonik · Shkup, Maqedoni e Veriut',
    hub_arch:'Arkitekturë',hub_arch_sub:'Projektet Kryesore',hub_cv:'CV',hub_cv_sub:'Prejardhja & Arsimi',hub_free:'Freelance',hub_free_sub:'Punë me Klientë',hub_creat:'Kreative',hub_creat_sub:'Zejet & Eksperimente',hub_skills:'Aftësi',hub_skills_sub:'Software & Ekspertizë',hub_ach:'Arritje',hub_ach_sub:'Çmime & Konkurse',hub_cert:'Çertifikata',hub_cert_sub:'Diploma & Licenca',hub_contact:'Kontakt',hub_contact_sub:'Filloni Bisedën',
    ct_headline:'Le të ndërtojmë diçka të jashtëzakonshme bashkë.',
    ct_email_lbl:'Email',ct_loc_lbl:'Vendndodhja',ct_status_lbl:'Statusi',ct_status_val:'I disponueshëm',
    cf_name:'Emri',cf_email:'Email',cf_subject:'Tema',cf_message:'Mesazhi',cf_send:'Dërgo Mesazhin',cf_success:'Mesazhi u dërgua!',
    sk_software:'Zotërimi i Software',sk_arch_title:'Arkitekturë',sk_creat_title:'Kreative',
    cv_about_title:'Rreth Meje',cv_edu_title:'Arsimi',cv_exp_title:'Eksperienca',cv_awards_title:'Çmime',
    cv_about_text:'Dizajner i ri arkitektonik me bazë të fortë në dizajn, vizualizim dhe eksperimentim kreativ.',
    cv_download:'Shkarko CV',cv_lang_title:'Gjuhët',cv_native:'Amtare',cv_fluent:'Rrjedhshëm',cv_advanced:'E Avancuar',
  },
  mk:{
    land_eyebrow:'Архитектонски Дизајнер',land_cta:'Истражи го Портфолиото',land_loc:'Скопје, Македонија',
    nav_home:'Дома',nav_port:'Портфолио',nav_arch:'Архитектура',nav_free:'Фриленс',nav_creat:'Творечко',nav_skills:'Вештини',nav_cv:'CV',nav_ach:'Достигнувања',nav_cert:'Сертификати',nav_contact:'Контакт',
    hub_eyebrow:'Портфолио',hub_sub:'Архитектонски Дизајнер · Скопје, Македонија',
    hub_arch:'Архитектура',hub_arch_sub:'Избрани Проекти',hub_cv:'CV',hub_cv_sub:'Образование & Кариера',hub_free:'Фриленс',hub_free_sub:'Клиентски Работи',hub_creat:'Творечко',hub_creat_sub:'Занаети & Експерименти',hub_skills:'Вештини',hub_skills_sub:'Софтвер & Компетенции',hub_ach:'Достигнувања',hub_ach_sub:'Награди & Натпревари',hub_cert:'Сертификати',hub_cert_sub:'Дипломи & Лиценци',hub_contact:'Контакт',hub_contact_sub:'Почни Разговор',
    ct_headline:'Да изградиме нешто извонредно заедно.',
    ct_email_lbl:'Е-пошта',ct_loc_lbl:'Локација',ct_status_lbl:'Статус',ct_status_val:'Достапен за проекти',
    cf_name:'Име',cf_email:'Е-пошта',cf_subject:'Тема',cf_message:'Порака',cf_send:'Испрати Порака',cf_success:'Пораката е испратена!',
    sk_software:'Владеење на Софтвер',sk_arch_title:'Архитектура',sk_creat_title:'Творечко',
    cv_about_title:'За мене',cv_edu_title:'Образование',cv_exp_title:'Искуство',cv_awards_title:'Награди',
    cv_about_text:'Страстен архитектонски дизајнер со силна основа во дизајн, визуализација и креативна експериментација.',
    cv_download:'Преземи CV',cv_lang_title:'Јазици',cv_native:'Мајчин',cv_fluent:'Течно',cv_advanced:'Напредно',
  }
};

let curLang = localStorage.getItem('lang') || 'en';

function applyLang(lang){
  curLang = lang;
  localStorage.setItem('lang', lang);
  const d = T[lang] || T.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k = el.dataset.i18nPh;
    if(d[k] !== undefined) el.placeholder = d[k];
  });
  document.querySelectorAll('.sn-lang-btn,.lang-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('click', e=>{
  const btn = e.target.closest('.sn-lang-btn,.lang-btn');
  if(btn && btn.dataset.lang) applyLang(btn.dataset.lang);
});

/* ── NAV INJECTION ─────────────────────────────────── */
(function(){
  if(document.body.classList.contains('landing-body')) return;
  const base = document.documentElement.dataset.base || '';
  const page = window.location.pathname.split('/').pop() || 'index.html';
  function isActive(href){ return (href.split('/').pop()===page)?'active':''; }
  const logoSVG=`<svg viewBox="0 0 88 62" fill="none" xmlns="http://www.w3.org/2000/svg" class="aaa-logo-sm"><polygon points="2,58 14,6 21,6 21,58" fill="none" stroke="white" stroke-width="1.35" stroke-linejoin="round"/><line x1="2" y1="58" x2="21" y2="58" stroke="white" stroke-width="1.35"/><line x1="6" y1="40" x2="18" y2="40" stroke="white" stroke-width="0.9"/><polygon points="26,58 38,2 50,58" fill="none" stroke="white" stroke-width="1.35" stroke-linejoin="round"/><line x1="30" y1="37" x2="46" y2="37" stroke="white" stroke-width="0.9"/><polygon points="55,58 64,6 75,58" fill="none" stroke="white" stroke-width="1.35" stroke-linejoin="round"/><line x1="55" y1="58" x2="75" y2="58" stroke="white" stroke-width="1.35"/><line x1="58" y1="40" x2="71" y2="40" stroke="white" stroke-width="0.9"/><line x1="2" y1="58" x2="86" y2="58" stroke="white" stroke-width="0.55" opacity="0.3"/></svg>`;
  const links=[
    {h:`${base}index.html`,k:'nav_home'},{h:`${base}portfolio.html`,k:'nav_port'},
    {h:`${base}architecture.html`,k:'nav_arch'},{h:`${base}freelance.html`,k:'nav_free'},
    {h:`${base}creative.html`,k:'nav_creat'},{h:`${base}skills.html`,k:'nav_skills'},
    {h:`${base}cv.html`,k:'nav_cv'},{h:`${base}achievements.html`,k:'nav_ach'},
    {h:`${base}certificates.html`,k:'nav_cert'},{h:`${base}contact.html`,k:'nav_contact'},
  ];
  const html=`<nav class="site-nav" id="site-nav"><div class="sn-inner"><a href="${base}index.html" class="sn-logo">${logoSVG}</a><div class="sn-links">${links.map(l=>`<a href="${l.h}" class="sn-link ${isActive(l.h)}" data-i18n="${l.k}">${T.en[l.k]||l.k}</a>`).join('')}</div><div class="sn-right"><div class="sn-lang-row"><button class="sn-lang-btn" data-lang="en">EN</button><span class="sn-lang-sep">·</span><button class="sn-lang-btn" data-lang="sq">AL</button><span class="sn-lang-sep">·</span><button class="sn-lang-btn" data-lang="mk">MK</button></div><button class="sn-burger" id="sn-burger" aria-label="Menu"><span></span><span></span></button></div></div></nav><div class="sn-mob" id="sn-mob"><div class="sn-mob-links">${links.map(l=>`<a href="${l.h}" class="sn-mob-link" data-i18n="${l.k}">${T.en[l.k]||l.k}</a>`).join('')}</div><div class="sn-mob-lang"><button class="sn-lang-btn" data-lang="en">EN</button><button class="sn-lang-btn" data-lang="sq">AL</button><button class="sn-lang-btn" data-lang="mk">MK</button></div></div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
})();

applyLang(curLang);

/* ── NAV SCROLL ──────────────────────────────────────── */
const navEl = document.getElementById('site-nav');
if(navEl){ const sc=()=>navEl.classList.toggle('scrolled',window.scrollY>30); window.addEventListener('scroll',sc,{passive:true}); sc(); }

/* ── BURGER ──────────────────────────────────────────── */
function initBurger(){
  const b=document.getElementById('sn-burger'),m=document.getElementById('sn-mob');
  if(!b||!m) return;
  b.addEventListener('click',()=>{ const o=m.classList.toggle('open'); b.classList.toggle('open',o); document.body.classList.toggle('nav-open',o); });
  m.querySelectorAll('.sn-mob-link').forEach(l=>l.addEventListener('click',()=>{ m.classList.remove('open'); b.classList.remove('open'); document.body.classList.remove('nav-open'); }));
}
initBurger();

/* ── CURSOR ──────────────────────────────────────────── */
const dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
if(dot&&ring){
  let rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove',e=>{ mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'; },{passive:true});
  (function a(){ rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a); })();
  document.querySelectorAll('a,button').forEach(el=>{ el.addEventListener('mouseenter',()=>{ring.style.width=ring.style.height='52px';}); el.addEventListener('mouseleave',()=>{ring.style.width=ring.style.height='34px';}); });
}

/* ── REVEAL ──────────────────────────────────────────── */
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}}),{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

/* ── SKILL BARS ──────────────────────────────────────── */
const sbw=document.getElementById('sk-bars-wrap');
if(sbw){ const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.skb-fill').forEach(b=>{b.style.transform=`scaleX(${parseInt(b.dataset.w)/100})`;b.classList.add('on');});so.disconnect();}}),{threshold:.2});so.observe(sbw); }

/* ── CONTACT FORM ────────────────────────────────────── */
const ctForm=document.getElementById('ct-form'),cfOk=document.getElementById('cf-success');
if(ctForm&&cfOk){ ctForm.addEventListener('submit',e=>{ e.preventDefault();const btn=ctForm.querySelector('.cf-submit');btn.style.opacity='.5';btn.disabled=true;setTimeout(()=>{ctForm.reset();btn.style.opacity='1';btn.disabled=false;cfOk.classList.remove('hidden');setTimeout(()=>cfOk.classList.add('hidden'),5000);},1500); }); }

/* ── LANDING PARALLAX ────────────────────────────────── */
const lSvg=document.querySelector('.land-arch'),gs=document.querySelectorAll('.geo');
if(lSvg){ document.addEventListener('mousemove',e=>{ const cx=window.innerWidth/2,cy=window.innerHeight/2,dx=(e.clientX-cx)/cx,dy=(e.clientY-cy)/cy;lSvg.style.transform=`scale(1.04) translate(${dx*12}px,${dy*7}px)`;gs.forEach((g,i)=>g.style.transform=`translate(${dx*(i+1)*5*.15}px,${dy*(i+1)*5*.12}px)`); },{passive:true}); }

/* ── KEYBOARD ────────────────────────────────────────── */
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ const m=document.getElementById('sn-mob'),b=document.getElementById('sn-burger');if(m){m.classList.remove('open');document.body.classList.remove('nav-open');}if(b)b.classList.remove('open'); } });
