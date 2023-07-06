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

async function runCode() {
  const strings = [];
  const rta1 = await doTask1();
  strings.push(rta1);
  const rta2 = await doTask2();
  strings.push(rta2);
  const rta3 = await doTask3();
  strings.push(rta3);
  return strings;
}

runCode().then((result = console.log));
