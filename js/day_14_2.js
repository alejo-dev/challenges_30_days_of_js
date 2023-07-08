function sortByAvailabilityAndPrice(products) {
  // Tu código aquí 👈
  let newProducts = [...products];
  return newProducts
    .sort((a, b) => a.price - b.price)
    .sort((a, b) => b.inStock - a.inStock);
}

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
];

console.log(sortByAvailabilityAndPrice(products));
console.log(products);

// Output: [
//   { name: "product1", price: 10, inStock: true },
//   { name: "product3", price: 15, inStock: true },
//   { name: "product4", price: 5, inStock: false },
//   { name: "product2", price: 20, inStock: false },
// ];
