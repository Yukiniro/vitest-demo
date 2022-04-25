function sayHello() {
  return "Hello World";
}

function sum(a: number, b: number): number {
  return a + b;
}

class Person {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export { sayHello, sum, Person };
