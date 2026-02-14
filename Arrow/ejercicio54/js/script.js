let estudiantes = [
  { nombre: "Jhon", promedioFinal: 8 },
  { nombre: "Ana", promedioFinal: 7 },
  { nombre: "Miguel", promedioFinal: 12 },
  { nombre: "Antonio", promedioFinal: 8 },
  { nombre: "Alejadra", promedioFinal: 3 },
  { nombre: "Sandra", promedioFinal: 10 },
  { nombre: "Angel", promedioFinal: 3 },
  { nombre: "Mikey", promedioFinal: 10 },
  { nombre: "Donald", promedioFinal: 5 },
  { nombre: "Walter", promedioFinal: 1 },
];
let exoneran = estudiantes.filter(
  (unaPersona) => unaPersona.promedioFinal >= 8
);
console.log(exoneran);

let examenDi = estudiantes.filter(
  (unaPersona) => unaPersona.promedioFinal >= 4 && unaPersona.promedioFinal <= 7
);
console.log(examenDi);

let examenFe = estudiantes.filter(
  (unaPersona) => unaPersona.promedioFinal >= 1 && unaPersona.promedioFinal <= 3
);
console.log(examenFe);
