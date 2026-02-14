const requeridas = [
  { matricula: "Jhon" },
  { matricula: "Ana" },
  { matricula: "Miguel" },
  { matricula: "Antonio" },
  { matricula: "Alejadra" },
  { matricula: "Sandra" },
  { matricula: "Angel" },
  { matricula: "Mikey" },
  { matricula: "Donald" },
  { matricula: "Walter" },
];

function tomarDatos() {
  let dato = $("#txtMatricula").val();
  $("#msg").html(ins);
}

$("#btnVerificar").click(tomarDatos);

let ins = requeridas.find((dato) => {
  dato.matricula === "A";
  $("#msg").html(`<p style= color:red>Matricula requerida</p>`);
  $("#msg").html(`<p style= color:green>Matricula no requerida</p>`);
});
