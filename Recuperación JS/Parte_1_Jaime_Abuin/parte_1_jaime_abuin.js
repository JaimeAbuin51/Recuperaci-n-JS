let frases = ["Hola", "Adiós", "Bienvenido"];

let btnFrase = document.getElementById("btn-frase");
let parrafoFrase = document.getElementById("frase");

btnFrase.addEventListener("click", function () {
  let indice = Math.floor(Math.random() * frases.length);
  parrafoFrase.textContent = frases[indice];
});
