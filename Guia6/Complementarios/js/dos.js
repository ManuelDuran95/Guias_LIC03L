var frutas = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = frutas;
document.getElementById("demo2").innerHTML = frutas;
function myFunction() {
    frutas.push("Kiwi");
    document.getElementById("demo").innerHTML = frutas;
  }
  function myFunction2() {
    frutas.pop();
    document.getElementById("demo2").innerHTML = frutas;
  }