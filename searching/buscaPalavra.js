// Escreva uma função chamada buscarPalavra que recebe uma string e uma palavra como parâmetros. A função deve utilizar a busca linear para determinar se a palavra está presente na string. Se a palavra for encontrada, a função deve retornar true; caso contrário, deve retornar false

let palavra  = 'Dante'


function buscarPalavra(palavra, valor){
 let letra = palavra.split('');
 for(let indice = 0; indice < palavra.length; indice++){
    if(palavra[indice] === valor){
        return true
    }
 }
}

let resultado = buscarPalavra(palavra, 'a');

console.log(resultado)