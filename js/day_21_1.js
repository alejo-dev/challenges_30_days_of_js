class Chat {
  // Tu código aquí 👈
  static instance = undefined;

  constructor(version) {
    this.users = [];
    this.version = version;
    if (!Chat.instance) {
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }

  sendMessage(message) {
    this.users.forEach((user) => user.receiveMessage(message));
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    const userIndex = this.users.findIndex((user) => user.name === name);
    this.users.splice(userIndex, 1);
  }
}

class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

// const chat2 = new Chat();
// const chat1 = new Chat();
// console.log(chat1 === chat2);

// Input:

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);
chat.addUser(Object.create({ name: "jose" }));

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages);
console.log(user2.messages);

console.log(chat.users);
chat.removeUser("Juanito");
console.log(chat.users);

// Output:
// ["Nunca pares de aprender!"]
// ["Nunca pares de aprender!"]
