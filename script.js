/* =====================================
   BRIGHT FUTURE PUBLIC SCHOOL
   PREMIUM WEBSITE SCRIPT
===================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 1000);

});

/* ==========================
   MOBILE MENU
========================== */

const hamburger =
document.getElementById("hamburger");

const navMenu =
document.getElementById("nav-menu");

if(hamburger){

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});

}

/* ==========================
   CLOSE MENU ON LINK CLICK
========================== */

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

if(navMenu){

navMenu.classList.remove("active");

}

});

});

/* ==========================
   STICKY HEADER
========================== */

const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter-number");

let counterStarted = false;

function runCounters(){

counters.forEach(counter => {

const target =
parseInt(counter.getAttribute("data-target"));

let count = 0;

const increment =
Math.ceil(target / 120);

const updateCounter = () => {

count += increment;

if(count < target){

counter.innerText = count;

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});

}

window.addEventListener("scroll", () => {

const counterSection =
document.querySelector(".counters");

if(!counterSection) return;

const position =
counterSection.getBoundingClientRect().top;

if(position < window.innerHeight - 100
&& !counterStarted){

runCounters();

counterStarted = true;

}

});

/* ==========================
   SCROLL REVEAL
========================== */

function revealElements(){

const reveals =
document.querySelectorAll(
".highlight-card, .academic-card, .faculty-card, .facility-card, .achievement-card, .notice-card, .testimonial-card"
);

reveals.forEach(item => {

const windowHeight =
window.innerHeight;

const revealTop =
item.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

item.classList.add("active");

item.style.opacity = "1";

item.style.transform =
"translateY(0)";

}else{

item.style.opacity = "0";

item.style.transform =
"translateY(40px)";

}

});

}

window.addEventListener(
"scroll",
revealElements
);

window.addEventListener(
"load",
revealElements
);

/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryItems =
document.querySelectorAll(
".gallery-item img"
);

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeLightbox =
document.querySelector(".lightbox-close");

galleryItems.forEach(img => {

img.addEventListener("click", () => {

lightbox.classList.add("active");

lightboxImage.src = img.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener(
"click",
() => {

lightbox.classList.remove("active");

}
);

}

if(lightbox){

lightbox.addEventListener("click", e => {

if(e.target === lightbox){

lightbox.classList.remove("active");

}

});

}

/* ==========================
   SCROLL TO TOP
========================== */

const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

if(scrollTopBtn){

scrollTopBtn.addEventListener(
"click",
() => {

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);

}

/* ==========================
   FORM SUBMISSION
========================== */

const forms =
document.querySelectorAll("form");

forms.forEach(form => {

form.addEventListener("submit", e => {

e.preventDefault();

alert(
"Thank you! Your information has been submitted successfully."
);

form.reset();

});

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 120;

const sectionHeight =
section.offsetHeight;

if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("nav-active");

if(
link.getAttribute("href") ===
"#" + current
){

link.classList.add("nav-active");

}

});

});

/* ==========================
   HERO PARALLAX
========================== */

window.addEventListener("scroll", () => {

const hero =
document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY =
window.scrollY * 0.5 + "px";

}

});

/* ==========================
   SIMPLE PAGE FADE-IN
========================== */

document.body.style.opacity = "0";

window.addEventListener("load", () => {

document.body.style.transition =
"opacity .8s ease";

document.body.style.opacity = "1";

});

console.log(
"Bright Future Public School Website Loaded Successfully"
);