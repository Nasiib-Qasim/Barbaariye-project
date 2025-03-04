let active_course = document.querySelector(".active_course");

window.addEventListener("DOMContentLoaded", function () {
    let userActive_course = JSON.parse(localStorage.getItem("activeCourse")) || []; 

    let userOnline = JSON.parse(localStorage.getItem("onlineUser"));

    if (userOnline) {
        let userCourses = userActive_course.filter((item) => item.user === userOnline.email);

        if (userCourses.length > 0) {
            userCourses.forEach((item) => {
                let course = item.course; 
                
                let course_active_box = document.createElement("div");
                course_active_box.classList = "course-active_box";
                course_active_box.innerHTML = `
                    <img src="${course.thumbnail}" alt="Course Thumbnail">
                    <div class="course_active_info">
                        <div class="course_active_rate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5 id="course_active_title">${course.title}</h5>
                        <p class="total_lessons">Total Lessons: <span id="total_lessons">${course.lessons.length}</span></p>
                        <p id="description">${course.description}</p>
                        <button id="watch-now" onclick="watchNow(${course.courseId})">Watch Now</button>
                    </div>`;
                active_course.appendChild(course_active_box);
            });
        }
    }
});



function watchNow(id){
    let courseID = Number(id);
    window.location.href = `./course_watch.html?id=${courseID}`
}

