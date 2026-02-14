let arr = [];
let arr1 = [];
class Ciudad {
  constructor(cod_ciudad, _nombre) {
    this.cod_ciudad = cod_ciudad;
    this.nombre = _nombre;
  }
  datosCiudad(cod_ciudad, _nombre) {
    arr1.push(cod_ciudad, _nombre);
    let s = "";
    for (var i = 0; i < arr1.length; i++) {
      s += "Ciudad:" + arr1[i];
    }
    return s;
  }
  

  Envio(cod_paquete, cod_ciudad, fecha) {
    arr.push(cod_paquete, cod_ciudad, fecha);
    let r = "";
    for (var i = 0; i < arr.length; i++) {
      r += "Envio:" + arr[i];
    }
    return r;
  }
}
export default Ciudad;
