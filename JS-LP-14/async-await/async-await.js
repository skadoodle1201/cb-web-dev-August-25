const p = new Promise((resolve, reject) => {
  console.log("Inside promise");
  resolve(100);
});

async function countTo10() {
  let result;

  await p.then((res) => {
    console.log("inside then");
    result = res;
  });

  return result;
}

(async () => {
  const res = await countTo10();
  console.log(res);
})();
