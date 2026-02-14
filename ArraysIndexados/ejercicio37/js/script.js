
var palabras = [];



function tomarDatos() {

  let palabra = $("#txtPalabra").val();

  $("#pMostrar").html(agregar(palabra));

}

$("#btnAgregar").click(tomarDatos);



function agregar(palabra) {

  palabras.push(palabra);

  return "ok";

}



$("#btnMostrar").click(mostrar);



function mostrar() {

  for (i = 0; i < palabras.length; i++) {

    $("#pMostrar").append("Las palabras son: " + palabras[i]);

  }

}
