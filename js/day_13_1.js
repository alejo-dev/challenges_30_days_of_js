function groupProducts(products, category) {
  // Tu código aquí
  let filterdProducts = products.filter(
    (product) => product.category === category
  );

  let totalPrice = filterdProducts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  return {
    products: filterdProducts.map((product) => product.name).join(", "),
    totalPrice: totalPrice,
  };
}

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Clothing"));
