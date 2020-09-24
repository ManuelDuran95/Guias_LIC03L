function inicializar() {
    //Inicialización de variables
    var nombrep = new Array();
    var preciop = new Array();
    var nump=new Array();
    var aux1, aux2;
    var i, max, min, temp, contenido = "", tdelement, pares, impares, suma1, suma2;
    var i, num, nota, suma0;
    nota = 0;
    pares = 0;
    impares = 0;
    suma1 = 0;
    suma2 = 0;
    aux1 = 0,
    aux2 = 0;
    suma0 = 0;
    max = 0;
    min = 0;
    //Validación para que el número de elementos del arreglo sea
    //numérico y mayor o igual que 2
    do {
        num = prompt("Ingrese el nombre del producto:", "");
        //Verificar que se ingrese un dato numérico
        if (num==null) {
            alert("Ingrese un nombre");
            continue;
        }
        //si hay concidencia
        else{
            nump[aux1]=aux1+1;
            nombrep[aux1]=num;
            preciop[aux1]=prompt("Ingrese el precio: ","");
            aux1++;

        }
        aux2=prompt("ingresar otro producto? 1-SI, 0-NO","");
    } while (aux2==1);
    suma0 = (new Function("return " + preciop.join('+')))();
    //Obteniendo el elemento donde se cargará el contenido
    //generado dinámicamente desde JavaScript
    var datos = document.getElementById('datos');
    with (document) {
        contenido += "<h1>Productos ingresados</h1>\n";
       
        contenido += "<table>\n\t<tbody>\n\t\n";

        //Lazo que muestra los elementos del arreglo en una tabla
        for (i = 0; i < num.length; i++) {
            contenido += "\t\t\t<tr><td class=\"Off\">" + nump[i] + ",</td><td class=\"Off\">" + nombrep[i] + ",</td><td class=\"Off\">" + preciop[i] + ",</td></tr>\n";
            
        }
        contenido += "\t\n\t</tbody>\n</table>\n<br />\n\n";
        //Lazo que ordena el arreglo mediante el método de la burbuja
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo que han sido
        //ordenados con el método de la burbuja
        contenido += "<p>Ventas totales: " + suma0 + "</p>";

        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";

        


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