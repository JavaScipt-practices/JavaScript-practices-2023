var _n1;
var _n2;

$("#btnMostrar").click(tomarDatos);

function pares(_n1, _n2) {
  var txt = "";

  for (var i = _n1; i <= _n2; i++) {
    if (i % 2 == 0) {
      txt += i + ", ";
    }
  }

  return txt;
}

function tomarDatos() {
  _n1 = Number($("#txtNum1").val());
  _n2 = Number($("#txtNum2").val());
  var retorno = pares(_n1, _n2);
  $("#pMostrar").html(retorno);
}
