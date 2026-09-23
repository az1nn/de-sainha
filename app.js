const header = document.querySelector('[data-header]');
const mobileCta = document.querySelector('[data-mobile-cta]');
const countdown = document.querySelector('[data-countdown]');

function onScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 24);
  mobileCta?.classList.toggle('is-visible', y > window.innerHeight * 0.55);
}

function updateCountdown() {
  if (!countdown) return;
  const eventDate = new Date('2026-10-09T21:00:00-03:00').getTime();
  const now = Date.now();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.textContent = 'É HOJE';
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  countdown.textContent = `${days}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
updateCountdown();
setInterval(updateCountdown, 60000);
