const pessoa1 = {
    nome: "João",
    idade: 20,
    hobby: "tocar violão",
    apresentar: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

const pessoa2 = new Object();
pessoa2.nome = "Maria";
pessoa2.idade = 22;
pessoa2.hobby = "jogar basquete";
pessoa2.apresentar = function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};

function CriarPessoa(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
    this.apresentar = function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    };
}
const pessoa3 = new CriarPessoa("Lucas", 19, "desenhar");

class PessoaClasse {
    constructor(nome, idade, hobby) {
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
}
const pessoa4 = new PessoaClasse("Ana", 21, "fotografar");

const prototipo = {
    apresentar: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};
const pessoa5 = Object.create(prototipo);
pessoa5.nome = "Carlos";
pessoa5.idade = 23;
pessoa5.hobby = "correr";

console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar());
console.log(pessoa3.apresentar());
console.log(pessoa4.apresentar());
console.log(pessoa5.apresentar());