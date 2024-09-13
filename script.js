var slides=document.querySelectorAll('.slide');

let currentSlide=0;

slides[currentSlide].classList.add('active')

function prev(){
  slides[currentSlide].classList.remove('active')
  currentSlide=(currentSlide-1 + slides.length)%slides.length;
  slides[currentSlide].classList.add('active')
}

function next() {
  slides[currentSlide].classList.remove('active')
  currentSlide=(currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active')
}
setInterval(next,2000)

var a=document.querySelector(".search-overlay")
let change=function(icon){
  icon.style.display="none"
  a.style.visibility="visible";
}

function closeoverlay(){
  a.style.visibility="hidden";
  searchicon=document.getElementById("searchicon")
  searchicon.style.display="block"
}
 var languages=document.querySelector(".languages")
 function openlang(){
 if(languages.style.display==="none"){
  languages.style.display="block";
 }else{
  languages.style.display="none"
 }
 }

const panelhead = document.querySelectorAll(".panel-list-head");
const panelbody = document.querySelectorAll(".panel-list-body");

for (let i = 0; i < panelhead.length; i++) {
    const image = panelhead[i].getElementsByTagName('img')[0];

    image.addEventListener("click", () => {
        const panel = panelbody[i];
        if (panel.style.maxHeight === "0px" || panel.style.maxHeight === "") {
            panel.style.display = "block";
            image.style.transform = "rotate(90deg)"
            panel.style.maxHeight = panel.scrollHeight + "px";
            image.style.backgroundColor="skyblue"
            image.classList.toggle('clicked');
        } else {
            panel.style.maxHeight = "0px";
            image.classList.remove('clicked');
            image.style.backgroundColor="white"
            image.style.transform = "rotate(0deg)"
            setTimeout(() => {
                panel.style.display = "none";
            }, 500);
        }
    });
}

const tslide=document.querySelectorAll(".testimonials-slide")
const tuser=document.querySelectorAll(".testimonials-users .user")
let currentIndex=0
function updateActiveClass(){
  tslide.forEach(slide =>slide.classList.remove("active"))
  tuser.forEach(user =>user.classList.remove("active"))

  tslide[currentIndex].classList.add("active")
  tuser[currentIndex].classList.add("active")

  currentIndex++

  if(currentIndex >= tslide.length){
    currentIndex=0
  }

}
setInterval(updateActiveClass,5000)

const dslide=document.querySelectorAll(".divers-img")
const dbtn=document.querySelectorAll(".radio-btn")
let currentdslide=0
let currentbtn=0
dslide[currentdslide].classList.add("active")
dbtn[currentbtn].classList.add("active")

function first(){
  dslide[currentdslide].classList.remove("active")
  dbtn[currentbtn].classList.remove("active")
  currentdslide=0
  currentbtn=0
  dslide[currentdslide].classList.add("active")
  dbtn[currentbtn].classList.add("active")
}
function second(){
  dslide[currentdslide].classList.remove("active")
  dbtn[currentbtn].classList.remove("active")
  currentdslide=1
  currentbtn=1
  dslide[currentdslide].classList.add("active")
  dbtn[currentbtn].classList.add("active")
}
function third(){
  dslide[currentdslide].classList.remove("active")
  dbtn[currentbtn].classList.remove("active")
  currentdslide=2
  currentbtn=2
  dslide[currentdslide].classList.add("active")
  dbtn[currentbtn].classList.add("active")
}