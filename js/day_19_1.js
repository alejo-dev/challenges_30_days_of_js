class Animal {
  // Tu código aquí 👈
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }

  getInfo() {
    return this;
  }
}

class Mammal extends Animal {
  // Tu código aquí 👈
  constructor(name, age, specie, hasFur) {
    super(name, age, specie);
    this.hasFur = hasFur;
  }

  getInfo() {
    return this;
  }
}

class Dog extends Mammal {
  // Tu código aquí 👈
  constructor(name, age, breed, hasFur) {
    super(name, age, "dog", hasFur);
    this.breed = breed;
  }

  getInfo() {
    return this;
  }

  bark() {
    return "woof!";
  }
}

// const bird = new Animal("pepe", 1, "bird");
// console.log(bird.getInfo());

// const hippo = new Mammal("bartolo", 3, "hippo", false);
// console.log(hippo.getInfo());

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.getInfo());
console.log(dog.bark());
