/* ==========================================
   AOS
========================================== */

AOS.init({
    duration:1000,
    once:true
});


/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/* ==========================================
   TYPING EFFECT
========================================== */

const typingText = document.querySelector(".typing");

const words = [

    "AI Engineer",
    "Java Developer",
    "Problem Solver",
    "Competitive Programmer",
    "CSE Student"

];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0,letterIndex+1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            isDeleting = true;

            setTimeout(type,1500);

            return;

        }

    }else{

        typingText.textContent =
        currentWord.substring(0,letterIndex-1);

        letterIndex--;

        if(letterIndex===0){

            isDeleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(type,isDeleting?60:120);

}

type();


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   HEADER SHADOW
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.08)";

    }

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn=document.createElement("div");

scrollBtn.classList.add("scrollTop");

scrollBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        scrollBtn.classList.add("active");

    }else{

        scrollBtn.classList.remove("active");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   FADE ANIMATION
========================================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.skill-box,.about-container,.contact-box")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const heroImage=document.querySelector(".hero-image img");

heroImage.addEventListener("mousemove",()=>{

    heroImage.style.transform="scale(1.05) rotate(2deg)";

});

heroImage.addEventListener("mouseleave",()=>{

    heroImage.style.transform="scale(1) rotate(0deg)";

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cWelcome to MD. Sadman Al Snikdha's Portfolio!",
"color:#00c6ff;font-size:18px;font-weight:bold;");