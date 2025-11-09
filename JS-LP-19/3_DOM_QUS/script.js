//a number is divisble by 3 we have print fizz
//a number is divisble by 5 we have print buzz
//a number is divisible by 3 & 5 we have print fizzbuzz
//NONE OF THE ABOVE PRINT NUMBER

const fizzList = document.getElementById("FizzList");

for (let i = 1; i <= 1000; i++) {
  let str = "";
  if (i % 3 == 0) str = "fizz";
  if (i % 5 == 0) str += "buzz";

  const listItem = document.createElement("li");
  listItem.innerText = str == "" ? i : str;
  fizzList.append(listItem);
}

//DO NOT DO THIS AS IT OVERWRITES AND RE RENDERS
// for (let i = 1; i <= 1000; i++) {
//   let str = "";
//   if (i % 3 == 0) str = "fizz";
//   if (i % 5 == 0) str += "buzz";

//   const fizzAns = str == "" ? i : str;

//   fizzList.innerHTML += `<li>${fizzAns}</li>`;
// }
