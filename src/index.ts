function sayHello() {
  return "Hello World";
}

function isNumber(value) {
  return typeof value === "number" && value === value;
}

function sum(a: number, b: number): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("Argument must be number");
  }
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
