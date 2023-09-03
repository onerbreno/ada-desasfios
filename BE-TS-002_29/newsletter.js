class Newsletter {
  #email
  inscrever(email) {
    if (!this.#email) {
      this.#email = email 
      return "E-mail cadastrado com sucesso"
    }

    return "E-mail já se encontra cadastrado"
    
  }
  cancelar(email) {
    this.#email = null
    return "E-mail removido"

  }

}

const js = new Newsletter();
console.log(js.inscrever("javascripto@js.com"))
console.log(js.inscrever("javascripto@js.com"))
console.log(js.cancelar("javascripto@js.com"))
console.log(js.inscrever("javascripto@js.com"))