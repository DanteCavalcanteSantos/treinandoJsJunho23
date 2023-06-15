// Encontre o maior número em um array:
//Escreva uma função que receba um array de números como parâmetro e retorne o maior número presente no array

let listaNumero = []


function maiorNumero(){
    let max = Infinity;
    for(let indice = 0; indice <= listaNumero.length; indice ++){
        if(listaNumero[indice] > max){
            max = listaNumero
        }
        return max
    }
}

let resultado = maiorNumero(1,2,3,4,5,6,7,8,9,10,25,30,35,40,45,50,55)

console.log(resultado)

