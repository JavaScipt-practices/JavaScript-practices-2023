var peso = 0;
var altura = 0;

function calcular(peso, altura) {
  var resul = peso / (altura * 2);
  return resul;
}

function masa(resul) {
  if (resul >= 18 && resul <= 22) {
    var retu = "Bajo peso: " + resul;
  }
  if (resul > 22 && resul <= 25) {
    var retu = "Peso normal: " + resul;
  }
  if (resul > 25 && resul <= 30) {
    var retu = "Sobrepeso: " + resul;
  } else {
    var retu = "error: " + resul;
  }
  return retu;
}
$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  peso = Number($("#txtPeso").val());
  altura = Number($("#txtAltura").val());
  var resul = calcular(peso, altura);
  $("#pMostrar").html(masa(resul));
}
