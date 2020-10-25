//Registrar evento click al presionar el botón de envío
function iniciar(){
var btnenviar = document.getElementById("btnSend");
//Al producirse un click sobre el botón de envío
//invocar los métodos del objeto carro que mostrarán
//los valores ingresados en el formulario
if(btnenviar.addEventListener){
btnenviar.addEventListener("click", function(){
var chkvalue, selvalue, nuevoalumno;
var radiofield = document.frmmat.elements["chkgender"];
for(var i=0; i<radiofield.length; i++){
if(radiofield[i].checked){
chkvalue = radiofield[i].value;
}
}


nuevoalumno = new miembro(document.frmmat.txtname.value, document.frmmat.txtlastname.value,document.frmmat.txtlastname2.value,

document.frmmat.txtage.value, chkvalue, selvalue);
nuevoalumno.matricular();
nuevoalumno.imprimir();
}, false);
}
else{
btnenviar.attachEvent("onclik", function(){
var chkvalue, nuevoalumno;
var radiofield = document.frmmat.elements["chkgender"];
for(var i=0; i<radiofield.length; i++){
if(radiofield[i].checked){
chkvalue = radiofield[i].value;
}
}
selvalue = document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;

nuevoalumno = new miembro(document.frmmat.txtname.value, document.frmmat.txtlastname.value,document.frmmat.txtlastname2.value,

document.frmmat.txtage.value, chkvalue);
nuevoalumno.matricular();
nuevoalumno.imprimir();
});
}
}
//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function miembro(nombre, apellido,apellido2, edad, genero){
//Propiedades de la clase
this.nombre = nombre;
this.apellido = apellido;
this.apellido2 = apellido2;
this.edad = edad;
this.genero = genero;

this.numCarnet = null;
//Métodos de la clase
this.matricular = function(){
var fecha = new Date();
var year = fecha.getFullYear();
var day = fecha.getDate();
var sec = fecha.getSeconds();
this.numCarnet = this.apellido.substring(0,1)+this.apellido2.substring(0,1) + Math.floor(Math.random() * (9999 - 1000 + 1) );
}
this.imprimir = function(){
document.write("<!DOCTYPE html>\n");
document.write("<html lang=\"es\">\n");
document.write("<head>\n\t");
document.write("<title>Miembro agregado correctamente</title>\n");
document.write("<meta charset=\"utf-8\" />");
document.write("<link rel=\"stylesheet\" href=\"css/infoalumno.css\"/>\n");
document.write("</head>\n");
document.write("<body>\n");
document.write("<table class=\"carinfo\"><tr>\n");
document.write("<th colspan=\"2\">Datos del nuevo miembro</th>\n");
document.write("<tr><td>ID: </td>\n");
document.write("<td>" + this.numCarnet + "</td></tr>\n");
document.write("<tr><td>Nombre: </td>\n");
document.write("<td>" + this.nombre + " " + this.apellido+" " +this.apellido2+ "</td></tr>\n");
document.write("<tr><td>Edad: </td>\n");
document.write("<td>" + this.edad + "</td></tr>\n");
document.write("<tr><td>Género: </td>\n");
document.write("<td>" + this.genero + "</td></tr>\n");

document.write("</tr></table>\n");
document.write("</head>\n");
document.write("</html>\n");
}
this.formato = function(valor){
if(valor<10) valor = "0" + valor;
return valor;
}
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}