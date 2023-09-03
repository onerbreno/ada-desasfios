class Empresa {
  listaDeEmpregados = [
    {
      nome: "João Silva",
      salario: 1500,
    },
    {
      nome: "Maria José",
      salario: 2500,
    },
    {
      nome: "Simplício Simplório",
      salario: 2400,
    },
    {
      nome: "Mario João",
      salario: 2100,
    },
  ];

  mediaSalarial() {
    return Relatorio.mediaSalarial(this.listaDeEmpregados);
  }

  menorSalario() {
    return Relatorio.menorSalario(this.listaDeEmpregados);
  }
  maiorSalario() {
    return Relatorio.maiorSalario(this.listaDeEmpregados);
  }
}

class Relatorio {
  static mediaSalarial(listaDeEmpregados) {
    const totalSalarios = listaDeEmpregados.reduce((media, empregado) => media += empregado.salario, 0)

    return totalSalarios / listaDeEmpregados.length

  }
  static menorSalario(listaDeEmpregados) {
    return listaDeEmpregados.reduce((empregadoMenorSalario, empregadoAtual) => {


      empregadoMenorSalario = empregadoMenorSalario.salario < empregadoAtual.salario
        ? empregadoMenorSalario
        : empregadoAtual

      return empregadoMenorSalario
    })
  }
  static maiorSalario(listaDeEmpregados) {
    return listaDeEmpregados.reduce((empregadoMaiorSalario, empregadoAtual) => {


      empregadoMaiorSalario = empregadoMaiorSalario.salario > empregadoAtual.salario
        ? empregadoMaiorSalario
        : empregadoAtual

      return empregadoMaiorSalario
    })
  }
}

const empresa1 = new Empresa()

console.log(empresa1.mediaSalarial())
console.log(empresa1.maiorSalario())
console.log(empresa1.menorSalario())

