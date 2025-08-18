AOS.init({
    duration: 1000,
    once: true
  });


let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick=()=>{
    document.querySelector('.login-form-container').classList.toggle('active'); 
    document.querySelector('.navbar').classList.remove('active');
}

document.querySelector('#close-login-form').onclick=()=>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll=function(){
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload=function(){
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });