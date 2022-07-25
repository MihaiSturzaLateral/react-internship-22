//2. Create an array with countries and find the countries that contain only 5 characters.
// (Print them to the console) Spain, China, India, Japan…
const tari = ["Spain", "Romania", "France", "Japan", "China", "India"];
console.log(tari.filter((tara) => tara.length < 6));

/* ----- SAU mai putem face asa: -----

function verificare(tari) {
  return (tari.length < 6);
}
const raspuns = tari.filter(verificare);
console.log(raspuns); */
