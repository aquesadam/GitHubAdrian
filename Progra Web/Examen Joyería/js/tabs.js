var swt= document.getElementById("tab");

function switch1(event){
    swt.id = "collaresActive"
}
function switch2(event){
    swt.id = "anillosActive"
}
function switch3(event){
    swt.id = "aretesActive"
}

function opciones(evt, info){
    //declaracion de variables
    var i, tabcontent, tablinks;
    var collares= document.getElementById('btnCollares');
    var anillos = document.getElementById('btnAnillos');
    var aretes= document.getElementById('btnAretes');

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

    //Obtenga todos los elementos con class = "tablinks" y elimine la clase active, muestre la pestaña actual y agregue una clase activa al boton que abrio la pestaña
    document.getElementById(info).style.display='flex';
    evt.currentTarget.classList.add('active');
}

function alert(){
    Swal.fire({
    icon: 'warning',
    title: 'No disponible',
    text: 'Lo sentimos, el producto está temporalmente agotado. Por favor intenta más tarde.',
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: 'OK'
    })
}