const jugadores = [
  "Torreira",
  "Bentancur",
  "Vecino",
  "Valverde",
  "Cruz",
  "Bastos",
  "Burgos",
];
let filtrados = jugadores.filter((elemento) => elemento.charAt(0) === "B");
console.log(filtrados);
