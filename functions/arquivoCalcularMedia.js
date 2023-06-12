// Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.

/*let listaNumeros = [];

function calcularMedia(listaNumeros){
    for(let valor of listaNumeros){
        let media = valor / 3;
    }
}

listaNumeros.push(10, 5, 20)

let resultado = calcularMedia()

console.log(resultado)*/

// versão corrigida

let listaNumeros = [];

function calcularMedia(listaNumeros) {
  let soma = 0;
  for (let valor of listaNumeros) {
    soma += valor;
  }
  let media = soma / listaNumeros.length;
  return media;
}

listaNumeros.push(10, 5, 20);

let resultado = calcularMedia(listaNumeros);

console.log(resultado);
