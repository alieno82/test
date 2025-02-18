// Principali tipi di oggetto in JavaScript
export const objectTypes = [
  // più importanti
  "Object", // Oggetto base: {}
  "Array", // Array: []
  "Function", // Funzioni: () => {}
  "Date", // Date e orari: new Date()
  "RegExp", // Espressioni regolari: /abc/
  "Map", // Mappe (ES6): new Map()
  "Set", // Insiemi (ES6): new Set()
  "Promise", // Promise (ES6): new Promise(() => {})
  // meno importanti
  "WeakMap", // Mappe deboli (ES6): new WeakMap()
  "WeakSet", // Insiemi deboli (ES6): new WeakSet()
  "ArrayBuffer", // Buffer di dati binari: new ArrayBuffer(8)
  "DataView", // Vista su un ArrayBuffer: new DataView(buffer)
  "TypedArray", // Array tipizzati: new Int8Array(8)
  "Error", // Oggetti di errore: new Error("msg")
  "Proxy", // Proxy (ES6): new Proxy(target, handler)
  "Reflect", // Metodi per operazioni su oggetti (ES6): Reflect.method()
  "Generator", // Funzioni generatrici: function*() { yield }
  "GeneratorFunction", // Costruttore di funzioni generatrici: function*() {}.constructor
];
// crea un oggetto
const Object = { key: "value" };
// crea un array
const Array = [1, 2, 3];

// Esempi di ciascun tipo
export const objectExamples = {
  // più importanti
  Object: { key: "value" },
  ObjectWithNew: new Object({ key: "value" }), // oggetto creato con new
  // assegna con autoassegnazione, senza mettere :
  Array,
  Function: function () {
    const boo = true;
    return boo;
  },
  Date: new Date(),
  RegExp: /abc/,
  Map: new Map(),
  Set: new Set(),
  Promise: new Promise(() => {}),
  // meno importanti
  WeakMap: new WeakMap(),
  WeakSet: new WeakSet(),
  ArrayBuffer: new ArrayBuffer(8),
  DataView: new DataView(new ArrayBuffer(8)),
  TypedArray: new Int8Array(8),
  Error: new Error("Errore!"),
  Proxy: new Proxy({}, {}),
  Reflect: Reflect,
  Generator: function* () {
    yield 1;
  },
  GeneratorFunction: function* () {}.constructor,
};

console.log(objectExamples.Object.bla);
