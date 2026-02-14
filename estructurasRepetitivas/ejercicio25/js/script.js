var alto = 5;
var ancho = 7;
for (var i = 1; i <= alto; i++) {
  $("#pMostrar").append("<br>");
    for (var h = 1; h <= ancho + i*-2; h++) {
      $("#pMostrar").append("0");
    }
  }

alto = 1;
ancho = 1;
for (i = 2; i >= alto; i--) {
  $("#pMostrar").append("<br>");
  for (j = 7; j >= ancho + i*2; j--) {
    $("#pMostrar").append("0");
  }
}
