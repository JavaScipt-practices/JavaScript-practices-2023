var texto;

function vocales(texto) {
  var priLe = texto.charAt(0).toUpperCase();
  var ulLe = texto.charAt(texto.length - 1).toUpperCase();
    if (priLe == ulLe) {
      var resul="Empieza y termina con la misma letra"; 
    }else {
      var resul="Empieza y termina con diferente letra";
    }
  
  return resul;
}

$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  texto = $("#txtTexto").val();
  $("#pMostrar").html(vocales(texto));
}
