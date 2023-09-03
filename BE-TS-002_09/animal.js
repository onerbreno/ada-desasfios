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

const animal = new Animal("Cachorro")
animal.corre(5)
animal.status()
animal.pare()
animal.status()