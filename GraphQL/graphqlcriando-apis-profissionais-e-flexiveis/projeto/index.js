const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    type Perfil {
        id: Int
        nome: String
    }

    type Usuario {
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float        
        vip: Boolean
        perfil: Perfil
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    # Endpoint da API
    type Query {
        ola: String!
        horaAtual: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: Int): Perfil
    }
`

const perfils = [
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
        perfil_id: 1
    },
    {
        id: 2,
        nome: 'Gislaine Grigoleto',
        email: 'gislainegrigoleto@gmail.com',
        idade: 32,
        perfil_id: 2
    },
    {
        id: 3,
        nome: 'Ivan Thomaz',
        email: 'ivanthomaz@gmail.com',
        idade: 30,
        perfil_id: 1
    }
]


const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        },
        perfil(usuario) {
            return perfils.find(p => p.id === usuario.perfil_id)
        }
    },
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            }
            return produto.preco;
        }
    },
    Query: {
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
            return perfils;
        },
        perfil(_, { id }) {
            return perfils.find(p => p.id === id);
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
})