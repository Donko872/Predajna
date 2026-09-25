// APEX AEROSPACE v3 — premium marketplace engine
const JETS = [
  {name:"F-35A Lightning II", maker:"Lockheed Martin • USA", role:"Multirole", gen:"5", price:82500000, stock:2, rating:4.98, reviews:31, mach:1.6, range:2800, ceiling:50000, crew:1, stealth:98, radar:96, agility:88, payload:8200, grad:"linear-gradient(135deg,#2b3a52,#0e1522)", desc:"Stealth + sensor fusion. AN/APG-81 AESA sees first, shoots first. The default choice for air forces that want to win BVR.", tags:["Stealth","AESA","HMDS"], pros:["Unmatched SA","Low observability","Global spares"], cons:["High upkeep","ALIS lock-in"]},
  {name:"F-22 Raptor", maker:"Lockheed Martin • USA", role:"Air Superiority", gen:"5", price:143000000, stock:1, rating:5.0, reviews:12, mach:2.25, range:2960, ceiling:65000, crew:1, stealth:99, radar:97, agility:96, payload:9100, grad:"linear-gradient(135deg,#3d4659,#10141d)", desc:"The apex predator. Supercruise Mach 1.8 dry, thrust-vectoring dogfight monster. Only one transferable airframe — ever.", tags:["Supercruise","TVC","Rare"], pros:["Best dogfighter","Supercruise","Collector value"], cons:["One unit only","Costly to fly"]},
  {name:"Su-57 Felon", maker:"Sukhoi • Russia", role:"Multirole", gen:"5", price:50000000, stock:3, rating:4.4, reviews:9, mach:2.0, range:3500, ceiling:65000, crew:1, stealth:72, radar:84, agility:97, payload:10000, grad:"linear-gradient(135deg,#5c2c2c,#1c1010)", desc:"Cobra-capable supermaneuverable stealth fighter. 3D TVC, huge internal bays, long legs. Aggressor-contract eligible.", tags:["TVC","Long range","Value"], pros:["Insane agility","Cheap for 5th gen","Heavy payload"], cons:["Higher RCS","Avionics gap"]},
  {name:"J-20 Mighty Dragon", maker:"Chengdu • China", role:"Air Superiority", gen:"5", price:110000000, stock:2, rating:4.5, reviews:7, mach:2.0, range:3400, ceiling:66000, crew:1, stealth:90, radar:92, agility:82, payload:11000, grad:"linear-gradient(135deg,#39503c,#101a10)", desc:"Long-range interceptor with canard-delta stealth shaping, PL-15 class reach. Built to kill tankers and AWACS at distance.", tags:["Long stick","Canard","AESA"], pros:["Huge range","BVR reach","Modern cockpit"], cons:["Export limits","Engine life"]},
  {name:"Eurofighter Typhoon", maker:"Eurofighter • EU", role:"Multirole", gen:"4.5", price:108000000, stock:2, rating:4.8, reviews:19, mach:2.0, range:2900, ceiling:65000, crew:1, stealth:55, radar:90, agility:94, payload:9000, grad:"linear-gradient(135deg,#274b5e,#0d1a23)", desc:"Canard + EJ200 supercruise agility. CAPTOR-E AESA + Meteor = Europe's BVR king. NATO-interoperable day one.", tags:["Meteor","Supercruise","NATO"], pros:["Meteor ready","Agile","NATO logs"], cons:["Pricey","No internal bays"]},
  {name:"Dassault Rafale", maker:"Dassault • France", role:"Multirole", gen:"4.5", price:90000000, stock:3, rating:4.9, reviews:24, mach:1.8, range:3700, ceiling:52000, crew:1, stealth:62, radar:91, agility:93, payload:9500, grad:"linear-gradient(135deg,#31424f,#101820)", desc:"Omnirole proven in combat from Mali to Syria. SPECTRA EW, carrier-capable M variant, stupidly reliable dispatch rate.", tags:["SPECTRA","Proven","Carrier opt."], pros:["Combat proven","EW suite","Reliability"], cons:["French supply chain","No stealth"]},
  {name:"Saab Gripen E", maker:"Saab • Sweden", role:"Multirole", gen:"4.5", price:65000000, stock:4, rating:4.7, reviews:17, mach:2.0, range:3200, ceiling:52000, crew:1, stealth:48, radar:89, agility:95, payload:7200, grad:"linear-gradient(135deg,#2c4e4e,#0d1c1c)", desc:"Highway-operable, $4,700/hr to fly — cheapest modern fighter to own. Meteor + rearm in 10 min with conscripts.", tags:["Cheap to fly","Meteor","STOL"], pros:["Low opex","Road ops","Easy maint."], cons:["Light payload","Single engine"]},
  {name:"F-16V Viper", maker:"Lockheed Martin • USA", role:"Multirole", gen:"4.5", price:63000000, stock:5, rating:4.8, reviews:42, mach:2.0, range:3200, ceiling:50000, crew:1, stealth:35, radar:88, agility:90, payload:7700, grad:"linear-gradient(135deg,#3a4c5e,#121b25)", desc:"The world's most-flown fighter, now with APG-83 SABR AESA. Best value NATO jet — spares everywhere, pilots everywhere.", tags:["AESA","Value","NATO"], pros:["Cheap","Huge fleet","Proven"], cons:["Old airframe","No stealth"]},
  {name:"F/A-18E Super Hornet", maker:"Boeing • USA", role:"Strike", gen:"4.5", price:70000000, stock:3, rating:4.6, reviews:21, mach:1.8, range:3300, ceiling:50000, crew:1, stealth:42, radar:87, agility:86, payload:8000, grad:"linear-gradient(135deg,#3c4160,#131624)", desc:"Carrier-born striker with twin-engine safety. Block III has conformal tanks + IRST. Perfect for maritime strike.", tags:["Carrier","Twin-eng","IRST"], pros:["Twin safety","Maritime","Block III"], cons:["Slower","Draggy"]},
  {name:"F-15EX Eagle II", maker:"Boeing • USA", role:"Air Superiority", gen:"4.5", price:87000000, stock:2, rating:4.9, reviews:15, mach:2.5, range:3900, ceiling:60000, crew:2, stealth:30, radar:95, agility:84, payload:13000, grad:"linear-gradient(135deg,#4e4636,#1d1810)", desc:"Mach 2.5 missile truck: 12× AIM-120s, fly-by-wire, 20,000-hr airframe. The arsenal plane that backs up stealth.", tags:["Mach 2.5","12 missiles","Heavy"], pros:["Payload king","Speed","Long life"], cons:["Big RCS","Needs escort"]},
  {name:"KF-21 Boramae", maker:"KAI • Korea", role:"Multirole", gen:"4.5", price:65000000, stock:4, rating:4.6, reviews:8, mach:1.8, range:2900, ceiling:55000, crew:1, stealth:68, radar:86, agility:89, payload:7700, grad:"linear-gradient(135deg,#2b3c72,#10152c)", desc:"Brand-new 4.5-gen with stealth shaping, growth path to internal bays. Factory warranty + Korean financing.", tags:["New","Warranty","Growth"], pros:["New airframe","Warranty","Modern"], cons:["Unproven","Small fleet"]},
  {name:"MiG-35 Fulcrum-F", maker:"MiG • Russia", role:"Interceptor", gen:"4.5", price:45000000, stock:5, rating:4.2, reviews:11, mach:2.2, range:3100, ceiling:62000, crew:1, stealth:28, radar:82, agility:92, payload:6500, grad:"linear-gradient(135deg,#4c2c4e,#1c101c)", desc:"Cheapest supersonic fighter on Earth. Zhuk-A AESA, 8 hardpoints, helmet-cued R-73s. Aggressor fleets love it.", tags:["Cheapest","Aggressor","TVC opt."], pros:["Lowest price","Agile","Simple"], cons:["Avionics","Support risk"]},
];
const ADDONS = [
  {name:"Precision Strike Pack", desc:"12× GBU-49 + Litening pod + integration", price:4800000},
  {name:"BVR Dominance Pack", desc:"12× AIM-120-class + datalink + spares", price:6500000},
  {name:"Spares + Engine Reserve", desc:"2 yrs consumables + 1 spare engine lease", price:8900000},
  {name:"Pilot Academy (2 pilots)", desc:"12 weeks type rating at Mojave + sim", price:1200000},
  {name:"Mobile Simulator", desc:"Full-mission sim in 40ft container", price:3400000},
];
const SERVICES = [
  {ico:"🔧", t:"Depot Maintenance", d:"OEM-level overhaul, NDT, engine hot-section. EASA Part-145 hangar at Mojave.", p:"from $1.2M / yr"},
  {ico:"🎓", t:"Pilot Training", d:"Ex-military IPs, type ratings, BFM & BVR syllabus, DACT against our own Vipers.", p:"2 pilots included"},
  {ico:"🚚", t:"Global Ferry", d:"An-124 airlift or crewed ferry with tankers. Fully insured, reassembled.", p:"included worldwide"},
  {ico:"📜", t:"Export Clearance", d:"DSP-5, end-user certs, demil waivers. In-house counsel, 99% approval.", p:"fixed $180k"},
  {ico:"🎯", t:"Weapons Integration", d:"Live-fire range access in approved states. OEM armament engineers.", p:"quoted per jet"},
  {ico:"🏦", t:"Escrow & Finance", d:"Lloyd's escrow, sovereign leases, trade-ins. Released only on acceptance.", p:"from 6.9% APR"},
];
const FAQS = [
  ["Can a private citizen buy a fighter jet?","Yes — demilitarized or FAA Experimental Exhibition category. Guns deactivated, ejection seats maintained by certified shops. We handle registration end-to-end. Governments can buy fully capable versions with export licenses."],
  ["How long does export approval take?","Typically 20–45 days for NATO / allied buyers. Our counsel files DSP-5 and end-user certificates. 47 of 48 approvals cleared — the single denial was an embargoed state."],
  ["What's actually included in the price?","Airframe + engines + logbooks + acceptance test flight + ferry delivery + 2 pilot type-ratings + 90-day warranty. Weapons, spares and simulators are optional add-ons at checkout."],
  ["Can I fly it before paying in full?","Yes. A $250k refundable deposit locks the tail for 14 days, then a back-seat acceptance flight at Mojave with our test pilot. Reject the jet → refunded minus fuel. Zero rejections in 2025."],
  ["Do you finance or take trade-ins?","Yes. 10–70% down, 3–15 yr terms from ~6.9% APR. We accept F-5s, MiG-21s, Hawks and L-39s as trade credit and handle disposal. Sovereign resource-backed structures available."],
  ["How does worldwide delivery work?","Crewed ferry with tanker support for flyable jets, or An-124 airlift disassembled and reassembled by our crew. Both fully insured. Average door-to-door: 45 days with customs."],
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const fmt$ = n => "$" + Math.round(n).toLocaleString("en-US");
const debounce = (fn,ms)=>{let h;return(...a)=>{clearTimeout(h);h=setTimeout(()=>fn(...a),ms)}};
let activeRole="all", cart=[], selectedAddons=new Set(), compareList=[], promo=false, lastFocus=null;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- preloader / scroll / nav ---------- */
addEventListener("load",()=>{ setTimeout(()=>$("#preloader").classList.add("done"), 450); });
setTimeout(()=>$("#preloader").classList.add("done"), 2600);
addEventListener("scroll",()=>{
  const h=document.documentElement, p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  $("#scrollProgress").style.width=p+"%";
  $("#nav").classList.toggle("scrolled", h.scrollTop>24);
  $("#backTop").classList.toggle("show", h.scrollTop>900);
},{passive:true});
$("#backTop").onclick=()=>scrollTo({top:0,behavior:reduced?"auto":"smooth"});

/* ---------- theme ---------- */
function applyTheme(){ document.documentElement.setAttribute("data-theme", localStorage.getItem("apex_theme")||"dark"); }
applyTheme();
$("#themeBtn").onclick=()=>{ const c=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light"; localStorage.setItem("apex_theme",c); applyTheme(); toast((c==="light"?"☀️ Daylight ops":"🌙 Night ops")+" enabled",""); };

/* ---------- toast stack ---------- */
function toast(msg, sub="", type=""){
  const stack=$("#toastStack"); if(!stack) return;
  const el=document.createElement("div"); el.className="toast-item "+type;
  const icon=type==="success"?"✓":type==="error"?"✕":"▲";
  el.innerHTML=`<span class="ti">${icon}</span><span>${msg}${sub?`<br><small style="color:var(--muted);font-weight:400">${sub}</small>`:""}</span>`;
  stack.appendChild(el);
  while(stack.children.length>3) stack.firstChild.remove();
  setTimeout(()=>{el.classList.add("out"); setTimeout(()=>el.remove(),320)}, 2600);
  const legacy=$("#toast"); if(legacy){ legacy.textContent=msg; }
}

/* ---------- nav ---------- */
$("#burger").onclick=()=>$("#navLinks").classList.toggle("open");
$$("#navLinks a").forEach(a=>a.onclick=()=>$("#navLinks").classList.remove("open"));
document.addEventListener("keydown",e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){ e.preventDefault(); $("#searchInput").focus(); }
  if(e.key==="Escape"){ $("#modalBg").classList.remove("open"); closeCart(); }
});

