const M = [
 ['Rodent Repellant 250 g','Protection','https://multimedia.3m.com/mws/media/1752778J/3m-rodent-repellant.jpg'],
 ['Car Wash Soap','Auto care','https://multimedia.3m.com/mws/media/1224817J/ia260166391-1-jpg.jpg'],
 ['Cream Wax 220 g','Auto care','https://multimedia.3m.com/mws/media/1772163J/ix260154618.jpg'],
 ['Auto Care Rubbing Compound','Compounds & polishes','https://multimedia.3m.com/mws/media/924870J/3m-auto-care-rubbing-compound-03900-8-oz.jpg'],
 ['Automotive Window Film Crystalline','Films','https://multimedia.3m.com/mws/media/2406146J/3m-automotive-window-film-crystalline-series-rendering-exterior.jpg'],
 ['Microfibre Detailing Cloth','Detailing','https://multimedia.3m.com/mws/media/1224808J/ia260100713-jpg.jpg'],
 ['High Power Brake Cleaner 325 g','Maintenance','https://multimedia.3m.com/mws/media/1060759J/high-power-brake-cleaner-08179-14-oz.jpg'],
 ['Throttle Body Cleaner 325 g','Engine care','https://multimedia.3m.com/mws/media/1772147J/is260100216.jpg'],
 ['Dashboard Cleaner','Interior care','https://multimedia.3m.com/mws/media/1772146J/ia260166359.jpg'],
 ['Glass Cleaner','Exterior care','https://multimedia.3m.com/mws/media/1772145J/ia260166342.jpg'],
 ['Engine & Tire Dressing','Exterior care','https://multimedia.3m.com/mws/media/1772148J/ia260166375.jpg'],
 ['Perfect-It Cleaner Clay','Paint prep','https://multimedia.3m.com/mws/media/1243311J/3m-perfect-it-cleaner-clay.jpg'],
 ['Battery Terminal Coating 250 ml','Electrical','https://multimedia.3m.com/mws/media/1772150J/ia260166360.jpg'],
 ['Car Care Kit — Large','Care kit','https://multimedia.3m.com/mws/media/1224819J/ia270001240-2-jpg.jpg'],
 ['Premium Liquid Wax 200 ml','Auto care','https://multimedia.3m.com/mws/media/1224819J/ia270001240-2-jpg.jpg'],
 ['Car Shampoo 500 ml','Auto care','https://multimedia.3m.com/mws/media/1224819J/ia270001240-2-jpg.jpg'],
 ['Tyre Dresser 500 ml','Auto care','https://multimedia.3m.com/mws/media/1224819J/ia270001240-2-jpg.jpg'],
 ['Dashboard Dresser 500 ml','Interior care','https://multimedia.3m.com/mws/media/1224819J/ia270001240-2-jpg.jpg'],
 ['Multi-Purpose Microfibre Cloth 3-pack','Detailing','https://multimedia.3m.com/mws/media/1224817J/ia260166391-1-jpg.jpg'],
 ['3M Car Cleaning Kit — Small','Care kit','https://multimedia.3m.com/mws/media/1224819J/ia270001240-2-jpg.jpg']
];

