function opciones(evt, info){
    //declaracion de variables
    var i, tabcontent, tablinks;

    //Obtenga todos los elementos con class = "tabcontent" y ocultelos
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    //Obtenga todos los elementos con class = "tablinks" y elimine la clase "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace('active','');
    }

    //Obtenga todos los elementos con class = "tablinks" y elimine la clase active, muestre la pestaña actual y agregue una clase activa al boton que abrio la pepstaña
    document.getElementById(info).style.display='block';
    evt.currentTarget.className += 'active';
}