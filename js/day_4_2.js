function getStudentAverage(students) {
  let studentsWithAverage = students.map((student) => {
    let sum = student.grades.reduce((acum, number) => {
      return acum + number;
    });

    let average = sum / student.grades.length;
    return { name: student.name, average: Number(average.toFixed(2)) };
  });
  let classAverage =
    studentsWithAverage.reduce((acum, currentValue) => {
      return acum + currentValue.average;
    }, 0) / studentsWithAverage.length;

  return {
    classAverage: Number(classAverage.toFixed(2)),
    students: studentsWithAverage,
  };
}

let students = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];
document.write(JSON.stringify(getStudentAverage(students)));

// Output: {
//   classAverage: 88.17,
//   students: [
//     {
//       name: "Pedro",
//       average: 88.75
//     },
//     {
//       name: "Jose",
//       average: 88.5
//     },
//     {
//       name: "Maria",
//       average: 87.25
//     }
//   ]
// }
