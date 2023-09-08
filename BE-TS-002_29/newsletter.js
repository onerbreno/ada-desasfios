class Newsletter {
  #emailsCadastrados

  constructor() {
    this.#emailsCadastrados = new Set()
  }

  inscrever(email) {
    if (this.#emailsCadastrados.has(email)) {
      return 'E-mail já se encontra cadastrado'
    } else {
      this.#emailsCadastrados.add(email);
      return 'E-mail cadastrado com sucesso'
    }
  }

  cancelar(email) {
    if (this.#emailsCadastrados.has(email)) {
      this.#emailsCadastrados.delete(email)
      return 'E-mail removido'
    } else {
      return 'E-mail não encontrado'
    }
  }
}

const js = new Newsletter()
console.log(js.inscrever("javascripto@js.com"))
console.log(js.inscrever("javascripto@js.com"))
console.log(js.cancelar("javascripto@js.com"))
console.log(js.inscrever("javascripto@js.com"))
