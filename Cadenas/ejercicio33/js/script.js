var texto;
$("#btnMostrar").click(mostrar);

function mostrar() {
  texto = $("#txt").val();
  for (var i = texto.length - 1; i >= 0; i--) {
    $("#pMostrar").append(texto.charAt(i));
  }
}
