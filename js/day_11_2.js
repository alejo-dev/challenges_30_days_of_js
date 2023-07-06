// function doTask1Old(callback) {
//   window.setTimeout(() => callback("Task 1"), 300);
// }

// function doTask2Old(callback) {
//   window.setTimeout(() => callback("Task 2"), 300);
// }

// function doTask3Old(callback) {
//   window.setTimeout(() => callback("Task 3"), 300);
// }

// function runCodeOld() {
//   const strings = [];
//   return new Promise((resolve) => {
//     doTask1Old((rta1) => {
//       strings.push(rta1);
//       doTask2Old((rta2) => {
//         strings.push(rta2);
//         doTask3Old((rta3) => {
//           strings.push(rta3);
//           resolve(strings);
//         });
//       });
//     });
//   });
// }

function doTask1() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve("Task 1"), 300);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve("Task 2"), 300);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve("Task 3"), 300);
  });
}

function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1()
      .then((rta1) => {
        strings.push(rta1);
        return doTask2();
      })
      .then((rta2) => {
        strings.push(rta2);
        return doTask3();
      })
      .then((rta3) => {
        strings.push(rta3);
        resolve(strings);
      });
  });
}

runCode()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
