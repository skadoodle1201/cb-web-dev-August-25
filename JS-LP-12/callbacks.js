//Callbacks are functions that are passed to another function as parameter
function executeMyFunction(callback) {
  callback();
}

const helloWorld = () => {
  console.log("Hello World");
};

executeMyFunction(helloWorld);

const forEachFunction = (value, index) => {
  console.log(value, " ----- ", index);
};

function customForEach(callback) {
  let ages = [10, 25, 15];
  for (let index in ages) {
    callback(ages[index], index);
  }
}

customForEach(forEachFunction);
