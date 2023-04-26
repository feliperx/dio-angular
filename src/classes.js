class Person {
  //attributes
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //methods
  description() {
    console.log("My name is " + this.name + ", and my age is " + this.age);
  }
}

function whoIsOlder(p1, p2) {
  p1.age > p2.age
    ? console.log(p1.name + ' eh mais velh@ que ' + p2.name)
    : p1.age < p2.age
    ? console.log(p2.name + ' eh mais velh@ que ' + p1.name)
    : console.log(p1.name + ' e ' + p2.name + ' tem a mesma idade');
}

const gustavo = new Person('Gustavo', 33);
const ana = new Person('Ana', 32);

gustavo.description();
ana.description();

whoIsOlder(gustavo,ana);