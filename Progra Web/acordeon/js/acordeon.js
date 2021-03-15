var acc = document.getElementsByClassName('accordion');
var i;

for (i=0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        // Alternar ent re agregar y eliminar la clase activa, para resaltar el botón que controla el panel
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