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

$("#btnMostrar").click(may);

function retornomay(arr) {
  var nuevoArr=[];
  for(i=0; i < arr.length; i++) {
    if(arr[i] > 20) {
      nuevoArr.push(arr[i]);
    }
  }
  return nuevoArr;
}

function may() {
  $("#pMostrar").html("Los mayores de 20 son: " + retornomay(arr));
}
