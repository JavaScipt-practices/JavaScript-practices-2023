$("#btnMostrar").click(login);

function login() {
  var usu = $("#txtUsuario").val();
  var con = $("#txtContra").val();

  var myHeaders = new Headers();
  myHeaders.append("apikey", "b473030cd68964354a4228ca925f5180");
  myHeaders.append("Content-Type", "application/json");

  var urlencoded = new URLSearchParams();

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
        listaPaquetes(apiKey);
        $("#respuesta").html("Id: " + usuario + "<br>Llave: " + apiKey);
      } else {
        $("#respuesta").html(result.mensaje);
      }
    })
    .catch((error) => console.log("error", error));
}
function listaPaquetes(apiKey) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", apiKey);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://destinos.develotion.com/paquetes.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      var icono = result.destinos[0].foto;
      $("#respuesta").html(
        "Nombre: " +
          result.destinos[0].nombre +
          "<br>" +
          "Precio mayor: " +
          result.destinos[0].precio_mayor +
          "<br>" +
          "Precio menor: " +
          result.destinos[0].precio_menor +
          " " +
          "<img src='https://destinos.develotion.com/imgs/foto1.jpg'/>"
      );
    })
    .catch((error) => console.log("error", error));
}
