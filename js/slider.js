/* ==========================================
   PARTTYDOS PROFILE
   slider.js
========================================== */

const slidesContainer = document.querySelector(".slides");
const cards = document.querySelectorAll(".card");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;

function getVisibleCards() {

    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1200) return 2;

    return 3;

}

function updateSlider() {

    const visible = getVisibleCards();

    const cardWidth =
        cards[0].offsetWidth + 30;

    slidesContainer.style.transform =
        `translateX(-${current * cardWidth}px)`;

    slidesContainer.style.transition = ".5s";

    if (current > cards.length - visible) {

        current = 0;

        slidesContainer.style.transform =
            `translateX(0px)`;

    }

}

next.addEventListener("click", () => {

    current++;

    updateSlider();

});

prev.addEventListener("click", () => {

    current--;

    if (current < 0) {

        current = cards.length - getVisibleCards();

    }

    updateSlider();

});

window.addEventListener("resize", updateSlider);

updateSlider();


/* ==========================
   AUTO SLIDE
========================== */

let autoSlide = setInterval(() => {

    current++;

    updateSlider();

}, 3500);


/* ==========================
   PAUSE ON HOVER
========================== */

slidesContainer.addEventListener("mouseenter", () => {

    clearInterval(autoSlide);

});

slidesContainer.addEventListener("mouseleave", () => {

    autoSlide = setInterval(() => {

        current++;

        updateSlider();

    },3500);

});


/* ==========================
   SWIPE MOBILE
========================== */

let startX = 0;
let endX = 0;

slidesContainer.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

slidesContainer.addEventListener("touchmove",(e)=>{

endX=e.touches[0].clientX;

});

slidesContainer.addEventListener("touchend",()=>{

if(startX-endX>60){

current++;

updateSlider();

}

if(endX-startX>60){

current--;

if(current<0){

current=cards.length-getVisibleCards();

}

updateSlider();

}

});


/* ==========================
   KEYBOARD
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

current++;

updateSlider();

}

if(e.key==="ArrowLeft"){

current--;

if(current<0){

current=cards.length-getVisibleCards();

}

updateSlider();

}

});