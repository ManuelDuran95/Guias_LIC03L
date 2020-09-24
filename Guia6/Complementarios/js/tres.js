var frutas = ["Banana", "Naranja", "Manzana", "Mango"];
document.getElementById("demo").innerHTML = frutas;

function myFunction() {
  frutas.reverse();
  document.getElementById("demo").innerHTML = frutas;
}