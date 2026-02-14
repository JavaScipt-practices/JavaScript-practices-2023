let per = [];

function tomarDatos() {
  let nombre = $("#txtNombre").val();
  let apellido = $("#txtApellido").val();
  let edad = Number($("#txtEdad").val());

  $("#msg").html(agregar(nombre, apellido, edad));

  if (per.length == 10) {
    $("#btnAgregar").attr("disabled", "disabled");
  }
}

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
$("#btnAgregar").click(tomarDatos);

function agregar(nombre, apellido, edad) {
  let p = new Persona(nombre, apellido, edad);
  per.push(p);
  return "ok ";
}

$("#btnMostrar").click(mostrar);

function mostrar() {
  for (i = 0; i < per.length; i++) {
    $("#msg").append(
      " Nombre: " +
        per[i].nombre +
        " Apellido: " +
        per[i].apellido +
        " Edad: " +
        per[i].edad
    );
  }
  for (j = 0; j < per.length; j++) {
    if (per[j].edad > 18) {
      $("#msg").append(
        " <p style=color:green>Los mayores de edad son:</p> " +
          " <p style=color:green>Nombre:</p> " +
          per[j].nombre +
          " <p style=color:green>Apellido:</p> " +
          per[j].apellido +
          " <p style=color:green>Edad</p> " +
          per[j].edad
      );
    }
  }
}
