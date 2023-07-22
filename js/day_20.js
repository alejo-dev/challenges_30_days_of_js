class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = new Array();
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    // const currentCapacity = passengers.reduce(
    //   (pre, act, currentIndex, array) => {
    //     if (act) {
    //       pre++;
    //     }
    //     return array.length - pre;
    //   },
    //   0
    // );

    if (this.passengers.length <= this.capacity) {
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age,
      });
      passenger.flight = this;
      return { Flight: this, Passenger: passenger };
    }
  }
}

class Passenger {
  // Tu código aquí 👈
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

// 1
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(passenger.flights);

// 2
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(flight.passengers);

// 3
const flight = new EconomicFlight("New York", "Paris", "2023-12-25", 100, 200);

const passenger = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price);
