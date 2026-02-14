var arr = [];

function tomarDatos() {
  let num = Number($("#txtNum").val());
  $("#pMostrar").html(agregar(num));
}

$("#btnAgregar").click(tomarDatos);

function agregar(num) {
  arr.push(num);
  return "ok";
}

$("#btnMostrar").click(mayor);

function returnmayor() {
  var mayor = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}

function mayor() {
  $("#pMostrar").html(arr + "<br>");
  $("#pMostrar").append("el mayor es: " + returnmayor());
}
