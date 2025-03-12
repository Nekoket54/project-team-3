////////////////////////////// header
const burger = document.querySelector('.header-box-burger')
const nav = document.querySelector('.header-box-nav')
const lineBurger = document.querySelector('.header-box-burger-line2')

burger.addEventListener('click',()=>{
  const check1 = nav.classList.contains('headerHidden')
  if (check1 == true) {
    nav.classList.replace('headerHidden', 'headerVisible')
    lineBurger.classList.replace('close','open')
  }else{
    nav.classList.replace('headerVisible', 'headerHidden')
    lineBurger.classList.replace('open','close')   
  }
})
//////////////////////////////

////////////////////////////// Form of payment 
const btn1 = document.querySelector('.edition-container-box1-box-btn')
const btn2 = document.querySelector('.edition-container-box2-box-btn')
const btn3 = document.querySelector('.edition-container-box3-box-btn')
const btn4 = document.querySelector('.dualSense-container-box1-case-btn')
const FormOfPayment = document.querySelector('.container')
const close = document.querySelector('.container-close')
const sum = document.querySelector('.container-box3-text')
const edition = document.querySelector('.container-name2')

btn1.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '19.99$'
  edition.textContent = 'STANDARD EDTION'
})
btn2.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '18.99$'
  edition.textContent = 'STANDARD EDTION'
})
btn3.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '29.99$'
  edition.textContent = 'DIGITAL DELUXE EDITION'
})
close.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentVisible', 'FormOfPaymentHidden')
})
btn4.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '35.99$'
  edition.textContent = 'DUALSENSE WITH A GAME'
})
close.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentVisible', 'FormOfPaymentHidden')
})
//////////////////////////////

////////////////////////////// validation
let creditCard = document.querySelector('.container-card')
let expire = document.querySelector('.container-box1-case1-expire')
let ccv = document.querySelector('.container-box1-case2-ccv')
let instant = document.querySelector('.container-instant')
let checkbox = document.querySelector('.container-box2-checkbox')
let btnForm = document.querySelector('.container-btn')

creditCard.addEventListener("input", function () {
  if (creditCard.value.length < 19) {
    creditCard.style.border = '2px,solid,#e56464'
    creditCard.classList.replace('verity', 'wrong')
  }else if(creditCard.value.length > 19){
    creditCard.style.border = '2px,solid,#e56464'
    creditCard.classList.replace('verity', 'wrong')
  }else if(creditCard.value.length = 19){
    creditCard.style.border = '2px,solid,rgb(78 181 96)'
    creditCard.classList.replace('wrong', 'verity')
  }
});

expire.addEventListener("input", function () {
  if (expire.value.length < 5) {
    expire.style.border = '2px,solid,#e56464'
    expire.classList.replace('verity', 'wrong')
  }else if(expire.value.length > 5){
    expire.style.border = '2px,solid,#e56464'
    expire.classList.replace('verity', 'wrong')
  }else if(expire.value.length = 5){
    expire.style.border = '2px,solid,rgb(78 181 96)'
    expire.classList.replace('wrong', 'verity')
  }
});

ccv.addEventListener("input", function () {
  if (ccv.value.length < 3) {
    ccv.style.border = '2px,solid,#e56464'
    ccv.classList.replace('verity', 'wrong')
  }else if(ccv.value.length > 3){
    ccv.style.border = '2px,solid,#e56464'
    ccv.classList.replace('verity', 'wrong')
  }else if(ccv.value.length = 3){
    ccv.style.border = '2px,solid,rgb(78 181 96)'
    ccv.classList.replace('wrong', 'verity')
  }
});

instant.addEventListener("input", function () {
  if (instant.value.length < 1) {
    instant.style.border = '2px,solid,#e56464'
    instant.classList.replace('verity', 'wrong')
  }else if(instant.value.length > 1){
    instant.style.border = '2px,solid,rgb(78 181 96)'
    instant.classList.replace('wrong', 'verity')
  }
});

checkbox.addEventListener('click',()=>{
  const check3 = checkbox.classList.contains('wrong')
  console.log(check3);
  if (check3 == true){
    checkbox.classList.replace('wrong','verity')
    checkbox.style.border = '2px,solid,rgb(78 181 96)'
  }else{
    checkbox.classList.replace('verity','wrong')
    checkbox.style.border = '2px,solid,#e56464'
  }
})

