const btnHamburguer = document.querySelector('.hamburguer');
const menu = document.getElementById('menu');

btnHamburguer.addEventListener('click', () => {
  const expanded = btnHamburguer.getAttribute('aria-expanded') === 'true';
  btnHamburguer.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('active');
});