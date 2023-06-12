//Escreva uma função chamada inverterString que recebe uma string como parâmetro e retorna a mesma string, mas invertida.

/*function retornaString(s1){
    return s1
}

let resultado = retornaString('Dante')

console.log(resultado)*/

// Parte corrigida

function inverterString(s1) {
    return s1.split('').reverse().join('');
  }
  
  let resultado = inverterString('Dante');
  console.log(resultado); // Output: etnaD
  