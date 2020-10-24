const { usuarios, perfis } = require('../data/db')

module.exports = { 
    ola() {
        return 'Bom dia!'
    },
    horaAtual() {
        // return `${new Date}`
        return new Date;
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Fábio Thomaz',
            email: 'fabio@laddertecnologia.com.br',
            idade: 36,
            salario_real: 3000,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Feijão',
            preco: 100,
            desconto: 0.05
        }
    },
    numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b;
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente);
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, { id }) {
        return usuarios.find(u => u.id === id);
    },
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        return perfis.find(p => p.id === id);
    }
}