btnForm.addEventListener('click',()=>{
  const creditCardCheck = creditCard.classList.contains('wrong')
  const expireCheck = expire.classList.contains('wrong')
  const ccvCheck = ccv.classList.contains('wrong')
  const instantCheck = instant.classList.contains('wrong')
  const checkboxCheck = checkbox.classList.contains('wrong')
  if (creditCardCheck == true && expireCheck == true && ccvCheck == true && instantCheck == true && checkboxCheck == true) {
    alert('Unfortunately you missed one of the points')
  }else if(creditCardCheck == false && expireCheck == false && ccvCheck == false && instantCheck == false && checkboxCheck == false){
    alert(`Thank you for your purchase ${instant.value}!`)
  }else{
    alert('Unfortunately you missed one of the points')
  }
})
//////////////////////////////

////////////////////////////// video
const box = document.querySelector('.video-box')
const btn = document.querySelector('.video-box-btn')

btn.addEventListener('click',()=>{
  box.innerHTML = `
    <iframe width="100%" height="944px" 
      src="https://www.youtube.com/embed/hfJ4Km46A-0?autoplay=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allow="autoplay" 
      allowfullscreen>
    </iframe>
  `
})
////////////////////////////////

//////////////////////////////// Explore the God of War series
const toggle = document.getElementById("toggle");
const leftText = document.getElementById("left");
const rightText = document.getElementById("right");
const cpu = document.querySelector(".toggle-position-props-paragraph-cpu")
const ram = document.querySelector(".toggle-position-props-paragraph-ram")
const os = document.querySelector(".toggle-position-props-paragraph-os")
const videocard = document.querySelector(".toggle-position-props-paragraph-videocard")
const pixel = document.querySelector(".toggle-position-props-paragraph-pixel")
const vertext = document.querySelector(".toggle-position-props-paragraph-vertext")
const freespace = document.querySelector(".toggle-position-props-paragraph-freespace")
const dedicated = document.querySelector(".toggle-position-props-paragraph-dedicated")

