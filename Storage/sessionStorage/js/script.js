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
  sessionStorage.setItem("Texto", texto);
}
function mostrar() {
  var item = sessionStorage.getItem("Texto");
  alert(item);
}
function modificar() {
  sessionStorage.setItem("Texto", "hola123");
}
function eliminar() {
  sessionStorage.removeItem("Texto");
}
