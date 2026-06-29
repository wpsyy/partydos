<<<<<<< HEAD
const slides = document.querySelector(".slides");
const cards = document.querySelectorAll(".card");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let page = 0;

const gap = 30;

function perPage(){

    return window.innerWidth <= 768 ? 1 : 3;

}

function update(){

    const width = cards[0].offsetWidth + gap;

    slides.style.transform =
        `translateX(-${page * width * perPage()}px)`;

}

function maxPage(){

    return Math.ceil(cards.length / perPage()) - 1;

}

next.onclick = ()=>{

    page++;

    if(page > maxPage()) page = 0;

    update();

}

prev.onclick = ()=>{

    page--;

    if(page < 0) page = maxPage();

    update();

}

window.addEventListener("resize",update);

update();

/* AUTOPLAY */

let auto = setInterval(()=>{

    next.click();

},4000);

/* PAUSE */

document.querySelector(".slider")
.addEventListener("mouseenter",()=>{

clearInterval(auto);

});

document.querySelector(".slider")
.addEventListener("mouseleave",()=>{

auto=setInterval(()=>{

next.click();

},4000);

});

/* SWIPE */

let startX=0;

slides.addEventListener("touchstart",e=>{

startX=e.touches[0].clientX;

});

slides.addEventListener("touchend",e=>{

const endX=e.changedTouches[0].clientX;

if(startX-endX>50) next.click();

if(endX-startX>50) prev.click();

=======
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

>>>>>>> f9ed47bdf0ffa07dc6185b2481e5d5feef12385b
});