toggle.addEventListener("change", function () {
    if (this.checked) {
        leftText.textContent = "Minimum";
        rightText.textContent = "Recommended";
        os.innerHTML =  "<p class='toggle-position-props-paragraph toggle-position-props-paragraph-os'><span class='toggle-position-props-paragraph-span'>OS</span>: Windows 11 64-bit</p>"
        cpu.innerHTML = "<p> <span class='toggle-position-props-paragraph-span'>CPU</span>: AMD Ryzen 3 1200 (4 core 3.1 GHz)</p>";
        videocard.innerHTML = "<p class='toggle-position-props-paragraph toggle-position-props-paragraph-videocard'><span class='toggle-position-props-paragraph-span'>VIDEOCARD</span>: AMD R9 290X (4 GB)</p>"
        dedicated.innerHTML = "<p class='toggle-position-props-paragraph toggle-position-props-paragraph-dedicated'><span class='toggle-position-props-paragraph-span'>DEDICATED VIDEO RAM</span>: 8 GB</p>"
        leftText.style.transition= "0.3s";
        leftText.style.color = "#FFFFFF"; 
        rightText.style.color = "#30373F"; 
        leftText.style.color = "#30373F"; 
        rightText.style.color = "#FFFFFF";
        rightText.style.transition= "0.3s";
    } else {
        leftText.style.color = "#30373F"; 
        rightText.style.color = "#FFFFFF";
        rightText.style.transition= "0.3s";
        os.innerHTML =  "<p class='toggle-position-props-paragraph toggle-position-props-paragraph-os'><span class='toggle-position-props-paragraph-span'>OS</span>: Windows 10 64-bit</p>"
        cpu.innerHTML = "<p> <span class='toggle-position-props-paragraph-span'>CPU</span>: Intel i5-2500k (4 core 3.3 GHz)</p>";
        videocard.innerHTML = "<p class='toggle-position-props-paragraph toggle-position-props-paragraph-videocard'><span class='toggle-position-props-paragraph-span'>VIDEOCARD</span>: NVIDIA GTX 960 (4 GB)</p>"
        dedicated.innerHTML = "<p class='toggle-position-props-paragraph toggle-position-props-paragraph-dedicated'><span class='toggle-position-props-paragraph-span'>DEDICATED VIDEO RAM</span>: 4 GB</p>"
        leftText.style.transition= "0.3s";
        leftText.style.color = "#FFFFFF"; 
        rightText.style.color = "#30373F"; 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("kratos-toggle");
    const limitedLabel = document.querySelector(".kratos-label-right");
    const labeler = document.querySelector(".kratos-label-left");
    const voice = document.querySelector(".toggle-kratos-position-props-paragraph-voice");
    const premiere = document.querySelector(".toggle-kratos-position-props-paragraph-premiere");
    const platform = document.querySelector(".toggle-kratos-position-props-paragraph-platform");

    toggler.addEventListener("change", function () {
        if (toggler.checked) {
            labeler.style.color = "#30373f"
            limitedLabel.style.color = "#FFF";
            platform.innerHTML = "<p class='toggle-kratos-position-props-paragraph toggle-kratos-position-props-paragraph-platform'><span class='toggle-kratos-position-props-paragraph-span'>Platform</span>: PS4, PS5</p>"
            premiere.innerHTML = "<p class='toggle-kratos-position-props-paragraph toggle-kratos-position-props-paragraph-premiere'><span class='toggle-kratos-position-props-paragraph-span'>Premiere</span>: 19.9.1289</p>"
            voice.innerHTML = "<p class='toggle-kratos-position-props-paragraph toggle-kratos-position-props-paragraph-voice'><span class='toggle-kratos-position-props-paragraph-span'>Voice</span>: English, Polish, (not)Russian</p>"
            
        } else {
            labeler.style.color = "#FFF"
            limitedLabel.style.color = "#30373f";
            platform.innerHTML = "<p class='toggle-kratos-position-props-paragraph toggle-kratos-position-props-paragraph-platform'><span class='toggle-kratos-position-props-paragraph-span'>Platform</span>: PS4</p>"
            premiere.innerHTML = "<p class='toggle-kratos-position-props-paragraph toggle-kratos-position-props-paragraph-premiere'><span class='toggle-kratos-position-props-paragraph-span'>Premiere</span>: 20.4.2018</p>"
            voice.innerHTML = "<p class='toggle-kratos-position-props-paragraph toggle-kratos-position-props-paragraph-voice'><span class='toggle-kratos-position-props-paragraph-span'>Voice</span>: English</p>"
        }
    });
});
////////////////////////////////

//////////////////// slider swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  slidesPerView:3,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
//////////////////////

////////////////////// FAQ
const btn5 = document.querySelector('.faq-container-box1-case-btn')
const btn6 = document.querySelector('.faq-container-box2-case-btn')
const text1 = document.querySelector('.faq-container-box1-text')
const text2 = document.querySelector('.faq-container-box2-text')
const spanFaqBtn1 = document.querySelector('.spanFaqBtn1')
const spanFaqBtn2 = document.querySelector('.spanFaqBtn2')
const case1 = document.querySelector('.faq-container-box1-case')
const case2 = document.querySelector('.faq-container-box2-case')

btn5.addEventListener('click',()=>{
  const check2 = text1.classList.contains('faqHidden')
  if (check2 == true){
    text1.classList.replace('faqHidden','faqVisible')
    spanFaqBtn1.style.transform = 'rotate(45deg)'
    case1.style.marginBottom = '13px'
  }else{
    text1.classList.replace('faqVisible','faqHidden')
    spanFaqBtn1.style.transform = 'rotate(0deg)'
    case1.style.marginBottom = '0px'
  }
})

btn6.addEventListener('click',()=>{
  const check2 = text2.classList.contains('faqHidden')
  if (check2 == true){
    text2.classList.replace('faqHidden','faqVisible')
    spanFaqBtn2.style.transform = 'rotate(45deg)'
    case2.style.marginBottom = '13px'
  }else{
    text2.classList.replace('faqVisible','faqHidden')
    spanFaqBtn2.style.transform = 'rotate(0deg)'
    case2.style.marginBottom = '0px'
  }
})
//////////////////////