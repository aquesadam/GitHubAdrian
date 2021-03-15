function validar_datos(){
    var usuario = document.getElementsById("userTxt");
    var clave = document.getElementById("claveTxt");
    var correo = document.getElementById("correoTxt");
    var area = document.getElementById("areaTxt");
    var usuario = userTxt.value;
    var clave = Number(claveTxt.value);
    var correo = correoTxt.value;
    var area = areaTxt.value;

    if (usuario==""){
        alert("Por favor digite el nombre del usuario");
        document.login.c1.focus();   
    }

    if (clave==""){
        alert("Por favor digite la clave de acceso");
        document.login.c2.focus();   } else{
        clavehoy = document.login.c2.value;
        
        if (clavehoy.length<6){
            alert("La clave es muy corta, debe ser de más de 6 caracteres");
            document.login.c2.focus();
        }
    }

    if (correo==""){
        alert("Por favor digite su correo electrónico");
        document.login.c3.focus();   
    }

    if (area==""){
        alert("Por favor digite su mensaje");
        document.login.c4.focus();  
    }

    comentario = document.login.c4.value;
    if (comentario.length<12 || comentario.length>24){
        alert("El comentario debe tener mas de 12 letras y no mas de 24.");
        document.login.c4.focus();
    }

    else{
        if (usuario=="user1" && clave=="12345678"){
            alert("INGRESO CORRECTO A LA WEB. Muchas gracias por llenar el formulario. Pronto le estaremos respondiendo");
            document.login.submit();

        } else{
            alert("DATOS INCORRECTOS. POR FAVOR REVISAR EL ACCESO");
       }
    }
}
