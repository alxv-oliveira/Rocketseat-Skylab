export const idade = 23;

export default class Usuario {
    static info() {
        console.log('Apenas teste');
    }
}

// 1.1

import ClasseUsuario from '../desafio-webpack';

ClasseUsuario.info();

// 1.2 

import ClasseUsuario, { idade } from '../desafio-webpack';

ClasseUsuario.info();

console.log(idade);

// 1.3 

import ClasseUsuario, { idade as idadeUsuario } from '../desafio-webpack';

ClasseUsuario.info();

console.log(idadeUsuario);
