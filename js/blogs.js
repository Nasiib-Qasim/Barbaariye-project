let  blog_display = document.querySelector(".blogs-boxs");

window.addEventListener("DOMContentLoaded",fetchdata);

async function fetchdata() {
 try{
    let url = "./jsonFile/blogs.json"
    let response  = await fetch(url);
    let data = await response.json();
    localStorage.setItem("post", JSON.stringify(data));
    displayPost(data);
 }catch(error){
    console.error("error fetch",error);
 }
}




function displayPost(posts){
    if(!posts){
        alert("network fieled")
        return
    }
    posts.forEach((post) => {
        let blog_box = document.createElement("div");
        blog_box.classList = "blog-box";
        blog_box.innerHTML =` 
         <div class="blogs-thumnial">
                        <img src="${post.image}" alt="" id="themnail">
                        </div>
                        <div class="post-text">
                            
                            <div class="category">
                                <p>${post.category}</p>
                                <p><i class="fa-regular fa-clock"></i>  ${post.read_time}</p>
                            </div>
                            <div class="blog-postText">
                                 <h2 id="title">${post.title}</h2>
                            <p id="excerpt">${post.excerpt}</p>
                            </div>
                           
                            <div class="author">
                                <img src="${post.author_image}" alt="">
                                <div class="author-box">
                                    <h4>${post.author}</h4>
                                    <p><i class="fa-solid fa-calendar"></i> ${post.date}</p>
                                </div>

                            </div>
                        </div>
        `
        blog_display.appendChild(blog_box);
        blog_box.addEventListener("click",function(){
            postPage(post.id);
        })
    })
}


function postPage(id){
   window.location.href = `./postRead.html?id=${id}`;
}
