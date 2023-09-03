class UtilsString {
  static capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
}

class Pessoa {
  constructor(name, age) {
    this.name = UtilsString.capitalizeString(name)
    this.age = age
  }

  sobre() {
    return `${this.name} tem ${this.age} anos`
  }

}

const pessoa1 = new Pessoa('João', 18)
console.log(pessoa1.sobre())