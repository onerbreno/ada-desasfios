class Escola {
  alunos = []

  adicionar(nome, nota) {
    this.alunos.push({nome, nota})
  }

  media() {

    const notas = this.alunos.map(aluno => {
      return Object.values(aluno)[0]
    })


    const totalNotas = this.alunos.reduce((total, aluno) => total += aluno.nota, 0)

    return totalNotas / this.alunos.length
  }

  ranking() {
    const a = this.alunos.sort((a, b) => b.nota - a.nota)
    return a
  }
}

const escola = new Escola()
escola.adicionar("João", 10)
escola.adicionar("Maria", 5)
escola.adicionar("Maurício", 7)
escola.adicionar("Alice", 7)
console.log(escola.media())
console.log(escola.ranking())
