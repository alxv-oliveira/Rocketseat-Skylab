// 1° Exercicio

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        if (this.admin) return true;
        else return false;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

//////////////////////////////////////////////////////////////

// 2° Exercício
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
console.log(usuarios.map(usuario => usuario.idade));

// 2.2
console.log(usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade > 18));

// 2.3 
console.log(usuarios.find(item => item.empresa == 'Google'));

const idadeDobrada = usuarios.map(usuario => {
    usuario.idade *= 2;
    return usuario;
});
/* console.log(idadeDobrada); */
// 2.4
console.log(idadeDobrada.filter(usuario => usuario.idade <= 50));

//////////////////////////////////////////////////////////////

// 3° Exercício

// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

// 3.3
//const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

//////////////////////////////////////////////////////////////

// 4° Exercício

// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//////////////////////////////////////////////////////////////

// 5° Exercício

// 5.1
const a = [1, 2, 3, 4, 5, 6];

const [x, ...y] = a;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params) {
    return params.reduce((total, next) => total + next);
}
/* const soma = (...params) => params.reduce((total, next) => total + next); */
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2
const usu = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usu2 = { ...usu, nome: 'Gabriel' };
const usu3 = { ...usu, endereco: {...usu.endereco, cidade: 'Lontras' } };

console.log(usu2);
console.log(usu3);

//////////////////////////////////////////////////////////////

// 6° Exercício

const usuario = 'Diego';
const idade = 23;

console.log(`O usuário ${usuario} possui ${idade} anos`);

//////////////////////////////////////////////////////////////

// 7° Exercício

const nome = 'Diego';
const idade = 23;

const usuario = { nome, idade, cidade: 'Rio do Sul' };