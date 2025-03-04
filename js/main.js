
// rate counter //
let displaysvalue = document.querySelectorAll(".num");
let rate = document.querySelector("#rate");

let inteval = 2500;

displaysvalue.forEach(displayvalue=>{
    let startValue = 0;
    let EndValue = parseInt(displayvalue.getAttribute("data-val"));
    let duration = Math.floor(inteval / EndValue);
    // console.log(duration)
    let counter = setInterval(function(){
        startValue += 1;
        displayvalue.textContent = `${startValue} +`;
        // console.log(displayvalue);

        if(displayvalue === rate){
            rate.textContent = `${startValue} %`;
        }
        
        if(startValue == EndValue){
            clearInterval(counter);
        }
    },duration);
   
})







const faqs = [
    {
      question: "Sideen iskaga diiwaangelin karaa website-ka?",
      answer:
        "Waxaad isdiiwaangelin kartaa adiga oo bogga hore gujinaya (Sign Up) ama (Register), kadibna buuxinaya macluumaadkaaga sida magacaaga, email-kaaga, iyo eray sir ah. Marka aad dhamayso, guji (Submit) si aad u xaqiijiso akoonkaaga. Kadib, email ayaa laguu soo diri doonaa si aad u xaqiijiso akoonkaaga oo aad si buuxda u isticmaali karto website-ka.",
    },
    {
      question: "Koorsadu ma leedahay waqti go’an oo lagu dhammaystiro?",
      answer:
        "Waxay ku xiran tahay nooca koorsada. Qaar badan waa self-paced, taas oo kuu ogolaanaysa inaad wax ku barato xilliga aad rabto adiga oo aan cadaadis dareemin. Laakiin, koorsooyinka ay bixiyaan jaamacadaha ama barnaamijyada shahaadada bixiya waxay yeelan karaan waqti go’an oo aad ku dhammaystirto.",
    },
    {
        question: "Ma kala soo degi karaa casharrada si aan offline ugu daawado?",
        answer:
          "Koorsooyinka qaar ayaa kuu ogolaanaya inaad kala soo degto si aad u daawato offline, laakiin qaar kale waxay u baahan yihiin internet si toos ah loogu daawado. Haddii aad rabto inaad wax ka barato meel aan internet lahayn, hubi in koorsada aad xiisaynayso ay bixiso fursaddaas.",
      },
      {
        question: "Sideen ula xiriiri karaa macallinka haddii aan su’aal qabto?",
        answer:
          "Waxaad ula xiriiri kartaa macallinka adiga oo adeegsanaya qaybta fariimaha ee website-ka, email haddii uu bixiyo, ama aad su’aashaada ku qorto faallooyinka hoos uga qoran casharka.",
      },
      {
        question: "Koorsada markaan dhameeyo, ma helayaa shahaado?",
        answer:
          "Haa, inta badan koorsooyinka waxay bixiyaan Certificate of Completion, taasoo caddaynaysa inaad si rasmi ah u dhammaysay koorsada. Shahaadadan waxaa lagugu siin karaa PDF ahaan ama waxaad si toos ah ugu dari kartaa LinkedIn profile-kaaga.",
      },
  ];



let frequently_box = document.querySelector(".frequently-box");

faqs.forEach((faq)=>{
    let faq_item = document.createElement("div");
    faq_item.classList.add("faq-item");
    faq_item.innerHTML =`
        <h3 class="faq-question">${faq.question}</h3>
        <p class="faq-answer" style="display: none;">${faq.answer}</p>
    `
    const faq_question =faq_item.querySelector(".faq-question");

    faq_question.addEventListener("click",function(){
        let faq_answer  = document.querySelectorAll(".faq-answer");
        faq_answer.forEach((answer)=>{
            answer.style.display = "none";
        })
        faq_item.querySelector(".faq-answer").style.display ="block";
    })
    frequently_box.appendChild(faq_item);
})





