class Usuario {
  usuarios = ["mario@luigi.com", "peach@apple.com"];

  constructor(email) {
    this.email = email;
  }

  esqueciSenha(email) {
    if (this.usuarios.includes(email)) {
      return EsqueciSenhaUtils.gerarToken(email);
    } else {
      return "E-mail não encontrado";
    }
  }

  validarToken(email, token) {
    return EsqueciSenhaUtils.validarToken(email, token);
  }
}

class EsqueciSenhaUtils {
  static tokenMap = new Map()

  static gerarToken(email) {
    const token = Math.random().toString(36).substring(2, 10)
    this.tokenMap.set(email, token)

    return token
  }

  static validarToken(email, token) {
    const storedToken = this.tokenMap.get(email)
    return storedToken === token
  }
}


const user1 = new Usuario('user.esquecido@cido.com')
const tokenSenha = user1.esqueciSenha('mario@luigi.com')

const tokenEValido = user1.validarToken('mario@luigi.com', tokenSenha)

console.log(tokenEValido)
