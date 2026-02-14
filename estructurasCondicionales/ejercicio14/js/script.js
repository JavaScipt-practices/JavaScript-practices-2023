var millas;
var planPlus;

var millas = Number($("#txtMillas").val());
var planPlus = $("#txtPlus").val();

$("#btnMostrar").click(mostrar);


function mostrar() {
    if(planPlus == "si") {
        if(millas >= 60.000) {
            $("#pMostrar").html("Tengo " + millas +  "y soy parte del plan plus → puedo viajar a Europa como destino más cercano.");
        }
        
        if(millas >= 30.000 && millas < 60.000) {
            $("#pMostrar").html("Tengo " + millas +  "y soy parte del plan plus → puedo viajar a América del Norte como destino mas cercano.");
        }
        
        if(millas >= 15.000 && millas < 30.000) {
            $("#pMostrar").html("Tengo " + millas +  "y soy parte del plan plus → puedo viajar a América del Sur como destino mas cercano.");
        }
    }
    
    
    if(planPlus == "no") {      
        if(millas >= 60.000) {
                $("#pMostrar").html("Tengo " + millas +  " y no soy parte del plan plus → puedo viajar a Europa como destino más lejano.");
                
        }
        if(millas >= 30.000 && millas < 60.000) {
            $("#pMostrar").html("Tengo " + millas +  " y no soy parte del plan plus → puedo viajar a America del Norte como destino más lejano.");
            
        }
        if(millas >= 15.000 && millas < 30.000) {
            $("#pMostrar").html("Tengo " + millas +  " y no soy parte del plan plus → puedo viajar a America del Sur como destino más lejano.");
            
        }
    }
    
    $("#pMostrar").html("¡No tienes millas suficientes!");  
    

}

