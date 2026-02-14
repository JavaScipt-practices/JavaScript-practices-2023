let temperaturas = [
  { temp, dia },
  { temp, dia },
  { temp, dia },
  { temp, dia }
];

function tomarDatos() {
  let temp = Number($("#txtTemp").val());
  let dia = Number($("#txtDia").val());
  $("#msg").html(bajoCero)
}
$("#btnMostrar").click(tomarDatos);
$("#btnAgregar").click(agregar);

function agregar(temp, dia) {
  temperaturas.push(temp, dia);
  return "ok";
}

let bajoCero = temperaturas.map((unDato, otro) => {
  if (unDato.temp < 0) {
      return i++;
    }
 
});

let minima = temperaturas.map((unDato) => {
  unDato.temp < 0
  return unDato.temp
});


let maxima = temperaturas.map((unDato) => {
  unDato.temp < 0
  return unDato.temp
});
