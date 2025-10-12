function factorial(n) {
  let c = 1;
  for (let i = 1; i <= n; i++) {
    c = c * i;
  }

  return c;
}

function memoize(callbackFn) {
  const memoizedResults = {};

  return function memoizedFn(v) {
    for (const key in memoizedResults) {
      console.log("key", key, "----", "value", memoizedResults[key]);
    }
    if (memoizedResults[v]) {
      return memoizedResults[v];
    }
    const results = callbackFn(v);
    memoizedResults[v] = results;
    return results;
  };
}

const memoziedFactorial = memoize(factorial);
console.log("Fact of 5 1st call", memoziedFactorial(5));

memoziedFactorial(1);
memoziedFactorial(6);
memoziedFactorial(8);
memoziedFactorial(10);
memoziedFactorial(9);

console.log("Fact of 5 2nd call", memoziedFactorial(5));
