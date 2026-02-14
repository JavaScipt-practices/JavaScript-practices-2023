var casa=100.000;
var comprador;

$("#calcular").click(calcular);

function calcular() {
var casa = Number($("#casa").val());
var comprador = Number($("#comprador").val());

  if (comprador < 20000) {
    var pPago=casa*0.15;
    var parcial=(casa+pPago)/84;
    $("#pagar").html("Debera pagar: USD" + pPago + " como pago principal y USD" + parcial
    + " mensuales durante 7 años.");
  }
  if (comprador >= 20.000) {
    var pPago=casa*0.30;
    var parcial=(casa-pPago)/12;
    $("#pagar").html("Debera pagar: USD" + pPago + " como pago principal y USD" + parcial
    + " mensuales durante 1 año.");
    
  }
  
}