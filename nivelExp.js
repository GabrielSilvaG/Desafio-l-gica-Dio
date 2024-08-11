/* 
 Crie uma váriavel  para armazenar  o nome  e  a quentidade de experiência(XP) de um herói, depois utilize uma estrura de cecisão para aprensentar  alguma das mensagens abaixo:

 - Se XP for menor que 1000 = Ferro
 - Se XP for entre  1001 e  2000 = Bronze
 - Se XP for entre 2001 e  5000 = Prata
 - Se XP for entre 6001 e  7000 = Ouro
 - Se XP for entre 7001 e  8000 = Platina
 - Se XP for entre 8001 e  9000 = Ascendente
 - Se XP for entre 9001 e  10000 = Imortal
 - Se XP for maior ou igual a 10001 = Radiante
*/

let nickName = "Gabriel";
let xpJogador = 7000;
let nivelHeroi ="sf";




if (!nickName) {
    console.log("Por gentilaza, digite o nome do Herói")
} else if (isNaN(xpJogador) || xpJogador === null || xpJogador === undefined || !xpJogador) {
    console.log("Por gentilaza, digite a quantidade de experiência do Herói")
} else if (xpJogador <= 1000) {
    nivelHeroi = "Ferro"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else if (xpJogador >= 1001 && xpJogador <= 2000) {
    nivelHeroi = "Bronze"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else if (xpJogador >= 2001 && xpJogador <= 5000) {
    nivelHeroi = "Prata"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else if (xpJogador >= 5001 && xpJogador <= 7000) {
    nivelHeroi = "Ouro"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else if (xpJogador >= 7001 && xpJogador <= 8000) {
    nivelHeroi = "Platina"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else if (xpJogador >= 8001 && xpJogador <= 9000) {
    nivelHeroi = "Ascendente"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else if (xpJogador >= 9001 && xpJogador <= 10000) {
    nivelHeroi = "Imortal"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} else {
    nivelHeroi = "Radiante"
    console.log(`O Herói ${nickName} está no nível ${nivelHeroi}`)
} 