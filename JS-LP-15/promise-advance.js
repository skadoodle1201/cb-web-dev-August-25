const returnBookPromise = () => {
  console.log("Started booking");
  return new Promise((res, rej) => {
    //JUST TO MIMIC A API CALL TO BANK
    setTimeout(() => {
      console.log("TRANSACTION SUCCESS FROM BANK");
      res("SUCCESS");
    }, 1000);
  });
};

const irctcPromise = returnBookPromise();

irctcPromise
  .then((result) => {
    if (result == "SUCCESS") console.log("Money Deducted");
  })
  .then(() => {
    return setTimeout(() => {
      console.log("IRCTC BOOKING CONFRIM");
      console.log("SUCCESS FROM IRCTC");
    }, 3000);
  });
