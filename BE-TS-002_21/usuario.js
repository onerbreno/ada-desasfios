class Usuario {
  #password
  #tentativas = 0

  constructor(name, username, password) {
    this.name = name
    this.username = username
    this.#password = password
  }

  login(username, password) {
    if (this.#tentativas >= 3) {
      return "Conta bloqueada, contate o suporte"
    }
    
    if (this.username === username && this.#password === password) {
      return "Login realizado com sucesso"
    }
    
    this.#tentativas++


    return "Falha na autenticação"
  }

}

const js = new Usuario("JavaScript", "js", "myPassw0rd!")
console.log(js.login("js", "myPassw0rd!"))
console.log(js.login("js", "123"))
console.log(js.login("js", "123"))
console.log(js.login("js", "123"))
console.log(js.login("js", "123"))
console.log(js.login("js", "myPassw0rd!"))
