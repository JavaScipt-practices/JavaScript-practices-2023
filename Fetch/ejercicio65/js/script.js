$("#btnConsultar").click(climaActual);

function climaActual() {
  let ciudad = $("#txtCiudad").val();
  let pais = $("#sel_paises").val();
  let dias = Number($("#txtDias").val());

  fetch(
    "http://api.openweathermap.org/data/2.5/forecast/daily/?appid=e62b2530fdb5f4ba3559c07c8634e5c7&lang=es&units=metric&q=" +
      ciudad +
      "," +
      pais +
      "&cnt=" +
      dias
  )
    .then((res) => res.json())
    .then((ciudad) => {
      console.log(ciudad);

      alert(urlIcono);
      for (var i = 0; i < ciudad.list.length; i++) {
        var icono = ciudad.list[i].weather[0].icon;

        var urlIcono = "https://openweathermap.org/img/wn/" + icono + ".png";
        $("#msg").append(
          "<br>Temperatura actual:<br>" +
            ciudad.list[i].temp.day +
            "Temperatura minima:<br>" +
            ciudad.list[i].temp.min +
            "Temperatura maxima:<br>" +
            ciudad.list[i].temp.max +
            "Descripcion:<br>" +
            ciudad.list[i].weather[0].description +
            " " +
            "<img src='https://openweathermap.org/img/wn/" +
            icono +
            ".png'/> <br><br>"
        );
      }
    });
}
