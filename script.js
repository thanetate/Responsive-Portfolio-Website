//JS File


//Swiper Stuff
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