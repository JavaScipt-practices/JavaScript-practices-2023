const triple = (escrito, oral, practico) => (escrito + oral + practico) / 3;

var nombre = "matematicas";
var escrito = 10;
var oral = 8;
var practico = 12;

$("#msg").html(nombre + " Promedio: " + triple(escrito, oral, practico));
