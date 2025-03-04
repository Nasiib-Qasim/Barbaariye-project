let scroll_menu = document.querySelector(".header");


window.addEventListener("scroll",function(){
    if(this.scrollY > 200){
        scroll_menu.classList.add("menuFixed");
    }else{
        scroll_menu.classList.remove("menuFixed");
    }
})





let navbar = document.querySelector(".navbar");

let toggleBtn = document.querySelector(".toggle-btn");
window.addEventListener("DOMContentLoaded",function(){
    navbar.classList.remove("active"); 
    toggleBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
})
})


window.addEventListener("click", function (e) {
    if (navbar.classList.contains("active") && !navbar.contains(e.target) && !toggleBtn.contains(e.target)) {
        navbar.classList.remove("active"); 
    }
  
});

