class Person {
  name;
  peso;
  altura;

  constructor(name, peso, altura) {
    this.name = name;
    this.peso = peso;
    this.altura = altura;
  }

  imcCalculator() {
    const imc = this.peso / (this.altura * this.altura);
    return imc;
  }

  showImc() {
    console.log(
      `Meu nome eh ${this.name} e meu IMC eh ${this.imcCalculator()}`
    );
  }

  categoryImc() {
    const imc = this.imcCalculator();
    let category = '';

    imc <= 18.5
      ? category = "Abaixo do Peso"
      : imc > 18.5 && imc < 25
      ? category = "Peso Normal"
      : imc >= 25 && imc < 30
      ? category = "Sobrepeso"
      : imc >= 30 && imc < 35
      ? category = "Obesidade grau I"
      : imc >= 35 && imc < 40
      ? category ="Obesidade grau II"
      : category = "Obesidade grau III";

      return category;
  }

  showCategoryImc() {
    console.log(
      `Meu nome eh ${this.name} e minha classificacao no IMC eh: ${this.categoryImc()}`
    );
  }
}

const jose = new Person("Jose", 70, 1.7);
const felipe = new Person("Felipe", 77, 1.77);

jose.showImc();
felipe.showImc();

jose.showCategoryImc();
felipe.showCategoryImc();
