let arr = [];

function tomarDatos() {
  let nom = $("#txtNom").val();
  $("#pMostrar").html(agregar(nom));
}

$("#btnAgregar").click(tomarDatos);

function agregar(nom) {
  arr.push(nom);
  return "ok";
}

$("#btnMostrar").click(todos);

function retornoTodos(arr) {
  let arrDif = [];
  for (var i = 0; i < arrDif.length; i++) {
    let p = arr[i];
    console.log("Letra actual = " + p);

    if (arrDif.length == 0) {
      arrDif.push(p)
    } else {
      //verifico el dato en el array
      if (!existeEnElArray(arrDif, p)) {
        arrDif.push(p);
      }
    }
  }
  console.log("Nuevo array sin repetidos= " + arrDif);
}
function existeEnElArray(arrDif, p) {
  for (let j = 0; j < arrDif.length; j++) {
    if (p == arrDif[j]) {
      return true;
    }
  }
  return false;
}


function todos() {
  $("#pMostrar").html("Los usuarios son: " + retornoTodos(arr));
}
