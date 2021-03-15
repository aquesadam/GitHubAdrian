window.addEventListener('load', init, false);

function init(){
    var articuloTxt = document.getElementById('articuloTxt');
    var claveArt = document.getElementById("claveArt");
    var precioTxt = document.getElementById("precioTxt");
    var resultadoPr = document.getElementById("resultadoPr");
    var calcularBtn = document.getElementById("calcularBtn");
    claveArt.selectedIndex = -1;

    calcularBtn.onclick = function calcularBtnOnClick(){
        var articulo = articuloTxt.value;
        var precio = Number(precioTxt.value);
        var clave = claveArt.value;
        var precioConDescuento = 0;
        var descuento = 0;
        var descuento1 = 10;
        var descuento2 = 20;
        var descuento3 = 30;

        if (articulo=="" || clave=="" || precio==""){
            alert("Por favor llene todos los campos.")
            return false;
        } else{
            if (clave=="01"){
                descuento = precio * (descuento1/100);
            } else if (clave=="02"){
                descuento = precio * (descuento2/100);
            } else if (clave=="03"){
                descuento = precio * (descuento3/100);
            }
            else{
                descuento=0;
            }    
        }

        precioConDescuento = precio - descuento;

        var resultado = 'Artículo: '+articulo+'<br>';
        resultado = resultado + 'Clave elegida: '+clave+'<br>';
        resultado = resultado  + 'Precio original: '+precio+'<br>';
        resultado = resultado + 'Precio con descuento: '+precioConDescuento;

        resultadoPr.innerHTML=resultado;
    }
}

var limpiarBtn = document.getElementById("limpiarBtn");

limpiarBtn.onclick = function limpiar(){

        document.getElementById('articuloTxt').value = "";
        document.getElementById('precioTxt').value = "";
        document.getElementById('claveArt').value = "";
        resultadoPr.innerHTML="Resultado Aquí";
}

