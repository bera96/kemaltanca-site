// Nav Toggle

const list=document.querySelector(".header-menu")
const navToggle=document.querySelector(".nav-toggle")



navToggle.addEventListener("click",function(){


    list.classList.toggle("show-links")


})


// Scroll To Top

const scrollTop=document.querySelector(".scrolltop")

scrollTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"

    });
})

// Fixed NavBar

const navbar=document.getElementById("header-container")


window.addEventListener("scroll",function(){

    const scrollHeight=window.pageYOffset
  

    const navHeight=navbar.getBoundingClientRect().height
    

    if(scrollHeight>150){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }






})

