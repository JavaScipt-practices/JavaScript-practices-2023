var letra;
var texto;

function indicar(texto, letra) {
  var cont = 0;
  for (var i = 0; i <= texto.length; i++) {
    if (letra == texto.charAt(i)) {
      cont++;
    }
  }
  return cont;
}

$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  texto = $("#txtTexto").val();
  letra = $("#txtLetra").val();
  $("#pMostrar").html("La letra aparece: " + indicar(texto, letra));
}
