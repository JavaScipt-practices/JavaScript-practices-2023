var edad;
var tope = 17;

function esMayor(edad, tope) {
  if (edad > tope) {
    var res = true;
  } else {
    var res = false;
  }
  return res;
}
$("#btnMostrar").click(obtenerDatos);
function obtenerDatos() {
  edad = Number($("#txtEdad").val());
  var retorno=esMayor(edad,tope);
  if(retorno==true) {
    $("#pMostrar").html("es mayor");

  }else {
    $("#pMostrar").html("no es mayor");

  }
}
