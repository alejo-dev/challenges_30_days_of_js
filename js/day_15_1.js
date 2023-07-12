function hotelSystem(rooms) {
  // Tu código aquí
  let reservations = [];

  return {
    searchReservation(id) {
      const foundReservation = reservations.find(
        (reservation) => reservation.id === id
      );
      if (!foundReservation) {
        throw new Error("La reservación no fue encontrada");
      }
      return foundReservation;
    },
    getSortReservations: () => {
      return [...reservations].sort(
        (a, b) =>
          new Date(a.checkIn + "/" + new Date().getFullYear()) -
          new Date(b.checkIn + "/" + new Date().getFullYear())
      );
    },
    addReservation: (reservation) => {
      let searchRoom = reservations.find((res) => {
        let createdCheckin = new Date(
          res.checkIn + "/" + new Date().getFullYear()
        );
        let createdCheckout = new Date(
          res.checkOut + "/" + new Date().getFullYear()
        );
        let resCheckin = new Date(
          reservation.checkIn + "/" + new Date().getFullYear()
        );
        let resCheckout = new Date(
          reservation.checkOut + "/" + new Date().getFullYear()
        );

        return (
          ((resCheckin >= createdCheckin && resCheckin < createdCheckout) ||
            (resCheckout > createdCheckin && resCheckout <= createdCheckout) ||
            (resCheckin <= createdCheckin && resCheckout >= createdCheckout)) &&
          reservation.roomNumber === res.roomNumber
        );
      });
      if (searchRoom) {
        throw new Error("La habitación no está disponible");
      }
      reservations.push(reservation);
      return "La reservación fue agregada";
    },
    getReservations: () => reservations,
    removeReservation: (id) => {
      let reservationToDel = reservations.find((res) => res.id === id);
      if (!reservationToDel) {
        throw new Error("La reservación que se busca remover no existe");
      }
      reservations = reservations.filter((res) => res.id !== id);
      return reservationToDel;
    },
    getAvailableRooms: (checkIn, checkOut) => {
      let availables = [];
      for (let i = 1; i <= rooms; i++) {
        const reservation = reservations.find((res) => res.roomNumber === i);
        if (!reservation) {
          availables.push(i);
        } else {
          let createdCheckin = new Date(
            reservation.checkIn + "/" + new Date().getFullYear()
          );
          let createdCheckout = new Date(
            reservation.checkOut + "/" + new Date().getFullYear()
          );
          let resCheckin = new Date(checkIn + "/" + new Date().getFullYear());
          let resCheckout = new Date(checkOut + "/" + new Date().getFullYear());

          let isNotAvailable =
            (resCheckin.valueOf() >= createdCheckin.valueOf() &&
              resCheckin.valueOf() <= createdCheckout.valueOf()) ||
            (resCheckout.valueOf() >= createdCheckin.valueOf() &&
              resCheckout.valueOf() <= createdCheckout.valueOf());

          if (!isNotAvailable) {
            availables.push(i);
          }
        }
      }
      return availables;
    },
  };
}

// Ejemplo 1:

// Input:

// const hotel = hotelSystem(10);

// // Agregar una nueva reservación
// hotel.addReservation({
//   id: 1,
//   name: "John Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 1,
// });

// console.log(hotel.getReservations());

// Output:
// [
//   {
//     id: 1,
//     name: "John Doe",
//     checkIn: "01/01",
//     checkOut: "02/01",
//     roomNumber: 1,
//   }
// ]
////////////////////////////////////////////////////////////
// Ejemplo 2:
// const hotel = hotelSystem(10);

// hotel.addReservation({
//   id: 1,
//   name: "John Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 1,
// });

// hotel.addReservation({
//   id: 2,
//   name: "Pepe Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 7,
// });

// // Buscar una resevación hecha
// console.log(hotel.searchReservation(2));

// Output:
// {
//   id: 2,
//   name: "Pepe Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 7,
// }
////////////////////////////////////////////////////////////
// Ejemplo 3:
const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
console.log(hotel.getAvailableRooms("01/01", "05/01"));

// Output:

// [2, 3, 4, 5, 6, 7, 8, 10]

////////////////////////////////////////////////////////////
