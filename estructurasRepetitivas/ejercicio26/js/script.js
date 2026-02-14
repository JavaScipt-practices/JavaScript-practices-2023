var mes;
var dias;
var calendario;
var domingo;
var lunes;
var martes;
var miercoles;
var jueves;
var viernes;
var sabado;

$("#btnMostrar").click(mostrar);

function mostrar() {
  mes = $("#txtMes").val();
  dias = $("#txtDiasSe").val();
  domingo = $("#Domingo").val();
  lunes = $("#Lunes").val();
  martes = $("#Martes").val();
  miercoles = $("#Miercoles").val();
  jueves = $("#Jueves").val();
  viernes = $("#Viernes").val();
  sabado = $("#Sabado").val();

  $("#head").html(mes + " de 2023");

  //creo las filas
  for (var i = 1; i <= 7; i++) {
    $("#Calendario").append("<tr></tr>");
    //creo las celdas
    for (var j = 1; j <= 7; j++) {
      $("#Calendario").append("<td></td>");
      for (
        var k = 1;
        dias == domingo ||
        dias == lunes ||
        dias == martes ||
        dias == miercoles ||
        dias == jueves ||
        dias == viernes ||
        (dias == sabado && k <= 7);
        k++
      ) {
        $("#Calendario").append(dias);
      }
    }
  }
}
