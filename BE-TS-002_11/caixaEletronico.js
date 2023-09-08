class Extrato {
  #extrato = []

  transacao(tipoTransacao, valor) {
    // const novaTransacao = {}
    // novaTransacao[tipoTransacao] = valor

    const novaTransacao = {
      [tipoTransacao]: valor
    }

    this.#extrato.push(novaTransacao)
  }

  relatorio() {
    console.log(this.#extrato)
  }

}

class CaixaEletronico extends Extrato {
  saldo = 0;

  depositar(value) {
    this.saldo += Number(value);
    this.transacao("C", value);
  }

  retirar(value) {
    this.saldo -= Number(value);
    this.transacao("D", value);
  }

  extrato() {
    this.relatorio();
  }
}

const caixa1 = new CaixaEletronico()

caixa1.depositar(100)
caixa1.retirar(100)
caixa1.extrato()

// Crie uma classe `Extrato` com os métodos `transacao` e `relatorio` que atenda o uso da classe acima.

// O método transacao aceita dois parâmetros: `tipo` e `valor`, `C` para crédito em conta e `D` para débito em conta.

// O método relatório deve ter o seguinte retorno similar a: `[{ C: 100 }, { C: 200 }, { D: 200 }]`
