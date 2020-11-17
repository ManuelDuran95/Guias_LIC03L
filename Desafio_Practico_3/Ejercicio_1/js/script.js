
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

var AE1='';
var AE2='';
var AE3='';
var promeda=0;
var promeda2=0;
var promeda3=0;
var N1A2='';
var N2A2='';
var N3A2=0;
var N1A3=0;
var N2A3=0;
var N3A3=0;

function Alumno(Nombre,Nota1,Nota2,Nota3,Prome,estado,res){
    this.Nombre=Nombre;
    this.Nota1=Nota1;
    this.Nota2=Nota2;
    this.Nota3=Nota3;
    this.Prome=Prome;
    this.estado=estado;
    this.res=res; 
    
}
//metodos del obajeto alumno
Alumno.res=new function(){
    if(this.promedio <4){
        this.estado='Reprobado';
    }
    if(this.promedio >=4 || this.promedio<7){
        this.estado='Regular';
    }
    if(this.promedio >= 7){
        this.estado='Aprobado';
    }

}
//var alumno1 = new Alumno(document.getElementById('NombreA1').value,document.getElementById('nota1A1').value,document.getElementById('nota2A1').value,document.getElementById('nota3A1').value);

var alumno1 = new Alumno();


function iniciar() {
    //Obtener elementos desde html
    //Nombres
  
    //Alumno1
       
 
    
 
 
    
}

//Eventos la hacer click


function limpiar() {
    txtNum.value = "";

}
function enc1(){
   
    if(promeda>=4 || promeda<7){
        AE1='Regular';
    }
    if(promeda>=7){
        AE1='Aprobado';
    }
    else{
        AE2='Reprobado';
    }
}
function enc2(){
    
    if(promeda2>4 || promeda2<7){
        AE2='Regular';
    }
    if(promeda2>=7){
        AE2='Aprobado';
    }
    else{
        AE2='Reprobado';
    }
}
function enc3(){
    if(promeda3<4){
        AE3='Reprobado';
    }
    if(promeda3>=4 || promeda3<7){
        AE3='Regular';
    }
    if(promeda3>=7){
        AE3='Aprobado';
    }
}
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
function esta2 (){
    if(promeda>promeda2 && promeda>promeda3){
        alumno1.res='Mayor Promedio';

    }
    
    if(promeda2>promeda && promeda2>promeda3){
        N1A2='Mayor Promedio';
        alumno1.res='';

    }
    else{
        N1A2='Menor Promedio';
    }
    if(promeda3>promeda && promeda3>promeda2){
        N2A2='Mayor Promedio';
        alumno1.res='';

    }
   
}

function mostrar1() {
    var aux1;
    var datos = document.getElementById('info');
    var promedios=[];
    var c1=document.getElementById("txtN");
    var c2=document.getElementById("txtN2");
    var c3=document.getElementById("txtN3");
    alumno1.Nombre=document.getElementById('NombreA1').value;
    alumno1.Nota1=document.getElementById('nota1A1').value;
    alumno1.Nota2=document.getElementById('nota2A1').value;
    alumno1.Nota3=document.getElementById('nota3A1').value;
    alumno2 = new Alumno(document.getElementById('NombreA2').value,document.getElementById('nota1A2').value,document.getElementById('nota2A2').value, N3A1=document.getElementById('nota3A2').value);
    alumno3 = new Alumno(document.getElementById('NombreA3').value,document.getElementById('nota1A3').value,document.getElementById('nota2A3').value, N3A1=document.getElementById('nota3A3').value);
    alumno1.res='';
 
 
        
    promedio1=(parseFloat(alumno1.Nota1)+parseFloat(alumno1.Nota2)+parseFloat(alumno1.Nota3))/3;
    promedio2=(parseFloat(alumno2.Nota1)+parseFloat(alumno2.Nota2)+parseFloat(alumno2.Nota3))/3;
    promedio3=(parseFloat(alumno3.Nota1)+parseFloat(alumno3.Nota2)+parseFloat(alumno3.Nota3))/3;
    
    alumno1.Prome=promedio1.toFixed(2);
    alumno2.Prome=promedio2.toFixed(2);
    alumno3.Prome=promedio3.toFixed(2);
    
    promedios.sort( comparar );  // [ 1, 5, 40, 200 ]
    
    //Aprobados reprobados
    //alumno1.estado=estado(promedio1);
    promeda=promedio1;
    promeda2=promedio2;
    promeda3=promedio3;
    enc1();
    enc2();
    enc3();
    esta2();
    alumno1.estado=AE1;
    alumno2.estado=AE2;
    alumno3.estado=AE3;
   // alumno1.res=AE1;
    alumno2.res=N1A2;
    alumno3.res=N2A2;
    
    
  
    

    c1.innerHTML ="Nombre Alumno 1: "+ alumno1.Nombre+" Notas: "+ "Nota 1: " + alumno1.Nota1+" Nota 2: " + alumno1.Nota2+" Nota 3: "+alumno1.Nota3+ " Promedio: "+alumno1.Prome +" Estado: " +alumno1.estado+" " +alumno1.res;                       
    c2.innerHTML ="Nombre Alumno 2: "+ alumno2.Nombre+" Notas: "+ "Nota 1: " + alumno2.Nota1+" Nota 2: " + alumno2.Nota2+" Nota 3: "+alumno2.Nota3+ " Promedio: "+alumno2.Prome+" Estado: " + alumno2.estado+" " +alumno2.res;
    c3.innerHTML ="Nombre Alumno 3: "+ alumno3.Nombre+" Notas: "+ "Nota 1: " + alumno3.Nota1+" Nota 2: " + alumno3.Nota2+" Nota 3: "+alumno3.Nota3+ " Promedio: "+alumno3.Prome+" Estado: " +alumno3.estado+" "+ alumno3.res;




   





    
}


