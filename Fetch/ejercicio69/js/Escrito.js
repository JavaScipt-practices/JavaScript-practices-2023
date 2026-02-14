$("#btnIngresar").click(agregarUsuario);
function agregarUsuario() {
  var usu = $("#txtNombre").val();
  var con = $("#txtContra").val();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "usuario": usu,
    "password": con
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://destinos.develotion.com/login.php", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.codigo == 200) {
        console.log(result)
        var key = result.apiKey;
        var id = result.id;
        agregarVentas(key);
        $("#mensaje").append("apiKey: " + key + ", id: " + id)
      } else
        $("#mensaje").append(result.mensaje)
    })
    .catch(error => console.log('error', error));
}

function agregarVentas(key) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", key);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "idVendedor": 7,
    "nombreCliente": "Nuevo cliente S",
    "idPaquete": 1,
    "cantidadMayores": 4,
    "cantidadMenores": 2
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("https://destinos.develotion.com/ventas.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      $("#mensaje").append(
  
        result.mensaje
      );
    })
    .catch(error => console.log('error', error));
}
