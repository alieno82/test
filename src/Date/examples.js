// Inizializzazione dell'oggetto Date
let dataAttuale = new Date();

// Uso pratico
// Ottenere l'anno corrente
let anno = dataAttuale.getFullYear();
console.log("Anno corrente:", anno);

// Ottenere il mese corrente (0-11, 0 = Gennaio)
let mese = dataAttuale.getMonth();
console.log("Mese corrente (0-11):", mese);

// Ottenere il giorno del mese corrente (1-31)
let giorno = dataAttuale.getDate();
console.log("Giorno del mese corrente:", giorno);

// Ottenere il giorno della settimana corrente (0-6, 0 = Domenica)
let giornoSettimana = dataAttuale.getDay();
console.log("Giorno della settimana corrente (0-6):", giornoSettimana);

// Ottenere l'ora corrente (0-23)
let ora = dataAttuale.getHours();
console.log("Ora corrente:", ora);

// Ottenere i minuti correnti (0-59)
let minuti = dataAttuale.getMinutes();
console.log("Minuti correnti:", minuti);

// Ottenere i secondi correnti (0-59)
let secondi = dataAttuale.getSeconds();
console.log("Secondi correnti:", secondi);

// Ottenere i millisecondi correnti (0-999)
let millisecondi = dataAttuale.getMilliseconds();
console.log("Millisecondi correnti:", millisecondi);

// Impostare una data specifica (anno, mese, giorno)
let dataSpecifica = new Date(2023, 10, 21); // 21 Novembre 2023
console.log("Data specifica:", dataSpecifica);

// Calcolare la differenza tra due date in millisecondi
let dataFutura = new Date(2024, 0, 1); // 1 Gennaio 2024
let differenza = dataFutura.getTime() - dataAttuale.getTime();
console.log("Differenza tra date in millisecondi:", differenza);

// Convertire la differenza in giorni
let giorniDifferenza = Math.floor(differenza / (1000 * 60 * 60 * 24));
console.log("Differenza tra date in giorni:", giorniDifferenza);

// Stampa del risultato nel terminale
console.log("Data attuale:", dataAttuale);
