const btnHamburguer = document.querySelector('.hamburguer');
const menu = document.getElementById('menu');
const btnTopo = document.getElementById('btnTopo');

btnHamburguer.addEventListener('click', () => {
  const expanded = btnHamburguer.getAttribute('aria-expanded') === 'true';
  btnHamburguer.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
