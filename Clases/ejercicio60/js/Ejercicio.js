import Paquete from "./Paquete.js";
import Ciudad from "./Ciudad.js";

$("#btnHace").click(hace);

function hace() {
  //------Paquete-------
  var codigoPaquete = Number($("#txtCodigoPaquete").val());
  var destinatario = $("#txtDestinatario").val();
  var descripcion = $("#txtDescripcion").val();
  var direccion = $("#txtDireccion").val();
  //------------------------

  //------Ciudad-------
  var codigoCiudad = Number($("#txtCodigoCiudad").val());
  var nombreCiudad = $("#txtNombreCiudad").val();
  //----------------------------

  //------Envio-------
  var fechaEnvio = $("#txtFechaEnvio").val();
  //---------------------
  
  let p = new Paquete(codigoPaquete, destinatario, descripcion, direccion);
  let c = new Ciudad(codigoCiudad, nombreCiudad);
  //console.log(p.saludar());
  $("#pResultado").append(p.datosPaquete(codigoPaquete, destinatario, descripcion, direccion) + "<br>");
  $("#pResultado").append(c.datosCiudad(codigoCiudad, nombreCiudad) + "<br>" + c.Envio(codigoPaquete, codigoCiudad, fechaEnvio));
}
