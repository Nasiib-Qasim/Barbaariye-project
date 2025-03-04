let diploma_display = document.querySelector(".diploma-boxs");

window.addEventListener("DOMContentLoaded", fetchdata);


async function fetchdata(){
    // const url = 'https://youtube-v3-alternative.p.rapidapi.com/playlist?id=PL7usCIRV1hCNR7OGvw9UT1H-0hotyYNGu';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': 'ac6e60766bmshd41c1a85dc2dfd0p1de5c4jsncb18fa3ea5cb',
    //         'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
    //     }
        
    // };
    let url = "js/diploma.json";
    try{
    let response = await fetch(url);
    let data = await response.json()
    // console.log(data)
    displaydiploma(data);
    }catch(error){
        console.log(error)
    }

}



function displaydiploma(videos){
    videos.forEach((video , index) => {
        if(index > 5){
           return
        }
        let diploma_box = document.createElement("div");
        diploma_box.className = "diploma-box";
        diploma_box.innerHTML =`
           <div class="top-boxCourse">
                        <div class="img">
                            <img src="${video.thumbnail}" alt="" id="themnail">
                           </div>
                           <div class="rating">
                            <i class="fa-regular fa-star"></i>
                            <span id="rate-number">5</span>
                        </div>
                        <div class="hourses">
                            <i class="fa-regular fa-clock"></i>
                            <span>10:00</span>
                        </div>
                    </div>


                <div class="course-content">
                    <div class="description">
                        <p class="course-title"> ${video.title}</p>
                    </div>
                    <div class="author">
                        <img src="${video.author}" alt="" class="author-img">
                        <p class="author-name"><span>by</span> ${video.teacher}</p>
                    </div>
                </div>


                <div class="payment-box">
                <div class="line">
    
                </div>
                <div class="payment">
                    <strong class="payment-course">$${video.price}</strong>
                    <button class="enroll-btn"><i class="fa-solid fa-cart-shopping"></i> Enroll course</button>
                </div>
            </div>
        `
            diploma_display.appendChild(diploma_box);
    });
}



