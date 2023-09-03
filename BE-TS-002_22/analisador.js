// Crie uma classe nomeada `Analisador` com os seguintes métodos `adicionar(name, email)` e `converterParaObjeto()`

// O método `converterParaObjeto` irá retornar um objeto com o `name` e `email` que foi adicionado.

// exemplo de uso


class Analisador {
  #usuario = new Map()
  adicionar(nome, email) {
    this.#usuario.set("email", email,)
    this.#usuario.set("nome", nome,)
  }
  converterParaObjeto() {
    return Object.fromEntries(this.#usuario.entries())
  }
}

const analisador = new Analisador();
analisador.adicionar("João", "joao@email.com")
console.log(analisador.converterParaObjeto())
