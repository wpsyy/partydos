/* ==========================================
   PARTTYDOS PROFILE
   script.js
========================================== */

/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 3000);

});


/* ==========================
   NAVBAR SCROLL
========================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.92)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";
        nav.style.padding = "18px 8%";

    } else {

        nav.style.background = "rgba(0,0,0,.25)";
        nav.style.boxShadow = "none";
        nav.style.padding = "22px 8%";

    }

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".item, .card, .gallery img, .hero-content, footer"
);

function reveal() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

reveal();

window.addEventListener("scroll", reveal);


/* ==========================
   DEFAULT STATE
========================== */

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = ".8s";

});


/* ==========================
   PORTFOLIO LIGHTBOX
========================== */

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
<img id="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("show");
        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


/* ==========================
   SCROLL TO TOP
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("active");

    } else {

        topBtn.classList.remove("active");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


/* ==========================
   HERO PARALLAX
========================== */

const hero = document.querySelector(".hero video");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    hero.style.transform =
    `translateY(${value * 0.25}px) scale(1.1)`;

});


/* ==========================
   HOVER CARD EFFECT
========================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(139,0,0,.35),
#111 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#111";

});

});


/* ==========================
   GALLERY HOVER
========================== */

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.filter="brightness(110%)";

});

image.addEventListener("mouseleave",()=>{

image.style.filter="brightness(100%)";

});

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%cPARTTYDOS",
"font-size:40px;color:red;font-weight:bold;");

console.log("There is no glory in chaos.");


/* ==========================================
   END
========================================== */