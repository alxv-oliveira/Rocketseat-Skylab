class List {
    
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor() {
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add();
}
this.data.push(data);
        console.log(this.data)
MinhaLista.mostraUsuario();

//////////////////////////////////////////////////////////////

const arr = [1, 3, 5, 7, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});


const sum = arr.reduce(function(total, next) {
    return total + next;
    // Primeira iteração: total = 0 | next = 1
    // Segunda iteração:  total = 1 | next = 3
    // Terceira iteração: total = 4 | next = 5
});


const filter = arr.filter(function(item) {
    return item % 2 === 0;
});


const find = arr.find(function(item) {
    return item === 4;
});

//////////////////////////////////////////////////////////////

const arr = [1, 3, 5, 7, 9];

const newArr = arr.map(item => item * 2);
const newArr = arr.map((item, index) => item + index);

const teste = () => ({ nome: 'Diego' });

//////////////////////////////////////////////////////////////

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

const { nome, idade, endereco: { cidade } } = usuario;

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario)

//////////////////////////////////////////////////////////////

// REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

const arr = [1, 2, 3, 4];
const [ a, b, ...c ] = arr;

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

//////////////////////////////////////////////////////////////