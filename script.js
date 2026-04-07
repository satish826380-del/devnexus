document.addEventListener('DOMContentLoaded',()=>{
  const dot=document.getElementById('cd');const ring=document.getElementById('cr');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
  (function animR(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animR)})();
  document.querySelectorAll('a,button,.svc-card,.rev-card,.team-card,.btn-lime,.btn-ghost,.connect-btn,.p-btn,.nav-cta').forEach(el=>{
    el.addEventListener('mouseenter',()=>{dot.classList.add('h');ring.classList.add('h')});
    el.addEventListener('mouseleave',()=>{dot.classList.remove('h');ring.classList.remove('h')});
  });
  const nav=document.querySelector('.nav');
  window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>50)});
  const tog=document.getElementById('nt');const links=document.getElementById('nl');
  tog.addEventListener('click',()=>{tog.classList.toggle('active');links.classList.toggle('open')});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{tog.classList.remove('active');links.classList.remove('open')}));
  const rvs=document.querySelectorAll('.rv');
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('vis'),Math.min([...e.target.parentElement.querySelectorAll('.rv')].indexOf(e.target)*100,400));obs.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  rvs.forEach(el=>obs.observe(el));
  document.querySelectorAll('.stat-num').forEach(el=>{
    const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const t=parseInt(el.dataset.t);const d=1800;const s=performance.now();(function u(now){const p=Math.min((now-s)/d,1);const ease=1-(1-p)*(1-p);el.textContent=Math.floor(ease*t);if(p<1)requestAnimationFrame(u);else el.textContent=t})(s);cObs.unobserve(el)}})},{threshold:.5});
    cObs.observe(el);
  });
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)window.scrollTo({top:t.offsetTop-80,behavior:'smooth'})})});
  const hg=document.querySelector('.hero-grid');
  if(hg)window.addEventListener('mousemove',e=>{const x=(e.clientX/innerWidth-.5)*18;const y=(e.clientY/innerHeight-.5)*18;hg.style.transform=`translate(${x}px,${y}px)`});
  document.querySelectorAll('.svc-card,.rev-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=e.clientX-r.left;const y=e.clientY-r.top;card.style.transform=`perspective(600px) rotateX(${(y-r.height/2)/25}deg) rotateY(${(r.width/2-x)/25}deg) translateY(-6px)`});
    card.addEventListener('mouseleave',()=>{card.style.transform=''});
  });
});
