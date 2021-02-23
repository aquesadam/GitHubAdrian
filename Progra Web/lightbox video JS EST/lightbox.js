




// Función para revelar lightbox y agregar reproducción automática de YouTube
//los que estan en parentesis son 2 parametros: control de autoplay y que el video salga en block
function ejecutar(div,video_id) {
  var video = document.getElementById(video_id).src;
  //adicionar el autoplay URL (ejecucion automática)
  document.getElementById(video_id).src = video+'&autoplay=1'; 
  document.getElementById(div).style.display = 'block';
}


// Ocultar la caja y eliminar la reproducción automática de YouTube
//los que estan en parentesis son 2 parametros: desactivar autoplay y que la imagen del video no salga + 
function ocultar(div,video_id) {
  var video = document.getElementById(video_id).src;
  //remover el autoplay URL
  var cleaned = video.replace('&autoplay=1',''); 
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}