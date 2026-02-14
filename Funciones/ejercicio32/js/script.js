var tipoDeUsuario;
var dias;
var horas;
var materiales;

function validar(dias, horas) {
  if (isNaN(dias) && isNaN(horas) && dias < 0 || horas < 0) {
    return true;
  } else {
    return false;
  }
}
function usuario(tipoDeUsuario, dias, horas) {
  if (tipoDeUsuario == "si") {
    var salario = (250 + 150) * horas * dias;
  } else {
    var salario = 250 * horas * dias;
  }
  return salario;
}
function calcMat(materiales) {
  var totalFinal = materiales + materiales * 0.1;
  return totalFinal;
}
$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  materiales = Number($("#txtCoMat").val());
  dias = Number($("#txtDias").val());
  horas = Number($("#txtHoras").val());
  tipoDeUsuario = $("#txtTipoDeUsuario").val();
  var presupuestoFinal =
    usuario(tipoDeUsuario, dias, horas) + calcMat(materiales);
  var val = validar(dias, horas);
  $("#pMostrar").html(
    "La validacion es: " +
      val +
      " y el presupuesto final es: " +
      presupuestoFinal
  );
}
