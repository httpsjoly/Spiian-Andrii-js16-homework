class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Name owner: ${this.name}, Age: ${this.age}`);
  }
}


class Car{
  constructor(brand, model, year, licence, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licence = licence;
    this.owner = owner;
  }

  getInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Licence: ${this.licence}`);
    if (this.owner.age >= 18) {
      console.log(`Information about owner: `);
      this.owner.getInfo();
    } else {
      console.log(`Owner ${this.owner.name} is not 18 years old, information is not available`);
    }
  }
  }

//Вариант 1
    // if(owner.age >= 18) {
    //   this.owner = owner;
    // } else {
    //   throw new Error(`The car owner ${owner.name} may not be under 18 y.o`);
    //   console.log('-------------');
    // }

//Вариант 2
  //   if(owner.age < 18) {
  //     throw new Error(`He car owner ${owner.name} may not be under 18 y.o`);
  //   }
  //   this.owner = owner;
 
  
//Вариант 3
    // if (this.owner.age >= 18) {
    //   console.log(`Information about owner: `);
    //   this.owner.getInfo();
    // } else {
    //   console.log(`Owner is not 18 years old, information is not available`);
    // }
  

//Вариант 4
  // getInfo() {
  //   console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Licence: ${this.licence}`);
  //   console.log(`Information about of owner: `);
  //   this.owner.getInfo();
  // }

let people1 = new People("Nastya", 18);
let people2 = new People("Andrii", 25);
let people3 = new People("Denis", 19);
let people4 = new People("Nikita", 18);

let car1 = new Car("Audi", "RS6", 2022, "ВН7777ВК", people1);
let car2 = new Car("Mercedes", "E63 AMG", 2020, "ВН0000АК", people2);
let car3 = new Car("Toyota", "Camry", 2016, "АА3917ВЕ", people3);
let car4 = new Car("Renault", "Megane", 2018, "АА3917МС", people4);


car1.getInfo();
console.log('-------------');
car2.getInfo();
console.log('-------------');
car3.getInfo();
console.log('-------------');
car4.getInfo();


