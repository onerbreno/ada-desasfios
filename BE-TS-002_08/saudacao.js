class Pessoa {
  saudacao() {
    return 'Olá pessoa'
  }
}

class Trabalhador extends Pessoa {
  saudacao() {
    return 'Olá trabalhador'
  }
}

class Aluno extends Pessoa {
  saudacao() {
    return 'Olá aluno'
  }
}

const pessoa1 = new Pessoa()
console.log(pessoa1.saudacao())

const trabalhador1 = new Trabalhador()
console.log(trabalhador1.saudacao())

const aluno1 = new Aluno()
console.log(aluno1.saudacao())
