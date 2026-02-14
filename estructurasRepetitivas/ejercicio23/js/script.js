var dividendo;
var divisor;

$("#btnCalcular").click(mostrar);

function mostrar() {
  dividendo = Number($("#txtNum1").val());
  divisor = Number($("#txtNum2").val());
  var cociente=0;

  do {
    dividendo -= divisor;
    cociente++;
  } while (dividendo >= divisor);

  $("#pMostrar").append("El cociente es: " +  cociente + "<br> \n");
  $("#pMostrar").append("El resto es: " +  dividendo);

}
