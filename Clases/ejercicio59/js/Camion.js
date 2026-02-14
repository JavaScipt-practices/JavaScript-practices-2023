class Camion {
  constructor(_matricula, _modelo, _tipo) {
    this.matricula = _matricula;
    this.modelo = _modelo;
    this.tipo = _tipo;
  }

  datosCamion() {
    return `Camion:, ${this.matricula} ${this.modelo} ${this.tipo}`;
  }
}
export default Camion;
