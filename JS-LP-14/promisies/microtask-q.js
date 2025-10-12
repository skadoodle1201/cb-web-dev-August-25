setTimeout(() => {
  console.log("Inside Set Time Out");
}, 0);

Promise.resolve("I am Promise")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Koi Nahi next time", error);
  });
