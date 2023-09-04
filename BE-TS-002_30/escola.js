class Aluno {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}

class Professor {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}

class Escola {
  pessoas = [];

  add(pessoa) {
    this.pessoas.push(pessoa);
  }

  listarProfessores() {
    return UtilsFiltrar.porTipoDeClasse(this.pessoas, Professor);
  }

  listarAlunos() {
    return UtilsFiltrar.porTipoDeClasse(this.pessoas, Aluno);
  }
}

class UtilsFiltrar {
  static porTipoDeClasse(lista, tipoDeClasse) {
    return lista.filter(item => item instanceof tipoDeClasse)
  }
}

const escola = new Escola();
escola.add(new Professor("João Prof"));
escola.add(new Professor("Maria Profa"));
escola.add(new Aluno("João"));
escola.add(new Aluno("Maria"));

console.log(escola.listarProfessores())
console.log(escola.listarAlunos())
