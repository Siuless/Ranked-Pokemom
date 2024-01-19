
let nomeH = "Siuless"

let points = wins(24,17)
let nivel = ""

function wins(pointsA,pointsB){
    let vitorias = pointsA + pointsB
    return vitorias
}

if (points <= 10){
    nivel = "ferro"
}
else if (points >= 11 && points <= 20){
    nivel ="Bronze"
}
else if (points >= 21 && points <= 50){
    nivel = "Prata"
}
else if (points >= 51 && points <= 80){
    nivel = "Ouro"
}
else if (points >= 81 && points <= 90){
    nivel = "Diamante"
}
else if (points >= 91 && points <= 100){
    nivel = "Lendário"
}
else if (points >= 101){
    nivel = "imortal"
}

console.log("O herói tem de saldo de " + points + " e está no nivel de " + nivel)