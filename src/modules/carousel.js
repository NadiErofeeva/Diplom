import Swiper, { Navigation } from 'swiper';

export const carousel = () => {
    const swiper = new Swiper('.services-elements', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
}