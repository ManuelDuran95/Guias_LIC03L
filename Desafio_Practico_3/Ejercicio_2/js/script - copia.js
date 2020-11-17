
//declaracion de variables
//Inicialización de variables
var numeros = new Array();
var i, max, temp, contenido="", tdelement,mayor, menor;
var aux;
aux = 6;
var i, j;
temp=0;
var promedio1=0;
var promedio2=0;
var promedio3=0;

max=5;
var numero = 2;
numeros=[1,2,4];

var N1='';
var N2='';
var N3='';
var N1A1=0;
var N2A1=0;
var N3A1=0;
var N1A2=0;
var N2A2=0;
var N3A2=0;
var N1A3=0;
var N2A3=0;
var N3A3=0;

function Alumno(Nombre,Nota1,Nota2,Nota3,Prome,estado){
    this.Nombre=Nombre;
    this.Nota1=Nota1;
    this.Nota2=Nota2;
    this.Nota3=Nota3;
    this.Prome=Prome;
    this.estado=estado;
    
}
//var alumno1 = new Alumno(document.getElementById('NombreA1').value,document.getElementById('nota1A1').value,document.getElementById('nota2A1').value,document.getElementById('nota3A1').value);




function iniciar() {
    //Obtener elementos desde html
    //Nombres
  
    //Alumno1
       
 N1=document.getElementById('NombreA1').value;
 N2=document.getElementById('NombreA2').value;
 N3=document.getElementById('NombreA3').value;
 N1A1=document.getElementById('nota1A1').value;
 N2A1=document.getElementById('nota2A1').value;
 N3A1=document.getElementById('nota3A1').value;
 N1A2=document.getElementById('nota1A2').value;
 N2A2=document.getElementById('nota2A2').value;
 N3A2=document.getElementById('nota3A2').value;
 N1A3=document.getElementById('nota1A3').value;
 N2A3=document.getElementById('nota2A3').value;
 N3A3=document.getElementById('nota3A3').value;
    
    
 
 
    
}

//Eventos la hacer click


function limpiar() {
    txtNum.value = "";

}
// onClick="agregar()

//btnMostrar.onclick = function (e) {
  //  mostrar1();
    //limpiar();
//}
function comprobar(){
    if(nota<0 || nota>10){
        txtN=document.innerHTML="j";
    }

    return true;

}
function recarg(){
    location.reload();
}
function promedio(){
    if(aux!=0){
        alert("Compruebe los campos");
    }
    else{
        mostrar1();
    }

}
function comparar ( a, b ){ return a - b; }
function estado (estados){
   
    if(estados<4){
        return 'Reprobado';
    }
    if(estados>= 4 || estados<7){
        return 'Regular';
    }
    if(estados>=7 ){
        return 'Aprobado';
    }
}

function mostrar1() {
    var aux1;
    var datos = document.getElementById('info');
    var promedios=[];
    var c1=document.getElementById("txtN");
    var c2=document.getElementById("txtN2");
    var c3=document.getElementById("txtN3");
    alumno1 = new Alumno(document.getElementById('NombreA1').value,document.getElementById('nota1A1').value,document.getElementById('nota2A1').value, N3A1=document.getElementById('nota3A1').value);
    alumno2 = new Alumno(document.getElementById('NombreA2').value,document.getElementById('nota1A2').value,document.getElementById('nota2A2').value, N3A1=document.getElementById('nota3A2').value);
    alumno3 = new Alumno(document.getElementById('NombreA3').value,document.getElementById('nota1A3').value,document.getElementById('nota2A3').value, N3A1=document.getElementById('nota3A3').value);
 
 
        
    promedio1=(parseFloat(alumno1.Nota1)+parseFloat(alumno1.Nota2)+parseFloat(alumno1.Nota3))/3;
    promedio2=(parseFloat(alumno2.Nota1)+parseFloat(alumno2.Nota2)+parseFloat(alumno2.Nota3))/3;
    promedio3=(parseFloat(alumno3.Nota1)+parseFloat(alumno3.Nota2)+parseFloat(alumno3.Nota3))/3;
    
    alumno1.Prome=promedio1.toFixed(2);
    alumno2.Prome=promedio2.toFixed(2);
    alumno3.Prome=promedio3.toFixed(2);
    
    promedios.sort( comparar );  // [ 1, 5, 40, 200 ]
    
    //Aprobados reprobados
    aux1=estado(alumno1.promedio);
    alumno1.estado=aux1;
  
    

    c1.innerHTML ="Nombre Alumno 1: "+ alumno1.Nombre+" Notas: "+ "Nota 1: " + alumno1.Nota1+" Nota 2: " + alumno1.Nota2+" Nota 3: "+alumno1.Nota3+ " Promedio: "+alumno1.Prome +" Estado: " +alumno1.estado;
    c2.innerHTML ="Nombre Alumno 2: "+ alumno2.Nombre+" Notas: "+ "Nota 1: " + alumno2.Nota1+" Nota 2: " + alumno2.Nota2+" Nota 3: "+alumno2.Nota3+ " Promedio: "+alumno2.Prome;
    c3.innerHTML ="Nombre Alumno 3: "+ alumno3.Nombre+" Notas: "+ "Nota 1: " + alumno3.Nota1+" Nota 2: " + alumno3.Nota2+" Nota 3: "+alumno3.Nota3+ " Promedio: "+alumno3.Prome;




   





    
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
   }