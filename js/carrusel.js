var foto = 1;
var micarrusel = {};
var total = 0;

//Carga de imagenes y titulo de cada una en un arreglo.
micarrusel = [{imageurl:'./css/imgs/banner1.jpg'},
{imageurl:'./css/imgs/banner2.jpg'},
{imageurl:'./css/imgs/banner3.jpg'},
{imageurl:'./css/imgs/banner4.jpg'},
{imageurl:'./css/imgs/banner5.jpg'}];

// Funcion que permite cambiar las imagenes a la anterior y siguiente
var cambiar = function(mas){
    total = micarrusel.length;
    foto = foto + mas;
    if(foto>total){
        foto=1
    }
    if(foto<1){
        foto=total;
    }

    //ruta de la imagen
    document.thumb.src=micarrusel[foto-1].imageurl;

}

var hover = function(imagen, masinfo){
    var imagen = document.getElementById("imagen");
    var masinfo = document.getElementById("masinfo");
    var masinfo = masinfo.firstElementChild;
    imagen.style.filter = "brightness(70%)";
    masinfo.style.opacity = "1.0";
}

var hoverOut = function(imagen, masinfo){
    var imagen = document.getElementById("imagen");
    var masinfo = document.getElementById("masinfo");
    var masinfo = masinfo.firstElementChild;
    imagen.style.filter = "";
    masinfo.style.opacity = "0";
}