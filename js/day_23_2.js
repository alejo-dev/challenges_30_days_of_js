class Newsletter {
  // Tu código aquí 👈
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(email) {
    let indexToRemove = this.subscribers.findIndex((s) => s.email === email);
    this.subscribers.splice(indexToRemove, 1);
  }

  post(article) {
    this.subscribers.forEach((sub) => sub.receive(article));
  }
}

class Subscriber {
  // Tu código aquí 👈
  constructor(email) {
    this.email = email;
  }

  receive(article) {
    console.log(
      `El suscriptor ${this.email} ha recibido el artículo: ${article.title}`
    );
  }
}

const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días",
};

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);

console.log(newsletter.subscribers);
newsletter.unsubscribe("pedro@mail.com");
console.log(newsletter.subscribers);
