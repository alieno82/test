// Un oggetto in JavaScript è una collezione di coppie chiave-valore.
// 🔑 Chiavi degli oggetti
// Le chiavi possono essere:
// - Stringhe (sono convertite automaticamente in stringhe)
// - Numeri (convertiti in stringhe)
// - Symbol (valori unici e immutabil

// 📌 Creazione di un oggetto
// Sintassi veloce (letterale):
const objLiteral = {
  key1: "value1",
  key2: 42,
  key3: true,
};

// Con 'new Object()':
const objNew = new Object();
// assegnazione
objNew.key1 = "value1";
objNew.key2 = 42;
objNew.key3 = true;

// 🔑 Chiavi degli oggetti
// Le chiavi possono essere:
// - Stringhe
//   - [] tra le parentesi quadre, con string fra le virgolette
//   - senza con camelcase, per non fare le virgolette
// - Numeri (convertiti in stringhe)
// - Symbol (valori unici e immutabili)
const objKeys = {
  ["string-key"]: "valore", // chiave come stringa fra le parentesi quadre
  [123]: "numero", // chiave numerica (convertita in stringa)
  [Symbol("unique")]: "simbolo", // chiave come Symbol
  // ❌ Non valido:
  stringKey: "valore", // camel case, valido
  // true: "booleano", // i booleani non sono chiavi valide
  // null: "null", // null non è una chiave valida
  // undefined: "undefined", // undefined non è una chiave valida
  // { key: "obj" }: "oggetto" // oggetti non sono chiavi valide
};

// 💡 Valori degli oggetti
// I valori possono essere di qualsiasi tipo:
// - Primitivi (stringhe, numeri, booleani, null, undefined)
// - Oggetti (inclusi array, funzioni, date, ecc.)
const objValues = {
  primitive: "stringa", // valore primitivo
  object: { key: "value" }, // oggetto annidato
  array: [1, 2, 3], // array
  function: () => "funzione", // funzione
  date: new Date(), // oggetto Date
};

// 🚀 Differenze tra sintassi veloce e 'new Object()'
// - La sintassi veloce è più concisa e preferita
// - 'new Object()' è più verboso e meno utilizzato
// - Entrambi creano lo stesso tipo di oggetto

// Esempi pratici
const user = {
  name: "Mario", // stringa
  age: 30, // numero
  isAdmin: false, // booleano
  address: {
    // oggetto annidato
    city: "Roma",
    zip: "00100",
  },
  hobbies: ["leggere", "viaggiare"], // array
  foo: function () {},
  greet() {
    // metodo (funzione)
    return `Ciao, sono ${this.name}`;
  },
  [Symbol("id")]: 123, // chiave Symbol
};

console.log(user.greet()); // Ciao, sono Mario
console.log(user.address.city); // Roma
