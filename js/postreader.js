const params = new URLSearchParams(window.location.search);
const postID = params.get('id'); 


let hero_img = document.querySelector(".hero-blog");
let post_title = document.querySelector("#post-title");
let desc_hero = document.querySelector("#desc-hero");
let author_img = document.querySelector("#author-img");
let author_name = document.querySelector("#author-name");
let date = document.querySelector("#date");
let post_display =  document.querySelector(".post-reader");
let themnail_post =  document.querySelector("#themnail-post");
let header_one =  document.querySelector("#header-one");




window.addEventListener("DOMContentLoaded", function () {
    let storedPost = JSON.parse(localStorage.getItem("post")) || [];
    console.log(storedPost)
    if (storedPost) {
        const foundPost = storedPost.find(post => post.id == postID);
        if(foundPost){
            hero_img.style.backgroundImage = `linear-gradient(to  right, rgba(20, 29, 40, 0.9) 30%, rgba(20, 29, 40, 0) 80%), linear-gradient(to top, rgba(20, 29, 40, 0.9) 30%, rgba(20, 29, 40, 0) 50%), 
            url("${foundPost.image}") `;
            post_title.textContent = foundPost.title;
            desc_hero.textContent = foundPost.excerpt;
            author_img.src = foundPost.author_image;
            author_name.textContent = foundPost.author;
            date.innerHTML = `<i class="fa-solid fa-calendar"></i> ${foundPost.date}`;
            header_one.textContent = foundPost.title;
            themnail_post.src = foundPost.image;

            
            foundPost.content.forEach(post => {
                let text_post =  document.createElement("div");
                text_post.classList = "post-info";
                text_post.innerHTML = (post.heading === foundPost.title) 
                ? `<p id="desc-one">${post.text}</p>` 
                : `<h1 id="header-one">${post.heading}</h1> 
                 <p id="desc-one">${post.text}</p>`;
            post_display.appendChild(text_post);
            });
        }
    }
});