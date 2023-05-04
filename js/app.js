class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licence, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licence = licence;
    if(owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log(`the car owner may not be under 18 y.o`);
    }
  }

  getInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Licence: ${this.licence}`);
    console.log(`Information of owner ${this.owner.getInfo()}`);
  }
}

