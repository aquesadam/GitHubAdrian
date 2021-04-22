var acc = document.getElementsByClassName('accordion');
var i;

for (i=0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        // Alternar entre agregar y eliminar la clase activa, para resaltar el botón que controla el panel
        this.classList.toggle('active');

        // Ocultar y mostrar el panel activo usando un condicional
        var panel = this.nextElementSibling;
        if (panel.style.display ==="block"){
            panel.style.display = "none";
        } else{
            panel.style.display = "block";
        }
    });
}

// Activación del panel acordeon al abrirlo
for (i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        // nextElementSibling devuelve el elemento que sigue inmediatamente al elemento especificado, en el mismo nivel de árbol.
        var panel = this.nextElementSibling;
        // Variable panel que puede establecer la altura máxima de un elemento
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else{
            // Obtener la altura del elemento en px
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        });
}


document.querySelectorAll('.myImg').forEach(item => {
    item.addEventListener('click', function(){
        modal1.style.height = "100vh";
        modal1.style.opacity = "1";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

var modal1 = document.getElementById("modal1");
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//carga el evento onclick cuando se pulsa la foto
img.onclick = function(){
    modal1.style.height = "100vh";
    modal1.style.opacity = "1";

    modalImg.src = this.src;
    //permite que el título del lightbox quede abajo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
//el método getElementsyClassName carga una clase en JS
var gris = document.getElementById("modal1");

//cuando el usuario hace click en <span> (x) o fuera de la imagen, cierre el modal
gris.onclick = function(){
    modal1.style.opacity = "0";
    setTimeout(function(){
        modal1.style.height = "0vh";
    },300);
}