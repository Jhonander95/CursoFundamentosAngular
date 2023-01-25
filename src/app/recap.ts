const username = 'nicobytes';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 8);

class Person {
/*   age: number;
  lastName: string; */

  constructor(public age: number, public lastName: string){
/*     this.age = age;
    this.lastName = lastName; */
  }
}

const nico = new Person(15, 'Tellez');
