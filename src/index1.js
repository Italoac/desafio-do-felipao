let nome = "Bear"
let exp = 20000

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante */

console.log("\nEste é o jogo do Old wolrd. \nPara saber o seu ranking na classificação digite o seu nome: " + nome + " \n")

if (exp <= 1000) {
    console.log("O Herói de nome **" + nome + "** está no nível de **Ferro** com " + exp + " de exp total\n")

} else if(exp <= 2000){
    console.log("O Herói de nome **" + nome + "** está no nível de **Bronze** com " + exp + " de exp total\n") 

} else if(exp <= 5000){
    console.log("O Herói de nome **" + nome + "** está no nível de **Prata** com " + exp + " de exp total\n") 

} else if(exp <= 7000){
    console.log("O Herói de nome **" + nome + "** está no nível de **Ouro** com " + exp + " de exp total\n") 

} else if(exp <= 8000){
    console.log("O Herói de nome **" + nome + "** está no nível de **Platina** com " + exp + " de exp total\n") 

} else if(exp <= 9000){
    console.log("O Herói de nome **" + nome + "** está no nível de **Ascendente** com " + exp + " de exp total\n") 

} else if(exp <= 10000){
    console.log("O Herói de nome **" + nome + "** está no nível de **Imortal** com " + exp + " de exp total\n") 

} else if(exp >= 10001){
    console.log("O Herói de nome **" + nome + "** está no nível de **Radiante** com " + exp + " de exp total\n")     

} else{
    console.log("Herói **" + nome + "** você não digitou um número válido, digite entre 1 ou maior que 10001. \n")
}

