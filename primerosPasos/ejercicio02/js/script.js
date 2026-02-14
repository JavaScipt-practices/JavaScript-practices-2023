var num1;
var num2;

$("#btnSumar").click(sumar);

function sumar() {
    num1 = Number($("#txtNum1").val());
    num2 = Number($("#txtNum2").val());
    var suma=num1+num2;
    $("#pMostrar").html(suma);
}