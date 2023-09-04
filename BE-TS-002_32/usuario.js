class Usuario {
  #senhas = []

  constructor(senhaInicial) {
    this.#senhas.push(senhaInicial)
  }

  alterarSenha(novaSenha) {
    if (this.#senhas.slice(-3).includes(novaSenha)) {
      return "Senha não pode ser igual às três últimas utilizadas"
    }

    this.#senhas.push(novaSenha)
    return "Senha alterada com sucesso"
  }
}

const usuario = new Usuario("senha1")

console.log(usuario.alterarSenha("senha2")) 
console.log(usuario.alterarSenha("senha2"))
console.log(usuario.alterarSenha("senha3")) 
console.log(usuario.alterarSenha("senha1"))
console.log(usuario.alterarSenha("senha4"))
console.log(usuario.alterarSenha("senha1"))
