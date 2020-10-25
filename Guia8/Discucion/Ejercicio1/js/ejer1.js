var ba= parseInt(document.getElementById("txtbase").value);
    var ba1=parseInt(document.getElementById("txtpoten").value);
//Registrar evento click del ratón al presionar botones de envío
function iniciar() {
    var btnpote = document.getElementById("pote");
    var info=document.getElementById("info");
    
   
    if (btnpote.addEventListener) {
        btnpote.addEventListener("click", potencia, false);
    }
    else {
        btnpote.attachEvent("onclick", potencia);
    }
    
}
function potencia() {
    document.getElementById("demo").innerHTML ="Respuesta: "+ Math.pow(parseInt(document.getElementById("txtbase").value),parseInt(document.getElementById("txtpoten").value));
}
function base(){
    return Math.pow(this.ba,this.po);
}
//Creando una clase rectángulo

//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}