class Cargo {
  constructor(nome, salario) {
    this.nome = nome
    this.salario = salario
  }
}

class Trabalhador {
  constructor(nome, cargo) {
    this.nome = nome
    this.cargo = cargo
  }

}
class Empresa {
  #trabalhadores = []

  contratar(trabalhador) {
    this.#trabalhadores.push(trabalhador)
  }

  listarFuncionarios() {
    return this.#trabalhadores
  }
}

const cargo = new Cargo("Programador Javascript jr", 8000)
const trabalhador1 = new Trabalhador("Mark", cargo)
const trabalhador2 = new Trabalhador("Jeff", cargo)
const empresa = new Empresa()

empresa.contratar(trabalhador1)
empresa.contratar(trabalhador2)

console.log(cargo.nome)
console.log(trabalhador1.cargo.nome)
console.log(trabalhador1.nome)
console.log(trabalhador2.cargo.nome)
console.log(trabalhador2.nome)

console.log(empresa.listarFuncionarios())
