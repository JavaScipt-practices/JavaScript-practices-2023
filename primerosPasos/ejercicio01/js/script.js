var nombre;
var apellido;

$("#btnMostrar").click(mostrar);

function mostrar() {
  var nombre = $("#txtNom").val();
  var apellido = $("#txtApe").val();

  $("#pMostrar").html(nombre + ", " + apellido);
}
