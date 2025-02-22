const burger = document.querySelector('.header-box-burger')
const nav = document.querySelector('.header-box-nav')
const lineBurger = document.querySelector('.header-box-burger-line2')

burger.addEventListener('click',()=>{
  const check = nav.classList.contains('hidden')
  if (check == true) {
    nav.classList.replace('hidden', 'visible')
    lineBurger.classList.replace('close','open')
  }else{
    nav.classList.replace('visible', 'hidden')
    lineBurger.classList.replace('open','close')   
  }
})









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