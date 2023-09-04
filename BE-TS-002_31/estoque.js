class Estoque {
  #produtos = []

  buscarIndexProduto(nome) {
    return this.#produtos.findIndex(produto => produto.nome === nome)
  }

  adicionar(nome, quantidadeItem) {
    const indexProduto = this.buscarIndexProduto(nome)
    const produtoExiste = indexProduto !== -1

    if (!produtoExiste) {
      this.#produtos.push({
        nome,
        quantidade: quantidadeItem
      })

      return 'Produto novo adicionado'
    }

    this.#produtos[indexProduto].quantidade += quantidadeItem

    return quantidadeItem === 1 ? `${quantidadeItem} item foi adicionado` : `${quantidadeItem} items foram adicionados`

  }

  remover(nome, quantidadeParaRemover) {
    const indexProduto = this.buscarIndexProduto(nome)
    const produtoExiste = indexProduto !== -1
    const quantidadeProduto = this.#produtos[indexProduto]?.quantidade
    if (!produtoExiste && !quantidadeProduto) {
      return 'Produto não encontrado'
    }

    if (quantidadeParaRemover > quantidadeProduto) {
      return 'Não há quantidade suficiente para remoção'
    }

    this.#produtos[indexProduto].quantidade -= quantidadeParaRemover
    return `${quantidadeParaRemover} item(s) removido(s)`
  }

  listar() {
    return this.#produtos
  }
}

const estoque = new Estoque()

console.log(estoque.adicionar("Uva", 1))
console.log(estoque.adicionar("Uva", 2))
console.log(estoque.listar())
console.log(estoque.remover("Uva", 3))
console.log(estoque.listar())
console.log(estoque.remover("Uva", 1))
console.log(estoque.remover("Laranja", 1))