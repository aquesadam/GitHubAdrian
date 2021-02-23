var foto = 1;
var micarrusel = {};
var total = 0;

//Carga de imagenes y titulo de cada una en un arreglo.
micarrusel = [{imageurl:'banner1.jpg',titulo:'Foto #1'},
{imageurl:'banner2.jpg',titulo:'Foto #2'},
{imageurl:'banner3.jpg',titulo:'Foto #3'},
{imageurl:'banner4.jpg',titulo:'Foto #4'},
{imageurl:'banner5.jpg',titulo:'Foto #5'}];

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
    titulo=document.getElementById('titulo');
    titulo.innerText = micarrusel[foto-1].titulo;
}

//funcion que permite agregar imagenes al carrusel
var addImage = function(){

//Variables que asignan los ID del HTML para agregar imagen y titulo
var nuevaImagen = document.getElementById('addUrl');
var nuevoTitulo = document.getElementById('addTitulo');

//Tipos de imagenes que acepta subir
var checkValidUrl = new RegExp('^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$','g');

//Estilos de colores de los 2 cuadros a llenar (URL y título)
nuevaImagen.style.border ="2px blue solid";
nuevoTitulo.style.border ="2px blue solid";
str = nuevaImagen.value;

//condicionales que validan la entrada de la imagen como slider del carrusel
//trim es un metodo que elimina los espacios en blanco de un string
if(checkValidUrl.test(str.trim())){
    if(nuevoTitulo.value !=""){
        //agrega la imagen y el titulo al carrusel
        micarrusel.push({imageurl:str,titulo:nuevoTitulo.value});
    }

    //setTimeout es un metodo que llama a una función despues de un numero especifico. En este caso es 1000ms. Se ejecuta una vez.
    setTimeout(function(){
        nuevoTitulo.style.border="2px blue solid";
        nuevaImagen.style.border="2px blue solid",
        nuevaImagen.value='';
        nuevoTitulo.value='';
        nuevaImagen='';    
    }, 1000);
} else{
    nuevaImagen.style.border='2px blue solid';
}
}

