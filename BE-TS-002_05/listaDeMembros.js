class ListaDeMembros {
  membros = []

  // constructor() {
  //   this.membros = []
  // }

  adicionar(nome) {
    this.membros.push(nome)
  }

  contar() {
    return this.membros.length
  }
}

const lista1 = new ListaDeMembros()

lista1.adicionar('Breno')
lista1.adicionar('Tim')
console.log(lista1.contar())