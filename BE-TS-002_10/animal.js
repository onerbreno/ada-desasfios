class Animal {
  #velocidade = 0

  constructor (name) {
    this.name = name 
  }

  corre(velocidade) {
    this.#velocidade = velocidade
  }

  pare() {
    this.#velocidade = 0
  }

  status() {
    const message = this.#velocidade > 0 
      ? `${this.name} corre com velocidade ${this.#velocidade}`
      : `${this.name} está parado`

    console.log(message)
  }
}


class Coelho extends Animal {
  constructor() {
    super();
    this.name = "Coelho";
  }
} 

const coelho1 = new Coelho()

coelho1.corre(5)
coelho1.status()
coelho1.pare()
coelho1.status()