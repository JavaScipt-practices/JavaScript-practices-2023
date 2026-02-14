let estudiantes = [
  { nombre: "Jhon", inasistencias: 8 },
  { nombre: "Ana", inasistencias: 7 },
  { nombre: "Miguel", inasistencias: 12 },
  { nombre: "Antonio", inasistencias: 8 },
  { nombre: "Alejadra", inasistencias: 3 },
  { nombre: "Sandra", inasistencias: 10 },
  { nombre: "Angel", inasistencias: 3 },
  { nombre: "Mikey", inasistencias: 18 },
  { nombre: "Donald", inasistencias: 15 },
  { nombre: "Walter", inasistencias: 0 },
];
let ins = estudiantes.filter((unaPersona) => unaPersona.inasistencias == 0);
console.log(ins);

let ins1 = estudiantes.filter((unaPersona) => unaPersona.inasistencias > 10);
console.log(ins1);
