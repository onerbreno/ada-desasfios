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
  constructor() {
    super('vaca', 'mugir', 'muuuu')
  }
}

class Cavalo extends Animal {
  constructor() {
    super('cavalo', 'relinchar', 'iiirrrrí')
  }
}

class Ovelha extends Animal {
  constructor() {
    super('ovelha', 'berrar', 'méééé')
  }
}

const vaca1 = new Vaca()
console.log(vaca1.sobre())

const cavalo1 = new Vaca()
console.log(cavalo1.sobre())

const ovelha1 = new Vaca()
console.log(ovelha1.sobre())

