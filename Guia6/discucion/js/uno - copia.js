function inicializar() {
    //Inicialización de variables
    var numerosp = new Array();
    var numerosi = new Array();
    var aux1, aux2;
    var i, max,min, temp, contenido = "", tdelement, pares, impares, suma1, suma2;
    var i, num, nota, suma0;
    nota = 0;
    pares = 0;
    impares = 0;
    suma1 = 0;
    suma2 = 0;
    aux1 = 0,
        aux2 = 0;
    suma0 = 0;
    max=0;
    min=0;
    //Validación para que el número de elementos del arreglo sea
    //numérico y mayor o igual que 2
    do {
        num = prompt("Ingrese un numero entero  mayor a 100 (positivo):", "");
        //Verificar que se ingrese un dato numérico
        if (isNaN(num)) {
            alert("El valor digitado no es numérico.");
            continue;
        }
        //Verificar que el valor ingresado sea mayor o igual que 2
        if (num < 100) {
            alert("El arreglo debe ser mayor a 100");
        }
    } while (isNaN(num) || num < 100);
    temp = num;
    //Lazo para solicitar el ingreso de los elementos del arreglo+
    var res = num.split("");
    //Obteniedo datos del numero ingresado
    for (i = 0; i < num.length; i++) {
        if (res[i] % 2 == 0) {
            pares++;
            numerosp[aux1] = res[i];

            aux1++;

        }
        else {
            impares++;
            numerosi[aux2] = res[i];
            aux2++;

        }
    }
    //mayor y menos
    for (i = 0; i < res.length; i++) {
        if (res[i] > max)
    {
        max = res[i];
    }
        
    }
    //obtener menor valor
    var minValue = Math.min(...res);
    //sumas
    suma0 = (new Function("return " + res.join('+')))();

    suma1 = (new Function("return " + numerosp.join('+')))();
    suma2 = (new Function("return " + numerosi.join('+')))();

    //Obteniendo el elemento donde se cargará el contenido
    //generado dinámicamente desde JavaScript
    var datos = document.getElementById('datos');
    with (document) {
        contenido += "<h1>Ejercicio 1 Discucion guia 6</h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<p>Numero ingresado: " + temp + "</p>";
        contenido += "<p>numero de cifras: " + num.length + "</p>"
        contenido += "<table>\n\t<tbody>\n\t\n";

        //Lazo que muestra los elementos del arreglo en una tabla
        for (i = 0; i < num.length; i++) {
            contenido += "\t\t\t<tr><td class=\"Off\">" + res[i] + ",</td><td class=\"Off\">" + res[i] + ",</td><td class=\"Off\">" + res[i] + ",</td></tr>\n";
            
        }
        contenido += "\t\n\t</tbody>\n</table>\n<br />\n\n";
        //Lazo que ordena el arreglo mediante el método de la burbuja
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo que han sido
        //ordenados con el método de la burbuja

        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<p>Cifras pares: " + pares + " suma cifras pares: " + suma1 + "</p>";
        contenido += "<p>Cifras impares: " + impares + " suma cifras impares: " + suma2 + "</p>";
        contenido += "<p>Numero mayor: " + max + "</p>";
        contenido += "<p>Numero menor: " + minValue + "</p>";


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
window.onload = inicializar;