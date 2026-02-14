var texto;

function vocales(texto) {
  var cont = 0;
  for (i = 0; i < texto.length; i++) {
    if (
      texto.charAt(i).toLowerCase() == "a" ||
      texto.charAt(i).toLowerCase() == "e" ||
      texto.charAt(i).toLowerCase() == "i" ||
      texto.charAt(i).toLowerCase() == "o" ||
      texto.charAt(i).toLowerCase() == "u"
    ) {
      cont++;
    }
  }
  return cont;
}

$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  texto = $("#txtTexto").val();
  $("#pMostrar").html("La cantidad de vocales es: " + vocales(texto));
}
