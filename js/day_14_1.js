"use strict";
function processShoppingList(list) {
  // Tu código aquí 👈
  for (let record in list) {
    if (list[record].name.includes("oferta")) {
      list[record].price -= list[record].price * (20 / 100);
    }
    list[record].price = list[record].price * list[record].quantity;
    delete list[record].quantity;
  }

  return list.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
}

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
];

console.log(processShoppingList(shoppingList));
console.log(shoppingList);
