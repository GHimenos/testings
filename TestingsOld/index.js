let sliders = { 
                slider1: {
                    sliderNo:1,
                    slider: document.querySelector(".b-wrapper_photo1"),
                    reset: document.querySelector(".b-wrapper_photo1").innerHTML,
                    slides: document.querySelectorAll(".bw-photo__image1"),
                    iterator: document.querySelectorAll(".bw-photo__image1").length,
                    startFrom:2
                }, 

                slider2: {
                    sliderNo:2,
                    slider: document.querySelector(".b-wrapper_photo2"),
                    reset: document.querySelector(".b-wrapper_photo2").innerHTML,
                    slides: document.querySelectorAll(".bw-photo__image2"),
                    iterator: document.querySelectorAll(".bw-photo__image2").length,
                    startFrom:1

                }
            };

  let{slider1, slider2}=sliders;  

slideRotate(slider1.startFrom, slider1.slides, slider1.iterator, slider1.slider, slider1.reset, slider1.sliderNo);//!аргументы
slideRotate(slider2.startFrom, slider2.slides, slider2.iterator, slider2.slider, slider2.reset, slider2.sliderNo);//!аргументы


function slideRotate(pos, slds, iter, sldr, res, sliderNo) {//!аргументы
  let onStart = 0;
  let position = pos;
  let curSlide = slds[position];
  let preSlide = slds[position - 1];

  if (!preSlide && position < iter) {
    curSlide.classList.toggle("bw-photo-inactive");
    position += 1;
    setTimeout(() => {
      slideRotate(position, slds, iter, sldr, res, sliderNo);//!аргументы
    }, 7000);
  } else if (preSlide && position < iter) {
    preSlide.classList.toggle("bw-photo-inactive");
    curSlide.classList.toggle("bw-photo-inactive");
    position += 1;
    setTimeout(() => {
      slideRotate(position, slds, iter, sldr, res, sliderNo);//!аргументы
    }, 7000);
  } else {
    position = onStart;
    sldr.innerHTML = res;
    slds = document.querySelectorAll(`.bw-photo__image${sliderNo}`);
    slideRotate(position, slds, iter, sldr, res, sliderNo);//!аргументы
  }
}

//?===================================================== Последняя рабочая версия ================================================ 
// let sliders = { 
//                 slider1: {
//                     sliderNo:1,
//                     slider: document.querySelector(".b-wrapper_photo1"),
//                     reset: document.querySelector(".b-wrapper_photo1").innerHTML,
//                     slides: document.querySelectorAll(".bw-photo__image1"),
//                     iterator: document.querySelectorAll(".bw-photo__image1").length,
//                     startFrom:2
//                 }, 

//                 slider2: {
//                     sliderNo:2,
//                     slider: document.querySelector(".b-wrapper_photo2"),
//                     reset: document.querySelector(".b-wrapper_photo2").innerHTML,
//                     slides: document.querySelectorAll(".bw-photo__image2"),
//                     iterator: document.querySelectorAll(".bw-photo__image2").length,
//                     startFrom:1

//                 }
//             };

//   let{slider1, slider2}=sliders;  

// slideRotate(slider1.startFrom, slider1.slides, slider1.iterator, slider1.slider, slider1.reset, slider1.sliderNo);//!аргументы
// slideRotate(slider2.startFrom, slider2.slides, slider2.iterator, slider2.slider, slider2.reset, slider2.sliderNo);//!аргументы


// function slideRotate(pos, slds, iter, sldr, res, sliderNo) {//!аргументы
//   let onStart = 0;
//   let position = pos;
//   let curSlide = slds[position];
//   let preSlide = slds[position - 1];

//   if (!preSlide && position < iter) {
//     curSlide.classList.toggle("bw-photo-inactive");
//     position += 1;
//     setTimeout(() => {
//       slideRotate(position, slds, iter, sldr, res, sliderNo);//!аргументы
//     }, 7000);
//   } else if (preSlide && position < iter) {
//     preSlide.classList.toggle("bw-photo-inactive");
//     curSlide.classList.toggle("bw-photo-inactive");
//     position += 1;
//     setTimeout(() => {
//       slideRotate(position, slds, iter, sldr, res, sliderNo);//!аргументы
//     }, 7000);
//   } else {
//     position = onStart;
//     sldr.innerHTML = res;
//     slds = document.querySelectorAll(`.bw-photo__image${sliderNo}`);
//     slideRotate(position, slds, iter, sldr, res, sliderNo);//!аргументы
//   }
// }
//?===================================================== Последняя рабочая версия ================================================

