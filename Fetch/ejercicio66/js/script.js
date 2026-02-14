$("#btnMostrar").click(mostrar);

function mostrar() {
  alert("hola");

  var usu = $("#txtUsuario").val();
  var con = $("#txtContra").val();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    usuario: usu,
    password: con,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://destinos.develotion.com/login.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.codigo == 200) {
        const usuario = result.id;
        const apiKey = result.apiKey;

        $("#respuesta").html("Id: " + usuario + "<br>Llave: " + apiKey);
      } else {
        $("#respuesta").html("el usuario no existe");
      }
    })
    .catch((error) => console.log("error", error));
}
