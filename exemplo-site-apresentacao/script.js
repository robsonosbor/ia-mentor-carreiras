// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll suave ao clicar no menu
const links = document.querySelectorAll('.menu a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 68,
          behavior: 'smooth'
        });
      }
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