// =====================Автоматическое перелистывание слайдов. Рекурсивный setTimeout. !!!!Работает!!!!!===============================================
// let counter = 0;

// let bWrapperPhoto = document.querySelector('.b-wrapper_photo'); 
// let reset = bWrapperPhoto.innerHTML;

// let slides =

// setTimeout(() => {
//     testlet();
// }, 2500);

// function testlet (){

//     if (counter<2){

//     counter = counter+=1;

//     let currentslide = counter-1;
//     let slides = document.querySelectorAll(".bw-photo__image");
//     let bwSlides = document.querySelectorAll(".bw-photo");

//     slides[currentslide].classList.add("bw-photo__image-inactive");
//     bwSlides[currentslide].classList.add("bw-photo__image-inactive");

//     slides[counter].classList.remove("bw-photo__image-inactive");

//     setTimeout(() => {
//         testlet();
//     },2500);

// }else{
//     counter=0;
//     bWrapperPhoto.innerHTML=reset;
//     setTimeout(() => {
//         testlet();
//     },2500);

// }

// }
// =====================Автоматическое перелистывание слайдов. Рекурсивный setTimeout. Конец рабочего кода ============================================

// =====================Автоматическое перелистывание слайдов. GSAP +++ setTimeout.====================================================================

// let tl = gsap.timeline();

// let slider = document.querySelector('.b-wrapper_photo');
// let reset = slider.innerHTML;
// let leftButton = document.querySelector('.b-switchButton-left');

// let index = 0;

// function gsaping(index){

//     if(index<3){
//         let itemsArr = document.querySelectorAll('.bw-photo__image');
//         itemsArr=Array.from(itemsArr);
//         let cycle = gsap.utils.wrap(itemsArr,index);
//         tl.from(cycle, {y: -20, x: -60, opacity:0, duration: 2});
//         tl.to(cycle, {y: 20, x:60, opacity:0,duration:2,});
//         index = index+=1;
//         gsaping(index);
//     }
//     else {
//         setTimeout(()=>{
//             index=0;
//             slider.innerHTML=reset;
//             gsaping(index);
//         },12010)
//     }
// }

// gsaping(index);

//======================================Автоматическое перелистывание слайдов. GSAP +++ setTimeout. Конец рабочего кода================================

// let tl = gsap.timeline();

// let slider = document.querySelector('.b-wrapper_photo');
// let reset = slider.innerHTML;
// let leftButton = document.querySelector('.b-switchButton-left');
// let rightButton = document.querySelector('.b-switchButton-right');
// let active = true;
// let listenerOFF= true;

// let index = 0;

// let gsaping = function (arg){

//         let itemsArr = document.querySelectorAll('.bw-photo__image');
//         itemsArr=Array.from(itemsArr);
//         let cycle = gsap.utils.wrap(itemsArr,arg);
//         cycle.classList.toggle("bw-photo__image-inactive");
//         tl.from(cycle, {y: -20, x: -60, opacity: 0, duration: 2});
//         tl.to(cycle, {y: 20, x: 60, opacity: 0, duration:2,});
//         index = arg+=1;
//         console.log('function works'+ ' & index is  '+ index);
// }

// console.log(slider.innerHTML);

// slideOn(index);

// function slideOn(){
//     if(active && index<3){
//         gsaping(index);
//         gsap.delayedCall(4,()=>{
//             slideOn(index);
//         });
//     }else if(active) {
//         index=0;
//         slider.innerHTML=reset;
//             slideOn(index);
//     }

// }

// leftButton.addEventListener('click', ()=>{
//     slider.innerHTML=reset;
//     index=index-2;
// });

// rightButton.addEventListener('click',()=>{
//     slider.innerHTML=reset;
// });

//==========================================Vanila JS + Css=====================================================================================