/* ---------- clocks ---------- */
function tickClock(){ const t=new Date().toUTCString().slice(17,25)+" UTC"; const f=$("#footClock"); if(f)f.textContent=t; const k=$("#kickerClock"); if(k)k.textContent=t; }
setInterval(tickClock,1000); tickClock();

/* ---------- HERO CANVAS: stars + flybys + contrails ---------- */
const cv=$("#heroCanvas"), ctx=cv.getContext("2d");
let stars=[], flybys=[], mouseX=.5;
function sizeCv(){ const d=Math.min(devicePixelRatio||1,2); cv.width=cv.offsetWidth*d; cv.height=cv.offsetHeight*d; ctx.setTransform(d,0,0,d,0,0); }
sizeCv(); addEventListener("resize",sizeCv);
addEventListener("pointermove",e=>{ mouseX=e.clientX/innerWidth; },{passive:true});
for(let i=0;i<110;i++) stars.push({x:Math.random(),y:Math.random(),s:Math.random()*1.7+.4,v:Math.random()*.00045+.00008,tw:Math.random()*6.28});
function spawnFlyby(){ flybys.push({x:-.25,y:.12+Math.random()*.55,s:.55+Math.random()*.9,trail:[]}); }
setInterval(spawnFlyby, 3400); spawnFlyby(); setTimeout(spawnFlyby,1200);
let heroVisible=true;
new IntersectionObserver(es=>heroVisible=es[0].isIntersecting).observe($(".hero"));
(function loop(t){
  requestAnimationFrame(loop);
  if(!heroVisible||reduced&&flybys.length>1) { if(reduced) return; }
  const W=cv.offsetWidth,H=cv.offsetHeight, px=(mouseX-.5)*14;
  ctx.clearRect(0,0,W,H);
  stars.forEach(p=>{ p.y-=p.v; if(p.y<0){p.y=1;p.x=Math.random()} const a=.35+.35*Math.sin(t/900+p.tw); ctx.fillStyle=`rgba(245,192,68,${Math.max(.08,a)})`; ctx.fillRect(p.x*W+px*.3,p.y*H,p.s,p.s*3.4); });
  flybys.forEach(j=>{
    j.x+=.0038*j.s; j.trail.push({x:j.x,y:j.y}); if(j.trail.length>46)j.trail.shift();
    const x=j.x*W, y=j.y*H;
    j.trail.forEach((tr,i)=>{ const a=i/j.trail.length*.4; ctx.fillStyle=`rgba(255,176,58,${a})`; ctx.fillRect(tr.x*W-2,y-1.5,(1-i/j.trail.length)*2+1,3); });
    ctx.save(); ctx.translate(x+px,j.y*H); ctx.scale(j.s,j.s);
    ctx.fillStyle="rgba(232,238,248,.95)";
    ctx.beginPath(); ctx.moveTo(-62,0); ctx.lineTo(-8,-8); ctx.lineTo(62,0); ctx.lineTo(-8,8); ctx.closePath(); ctx.fill();
    ctx.fillStyle="rgba(180,190,210,.9)"; ctx.beginPath(); ctx.moveTo(-14,-6); ctx.lineTo(2,-30); ctx.lineTo(12,-30); ctx.lineTo(4,-6); ctx.closePath(); ctx.fill();
    ctx.fillStyle="rgba(255,176,58,.9)"; ctx.fillRect(60,-2.5,26,5);
    ctx.fillStyle="rgba(255,220,140,.5)"; ctx.fillRect(86,-4,18,8);
    ctx.restore();
  });
  flybys=flybys.filter(j=>j.x<1.35);
})(0);

