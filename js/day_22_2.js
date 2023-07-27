class CarBuilder {
  // Tu código aquí 👇
  constructor() {
    this.year = undefined;
    this.model = undefined;
    this.brand = undefined;
    this.color = undefined;
    this.price = undefined;
    this.isAvailable = undefined;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setIsAvailable(isAvailable) {
    this.isAvailable = isAvailable;
    return this;
  }

  build() {
    return this;
  }
}
