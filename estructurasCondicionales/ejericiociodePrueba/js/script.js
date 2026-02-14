var he;
var hs;
var ced;

$("#calcular").click(calcular);

function calcular() {
  var he = Number($("#HE").val());
  var hs = Number($("#HS").val());
  var ced = Number($("#ced").val());

  var res = he + hs;

  $("#parrafo").html(
    "Hora de entrada: " +
      he +
      "<br>" +
      "hora de salida: " +
      hs +
      "<br>" +
      "Cedula: " +
      ced +
      "<br>" +
      "Total de horas: " +
      res
  );
}
