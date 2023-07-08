function searchValue(array, value) {
  // Tu código aquí 👈
  if (!array.flat().find((val) => val === value)) {
    throw new Error("Valor no encontrado");
  }

  let row = array.findIndex((val) => val.includes(value));
  let column = array[row].findIndex((val) => val === value);

  return {
    row,
    column,
  };
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const value = 8;

console.log(searchValue(array, value));
