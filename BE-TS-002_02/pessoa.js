class UtilsString {
  static capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
}

class Pessoa {
  constructor(nome, sobreNome) {
    this.nome = UtilsString.capitalizeString(nome)
    this.sobreNome = UtilsString.capitalizeString(sobreNome)
  }

  nomeCompleto() {
    return `${this.nome} ${this.sobreNome}`
  }
}

const pessoa1 = new Pessoa('João', 'ninguém')
console.log(pessoa1.nomeCompleto())