
class Pessoa {
    constructor(nome, idade, sexo, endereco, email, telefone){
            this.nome = nome;
            if(typeof idade === 'number' && typeof telefone === 'number'){
                this.idade = idade;
                this.telefone = telefone;
            } else {
                throw new Error ('O dado inserido não é valido')
            }
            this.sexo = sexo;
            this.endereco =  endereco;
            this.email = email;

    }

}

/* Repensar sobre
function validacaoPessoa(){

}*/
