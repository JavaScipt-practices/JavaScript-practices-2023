var monto;
var tarjeta="";


$("#btnCalcular").click(calcular);


function calcular() {
    var monto = Number($("#txtMonto").val());
    var tarjeta = $("#txtTarjeta").val();
    if (tarjeta == "si" && monto < 10000) {
        var resto=(monto*4)/100;
        var total=monto-resto;
        $("#pMostrar").html("Pago de " + monto + " con tarjeta, costo final: " + total);

    }else if (tarjeta == "si" && monto > 10000) {
        var total=monto;
        $("#pMostrar").html("Pago de " + monto + " con tarjeta, costo final: " + total);


    }
    if (tarjeta == "no") {
        var total=monto;
        $("#pMostrar").html("Pago de " + monto + " sin tarjeta, costo final: " + total);

    }



}

