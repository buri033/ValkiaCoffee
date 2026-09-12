// ==========================================
// Valkia Coffee — Cafés de autor, seleccionados para ti
// ==========================================

const metodos = [
  { id:'m1', nombre:'V60', descripcion:'Limpio y aromático', icon:'v60' },
  { id:'m2', nombre:'Espresso', descripcion:'Intenso y concentrado', icon:'espresso' },
  { id:'m3', nombre:'Prensa francesa', descripcion:'Cuerpo y profundidad', icon:'prensa' },
  { id:'m4', nombre:'Cold brew', descripcion:'Suave y refrescante', icon:'cold' }
];

const productos = [
  // --- CAFÉS DE AUTOR ---
  {
    id: 'p1', categoria: 'cafes', nombre: 'Caturra Huila', origen: 'Huila, Colombia · 1.800 msnm',
    notas: ['Chocolate', 'Caramelo', 'Frutos rojos'], proceso: 'Lavado',
    intensidad: 3, precio: 38000, precioFmt: '$38.000', accent: '#6B4A35',
    imagen: 'assets/images/products/bolsa-caturra.png', badge: 'Edición de Autor'
  },
  {
    id: 'p2', categoria: 'cafes', nombre: 'Geisha Nariño', origen: 'Nariño, Colombia · 1.950 msnm',
    notas: ['Jazmín', 'Citrus', 'Miel de Azahar'], proceso: 'Honey Anaeróbico',
    intensidad: 2, precio: 48000, precioFmt: '$48.000', accent: '#68705A',
    imagen: 'assets/images/products/bolsa-wush-wush.png', badge: 'Lote Exclusivo'
  },
  {
    id: 'p3', categoria: 'cafes', nombre: 'SL28 Sierra Nevada', origen: 'Santa Marta, Colombia · 1.700 msnm',
    notas: ['Mandarina', 'Té Verde', 'Cuerpo Cremoso'], proceso: 'Lavado Especial',
    intensidad: 2, precio: 45000, precioFmt: '$45.000', accent: '#B79A73',
    imagen: 'assets/images/products/bolsa-sl28.png', badge: 'Selección Sommelier'
  },
  {
    id: 'p4', categoria: 'cafes', nombre: 'Borbón Rosado Quindío', origen: 'Genoa, Quindío · 1.850 msnm',
    notas: ['Frutos Rojos', 'Cerezo', 'Vino Especiado'], proceso: 'Natural 72h',
    intensidad: 4, precio: 42000, precioFmt: '$42.000', accent: '#A9694F',
    imagen: 'assets/images/products/bolsa-borbon.png', badge: 'Favorito del Tostador'
  },

  // --- MÉTODOS Y ACCESORIOS ---
  {
    id: 'p5', categoria: 'accesorios', nombre: 'Cafetera Dripper V60 Cristal', origen: 'Vidrio borosilicato resistente al calor',
    notas: ['Extracción limpia', 'Capacidad 1-4 tazas'], proceso: 'Método de Goteo',
    intensidad: 0, precio: 85000, precioFmt: '$85.000', accent: '#382A21',
    imagen: 'assets/images/gallery/taza-colombiana.avif', badge: 'Accesorios'
  },
  {
    id: 'p6', categoria: 'accesorios', nombre: 'Molino Manual Cono Cerámico', origen: 'Ajuste micrométrico de molienda',
    notas: ['Molienda uniforme', 'Compacto y portátil'], proceso: 'Molienda de Precisión',
    intensidad: 0, precio: 120000, precioFmt: '$120.000', accent: '#4A382C',
    imagen: 'assets/images/gallery/tostadora-cafe.webp', badge: 'Accesorios'
  },

  // --- SUSCRIPCIONES & KITS ---
  {
    id: 'p7', categoria: 'suscripciones', nombre: 'Valkia Club — Caja Exploradora', origen: '2 bolsas seleccionadas de origen mensual',
    notas: ['Lotes rotativos', 'Envío gratis a todo el país'], proceso: 'Suscripción Mensual',
    intensidad: 0, precio: 75000, precioFmt: '$75.000 / mes', accent: '#241A14',
    imagen: 'assets/images/gallery/granos-cafe.jpg', badge: 'Suscripción'
  }
];

const icons = {
  v60:'<svg viewBox="0 0 40 40" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8h20l-8 20h-4L10 8z"/><path d="M18 28v4h4v-4"/></svg>',
  espresso:'<svg viewBox="0 0 40 40" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="16" width="18" height="13" rx="1"/><path d="M27 19h3a3 3 0 0 1 0 6h-3"/><path d="M13 16V9M18 16V9M23 16V9"/></svg>',
  prensa:'<svg viewBox="0 0 40 40" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="12" width="16" height="18" rx="1"/><path d="M20 12V6"/><path d="M15 6h10"/></svg>',
  cold:'<svg viewBox="0 0 40 40" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10h14l-2 20a2 2 0 0 1-2 1.8h-6a2 2 0 0 1-2-1.8L13 10z"/><path d="M11 10h18"/></svg>'
};

