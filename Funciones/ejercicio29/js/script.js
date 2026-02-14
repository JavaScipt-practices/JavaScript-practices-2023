var base;
var altura;

function calcularAreaTriangulo(base, altura) {
  if (base > 0 && altura > 0) {
    return (base * altura) / 2;
  } else {
    var valid = -1;
  }
  return valid;
}
$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  base = Number($("#txtBase").val());
  altura = Number($("#txtAltura").val());
  $("#pMostrar").html(calcularAreaTriangulo(base, altura));
}
