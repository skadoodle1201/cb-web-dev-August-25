const maggieLena = (cb) => {
  console.log("Lekar aao maggie");
  setTimeout(() => {
    console.log("Maggie Le aye");
    cb();
  }, 2000);
};

const maggiecooking = () => {
  console.log("Started Cooking");
  setTimeout(() => {
    console.log("Cooked");
  }, 2000);
};

maggieLena(maggiecooking);
