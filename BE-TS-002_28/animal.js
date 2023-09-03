class Animal {
  constructor(nome, velocidade) {
    this.nome = nome
    this.velocidade = velocidade
  }
}

class Corrida {
  constructor(listaAnimais) {
    this.listaAnimais = listaAnimais
  }

  resultado() {
    return this.listaAnimais.sort((a, b) => b.velocidade - a.velocidade).map(animal => animal.nome)
  }
}


const coelho = new Animal("Coelho", 5)
const cavalo = new Animal("Cavalo", 15)
const cheetah = new Animal("Cheetah", 25)
const onca = new Animal("Onça", 12)
const cachorro = new Animal("cachorro", 9)

const corrida = new Corrida([coelho, cheetah, cavalo, onca, cachorro])

console.log(corrida.resultado())

