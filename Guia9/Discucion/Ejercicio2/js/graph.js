function initAll() {
    var radioButtons = document.getElementsByTagName("input");
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].type == "radio") {
            if (radioButtons[i].addEventListener) {
                radioButtons[i].addEventListener("click", chgChart, false);
            }
            else if (radioButtons[i].attachEvent) {
                radioButtons[i].attachEvent("onclick", chgChart);
            }
        }
    }
    chgChart();
    
}
var data = new Array(); // creating array

function add_element(){
data.push(document.getElementById('t1').value); // adding element to array
document.getElementById('t1').value=''; // Making the text box blank
disp(); // displaying the array elements
}

function disp(){
var str='';
str = 'total number of elements in data array : ' + data.length + '<br>';
for (i=0;i<data.length;i++) 
{ 
str += i + ':'+data[i] + "<br >";  // adding each element with key number to variable
} 

document.getElementById('disp').innerHTML=str; // Display the elements of the array
}


function chgChart() {
    //Definiendo el objeto y propiedades para el gráfico de navegadores (browsers)
    
    //Definiendo el objeto y propiedades para el gráfico de Sistemas Operativos
    var jsChart = new Object();
    jsChart.name = "Uso anual de Sistemas Operativos";
    jsChart.years = new Array("2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015");
    jsChart.fieldnames = new Array("Windows", "MAC-OS", "Linux", "Otros");
    jsChart.field1 = new Array(63.4, 66.5, 78.4, 80.2, 88.1, 89.1, 94, 89.6, 95.8, 48.25);
    jsChart.field2 = new Array(10.2, 8.5, 7.4, 8.2, 6.1, 7.3, 5.6, 7.6, 8.8, 9.5);
    jsChart.field3 = new Array(5.8, 6.9, 8.1, 8.2, 7.6, 10.4, 9.1, 10.5, 12.4, 6.2);
    jsChart.field4 = new Array(3.2, 4.1, 3.5, 3.8, 4.6, 5.2, 3.8, 3.2, 4.8, 1.75);
    jsChart.fields = new Array(jsChart.field1, jsChart.field2, jsChart.field3, jsChart.field4);
    //Dibujo del gráfico de barras
    
    var imgSrc = "img/lilBlue.gif";
    var thisChart = (getButton("type") == "browser") ? bChart : jsChart;
    var chartBody = "<h2>" + thisChart.name + "</h2>\n<table>\n";
    for (var i = 0; i < thisChart.years.length; i++) {
        chartBody += "<thead>\n";
        if (currDirection == "horizontal") {
            chartBody += "<tr>\n<th rowspan='" + (thisChart.fields.length + 1) + "'class='horiz' > ";
            chartBody += thisChart.years[i] + "\n";
            chartBody += "</th>\n";
            chartBody += "<td colspan='2'></td></tr>";
            for (var j = 0; j < thisChart.fieldnames.length; j++) {
                chartBody += "<tr>\n<td class='horiz'>";
                chartBody += thisChart.fieldnames[j] + "\n";
                chartBody += "</td><td>";
                chartBody += "<img src='" + imgSrc + "' height='15' ";
                chartBody += "width='" + thisChart.fields[j][i] * 6 + "' ";
                chartBody += "alt='Barras horizontales' />";
                chartBody += "&nbsp;&nbsp;" + thisChart.fields[j][i] + "</td>\n</tr>\n";
            }
        }
        else {
            chartBody += "<tr>\n<th rowspan='2' class='vert'>";
            chartBody += thisChart.years[i];
            chartBody += "</th>";
            for (var j = 0; j < thisChart.fieldnames.length; j++) {
                chartBody += "<td class='vert'>\n";
                chartBody += "<img src='" + imgSrc + "' alt='Barras verticales' ";
                chartBody += "hspace='10' width='15' ";
                chartBody += "height='" + thisChart.fields[j][i] * 3 + "' />\n</td>\n";
            }
            chartBody += "</tr>\n<tr>\n";
            for (j = 0; j < thisChart.fieldnames.length; j++) {
                chartBody += "<td class='vert'>\n";
                chartBody += thisChart.fields[j][i] + "<br />\n";
                chartBody += thisChart.fieldnames[j] + "<br /><br /></td>\n";
            }
            chartBody += "</tr>\n";
        }
        chartBody += "</thead>\n";
    }
    chartBody += "</table>";
    document.getElementById("chartArea").innerHTML = chartBody;
    function getButton(buttonSet) {
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].name == buttonSet && radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }
        return -1;
    }
}
if (window.addEventListener) {
    window.addEventListener("load", initAll, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", initAll);
}
