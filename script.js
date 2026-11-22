const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');
const header = document.getElementById('header');
const themeToggleBtn = document.getElementById('theme-toggle');

// Alternância de Tema Claro / Escuro
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'dark');
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

// Menu Mobile
if (menuHamburguer) {
  menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Filtro de Projetos por Categoria
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category') || '';
      if (filterValue === 'all' || categories.includes(filterValue)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Carrossel de Certificados (Swiper)
const certSwiper = new Swiper('.certSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: '.cert-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.cert-next',
    prevEl: '.cert-prev',
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1040: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

// Sombra no Header ao rolar
window.addEventListener('scroll', () => {
  if (window.scrollY >= 40) {
    header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.65)';
  } else {
    header.style.boxShadow = 'none';
  }
});
