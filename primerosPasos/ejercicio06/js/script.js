var num1;
var num2;

$("#btnIntercambiar").click(intercambiar);

function intercambiar() {
    num1 = Number($("#txtNum2").val());
    num2 = Number($("#txtNum1").val());

    $("#pMostrar").html("Primer numero: " + num1 + 
    "<br> Segundo numero: " + num2)
}
