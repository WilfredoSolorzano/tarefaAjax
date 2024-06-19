
class Alumno {
    #nome;
    #nota;

    constructor(nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
    }

    getNome() {
        return this.#nome;
    }

    getNota() {
        return this.#nota;
    }

    estaAprovado() {
        return this.#nota >= 6;
    }
}

const alunos = [
    new Alumno('Alice', 8),
    new Alumno('Bob', 5),
    new Alumno('Carlos', 7),
    new Alumno('Diana', 4),
    new Alumno('Eduardo', 9),
    new Alumno('Fernanda', 6)
];


function filtraAlunosPorNota(alunos) {
    return alunos.filter(aluno => aluno.estaAprovado());
}


const alunosAprovados = filtraAlunosPorNota(alunos);
const listaAlunosAprovados = alunosAprovados.map(aluno => `${aluno.getNome()} - Nota: ${aluno.getNota()}`);
console.log(listaAlunosAprovados);