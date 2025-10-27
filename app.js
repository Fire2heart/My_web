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
