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

});