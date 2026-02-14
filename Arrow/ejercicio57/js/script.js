let estudiantes = [
  { nombre: 'Jhon', promedioFinal: 8 },
  { nombre: 'Ana', promedioFinal: 7 },
  { nombre: 'Miguel', promedioFinal: 12 },
  { nombre: 'Antonio', promedioFinal: 8 },
  { nombre: 'Alejadra', promedioFinal: 3 },
  { nombre: 'Sandra', promedioFinal: 10 },
  { nombre: 'Angel', promedioFinal: 3 },
  { nombre: 'Mikey', promedioFinal: 10 },
  { nombre: 'Donald', promedioFinal: 5 },
  { nombre: 'Walter', promedioFinal: 1 }
];


let descriptivo = estudiantes.map((es) => {
  if (es.promedioFinal >= 8) {
    console.log(`Exonero: ${es.nombre} ${es.promedioFinal}`);
  }
  else {
    console.log(`Examen: ${es.nombre} ${es.promedioFinal}`);
  }
});
console.log(descriptivo);
