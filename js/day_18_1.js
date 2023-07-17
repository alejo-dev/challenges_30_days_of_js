class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

class Article extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }
  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
  }
}

class Service extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

class Cart {
  // Tu código aquí 👈
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(product.addToCart());
  }

  deleteProduct(product) {
    this.products = this.products.filter((p) => p.name !== product.name);
  }

  calculateTotal() {
    return this.products.reduce(
      (previous, current) =>
        previous.price * previous.quantity + current.price * current.quantity
    );
  }

  getProducts() {
    return this.products;
  }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
console.log(cart.calculateTotal());
