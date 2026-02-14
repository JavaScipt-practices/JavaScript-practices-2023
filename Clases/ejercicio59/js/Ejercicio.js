$("#btnHace").click(hace);
import Camionero from "./Camionero.js";
import Camion from "./Camion.js";

function hace() {
  var ci = Number($("#txtCi").val());
  var s = Number($("#txtSueldo").val());
  var d = $("#txtDireccion").val();

  var ma = Number($("#txtMatricula").val());
  var m = Number($("#txtModelo").val());
  var t = $("#txtTipo").val();

  let p = new Camionero(ci, s, d);
  let c = new Camion(ma, m, t);
  //console.log(p.saludar());
  $("#pResultado").html(p.datosCamionero() + " " + p.conduce(ci, ma));
  $("#pResultado").append(c.datosCamion());
}
