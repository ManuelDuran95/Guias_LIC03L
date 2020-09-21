function init(){
    //prompt() permite obtener entrada de datos del usuario
    var celsius = prompt('Ingrese la temperatura en Celcius','');
        var fahrenheit, i;
        var div = document.getElementById('distribucion');
        //Realizando los cálculos para distribución del presupuesto
        fahrenheit = (celsius*9/5)+32;
        
        
        //Creando el código que se insertará dentro del elemento div id=distribucion
        var html = "<ul>\n\t<li>\n";
        html += "\t\t<a href='#' class='move-right'>\n";
        html += "\t\t\t<h2>"+celsius+"º Celsius en grados Fahentheit es: " + fahrenheit +"º</h2>\n";
        html += "\t\t</a>\n";
        html += "\t</li>\n";
        html += "</ul>\n";  
     
        //Insertando dentro del elemento div el código asignado en la variable html
        div.innerHTML = html;
        //Hacer referencia a los elementos h1 dentro de la página web
        var links = document.getElementsByTagName('a');
        //Recorrer todos los elementos a y asignar el manejador de evento
        //mediante una función anónima
        for(i=0; i<links.length; i++){
        links[i].onmouseover = function(){
        this.className = 'move-right-hover';
        };
        links[i].onmouseout = function(){
        this.className = 'move-right';
        };
        }
}
window.onload = init;