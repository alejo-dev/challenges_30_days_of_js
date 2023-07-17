function arrayModified() {
  // Tu código aquí 👈
  Array.prototype.myFilter = function (callback) {
    const outputArray = [];
    console.log(this);
    for (const i of this) {
      if (callback(i)) {
        outputArray.push(i);
      }
    }
    return outputArray;
  };

  let my = [1, 2, 3, 4, 5, 6];
  console.log(my.myFilter((i) => i <= 4));
}

arrayModified();
