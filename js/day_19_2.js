class Pay {
  // Tu código aquí 👈
  constructor() {
    this.realized = true;
    this.quantity = undefined;
  }

  makePay(amountToPay) {
    this.quantity = amountToPay;
    return this;
  }
}

class PayPal extends Pay {
  // Tu código aquí 👈
  constructor(email) {
    super();
    this.email = email;
    this.platform = "PayPal";
  }
}

class Card extends Pay {
  // Tu código aquí 👈
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
    this.lastCardNumbers = undefined;
  }

  makePay(amountToPay) {
    if (this.cardNumber.length === 16) {
      this.lastCardNumbers = this.cardNumber.slice(-4);
      delete this.cardNumber;
      return super.makePay(amountToPay);
    } else {
      throw new Error("El número de la tarjeta debe ser de 16 dígitos");
    }
  }
}

class Cash extends Pay {
  // Tu código aquí 👈
  constructor() {
    super();
  }
}

function processPay(method, quantity) {
  // Tu código aquí 👈
  return method.makePay(quantity);
}

const payPal = new PayPal("adr@mail.com");
const card = new Card("1234567890987654");
const cash = new Cash();
console.log(processPay(payPal, 1000));
console.log(processPay(card, 1000));
console.log(processPay(cash, 1000));
