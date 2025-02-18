// Tipi di valore fondamentali in JavaScript
export const basicTypes = [
  "Number", // Numeri (interi o decimali)
  "String", // Stringhe di testo
  "Boolean", // Valori true/false
  "Null", // Valore nullo intenzionale
  "Undefined", // Valore non definito
  "Symbol", // Valori unici e immutabili (ES6)
  "BigInt", // Numeri interi di grandi dimensioni (ES2020)
  "Object", // Oggetti (inclusi array e funzioni)
];

// Esempi di ciascun tipo
export const examples = {
  Number: 42,
  String: "Ciao Mondo",
  Boolean: true,
  Null: null,
  Undefined: undefined,
  Symbol: Symbol("descrizione"),
  BigInt: 9007199254740991n,
  Object: { key: "value" },
};

// Inizializzazioni nello scope del file
const numberExample = 42; // Number
const stringExample = "Ciao Mondo"; // String
const booleanExample = true; // Boolean
const nullExample = null; // Null
const undefinedExample = undefined; // Undefined
const symbolExample = Symbol("unique"); // Symbol
const bigIntExample = 9007199254740991n; // BigInt
const objectExample = { key: "value" }; // Object

// Funzione per mostrare i tipi
function showTypes() {
  console.log("Number:", numberExample);
  console.log("String:", stringExample);
  console.log("Boolean:", booleanExample);
  console.log("Null:", nullExample);
  console.log("Undefined:", undefinedExample);
  console.log("Symbol:", symbolExample.toString());
  console.log("BigInt:", bigIntExample);
  console.log("Object:", objectExample);
}

// Mostra i tipi
showTypes();
