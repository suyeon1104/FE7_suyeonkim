function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sucoding = "잘생김";
  Person.prototype.greet = function () {
    return `Hi1`;
  };
  const p = new Person("kim", 20);
  console.log(p.sucoding);
  console.log(p.greet());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi`;
  }
}
Person.prototype.sucoding = "잘생김";
// Person.prototype.greet = function () {
//   return `Hi1`;
// };

const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);

console.log(per1);
console.dir(per1.sucoding);
console.log(per1.sucoding, per2.sucoding, Person.prototype.sucoding); // 잘생김 잘생김 잘생김
console.log(Object.keys(per1), Object.keys(per2), Reflect.ownKeys(Person.prototype));
per1.sucoding = 1;
console.log(per1.sucoding, per2.sucoding, Person.prototype.sucoding); // 1 잘생김 잘생김
console.log(Object.keys(per1), Object.keys(per2), Reflect.ownKeys(Person.prototype));
per2.sucoding = 2;
console.log(per1.sucoding, per2.sucoding, Person.prototype.sucoding); // 1 2 잘생김
console.log(Object.keys(per1), Object.keys(per2), Reflect.ownKeys(Person.prototype));

delete per1.sucoding;
console.log(per1.sucoding);
