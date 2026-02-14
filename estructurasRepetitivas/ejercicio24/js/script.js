var num1;
var num2;
var num3;

$("#btnCalcular").click(calcular);

function calcular() {
    num1 = Number($("#txtNum1").val());
    num2 = Number($("#txtNum2").val());
    num3 = Number($("#txtNum3").val());

    var mayor;
    var menor;


    if(num1 < num2) {
    $("#pMostrar").html("<br>");
        mayor=num2;
        menor=num1;
        for(var i=menor; i<=mayor; i++) {
            if(i % num3 == 0) {
                $("#pMostrar").append(", " + i);
            }
        }
    }else {
        $("#pMostrar").html("<br>");
            mayor=num1;
            menor=num2;
            for(var j=mayor; j>=menor; j--) {
                if(j % num3 == 0) {
                    $("#pMostrar").append(", " + j);
                }
            }
        }
    

    }


