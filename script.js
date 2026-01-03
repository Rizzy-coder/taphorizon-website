/**
 * TapHorizon: Ascend - Website Scripts
 * Handles interactivity, animations, and particle effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initFAQ();
  initSmoothScroll();
  initParticles();
  initScrollAnimations();
});

/**
 * Navigation
 * - Sticky nav on scroll
 * - Mobile menu toggle
 */
function initNavigation() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  // Scroll handling for nav styling
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class
    if (currentScrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');

      // Toggle aria-expanded
      const isExpanded = navLinks.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * FAQ Accordion
 * Toggle FAQ items open/closed
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
      question.setAttribute('aria-expanded', !isActive);
    });
  });
}

/**
 * Smooth Scroll
 * Handle anchor link clicks with smooth scrolling
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const navHeight = document.getElementById('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Particle System
 * Creates floating particles in the hero section
 */
function initParticles() {
  const particleContainer = document.getElementById('particles');
  if (!particleContainer) return;

  const particleCount = 50;
  const colors = ['#FFD700', '#9333EA', '#14B8A6', '#FF4500', '#7B68EE'];

  for (let i = 0; i < particleCount; i++) {
    createParticle(particleContainer, colors);
  }
}

function createParticle(container, colors) {
  const particle = document.createElement('div');
  const size = Math.random() * 4 + 2;
  const color = colors[Math.floor(Math.random() * colors.length)];

  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    opacity: ${Math.random() * 0.5 + 0.2};
    pointer-events: none;
    animation: particle-float ${Math.random() * 10 + 10}s ease-in-out infinite;
    animation-delay: ${Math.random() * 5}s;
  `;

  container.appendChild(particle);
}

// Add particle animation keyframes dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes particle-float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.3;
    }
    25% {
      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * -100}px) scale(1.2);
      opacity: 0.6;
    }
    50% {
      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * -150}px) scale(1);
      opacity: 0.4;
    }
    75% {
      transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * -50}px) scale(0.8);
      opacity: 0.5;
    }
  }
`;
document.head.appendChild(styleSheet);

/**
 * Scroll Animations
 * Fade in elements as they enter the viewport
 */
function initScrollAnimations() {
  // Check for IntersectionObserver support
  if (!('IntersectionObserver' in window)) return;

  const animatedElements = document.querySelectorAll(
    '.step-card, .realm-card, .mode-card, .pricing-card, .testimonial-card, .skin-card, .screenshot-item, .polish-feature'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

/**
 * Video Modal (for gameplay trailer)
 * Opens a modal with embedded video
 */
function openVideoModal(videoUrl) {
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-overlay"></div>
    <div class="video-modal-content">
      <button class="video-modal-close" aria-label="Close video">&times;</button>
      <div class="video-wrapper">
        <iframe
          src="${videoUrl}?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Close modal handlers
  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = '';
  };

  modal.querySelector('.video-modal-close').addEventListener('click', closeModal);
  modal.querySelector('.video-modal-overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/**
 * Lazy Loading for Images
 * Load images only when they enter the viewport
 */
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  } else if ('IntersectionObserver' in window) {
    // Fallback to IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for old browsers
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

/**
 * Performance: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Analytics Event Tracking
 * Track user interactions (placeholder for analytics integration)
 */
function trackEvent(category, action, label) {
  // Placeholder for analytics tracking
  // Example: Google Analytics, Mixpanel, etc.
  console.log('Event tracked:', { category, action, label });

  // Uncomment when analytics is set up:
  // gtag('event', action, {
  //   'event_category': category,
  //   'event_label': label
  // });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('CTA', 'click', btn.textContent.trim());
  });
});

// Track section views
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('Section', 'view', entry.target.id);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => sectionObserver.observe(section));
}
