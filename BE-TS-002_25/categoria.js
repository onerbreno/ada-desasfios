class Categoria {
  constructor(nome) {
    this.nome = nome
  }
}
class Artigo {
  constructor(titulo) {
    this.titulo = titulo
    this.categoria
  }

  setCategoria(categoria) {
    if (!(categoria instanceof Categoria)) {
      throw new Error('Deve ser uma instância de Categoria')
    }

    if (!this.categoria) {
      this.categoria = categoria
    }
  }
}

const categoria = new Categoria("Javascript");
const artigo = new Artigo("Orientação a Objetos");

artigo.setCategoria(categoria)
console.log(categoria.nome)
console.log(artigo.categoria.nome)
console.log(artigo.titulo)