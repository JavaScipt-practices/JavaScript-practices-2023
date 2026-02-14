let arr = [];
class Camionero {
  constructor(_ci, _sueldo, _direccion) {
    this.ci = _ci;
    this.sueldo = _sueldo;
    this.direccion = _direccion;
  }

  datosCamionero() {
    return `Datos del camionero: ${this.ci} ${this.sueldo} ${this.direccion}`;
  }

  conduce(_ci, _matricula) {
    arr.push(_ci, _matricula);
    let r = "";
    for (var i = 0; i < arr.length; i++) {
      alert("sdsd");

      r += "Conduce:" + arr[i];
    }
    return r;
  }
}
export default Camionero;
