var alto;
var ancho;

$("#btnMostrar").click(mostrar);

function mostrar() {
  alto = Number($("#txtAlto").val());
  ancho = Number($("#txtAncho").val());
  $("#pMostrar").html("");
  for (var i = 0; i < alto; i++) {
    for (var j = 0; j < ancho; j++) {
      $("#pMostrar").append("#");
    }
    $("#pMostrar").append("<br>");
  }
}
