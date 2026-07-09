// =========================
// Shakeel Rudaulivi Website
// script.js
// =========================

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

const target=this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

const section=document.querySelector(target);

if(section){

section.scrollIntoView({
behavior:"smooth"
});

}

}

});

});

// Scroll Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="all .8s ease";

observer.observe(section);

});

// Hero Glow

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

let glow=true;

setInterval(()=>{

heroTitle.style.textShadow=glow
? "0 0 25px rgba(212,175,55,.7)"
: "none";

glow=!glow;

},1000);

}

// Button Hover

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

// Back To Top

const topBtn=document.getElementById("topBtn");

if(topBtn){

topBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

// Footer Year

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=
`© ${new Date().getFullYear()} Shakeel Rudaulivi. All Rights Reserved.`;

}

