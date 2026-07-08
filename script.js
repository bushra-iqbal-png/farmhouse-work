


/*==========================
      MOBILE MENU
===========================*/

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

menu.onclick = () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

};


/* Close Menu After Clicking Link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});



/*==========================
      STICKY HEADER
===========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0b3d1f";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});



/*==========================
      SCROLL TO TOP
===========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



/*==========================
     ACTIVE NAVIGATION
===========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



/*==========================
      COUNTER ANIMATION
===========================*/

const counters = document.querySelectorAll(".count");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const value = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (value < target) {

                counter.innerText = value + increment;

                setTimeout(updateCounter, 15);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (
        counterSection &&
        window.scrollY >
            counterSection.offsetTop - window.innerHeight + 100 &&
        !counterStarted
    ) {
        counterStarted = true;
        startCounter();
    }

});

/*=========================================
      AL JANNAT FARMHOUSE
        JAVASCRIPT PART 2
==========================================*/


/*==========================
      SCROLL REVEAL
===========================*/

const revealElements = document.querySelectorAll(

".about, .why-choose, .facilities, .events, .counter, .packages, .gallery, .booking, .testimonials, .faq, .newsletter, .contact"

);

function revealSection(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

window.addEventListener("load", revealSection);



/*==========================
      IMAGE HOVER EFFECT
===========================*/

const galleryImages = document.querySelectorAll(".gallery-box img");

galleryImages.forEach((image)=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.12)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});



/*==========================
      FAQ ACCORDION
===========================*/

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((box)=>{

    const answer = box.querySelector("p");

    answer.style.display="none";

    box.style.cursor="pointer";

    box.addEventListener("click",()=>{

        const isOpen = answer.style.display==="block";

        document.querySelectorAll(".faq-box p").forEach((item)=>{

            item.style.display="none";

        });

        if(!isOpen){

            answer.style.display="block";

        }

    });

});



/*==========================
      NEWSLETTER FORM
===========================*/

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thank You For Subscribing To AL JANNAT FARMHOUSE!");

newsletterForm.reset();

});

}



/*==========================
      CONTACT FORM
===========================*/

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Your message has been sent successfully!");

contactForm.reset();

});

}



/*==========================
      BUTTON RIPPLE EFFECT
===========================*/

const buttons=document.querySelectorAll(

".btn1,.btn2,.book-btn,.package-btn,.booking-btn,.about-btn"

);

buttons.forEach((button)=>{

button.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.offsetX-radius}px`;

circle.style.top=`${e.offsetY-radius}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});



/*==========================
      LOADING ANIMATION
===========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});



/*==========================
      CURRENT YEAR
===========================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}



/*==========================
      CONSOLE MESSAGE
===========================*/

console.log("🌴 AL JANNAT FARMHOUSE WEBSITE");
console.log("Designed with HTML, CSS & JavaScript");
console.log("Responsive | Modern | Interactive");

/*=========================
      BOOKING POPUP
==========================*/

const popup=document.getElementById("bookingPopup");

const openBtns=document.querySelectorAll(".openBooking");

const closePopup=document.querySelector(".close-popup");

openBtns.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

popup.classList.add("active");

});

});

closePopup.addEventListener("click",()=>{

popup.classList.remove("active");

});

window.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("active");

}

});


/* Booking Form */

const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Your Booking Request Has Been Submitted Successfully!");

bookingForm.reset();

popup.classList.remove("active");

});