const R = [
 ['Dettol Antiseptic Liquid','Germ protection','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blt11e2842da2338504/69662745d53632bc224da864/a0b2caab0523e145bae97f5ee089aef02f327a85.png?format=png&height=309&quality=90&width=460'],
 ['Dettol Hygiene Portfolio','Germ protection','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blt11e2842da2338504/69662745d53632bc224da864/a0b2caab0523e145bae97f5ee089aef02f327a85.png?format=png&height=309&quality=90&width=460'],
 ['Lysol Disinfectant','Germ protection','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blta3e819880ed69ae6/696623116191c8d170ad54c1/a8786a7ecca2ddc9554d330a6f6f2d62ec7e7dfc.png?format=png&height=309&quality=90&width=460'],
 ['Lysol Hygiene Range','Germ protection','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blta3e819880ed69ae6/696623116191c8d170ad54c1/a8786a7ecca2ddc9554d330a6f6f2d62ec7e7dfc.png?format=png&height=309&quality=90&width=460'],
 ['Harpic Toilet Cleaner','Bathroom care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/bltf14e80b419ee1c5a/696625298aa1e175873a6fb0/d7a80dfdeecd23b4973ac7127c04a2b4aa031d72.png?format=png&height=309&quality=90&width=460'],
 ['Harpic Bathroom Care','Bathroom care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/bltf14e80b419ee1c5a/696625298aa1e175873a6fb0/d7a80dfdeecd23b4973ac7127c04a2b4aa031d72.png?format=png&height=309&quality=90&width=460'],
 ['Finish Dishwasher Care','Household care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blt10aac2f7f1691565/69663c779047a15b9c3c3638/1e21d6974b58e28695d96cc7e956c8af25defd95.png?format=png&height=619&quality=90&width=920'],
 ['Finish Rinse & Shine','Household care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blt10aac2f7f1691565/69663c779047a15b9c3c3638/1e21d6974b58e28695d96cc7e956c8af25defd95.png?format=png&height=619&quality=90&width=920'],
 ['Vanish Oxi Action','Fabric care','https://www.reckitt.com/media/3jaoa4dy/reckitt-annual-report-and-accounts-2024_accessible_format.pdf'],
 ['Vanish Gold','Fabric care','https://www.reckitt.com/media/3jaoa4dy/reckitt-annual-report-and-accounts-2024_accessible_format.pdf'],
 ['Strepsils Sore Throat','Self care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blta2b39b1de55b3209/69d782dbef3294a60c38cc8c/Brand_heritage_Strepsils_1.jpg?format=jpg&height=215&quality=90&width=317'],
 ['Strepsils Dual Action','Self care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blta2b39b1de55b3209/69d782dbef3294a60c38cc8c/Brand_heritage_Strepsils_1.jpg?format=jpg&height=215&quality=90&width=317'],
 ['Nurofen Pain Relief','Self care','https://www.reckitt.com/brands/'],
 ['Nurofen Express','Self care','https://www.reckitt.com/brands/'],
 ['Mucinex 12HR','Self care','https://www.reckitt.com/brands/'],
 ['Mucinex Multi-Symptom','Self care','https://www.reckitt.com/brands/'],
 ['Gaviscon Double Action','Self care','https://eu-images.contentstack.com/v3/assets/blt93c8bc7a598af9f0/blt1dc11da30a854db9/6a95395e633a269a2cf6c7f0/Image_3_Banner.jpg?format=jpg&height=141&quality=90&width=317'],
 ['Durex Portfolio','Intimate wellness','https://www.reckitt.com/brands/'],
 ['Veet Hair Removal','Personal care','https://www.reckitt.com/brands/']
];

function makeFallback(spec){
 const parts=(spec||'Brand|Product|').split('|'); const brand=parts[0], title=parts[1]||'Product', sub=parts[2]||'';
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="#ececf0"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><circle cx="650" cy="120" r="170" fill="#f7f7f8"/><text x="70" y="160" font-family="Arial,sans-serif" font-size="52" font-weight="700" fill="#111">${brand}</text><text x="70" y="245" font-family="Arial,sans-serif" font-size="38" font-weight="600" fill="#333">${title.replace(/&/g,'&amp;')}</text><text x="70" y="300" font-family="Arial,sans-serif" font-size="24" fill="#777">${sub.replace(/&/g,'&amp;')}</text><text x="70" y="510" font-family="Arial,sans-serif" font-size="18" letter-spacing="3" fill="#999">IMAGE UNAVAILABLE — REQUEST CURRENT PACK</text></svg>`;
 return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
window.makeFallback=makeFallback;

function esc(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function card([name,category,url],brand){
 const fallback=makeFallback(`${brand}|${name}|${category}`);
 return `<article class="card"><div class="photo"><img loading="lazy" src="${url}" alt="${esc(brand+' '+name)}" onerror="this.onerror=null;this.src='${fallback}'"></div><div class="cardbody"><small>${esc(category)}</small><h3>${esc(name)}</h3><a href="#contact" data-product="${esc(brand+' — '+name)}">Request price →</a></div></article>`;
}
function render(data,id,brand){document.getElementById(id).innerHTML=data.map(p=>card(p,brand)).join('');}
render(M,'mgrid','3M'); render(R,'rgrid','Reckitt');

document.addEventListener('click',e=>{const a=e.target.closest('[data-product]'); if(!a)return; const v=a.dataset.product; document.getElementById('brand').value=v.startsWith('3M')?'3M Products':'Reckitt Products'; document.getElementById('msg').value=v;});

document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault(); const n=document.getElementById('name').value.trim(), p=document.getElementById('phone').value.trim(), b=document.getElementById('brand').value, q=document.getElementById('qty').value.trim(), m=document.getElementById('msg').value.trim(); const text=`Hello D.N. Agencies, I am ${n} (${p}). Requirement: ${b}. Qty/SKU: ${q}. ${m}`; window.open('https://wa.me/917533943719?text='+encodeURIComponent(text),'_blank','noopener');});