/* ---------- SVG jets ---------- */
function jetSVG(j, uid){
  const id="g"+uid+j.name.replace(/\W/g,"").slice(0,8);
  return `<svg viewBox="0 0 440 132" class="jet-big" aria-hidden="true">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef3fb"/><stop offset=".55" stop-color="#96a2b9"/><stop offset="1" stop-color="#39435a"/></linearGradient></defs>
    <ellipse cx="392" cy="68" rx="26" ry="9" fill="rgba(255,176,58,.35)"/>
    <path d="M12 68 L112 58 L232 56 L408 68 L232 80 L112 78 Z" fill="url(#${id})"/>
    <path d="M180 56 L214 14 L231 14 L205 56 Z" fill="#b9c3d6"/>
    <path d="M210 80 L244 118 L261 118 L228 80 Z" fill="#5b6679"/>
    <path d="M250 62 L340 40 L350 42 L260 68 Z" fill="#9fabbf"/>
    <path d="M250 74 L340 96 L350 94 L260 68 Z" fill="#55617a"/>
    <ellipse cx="232" cy="68" rx="46" ry="10" fill="#0b0f17"/>
    <circle cx="300" cy="68" r="4" fill="#f5c044"/>
    <rect x="406" y="65" width="13" height="6" rx="3" fill="#ffb03a"/></svg>`;
}

