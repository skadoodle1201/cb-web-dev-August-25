console.log("start");
const p = new Promise((resolve, reject) => {
  let a = 3;
  if (a < 20) {
    console.log("before settimeout");
    setTimeout(() => {
      resolve("A is Smaller Than 20");
    }, 200);
  } else {
    reject("A is greater than 20");
  }
});

// console.log(p); // Printing promise and current state of promise

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log("Koi Nahi next time", error);
});

console.log("End");
