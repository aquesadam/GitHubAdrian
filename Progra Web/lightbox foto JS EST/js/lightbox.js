//obtener el modal
var modal = document.getElementById("modal1");

//obtener la imagen y agregarla dentro del modal - Usar el tecto alternativo "alt" como subtítulo
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//carga el evento onclick cuando se pulsa la foto
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    //permite que el título del lightbox quede abajo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
//el método getElementsyClassName carga una clase en JS
var span = document.getElementsByClassName("close")[0];

//cuando el usuario hace click en <span> (x), cierre el modal
span.onclick = function(){
    modal.style.display = "none";
}