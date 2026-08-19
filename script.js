// =====================
// Navbar scroll effect
// =====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightNavLink();
});

// =====================
// Mobile menu toggle
// =====================
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// =====================
// Active nav link on scroll
// =====================
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = navLinks.querySelectorAll('a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// =====================
// Scroll-reveal
// =====================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.about-text, .stat-card, .skill-category, .project-card, .contact-item, .contact-form'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.07}s`;
  revealObserver.observe(el);
});

// =====================
// Contact form validation
// =====================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);
  input.classList.add('invalid');
  error.textContent = message;
}

function clearError(fieldId) {
  const input = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);
  input.classList.remove('invalid');
  error.textContent = '';
}

['name', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => clearError(id));
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.classList.remove('visible');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let valid = true;

  if (!name) {
    showError('name', 'Please enter your name.');
    valid = false;
  }

  if (!email) {
    showError('email', 'Please enter your email.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Please enter a valid email address.');
    valid = false;
  }

  if (!message) {
    showError('message', 'Please enter a message.');
    valid = false;
  }

  if (valid) {
    contactForm.reset();
    formSuccess.classList.add('visible');
    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  }
});

// =====================
// Footer year
// =====================
document.getElementById('year').textContent = new Date().getFullYear();
