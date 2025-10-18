const p = new Promise((res, rej) => {
  const shouldResolve = true;

  if (shouldResolve) {
    setTimeout(() => {
      res("SUCCESS");
    }, 2000);
  } else {
    setTimeout(() => {
      rej("FAILED");
    }, 4000);
  }
});

p.then((result) => {
  console.log(result);
  throw Error("FAILED");
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("IN CATCH::", err);
  });
