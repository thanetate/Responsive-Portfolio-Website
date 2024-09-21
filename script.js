//JS File


//Swiper Stuff 
/*
let swiper = new Swiper (".mySwiper", {
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

swiper.on("progress", (ev) => {
    console.log("Slide progress:", ev.progress);
});
*/

let swiper = new Swiper (".swiper-container", {
    direction: 'vertical',
    effect:'slide',
    slidesPerView: 7,
    loop: 'true',
    autoplay: {
        delay: 1200,
        reverseDirection: true,
        disableOnInteraction: false,
    }
});
