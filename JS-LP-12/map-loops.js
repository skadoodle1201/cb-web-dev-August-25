let ages = [18, 20, 5, 10, 15, 16];

const plus18 = ages.map((age, i) => {
  if (age >= 18) {
    return `Can Vote: ID : ${i}`;
  }
  return `Cannot Vote: ID : ${i}`;
});

// for of

for (let age of ages) {
  console.log(age);
}

let userObject = {
  username: "abcKumar",
  Name: "Tanish",
  Address: "Pritampura",
  Profession: "SDE",
};

// for in loop
for (let key in userObject) {
  console.log(key, userObject[key]);
}

//Works on arrays as key becomes index but not a good practice
for (let key in ages) {
  console.log(key, ages[key]);
}
