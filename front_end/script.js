// Subtle interactive enhancements for Joseph Badiger's Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll active nav item indicator
  const navLinks = document.querySelectorAll('.nav-item');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Subtle mouse movement ambient lighting response
  const heroFrame = document.querySelector('.hero-frame');
  const ambientGlow = document.querySelector('.ambient-glow');

  if (heroFrame && ambientGlow) {
    heroFrame.addEventListener('mousemove', (e) => {
      const rect = heroFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      
      ambientGlow.style.right = `${100 - xPercent}%`;
      ambientGlow.style.top = `${yPercent}%`;
    });
  }
});