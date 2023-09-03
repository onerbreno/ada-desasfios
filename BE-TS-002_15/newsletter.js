class Newsletter {
  #email

  signup(email) {
    if (!this.#email) {
      this.#email = email
      return 'E-mail cadastrado com sucesso'
    }
    return 'E-mail já se encontra cadastrado'

  }
}

const js = new Newsletter()
console.log(js.signup("javascripto@js.com"))
console.log(js.signup("javascripto@js.com"))