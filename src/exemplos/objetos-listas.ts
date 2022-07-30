const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const anderson: {nome : String, idade: number, profissao: string} = {
    nome: 'Anderson',
    idade: 29,
    profissao: 'Desenvolvedor'   
}

const Jaine: {nome : String, idade: number, profissao: string} = {
    nome: 'Jaine',
    idade: 30,
    profissao: 'Professora'   
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedor,
    Desenvolvedora,
    JogadorDeFutebol
}

interface Pessoa {
    nome: String,
    idade: Number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 25,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 25,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(monica.materias);