/* ---------- fleet render ---------- */
function stockBadge(j){ return j.stock<=1?`<span class="jet-stock low">● ONLY 1 LEFT</span>`:`<span class="jet-stock">● ${j.stock} IN STOCK</span>`; }
function escMonthly(j){ const r=.075/12,n=120,p=j.price*.7; return p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1); }
function hi(text,q){
  if(!q) return text;
  try{ return text.replace(new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig"),"<mark>$1</mark>"); }catch{ return text; }
}
function renderFleet(){
  const q=($("#searchInput").value||"").trim().toLowerCase();
  const gf=$("#genFilter").value, sf=$("#sortFilter").value, maxP=+$("#priceRange").value*1e6;
  $("#priceRange").style.setProperty("--fill", ((+$("#priceRange").value-40)/(150-40)*100)+"%");
  let list=JETS.filter(j=>(activeRole==="all"||j.role===activeRole)&&(gf==="all"||j.gen===gf)&&j.price<=maxP&&
    (!q||j.name.toLowerCase().includes(q)||j.maker.toLowerCase().includes(q)||j.role.toLowerCase().includes(q)||j.desc.toLowerCase().includes(q)||String(j.mach).includes(q)));
  if(sf==="price-asc")list.sort((a,b)=>a.price-b.price);
  else if(sf==="price-desc")list.sort((a,b)=>b.price-a.price);
  else if(sf==="speed-desc")list.sort((a,b)=>b.mach-a.mach);
  else if(sf==="stealth-desc")list.sort((a,b)=>b.stealth-a.stealth);
  else if(sf==="rating-desc")list.sort((a,b)=>b.rating-a.rating);
  $("#resultCount").textContent=list.length+" / "+JETS.length+" jets";
  $("#priceLabel").textContent="$"+$("#priceRange").value+"M";
  $("#navStock").textContent=JETS.reduce((s,j)=>s+j.stock,0)+" units • "+JETS.length+" types";
  $(".searchbox").classList.toggle("has-q", !!q);
  if(!list.length){ $("#jetGrid").innerHTML=`<div class="empty-state"><h3>No jets on this vector.</h3><p>Raise the budget or clear the search — the sky is big.</p><br><button class="btn btn-gold btn-small" id="emptyReset">Reset filters →</button></div>`; $("#emptyReset").onclick=resetFilters; return; }
  $("#jetGrid").innerHTML=list.map((j,i)=>`
    <article class="jet-card" style="transition-delay:${Math.min(i*40,320)}ms">
      <span class="shine"></span>
      <div class="jet-top" style="background:${j.grad}"><div class="blueprint"></div>
        <div class="jet-badges"><span class="jet-gen">${j.gen} GEN • ${hi(j.role.toUpperCase(),q)}</span>${stockBadge(j)}</div>
        <div class="jet-svg">${jetSVG(j,i)}</div>
      </div>
      <div class="jet-body">
        <div class="jet-nation">${j.maker}</div><h3>${hi(j.name,q)}</h3>
        <div class="jet-rate">★ <b>${j.rating}</b> <span>(${j.reviews} buyers) • TTAF low</span></div>
        <p class="jet-desc">${hi(j.desc,q)}</p>
        <div class="jet-tags">${j.tags.map(t=>`<span>${t}</span>`).join("")}</div>
        <div class="jet-spec-row">
          <div><label>MACH</label><b>${j.mach}</b></div><div><label>RANGE</label><b>${(j.range/1000).toFixed(1)}k</b></div>
          <div><label>STEALTH</label><b>${j.stealth}</b></div><div><label>RADAR</label><b>${j.radar}</b></div>
        </div>
        <div class="specbars">
          <div class="sb"><span>STEALTH</span><div class="tr"><i data-w="${j.stealth}"></i></div><b>${j.stealth}</b></div>
          <div class="sb"><span>AGILITY</span><div class="tr"><i data-w="${j.agility}"></i></div><b>${j.agility}</b></div>
        </div>
        <div class="jet-price-row"><div class="jet-price">${fmt$(j.price)}<small>FLYAWAY • FERRY INCL.</small></div><div class="jet-per"><b>${fmt$(escMonthly(j))}</b><br>/mo*</div></div>
        <div class="jet-actions">
          <button class="btn btn-gold btn-small" data-buy="${j.name}">Add to Hangar</button>
          <button class="btn btn-ghost btn-small" data-view="${j.name}">Dossier</button>
          <button class="cmp-toggle ${compareList.includes(j.name)?"on":""}" data-cmp="${j.name}" title="Add to compare" aria-label="Compare ${j.name}">⇄</button>
        </div>
      </div></article>`).join("");
  requestAnimationFrame(()=>requestAnimationFrame(()=>$$("#jetGrid .tr i").forEach(i=>i.style.width=i.dataset.w+"%")));
  bindCardBtns();
}
function bindCardBtns(){
  $$("[data-buy]").forEach(b=>b.onclick=e=>{e.stopPropagation(); addToCart(b.dataset.buy);});
  $$("[data-view]").forEach(b=>b.onclick=e=>{e.stopPropagation(); openDossier(b.dataset.view);});
  $$("[data-cmp]").forEach(b=>b.onclick=e=>{e.stopPropagation(); toggleCompare(b.dataset.cmp);});
}
function resetFilters(){ activeRole="all"; $$("#rolePills .pill").forEach((x,i)=>x.classList.toggle("active",i===0)); $("#searchInput").value=""; $("#genFilter").value="all"; $("#sortFilter").value="featured"; $("#priceRange").value=150; renderFleet(); }
$$("#rolePills .pill").forEach(b=>b.onclick=()=>{ $$("#rolePills .pill").forEach(x=>x.classList.remove("active")); b.classList.add("active"); activeRole=b.dataset.role; renderFleet(); });
["genFilter","sortFilter","priceRange"].forEach(id=>$("#"+id).addEventListener("input",renderFleet));
$("#searchInput").addEventListener("input", debounce(renderFleet,140));
$("#clearSearch").onclick=()=>{ $("#searchInput").value=""; renderFleet(); $("#searchInput").focus(); };
$("#resetFilters").onclick=resetFilters;

/* ---------- tilt + magnetic ---------- */
if(!reduced && matchMedia("(pointer:fine)").matches){
  document.addEventListener("pointermove",e=>{
    const card=e.target.closest?.(".tilt, .jet-card"); 
    $$(".tilt, .jet-card").forEach(c=>{ if(c!==card){ c.style.transform=""; } });
    if(!card) return;
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`;
  });
  document.addEventListener("pointerout",e=>{ const c=e.target.closest?.(".tilt,.jet-card"); if(c) c.style.transform=""; });
}

/* ---------- cart ---------- */
function saveCart(){ try{ localStorage.setItem("apex_cart", JSON.stringify({cart, addons:[...selectedAddons], promo})); }catch{} }
function loadCart(){ try{ const d=JSON.parse(localStorage.getItem("apex_cart")||"{}"); cart=d.cart||[]; selectedAddons=new Set(d.addons||[]); promo=!!d.promo; }catch{} }
function cartTotals(){
  const jets=cart.reduce((s,n)=>{const j=JETS.find(x=>x.name===n);return s+(j?j.price:0)},0);
  const adds=[...selectedAddons].reduce((s,i)=>s+ADDONS[i].price,0);
  const disc=promo?Math.round(adds*.1):0;
  return {jets, adds, disc, total:jets+adds-disc};
}
function addToCart(name){
  if(cart.includes(name)){ openCart(); toast("Already in your hangar","See cart to configure.",""); return; }
  cart.push(name); saveCart(); renderCart(); openCart();
  toast("▲ "+name+" secured","14-day tail lock started.","success");
}
function renderCart(){
  $("#cartCount").textContent=cart.length; $("#drawerCount").textContent=cart.length;
  const box=$("#cartItems");
  box.innerHTML=!cart.length?`<div class="empty-cart"><span class="big">🛩️</span><b>Your hangar is empty.</b><br>Add a fighter to start your acquisition.</div>`
    :cart.map(n=>{const j=JETS.find(x=>x.name===n);return `<div class="cart-item"><div class="ci-jet">🛩️</div>
      <div><b>${j.name}</b><small>${j.maker} • Mach ${j.mach} • ${fmt$(j.price)}</small><br><button class="ci-rm" data-rm="${j.name}">Remove ✕</button></div>
      <div class="ci-price">${fmt$(j.price)}<br><small style="color:var(--muted)">incl. ferry</small></div></div>`}).join("");
  $$("[data-rm]").forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x!==b.dataset.rm);saveCart();renderCart();});
  $("#addonList").innerHTML=ADDONS.map((a,i)=>{const on=selectedAddons.has(i);return `<div class="addon ${on?"sel":""}"><div><b>${a.name}</b><small>${a.desc}</small><small style="color:var(--gold)">${fmt$(a.price)}</small></div>
    <button class="${on?"added":""}" data-addon="${i}">${on?"✓ Added":"Add"}</button></div>`}).join("");
  $$("[data-addon]").forEach(b=>b.onclick=()=>{const i=+b.dataset.addon; selectedAddons.has(i)?selectedAddons.delete(i):selectedAddons.add(i); saveCart(); renderCart();});
  const t=cartTotals();
  $("#cartJets").textContent=fmt$(t.jets); $("#cartSubtotal").textContent=fmt$(t.adds);
  $("#discRow").classList.toggle("hidden",!t.disc); $("#cartDisc").textContent="−"+fmt$(t.disc);
  $("#cartTotal").textContent=fmt$(t.total);
  if($("#promoInput")&&promo)$("#promoInput").value="APEX10";
}
function openCart(){ lastFocus=document.activeElement; $("#cartDrawer").classList.add("open"); $("#drawerBg").classList.add("open"); setTimeout(()=>$("#cartClose").focus(),80); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); $("#drawerBg").classList.remove("open"); if(lastFocus?.focus)lastFocus.focus(); }
$("#cartOpen").onclick=openCart; $("#cartClose").onclick=closeCart; $("#drawerBg").onclick=closeCart;
$("#continueBtn").onclick=closeCart;
$("#clearCart").onclick=()=>{ if(!cart.length)return; cart=[];selectedAddons.clear();promo=false;saveCart();renderCart();toast("Hangar cleared","",""); };
$("#promoBtn").onclick=()=>{
  const v=($("#promoInput").value||"").trim().toUpperCase();
  if(v==="APEX10"){ promo=true; saveCart(); renderCart(); toast("Promo applied: APEX10","10% off mission packages.","success"); }
  else toast("Invalid code","Try APEX10 for 10% off packages.","error");
};

/* ---------- dossier modal with tabs ---------- */
let dossTab="overview";
function openDossier(name, tab="overview"){
  const j=JETS.find(x=>x.name===name); if(!j)return; dossTab=tab; lastFocus=document.activeElement;
  const mo=escMonthly(j);
  const tabs=[["overview","Overview"],["specs","Specs"],["packages","Packages"]];
  let tabBody="";
  if(tab==="overview") tabBody=`<p style="color:var(--muted);font-size:14.5px">${j.desc}</p>
    <div class="bar-row"><span>Stealth</span><div class="tr"><i data-w="${j.stealth}"></i></div><b>${j.stealth}</b></div>
    <div class="bar-row"><span>Radar</span><div class="tr"><i data-w="${j.radar}"></i></div><b>${j.radar}</b></div>
    <div class="bar-row"><span>Agility</span><div class="tr"><i data-w="${j.agility}"></i></div><b>${j.agility}</b></div>
    <div class="proscons"><div><h5 style="color:var(--green);font-size:13px">✔ STRENGTHS</h5>${j.pros.map(p=>"• "+p).join("<br>")}</div>
    <div><h5 style="color:var(--red);font-size:13px">✘ CONSIDERATIONS</h5>${j.cons.map(p=>"• "+p).join("<br>")}</div></div>`;
  if(tab==="specs") tabBody=`<table class="stat-table">
    <tr><td>Max speed / supercruise</td><td>Mach ${j.mach}${j.mach>=2?" • dry capable":""}</td></tr>
    <tr><td>Ferry range</td><td>${j.range.toLocaleString()} km</td></tr>
    <tr><td>Ceiling / crew</td><td>${j.ceiling.toLocaleString()} ft / ${j.crew}</td></tr>
    <tr><td>Max payload / hardpoints</td><td>${j.payload.toLocaleString()} kg</td></tr>
    <tr><td>Role / generation</td><td>${j.role} • ${j.gen} gen</td></tr>
    <tr><td>Flyaway / est. lease</td><td>${fmt$(j.price)} / ${fmt$(mo)}/mo</td></tr></table>
    <p class="fine">Provenance: logbooks digitized • NDT passed • acceptance flight video available on request.</p>`;
  if(tab==="packages") tabBody=`<p style="color:var(--muted);font-size:13.5px">Bundled at checkout — escrow covers packages until acceptance.</p>
    <div class="pkg-pick">${ADDONS.map((a,i)=>`<button class="pkg ${selectedAddons.has(i)?"sel":""}" data-p="${i}">${a.name} • ${fmt$(a.price)}</button>`).join("")}</div>`;
  $("#modalBox").innerHTML=`
    <button class="modal-close" id="mClose" aria-label="Close">✕</button>
    <div class="modal-hero" style="background:${j.grad}"><div class="blueprint"></div>
      <div style="position:relative;z-index:2"><span style="font-family:var(--font-m);font-size:10.5px;color:var(--gold);letter-spacing:.08em">${j.maker} • ${j.gen} GEN • ${j.role.toUpperCase()}</span>
      <h2 style="margin:7px 0">${j.name}</h2>
      <div style="font-size:12.5px;color:#ffffffbb">★ ${j.rating} (${j.reviews} verified) • ${j.stock} in stock • ${j.tags.join(" • ")}</div></div>
      <div style="position:relative;z-index:2;margin-top:10px">${jetSVG(j,9)}</div></div>
    <div class="modal-body">
      <div class="doss-tabs">${tabs.map(t=>`<button class="${t[0]===tab?"on":""}" data-tab="${t[0]}">${t[1]}</button>`).join("")}
        <span style="margin-left:auto;font-family:var(--font-m);font-size:12px;color:var(--gold);align-self:center">${fmt$(j.price)}</span></div>
      ${tabBody}
      <div style="display:flex;gap:10px;margin-top:19px;flex-wrap:wrap">
        <button class="btn btn-gold" id="mBuy">Add to Hangar — ${fmt$(j.price)}</button>
        <button class="btn btn-ghost" id="mCmp">⇄ Compare</button>
        <button class="btn btn-ghost" id="mClose2">Close</button>
      </div>
      <p class="fine">🛡 $250k refundable deposit locks this tail 14 days • Lloyd's escrow • ITAR / export approval required.</p>
    </div>`;
  $("#modalBg").classList.add("open");
  const close=()=>{ $("#modalBg").classList.remove("open"); if(lastFocus?.focus)lastFocus.focus(); };
  $("#mClose").onclick=$("#mClose2").onclick=close;
  $$("#modalBox [data-tab]").forEach(b=>b.onclick=()=>openDossier(name,b.dataset.tab));
  $("#mBuy").onclick=()=>{ $("#modalBg").classList.remove("open"); addToCart(j.name); };
  $("#mCmp").onclick=()=>{ $("#modalBg").classList.remove("open"); toggleCompare(j.name,true); };
  $$("#modalBox [data-p]").forEach(b=>b.onclick=()=>{const i=+b.dataset.p; selectedAddons.has(i)?selectedAddons.delete(i):selectedAddons.add(i); saveCart(); renderCart(); b.classList.toggle("sel");});
  requestAnimationFrame(()=>requestAnimationFrame(()=>$$("#modalBox .tr i").forEach(i=>i.style.width=i.dataset.w+"%")));
  setTimeout(()=>$("#mClose").focus(),60);
}
$("#modalBg").addEventListener("click",e=>{if(e.target.id==="modalBg")$("#modalBg").classList.remove("open")});

/* ---------- compare ---------- */
function toggleCompare(name, open=false){
  if(compareList.includes(name)) compareList=compareList.filter(x=>x!==name);
  else{ if(compareList.length>=3){toast("Compare holds 3 jets","Remove one to add another.","error");return;} compareList.push(name); toast("⇄ "+name+" staged","Pick 2+ to see the verdict.",""); }
  $("#cmpCount").textContent=compareList.length; renderCmpTray(); renderFleet();
  if(compareList.length>=2){ $("#compareA").value=compareList[0]; $("#compareB").value=compareList[1]; renderCompare(); }
  if(open||compareList.length>=2) $("#compare").scrollIntoView({behavior:reduced?"auto":"smooth"});
}
function renderCmpTray(){
  $("#cmpTray").innerHTML=compareList.length?compareList.map(n=>`<span class="cmp-chip">${n}<button data-unx="${n}" aria-label="Remove ${n}">✕</button></span>`).join("")+`<button class="link" id="clearCmp">clear all</button>`:`<span style="font-family:var(--font-m);font-size:12px;color:var(--muted)">TIP: tap ⇄ on cards to stage up to 3 jets.</span>`;
  $$("[data-unx]").forEach(b=>b.onclick=()=>toggleCompare(b.dataset.unx));
  const c=$("#clearCmp"); if(c)c.onclick=()=>{compareList=[];$("#cmpCount").textContent=0;renderCmpTray();renderFleet();};
}
$("#compareOpenBtn").onclick=()=>$("#compare").scrollIntoView({behavior:reduced?"auto":"smooth"});
$("#compareA").innerHTML=JETS.map(j=>`<option>${j.name}</option>`).join("");
$("#compareB").innerHTML=JETS.map(j=>`<option>${j.name}</option>`).join("");
$("#compareA").value="F-22 Raptor"; $("#compareB").value="F-35A Lightning II";
$("#compareA").onchange=renderCompare; $("#compareB").onchange=renderCompare;
$("#randomDuel").onclick=()=>{ let a=JETS[Math.random()*JETS.length|0],b=JETS[Math.random()*JETS.length|0]; if(a===b)b=JETS[(JETS.indexOf(a)+3)%JETS.length]; $("#compareA").value=a.name; $("#compareB").value=b.name; renderCompare(); toast("🎲 "+a.name+" vs "+b.name,"",""); };
$("#copyCompare").onclick=()=>{ const t=$("#verdict").textContent||"Compare jets at APEX"; navigator.clipboard?.writeText(t).then(()=>toast("Verdict copied","Paste it into your staff paper.","success")).catch(()=>toast(t,"","")); };
function statRow(label,a,b,money=false,invert=false){
  const mx=Math.max(a,b,1);
  const f=v=>money?fmt$(v):v.toLocaleString();
  let aWin=invert?a<=b:a>=b;
  const cA=aWin?"linear-gradient(90deg,#3ddc84,#1fae62)":"linear-gradient(90deg,var(--gold),var(--gold2))";
  const cB=!aWin&&a!==b?"linear-gradient(90deg,#3ddc84,#1fae62)":"linear-gradient(90deg,var(--gold),var(--gold2))";
  return `<div class="cmp-row"><label><span>${label}</span><span><b style="color:${aWin?"var(--green)":"var(--text)"}">${f(a)}</b> vs <b style="color:${!aWin&&a!==b?"var(--green)":"var(--text)"}">${f(b)}</b></span></label>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div class="cmp-track"><i style="width:${a/mx*100}%;background:${cA}"></i></div><div class="cmp-track"><i style="width:${b/mx*100}%;background:${cB}"></i></div></div></div>`;
}
function renderCompare(){
  const a=JETS.find(v=>v.name===$("#compareA").value), b=JETS.find(v=>v.name===$("#compareB").value);
  if(!a||!b)return;
  const sa=a.stealth+a.radar+a.agility, sb=b.stealth+b.radar+b.agility;
  const aWin=sa>=sb;
  $("#compareGrid").innerHTML=[a,b].map((v,i)=>{const win=(i===0)===aWin&&sa!==sb;return `<div class="cmp-card ${win?"winner":""}">${win?`<span class="cmp-crown">★ PAPER WINNER</span>`:""}
    <div class="jet-nation">${v.maker}</div><h3>${v.name}</h3>
    <div style="font-family:var(--font-m);font-size:13px;color:var(--gold)">${fmt$(v.price)} • Mach ${v.mach} • ★ ${v.rating}</div>
    <p style="color:var(--muted);font-size:13px;margin-top:7px">${v.desc}</p>
    <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gold btn-small" data-buy="${v.name}">Buy →</button><button class="btn btn-ghost btn-small" data-view="${v.name}">Dossier</button></div></div>`}).join("")
    +`<div class="cmp-card" style="grid-column:1/-1">${statRow("Max speed (Mach ×100)",Math.round(a.mach*100),Math.round(b.mach*100))}${statRow("Ferry range (km)",a.range,b.range)}${statRow("Stealth",a.stealth,b.stealth)}${statRow("Radar",a.radar,b.radar)}${statRow("Agility",a.agility,b.agility)}${statRow("Payload (kg)",a.payload,b.payload)}${statRow("Flyaway price",a.price,b.price,true,true)}</div>`;
  $("#verdict").innerHTML=sa===sb?`⚖ <b>Dead even (${sa} pts).</b> Buy on price, support & delivery slot.`
    :aWin?`⚖ <b>${a.name} leads on paper (+${sa-sb}).</b> ${b.name} wins only if budget, operating cost or delivery rules. <span style="color:var(--muted)">Score = stealth+radar+agility (${sa} vs ${sb}).</span>`
    :`⚖ <b>${b.name} leads on paper (+${sb-sa}).</b> ${a.name} wins only if budget, operating cost or delivery rules. <span style="color:var(--muted)">Score = stealth+radar+agility (${sa} vs ${sb}).</span>`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>$$("#compareGrid .cmp-track i").forEach(i=>{const w=i.style.width;i.style.width="0";setTimeout(()=>i.style.width=w,60)})));
  bindCardBtns();
}

/* ---------- financing ---------- */
$("#calcJet").innerHTML=JETS.map(j=>`<option>${j.name}</option>`).join("");
$("#calcJet").value="F-35A Lightning II";
function paintRange(el){ const p=(el.value-el.min)/(el.max-el.min)*100; el.style.setProperty("--fill",p+"%"); }
function renderCalc(){
  ["calcDown","calcTerm","calcApr"].forEach(id=>paintRange($("#"+id)));
  const j=JETS.find(x=>x.name===$("#calcJet").value);
  const down=+$("#calcDown").value, yrs=+$("#calcTerm").value, apr=+$("#calcApr").value;
  $("#downLabel").textContent=down+"%"; $("#termLabel").textContent=yrs+" years"; $("#aprLabel").textContent=apr.toFixed(1)+"%";
  const down$=j.price*down/100, fin=j.price-down$;
  const r=apr/100/12, n=yrs*12;
  const mo=r>0?fin*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):fin/n;
  const tot=mo*n, intr=tot-fin;
  $("#calcFin").textContent=fmt$(fin); $("#calcInt").textContent=fmt$(intr);
  $("#calcMonthly").textContent=fmt$(mo)+" /mo";
  $("#barDown").style.width=(down$/(j.price)*100)+"%"; $("#barFin").style.width=(fin/j.price*100)+"%";
  $("#calcCTA").textContent=`Pre-qualify — ${fmt$(mo)}/mo →`;
}
["calcJet","calcDown","calcTerm","calcApr"].forEach(id=>$("#"+id).addEventListener("input",renderCalc));
$("#calcCTA").onclick=()=>{ addToCart($("#calcJet").value); };
$("#heroConfigure").onclick=()=>{ openCart(); toast("Configure your package","Jets + mission kits bundle in checkout.",""); };

/* ---------- services / faq / reviews ---------- */
$("#svcGrid").innerHTML=SERVICES.map(s=>`<div class="svc"><div class="svc-ico">${s.ico}</div><h4>${s.t}</h4><p>${s.d}</p><div class="svc-price">${s.p}</div><button data-svc="${s.t}">Request quote →</button></div>`).join("");
$$("#svcGrid [data-svc]").forEach(b=>b.onclick=()=>{ openCart(); toast("◈ "+b.dataset.svc+" noted","Mention it in checkout notes — broker confirms.","success"); });
$("#faqList").innerHTML=FAQS.map((f,i)=>`<div class="faq-item ${i===0?"open":""}"><button class="faq-q" aria-expanded="${i===0}">${f[0]}<span>+</span></button><div class="faq-a" style="${i===0?"max-height:300px":""}"><p>${f[1]}</p></div></div>`).join("");
$$(".faq-q").forEach(b=>b.onclick=()=>{
  const item=b.parentElement, open=item.classList.contains("open");
  $$(".faq-item").forEach(x=>{x.classList.remove("open");x.querySelector(".faq-a").style.maxHeight=null;x.querySelector(".faq-q").setAttribute("aria-expanded","false")});
  if(!open){ item.classList.add("open"); const a=item.querySelector(".faq-a"); a.style.maxHeight=a.scrollHeight+"px"; b.setAttribute("aria-expanded","true"); }
});
$("#faqCTA").onclick=e=>{e.preventDefault();$("#leadEmail").focus();$("#leadEmail").scrollIntoView({behavior:"smooth",block:"center"});toast("Check eligibility","Drop your email — broker replies in 2h.","");};
let revIdx=0;
function renderRev(){ const n=$$("#revTrack .rev").length; revIdx=(revIdx+n)%n; $("#revTrack").style.transform=`translateX(-${revIdx*100}%)`; $("#revDots").innerHTML=Array.from({length:n},(_,i)=>`<button class="${i===revIdx?"on":""}" aria-label="Review ${i+1}"></button>`).join(""); $$("#revDots button").forEach((b,i)=>b.onclick=()=>{revIdx=i;renderRev()}); }
$("#revPrev").onclick=()=>{revIdx--;renderRev()}; $("#revNext").onclick=()=>{revIdx++;renderRev()}; renderRev();
setInterval(()=>{ if(document.visibilityState==="visible"){revIdx++;renderRev()} },7000);

/* ---------- checkout ---------- */
$("#checkoutBtn").onclick=()=>{ if(!cart.length){toast("Hangar empty","Add a jet before checkout.","error");return;} closeCart(); openCheckout(1,{}); };
function validEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
function openCheckout(step,data){
  const t=cartTotals(); lastFocus=document.activeElement;
  const steps=`<div class="checkout-steps"><span class="${step===1?"on":""}">1 Buyer</span><span class="${step===2?"on":""}">2 Delivery</span><span class="${step===3?"on":""}">3 Escrow</span></div>`;
  const summary=`<div style="font-size:13px;color:var(--muted);background:#080c14;border:1px solid var(--line);border-radius:12px;padding:11px 13px">🛩️ ${cart.join(" + ")}${[...selectedAddons].length?`<br>☰ ${[...selectedAddons].map(i=>ADDONS[i].name).join(", ")}`:""}${t.disc?`<br><span style="color:var(--green)">Promo APEX10: −${fmt$(t.disc)}</span>`:""}<br><b style="color:var(--gold)">Total ${fmt$(t.total)} • Deposit due ${fmt$(t.total*.1)}</b></div>`;
  let body="";
  if(step===1) body=`<div class="form-grid">
      <label>Full name / Ministry*<input id="c_name" value="${data.name||""}" placeholder="Gen. Alex Morgan" /></label>
      <label>Buyer type<select id="c_type"><option>Government / MOD</option><option>Private collector</option><option>Aggressor company</option><option>Museum</option></select></label>
      <label>Country*<input id="c_country" value="${data.country||""}" placeholder="United States" /></label>
      <label>Email*<input id="c_email" value="${data.email||""}" placeholder="you@ministry.gov" /></label>
    </div><div class="err-msg" id="c_err"></div>
    <div style="display:flex;gap:10px;margin-top:15px"><button class="btn btn-gold full" id="nx1">Continue → Delivery</button></div>`;
  if(step===2) body=`<div class="form-full">
      <label>Delivery method<select id="c_del"><option>Crewed ferry flight (fastest)</option><option>An-124 airlift, reassembled</option><option>Collect at Mojave</option></select></label>
      <label>Home base / airport<input id="c_base" value="${data.base||""}" placeholder="Ramstein AB, Germany" /></label>
      <label>Mission notes<textarea id="c_notes" rows="2" placeholder="Hangar, pilot hours, timeline, trade-in tails..."></textarea></label>
    </div>
    <div style="display:flex;gap:10px;margin-top:15px"><button class="btn btn-ghost" id="bk2">← Back</button><button class="btn btn-gold full" id="nx2">Continue → Escrow</button></div>`;
  if(step===3) body=`<div class="form-grid">
      <label>Cardholder<input id="c_card" placeholder="APEX HOLDINGS" /></label>
      <label>Card number (demo)<input id="c_num" inputmode="numeric" placeholder="4111 1111 1111 1111" maxlength="19" /></label>
      <label>Deposit — 10% escrow<input value="${fmt$(t.total*.1)}" disabled /></label>
      <label>Balance on acceptance<input value="${fmt$(t.total*.9)}" disabled /></label>
    </div><div class="err-msg" id="c_err"></div>
    <p class="fine">Demo checkout — no real charge. Mock Lloyd's escrow releases only after you sign the acceptance flight.</p>
    <div style="display:flex;gap:10px;margin-top:15px"><button class="btn btn-ghost" id="bk3">← Back</button><button class="btn btn-gold full" id="pay">Pay ${fmt$(t.total*.1)} deposit →</button></div>`;
  $("#modalBox").innerHTML=`<button class="modal-close" id="mClose" aria-label="Close">✕</button>
    <div class="modal-body"><span style="font-family:var(--font-m);font-size:10.5px;color:var(--gold);letter-spacing:.1em">SECURE CHECKOUT • LLOYD'S ESCROW • 256-BIT</span>
    <h2 style="margin:8px 0 10px">Acquire ${cart.length} jet${cart.length>1?"s":""} — ${fmt$(t.total)}</h2>${summary}${steps}${body}</div>`;
  $("#modalBg").classList.add("open");
  $("#mClose").onclick=()=>$("#modalBg").classList.remove("open");
  const num=$("#c_num"); if(num) num.addEventListener("input",()=>{ num.value=num.value.replace(/\D/g,"").slice(0,16).replace(/(\d{4})(?=\d)/g,"$1 "); });
  if(step===1) $("#nx1").onclick=()=>{
    const d={name:$("#c_name").value.trim(),country:$("#c_country").value.trim(),email:$("#c_email").value.trim(),type:$("#c_type").value};
    let err=""; if(d.name.length<2)err="Enter buyer name.";
    else if(d.country.length<2)err="Enter country for export review.";
    else if(!validEmail(d.email))err="Enter a valid email — the compliance pack goes there.";
    if(err){ $("#c_err").textContent="✕ "+err; ["c_name","c_country","c_email"].forEach(id=>$("#"+id).classList.remove("field-err")); if(d.name.length<2)$("#c_name").classList.add("field-err"); return; }
    openCheckout(2,d);
  };
  if(step===2){ $("#bk2").onclick=()=>openCheckout(1,data); $("#nx2").onclick=()=>openCheckout(3,{...data,base:$("#c_base").value}); }
  if(step===3){ $("#bk3").onclick=()=>openCheckout(2,data);
    $("#pay").onclick=()=>{
      const digits=(num.value||"").replace(/\D/g,"");
      if(digits.length<12){ $("#c_err").textContent="✕ Enter a demo card (12+ digits, any numbers)."; num.classList.add("field-err"); return; }
      const oid="APX-"+Math.random().toString(36).slice(2,8).toUpperCase();
      $("#modalBox").innerHTML=`<button class="modal-close" id="mClose" aria-label="Close">✕</button><div class="modal-body"><div class="order-success">
        <div class="big-check">✅</div><span style="font-family:var(--font-m);font-size:11px;color:var(--green);letter-spacing:.1em">DEPOSIT HELD IN MOCK ESCROW</span>
        <h2 style="margin:8px 0">Order ${oid} confirmed.</h2>
        <p style="color:var(--muted);font-size:14px">${cart.join(" + ")} — <b style="color:var(--gold)">${fmt$(t.total)}</b><br>Broker assigned. Compliance pack sent to <b>${data.email||"your email"}</b>.<br>Acceptance slot: Mojave, ~21 days.</p>
        <div class="timeline-mini"><div>① Deposit held</div><div>② Export filed</div><div>③ Accept flight</div><div>④ Ferry home</div></div>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:8px;flex-wrap:wrap"><button class="btn btn-gold" id="dlBtn">⬇ Receipt</button><button class="btn btn-ghost" id="doneBtn">Back to fleet →</button></div>
        </div></div>`;
      $("#mClose").onclick=$("#doneBtn").onclick=()=>$("#modalBg").classList.remove("open");
      $("#dlBtn").onclick=()=>{
        const txt=`APEX AEROSPACE — ORDER ${oid}\nJets: ${cart.join(", ")}\nPackages: ${[...selectedAddons].map(i=>ADDONS[i].name).join("; ")||"none"}\nTotal: ${fmt$(t.total)}\nDeposit: ${fmt$(t.total*.1)}\nBuyer: ${data.name} <${data.email}>\nBase: ${data.base||"-"}\nDemo receipt — no real charge.`;
        const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([txt],{type:"text/plain"})); a.download=oid+".txt"; a.click();
      };
      cart=[];selectedAddons.clear();promo=false;saveCart();renderCart(); confettiBurst();
      toast("🎉 Order "+oid+" confirmed","Broker contacts you within 2h.","success");
    };
  }
}

