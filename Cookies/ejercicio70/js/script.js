document.getElementById("btnMostrar").addEventListener("click", mostrar);
document.getElementById("btnCrear").addEventListener("click", crear);
document.getElementById("btnModificar").addEventListener("click", modificar);
document.getElementById("btnEliminar").addEventListener("click", eliminar);

function mostrar() {
  alert(document.cookie);
}

function crear() {
  document.cookie =
    "usuario=Santiago; expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/;";
}

function modificar() {
  document.cookie =
    "usuario=Santiago1234; expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/;";
}
function eliminar() {
  document.cookie =
    "usuario=Santiago1234; expires=Thu, 31 Dec 2022 12:00:00 UTC; path=/;";
}
