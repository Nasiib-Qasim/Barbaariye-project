
let course_title = document.querySelector("#course-title");
let course_desc = document.querySelector("#course-desc");
let course_trailer = document.querySelector("#course-video-trailer");
let contact_video_title = document.querySelector("#contact-video-title");
let course_video_contact= document.querySelector("#course-video-contact");
let course_description= document.querySelector("#course-description");
let enroll_themnial= document.querySelector("#enroll-themnial");
let Duration= document.querySelector("#Duration");
let course_fee= document.querySelector("#course-fee");
let Enroll_btn= document.querySelector(".Enroll-now");
let course_title_input= document.querySelector("#course-title-input");
let Email= document.querySelector("#Email");
let enroll_form= document.querySelector("#enroll_form");
let firstName= document.querySelector("#FirstName");
let lastName= document.querySelector("#lastName");
let number_fee= document.querySelector("#number-fee");
let kind_card= document.querySelector("#kind_card");
let error = document.querySelector("#error");
let payment_enroll = document.querySelector(".payment-enroll");
let model_enroll = document.querySelector(".enroll-model");
let close_icon = model_enroll.querySelector("i");


console.log(close_icon);


window.addEventListener("DOMContentLoaded",function(){
    let courseEnroll_active = JSON.parse(localStorage.getItem("courseEnroll"));
    if(courseEnroll_active){
        course_title.textContent = courseEnroll_active.title;
        course_desc.textContent = courseEnroll_active.description;
        const videoUrl = `https://www.youtube.com/embed/${courseEnroll_active.trailer_video}`;
        course_trailer.src = videoUrl;
        contact_video_title.textContent = courseEnroll_active.title;
        course_video_contact.src =  `https://www.youtube.com/embed/${courseEnroll_active.trailer_video}`;
        course_description.textContent = courseEnroll_active.description;
        let lessons = courseEnroll_active.lessons;


        let totalSeconds = 0;
        let course_contact_box = document.querySelector(".course-contact-box");
        course_contact_box.innerHTML = ""; 
        if(Array.isArray(lessons)){
            lessons.forEach(lesson => {
                let timeParts = lesson.lengthText.split(":").map(num => parseInt(num, 10));
                
                while (timeParts.length < 3) {
                    timeParts.unshift(0);
                }

                let [hours, minutes, seconds] = timeParts;
                let lessonSeconds = (hours * 3600) + (minutes * 60) + seconds;
                totalSeconds += lessonSeconds;

            
                let course_contact_box = document.querySelector(".course-contact-box");
                let box_contact_info = document.createElement("div");
                box_contact_info.className = "box-contact-info";
                box_contact_info.innerHTML = `
                 <i class="fa-solid fa-play"></i>
                            <p id="lesson">${lesson.title}</p>
                `
                course_contact_box.appendChild(box_contact_info);
            });
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            let totalDurationText = `${hours.toString().padStart(2)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            Duration.textContent = `${totalDurationText} Hours`;
        }else{
            let course_contact_box = document.querySelector(".course-contact-box");
            let box_contact_info = document.createElement("div");
            box_contact_info.className = "box-contact-info";
            box_contact_info.innerHTML = `
             <i class="fa-solid fa-play"></i>
                        <p id="lesson">${lessons.title}</p>
            `
            course_contact_box.appendChild(box_contact_info);
            Duration.textContent = `${lessons.lengthText} Hours`;
           
        }
        course_fee.textContent = `$${courseEnroll_active.price}`;
        enroll_themnial.src = courseEnroll_active.thumbnail;
        
    }
})








// enroll box 


let scroll_enroll = document.querySelector(".enroll-box");
let course_contact = document.querySelector(".course-contact");

window.addEventListener("scroll", function () {
    let course_contact_bottom = course_contact.offsetTop + course_contact.offsetHeight;
    let scroll_position = window.scrollY + window.innerHeight;

    if (window.scrollY > 250 && scroll_position < course_contact_bottom) {
        scroll_enroll.classList.add("enroll-fixed");
    } else {
        scroll_enroll.classList.remove("enroll-fixed");
    }
});






Enroll_btn.addEventListener("click",function(){
    let course_enroll = JSON.parse(localStorage.getItem("courseEnroll"));
    let onlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    
    if(course_enroll){
       payment_enroll.style.display = "flex";
       course_title_input.value = course_enroll.title;
       price.value = `$${course_enroll.price}`;
       if(!onlineUser){
        error.style.display = "block";
        error.textContent = "please make login";
        return
       }
       Email.value = onlineUser.email;
    }
})



enroll_form.addEventListener("submit",function(e){
    e.preventDefault();
    let course_enroll = JSON.parse(localStorage.getItem("courseEnroll"));
    let onlineUser = JSON.parse(localStorage.getItem("onlineUser")) ;
    if(!firstName.value.trim() || !lastName.value.trim() || !number_fee.value.trim()){
        error.style.display ="block";
        error.textContent ="all fields are required";
        return
    }
    if(!kind_card.value){
        error.style.display ="block";
        error.textContent ="";
        error.textContent ="please select number of account";
        return
    }

    if(!onlineUser){
        error.style.display = "block";
        error.textContent = "please make login";
        return
    }
    if (course_enroll) {
        let activeCourses = JSON.parse(localStorage.getItem("activeCourse")) || [];
    
        let newCourse = {
            user: onlineUser.email,
            course: course_enroll
        };
    
    
        const existingCourse = activeCourses.find((course) => 
            course.user === onlineUser.email && course.course.courseId === course_enroll.courseId
        );
    
        if (existingCourse) {
            alert("You have already registered for this course.");
            return;
        }
    
 
        activeCourses.push(newCourse);
        localStorage.setItem("activeCourse", JSON.stringify(activeCourses));
        alert("Course saved successfully!");
    }
    
    error.style.display ="none";
    error.textContent ="";
    payment_enroll.style.display ="none";
})

close_icon.addEventListener("click",function(){
    payment_enroll.style.display ="none";
})


window.addEventListener("click",function(e){
    if(e.target == payment_enroll){
        payment_enroll.style.display ="none";
    }
})