// ==========================================
// ESTADO DEL CARRITO (localStorage)
// ==========================================
let cart = JSON.parse(localStorage.getItem('valkia_cart') || '[]');

function saveCart(){
  localStorage.setItem('valkia_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCart();
}

function updateCartBadge(){
  const badge = document.getElementById('cartBadge');
  if(!badge) return;
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count;
}

function addToCart(productId){
  const prod = productos.find(p => p.id === productId);
  if(!prod) return;
  
  const existing = cart.find(item => item.id === productId);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ id: prod.id, nombre: prod.nombre, precio: prod.precio, precioFmt: prod.precioFmt, imagen: prod.imagen, qty: 1 });
  }
  
  saveCart();
  openCartDrawer();
}

function removeFromCart(productId){
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateQty(productId, delta){
  const item = cart.find(i => i.id === productId);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function openCartDrawer(){
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if(drawer && overlay){
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

function closeCartDrawer(){
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if(drawer && overlay){
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}

function renderCart(){
  const cartBody = document.getElementById('cartBody');
  const cartSubtotal = document.getElementById('cartSubtotal');
  if(!cartBody) return;

  if(cart.length === 0){
    cartBody.innerHTML = '<p class="cart-empty">Tu carrito de Valkia Coffee está vacío.<br>Agrega cafés de autor o accesorios para comenzar.</p>';
    if(cartSubtotal) cartSubtotal.textContent = '$0';
    return;
  }

  let total = 0;
  cartBody.innerHTML = cart.map(item => {
    total += item.precio * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.nombre}</div>
          <div class="cart-item-price">${item.precioFmt}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Quitar</button>
      </div>
    `;
  }).join('');

  if(cartSubtotal){
    cartSubtotal.textContent = '$' + total.toLocaleString('es-CO');
  }
}

// ==========================================
// RENDERIZADO DE PRODUCTOS Y FILTROS
// ==========================================
function dots(intensidad){
  if(intensidad === 0) return '';
  let out = '<span class="label">Intensidad</span>';
  for(let i=1;i<=5;i++){
    out += `<span class="dot ${i<=intensidad?'filled':''}"></span>`;
  }
  return out;
}

function renderProductos(categoria = 'todos'){
  const grid = document.getElementById('cafeGrid');
  if(!grid) return;

  const filtrados = categoria === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoria);

  grid.innerHTML = filtrados.map(p => `
    <article class="cafe-card reveal in-view">
      ${p.badge ? `<span class="tag-badge">${p.badge}</span>` : ''}
      <div class="cafe-photo" style="background:${p.accent}12">
        <img src="${p.imagen}" alt="${p.nombre} - Valkia Coffee" loading="lazy">
      </div>
      <p class="cafe-origin">${p.origen}</p>
      <h3 class="cafe-name">${p.nombre}</h3>
      <p class="cafe-notes">${p.notas.join(' · ')}</p>
      <div class="cafe-meta">
        <div class="intensity">${dots(p.intensidad)}</div>
        <span class="cafe-price">${p.precioFmt}</span>
      </div>
      <button class="btn-add-cart" onclick="addToCart('${p.id}')">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        AÑADIR AL CARRITO
      </button>
    </article>
  `).join('');
}

function setupFilterButtons(){
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProductos(cat);
    });
  });
}

function renderMetodos(){
  const grid = document.getElementById('metodoGrid');
  if(!grid) return;

  grid.innerHTML = metodos.map(m => `
    <div class="metodo reveal in-view">
      ${icons[m.icon]}
      <h3>${m.nombre}</h3>
      <p>${m.descripcion}</p>
    </div>
  `).join('');
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  setupFilterButtons();
  renderMetodos();
  updateCartBadge();
  renderCart();

  // Trigger Carrito Drawer
  const cartTriggers = document.querySelectorAll('.cart-trigger');
  cartTriggers.forEach(t => t.addEventListener('click', openCartDrawer));

  const cartCloseBtn = document.getElementById('cartClose');
  if(cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);

  const cartOverlay = document.getElementById('cartOverlay');
  if(cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Barra de progreso de scroll
  const progress = document.getElementById('scrollProgress');
  if(progress){
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      progress.style.width = scrolled + '%';
    });
  }

  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if(menuToggle && mobileNav){
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    }));
  }

  // Formulario Sommelier / Finder
  const form = document.getElementById('finderForm');
  const success = document.getElementById('formSuccess');
  if(form && success){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim() || 'amante del café';
      document.getElementById('successName').textContent = nombre;
      form.style.display = 'none';
      success.classList.add('visible');
    });
  }
});