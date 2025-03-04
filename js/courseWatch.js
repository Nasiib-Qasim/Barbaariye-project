const params = new URLSearchParams(window.location.search);
const courseID = params.get('id'); 
let lesson_video = document.querySelector("#introduction_video");
let lesson_video_title = document.querySelector("#lesson_video_title");
let sidebar_lesson = document.querySelector(".side-link");



window.addEventListener("DOMContentLoaded", function () {
    let storedData = JSON.parse(localStorage.getItem("activeCourse")) || [];
    
    if (storedData) {
        const foundCourse = storedData.find(course => course.course.courseId === courseID);
        console.log(foundCourse);
        if(foundCourse){
        lesson_video.src =  `https://www.youtube.com/embed/${foundCourse.course.trailer_video}`;
        lesson_video_title.textContent = foundCourse.course.title;
        foundCourse.course.lessons.forEach(lesson => {
            let lessons =  document.createElement("div");
            lessons.classList = "myDashboard";
            lessons.innerHTML = `
            <div class="lessonLink" videoId="${lesson.videoId}" title="${lesson.title}"  onclick="lessonWatch(this)">
            <i class="fa-solid fa-circle-play"></i>
            <p id="lesson_title" >${lesson.title}</p>
            <p id="duration">${lesson.lengthText}</p>
            </div>
            `
        sidebar_lesson.appendChild(lessons);
        });
    }
    }
});

function lessonWatch(titleVideo){
    if(titleVideo){
        let videoId = titleVideo.getAttribute("videoId");
        let title = titleVideo.getAttribute("title");
        lesson_video.src =  `https://www.youtube.com/embed/${videoId}`;
        lesson_video_title.textContent = title;
    }
}
