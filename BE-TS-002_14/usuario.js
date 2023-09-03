class Usuario {
  #password
  constructor(name, username, password) {
    this.name = name
    this.username = username
    this.#password = password 
  }

  login(username, password) {
    if (this.username === username && this.#password === password) {
      return "Login realizado com sucesso"
    }
    
    return "Falha na autenticação"
  }
  
}

const js = new Usuario("JavaScript", "js", "myPassw0rd!")
console.log(js.login("js", "myPassw0rd!"))
