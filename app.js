// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Formspree AJAX submit with thank-you message
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        const thanks = document.getElementById('thanks');
        if (thanks) thanks.style.display = 'block';
      }
    } catch (err) {
      console.error('Submission error:', err);
    }
  });
}

// Set project cover image(s)
document.querySelectorAll('.project-img').forEach(function(el){
  el.style.backgroundSize = 'cover';
  el.style.backgroundPosition = 'center';
});

document.addEventListener('DOMContentLoaded', () => {
  // Получаем все ссылки внутри меню
  const menuLinks = document.querySelectorAll('.nav-links a');
  
  // Получаем чекбокс
  const burgerToggle = document.getElementById('burger-toggle');

  // Добавляем обработчик события для каждой ссылки
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Снимаем галочку с чекбокса, чтобы бургер-меню закрылось
      burgerToggle.checked = false;
    });
  });
});
