var swiper = new Swiper(".mySwiper", {
    // slidesPerview: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});