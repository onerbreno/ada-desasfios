class Roupa {
  constructor(tamanho, cor = null) {
    this.tamanho = tamanho.toUpperCase()
    this.cor = cor
  }

  sobre() {
    return this.cor 
      ? `Camisa tamanho ${this.tamanho} tem a cor ${this.cor}` 
      : `Camisa tamanho ${this.tamanho}`
  }

}

const roupa1 = new Roupa('M', 'azul')
console.log(roupa1.sobre())

const roupa2 = new Roupa('M',)
console.log(roupa2.sobre())