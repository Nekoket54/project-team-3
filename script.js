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
const btn4 = document.querySelector('.faq-container-box1-case-btn')
const btn5 = document.querySelector('.faq-container-box2-case-btn')
const text1 = document.querySelector('.faq-container-box1-text')
const text2 = document.querySelector('.faq-container-box2-text')
const spanFaqBtn1 = document.querySelector('.spanFaqBtn1')
const spanFaqBtn2 = document.querySelector('.spanFaqBtn2')
const case1 = document.querySelector('.faq-container-box1-case')
const case2 = document.querySelector('.faq-container-box2-case')

btn4.addEventListener('click',()=>{
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

btn5.addEventListener('click',()=>{
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