let arr = [];

function tomarDatos() {
  let num = Number($("#txtNum").val());
  $("#pMostrar").html(agregar(num));
}

$("#btnAgregar").click(tomarDatos);

function agregar(num) {
  arr.push(num);

  return "ok";
}

$("#btnMostrar").click(pro);

function returnpro() {
  var promedio = 0;
  var suma = 0;
  for (i = 0; i < arr.length; i++) {
    suma += arr[i];
  }

  promedio = suma / arr.length;
  alert("suma " + suma);

  alert("promedio " + promedio);

  return promedio;
}

function pro() {
  $("#pMostrar").html("el promedio es: " + returnpro());
}
