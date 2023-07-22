class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = new Array();
  }

  sellTicket(passenger) {
    if (this.passengers.length <= this.capacity && this.capacity !== 0) {
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age,
      });
      this.capacity--;
      passenger.flight = this;
      return new Reservation(this, passenger)
    }
  }
}

class Passenger {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }

  set flight(newFlight) {
    this.flights.push({
      origin: newFlight.origin,
      destination: newFlight.destination,
      date: newFlight.date,
      price: newFlight.price,
    });
  }
}

class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight;
    this.passenger = passenger;
  }

  reservationDetails() {
    // Tu código aquí 👈
    return {
      origin: this.flight.origin,
      destination: this.flight.destination,
      date: this.flight.date,
      reservedBy: `${this.passenger.name} ${this.passenger.lastName}`,
    };
  }
}

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    // Tu código aquí 👈
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    let reservation = super.sellTicket(passenger);
    reservation.flight.price += this.specialService;
    return reservation;
  }
}

class EconomicFlight extends Flight {
  sellTicket(passenger) {
    // Tu código aquí 👇
    let reservation = super.sellTicket(passenger);
    if (reservation.passenger.age < 18 || reservation.passenger.age > 65) {
      reservation.flight.price -= reservation.flight.price * (20 / 100);
    }
    return reservation;
  }
}

// 1
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(passenger.flights);

// 2
const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 0, 1000);
const passenger = new Passenger("Juan", "Perez", 30);

const reservation = flight.sellTicket(passenger);

console.log(flight.passengers);

// 3
// const flight = new EconomicFlight("New York", "Paris", "2023-12-25", 100, 200);

// const passenger = new Passenger("Pedro", "Gutierrez", 17);

// const reservation = flight.sellTicket(passenger);

// console.log(reservation.flight.price);
