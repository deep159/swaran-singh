const body=document.body,theme=document.getElementById('themeBtn'),nav=document.getElementById('nav'),menu=document.getElementById('menuBtn'),progress=document.getElementById('progress');
function setTheme(t){body.classList.toggle('dark',t==='dark');theme.textContent=t==='dark'?'☀':'☾';localStorage.setItem('ss-theme',t)}
setTheme(localStorage.getItem('ss-theme')||'light');
theme.onclick=()=>setTheme(body.classList.contains('dark')?'light':'dark');
menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m?scrollY/m*100:0)+'%'});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
