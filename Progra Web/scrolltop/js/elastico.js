$(document).ready(function(){
    smoothScroll.init({
        selector: "[data-scroll]",
        //selector: "a.nav-link";
        //velocidad de la elasticidad
        //2 seg equivale a 2000
        speed: 200,
        //tipos de aceleración
        easing: "easeOutQuart",
        //easing: "easeInOutQuad",
        //easing: "easeInQuart",
        //easing: "easeInOutCubic",
    });
});

//Esconder botón scrolltop
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop >280 || document.documentElement.scrollTop >280){
        document.getElementById("flechabtn").style.display="block";
    } else{
        document.getElementById("flechabtn").style.display="none";
    }
}


//Funcion scrolltop de Jquery que se llama desde HTML
function topFunction(){
    $('a.scroll-top').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0});
    });
}