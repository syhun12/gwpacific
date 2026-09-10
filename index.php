<?php
$year = date('Y');
?>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="GW Pacific - 제조기업의 제품과 기술을 글로벌 비즈니스 기회로 연결하는 수행사">
    <title>GW Pacific | Global Business Development</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header class="site-header" id="siteHeader">
        <div class="header-inner">
            <a class="brand" href="#top" aria-label="GW Pacific 홈">
                <img src="assets/img/gwpacific-logo.svg" alt="GW Pacific">
            </a>

            <nav class="desktop-nav" aria-label="주 메뉴">
                <a href="#about">ABOUT</a>
                <a href="#business">BUSINESS</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </nav>

            <div class="header-tools">
                <button class="language" type="button" aria-label="언어 선택">KR <span>/</span> EN</button>
                <a class="header-contact" href="#contact">PROJECT INQUIRY</a>
                <button class="menu-button" type="button" aria-label="메뉴 열기" aria-expanded="false">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>

        <div class="mobile-nav" aria-hidden="true">
            <nav>
                <a href="#about"><span>01</span>ABOUT</a>
                <a href="#business"><span>02</span>BUSINESS</a>
                <a href="#projects"><span>03</span>PROJECTS</a>
                <a href="#contact"><span>04</span>CONTACT</a>
            </nav>
            <p>GW PACIFIC INC. · BUSAN, KOREA</p>
        </div>
    </header>

    <main id="top">
        <section class="hero" aria-label="GW Pacific introduction">
            <div class="hero-copy-panel">
                <div class="hero-copy-inner">
                    <p class="kicker">GLOBAL B2B BUSINESS DEVELOPMENT</p>
                    <h1>
                        Technology.<br>
                        Market.<br>
                        <span>Business.</span>
                    </h1>
                    <p class="hero-description">지더블유퍼시픽은 제조기업의 제품과 기술이 글로벌 시장의 실제 프로젝트와 고객으로 연결되는 과정을 수행합니다.</p>
                    <div class="hero-actions">
                        <a class="button button-blue" href="#business">OUR BUSINESS <span>↗</span></a>
                        <a class="text-button" href="#projects">VIEW PROJECTS <span>→</span></a>
                    </div>
                </div>
                <div class="hero-brand-bar" aria-hidden="true"><span></span><span></span></div>
            </div>

            <div class="hero-visual-panel">
                <div class="swiper hero-swiper">
                    <div class="swiper-wrapper">
                        <article class="swiper-slide hero-slide">
                            <div class="hero-photo hero-photo-01"></div>
                            <div class="hero-photo-overlay"></div>
                            <div class="hero-slide-caption">
                                <span>01</span>
                                <div><strong>GLOBAL BUSINESS</strong><small>From research to execution</small></div>
                            </div>
                        </article>
                        <article class="swiper-slide hero-slide">
                            <div class="hero-photo hero-photo-02"></div>
                            <div class="hero-photo-overlay"></div>
                            <div class="hero-slide-caption">
                                <span>02</span>
                                <div><strong>MARKET CONNECTION</strong><small>Target customers and projects</small></div>
                            </div>
                        </article>
                        <article class="swiper-slide hero-slide">
                            <div class="hero-photo hero-photo-03"></div>
                            <div class="hero-photo-overlay"></div>
                            <div class="hero-slide-caption">
                                <span>03</span>
                                <div><strong>ON-SITE EXECUTION</strong><small>Meeting, exhibition and follow-up</small></div>
                            </div>
                        </article>
                    </div>
                    <div class="hero-slider-ui">
                        <button class="hero-prev" type="button" aria-label="이전 슬라이드">←</button>
                        <div class="swiper-pagination"></div>
                        <button class="hero-next" type="button" aria-label="다음 슬라이드">→</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="company section" id="about">
            <div class="container">
                <div class="section-label reveal">
                    <span>01</span>
                    <p>ABOUT GW PACIFIC</p>
                </div>

                <div class="company-grid">
                    <div class="company-heading reveal">
                        <p class="eyebrow">COMPANY</p>
                        <h2>제품이 실제 시장과<br>만나는 과정을 만듭니다.</h2>
                    </div>
                    <div class="company-copy reveal">
                        <p class="company-lead">지더블유퍼시픽은 제조기업 제품이 실제 수요 프로젝트에 연결되는 과정 전체를 운영하는 수행사입니다.</p>
                        <p>조선·에너지·항공·수소 분야의 글로벌 네트워크를 기반으로 기업·제품 분석, 수요조사, 시장검증, 해외 실증, 바이어 매칭, 비즈니스 미팅과 후속 계약까지 전 주기 업무를 수행합니다.</p>
                    </div>
                </div>

                <div class="company-principles reveal">
                    <article><span>01</span><h3>ANALYZE</h3><p>기업과 제품, 시장을 먼저 이해합니다.</p></article>
                    <article><span>02</span><h3>CONNECT</h3><p>적합한 고객과 프로젝트 접점을 만듭니다.</p></article>
                    <article><span>03</span><h3>EXECUTE</h3><p>미팅과 현장 운영, 후속 업무까지 이어갑니다.</p></article>
                </div>
            </div>
        </section>

        <section class="process section section-soft">
            <div class="container">
                <div class="section-label reveal">
                    <span>02</span>
                    <p>HOW WE WORK</p>
                </div>

                <div class="process-head reveal">
                    <h2>하나의 프로젝트를<br>끝까지 연결하는 방식.</h2>
                    <p>각 업무를 분절된 서비스로 제공하지 않고, 다음 사업 단계가 이어질 수 있도록 하나의 흐름으로 설계합니다.</p>
                </div>

                <div class="process-grid reveal">
                    <article><b>01</b><h3>Analysis</h3><p>Company & Product</p></article>
                    <article><b>02</b><h3>Research</h3><p>Market & Demand</p></article>
                    <article><b>03</b><h3>Target</h3><p>Customer Development</p></article>
                    <article><b>04</b><h3>Connect</h3><p>Meeting & Engagement</p></article>
                    <article><b>05</b><h3>Follow-up</h3><p>Project Development</p></article>
                </div>
            </div>
        </section>

        <section class="business section" id="business">
            <div class="container">
                <div class="section-label reveal">
                    <span>03</span>
                    <p>OUR BUSINESS</p>
                </div>

                <div class="business-intro reveal">
                    <h2>필요한 기능보다,<br><span>필요한 결과를 기준으로.</span></h2>
                    <p>프로젝트 목적에 따라 조사·고객개발·전시·콘텐츠 업무를 조합하여 실제 사업개발에 필요한 실행 체계를 구성합니다.</p>
                </div>

                <div class="business-grid">
                    <article class="service-card reveal">
                        <div class="service-top"><span>01</span><small>B2B</small></div>
                        <h3>B2B Business<br>Development</h3>
                        <p>타깃 고객 조사, 접촉, 미팅, 벤더등록 및 후속 커뮤니케이션까지 해외영업 과정을 지원합니다.</p>
                        <ul><li>Target Account Research</li><li>Buyer Development</li><li>Business Meeting</li><li>Vendor & Follow-up</li></ul>
                    </article>

                    <article class="service-card reveal">
                        <div class="service-top"><span>02</span><small>RESEARCH</small></div>
                        <h3>Market Research<br>& Consulting</h3>
                        <p>기업·제품 경쟁력과 시장·경쟁환경을 분석하여 진출 가능 시장과 고객군을 구체화합니다.</p>
                        <ul><li>Company Analysis</li><li>Product Analysis</li><li>Market Research</li><li>Competitor Research</li></ul>
                    </article>

                    <article class="service-card reveal">
                        <div class="service-top"><span>03</span><small>EVENT</small></div>
                        <h3>Exhibition<br>& Business Event</h3>
                        <p>해외전시, 공동관, B2B 상담회의 사전 바이어 개발부터 현장 운영과 사후관리까지 수행합니다.</p>
                        <ul><li>Global Exhibition</li><li>Korea Pavilion</li><li>Buyer Invitation</li><li>On-site Operation</li></ul>
                    </article>

                    <article class="service-card reveal">
                        <div class="service-top"><span>04</span><small>DIGITAL</small></div>
                        <h3>Digital<br>Marketing</h3>
                        <p>B2B 관점에서 기업과 제품의 강점을 명확하게 전달하는 디지털 콘텐츠와 온라인 홍보물을 기획합니다.</p>
                        <ul><li>B2B Contents</li><li>Online Exhibition</li><li>Product Promotion</li><li>Digital Campaign</li></ul>
                    </article>
                </div>
            </div>
        </section>

        <section class="projects section section-blue" id="projects">
            <div class="container">
                <div class="section-label section-label-white reveal">
                    <span>04</span>
                    <p>SELECTED PROJECTS</p>
                </div>

                <div class="projects-head reveal">
                    <div>
                        <p class="eyebrow">PROJECT EXPERIENCE</p>
                        <h2>현장에서 증명한<br>프로젝트 경험.</h2>
                    </div>
                    <div class="project-controls">
                        <button class="project-prev" type="button" aria-label="이전 프로젝트">←</button>
                        <button class="project-next" type="button" aria-label="다음 프로젝트">→</button>
                    </div>
                </div>

                <div class="swiper project-swiper reveal">
                    <div class="swiper-wrapper">
                        <article class="swiper-slide project-card">
                            <div class="project-image project-image-01"><span>2026</span></div>
                            <div class="project-meta"><p>JAKARTA · INDONESIA</p><span>01</span></div>
                            <h3>INAMARINE 2026</h3>
                            <p>Korea Pavilion · Buyer Development · B2B Meeting</p>
                        </article>
                        <article class="swiper-slide project-card">
                            <div class="project-image project-image-02"><span>2026</span></div>
                            <div class="project-meta"><p>HAMBURG · GERMANY</p><span>02</span></div>
                            <h3>SMM HAMBURG 2026</h3>
                            <p>Shipowner Development · Business Meeting · Exhibition Support</p>
                        </article>
                        <article class="swiper-slide project-card">
                            <div class="project-image project-image-03"><span>2025</span></div>
                            <div class="project-meta"><p>MILAN · ITALY</p><span>03</span></div>
                            <h3>GASTECH 2025</h3>
                            <p>Energy Business Development · Buyer Meeting · Market Development</p>
                        </article>
                        <article class="swiper-slide project-card">
                            <div class="project-image project-image-04"><span>2025</span></div>
                            <div class="project-meta"><p>BUSAN · KOREA</p><span>04</span></div>
                            <h3>WeBUSAN ONLINE EXHIBITION</h3>
                            <p>Online Exhibition · Buyer Engagement · Digital Operation</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section class="partners section">
            <div class="container">
                <div class="section-label reveal"><span>05</span><p>NETWORK & EXPERIENCE</p></div>
                <div class="partners-grid">
                    <div class="partners-heading reveal">
                        <h2>함께 만들어 온<br>산업 비즈니스 경험.</h2>
                        <p>공공기관과 제조기업, 글로벌 고객을 연결하며 프로젝트를 수행해 왔습니다.</p>
                    </div>
                    <div class="partner-list reveal">
                        <span>BUSAN TECHNOPARK</span>
                        <span>ULSAN TECHNOPARK</span>
                        <span>GYEONGNAM TECHNOPARK</span>
                        <span>KOMERI</span>
                        <span>BISTEP</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact section" id="contact">
            <div class="container contact-grid">
                <div class="contact-heading reveal">
                    <p class="eyebrow">START A PROJECT</p>
                    <h2>다음 글로벌 비즈니스를<br>함께 설계합니다.</h2>
                </div>
                <div class="contact-copy reveal">
                    <p>제품, 기술, 시장 또는 프로젝트에 대한 문의를 남겨주세요. 목적에 맞는 실행 방식부터 함께 검토합니다.</p>
                    <a class="button button-red" href="mailto:contact@gwpacific.com">CONTACT GW PACIFIC <span>↗</span></a>
                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="container footer-grid">
            <a class="footer-brand" href="#top"><img src="assets/img/gwpacific-logo.svg" alt="GW Pacific"></a>
            <div class="footer-info">
                <p>GW PACIFIC INC.</p>
                <p>Busan, Republic of Korea</p>
                <p>Global B2B Business Development</p>
            </div>
            <div class="footer-copy">© <?= $year ?> GW PACIFIC INC. ALL RIGHTS RESERVED.</div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
