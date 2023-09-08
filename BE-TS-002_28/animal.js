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
    const animaisOrdenados = this.listaAnimais.slice().sort((a, b) => b.velocidade - a.velocidade)

    const tresPrimeirosColocados = animaisOrdenados.slice(0, 3)

    const nomesDosColocados = tresPrimeirosColocados.map(animal => animal.nome)

    return nomesDosColocados
  }
}


const coelho = new Animal("Coelho", 5)
const cavalo = new Animal("Cavalo", 15)
const cheetah = new Animal("Cheetah", 25)
const onca = new Animal("Onça", 12)
const cachorro = new Animal("cachorro", 9)

const corrida = new Corrida([coelho, cheetah, cavalo, onca, cachorro])

console.log(corrida.resultado())

