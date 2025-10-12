console.log("Start");

setTimeout(() => {
  console.log("In settimeout");
}, 1000);

for (let i = 0; i < 1000000; i++) {
  console.log(i);
}
console.log("END");
