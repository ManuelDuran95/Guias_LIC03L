
function myFunction() {
    var a = Math.abs(7.25);
    var b = Math.abs(-7.25);
    var c = Math.abs(null);
    var e = Math.abs(2+3);
  
    var x = a + "<br>" + b + "<br>" + c + "<br>" + e;
    document.getElementById("demo").innerHTML = x;
  }
  function myFunction1() {
    document.getElementById("demo1").innerHTML = Math.round(2.5);
  }
  function myFunction2() {
    document.getElementById("demo2").innerHTML = Math.ceil(1.4);
  }
  function myFunction3() {
    document.getElementById("demo3").innerHTML = Math.floor(1.6);
  }
  function myFunction4() {
    document.getElementById("demo4").innerHTML = Math.exp(1);
  }
  function myFunction5() {
    document.getElementById("demo5").innerHTML = Math.log(2);
  }
  function myFunction6() {
    document.getElementById("demo6").innerHTML = Math.random();
  }