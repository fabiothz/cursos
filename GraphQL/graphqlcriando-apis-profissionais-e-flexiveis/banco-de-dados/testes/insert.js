const db = require('../config/db');

// const novoPerfil = {
//     nome: 'cadastrador',
//     rotulo: 'Cadastrador'
// };

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => db.destroy());

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

db.insert(perfilSU).into('perfis')
    .then(res => res[0])
    .then(id => `O código gerado foi ${id}`)
    .then(text => console.log(text))
    .catch(err => console.log(err))
    .finally(() => db.destroy());
