function protectDog(dog) {
  // Tu código aquí 👈
  let newDog = Object.assign({}, dog);
  Object.freeze(newDog);
  for (let prop in newDog) {
    if (typeof newDog[prop] === "object") {
      Object.freeze(newDog[prop]);
    }
  }
  return newDog;
}

let dog = protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
});

dog.name = "jose";
dog.owner.name = "alejo";

console.log(dog);
