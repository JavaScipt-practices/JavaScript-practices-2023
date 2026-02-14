$("#btnAceptar").click(aceptar);

function aceptar() {
  var user = $("#txtUser").val();
  if (user == "a" || user == "e" || user == "i" || user == "o" || user == "u") {
    $("#btnAceptar").attr("value", "ENTRAR");
  } else {
    $("#btnAceptar").attr("disabled", "disabled");
  }
}
