// 1️⃣ Creazione di Array
// Diversi modi per creare array
const array1 = [1, 2, 3]; // letterale
const array2 = new Array(4, 5, 6); // costruttore
const array3 = Array.from("ciao"); // da stringa
console.log("\n--- Creazione Array ---");
console.log("Letterale:", array1);
console.log("Costruttore:", array2);
console.log("Array.from():", array3);

// 2️⃣ Metodi di Base
const frutti = ["mela", "banana"];
console.log("\n--- Metodi Base ---");
frutti.push("arancia"); // aggiunge alla fine
frutti.unshift("pera"); // aggiunge all'inizio
console.log("Array dopo push e unshift:", frutti);
console.log("Pop:", frutti.pop()); // rimuove e ritorna ultimo elemento
console.log("Shift:", frutti.shift()); // rimuove e ritorna primo elemento
console.log("Array finale:", frutti);

// 3️⃣ Metodi di Ricerca
const numeri = [10, 20, 30, 40, 20];
console.log("\n--- Metodi di Ricerca ---");
console.log("indexOf(20):", numeri.indexOf(20)); // prima occorrenza
console.log("lastIndexOf(20):", numeri.lastIndexOf(20)); // ultima occorrenza
console.log("includes(30):", numeri.includes(30)); // verifica esistenza
console.log(
  "find > 25:",
  numeri.find((n) => n > 25)
); // primo elemento che soddisfa
console.log(
  "findIndex > 25:",
  numeri.findIndex((n) => n > 25)
); // indice primo elemento

// 4️⃣ Metodi di Iterazione
const lettere = ["a", "b", "c"];
console.log("\n--- Metodi di Iterazione ---");
lettere.forEach((lettera) => console.log("Lettera:", lettera));
const maiuscole = lettere.map((l) => l.toUpperCase());
console.log("Map (maiuscole):", maiuscole);
const filtrati = numeri.filter((n) => n > 20);
console.log("Filter (>20):", filtrati);
const somma = numeri.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (somma):", somma);

// 5️⃣ Metodi di Ordinamento
const disordinati = [3, 1, 4, 1, 5];
console.log("\n--- Ordinamento ---");
console.log(
  "Sort numerico:",
  [...disordinati].sort((a, b) => a - b)
);
console.log(
  "Sort invertito:",
  [...disordinati].sort((a, b) => b - a)
);
console.log("Array originale (immutato):", disordinati);

// 6️⃣ Metodi di Slicing
const originale = [1, 2, 3, 4, 5];
console.log("\n--- Slicing ---");
console.log("Slice(1,3):", originale.slice(1, 3)); // estrae porzione
console.log("Splice:", originale.splice(1, 2, 6, 7)); // rimuove/sostituisce
console.log("Array dopo splice:", originale);

// 7️⃣ Array Multidimensionali
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("\n--- Array Multidimensionali ---");
console.log("Matrice:", matrice);
console.log("Elemento [1][1]:", matrice[1][1]);

// 8️⃣ Spread Operator
const array4 = [1, 2, 3];
const array5 = [4, 5, 6];
console.log("\n--- Spread Operator ---");
console.log("Concatenazione:", [...array4, ...array5]);
console.log("Copia array:", [...array4]);

// 9️⃣ Destructuring
const [primo, secondo, ...resto] = [1, 2, 3, 4, 5];
console.log("\n--- Destructuring ---");
console.log("Primo:", primo);
console.log("Secondo:", secondo);
console.log("Resto:", resto);

// 🔟 Array Tipizzati
const int8Array = new Int8Array([1, 2, 3]);
const float32Array = new Float32Array([1.1, 2.2, 3.3]);
console.log("\n--- Array Tipizzati ---");
console.log("Int8Array:", Array.from(int8Array));
console.log("Float32Array:", Array.from(float32Array));
