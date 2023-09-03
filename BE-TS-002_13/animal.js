class Animal {
  constructor(nome, som, onomatopeia) {
    this.nome = nome
    this.som = som
    this.onomatopeia = onomatopeia
  }
  sobre() {
    // return `${this.constructor.name} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`
    return `${this.nome} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`
  }

}

class Vaca extends Animal {
  constructor(nome, som, onomatopeia) {
    super(nome, som, onomatopeia)
  }
}

class Cavalo extends Animal {
  constructor(nome, som, onomatopeia) {
    super(nome, som, onomatopeia)
  }
}

class Ovelha extends Animal {
  constructor(nome, som, onomatopeia) {
    super(nome, som, onomatopeia)
  }
}

const vaca1 = new Vaca('vaca', 'mugir', 'muuuu')

console.log(vaca1.sobre())

const cavalo1 = new Vaca('cavalo', 'relinchar', 'iiirrrrí')
console.log(cavalo1.sobre())

const ovelha1 = new Vaca('ovelha', 'berrar', 'méééé')
console.log(ovelha1.sobre())

