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

function retornarMostrar() {
  var largos = [];
  for (i = 0; i < palabras.length; i++) {
    $("#pMostrar").append(largos.push(palabras[i].length) + ", ");
  }
  return largos;
}

function mostrar() {
  $("#pMostrar").html(retornarMostrar());
}

