let slides = document.querySelectorAll('.bw-photo');
let reset = document.querySelector('.b-wrapper_photo').innerHTML;
let curSlide = 0;
let sliderLength = slides.length-1;



slideOn(curSlide, slides);



function slideOn(curentSld, sldr){

    if(curSlide<=sliderLength){

        sliderSmall(curentSld, sldr);

        curSlide = curentSld+=1;
        
    setTimeout(slideOn(curSlide, sldr), 6000);
}
}

function sliderSmall(curentSld, sldr){

    sldr[curentSld].classList.toggle("bw-photo-inactive");
    sldr[curentSld].velocity( {opacity:1}, { duration: 3000})
                   .velocity( {opacity:0}, { duration: 3000});
    
}



