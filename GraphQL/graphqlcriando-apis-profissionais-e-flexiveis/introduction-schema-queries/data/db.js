const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Fábio Thomaz',
        email: 'fabio@laddertecnologia.com.br',
        idade: 36,
        perfil_id: 1,
        status: 'INATIVO'
    },
    {
        id: 2,
        nome: 'Gislaine Grigoleto',
        email: 'gislainegrigoleto@gmail.com',
        idade: 32,
        perfil_id: 2,
        status: 'ATIVO'
    },
    {
        id: 3,
        nome: 'Ivan Thomaz',
        email: 'ivanthomaz@gmail.com',
        idade: 30,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

module.exports = { perfis, usuarios }
