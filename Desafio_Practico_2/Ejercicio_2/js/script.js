
//declaracion de variables
var numeros;
var aux;
aux = 1;
var i;
var numero = 2;
var total;
total = 0;
numeros = [];
var pcombo1 = 7.5;
var pcombo2 = 0;
var pcombo3 = 0;
var pproduc1 = 0;
var pproduc2 = 0;
var pproduc3 = 0;
var pproduc4 = 0;
var pproduc5 = 0;
var pproduc6 = 0;
var pproduc7 = 0;
var pproduc8 = 0;
var pproduc9 = 0;
var pproduc10 = 0;
//nbombres
var ncombo2 = "";
var ncombo3 = "";
var ncombo1="";
var nproduc1 = "";
var nproduc2 = "";
var nproduc3 = "";
var nproduc4 = "";
var nproduc5 = "";
var nproduc6 = "";
var nproduc7 = "";
var nproduc8 = "";
var nproduc9 = "";
var nproduc10 = "";
function init() {
    //Obtener elementos desde html
    //Combos
    var combo1 = document.getElementById('combo1');
    var combo2 = document.getElementById('combo2');
    var combo3 = document.getElementById('combo3');
    var produc = document.getElementById('produc');
    //Productos
    var produc1 = document.getElementById('produc1');
    var produc2 = document.getElementById('produc2');
    var produc3 = document.getElementById('produc3');
    var produc4 = document.getElementById('produc4');
    var produc5 = document.getElementById('produc5');
    var produc6 = document.getElementById('produc6');
    var produc7 = document.getElementById('produc7');
    var produc8 = document.getElementById('produc8');
    var produc9 = document.getElementById('produc9');
    var produc10 = document.getElementById('produc10');
    var Total = document.getElementById('Total');
    var enviar = document.getElementById('enviar');
    var suge = document.getElementById('suge');



}
//div oculto
suge.style.display="none";
//Al inicio cargar por defecto
if (combo1.checked == true) {

    Total.value = 8.5;
    ncombo1="super Combo "
}
//Funciones
function actualizar() {
    Total.value = 0;
    Total.value = "$ " + parseFloat(pcombo1 + pcombo2 + pcombo3 + pproduc1 + pproduc2 + pproduc3 + pproduc4 + pproduc5 + pproduc6 + pproduc7 + pproduc8 + pproduc9 + pproduc10);

}
function act(){

}
//Eventos la hacer click

combo1.onclick = function (e) {
    pcombo1 = 7.5;
    combo2.checked = false;
    combo3.checked = false;
    pcombo2=0;
    pcombo3=0;
    ncombo1="super Combo";
    ncombo2="";
    ncombo3="";
    actualizar();

}
combo2.onclick = function (e) {
    combo1.checked = false;
    pcombo2 = 5.75;
    pcombo1=0;
    pcombo3=0;
    ncombo1="";
    ncombo2="Combo personal";
    ncombo3="";

    combo3.checked = false;
    actualizar();
}
combo3.onclick = function (e) {
    combo1.checked = false;
    combo2.checked = false;
    pcombo2=0;
    pcombo1=0;
    pcombo3 = 3.5;
    ncombo1="";
    ncombo2="";
    ncombo3="Combo infantil";
    actualizar();


}
produc1.onclick = function (e) {
    if (produc1.checked == true) {
nproduc1=" /Ensalada/ ";
        pproduc1 = 1.5;

        actualizar();
    }
    else {
        pproduc1 = 0;
        nproduc1 = "";
        actualizar();
    }



}
produc2.onclick = function (e) {
    if (produc2.checked == true) {
nproduc2="/papa frita/";
        pproduc2 = 1.25;
        actualizar();
    }
    else {
        pproduc2 = 0;
        nproduc2 = "";
        actualizar();
    }

}
produc3.onclick = function (e) {
    if (produc3.checked == true) {
nproduc3="/Pieza de pollo grande/";
        pproduc3 = 1.75;
        actualizar();
    }
    else {
        pproduc3 = 0;
        nproduc3 = "";
        actualizar();
    }

}
produc4.onclick = function (e) {
    if (produc4.checked == true) {
nproduc4="/Pieza de pollo mediana/";
        pproduc4 = 1.5;
        actualizar();
    }
    else {
        pproduc4 = 0;
        nproduc4 = "";
        actualizar();
    }

}
produc5.onclick = function (e) {
    if (produc5.checked == true) {
nproduc="/Pieza de pollo pequeña/";
        pproduc5 = 1.25;
        actualizar();
    }
    else {
        pproduc5 = 0;
        nproduc5 = "";
        actualizar();
    }
}
produc6.onclick = function (e) {
    if (produc6.checked == true) {
nproduc6="/Bebida grande/";
        pproduc6 = 1.5;
        actualizar();
    }
    else {
        pproduc6 = 0;
        nproduc6 = "";
        actualizar();
    }

}
produc7.onclick = function (e) {
    if (produc7.checked == true) {
        nproduc7="/Bebida mediana/";

        pproduc7 = 1.25;
        actualizar();
    }
    else {
        nproduc7="";
        pproduc7 = 0;
        actualizar();
    }

}
produc8.onclick = function (e) {
    if (produc8.checked == true) {
        nproduc8="/Bebida pequeña/";

        pproduc8 = 1;
        actualizar();
    }
    else {
        nproduc8="";
        pproduc8 = 0;
        actualizar();
    }

}
produc9.onclick = function (e) {
    if (produc9.checked == true) {
        nproduc9="/Cafe/";

        pproduc9 = 0.5;
        actualizar();
    }
    else {
        nproduc9="";
        pproduc9 = 0;
        actualizar();
    }

}
produc10.onclick = function (e) {
    if (produc10.checked == true) {
        nproduc10="/Postre/";

        pproduc10 = 1.25;
        actualizar();
    }
    else {
        nproduc10="";
        pproduc10 = 0;
        actualizar();
    }

}


//boton enviar
enviar.onclick = function (e) {
    Total.value = 0;
    suge.style.display="block"
    suge.value="Combo seleccionado: "+ncombo1+ncombo3+ncombo2+" Complementos: "+nproduc1+nproduc2+nproduc3+nproduc4+nproduc5+nproduc6+nproduc7+nproduc8+nproduc9+nproduc10;
    Total.value = "$ " + parseFloat(pcombo1 + pcombo2 + pcombo3 + pproduc1 + pproduc2 + pproduc3 + pproduc4 + pproduc5 + pproduc6 + pproduc7 + pproduc8 + pproduc9 + pproduc10);
}