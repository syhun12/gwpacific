(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const header = $('#siteHeader');
  const menuButton = $('.menu-button');
  const mobileNav = $('.mobile-nav');

  /* Native browser scrolling is intentionally preserved. */
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

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

  /* Homepage hero only. No wheel interception, no scroll-jacking. */
  if (window.Swiper && $('.hero-swiper')) {
    const current = $('.hero-fraction b');
    const hero = new Swiper('.hero-swiper', {
      loop: true,
      speed: 750,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: reduceMotion ? false : { delay: 6500, disableOnInteraction: false },
      navigation: { prevEl: '.hero-prev', nextEl: '.hero-next' },
      on: {
        init(swiper) {
          if (current) current.textContent = String(swiper.realIndex + 1).padStart(2, '0');
        },
        slideChange(swiper) {
          if (current) current.textContent = String(swiper.realIndex + 1).padStart(2, '0');
        }
      }
    });

    const heroSection = $('.hero');
    heroSection?.addEventListener('mouseenter', () => hero.autoplay?.pause());
    heroSection?.addEventListener('mouseleave', () => hero.autoplay?.resume());
  }

  /* Small one-time reveals only. */
  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    $$('[data-reveal]:not([data-reveal="image"])').forEach(element => {
      gsap.fromTo(element,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: .7,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 90%', once: true }
        }
      );
    });

    $$('[data-reveal="image"]').forEach(element => {
      gsap.fromTo(element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: .9,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 90%', once: true }
        }
      );
    });
  }

  /* Prototype placeholders. Replace these when production files/modules are connected. */
  $$('.brochure-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      window.alert('회사소개서 PDF 파일 연결 예정입니다.');
    });
  });

  const demoForm = $('[data-demo-form]');
  demoForm?.addEventListener('submit', event => {
    event.preventDefault();
    window.alert('현재는 디자인 시안입니다. 그누보드 전환 시 문의 게시판 또는 메일 전송 기능을 연결합니다.');
  });
})();
