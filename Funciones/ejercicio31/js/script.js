var oral = 0;
var tarea = 0;
var escrito = 0;
var practico = 0;
var nombre = "";

function promedio(oral, tarea, escrito, practico) {
  var promedio = (oral + tarea + escrito + practico) / 4;
  return promedio;
}

function pasaOrepite(nombre, promedio) {
  if (promedio > 7) {
    var res = "Exonero " + nombre + " con: " + promedio;
  } else {
    var res = "Se fue a examen de " + nombre + " con: " + promedio;
  }
  return res;
}

$("#btnMostrar").click(obtenerDatos);

function obtenerDatos() {
  nombre = $("#txtNombre").val();
  oral = Number($("#txtOral").val());
  tarea = Number($("#txtTarea").val());
  escrito = Number($("#txtEscrito").val());
  practico = Number($("#txtPractico").val());

  var pasa = promedio(oral, tarea, escrito, practico);

  $("#pMostrar").html(pasaOrepite(nombre, pasa));
}
