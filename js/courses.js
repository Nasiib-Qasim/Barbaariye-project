let course_display = document.querySelector(".course-boxs");

window.addEventListener("DOMContentLoaded", fetchdata);


async function fetchdata(){
    let url = "./jsonFile/course.json";
    try{
    let response = await fetch(url);
    let getdatafromlocal = await response.json()
    // console.log(data)
    let data = JSON.parse(localStorage.getItem("courses")) || (function() {
        let defaultData = getdatafromlocal;
        localStorage.setItem("courses", JSON.stringify(defaultData));
        return defaultData;
        })();
    displayVideo(getdatafromlocal);
    }catch(error){
        console.log(error)
    }

}




function displayVideo(videos){
    videos.forEach((video , index) => {
        if(index > 6){
           return
        }
        let course_box = document.createElement("div");
        course_box.className = "course-box";
        course_box.innerHTML =`
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
                    <button class="enroll-btn" courseid="${video.courseId}"  onclick="OpenEnroll(this)"><i class="fa-solid fa-cart-shopping"></i> Enroll course</button>
                </div>
            </div>
        `
            course_display.appendChild(course_box)
    });
}



function OpenEnroll(button){
    let course = button.getAttribute("courseid");
    let data = JSON.parse(localStorage.getItem("courses")) || [];
    let courseData = data.find(item => item.courseId === course);
    console.log(courseData);
    if(courseData){
        localStorage.setItem("courseEnroll", JSON.stringify(courseData));
         window.location.href =  "courseEnroll.html";
    }
}
















/// diploma


// [
//     {
//         "title": "Barashada Web Develoment",
//         "description": "waxaan ku diyaarinay course web development oo dhameestiran ",
//         "author": "https://yt3.ggpht.com/Oo0GFDQojaEmykcWy9JwG5MOIl8DJupxhOe24n4QtZ45E5cc4YJzT5g4zfJvxUceSV-6KpZa=s176-c-k-c0x00ffffff-no-rj",
//         "teacher": "Omar Tood",
//         "price": "99",
//         "trailer_video": "DmGUuqlNtb4",
//         "thumbnail": "https://i.ytimg.com/vi/TXKI8rXmGuU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD77W6NeIllMOqAYwXPPo9DzPtbqA",
//         "lessons": [
//           {
//             "videoId": "TXKI8rXmGuU",
//             "title": "HTML CRASH COURSE FOR BEGINERS🎯 | JSUT IN TWO HOURS | SOMALI COURSE🔥",
//             "index": "1",
//             "lengthSeconds": "8766",
//             "lengthText": "2:26:06",
//             "thumbnail": "https://i.ytimg.com/vi/TXKI8rXmGuU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD77W6NeIllMOqAYwXPPo9DzPtbqA"
//           },
//           {
//             "videoId": "sT6YmjVLd7c",
//             "title": "Beginner CSS Af-Soomaali | Somali CSS Part One💥🔥",
//             "index": "2",
//             "lengthSeconds": "8863",
//             "lengthText": "2:27:43",
//             "thumbnail": "https://i.ytimg.com/vi/sT6YmjVLd7c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuhXGx1BUCvPNlaVIga29A8eFQ_w"
//           },
//           {
//             "videoId": "WDIGbO01zdw",
//             "title": "Baro Css Advanced Part-Two| Af-Soomaali 👌🧠📢",
//             "index": "3",
//             "lengthSeconds": "9690",
//             "lengthText": "2:41:30",
//             "thumbnail": "https://i.ytimg.com/vi/WDIGbO01zdw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABPAVatPMR8-BIED3DkeNfE3-9yQ"
//           },
//           {
//             "videoId": "YKybdVlluMU",
//             "title": "Baro JavaScript Bilow Ilaa Dhamaad | Somali JS Course",
//             "index": "4",
//             "lengthSeconds": "36052",
//             "lengthText": "10:00:52",
//             "thumbnail": "https://i.ytimg.com/vi/YKybdVlluMU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYJpcgUFq_1YYTTjPu_N_LaUMolQ"
//           }
//         ]
//       }
// ]
