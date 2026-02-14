let user = [];

function tomarDatos() {
  let email = $("#txtEmail").val();
  let contra = $("#txtContra").val();
  let saldo = Number($("#txtSaldo").val());
  $("#msg").html(agregar(email, contra, saldo));

  if (user.length == 5) {
    $("#btnAgregar").attr("disabled", "disabled");
  }
}
function Usuario(email, contra, saldo) {
  this.email = email;
  this.contra = contra;
  this.saldo = saldo;

}
$("#btnAgregar").click(tomarDatos);

function agregar(email, contra, saldo) {
  let u = new Usuario(email, contra, saldo);
  user.push(u);
  return "ok";
}

/*function repetidos() {
  let rep = [];

  for (i = 0; i < user.length; i++) {

    for (j = 0; j < user.length; j++) {
      if (user[i].email != user[j].email) {
        rep.push(user[j].email);
      }
    }
  }

}
*/
$("#btnMostrar").click(mostrar);

function mayores() {
  let mayor = user[0];

  for (j = 0; j < user.length; j++) {
    if (mayor < user[j]) {
      mayor.push(user[j]);
    }
  }

  return mayor;
}


function mostrar() {
  $("#msg").html(mayores(user));


}
