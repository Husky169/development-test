import './bootstrap';

document.addEventListener('alpine:init', () => {
    Alpine.data('home', () => ({
        heroSwiper: null,
        heroSwiperTitle: '',
        uiSwiper: null,
        reviewSwiper: null,
        initHeroSwiper() {
            this.heroSwiper = new window.Swiper('.media-swiper', {
                slidesPerView: 1,
                loop: true
            });

            this.heroSwiperTitle = this.heroSwiper.slides[this.heroSwiper.activeIndex].dataset.title;

            this.heroSwiper.on('slideChange', () => {
                this.heroSwiperTitle = this.heroSwiper.slides[this.heroSwiper.activeIndex].dataset.title;
            });
        },
        initUiSwiper() {
            this.uiSwiper = new window.Swiper('.ui-swiper', {
                modules: [window.SwiperAutoplay],
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 2000,
                },
            });
        },
        initReviewSwiper() {
            this.reviewSwiper = new window.Swiper('.review-swiper', {
                modules: [window.SwiperAutoplay],
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    }
                }
            });
        },
        init() {
            this.initHeroSwiper();
            this.initUiSwiper();
            this.initReviewSwiper();
        }
    }));

    Alpine.data('product', () => ({
        activeProductId: null,
        activeShopifyId: null,
        activeTab: 'information',
        mediaSwiper: null,
        mediaThumbSwiper: null,
        isPurchaseModalOpen: false,
        initMediaSwiper() {
            this.mediaThumbSwiper = new window.Swiper('.media-thumb-swiper', {
                slidesPerView: 4,
                spaceBetween: 8,
                loop: true,
                breakpoints: {
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 8
                    }
                }
            });
    
            this.mediaSwiper = new window.Swiper('.media-swiper', {
                modules: [window.SwiperThumbs],
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                thumbs: {
                    swiper: this.mediaThumbSwiper,
                    slideThumbActiveClass: 'active'
                }
            });
        },
        init() {
            this.initMediaSwiper();

            this.$nextTick(() => this.$refs.products.querySelectorAll('button')[0].click());

            if (window.location.hash) {
                this.activeTab = window.location.hash.replace('#', '');
            }
        }
    }));
});

Alpine.start();

function animateTypingWords() {
    document.querySelectorAll('.typing-words').forEach((obj) => {
        const words = obj.dataset.words.split(',');

        let currentWord = 0;
        let currentLetter = words[currentWord].length;
        let direction = 1;
        let letterDelay = 100;
        let wordDelay = 2000;

        const typeWord = () => {
            if (currentLetter < words[currentWord].length) {
                obj.innerHTML = words[currentWord].slice(0, currentLetter + 1);
                obj.dataset.text = words[currentWord].slice(0, currentLetter + 1); // for glitch effect
                currentLetter += direction;
                setTimeout(typeWord, letterDelay);
            } else {
                setTimeout(eraseWord, wordDelay);
            }
        }

        const eraseWord = () => {
            if (currentLetter > 0) {
                obj.innerHTML = words[currentWord].slice(0, currentLetter - 1);
                obj.dataset.text = words[currentWord].slice(0, currentLetter - 1); // for glitch effect
                currentLetter -= direction;
                setTimeout(eraseWord, letterDelay);
            } else {
                currentWord = (currentWord + 1) % words.length;
                setTimeout(typeWord, 500);
            }
        }

        setTimeout(eraseWord, 500);
    });
}

htmx.on('htmx:load', animateTypingWords);

function smoothScroll() {
    window.lenisInstance = new window.Lenis({
        speed: 0.9,
        autoResize: true,
    });

    function raf(time) {
        window.lenisInstance.raf(time)
        requestAnimationFrame(raf)
    };

    requestAnimationFrame(raf);
};

smoothScroll();

htmx.on('htmx:load', () => {
    if (!window.lenisInterval) {
        window.lenisInstance.resize();
    }
});

document.addEventListener('aos:in', () => {
    if (!window.lenisInterval) {
        window.lenisInstance.resize();
    }
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
        event.preventDefault();
    }
});

document.addEventListener('copy', (event) => {
    event.preventDefault();
});

htmx.on('htmx:load', window.initializeSellSnEmbed);