// day 3
function printTriangle(size, character) {
  let triangle = "";
  for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= size - i; j++) {
      line = line + " ";
    }
    for (let k = 1; k <= i; k++) {
      line = line + character;
    }
    if (i < size) {
      line = line + "\n";
    }
    triangle = triangle + line;
  }
  return triangle;
}

document.write("<pre>" + printTriangle(16, "M") + "<pre>");
