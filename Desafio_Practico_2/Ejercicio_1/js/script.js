
//declaracion de variables
//Inicialización de variables
var numeros = new Array();
var i, max, temp, contenido="", tdelement,mayor, menor;
var aux;
aux = 0;
var i, j;
temp=0;

max=5;
var numero = 2;

function init() {
    //Obtener elementos desde html
    var txtNum = document.getElementById('txtNum');
    var txterror = document.getElementById('error1');
    var btnAgregar = document.getElementById('btnAgregar');
    var btnMostrar = document.getElementById('btnMostrar');
    var divInfo = document.getElementById('info');
}

//Eventos la hacer click

btnAgregar.onclick = function (e) {
    if (aux < 5) {

        numeros[aux] = document.getElementById('txtNum').value;
        aux++;
        limpiar();
    }
    else {
        error1.textContent = "***Ya ingreso los 5 numeros***";
        limpiar();
    }

}
function limpiar() {
    txtNum.value = "";

}
// onClick="agregar()

//btnMostrar.onclick = function (e) {
  //  mostrar1();
    //limpiar();
//}



console.log("numero");
function mostrar1() {
    mayor=Math.max(...numeros);
    //Obteniendo el elemento donde se cargará el contenido
    var minValue = Math.min(...numeros);
    for (i = 0; i < max - 1; i++) {
        for (j = i + 1; j < max; j++) {
            if (numeros[i] < numeros[j]) {
                temp = numeros[j];
                numeros[j] = numeros[i];
                numeros[i] = temp;
            }
        }
    }
    numeros.sort((a, b) => b - a)
    var datos = document.getElementById('info');
    with (document) {
        
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\"><h3>Analizis de:</h3></td>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        for (i = 0; i <numeros.length; i++) {
            contenido += "\t\t\t<td class=\"Off\"><h4>" + numeros[i] + ",</h4></td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
       
        contenido +="<table><thead><tr>";
        contenido +="<th>Mayor: "+mayor+"</th>";
        contenido +="<th>Menor: "+minValue+"</th>";
        contenido +="</tr></thead></table>";
    }
    datos.innerHTML = contenido;
    //Capturando los elemento con clase Off
    tdelement = document.getElementsByClassName('Off');
    
    for (var i = 0; i < tdelement.length; i++) {
        tdelement[i].onmouseover = function () {
            this.className = 'On';
        }
        tdelement[i].onmouseout = function () {
            this.className = 'Off';
        }
    }
}