////////////////////////////// header
const burger = document.querySelector('.header-box-burger')
const nav = document.querySelector('.header-box-nav')
const lineBurger = document.querySelector('.header-box-burger-line2')

burger.addEventListener('click',()=>{
  const check = nav.classList.contains('headerHidden')
  if (check == true) {
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

btn1.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '19.99$'
})
btn2.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '18.99$'
})
btn3.addEventListener('click',()=>{
  FormOfPayment.classList.replace('FormOfPaymentHidden', 'FormOfPaymentVisible')
  sum.textContent = '29.99$'
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
    <iframe width="1920px" height="944px" 
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