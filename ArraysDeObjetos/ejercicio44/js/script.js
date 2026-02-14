var lista = [];


function tomarDatos() {
  let n = $("#txtNombre").val();
  let e = Number($("#txtEdad").val());
  let retorna = agregar(n, e);
  $("#msg").html(retorna);

}

function agregar(nombre, edad) {
  let p = new Persona(nombre, edad);
  lista.push(p);
  return "ok";
}

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.mostrar = function () {
    return this.nombre + ' ' + this.edad;
  };
}
$("#btnAgregar").click(tomarDatos);


$("#btnMostrar").click(mostrar);


function mostrar() {
  for (i = 0; i < lista.length; i++) {
    $("#msg").append(lista[i].mostrar());
  }
}