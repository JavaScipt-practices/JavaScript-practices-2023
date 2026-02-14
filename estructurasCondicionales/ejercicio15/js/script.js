var cod;
var dep="";

$("#btnCalc").click(calc);


function calc() {
    var cod = $("#txtCod").val();
    if(cod == "A") {
        var dep="Canelones";       
        
    }if(cod == "B") {
        var dep="Maldonado";       

    }if(cod == "C") {
        var dep="Rocha";       

    }if(cod == "D") {
        var dep="Treinta y Tres";       

    }if(cod == "E") {
        var dep="Cerro Largo";       

    }if(cod == "F") {
        var dep="Rivera";       

    }if(cod == "G") {
        var dep="Artigas";       

    }if(cod == "H") {
        var dep="Salto";       

    }if(cod == "I") {
        var dep="Paysandú";       

    }if(cod == "J") {
        $("#pMostrar").html("Río Negro");       

    }if(cod == "K") {
        $("#pMostrar").html("Soriano");       

    }if(cod == "L") {
        $("#pMostrar").html("Colonia");       

    }if(cod == "M") {
        $("#pMostrar").html("San José");       

    }if(cod == "N") {
        $("#pMostrar").html("Flores");       

    }if(cod == "O") {
        $("#pMostrar").html("Florida");       

    }if(cod == "P") {
        $("#pMostrar").html("Lavalleja");       

    }if(cod == "Q") {
        $("#pMostrar").html("Durazno");       

    }if(cod == "R") {
        $("#pMostrar").html("Tacuarembó");       

    }if(cod == "S") {
        $("#pMostrar").html("Montevideo");       

    }
    $("#pMostrar").html(dep);       

}