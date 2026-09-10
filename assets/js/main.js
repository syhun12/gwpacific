(() => {
    'use strict';

    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
    const body = document.body;
    const header = $('#siteHeader');
    const loader = $('.page-loader');
    const menuToggle = $('.menu-toggle');
    const mobileMenu = $('.mobile-menu');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.addEventListener('load', () => setTimeout(() => loader?.classList.add('is-hidden'), 420));

    /* Smooth scroll */
    let lenis = null;
    if (!reduceMotion && window.Lenis) {
        lenis = new Lenis({ duration: 1.08, smoothWheel: true, wheelMultiplier: .92, touchMultiplier: 1.05 });
    }

    const fallbackLenisRaf = (time) => {
        if (!lenis) return;
        lenis.raf(time);
        requestAnimationFrame(fallbackLenisRaf);
    };

    /* Header */
    const updateHeader = () => header?.classList.toggle('is-scrolled', scrollY > 30);
    updateHeader();
    addEventListener('scroll', updateHeader, { passive: true });

    /* Mobile navigation */
    const openMenu = () => {
        body.classList.add('menu-open');
        mobileMenu?.classList.add('is-open');
        mobileMenu?.setAttribute('aria-hidden', 'false');
        menuToggle?.setAttribute('aria-expanded', 'true');
        lenis?.stop();
    };
    const closeMenu = () => {
        body.classList.remove('menu-open');
        mobileMenu?.classList.remove('is-open');
        mobileMenu?.setAttribute('aria-hidden', 'true');
        menuToggle?.setAttribute('aria-expanded', 'false');
        lenis?.start();
    };
    menuToggle?.addEventListener('click', () => body.classList.contains('menu-open') ? closeMenu() : openMenu());

    $$('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const target = $(link.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            closeMenu();
            lenis ? lenis.scrollTo(target, { offset: -60, duration: 1.15 }) : target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    });

    /* Hero */
    const current = $('.hero-current');
    const progress = $('.hero-progress span');
    let progressTween;

    const animateProgress = () => {
        if (!window.gsap || !progress) return;
        progressTween?.kill();
        gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });
        progressTween = gsap.to(progress, { scaleX: 1, duration: 6.2, ease: 'none' });
    };

    const animateHeroSlide = slide => {
        if (!window.gsap || reduceMotion || !slide) return;
        const lines = $$('.hero-title > span', slide);
        const meta = [$('.hero-eyebrow', slide), $('.hero-copy', slide)].filter(Boolean);
        const media = $('.hero-media', slide);
        gsap.killTweensOf([...lines, ...meta, media]);
        gsap.fromTo(lines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.05, stagger: .08, ease: 'power4.out', delay: .12 });
        gsap.fromTo(meta, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .08, ease: 'power3.out', delay: .4 });
        if (media) gsap.fromTo(media, { scale: 1.12 }, { scale: 1.03, duration: 7.5, ease: 'none' });
    };

    if (window.Swiper) {
        new Swiper('.hero-swiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 1100,
            autoplay: reduceMotion ? false : { delay: 6200, disableOnInteraction: false },
            on: {
                init(swiper) {
                    if (current) current.textContent = String(swiper.realIndex + 1).padStart(2, '0');
                    animateProgress();
                    animateHeroSlide(swiper.slides[swiper.activeIndex]);
                },
                slideChangeTransitionStart(swiper) {
                    if (current) current.textContent = String(swiper.realIndex + 1).padStart(2, '0');
                    animateProgress();
                    animateHeroSlide(swiper.slides[swiper.activeIndex]);
                }
            }
        });

        const fraction = $('.project-fraction');
        new Swiper('.project-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 24,
            speed: 900,
            grabCursor: true,
            navigation: { nextEl: '.project-next', prevEl: '.project-prev' },
            breakpoints: { 721: { spaceBetween: 36 }, 1200: { spaceBetween: 48 } },
            on: {
                init(swiper) { if (fraction) fraction.textContent = `${String(swiper.realIndex + 1).padStart(2, '0')} / ${String(swiper.slides.length).padStart(2, '0')}`; },
                slideChange(swiper) { if (fraction) fraction.textContent = `${String(swiper.realIndex + 1).padStart(2, '0')} / ${String(swiper.slides.length).padStart(2, '0')}`; }
            }
        });
    }

    /* Business accordion */
    const businessItems = $$('.business-item');
    const businessVisuals = $$('.business-visual-layer');
    const activateBusiness = index => {
        businessItems.forEach((item, i) => item.classList.toggle('active', i === index));
        businessVisuals.forEach((layer, i) => layer.classList.toggle('active', i === index));
        const caption = $('.visual-caption span:last-child');
        if (caption) caption.textContent = `BUSINESS / ${String(index + 1).padStart(2, '0')}—04`;
    };
    businessItems.forEach((item, index) => {
        item.addEventListener('click', () => activateBusiness(index));
        item.addEventListener('mouseenter', () => innerWidth > 900 && activateBusiness(index));
        item.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activateBusiness(index); }
        });
    });

    /* Inquiry drawer */
    const modal = $('.contact-modal');
    const openModal = () => {
        modal?.classList.add('is-open');
        modal?.setAttribute('aria-hidden', 'false');
        body.classList.add('modal-open');
        lenis?.stop();
        setTimeout(() => $('.contact-panel input')?.focus(), 650);
    };
    const closeModal = () => {
        modal?.classList.remove('is-open');
        modal?.setAttribute('aria-hidden', 'true');
        body.classList.remove('modal-open');
        lenis?.start();
    };
    $$('[data-contact-open]').forEach(button => button.addEventListener('click', openModal));
    $$('[data-contact-close]').forEach(button => button.addEventListener('click', closeModal));
    addEventListener('keydown', event => event.key === 'Escape' && modal?.classList.contains('is-open') && closeModal());

    /* Scroll motion */
    if (window.gsap && window.ScrollTrigger && !reduceMotion) {
        gsap.registerPlugin(ScrollTrigger);

        $$('.reveal-up').forEach(element => {
            gsap.fromTo(element, { y: 52, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: element, start: 'top 86%', once: true }
            });
        });

        gsap.fromTo('.process-line span', { scaleX: 0 }, {
            scaleX: 1, ease: 'none',
            scrollTrigger: { trigger: '.process-rail', start: 'top 80%', end: 'bottom 45%', scrub: 1 }
        });
        gsap.from('.process-step', {
            y: 36, opacity: 0, stagger: .11, duration: .85, ease: 'power3.out',
            scrollTrigger: { trigger: '.process-rail', start: 'top 82%', once: true }
        });
        gsap.to('.orbit-a', { x: 110, y: -35, rotate: 18, scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'bottom top', scrub: 1.4 } });
        gsap.to('.orbit-b', { x: -100, y: 45, rotate: -16, scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'bottom top', scrub: 1.4 } });
        gsap.to('.experience-marquee', { xPercent: -3, ease: 'none', scrollTrigger: { trigger: '.experience-marquee', start: 'top bottom', end: 'bottom top', scrub: 1 } });

        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add(time => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        }
    } else if (lenis) {
        requestAnimationFrame(fallbackLenisRaf);
    }

    /* Cursor */
    const cursor = $('.cursor');
    const follower = $('.cursor-follower');
    if (cursor && follower && matchMedia('(pointer:fine)').matches && window.gsap) {
        addEventListener('mousemove', event => {
            gsap.set(cursor, { x: event.clientX, y: event.clientY });
            gsap.to(follower, { x: event.clientX, y: event.clientY, duration: .22, ease: 'power2.out' });
        });
        $$('a, button, .business-item, .project-card').forEach(element => {
            element.addEventListener('mouseenter', () => follower.classList.add('is-hover'));
            element.addEventListener('mouseleave', () => follower.classList.remove('is-hover'));
        });
    }

    /* Magnetic CTA */
    if (!reduceMotion && window.gsap && matchMedia('(pointer:fine)').matches) {
        $$('.magnetic').forEach(element => {
            element.addEventListener('mousemove', event => {
                const rect = element.getBoundingClientRect();
                gsap.to(element, {
                    x: (event.clientX - rect.left - rect.width / 2) * .08,
                    y: (event.clientY - rect.top - rect.height / 2) * .08,
                    duration: .3,
                    ease: 'power2.out'
                });
            });
            element.addEventListener('mouseleave', () => gsap.to(element, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.45)' }));
        });
    }
})();
