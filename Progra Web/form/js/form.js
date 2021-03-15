//window.addEventListener('load', validar_datos, false);


function validar_datos() {
	var usuario = document.getElementById('userTXT');
	var clave = document.getElementById('claveTXT');
    var correo = document.getElementById('correoTXT');
    var area = document.getElementById('areaTXT');
	var usuario = userTXT.value;
	var clave = Number(claveTXT.value);
    var correo = correoTXT.value;
    var area = areaTXT.value;

    if (usuario=="") {
        alert('Digite el nombre de usuario');
        //el name c1 de HTML
        document.login.c1.focus();
		return;
    }
     
    if (clave==""){
        alert('Digite la clave de acceso');
        //el name c2 de HTML
        document.login.c2.focus();        
		return;
    }else{
        clavehoy = document.login.c2.value;		
        if(clavehoy.length<6){
            alert("La clave es muy corta, debe ser de mas de 6 caracteres");
            document.login.c2.focus();
        return 0;
        }     
    }

    if (correo==""){
        alert('Digite su correo electrónico');
        //el name c3 de HTML
        document.login.c3.focus();
		return;
    }
    if (area==""){
        alert('Digite su mensaje deseado');
        //el name c4 de HTML
        document.login.c4.focus();
		return;
    }

      comentario =  document.login.c4.value;
    if(comentario.length<12 || comentario.length>24){
        alert("El comentario debe tener mas de 12 letras y no mas de 24");
        //el name c4 de HTML
        document.login.c4.focus();
    return 0;
    }

    else{

	if (usuario=="user1" && clave=="12345678") {
		alert('INGRESO CORRECTO A LA WEB. Muchas gracias por llenar el formulario. Pronto le estaremos respondiendo');
		document.login.submit();		  
		window.open('https://www.ucenfotec.ac.cr');
		return 0;
	}else{  
        alert('DATOS INCORRECTOS. REVISAR EL ACCESO POR FAVOR');
        return;   
    }
}

//cierre de la funcion    
}







