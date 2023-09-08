class Post {
  constructor(titulo, dataPublicacao) {
    this.titulo = titulo
    this.dataPublicacao = dataPublicacao
  }
}

class Blog {
  #posts = []

  publicar(post) {
    this.#posts.push(post)
  }

  antigos() {
    return this.#posts.sort((a, b) => a.dataPublicacao - b.dataPublicacao)
  }
  
  novos() {
    return this.#posts.sort((a, b) => b.dataPublicacao - a.dataPublicacao)
  }
}

const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24))
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4))
const blog = new Blog()

blog.publicar(post1)
blog.publicar(post2)

console.log(blog.antigos())

console.log(blog.novos())
