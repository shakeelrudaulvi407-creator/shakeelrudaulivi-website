// =========================
// Shakeel Rudaulivi Website
// script.js
// =========================

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior:"smooth"
            });

        }

    });
});

// Fade animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";

    observer.observe(section);

});

// Hero title animation
const heroTitle = document.querySelector(".hero h1");

let glow = true;

setInterval(()=>{

    if(glow){

        heroTitle.style.textShadow="0 0 20px gold";

    }else{

        heroTitle.style.textShadow="none";

    }

    glow=!glow;

},1000);

// Button animation
document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// Footer year
const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Shakeel Rudaulivi. All Rights Reserved.`;
document.getElementById("topBtn").onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
