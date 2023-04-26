const person = {
  name: 'Ana',
  age: 35,
  height: 1.75,
  status: () => {
    console.log('I\'m Fine.')
  }
};

console.log(person);

person.description = function() {
  console.log(
    'My name is ' +
      this.name +
      ',\nmy age is ' +
      this.age +
      ',\nmy height is ' +
      this.height
  );
};

person.status();
person.description();

console.log(person['age']);
console.log(person.age);