/* ---------- confetti ---------- */
function confettiBurst(){
  if(reduced)return;
  const c=$("#confetti"), x=c.getContext("2d"); c.width=innerWidth; c.height=innerHeight;
  const P=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*220,y:innerHeight*.4,vx:(Math.random()-.5)*9,vy:Math.random()*-8-2,g:.32,col:["#f5c044","#ff7a1a","#3ddc84","#5aa2ff","#fff"][Math.random()*5|0],s:Math.random()*7+3,r:Math.random()*6.28}));
  let f=0; (function anim(){ x.clearRect(0,0,c.width,c.height); P.forEach(p=>{ p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.r+=.1; x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.col;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore(); }); if(++f<110)requestAnimationFrame(anim); else x.clearRect(0,0,c.width,c.height); })();
}

/* ---------- lead / reveal / counters ---------- */
$("#leadForm").addEventListener("submit",e=>{
  e.preventDefault(); const v=$("#leadEmail").value.trim(), ok=validEmail(v);
  $("#leadMsg").textContent=ok?"✓ Request received — broker calls within 2 business hours. NDA on request.":"✕ Enter a valid email (e.g. ops@ministry.gov).";
  $("#leadMsg").style.color=ok?"var(--green)":"var(--red)";
  if(ok){ $("#leadEmail").value=""; toast("📞 Call requested","Broker replies within 2 business hours.","success"); }
  else $("#leadEmail").focus();
});
const rio=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); rio.unobserve(e.target);} }),{threshold:.1});
function watchReveal(){ $$(".reveal:not(.in)").forEach(el=>rio.observe(el)); }
const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return; const el=e.target, end=+el.dataset.count; cio.unobserve(el);
  const t0=performance.now(), dur=1400;
  (function step(t){ const p=Math.min((t-t0)/dur,1), ease=1-Math.pow(1-p,3), v=Math.round(end*ease); el.textContent=v; if(p<1)requestAnimationFrame(step); })(t0);
}),{threshold:.4});
$$("[data-count]").forEach(el=>cio.observe(el));

/* ---------- init ---------- */
loadCart(); renderFleet(); renderCart(); renderCmpTray(); renderCompare(); renderCalc(); watchReveal();
$$("[data-price]").forEach(el=>{ const v=+el.textContent.replace(/[^0-9]/g,""); if(v>0){ el.setAttribute("data-v",v); } });
