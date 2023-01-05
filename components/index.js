const p = document.getElementById("slideshow-container");
p.innerHTML = `
    
<div class="mySlides fade">
<img id="img" src="./IMGS/didi.jpg" style="width: 100%">
</div>

<div class="mySlides fade">

<img id="img" src="./IMGS/didi.jpg" style="width: 100%">
</div>

<div class="mySlides fade">
<img id="img" src="./IMGS/fondo-menu.jpg" style="width: 100%">
</div>

`

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




const n = document.getElementById("news");
n.innerHTML = `
<div id="cardNews">   

    <img src="./IMGS/didi.jpg"</img>    
    <h3 id="title-card"> Aca va el titulo </h3>
    <p> Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de</p>
    
    <!--hasta aca d txt-->
    <a href="./nSudamericano.html"> Ver mas</a>

</div>  
<div id="cardNews">   

    <img src="./IMGS/didi.jpg"</img>    
    <h3 id="title-card"> Aca va el titulo2 </h3>
    <p> Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de</p>
    
    <!--hasta aca d txt-->

    <a href="http://"> Ver mas</a>

</div>
<div id="cardNews">   

    <img src="./IMGS/didi.jpg"</img>    
    <h3 id="title-card"> Aca va el titulo3 </h3>
    <p> Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de texto3Aca va el desarrollo de</p>
    
    <!--hasta aca d txt-->
    
    <a href="http://"> Ver mas</a>
</div>

`


const a = document.getElementById("slide-asociados");
a.innerHTML = `

<div class="mySlides2 bahia">
            <a href="https://www.facebook.com/Dodgeballbbca/">
                <img src="./IMGS/logoBahia.jpg" alt="bahia">
            </a>
            <a href="https://www.instagram.com/cordoba_dodgeball/">
                <img src="./IMGS/cordoba.jpeg" alt="cordoba">
            </a>
            <a href="https://www.instagram.com/dodgeballlr/">
                <img src="./IMGS/logoSanluis.png" alt="Sanluis">
            </a>
        </div>

        <div class="mySlides2 larioja">
            <a href="https://www.instagram.com/dodgeballlr/">
                <img src="./IMGS/larioja.png" alt="Larioja">
            </a>
            <a href="https://www.facebook.com/Dodgeballbbca/">
                <img src="./IMGS/IMG LOGO.png" alt="bahia">
            </a>
            <a href="https://www.facebook.com/Dodgeballbbca/">
                <img src="./IMGS/logoBahia.jpg" alt="bahia">
            </a>
        </div>

`

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


