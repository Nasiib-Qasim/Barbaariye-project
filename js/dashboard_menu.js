let navbar = document.querySelector(".dashboard");

let toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
})



// profile model

const login_change  = document.querySelector("#login");

const sing_btn = document.querySelector("#sing-btn");

let show_prifile = document.querySelector(".profile-view");
let profile_model = document.querySelector(".profile-model");
let profile_face = document.querySelector("#profile-face");
let gmailName= document.querySelector("#gmailName");
let gmail = document.querySelector("#gmail");
let email_leter = document.querySelector(".email-leter"); 
let profile_letter = document.querySelector(".profile_letter"); 
let logout_title = document.querySelector("#logout-title"); 
let logout_desc = document.querySelector("#logout-desc"); 
let logout_box = document.querySelector("#logout"); 
let logout_icon = logout_box.querySelector("i"); 


let profile_view = false;
window.addEventListener("DOMContentLoaded",()=>{
    const user = JSON.parse(localStorage.getItem("onlineUser"));
    if(user){
        show_prifile.style.display ="flex";

        const email = user.email; 
        const firstChar = email.charAt(0);
        email_leter.textContent = `${firstChar}U`;
        email_leter.style.textTransform ="uppercase";

        show_prifile.addEventListener("click",()=>{
            
            if(profile_model.style.display ==="block"){
                profile_model.style.display ="none";
                profile_view = false;
            }else{
                profile_view = true;
                profile_model.style.display ="block";
                const email = user.email; 
                const firstChar = email.charAt(0);
                profile_letter.textContent = `${firstChar}U`;
                profile_letter.style.textTransform ="uppercase";
                const username = user.username; 
                gmailName.textContent = `${username} User`;
                gmail.textContent = email;
                logout_title.style.color="red";
                logout_icon.style.color="red";
            }
           
        })
        logout_box.addEventListener("click",()=>{
            localStorage.removeItem("onlineUser");
            sing_btn.style.display ="flex";
            show_prifile.style.display ="none";
            profile_model.style.display ="none";
            profile_view = false;
        })
    }else{
        sing_btn.style.display ="block";
        show_prifile.style.display ="none";
    }
})


window.addEventListener("click", function (e) {
    if (profile_view && !show_prifile.contains(e.target) && !profile_model.contains(e.target)) {
        profile_model.style.display = "none";
        profile_view = false;
    }
});
