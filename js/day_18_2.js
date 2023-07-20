class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  addFriend(friend) {
    this._friends.push(friend);
  }

  set message(message) {
    this._messages.push(message);
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend.message = message;
  }

  showMessages() {
    return this._messages;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    this._age = newAge;
  }

  get age() {
    return this._age;
  }
}

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

console.log(usuario2.showMessages());

// const usuario1 = new User("Juan", 20);
// console.log(usuario1);
// usuario1.name = "Pepito";
// console.log(usuario1.name);
