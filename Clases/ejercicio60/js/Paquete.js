let arr = [];

class Paquete {
  constructor(cod_paquete, _destinatario, _descripcion, _direccion) {
    this.cod_paquete = cod_paquete;
    this.destinatario = _destinatario;
    this.descripcion = _descripcion;
    this.direccion = _direccion;
  }

  datosPaquete(cod_paquete, _destinatario, _descripcion, _direccion) {
    arr.push(cod_paquete, _destinatario, _descripcion, _direccion);
    let s = "";
    for (var i = 0; i < arr.length; i++) {
      s += "Paquete: " + arr[i] + "<br>";
    }
    return s;
  }
}

export default Paquete;
