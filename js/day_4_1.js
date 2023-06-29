// Day 4 - Challenge 1
function findFamousCats(cats) {
  let newCatsList = cats.map((cat) => {
    let sumFollowers = cat.followers.reduce((acum, num) => acum + num);
    return { name: cat.name, followers: sumFollowers };
  });

  let onlyFollowers = newCatsList.map((cat) => cat.followers);

  let catsResult = newCatsList.filter(
    (cat) => cat.followers == Math.max(...onlyFollowers)
  );
  return catsResult.map((cat) => cat.name);
}

let cats = [
  {
    name: "Luna",
    followers: [500, 200, 300],
  },
  {
    name: "Michi",
    followers: [100, 300],
  },
  {
    name: "Nico",
    followers: [500, 400, 100],
  },
];

document.write(findFamousCats(cats));
