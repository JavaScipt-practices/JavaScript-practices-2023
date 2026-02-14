$("#btnIngresar").click(agregarUsuario);
function agregarUsuario() {
  var usu = $("#txtUsuario").val();
  var con = $("#txtContra").val();

  var settings = {
    url: "https://destinos.develotion.com/login.php",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      usuario: usu,
      password: con,
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    if (response.codigo == 200) {
      var key = response.apiKey;
      var id = response.id;
      agregarVentas(key);
      $("#mensaje").append("apiKey: " + key + ", id: " + id);
    } else $("#mensaje").append(response.mensaje);
  });
}

function agregarVentas(key) {
  var settings = {
    url: "https://destinos.develotion.com/ventas.php",
    method: "POST",
    timeout: 0,
    headers: {
      apikey: key,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      idVendedor: 7,
      nombreCliente: "Nuevo cliente S",
      idPaquete: 1,
      cantidadMayores: 4,
      cantidadMenores: 2,
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    $("#mensaje").append(response.mensaje);
  });
}
