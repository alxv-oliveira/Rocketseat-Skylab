////// 1.1 /////

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

/* function umPorSegundo() {
    delay().then(() => {

        console.log('1s');
        delay().then(() => {

            console.log('2s');
            delay().then(() => {

                console.log('3s');
            });
        })
    });
}
umPorSegundo(); */

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo();

const umPorSegundo = async () => {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo();


///// 1.2 /////

import axios from 'axios';

/* function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
} */

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.log('Erro na API');
    }
}

const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.log('Erro na API 2');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


///// 1.3 /////

import axios from 'axios';

/* class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
} */

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch(err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('Rocketseat/bootcamp-gostack-01');
Github.getRepositories('Rocketseat/dslkvmskv');


///// 1.4 /////

import axios from 'axios';

/* const buscaUsuario = user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
buscaUsuario('diego3g'); */


const buscaUsuario = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');