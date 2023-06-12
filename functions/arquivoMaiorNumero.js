//Escreva uma função chamada maiorNumero que recebe três números como parâmetros e retorna o maior número entre eles.

function maiorNumero(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return console.log(`O maior numero foi ${n1}`)
    } else if (n2 > n1 && n2 > n3){
        return console.log (`O maior número foi ${n2}`)
    } else{
        return console.log (`O maior número foi ${n3}`)
    }
}

let resultado = maiorNumero(5, 45, 30);

console.log(resultado)
