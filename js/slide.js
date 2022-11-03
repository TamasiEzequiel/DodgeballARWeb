var slideIndex = 0;
showSlides();

function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,8000);
}

//Para asociados
var slideAsociados = 0;
showSlidesAs();

function showSlidesAs() {
       var i;
       var slides = document.getElementsByClassName("mySlides2");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideAsociados++;
       if(slideAsociados > slides.length) {slideAsociados = 1}
       slides[slideAsociados-1].style.display = "block";
       setTimeout(showSlidesAs,4000);
}