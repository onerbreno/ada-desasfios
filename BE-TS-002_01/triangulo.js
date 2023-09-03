class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  tipo() {
    if (!this.trianguloEValido()) {
      return "Inválido";
    }

    if (this.saoTodosLadosIguais()) {
      return "Equilátero";
    } if (this.saoDoisLadosIguais()) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

  trianguloEValido() {
    const ladosOrdenados = Object.values(this).sort((a, b) => a - b);
    const [a, b, c] = ladosOrdenados;
    
    console.log(ladosOrdenados);

    return a + b > c;
  }

  saoTodosLadosIguais() {
    return this.lado1 === this.lado2 && this.lado2 === this.lado3;
  }

  saoDoisLadosIguais() {
    return (
      this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3
    );
  }
}

const triangulo1 = new Triangulo(5, 5, 5);
console.log(triangulo1.tipo());

const triangulo2 = new Triangulo(3, 3, 5);
console.log(triangulo2.tipo());

const triangulo4 = new Triangulo(3, 4, 5);
console.log(triangulo4.tipo());

const triangulo3 = new Triangulo(1, 1, 5);
console.log(triangulo3.tipo());

