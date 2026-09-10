(() => {
    'use strict';

    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const header = $('#siteHeader');
    const menuButton = $('.menu-button');
    const mobileNav = $('.mobile-nav');

    /* Native page scroll is intentionally preserved. */
    const updateHeader = () => {
        header?.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    /* Mobile navigation */
    const closeMenu = () => {
        document.body.classList.remove('menu-open');
        menuButton?.classList.remove('is-open');
        menuButton?.setAttribute('aria-expanded', 'false');
        mobileNav?.classList.remove('is-open');
        mobileNav?.setAttribute('aria-hidden', 'true');
    };

    const openMenu = () => {
        document.body.classList.add('menu-open');
        menuButton?.classList.add('is-open');
        menuButton?.setAttribute('aria-expanded', 'true');
        mobileNav?.classList.add('is-open');
        mobileNav?.setAttribute('aria-hidden', 'false');
    };

    menuButton?.addEventListener('click', () => {
        mobileNav?.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    $$('.mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
        if (window.innerWidth > 960) closeMenu();
    });

    /* Hero slider: restrained autoplay with explicit controls. */
    if (window.Swiper) {
        new Swiper('.hero-swiper', {
            loop: true,
            speed: reduceMotion ? 0 : 700,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: reduceMotion ? false : {
                delay: 5600,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.hero-slider-ui .swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.hero-next',
                prevEl: '.hero-prev'
            },
            keyboard: { enabled: true }
        });

        new Swiper('.project-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 18,
            speed: reduceMotion ? 0 : 550,
            grabCursor: true,
            watchOverflow: true,
            navigation: {
                nextEl: '.project-next',
                prevEl: '.project-prev'
            },
            breakpoints: {
                701: { spaceBetween: 24 },
                1200: { spaceBetween: 30 }
            }
        });
    }

    /* Lightweight reveal only. No scrub, scroll-jacking or parallax. */
    const reveals = $$('.reveal');

    if (reduceMotion) {
        reveals.forEach(el => el.classList.add('is-visible'));
    } else if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        reveals.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    once: true
                },
                onComplete: () => el.classList.add('is-visible')
            });
        });
    } else if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('is-visible'));
    }
})();
