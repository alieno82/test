import {config} from "dotenv"

config()

const token=process.env.TOKEN

const alieno="terence"

function somma(a,b) {
    const risultato=a+b
    return risultato
}

const risulatoSomma= somma(10,20)

console.log(token);