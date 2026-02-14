var nAsign;
var nEstud;
var teorico;
var practico;
var escrito;


$("#btnPromedio").click(calcular);


function calcular() {
    var nAsign = $("#txtAsign").val();
    var nEstud = $("#txtEstud").val();
    var teorico = Number($("#txtTeorico").val());
    var practico = Number($("#txtPractico").val());
    var escrito = Number($("#txtEscrito").val());

    var promedio = (teorico+practico+escrito)/3;

    if(promedio >= 8) {
        $("#pMostrar").html("<style>#pMostrar{color: green;}</style>" + nEstud + ", " + nAsign + ", " + promedio);

    }else if(promedio >= 6) {
        $("#pMostrar").html("<style>#pMostrar{color: yellow;}</style>" + nEstud + ", " + nAsign + ", " + promedio);

    }else {
        $("#pMostrar").html("<style>#pMostrar{color: red;}</style>" + nEstud + ", " + nAsign + ", " + promedio);
    }
}


