//Desafio classificador de nível de Herói
/*
O que deve ser utilizado

-variáveis
-Operadores
-Laços de repetição
-Estruturas de decisões

## Objetivo

Crie uma variável para para armazenar o nome e a quantidade de
experiência (XP) de um herói, depois utilize uma estrutura de decisão
para apresentar algumas das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Na Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel**}"

*/

let nome = "noob"
let exp = 1500

console.log("Sejá bem vindo jogador " + nome);
console.log("Aqui você encontrará o seu ranking atual digitando o nível de exp que conseguiu derrotando os monstros")

switch (true){
    case exp <= 1000:
        console.log("O Herói de nome **" + nome + "** está no nível de Ferro")
        break

    case exp <= 2000:
        console.log("O Herói de nome **" + nome + "** está no nível de Bronze")
        break

    case exp <= 5000:
        console.log("O Herói de nome **" + nome + "** está no nível de Prata")
        break

    case exp <= 7000:
        console.log("O Herói de nome **" + nome + "** está no nível de Ouro")
        break

    case exp <= 8000:
        console.log("O Heró de nome **" + nome + "** está no nível de Platina")
        break

    case exp <= 9000:
        console.log("O Heró de nome **" + nome + "** está no nível de Ascendente")
        break

    case exp <= 10000:
        console.log("O Heró de nome **" + nome + "** está no nível de Imortal")
        break

    case exp >= 10001:
        console.log("O Heró de nome **" + nome + "** está no nível de Radiante")
        break

    default:
        console.log("Error - Digite o número correto de exp ganho de 0 ou a cima de 10001")
}