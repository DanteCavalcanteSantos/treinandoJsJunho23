

// linear search é uma pesquisa de dados em uma lista que é verificado sequencialmente


let listaNomes = {
    nome1: "Camila",
    nome2: "Luma",
    nome3: "Renata",
    nome4: "Mayara",
    nome5: "Pedro",
    nome6: "Wilson",
    nome7: "Maria Cecilia"
}

let valorProcurado = 'Camila';

function linearSearch(lista, valor){
    for (let chave in lista){
        let valorAtual = lista[chave];
        if(valorAtual === valor){
            return true
        }
    }
    return false
}
 
let resultado = linearSearch(listaNomes, valorProcurado)

console.log(resultado)
