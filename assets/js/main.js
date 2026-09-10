(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const header = $('#siteHeader');
  const progress = $('.page-progress span');
  const menuButton = $('.menu-button');
  const mobileNav = $('.mobile-nav');

  /* Native scrolling is intentionally preserved. */
  let scrollTicking = false;
  const updateScrollUI = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    header?.classList.toggle('is-scrolled', y > 12);
    if (progress) progress.style.transform = `scaleX(${Math.min(1, y / max)})`;
    scrollTicking = false;
  };
  const requestScrollUI = () => {
    if (!scrollTicking) {
      requestAnimationFrame(updateScrollUI);
      scrollTicking = true;
    }
  };
  updateScrollUI();
  window.addEventListener('scroll', requestScrollUI, { passive: true });
  window.addEventListener('resize', requestScrollUI, { passive: true });

  /* Mobile navigation */
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    mobileNav?.classList.remove('is-open');
    mobileNav?.setAttribute('aria-hidden', 'true');
    menuButton?.setAttribute('aria-expanded', 'false');
  };
  const openMenu = () => {
    document.body.classList.add('menu-open');
    mobileNav?.classList.add('is-open');
    mobileNav?.setAttribute('aria-hidden', 'false');
    menuButton?.setAttribute('aria-expanded', 'true');
  };
  menuButton?.addEventListener('click', () => {
    document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });
  $$('.mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });

  /* Anchor navigation: smooth only when a navigation link is intentionally clicked. */
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = $(id);
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* Active navigation state */
  const sections = ['about', 'business', 'projects', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = $$('.desktop-nav a');
  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, .2, .5] });
    sections.forEach(section => navObserver.observe(section));
  }

  /* Hero slider */
  let heroProgressTween = null;
  const heroTrack = $('.hero-track span');
  const heroCurrent = $('.hero-count b');
  const heroDuration = 5600;

  const runHeroProgress = () => {
    if (!heroTrack) return;
    if (window.gsap && !reduceMotion) {
      heroProgressTween?.kill();
      gsap.set(heroTrack, { scaleX: 0, transformOrigin: 'left center' });
      heroProgressTween = gsap.to(heroTrack, { scaleX: 1, duration: heroDuration / 1000, ease: 'none' });
    } else {
      heroTrack.style.transform = 'scaleX(1)';
    }
  };

  if (window.Swiper) {
    const heroSwiper = new Swiper('.hero-swiper', {
      loop: true,
      speed: 850,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: reduceMotion ? false : { delay: heroDuration, disableOnInteraction: false },
      navigation: { prevEl: '.hero-prev', nextEl: '.hero-next' },
      on: {
        init(swiper) {
          if (heroCurrent) heroCurrent.textContent = String(swiper.realIndex + 1).padStart(2, '0');
          runHeroProgress();
        },
        slideChangeTransitionStart(swiper) {
          if (heroCurrent) heroCurrent.textContent = String(swiper.realIndex + 1).padStart(2, '0');
          runHeroProgress();
        }
      }
    });

    const heroFrame = $('.media-frame');
    heroFrame?.addEventListener('mouseenter', () => heroSwiper.autoplay?.pause());
    heroFrame?.addEventListener('mouseleave', () => heroSwiper.autoplay?.resume());

    new Swiper('.project-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 18,
      speed: 760,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: { prevEl: '.project-prev', nextEl: '.project-next' },
      breakpoints: {
        721: { spaceBetween: 26 },
        1200: { spaceBetween: 34 }
      }
    });
  }

  /* Restrained reveal motion: no scroll-jacking, no smooth-scroll library. */
  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    $$('[data-reveal]:not([data-reveal="clip"])').forEach(element => {
      gsap.fromTo(element,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: .85,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true }
        }
      );
    });

    $$('[data-reveal="clip"]').forEach(element => {
      const image = $('img', element);
      gsap.fromTo(element,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.05,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true }
        }
      );
      if (image) {
        gsap.fromTo(image,
          { scale: 1.07 },
          {
            scale: 1,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true }
          }
        );
      }
    });

    gsap.fromTo('.process-line span',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.6,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.process-shell', start: 'top 78%', once: true }
      }
    );

    ScrollTrigger.refresh();
  }
})();
