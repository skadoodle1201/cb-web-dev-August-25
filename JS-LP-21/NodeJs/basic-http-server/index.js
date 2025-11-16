const express = require("express"); // Bring express function to my code
const app = express(); //excute express function to get a application instance

const fs = require("fs/promises");

app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await fs.appendFile("dummyFile.txt", "New File", { flag: "w" });
});
