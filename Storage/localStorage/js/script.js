var btnCrear = document
  .getElementById("btnCrear")
  .addEventListener("click", crear);
var btnMostrar = document
  .getElementById("btnMostrar")
  .addEventListener("click", mostrar);
var btnModificar = document
  .getElementById("btnModificar")
  .addEventListener("click", modificar);
var btnEliminar = document
  .getElementById("btnEliminar")
  .addEventListener("click", eliminar);

var mensaje = document.getElementById("p");

function crear() {
  var texto = document.getElementById("txt").value;
  localStorage.setItem("Texto", texto);
}
function mostrar() {
  var item = localStorage.getItem("Texto");
  alert(item);
}
function modificar() {
  localStorage.setItem("Texto", "hola123");
}
function eliminar() {
  localStorage.removeItem("Texto");
}
