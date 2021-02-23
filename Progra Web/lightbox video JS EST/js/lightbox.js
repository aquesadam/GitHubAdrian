//funcion para revelar el lightbox y agregar reproducción automática de youtube
function ejecutar(div,video_id){
    var video = document.getElementById(video_id).src;
    //adicionar el autoplay URL
    document.getElementById(video_id).src = video+'&autoplay=1';
    document.getElementById(div).style.display = 'block';
}

//Ocultar la caja y eliminar la reproducción automática de youtube
//los que están en paréntesis son 2 parámetros: desactivar autoplay y que el video
function ocultar(div,video_id){
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1','');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}