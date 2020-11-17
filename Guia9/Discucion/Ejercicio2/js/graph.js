function initAll() {
    var radioButtons = document.getElementsByTagName("input");
    
    chgChart();
    
}
var jsChart = new Object();
jsChart.field1 = new Array();
var data = new Array(); // creating array
var aux=1;
function add_element(){
jsChart.field1.push(document.getElementById('t1').value); // adding element to array
aux++;
document.getElementById('t1').value=''; // Making the text box blank
disp(); // displaying the array elements
}

function disp(){
var str='';
str = 'Elementos agregados: ' + jsChart.field1.length + '<br>';
for (i=0;i<jsChart.field1.length;i++) 
{ 
str += i + ':'+jsChart.field1[i]+ "<br >" ;  // adding each element with key number to variable

} 

document.getElementById('disp').innerHTML=str; // Display the elements of the array
}


function chgChart() {
    //Definiendo el objeto y propiedades para el gráfico de navegadores (browsers)
    
    //Definiendo el objeto y propiedades para el gráfico de Sistemas Operativos
    
    jsChart.name = "Datos ingresados por el usuario";
   // jsChart.years = new Array("2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015");
    jsChart.fieldnames = new Array(aux);
    //jsChart.field1 = new Array(63.4, 66.5, 78.4, 80.2, 88.1, 89.1, 94, 89.6, 95.8, 48.25);
    //jsChart.field2 = new Array(10.2, 8.5, 7.4, 8.2, 6.1, 7.3, 5.6, 7.6, 8.8, 9.5);
    //jsChart.field3 = new Array(5.8, 6.9, 8.1, 8.2, 7.6, 10.4, 9.1, 10.5, 12.4, 6.2);
    //jsChart.field4 = new Array(3.2, 4.1, 3.5, 3.8, 4.6, 5.2, 3.8, 3.2, 4.8, 1.75);
    jsChart.fields = new Array(jsChart.field1);
    //Dibujo del gráfico de barras
    
    var imgSrc = "img/lilBlue.gif";
    var thisChart = "browser";
    var chartBody = "<h2>" + this.jsChart.name + "</h2>\n<table>\n";
    for (var i = 0; i < this.jsChart.fieldnames.length-1; i++) {
        chartBody += "<thead>\n";
       
            chartBody += "<tr>\n<th rowspan='" + (this.jsChart.fieldnames.length + 1) + "'class='vert' > ";
            
            chartBody += "</th>\n";
            chartBody += "<td colspan='2'></td></tr>";
           
                chartBody += "<tr>\n<td class='vert'>";
               
                chartBody += "</td><td>";
                chartBody += "<img src='" + imgSrc + "' height='25' ";
                chartBody += "width='" +jsChart.field1[i] * 4 + "' ";
                chartBody += "alt='Barras Verticales' />";
                chartBody += "&nbsp;&nbsp;" + jsChart.field1[i] + "</td>\n</tr>\n";
            
        }
        
        chartBody += "</thead>\n";
    
    chartBody += "</table>";
    document.getElementById("chartArea").innerHTML = chartBody;
    
}
function borrar(){
    document.getElementById("chartArea").innerHTML='';
    document.getElementById('disp').innerHTML='';
    
  while(jsChart.field1.length>0){ 
    jsChart.field1.pop();
    
}
while(jsChart.fieldnames.length>0){ 
    
    jsChart.fieldnames.pop();
}

}
if (window.addEventListener) {
    window.addEventListener("load", initAll, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", initAll);
}
